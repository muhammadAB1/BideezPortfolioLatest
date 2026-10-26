// Fetches published WordPress posts and categories at BUILD time and writes static JSON for the site.
// WordPress is the single source of truth: nothing is fetched in the browser (the API sends no CORS headers).
//
//   npm run build / npm run dev  ->  runs this first (see "prebuild" / "predev" in package.json)
//
// Environment (all optional):
//   WP_API_BASE        WordPress site root. Default: the serverless WordPress on Vercel.
//   WP_REST_STYLE      "rest_route" (default, works without pretty permalinks) or "wp-json".
//   BLOG_HIDE_TEST     "1" hides test posts locally, to see what Production will show.
//   BLOG_OUT_DIR       Where to write the generated JSON. Default: src/generated (tests use a temp folder).
//
// Test posts are the ones tagged "test" in WordPress (tag slug exactly `test`; see blog-rules.mjs). They are SHOWN in
// local development and in Vercel Preview deployments so the blog can be verified, and always HIDDEN in Vercel
// Production (VERCEL_ENV=production). Post titles are never used to decide this.
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sanitizeHtml from 'sanitize-html'
import { classifyPost, TEST_TAG_SLUG } from './blog-rules.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = process.env.BLOG_OUT_DIR ? resolve(process.env.BLOG_OUT_DIR) : join(ROOT, 'src', 'generated')
const BASE = (process.env.WP_API_BASE || 'https://serverless-wordpress-ebon-kappa.vercel.app').replace(/\/+$/, '')
const STYLE = process.env.WP_REST_STYLE === 'wp-json' ? 'wp-json' : 'rest_route'
const DEV = process.argv.includes('--dev')
const INCLUDE_TEST = process.env.VERCEL_ENV !== 'production' && process.env.BLOG_HIDE_TEST !== '1'
const WP_HOST = new URL(BASE).hostname

// Categories the site is organised around. Names and slugs are read from WordPress; a missing one is not an error.
const PREFERRED = ['Upwork', 'Lead Generation', 'Digital Marketing', 'Business Growth']

const log = (m) => console.log(`[blog] ${m}`)
const warn = (m) => console.warn(`[blog] WARNING: ${m}`)

function restUrl(route, params = {}) {
  const qs = new URLSearchParams(params).toString()
  return STYLE === 'wp-json' ? `${BASE}/wp-json${route}${qs ? `?${qs}` : ''}` : `${BASE}/?rest_route=${route}${qs ? `&${qs}` : ''}`
}

async function getJson(url, attempts = 3) {
  let last
  for (let i = 1; i <= attempts; i++) {
    try {
      const res = await fetch(url, { headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(25000) })
      const type = res.headers.get('content-type') || ''
      if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`)
      if (!type.includes('json')) throw new Error(`expected JSON but received "${type || 'unknown content type'}" (the REST API is probably not reachable at this address)`)
      return { data: await res.json(), headers: res.headers }
    } catch (e) {
      last = e
      if (i < attempts) await new Promise((r) => setTimeout(r, 1500 * i))
    }
  }
  const cause = last.cause ? ` (${last.cause.code || last.cause.message})` : ''
  throw new Error(`${last.message}${cause}\n  URL: ${url}`)
}

async function getAll(route, params) {
  const out = []
  let page = 1
  let pages = 1
  do {
    const { data, headers } = await getJson(restUrl(route, { ...params, per_page: '100', page: String(page) }))
    if (!Array.isArray(data)) throw new Error(`unexpected response for ${route}: expected a list`)
    out.push(...data)
    pages = Number(headers.get('x-wp-totalpages')) || 1
    page++
  } while (page <= pages)
  return out
}

// ---------- text helpers ----------
const NAMED = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', hellip: '…', ndash: '–', mdash: '—', lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”' }
const decode = (s = '') =>
  s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === '#') {
      const code = e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)
      return Number.isFinite(code) ? String.fromCodePoint(code) : m
    }
    return NAMED[e.toLowerCase()] ?? m
  })
const plain = (html = '') => decode(html.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim()
const excerptOf = (html) => {
  const t = plain(html).replace(/\s*(\[…\]|\[&hellip;\]|Continue reading.*|Read more.*)$/i, '').trim()
  if (t.length <= 155) return t
  return `${t.slice(0, 155).replace(/\s+\S*$/, '')}…`
}
const https = (u) => (u ? u.replace(/^http:\/\//i, 'https://') : u)
// WordPress sends *_gmt without a zone marker, and uses 0000-00-00 for unset dates. Never throw on a bad date.
const isoUtc = (gmt, local) => {
  const d = new Date(gmt && !gmt.startsWith('0000') ? `${gmt}Z` : local)
  return Number.isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString()
}

// ---------- HTML sanitising ----------
function makeSanitizer(idToSlug) {
  const rewriteHref = (href = '') => {
    try {
      const u = new URL(href, BASE)
      if (u.hostname === WP_HOST) {
        const id = u.searchParams.get('p') || u.searchParams.get('page_id')
        if (id && idToSlug.has(Number(id))) return `/blog/${idToSlug.get(Number(id))}`
      }
    } catch { /* leave as is */ }
    return href
  }
  return (html) =>
    sanitizeHtml(html, {
      allowedTags: ['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'br', 'hr', 'ul', 'ol', 'li', 'blockquote', 'strong', 'b', 'em', 'i', 'u', 's', 'sub', 'sup', 'code', 'pre', 'kbd', 'a', 'img', 'figure', 'figcaption', 'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption', 'div', 'span', 'iframe'],
      allowedAttributes: {
        a: ['href', 'title', 'target', 'rel', 'id', 'name'],
        img: ['src', 'srcset', 'sizes', 'alt', 'title', 'width', 'height', 'loading', 'decoding'],
        iframe: ['src', 'width', 'height', 'title', 'allow', 'allowfullscreen', 'frameborder'],
        '*': ['class', 'id'],
      },
      allowedClasses: { '*': ['wp-block-*', 'wp-image-*', 'align*', 'has-*', 'is-*', 'size-*'] },
      allowedSchemes: ['http', 'https', 'mailto', 'tel'],
      allowedSchemesByTag: { img: ['http', 'https'], iframe: ['https'] },
      allowProtocolRelative: false,
      allowedIframeHostnames: ['www.youtube.com', 'www.youtube-nocookie.com', 'player.vimeo.com'],
      transformTags: {
        h1: 'h2',
        a: (tag, attribs) => {
          const href = rewriteHref(attribs.href)
          const external = /^https?:\/\//i.test(href) && !/^https?:\/\/(www\.)?bideez\.org/i.test(href)
          const next = { ...attribs, href }
          if (external) { next.target = '_blank'; next.rel = 'noopener noreferrer' }
          else { delete next.target; delete next.rel }
          return { tagName: 'a', attribs: next }
        },
        img: (tag, attribs) => ({ tagName: 'img', attribs: { ...attribs, src: https(attribs.src), loading: 'lazy', decoding: 'async' } }),
      },
      // drop empty paragraphs and iframes whose source was rejected (anything not YouTube/Vimeo)
      exclusiveFilter: (f) => (f.tag === 'p' && !f.text.trim() && f.mediaChildren.length === 0) || (f.tag === 'iframe' && !f.attribs.src),
    }).trim()
}

// ---------- featured image ----------
function featuredImageOf(post, contentHtml) {
  const m = post._embedded?.['wp:featuredmedia']?.[0]
  if (m?.source_url) {
    const sizes = m.media_details?.sizes || {}
    const card = sizes.medium_large || sizes.large || sizes.medium
    return {
      url: https(m.source_url),
      alt: plain(m.alt_text || '') || '',
      width: m.media_details?.width || null,
      height: m.media_details?.height || null,
      card: https(card?.source_url || m.source_url),
    }
  }
  const first = contentHtml.match(/<img[^>]*\ssrc="([^"]+)"[^>]*>/i)
  if (first) {
    const tag = first[0]
    const attr = (n) => (tag.match(new RegExp(`\\s${n}="([^"]*)"`, 'i')) || [])[1]
    return { url: first[1], alt: decode(attr('alt') || ''), width: Number(attr('width')) || null, height: Number(attr('height')) || null, card: first[1] }
  }
  return null // the site shows a branded fallback cover
}

// ---------- main ----------
function writeOutput(payload, posts) {
  rmSync(join(OUT, 'posts'), { recursive: true, force: true })
  mkdirSync(join(OUT, 'posts'), { recursive: true })
  writeFileSync(join(OUT, 'blog-index.json'), JSON.stringify(payload, null, 2))
  for (const p of posts) writeFileSync(join(OUT, 'posts', `${p.slug}.json`), JSON.stringify(p))
}

async function main() {
  log(`source: ${BASE} (${STYLE})`)
  const [rawPosts, rawCats, rawTags] = await Promise.all([
    getAll('/wp/v2/posts', { _embed: 'wp:featuredmedia', status: 'publish' }),
    getAll('/wp/v2/categories', {}),
    getAll('/wp/v2/tags', {}), // a post lists its tags as ids; this maps them to slugs (we look for slug "test")
  ])

  const catById = new Map(rawCats.map((c) => [c.id, { id: c.id, name: decode(c.name), slug: c.slug }]))
  const tagSlugById = new Map(rawTags.map((t) => [t.id, String(t.slug).toLowerCase()]))
  // Never guess: if a post uses a tag we could not read, we cannot know whether it is the "test" tag.
  const unknownTag = rawPosts.flatMap((p) => (p.tags || []).filter((id) => !tagSlugById.has(id)).map((id) => `${id} (post "${p.slug}")`))
  if (unknownTag.length) throw new Error(`WordPress returned posts using tag id(s) it did not list: ${unknownTag.join(', ')}. Run the build again; if it persists, check the /wp/v2/tags endpoint.`)
  const idToSlug = new Map(rawPosts.map((p) => [p.id, p.slug]))
  const clean = makeSanitizer(idToSlug)

  const visible = []
  const hidden = []
  for (const p of rawPosts) {
    const title = plain(p.title?.rendered) || '(untitled)'
    const categories = (p.categories || []).map((id) => catById.get(id)).filter((c) => c && c.slug !== 'uncategorized')
    const excerptText = excerptOf(p.excerpt?.rendered || p.content?.rendered || '')
    const tagSlugs = (p.tags || []).map((id) => tagSlugById.get(id))
    const { show, reason, testOnly } = classifyPost({ slug: p.slug, categories, tagSlugs, includeTest: INCLUDE_TEST })
    if (!show) { hidden.push(`"${title}" (${p.slug}): ${reason}`); continue }

    const contentHtml = clean(p.content?.rendered || '')
    const words = plain(contentHtml).split(/\s+/).filter(Boolean).length
    visible.push({
      id: p.id,
      slug: p.slug,
      title,
      excerpt: excerptText,
      date: isoUtc(p.date_gmt, p.date),
      modified: isoUtc(p.modified_gmt, p.modified),
      categories: categories.length ? categories : INCLUDE_TEST ? [{ id: 0, name: 'Uncategorized', slug: 'uncategorized' }] : [],
      image: featuredImageOf(p, contentHtml),
      readingMinutes: Math.max(1, Math.ceil(words / 220)),
      ...(testOnly ? { testOnly } : {}), // set only when the post would be hidden in Production
      contentHtml,
    })
  }
  visible.sort((a, b) => b.date.localeCompare(a.date))

  // Categories actually in use, preferred ones first. Missing preferred categories are tolerated.
  const used = new Map()
  for (const p of visible) for (const c of p.categories) used.set(c.slug, { ...c, count: (used.get(c.slug)?.count || 0) + 1 })
  const rank = (c) => { const i = PREFERRED.findIndex((n) => n.toLowerCase() === c.name.toLowerCase() || n.toLowerCase().replace(/ /g, '-') === c.slug); return i === -1 ? 99 : i }
  const categories = [...used.values()].sort((a, b) => rank(a) - rank(b) || a.name.localeCompare(b.name))
  for (const name of PREFERRED) {
    if (!rawCats.some((c) => decode(c.name).toLowerCase() === name.toLowerCase())) warn(`category "${name}" does not exist in WordPress yet; it will appear on the blog once it is created and used.`)
  }

  const index = visible.map(({ contentHtml, ...rest }) => rest)
  const testCount = visible.filter((p) => p.testOnly).length
  writeOutput({ generatedAt: new Date().toISOString(), source: BASE, includesTest: testCount > 0, categories, posts: index }, visible)

  log(`published in WordPress: ${rawPosts.length} | shown on the site: ${visible.length} | hidden: ${hidden.length}`)
  hidden.forEach((h) => log(`  hidden -> ${h}`))
  if (testCount) warn(`${testCount} test post(s) (tagged "${TEST_TAG_SLUG}" or uncategorized) are SHOWN because this is not Vercel Production. They are hidden automatically in Production.`)
  if (testCount || hidden.some((h) => /tagged|uncategorized/.test(h))) warn(`REMINDER: delete the test posts in WordPress before launch (or keep them tagged "${TEST_TAG_SLUG}").`)
  if (visible.length === 0) warn('no public posts yet: the blog page will show its empty state.')
}

main().catch((e) => {
  const msg = [
    '',
    'Could not load blog posts from WordPress.',
    `  Reason: ${e.message}`,
    '',
    'What to check:',
    `  1. Is the WordPress site up?  ${BASE}`,
    `  2. Does this return JSON in a browser?  ${restUrl('/wp/v2/posts', { per_page: '1' })}`,
    '  3. If the address changed, set WP_API_BASE (and WP_REST_STYLE=wp-json if pretty permalinks work).',
    '',
    'Your live website is NOT affected: when a build fails, Vercel keeps serving the previous deployment.',
    '',
  ].join('\n')
  if (DEV) {
    console.warn(msg)
    warn('dev mode: continuing with an empty blog.')
    writeOutput({ generatedAt: new Date().toISOString(), source: BASE, categories: [], posts: [], error: e.message }, [])
    return
  }
  console.error(msg)
  process.exit(1)
})
