// After `vite build`: give every route its own HTML file (correct title, description and canonical for
// crawlers on a static host), add SEO tags + structured data + static content for the blog, and write
// sitemap.xml and robots.txt. Blog data comes from scripts/fetch-wp.mjs (WordPress, at build time).
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { allRoutes, SITE } from '../src/data.js'

const dist = 'dist'
const gen = join('src', 'generated')
const template = readFileSync(join(dist, 'index.html'), 'utf8')
const esc = (s = '') => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const escText = (s = '') => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const ldScript = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`
const abs = (p) => `${SITE.url}${p === '/' ? '/' : p}`

if (!existsSync(join(gen, 'blog-index.json'))) {
  console.error('postbuild: src/generated/blog-index.json is missing. Run "npm run build" (it fetches WordPress first), not "node scripts/postbuild.mjs" on its own.')
  process.exit(1)
}
const blog = JSON.parse(readFileSync(join(gen, 'blog-index.json'), 'utf8'))
const post = (slug) => JSON.parse(readFileSync(join(gen, 'posts', `${slug}.json`), 'utf8'))
const DEFAULT_OG = `${SITE.url}/og-default.png`

// Crawlers and no-JS visitors get the content; JS visitors never see a flash of unstyled text, because the
// pre-rendered block is parked off-screen until React replaces it.
const PRERENDER_CSS =
  '    <style>.prerender{position:absolute;left:-10000px;top:0;width:1px;height:1px;overflow:hidden}</style>\n' +
  '    <noscript><style>.prerender{position:static;width:auto;height:auto;overflow:visible;max-width:780px;margin:0 auto;padding:24px;font:16px/1.7 system-ui,sans-serif}</style></noscript>\n'
const NOINDEX = '    <meta name="robots" content="noindex, nofollow" />\n'

function page({ title, desc, canonical, head = '', root = '' }) {
  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${esc(desc)}" />`)
    .replace('</head>', `    <link rel="canonical" href="${canonical}" />\n${head}${root ? PRERENDER_CSS : ''}  </head>`)
  if (root) html = html.replace('<div id="root"></div>', `<div id="root">${root}</div>`)
  return html
}

function social({ type, title, desc, url, image, imageAlt, extra = '' }) {
  return (
    [
      `<meta property="og:site_name" content="Bideez" />`,
      `<meta property="og:locale" content="en_US" />`,
      `<meta property="og:type" content="${type}" />`,
      `<meta property="og:title" content="${esc(title)}" />`,
      `<meta property="og:description" content="${esc(desc)}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${esc(image)}" />`,
      `<meta property="og:image:alt" content="${esc(imageAlt)}" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${esc(title)}" />`,
      `<meta name="twitter:description" content="${esc(desc)}" />`,
      `<meta name="twitter:image" content="${esc(image)}" />`,
      extra,
    ]
      .filter(Boolean)
      .map((l) => `    ${l}\n`)
      .join('')
  )
}

const breadcrumbs = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, url], i) => ({ '@type': 'ListItem', position: i + 1, name, item: url })),
})

const write = (path, html) => {
  const file = join(dist, path, 'index.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html)
}

// ---------- every non-blog route: unchanged behaviour ----------
const routes = allRoutes()
for (const r of routes) {
  if (r.path === '/' || r.path === '/blog') continue
  write(r.path, page({ title: r.title, desc: r.desc, canonical: abs(r.path) }))
}
writeFileSync(join(dist, 'index.html'), template.replace('</head>', `    <link rel="canonical" href="${SITE.url}/" />\n  </head>`))

// ---------- blog listing ----------
const blogMeta = routes.find((r) => r.path === '/blog')
const newest = blog.posts.reduce((m, p) => (p.modified > m ? p.modified : m), '')
const listUrl = abs('/blog')
const listRoot = `<main class="prerender"><h1>${escText('Insights')}</h1><p>${escText(blogMeta.desc)}</p>${
  blog.posts.length ? `<ul>${blog.posts.map((p) => `<li><a href="/blog/${p.slug}">${escText(p.title)}</a></li>`).join('')}</ul>` : '<p>Articles are coming soon.</p>'
}</main>`
write(
  '/blog',
  page({
    title: blogMeta.title,
    desc: blogMeta.desc,
    canonical: listUrl,
    head:
      (blog.includesTest ? NOINDEX : '') +
      social({ type: 'website', title: blogMeta.title, desc: blogMeta.desc, url: listUrl, image: DEFAULT_OG, imageAlt: 'Bideez blog' }) +
      `    ${ldScript({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Bideez Blog',
        description: blogMeta.desc,
        url: listUrl,
        isPartOf: { '@type': 'WebSite', name: 'Bideez', url: SITE.url },
        mainEntity: { '@type': 'ItemList', itemListElement: blog.posts.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(`/blog/${p.slug}`), name: p.title })) },
      })}\n    ${ldScript(breadcrumbs([['Home', abs('/')], ['Blog', listUrl]]))}\n`,
    root: listRoot,
  }),
)

// ---------- articles ----------
for (const meta of blog.posts) {
  const full = post(meta.slug)
  const url = abs(`/blog/${meta.slug}`)
  const title = `${meta.title} | Bideez`
  const desc = meta.excerpt || `${meta.title}. Read the full article on the Bideez blog.`
  const image = meta.image?.url && /^https:\/\//.test(meta.image.url) ? meta.image.url : DEFAULT_OG
  const imageAlt = meta.image?.alt || meta.title
  const cats = meta.categories.map((c) => c.name)
  const head =
    (meta.testOnly ? NOINDEX : '') + // a test post that only exists in dev/Preview must never be indexed
    social({
      type: 'article',
      title,
      desc,
      url,
      image,
      imageAlt,
      extra: [`<meta property="article:published_time" content="${meta.date}" />`, `<meta property="article:modified_time" content="${meta.modified}" />`, ...cats.map((c) => `<meta property="article:section" content="${esc(c)}" />`)].join('\n    '),
    }) +
    `    ${ldScript({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: meta.title.slice(0, 110),
      description: desc,
      image: [image],
      datePublished: meta.date,
      dateModified: meta.modified,
      url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      ...(cats.length ? { articleSection: cats } : {}),
      inLanguage: 'en',
      author: { '@type': 'Organization', name: 'Bideez', url: SITE.url },
      publisher: { '@type': 'Organization', name: 'Bideez', url: SITE.url, logo: { '@type': 'ImageObject', url: `${SITE.url}/logo-512.png` } },
    })}\n    ${ldScript(breadcrumbs([['Home', abs('/')], ['Blog', listUrl], [meta.title, url]]))}\n`
  const root = `<main class="prerender"><article><h1>${escText(meta.title)}</h1><p>${escText(cats.join(', '))}</p>${full.contentHtml}</article></main>`
  write(`/blog/${meta.slug}`, page({ title, desc, canonical: url, head, root }))
}

// ---------- sitemap + robots ----------
const entries = [
  ...routes.map((r) => ({ loc: abs(r.path), lastmod: r.path === '/blog' ? newest : '' })),
  ...blog.posts.filter((p) => !p.testOnly).map((p) => ({ loc: abs(`/blog/${p.slug}`), lastmod: p.modified })),
]
const urls = entries.map((e) => `  <url><loc>${e.loc}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}</url>`).join('\n')
writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`)
console.log(`postbuild: ${routes.length} routes + ${blog.posts.length} blog articles, sitemap.xml, robots.txt`)
