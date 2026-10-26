// Run with: npm test
import assert from 'node:assert/strict'
import { test } from 'node:test'
import { classifyPost } from './blog-rules.mjs'

const cat = [{ id: 5, name: 'Digital Marketing', slug: 'digital-marketing' }]

test('a post tagged "test" is hidden in Production', () => {
  const r = classifyPost({ slug: 'internal-draft', categories: cat, tagSlugs: ['test'], includeTest: false })
  assert.equal(r.show, false)
  assert.equal(r.testOnly, 'tagged "test"')
})

test('a post tagged "test" is visible in local dev and Preview', () => {
  const r = classifyPost({ slug: 'internal-draft', categories: cat, tagSlugs: ['test'], includeTest: true })
  assert.equal(r.show, true)
  assert.equal(r.testOnly, 'tagged "test"')
})

test('"A/B Testing Your Google Ads" is a legitimate article and stays visible in Production', () => {
  // the title is not even passed in: titles never decide visibility
  const r = classifyPost({ slug: 'a-b-testing-your-google-ads', categories: cat, tagSlugs: [], includeTest: false })
  assert.equal(r.show, true)
  assert.equal(r.testOnly, null)
})

test('only the exact tag slug "test" counts: "testing" or "test-drive" tags do not', () => {
  for (const tag of ['testing', 'test-drive', 'tests', 'latest']) {
    const r = classifyPost({ slug: 'real-article', categories: cat, tagSlugs: [tag], includeTest: false })
    assert.equal(r.show, true, `tag "${tag}" must not hide a post`)
  }
})

test('the tag match ignores letter case', () => {
  assert.equal(classifyPost({ slug: 'x', categories: cat, tagSlugs: ['Test'], includeTest: false }).show, false)
})

test('slugs like "tets-post" or "hello-world" are not hidden by name when categorised and untagged', () => {
  for (const slug of ['tets-post', 'hello-world', 'test-your-ads']) {
    assert.equal(classifyPost({ slug, categories: cat, tagSlugs: [], includeTest: false }).show, true)
  }
})

test('a post with no category is held back in Production and shown in Preview', () => {
  assert.equal(classifyPost({ slug: 'no-cat', categories: [], tagSlugs: [], includeTest: false }).show, false)
  const r = classifyPost({ slug: 'no-cat', categories: [], tagSlugs: [], includeTest: true })
  assert.equal(r.show, true)
  assert.equal(r.testOnly, 'uncategorized')
})

test('an unsafe slug is never shown, in any environment', () => {
  assert.equal(classifyPost({ slug: '../etc/passwd', categories: cat, tagSlugs: [], includeTest: true }).show, false)
})
