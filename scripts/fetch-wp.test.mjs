// End-to-end test of scripts/fetch-wp.mjs against a local fake WordPress REST API. Run with: npm test
// Output goes to a temporary folder (BLOG_OUT_DIR), so the real src/generated data is never touched.
import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { mkdtempSync, existsSync, readFileSync, readdirSync, rmSync } from 'node:fs'
import http from 'node:http'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { after, before, test } from 'node:test'
import { fileURLToPath } from 'node:url'

const SCRIPT = fileURLToPath(new URL('./fetch-wp.mjs', import.meta.url))

const categories = [
  { id: 1, name: 'Uncategorized', slug: 'uncategorized' },
  { id: 5, name: 'Digital Marketing', slug: 'digital-marketing' },
  { id: 6, name: 'Upwork', slug: 'upwork' },
]
const tags = [
  { id: 30, name: 'test', slug: 'test' },
  { id: 31, name: 'Testing', slug: 'testing' },
]
const post = (id, o) => ({
  id, slug: o.slug, status: 'publish',
  date: `2026-10-${10 + id}T10:00:00`, date_gmt: `2026-10-${10 + id}T10:00:00`,
  modified: `2026-10-${10 + id}T12:00:00`, modified_gmt: `2026-10-${10 + id}T12:00:00`,
  title: { rendered: o.title }, excerpt: { rendered: `<p>${o.title} excerpt.</p>` }, content: { rendered: `<p>${o.title} body.</p>` },
  featured_media: 0, categories: o.categories, tags: o.tags, _embedded: {},
})
const normal = [
  post(1, { slug: 'internal-draft', title: 'Lead Generation Playbook (internal copy)', categories: [5], tags: [30] }), // tagged test
  post(2, { slug: 'a-b-testing-your-google-ads', title: 'A/B Testing Your Google Ads', categories: [5], tags: [] }), // legitimate
  post(3, { slug: 'tets-post', title: 'Tets Post', categories: [6], tags: [31] }), // odd title + "testing" tag: still legitimate
  post(4, { slug: 'no-category', title: 'Finished article without a category', categories: [1], tags: [] }),
]

let server, base
let postsForRequest = normal
before(async () => {
  server = http.createServer((req, res) => {
    const u = new URL(req.url, 'http://localhost')
    const route = u.searchParams.get('rest_route')
    const send = (data) => {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8', 'X-WP-TotalPages': '1' })
      res.end(JSON.stringify(data))
    }
    if (route === '/wp/v2/posts') return send(postsForRequest)
    if (route === '/wp/v2/categories') return send(categories)
    if (route === '/wp/v2/tags') return send(tags)
    res.writeHead(404).end()
  })
  await new Promise((r) => server.listen(0, '127.0.0.1', r))
  base = `http://127.0.0.1:${server.address().port}`
})
after(() => server.close())

function runFetch(env) {
  const out = mkdtempSync(join(tmpdir(), 'bideez-blog-test-'))
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [SCRIPT], { env: { ...process.env, WP_API_BASE: base, BLOG_OUT_DIR: out, BLOG_HIDE_TEST: '', VERCEL_ENV: '', ...env } })
    let stderr = ''
    child.stderr.on('data', (d) => (stderr += d))
    child.stdout.on('data', () => {})
    child.on('close', (code) => {
      const indexFile = join(out, 'blog-index.json')
      const index = existsSync(indexFile) ? JSON.parse(readFileSync(indexFile, 'utf8')) : null
      const files = existsSync(join(out, 'posts')) ? readdirSync(join(out, 'posts')).sort() : []
      rmSync(out, { recursive: true, force: true })
      resolve({ code, stderr, index, files })
    })
  })
}
const slugs = (r) => r.index.posts.map((p) => p.slug).sort()

test('Production: the tagged test post is excluded from the listing and from article generation', async () => {
  const r = await runFetch({ VERCEL_ENV: 'production' })
  assert.equal(r.code, 0)
  assert.deepEqual(slugs(r), ['a-b-testing-your-google-ads', 'tets-post'])
  assert.deepEqual(r.files, ['a-b-testing-your-google-ads.json', 'tets-post.json'])
  assert.equal(r.index.includesTest, false)
  assert.ok(r.index.posts.every((p) => !p.testOnly), 'no post is flagged testOnly in Production')
})

test('Production: "A/B Testing Your Google Ads" is kept (title words never hide a post)', async () => {
  const r = await runFetch({ VERCEL_ENV: 'production' })
  assert.ok(slugs(r).includes('a-b-testing-your-google-ads'))
  assert.ok(slugs(r).includes('tets-post'))
})

test('Preview: the tagged test post (and the uncategorised one) are visible and flagged', async () => {
  const r = await runFetch({ VERCEL_ENV: 'preview' })
  assert.equal(r.code, 0)
  assert.deepEqual(slugs(r), ['a-b-testing-your-google-ads', 'internal-draft', 'no-category', 'tets-post'])
  const by = Object.fromEntries(r.index.posts.map((p) => [p.slug, p]))
  assert.equal(by['internal-draft'].testOnly, 'tagged "test"')
  assert.equal(by['no-category'].testOnly, 'uncategorized')
  assert.equal(by['a-b-testing-your-google-ads'].testOnly, undefined)
  assert.equal(r.index.includesTest, true)
})

test('Local development (no VERCEL_ENV): test posts are visible', async () => {
  const r = await runFetch({})
  assert.ok(slugs(r).includes('internal-draft'))
})

test('BLOG_HIDE_TEST=1 simulates Production locally', async () => {
  const r = await runFetch({ BLOG_HIDE_TEST: '1' })
  assert.deepEqual(slugs(r), ['a-b-testing-your-google-ads', 'tets-post'])
})

test('the build fails clearly if a post uses a tag WordPress did not list (cannot tell if it is "test")', async () => {
  postsForRequest = [post(9, { slug: 'mystery', title: 'Mystery', categories: [5], tags: [99] })]
  const r = await runFetch({ VERCEL_ENV: 'production' })
  postsForRequest = normal
  assert.equal(r.code, 1)
  assert.match(r.stderr, /tag id/)
})
