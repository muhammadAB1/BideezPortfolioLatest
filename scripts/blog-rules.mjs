// Which WordPress posts appear on the blog. Kept as pure logic so it can be unit-tested (blog-rules.test.mjs).
//
// A post is a TEST post only when it carries the WordPress tag whose slug is exactly "test".
// Titles are never inspected, so an article called "A/B Testing Your Google Ads" is a normal article.
// A post with no category (other than "Uncategorized") is also treated as unfinished and held back in Production.
//
// includeTest is true in local development and Vercel Preview, false in Vercel Production.
export const TEST_TAG_SLUG = 'test'
const SAFE_SLUG = /^[\w%-]+$/

export function classifyPost({ slug, categories = [], tagSlugs = [], includeTest }) {
  if (!SAFE_SLUG.test(slug || '')) return { show: false, testOnly: null, reason: `unsafe slug "${slug}"` }
  let testOnly = null // set when the post is shown only because this is not Production
  if (tagSlugs.some((t) => String(t).toLowerCase() === TEST_TAG_SLUG)) testOnly = `tagged "${TEST_TAG_SLUG}"`
  else if (categories.length === 0) testOnly = 'uncategorized'
  if (testOnly && !includeTest) return { show: false, testOnly, reason: testOnly }
  return { show: true, testOnly, reason: null }
}
