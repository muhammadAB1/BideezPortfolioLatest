import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { CASES, CASE_FILTERS, FAQ, FEATURED, HOME, INDUSTRIES, LEADERS, MANAGEMENT, PAGES, PORTFOLIO_DISCLAIMER, SERVICES, SITE, STEPS, TEAM, TESTIMONIALS, WHY } from './data.js'
import { PRIVACY } from './legal.js'

const initials = (name) => (([first, ...rest]) => (first[0] + (rest.length ? rest[rest.length - 1][0] : '')).toUpperCase())(name.split(' ').filter(Boolean))
import blogIndex from './generated/blog-index.json'
import { BlogCover, BrandIcon, CtaArt, HeroArt, HeroPattern, Icon, IconBadge, IndustryArt, NetworkArt } from './graphics.jsx'

const featuredCases = () => FEATURED.map((s) => CASES.find((c) => c.slug === s)).filter(Boolean)
// Which portfolio items each service page shows. Email has no standalone work, so it shows the
// mixed lead-generation set under a neutral heading.
const workFor = (slug) => {
  if (slug === 'upwork-bidding') return CASES.filter((c) => c.platform === 'Upwork').slice(0, 4)
  if (slug === 'google-ads') return CASES.filter((c) => c.platform === 'Google Ads')
  if (slug === 'meta-ads') return CASES.filter((c) => c.platform === 'Meta Ads')
  if (slug === 'performance-marketing') return CASES.filter((c) => c.platform !== 'Upwork').slice(0, 4)
  return featuredCases()
}

/* ---------- shared bits ---------- */
function useMeta(title, desc) {
  useEffect(() => {
    document.title = title
    let m = document.querySelector('meta[name="description"]')
    if (!m) {
      m = document.createElement('meta')
      m.name = 'description'
      document.head.appendChild(m)
    }
    m.content = desc
  }, [title, desc])
}

// Keeps <link rel="canonical"> correct during in-app navigation (static pages already ship the right one).
function useCanonical(path) {
  useEffect(() => {
    let l = document.querySelector('link[rel="canonical"]')
    if (!l) {
      l = document.createElement('link')
      l.rel = 'canonical'
      document.head.appendChild(l)
    }
    l.href = `${SITE.url}${path}`
  }, [path])
}

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const Cta = ({ to = '/book-a-consultation', children = 'Book a Consultation', ghost }) => (
  <Link to={to} className={ghost ? 'btn btn-ghost' : 'btn'}>{children}</Link>
)

function Hero({ eyebrow, title, lead, children }) {
  return (
    <section className="page-hero">
      <HeroPattern />
      <div className="wrap">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  )
}

const Section = ({ title, intro, children, alt, center }) => (
  <section className={`section${alt ? ' alt' : ''}${center ? ' center' : ''}`}>
    <div className="wrap">
      {title && <h2>{title}</h2>}
      {intro && <p className="intro">{intro}</p>}
      {children}
    </div>
  </section>
)

const Crumbs = ({ items }) => (
  <nav className="crumbs" aria-label="Breadcrumb">
    {items.map(([label, to], i) => (to ? <span key={i}><Link to={to}>{label}</Link> / </span> : <span key={i}>{label}</span>))}
  </nav>
)

function FinalCta({ secondary = ['/contact', 'Contact Us'] }) {
  return (
    <section className="final">
      <CtaArt />
      <div className="wrap">
        <h2>Let’s Build Your Next Growth Opportunity</h2>
        <p>Looking to generate potential client conversations through Upwork or email, or reach more customers through digital advertising? Let’s discuss your business objectives and explore how Bideez can support your growth.</p>
        <div className="actions center-actions"><Cta /><Cta to={secondary[0]} ghost>{secondary[1]}</Cta></div>
      </div>
    </section>
  )
}

/* ---------- layout ---------- */
function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'light')
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('theme', next) } catch { /* storage unavailable: choice just lasts for this visit */ }
  }
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  return (
    <button className="theme-toggle" onClick={toggle} aria-label={label} title={label} aria-pressed={theme === 'dark'}>
      <Icon name="moon" className="moon" size={20} />
      <Icon name="sun" className="sun" size={20} />
    </button>
  )
}
function FloatingSocial() {
  return (
    <div className="float-social" aria-label="Contact Bideez">
      <a className="fs-btn fs-linkedin" href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Bideez on LinkedIn" data-tip="LinkedIn"><BrandIcon name="linkedin" /></a>
      <a className="fs-btn fs-whatsapp" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Bideez on WhatsApp" data-tip="WhatsApp"><BrandIcon name="whatsapp" /></a>
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    setOpen(false)
  }, [pathname])
  return (
    <header className="header">
      <div className="wrap bar">
        <Link to="/" className="logo"><span className="logo-mark">B</span>Bideez</Link>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
        <nav className={open ? 'nav open' : 'nav'}>
          <div className="dd">
            <NavLink to="/services">Services</NavLink>
            <div className="dd-menu">
              {SERVICES.map((s) => (
                <div key={s.slug}>
                  <Link to={`/services/${s.slug}`}><Icon name={s.icon} size={18} />{s.nav}</Link>
                  {(s.children || []).map((c) => <Link key={c.slug} className="sub" to={`/services/${s.slug}/${c.slug}`}>{c.title}</Link>)}
                </div>
              ))}
            </div>
          </div>
          <NavLink to="/industries">Industries</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <Link to="/book-a-consultation" className="btn btn-sm">Book a Consultation</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap cols">
        <div>
          <Link to="/" className="logo"><span className="logo-mark">B</span>Bideez</Link>
          <p>Bideez is a business development and digital advertising company established in {SITE.founded}. We help businesses pursue new opportunities through Upwork bidding, email marketing, Meta Ads and Google Ads.</p>
        </div>
        <div>
          <h4>Services</h4>
          <Link to="/services/upwork-bidding">Upwork Bidding</Link>
          <Link to="/services/email-marketing">Email Marketing</Link>
          <Link to="/services/performance-marketing/meta-ads">Meta Ads</Link>
          <Link to="/services/performance-marketing/google-ads">Google Ads</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/">Home</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div>
          <h4>Get in touch</h4>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={SITE.phoneHref}>{SITE.phone}</a>
          <span className="addr">{SITE.address}</span>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="wrap legal">
        <span>© {new Date().getFullYear()} Bideez. All rights reserved.</span>
        <span><Link to="/privacy-policy">Privacy Policy</Link> · <Link to="/terms-and-conditions">Terms &amp; Conditions</Link> · <Link to="/cookie-policy">Cookie Policy</Link></span>
      </div>
    </footer>
  )
}

/* ---------- cards ---------- */
// "Book" card: the cover shows an icon avatar and the heading; hovering (or focusing) swings it open to reveal the text.
const includeIcon = (t) => {
  const s = t.toLowerCase()
  const map = [[/research|keyword|audit/, 'search'], [/proposal|copy|writing|creative|ad creation|messag/, 'pen'], [/handoff|conversation|reply/, 'chat'], [/prospect|audience|list/, 'users'], [/profile|account|objective|strateg|bidding|campaign|offer/, 'target'], [/deliverab|sequence|follow|lead capture|form/, 'mail'], [/track|report|review|test|optimi|pixel|activity/, 'chart']]
  const hit = map.find(([re]) => re.test(s))
  return hit ? hit[1] : 'check'
}

function BookCard({ icon, title, text, num }) {
  return (
    <div className="book" tabIndex="0">
      <div className="book-page">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="book-cover">
        {num && <span className="book-num">{String(num).padStart(2, '0')}</span>}
        <span className="book-avatar"><Icon name={icon} size={38} /></span>
        <h3>{title}</h3>
        <span className="book-hint">Hover to open</span>
      </div>
    </div>
  )
}
// Rotating 3D ring of the "Why Bideez" cards. Pauses on hover; falls back to a plain grid when the
// visitor prefers reduced motion (see styles.css).
const RING_COLORS = ['#0b2a5b', '#1e56c8', '#f57c1f', '#123a7a', '#d96a12']
function WhyRing() {
  // The five cards appear twice around a ten-position ring so three are readable on screen at once.
  const items = [...WHY, ...WHY]
  return (
    <div className="why3d" aria-label="Why choose Bideez">
      <div className="why3d-inner" style={{ '--quantity': items.length }}>
        {items.map(([icon, t, d], i) => (
          <div className="why3d-card" key={i} data-dup={i >= WHY.length ? '' : undefined} aria-hidden={i >= WHY.length ? true : undefined} style={{ '--index': i, '--c': RING_COLORS[i % WHY.length % RING_COLORS.length] }}>
            <IconBadge name={icon} tone={i % 2 ? 'orange' : 'navy'} />
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
const ServiceCard = ({ s, to }) => (
  <Link to={to} className="svc3d-parent">
    <div className="svc3d">
      <div className="svc3d-box">
        <span className="svc3d-title">{s.title}</span>
        <p className="svc3d-text">{s.tagline} {s.short}</p>
        <span className="svc3d-more">Explore {s.nav || s.title}</span>
      </div>
      <div className="svc3d-badge"><Icon name={s.icon} size={28} /></div>
    </div>
  </Link>
)

const IND_KIND = { 'software-houses-it-companies': 'software', 'digital-marketing-agencies': 'agency', 'professional-services': 'services', 'small-local-businesses': 'local' }
const IndustryCard = ({ i }) => (
  <Link to={`/industries/${i.slug}`} className={`ind ${IND_KIND[i.slug]}`} aria-label={i.title}>
    <IndustryArt kind={IND_KIND[i.slug]} />
    <div className="ind-shade" />
    <div className="ind-body">
      <span className="ind-badge"><Icon name={i.icon} size={20} /></span>
      <h3>{i.title}</h3>
      <div className="ind-more">
        <p>{i.short}</p>
        <span>Learn more <Icon name="arrow" size={16} /></span>
      </div>
    </div>
  </Link>
)
const CaseCard = ({ c }) => (
  <Link to={`/portfolio/${c.slug}`} className={`card case ${c.kind}`}>
    <div className="shot"><img src={c.image} alt={`${c.title} results screenshot`} loading="lazy" /><span className="shot-badge">{c.platform}</span></div>
    <div className="case-body">
      <p className="metric">{c.headline}</p>
      <p className="metric-label">{c.headlineLabel}</p>
      <h3>{c.title}</h3>
      <p className="tag">{c.niche || c.badge}</p>
    </div>
  </Link>
)

const StatGrid = ({ stats }) => (
  <div className="stat-grid">
    {stats.map(([v, l]) => <div className="stat" key={l}><strong>{v}</strong><span>{l}</span></div>)}
  </div>
)

/* ---------- pages ---------- */
function Home() {
  useMeta(PAGES['/'].title, PAGES['/'].desc)
  const pm = SERVICES.find((s) => s.slug === 'performance-marketing')
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">{HOME.eyebrow}</p>
            <h1>{HOME.title}</h1>
            <p className="lead">{HOME.lead}</p>
            <div className="actions"><Cta /><Cta to="/services" ghost>Explore Our Services</Cta></div>
          </div>
          <HeroArt />
        </div>
      </section>

      <Section>
        <div className="split">
          <NetworkArt />
          <div>
            <p className="eyebrow dark">About Bideez</p>
            <h2>{HOME.introTitle}</h2>
            {HOME.intro.map((t) => <p className="prose" key={t}>{t}</p>)}
            <Link to="/about" className="more">Learn more about us <Icon name="arrow" size={16} /></Link>
          </div>
        </div>
      </Section>

      <Section alt center title="Services That Support Your Business Growth" intro="Choose one channel or combine them. Each is planned around your business objectives.">
        <div className="grid4">
          <ServiceCard s={SERVICES[0]} to="/services/upwork-bidding" />
          <ServiceCard s={SERVICES[1]} to="/services/email-marketing" />
          <ServiceCard s={pm.children[1]} to="/services/performance-marketing/meta-ads" />
          <ServiceCard s={pm.children[0]} to="/services/performance-marketing/google-ads" />
        </div>
      </Section>

      <Section center title="Supporting Businesses Across Different Industries">
        <div className="grid4">{INDUSTRIES.map((i) => <IndustryCard key={i.slug} i={i} />)}</div>
      </Section>

      <Section alt center title="Why Bideez" intro="Focused on helping businesses find opportunities.">
        <WhyRing />
      </Section>

      <Section center title="A Clear Process From Planning to Execution">
        <div className="book-grid cols4">{STEPS.map(([icon, t, d], i) => <BookCard key={t} icon={icon} title={t} text={d} num={i + 1} />)}</div>
      </Section>

      <Section alt center title="Our Work. Our Experience." intro="Explore selected projects from our lead generation and advertising work across Upwork, Meta Ads and Google Ads. Each case study highlights the project, our approach and the results shown in the account.">
        <div className="grid4">{featuredCases().map((c) => <CaseCard key={c.slug} c={c} />)}</div>
        <div className="actions center-actions"><Cta to="/portfolio">Explore Our Portfolio</Cta></div>
      </Section>

      <Testimonials />
      <Faq alt />
      <FinalCta />
    </>
  )
}

function Faq({ items = FAQ, title = 'Frequently Asked Questions', alt }) {
  return (
    <Section title={title} alt={alt}>
      <div className="faq">
        {items.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </div>
    </Section>
  )
}

function Services() {
  useMeta(PAGES['/services'].title, PAGES['/services'].desc)
  const pm = SERVICES.find((s) => s.slug === 'performance-marketing')
  return (
    <>
      <Hero eyebrow="Services" title="Services That Support Your Business Growth" lead="Upwork bidding, email marketing and digital advertising, run by a team that works around your objectives." />
      <Section>
        <div className="grid4">
          <ServiceCard s={SERVICES[0]} to="/services/upwork-bidding" />
          <ServiceCard s={SERVICES[1]} to="/services/email-marketing" />
          <ServiceCard s={pm.children[1]} to="/services/performance-marketing/meta-ads" />
          <ServiceCard s={pm.children[0]} to="/services/performance-marketing/google-ads" />
        </div>
      </Section>
      <Section alt title="Not sure where to start?" intro="Tell us about your business and goals. We will recommend the channel, or combination of channels, that fits best.">
        <Cta />
      </Section>
      <FinalCta />
    </>
  )
}

function ServicePage() {
  const { slug, child } = useParams()
  const parent = SERVICES.find((s) => s.slug === slug)
  const s = child ? parent?.children?.find((c) => c.slug === child) : parent
  useMeta(s ? `${s.nav || s.title} | Bideez` : 'Not found | Bideez', s?.desc || '')
  if (!s) return <NotFound />
  return (
    <>
      <Hero eyebrow="Services" title={s.title} lead={s.tagline}>
        <Crumbs items={[['Services', '/services'], ...(child ? [[parent.title, `/services/${parent.slug}`]] : []), [s.title]]} />
        <div className="actions"><Cta /><Cta to="/contact" ghost>Contact Us</Cta></div>
      </Hero>
      <Section>
        <div className="split top">
          <div>
            <h2>The challenge</h2>
            <p className="prose">{s.problem}</p>
            <p className="prose">{s.short}</p>
          </div>
          <div className="card suited">
            <IconBadge name={s.icon} />
            <h3>Best suited for</h3>
            <p>{s.suited}</p>
          </div>
        </div>
      </Section>
      <Section alt title="What is included">
        <div className="book-grid">{s.includes.map(([t, d]) => <BookCard key={t} icon={includeIcon(t)} title={t} text={d} />)}</div>
      </Section>
      {!child && s.children && (
        <Section title="Choose a channel">
          <div className="grid3">{s.children.map((c) => <ServiceCard key={c.slug} s={c} to={`/services/${s.slug}/${c.slug}`} />)}</div>
        </Section>
      )}
      <Section title={slug === 'email-marketing' ? 'Lead generation results' : 'Selected work'} intro="Real projects from our portfolio.">
        <div className="grid4">{workFor(child || slug).slice(0, 4).map((w) => <CaseCard key={w.slug} c={w} />)}</div>
        <div className="actions"><Cta to="/portfolio" ghost>View full portfolio</Cta></div>
      </Section>
      <Section center alt title="How we work">
        <div className="book-grid cols4">{STEPS.map(([icon, t, d], i) => <BookCard key={t} icon={icon} title={t} text={d} num={i + 1} />)}</div>
      </Section>
      <Faq items={s.faq} alt title={`${s.nav || s.title}: common questions`} />
      <FinalCta />
    </>
  )
}

function Industries() {
  useMeta(PAGES['/industries'].title, PAGES['/industries'].desc)
  return (
    <>
      <Hero eyebrow="Industries" title="Supporting Businesses Across Different Industries" lead="From software houses and agencies to gyms, spas, salons, law firms and dental clinics, we help businesses win new clients through proposals, outreach and advertising." />
      <Section><div className="grid4">{INDUSTRIES.map((i) => <IndustryCard key={i.slug} i={i} />)}</div></Section>
      <FinalCta />
    </>
  )
}

function IndustryPage() {
  const { slug } = useParams()
  const i = INDUSTRIES.find((x) => x.slug === slug)
  useMeta(i ? `${i.title} | Bideez` : 'Not found | Bideez', i?.desc || '')
  if (!i) return <NotFound />
  const flat = SERVICES.flatMap((s) => [{ ...s, path: s.slug }, ...(s.children || []).map((c) => ({ ...c, path: `${s.slug}/${c.slug}` }))])
  return (
    <>
      <Hero eyebrow="Industries" title={i.title} lead={i.short}>
        <Crumbs items={[['Industries', '/industries'], [i.title]]} />
        <div className="actions"><Cta /></div>
      </Hero>
      <Section>
        <div className="split top">
          <div><h2>How we help</h2><p className="prose">{i.body}</p>{i.examples && <div className="chips">{i.examples.map((x) => <span className="chip" key={x}>{x}</span>)}</div>}</div>
          <div className="card suited"><IconBadge name={i.icon} tone="orange" /><h3>Services that fit</h3>
            <ul className="ticks">
              {i.fit.map((f) => {
                const m = flat.find((l) => (l.nav || l.title) === f)
                return <li key={f}>{m ? <Link to={`/services/${m.path}`}>{f}</Link> : f}</li>
              })}
            </ul>
          </div>
        </div>
      </Section>
      <FinalCta />
    </>
  )
}

function Testimonials() {
  return (
    <Section center title="What People Say" intro="Feedback from clients across Upwork, Meta Ads and Google Ads.">
      <div className="grid3 quotes">
        {TESTIMONIALS.map((q) => (
          <figure className="card quote" key={q.name}>
            <div className="q-head"><span className="stars" aria-hidden="true">★★★★★</span><span className="q-tag">{q.service}</span></div>
            <blockquote>“{q.text}”</blockquote>
            <figcaption>
              <span className="mono" aria-hidden="true">{(([first, ...rest]) => (first[0] + (rest.length ? rest[rest.length - 1][0] : '')).toUpperCase())(q.name.split(' ').filter(Boolean))}</span>
              <span><strong>{q.name}</strong><span>{q.role}</span>{q.source && <em>{q.source}</em>}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}

function Portfolio() {
  useMeta(PAGES['/portfolio'].title, PAGES['/portfolio'].desc)
  const [f, setF] = useState('All')
  const list = f === 'All' ? CASES : CASES.filter((c) => c.platform === f)
  const count = (n) => (n === 'All' ? CASES.length : CASES.filter((c) => c.platform === n).length)
  return (
    <>
      <Hero eyebrow="Portfolio" title="Our Work. Our Experience." lead="Selected lead generation and advertising projects across Upwork, Meta Ads and Google Ads, with the results shown in the accounts." />
      <section className="glance">
        <div className="wrap glance-grid">
          <div><strong>{CASES.length}</strong><span>Case studies</span></div>
          <div><strong>$2.9M+</strong><span>Upwork earnings, 6 managed profiles*</span></div>
          <div><strong>92,000+</strong><span>Hours logged on those profiles*</span></div>
          <div><strong>$458K+</strong><span>Meta &amp; Google sales, USD accounts**</span></div>
          <div><strong>€5.1M+</strong><span>Google &amp; Meta sales, EUR accounts**</span></div>
        </div>
      </section>
      <Section>
        <div className="chips" role="tablist" aria-label="Filter portfolio">
          {CASE_FILTERS.map((n) => <button key={n} className={`chip${f === n ? ' on' : ''}`} onClick={() => setF(n)}>{n} <small>{count(n)}</small></button>)}
        </div>
        <div className="notice privacy-note"><strong>Privacy first.</strong> To protect the confidentiality of our clients and the freelancers we support, names, photos and other identifying details are withheld, and screenshots are shown with personal information blurred. Each project is identified by its specialty and results instead.</div>
        <div className="grid3 cases">{list.map((c) => <CaseCard key={c.slug} c={c} />)}</div>
        <p className="hint fine">* Totals are calculated from the figures shown on the six Upwork profiles. Combined earnings are a minimum and exclude one profile that does not display earnings.</p>
        <p className="hint fine">** Sales are the purchase conversion values reported in the ad-account screenshots for the Meta Ads and Google Ads ecommerce case studies, added up separately by the currency each account reports. They exclude the lead-generation campaign, which reports leads rather than sales. {PORTFOLIO_DISCLAIMER.ads}</p>
      </Section>
      <Testimonials />
      <FinalCta />
    </>
  )
}

function CasePage() {
  const { slug } = useParams()
  const c = CASES.find((x) => x.slug === slug)
  useMeta(c ? `${c.title} | Portfolio | Bideez` : 'Not found | Bideez', c ? `${c.tag}: ${c.title}, ${c.headline} ${c.headlineLabel}.` : '')
  if (!c) return <NotFound />
  const isUpwork = c.platform === 'Upwork'
  const svc = isUpwork ? '/services/upwork-bidding' : `/services/performance-marketing/${c.platform === 'Meta Ads' ? 'meta-ads' : 'google-ads'}`
  const related = CASES.filter((x) => x.platform === c.platform && x.slug !== c.slug).slice(0, 3)
  return (
    <>
      <Hero eyebrow={c.tag} title={c.title} lead={isUpwork ? `${c.badge} · ${c.meta}` : `${c.niche}${c.period ? ' · ' + c.period : ''}`}>
        <Crumbs items={[['Portfolio', '/portfolio'], [c.title]]} />
      </Hero>
      <Section>
        <div className="case-top">
          <div className="metric-hero"><strong>{c.headline}</strong><span>{c.headlineLabel}</span></div>
          <StatGrid stats={c.stats} />
        </div>
        <figure className="frame">
          <div className="frame-bar"><i /><i /><i /></div>
          <img src={c.image} alt={`${c.title} results screenshot`} />
          <figcaption>{isUpwork ? `Managed Upwork profile` : `${c.platform} account results${c.period ? ', ' + c.period : ''}`}</figcaption>
        </figure>
        {c.note && <p className="hint">{c.note}</p>}
      </Section>
      {isUpwork ? (
        <Section alt>
          <div className="two-eq">
            <div className="card flat"><IconBadge name="target" /><h3>Our contribution</h3><ul className="ticks">{c.contribution.map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div className="card flat"><IconBadge name="chart" tone="orange" /><h3>Results &amp; impact</h3><ul className="ticks">{c.results.map((x) => <li key={x}>{x}</li>)}</ul></div>
          </div>
          <div className="takeaway"><span>Key takeaway</span><p>{c.takeaway}</p></div>
        </Section>
      ) : (
        <Section alt>
          <div className="takeaway"><span>About this project</span><p>{c.niche} · {c.platform}. Results are shown as reported in the ad account for the period above. Want similar support for your business?</p></div>
        </Section>
      )}
      <Section>
        <div className="actions"><Cta ghost to={svc}>Explore {c.platform === 'Upwork' ? 'Upwork Bidding' : c.platform}</Cta><Cta to="/portfolio" ghost>All case studies</Cta></div>
        <p className="hint fine">{isUpwork ? PORTFOLIO_DISCLAIMER.upwork : PORTFOLIO_DISCLAIMER.ads}</p>
      </Section>
      {related.length > 0 && (
        <Section alt title="More from our portfolio"><div className="grid3 cases">{related.map((r) => <CaseCard key={r.slug} c={r} />)}</div></Section>
      )}
      <FinalCta />
    </>
  )
}
function About() {
  useMeta(PAGES['/about'].title, PAGES['/about'].desc)
  return (
    <>
      <Hero eyebrow="About Us" title="Your Partner in Business Development" lead={`Bideez has been supporting businesses with client acquisition since ${SITE.founded}.`} />
      <Section>
        <div className="split">
          <NetworkArt />
          <div>
            <h2>Our company</h2>
            {HOME.intro.slice(1).map((t) => <p className="prose" key={t}>{t}</p>)}
          </div>
        </div>
      </Section>
      <Section alt title="Leadership" intro="The people who guide Bideez and the way we work with clients.">
        <div className="leaders">
          {LEADERS.map((l) => (
            <article className="leader card" key={l.name}>
              <img className="leader-photo" src={l.photo} alt={l.name} loading="lazy" />
              <div>
                <h3>{l.name}</h3>
                <p className="leader-role">{l.role}</p>
                <p>{l.intro}</p>
                {l.highlights && (<><h4>{l.highlightsTitle}</h4><ul className="ticks">{l.highlights.map((h) => <li key={h}>{h}</li>)}</ul></>)}
                <p>{l.outro}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Our team">
        <div className="grid4 team">
          {[...MANAGEMENT, ...TEAM].map((t) => (
            <div className="card person" key={t.name}>
              {t.photo ? <img className="avatar photo" src={t.photo} alt={t.name} loading="lazy" /> : <span className="avatar" aria-hidden="true">{initials(t.name)}</span>}
              <h3>{t.name}</h3>
              <p>{t.role}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section center title="Why Bideez">
        <WhyRing />
      </Section>
      <FinalCta />
    </>
  )
}

/* ---------- blog (content comes from WordPress at build time) ---------- */
const fmtDate = (iso) => {
  const d = new Date(iso)
  return Number.isNaN(d.getTime()) ? '' : new Intl.DateTimeFormat('en-GB', { dateStyle: 'long', timeZone: 'UTC' }).format(d)
}
// One lazy chunk per article, so the listing page never downloads every article body.
const postModules = import.meta.glob('./generated/posts/*.json')
const PAGE_SIZE = 9

const BlogCard = ({ p }) => (
  <Link to={`/blog/${p.slug}`} className="card blog-card">
    <div className="blog-thumb">
      {p.image ? <img src={p.image.card} alt={p.image.alt || ''} loading="lazy" decoding="async" /> : <BlogCover seed={p.slug} />}
    </div>
    <div className="case-body">
      <p className="tag">{p.categories[0]?.name || 'Article'}</p>
      <h3>{p.title}</h3>
      {p.excerpt && <p>{p.excerpt}</p>}
      <p className="meta">{fmtDate(p.date)} · {p.readingMinutes} min read</p>
    </div>
  </Link>
)

function Blog() {
  useMeta(PAGES['/blog'].title, PAGES['/blog'].desc)
  useCanonical('/blog')
  const [params, setParams] = useSearchParams()
  const [shown, setShown] = useState(PAGE_SIZE)
  const { posts, categories } = blogIndex
  const active = categories.some((c) => c.slug === params.get('category')) ? params.get('category') : 'all'
  const list = active === 'all' ? posts : posts.filter((p) => p.categories.some((c) => c.slug === active))
  const choose = (slug) => {
    setShown(PAGE_SIZE)
    setParams(slug === 'all' ? {} : { category: slug })
  }
  return (
    <>
      <Hero eyebrow="Blog" title="Insights" lead="Practical articles on Upwork, lead generation, digital marketing and business growth." />
      <Section>
        {posts.length === 0 ? (
          <div className="notice">Articles are coming soon. Check back shortly.</div>
        ) : (
          <>
            {categories.length > 0 && (
              <div className="chips" role="group" aria-label="Filter articles by category">
                <button className={`chip${active === 'all' ? ' on' : ''}`} onClick={() => choose('all')}>All <small>{posts.length}</small></button>
                {categories.map((c) => <button key={c.slug} className={`chip${active === c.slug ? ' on' : ''}`} onClick={() => choose(c.slug)}>{c.name} <small>{c.count}</small></button>)}
              </div>
            )}
            <div className="grid3 cases">{list.slice(0, shown).map((p) => <BlogCard key={p.slug} p={p} />)}</div>
            {list.length > shown && <div className="actions center-actions"><button className="btn btn-ghost" onClick={() => setShown(shown + PAGE_SIZE)}>Load more articles</button></div>}
          </>
        )}
      </Section>
    </>
  )
}

function Post() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const meta = blogIndex.posts.find((x) => x.slug === slug)
  const [post, setPost] = useState(null)
  const [failed, setFailed] = useState(false)
  useMeta(meta ? `${meta.title} | Bideez` : 'Not found | Bideez', meta?.excerpt || '')
  useCanonical(`/blog/${slug}`)
  useEffect(() => {
    setPost(null)
    setFailed(false)
    const load = postModules[`./generated/posts/${slug}.json`]
    if (!load) {
      setFailed(true)
      return undefined
    }
    let live = true
    load().then((m) => { if (live) setPost(m.default) }).catch(() => { if (live) setFailed(true) })
    return () => {
      live = false
    }
  }, [slug])
  if (!meta || failed) return <NotFound />
  const related = blogIndex.posts.filter((x) => x.slug !== slug && x.categories.some((c) => meta.categories.some((m) => m.slug === c.slug))).slice(0, 3)
  // Links inside article HTML are plain anchors; keep internal ones inside the single-page app.
  const onContentClick = (e) => {
    const a = e.target.closest?.('a')
    const href = a?.getAttribute('href')
    if (href && href.startsWith('/') && !href.startsWith('//') && a.target !== '_blank') {
      e.preventDefault()
      navigate(href)
    }
  }
  return (
    <>
      <Hero eyebrow={meta.categories[0]?.name || 'Article'} title={meta.title}>
        <Crumbs items={[['Blog', '/blog'], [meta.title]]} />
        <p className="post-meta">{fmtDate(meta.date)} · {meta.readingMinutes} min read</p>
      </Hero>
      <Section>
        <article className="article-wrap">
          {meta.image && (
            <figure className="post-hero">
              <img src={meta.image.url} alt={meta.image.alt || meta.title} width={meta.image.width || undefined} height={meta.image.height || undefined} decoding="async" />
            </figure>
          )}
          {post ? <div className="wp-content" onClick={onContentClick} dangerouslySetInnerHTML={{ __html: post.contentHtml }} /> : <p className="hint">Loading article…</p>}
          {meta.categories.length > 0 && (
            <div className="chips post-cats">
              {meta.categories.map((c) => <Link key={c.slug} className="chip" to={`/blog?category=${c.slug}`}>{c.name}</Link>)}
            </div>
          )}
        </article>
      </Section>
      {related.length > 0 && <Section alt title="Related articles"><div className="grid3 cases">{related.map((p) => <BlogCard key={p.slug} p={p} />)}</div></Section>}
      <FinalCta />
    </>
  )
}
// Messages are delivered to SITE.email by an email-forwarding service. Set VITE_FORM_ENDPOINT to use a
// different one (for example your own server function). FormSubmit needs a one-time activation:
// the first submission sends a confirmation email to SITE.email that must be approved.
// Until an endpoint is configured the form is UI only and sends nothing.
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || ''

function ContactForm({ consult }) {
  const [status, setStatus] = useState('idle')
  const submit = async (e) => {
    e.preventDefault()
    const form = e.target
    const f = Object.fromEntries(new FormData(form))
    if (f._honey) return
    if (!FORM_ENDPOINT) return setStatus('offline')
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: consult ? 'Bideez website: consultation request' : `Bideez website: ${f.subject || 'enquiry'}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: f.email,
          name: f.name, email: f.email, company: f.company, interested_in: f.interested_in, subject: f.subject, message: f.message,
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }
  if (status === 'sent') {
    return (
      <div className="form-done" role="status">
        <IconBadge name="check" tone="orange" />
        <h3>Thank you. Your message has been sent.</h3>
        <p>Our team will review it and reply to the email address you provided.</p>
        <button className="btn btn-ghost" onClick={() => setStatus('idle')}>Send another message</button>
      </div>
    )
  }
  return (
    <form className="form" onSubmit={submit}>
      <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="hp" aria-hidden="true" />
      <label>Full name<input name="name" required autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Company<input name="company" autoComplete="organization" /></label>
      <label>Interested in
        <select name="interested_in" defaultValue="">
          <option value="">Not sure yet</option>
          <option>Upwork Bidding</option>
          <option>Email Marketing</option>
          <option>Meta Ads</option>
          <option>Google Ads</option>
        </select>
      </label>
      {!consult && <label>Subject<input name="subject" /></label>}
      <label>{consult ? 'What would you like to discuss?' : 'Message'}<textarea name="message" rows="5" required /></label>
      <button className="btn" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : consult ? 'Request Consultation' : 'Send Message'}</button>
      {status === 'offline' && <p className="notice" role="status">This form is not connected yet, so nothing was sent. Please email us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>}
      {status === 'error' &&<p className="form-error" role="alert">We could not send your message. Please try again, or email us directly at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>}
      <p className="hint">By submitting this form you agree to our <Link to="/privacy-policy">Privacy Policy</Link>.</p>
    </form>
  )
}

function Contact() {
  useMeta(PAGES['/contact'].title, PAGES['/contact'].desc)
  return (
    <>
      <Hero eyebrow="Contact Us" title="Get in touch" lead="Tell us what you are looking for and we will reply by email." />
      <Section>
        <div className="two">
          <ContactForm />
          <div className="card">
            <h3>Contact details</h3>
            <p>Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            <p>Phone: <a href={SITE.phoneHref}>{SITE.phone}</a></p>
            <p>Office: {SITE.address}</p>
            <p><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">Bideez on LinkedIn</a></p>
            <h3>Business hours</h3>
            {SITE.hours.map((h) => <p key={h}>{h}</p>)}
          </div>
        </div>
      </Section>
    </>
  )
}

function Book() {
  useMeta(PAGES['/book-a-consultation'].title, PAGES['/book-a-consultation'].desc)
  return (
    <>
      <Hero eyebrow="Consultation" title="Book a Consultation" lead="Share a few details and we will get back to you to arrange a call about your business objectives." />
      <Section><div className="narrow"><ContactForm consult /></div></Section>
    </>
  )
}

const LEGAL = {
  '/privacy-policy': ['Privacy Policy', 'We collect only the information you send us through the contact forms or by email, such as your name, email address and message, and use it to respond to you. We do not sell personal information.'],
  '/terms-and-conditions': ['Terms & Conditions', 'The content of this website is provided for general information. Services are provided under a separate written agreement.'],
  '/cookie-policy': ['Cookie Policy', 'This website does not currently set advertising cookies. If analytics or advertising tools are added, this policy will be updated.'],
}

// Minimal renderer for the markdown subset used in legal.js: ## / ### headings, "- " lists, paragraphs.
function Markdown({ text }) {
  const out = []
  let list = []
  const flush = () => { if (list.length) { out.push(<ul className="ticks legal-list" key={`l${out.length}`}>{list.map((x, i) => <li key={i}>{x}</li>)}</ul>); list = [] } }
  text.trim().split('\n').forEach((raw) => {
    const line = raw.trim()
    if (line.startsWith('- ')) return void list.push(line.slice(2))
    flush()
    if (!line) return
    if (line.startsWith('### ')) out.push(<h3 key={out.length}>{line.slice(4)}</h3>)
    else if (line.startsWith('## ')) out.push(<h2 key={out.length}>{line.slice(3)}</h2>)
    else out.push(<p key={out.length}>{line}</p>)
  })
  flush()
  return <div className="policy">{out}</div>
}

function Legal({ path }) {
  const [t, body] = LEGAL[path]
  useMeta(PAGES[path].title, PAGES[path].desc)
  return (
    <>
      <Hero title={t} />
      <Section>
        {path === '/privacy-policy' ? <Markdown text={PRIVACY} /> : (
          <>
            <p className="prose">{body}</p>
            <p className="hint">Draft placeholder text. Have this reviewed and completed by the business owner or legal counsel before launch.</p>
          </>
        )}
      </Section>
    </>
  )
}

function NotFound() {
  useMeta('Page not found | Bideez', 'This page could not be found.')
  return <Hero title="Page not found" lead="The page you are looking for does not exist."><div className="actions"><Cta to="/" ghost>Back to home</Cta></div></Hero>
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Header />
      <FloatingSocial />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/services/:slug/:child" element={<ServicePage />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<CasePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-a-consultation" element={<Book />} />
          {Object.keys(LEGAL).map((p) => <Route key={p} path={p} element={<Legal path={p} />} />)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
