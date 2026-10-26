// After `vite build`: give every route its own HTML file (correct title and
// description for crawlers on static hosts), and write sitemap.xml + robots.txt.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { allRoutes, SITE } from '../src/data.js'

const dist = 'dist'
const template = readFileSync(join(dist, 'index.html'), 'utf8')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

for (const r of allRoutes()) {
  if (r.path === '/') continue
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${esc(r.title)}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${esc(r.desc)}" />`)
    .replace('</head>', `    <link rel="canonical" href="${SITE.url}${r.path}" />\n  </head>`)
  const file = join(dist, r.path, 'index.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html)
}

const home = template.replace('</head>', `    <link rel="canonical" href="${SITE.url}/" />\n  </head>`)
writeFileSync(join(dist, 'index.html'), home)

const urls = allRoutes().map((r) => `  <url><loc>${SITE.url}${r.path === '/' ? '/' : r.path}</loc></url>`).join('\n')
writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`)
console.log(`postbuild: ${allRoutes().length} routes, sitemap.xml, robots.txt`)
