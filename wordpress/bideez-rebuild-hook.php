<?php
/**
 * Plugin Name: Bideez Rebuild Hook
 * Description: Asks Vercel to rebuild the Bideez website when a blog post is published, updated, unpublished or deleted.
 * Version: 1.0.0
 *
 * INSTALL (not done yet; see docs/BLOG.md):
 *   1. Copy this file to wp-content/mu-plugins/bideez-rebuild-hook.php on the WordPress site.
 *   2. Add this line to wp-config.php, using the Deploy Hook URL created in Vercel (Project > Settings > Git > Deploy Hooks):
 *        define( 'BIDEEZ_DEPLOY_HOOK_URL', 'https://api.vercel.com/v1/integrations/deploy/...' );
 *      Never commit that URL to GitHub: anyone who has it can trigger builds.
 *
 * Until BIDEEZ_DEPLOY_HOOK_URL is defined this plugin does nothing.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function bideez_trigger_rebuild( $reason ) {
	if ( ! defined( 'BIDEEZ_DEPLOY_HOOK_URL' ) || ! BIDEEZ_DEPLOY_HOOK_URL ) {
		return;
	}
	// Editors save often (autosave, quick edits). Collapse bursts into one rebuild request.
	if ( get_transient( 'bideez_rebuild_lock' ) ) {
		return;
	}
	set_transient( 'bideez_rebuild_lock', $reason, 20 );

	wp_remote_post(
		BIDEEZ_DEPLOY_HOOK_URL,
		array(
			'timeout'  => 5,
			'blocking' => false, // do not slow down the editor
			'body'     => array(),
		)
	);
}

// A post becomes public, stops being public, or a public post is edited.
add_action(
	'transition_post_status',
	function ( $new_status, $old_status, $post ) {
		if ( 'post' !== $post->post_type || wp_is_post_revision( $post ) || wp_is_post_autosave( $post ) ) {
			return;
		}
		if ( 'publish' === $new_status || 'publish' === $old_status ) {
			bideez_trigger_rebuild( "post {$post->ID}: {$old_status} -> {$new_status}" );
		}
	},
	10,
	3
);

// Permanent deletion of a published post.
add_action(
	'before_delete_post',
	function ( $post_id ) {
		$post = get_post( $post_id );
		if ( $post && 'post' === $post->post_type && 'publish' === $post->post_status ) {
			bideez_trigger_rebuild( "post {$post_id}: deleted" );
		}
	}
);

// Category renamed or changed: the blog filter shows category names.
add_action(
	'edited_category',
	function () {
		bideez_trigger_rebuild( 'category edited' );
	}
);
