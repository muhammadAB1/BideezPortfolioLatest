# Blog (WordPress → static pages)

WordPress is the only source of blog content. Posts are fetched **at build time** by `scripts/fetch-wp.mjs`
and turned into static HTML by `scripts/postbuild.mjs`. The browser never calls WordPress (its API sends no CORS headers).

```
npm run build
  └─ prebuild  → scripts/fetch-wp.mjs   WordPress REST API → src/generated/ (git-ignored)
  └─ vite build                          React app (reads src/generated)
  └─ postbuild → scripts/postbuild.mjs   /blog and /blog/<slug> HTML, SEO tags, JSON-LD, sitemap.xml
```

## What appears on the site
- Only **published** posts. In Production a post must also have **a category other than "Uncategorized"**.
- **Test posts are the ones tagged `test`** in WordPress (the tag slug must be exactly `test`). They are shown in local development and Vercel Preview (marked `noindex`, left out of the sitemap) and **always hidden in Vercel Production** (`VERCEL_ENV=production`): no listing entry, no article page, no sitemap entry. Post titles are never used to decide this, so "A/B Testing Your Google Ads" is a normal article.
- Posts with no category (other than "Uncategorized") are also held back in Production.
- Category chips come from WordPress. Preferred order: Upwork, Lead Generation, Digital Marketing, Business Growth.
  A missing category only logs a warning; it appears once it exists and a post uses it.
- Article URL = `https://bideez.org/blog/<WordPress slug>`. The WordPress `link` field is never used.
- Featured image = WordPress Media Library URL (used as is, e.g. Vercel Blob). No featured image → first image in the
  article → branded fallback cover. Social previews fall back to `/og-default.png`.

## Before launch
1. **Delete the WordPress test posts** ("Tets Post 1", "Hello world!", the lead-generation test article), or keep them tagged `test` (see below).
2. Create the four categories (Upwork, Lead Generation, Digital Marketing, Business Growth) and assign posts to them.
3. Upload a featured image to a real post and confirm it loads from the Media Library (Blob) URL.
4. Add the rebuild hook (below).

## How to tag a test post
1. WordPress admin → Posts → Tags: add a tag named `test` and check its slug is exactly `test`.
2. Edit the post → Tags box (right sidebar) → choose `test` → Update. (Bulk: Posts → tick posts → Bulk actions: Edit → Tags.)
3. Rebuild. In Production the post disappears from the blog; in Preview it still shows.

## Tests
`npm test` runs unit tests for the rule (`scripts/blog-rules.test.mjs`) and an end-to-end test of the fetch script against a fake WordPress (`scripts/fetch-wp.test.mjs`).

## If WordPress is down during a build
The build **fails** with an actionable message. Vercel keeps serving the previous deployment, so the live site is unaffected.
Nothing outdated or fake is ever published.

## Environment variables (all optional)
| Name | Purpose |
| --- | --- |
| `WP_API_BASE` | WordPress root URL (default: the serverless WordPress on Vercel) |
| `WP_REST_STYLE` | `rest_route` (default, works now) or `wp-json` |
| `BLOG_HIDE_TEST` | `1` hides test posts locally, to see exactly what Production will show. |

Note: `https://<wordpress>/wp-json/wp/v2/posts` currently returns the WordPress homepage (HTML), not JSON, because
pretty permalinks are not routed. `https://<wordpress>/?rest_route=/wp/v2/posts` works and is what the build uses.

## Rebuilding when you publish (NOT set up yet)
Static pages only change when the site is rebuilt. Two inert pieces are included; neither does anything until you configure it:

1. `wordpress/bideez-rebuild-hook.php`: a must-use plugin that calls a Vercel Deploy Hook when a post is published,
   edited, unpublished or deleted. To enable: create a Deploy Hook in Vercel (Project → Settings → Git → Deploy Hooks),
   copy the plugin to `wp-content/mu-plugins/`, and add `define( 'BIDEEZ_DEPLOY_HOOK_URL', '…' );` to `wp-config.php`.
2. `.github/workflows/scheduled-rebuild.yml`: rebuilds daily so future-dated posts go live. To enable: add the same hook URL as
   the GitHub repository secret `VERCEL_DEPLOY_HOOK_URL` (runs from the default branch only).

Keep the hook URL secret: anyone with it can trigger builds.

## Local development
```
npm install
npm run dev        # fetches WordPress first; if it is unreachable you get an empty blog plus a warning
npm run build
```
Test posts show up automatically. To see what Production will show, hide them locally: `$env:BLOG_HIDE_TEST="1"; npm run dev` (PowerShell).
