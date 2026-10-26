// Original SVG illustrations and icons. Decorative only: no figures or data are implied.
const P = {
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  megaphone: <><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z" /><path d="M15 9a4 4 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-5-5" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>,
  code: <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" />,
  layers: <path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5" />,
  building: <><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-4h4v4" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></>,
  play: <path d="M6 4l14 8-14 8z" />,
  chart: <path d="m3 17 6-6 4 4 8-8M15 7h6v6" />,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14a5 5 0 0 1 6 5" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="m9 12 2 2 4-4" /></>,
  layout: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  check: <path d="m5 12 5 5 9-10" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  store: <><path d="M3 9l1.5-5h15L21 9" /><path d="M4 9v11h16V9" /><path d="M3 9c0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0" /><path d="M10 20v-6h4v6" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  moon: <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />,
  pen: <path d="M4 20l4-1 11-11a2.2 2.2 0 0 0-3-3L5 16zM14 7l3 3" />,
  chat: <path d="M4 5h16v11H9l-5 4zM8 10h8M8 13h5" />,
}

export function Icon({ name, size = 24, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      {P[name]}
    </svg>
  )
}

export const IconBadge = ({ name, tone = 'navy' }) => (
  <span className={`ibadge ${tone}`}><Icon name={name} size={26} /></span>
)

const Chip = ({ x, y, name, fill }) => (
  <g transform={`translate(${x} ${y})`}>
    <circle r="30" fill="#fff" />
    <circle r="30" fill="none" stroke={fill} strokeWidth="2" opacity=".35" />
    <g transform="translate(-14 -14) scale(1.17)" color={fill}><Icon name={name} size={24} /></g>
  </g>
)

const Person = ({ x, y, s = 1, fill = '#0b2a5b', bg = '#fff', o = 1 }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} opacity={o}>
    <circle r="22" fill={bg} />
    <circle cy="-5" r="7" fill={fill} />
    <path d="M-12 13a12 9 0 0 1 24 0z" fill={fill} />
  </g>
)

/* Home hero: prospects flow from channels through a lead funnel into qualified conversations */
export function HeroArt() {
  return (
    <svg className="heroart" viewBox="0 0 640 520" role="img" aria-label="Illustration: prospects from Upwork, email, Meta and Google flow through a funnel into qualified client conversations">
      <defs>
        <linearGradient id="hf1" x1="0" x2="1"><stop offset="0" stopColor="#7fb0ff" /><stop offset="1" stopColor="#3f7df0" /></linearGradient>
        <linearGradient id="hf2" x1="0" x2="1"><stop offset="0" stopColor="#3f7df0" /><stop offset="1" stopColor="#1e56c8" /></linearGradient>
        <linearGradient id="hf3" x1="0" x2="1"><stop offset="0" stopColor="#ffa24d" /><stop offset="1" stopColor="#f57c1f" /></linearGradient>
        <linearGradient id="hf-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2f6fe0" stopOpacity=".4" /><stop offset="1" stopColor="#2f6fe0" stopOpacity="0" /></linearGradient>
        <pattern id="hf-dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.6" fill="#fff" opacity=".16" /></pattern>
        <filter id="hf-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#031230" floodOpacity=".38" /></filter>
      </defs>
      <rect x="10" y="10" width="620" height="500" rx="40" fill="url(#hf-dots)" />
      <circle cx="320" cy="260" r="235" fill="#fff" opacity=".05" />
      <circle cx="320" cy="260" r="165" fill="#fff" opacity=".06" />

      {/* connectors: channels -> funnel mouth */}
      <g fill="none" stroke="#a9c8ff" strokeWidth="2.5" strokeDasharray="4 8" strokeLinecap="round" opacity=".75">
        <path d="M100 100 C 170 100 190 150 245 160" />
        <path d="M100 205 C 160 205 190 190 245 185" />
        <path d="M100 310 C 160 310 190 225 245 200" />
        <path d="M100 415 C 175 415 200 260 245 215" />
      </g>

      {/* funnel */}
      <g filter="url(#hf-sh)">
        <path d="M240 140 H400 L378 215 H262 Z" fill="url(#hf1)" />
        <path d="M262 222 H378 L360 290 H280 Z" fill="url(#hf2)" />
        <path d="M280 297 H360 L346 372 H294 Z" fill="url(#hf3)" />
      </g>
      <ellipse cx="320" cy="140" rx="80" ry="12" fill="#cfe1ff" />
      <ellipse cx="320" cy="140" rx="64" ry="8" fill="#0b2a5b" opacity=".35" />
      {/* funnel outlet check */}
      <circle cx="320" cy="392" r="16" fill="#fff" />
      <path d="m312 392 6 6 11-12" fill="none" stroke="#1faa6b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      {/* prospects dropping in */}
      <Person x={262} y={78} s={0.9} fill="#1e56c8" o={0.95} />
      <Person x={320} y={52} s={1.05} fill="#0b2a5b" />
      <Person x={380} y={84} s={0.85} fill="#d96a12" o={0.95} />
      <Person x={345} y={115} s={0.6} fill="#1e56c8" o={0.8} />
      <Person x={292} y={118} s={0.55} fill="#0b2a5b" o={0.75} />

      {/* channel chips */}
      {[[70, 100, 'briefcase', '#0b2a5b'], [70, 205, 'mail', '#d96a12'], [70, 310, 'megaphone', '#1e56c8'], [70, 415, 'search', '#0b2a5b']].map(([x, y, n, c]) => (
        <g key={n} transform={`translate(${x} ${y})`} filter="url(#hf-sh)">
          <circle r="34" fill="#fff" />
          <g transform="translate(-16 -16) scale(1.33)" color={c}><Icon name={n} size={24} /></g>
        </g>
      ))}

      {/* analytics card, top right */}
      <g filter="url(#hf-sh)" transform="translate(425 36)">
        <rect width="190" height="128" rx="18" fill="#fff" />
        <rect x="18" y="18" width="70" height="9" rx="4.5" fill="#cfd9ea" />
        <circle cx="166" cy="22" r="6" fill="#f57c1f" />
        <path d="M18 100 C 45 94 60 70 86 66 S 126 74 148 42 S 168 36 174 32 L174 106 L18 106Z" fill="url(#hf-area)" />
        <path d="M18 100 C 45 94 60 70 86 66 S 126 74 148 42 S 168 36 174 32" fill="none" stroke="#1e56c8" strokeWidth="4" strokeLinecap="round" />
        <circle cx="174" cy="32" r="6" fill="#fff" stroke="#1e56c8" strokeWidth="3.5" />
      </g>

      {/* flow arrow to inbox */}
      <path d="M365 392 C 400 392 410 360 440 350" fill="none" stroke="#ffb877" strokeWidth="3" strokeDasharray="4 8" strokeLinecap="round" />

      {/* qualified conversations stack */}
      <g transform="translate(430 232)">
        <g filter="url(#hf-sh)" opacity=".7" transform="translate(14 84) scale(.94)">
          <rect width="190" height="76" rx="16" fill="#e8f0ff" />
        </g>
        <g filter="url(#hf-sh)" transform="translate(0 0)">
          <rect width="190" height="84" rx="16" fill="#fff" />
          <Person x={36} y={42} s={1} fill="#1e56c8" bg="#e6eefc" />
          <rect x="68" y="22" width="76" height="9" rx="4.5" fill="#0b2a5b" opacity=".85" />
          <rect x="68" y="40" width="104" height="7" rx="3.5" fill="#d7e2f5" />
          <rect x="68" y="55" width="52" height="16" rx="8" fill="#f57c1f" />
          <circle cx="170" cy="20" r="11" fill="#1faa6b" />
          <path d="m164 20 4 4 8-8" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g filter="url(#hf-sh)" transform="translate(-20 98)">
          <rect width="190" height="84" rx="16" fill="#fff" />
          <Person x={36} y={42} s={1} fill="#d96a12" bg="#fff0e2" />
          <rect x="68" y="22" width="64" height="9" rx="4.5" fill="#0b2a5b" opacity=".85" />
          <rect x="68" y="40" width="98" height="7" rx="3.5" fill="#d7e2f5" />
          <rect x="68" y="55" width="40" height="16" rx="8" fill="#1e56c8" />
          <circle cx="170" cy="20" r="11" fill="#1faa6b" />
          <path d="m164 20 4 4 8-8" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>

      {/* sparkles */}
      <g fill="#ffb877"><path d="M205 48l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" /><path d="M590 200l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" /><path d="M170 470l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" /></g>
    </svg>
  )
}
/* Intro: central business node with four channels orbiting it clockwise (icons stay upright) */
export function NetworkArt() {
  const R = 128
  const nodes = [[-45, 'briefcase', '#0b2a5b'], [45, 'mail', '#d96a12'], [135, 'search', '#0b2a5b'], [225, 'megaphone', '#1e56c8']]
    .map(([deg, n, c]) => [210 + R * Math.cos(((deg - 90) * Math.PI) / 180), 180 + R * Math.sin(((deg - 90) * Math.PI) / 180), n, c])
  return (
    <svg className="netart" viewBox="0 0 420 360" role="img" aria-label="Business at the center connected to four growth channels">
      <defs>
        <radialGradient id="na-core" cx=".5" cy=".4" r=".7"><stop offset="0" stopColor="#2f6fe0" /><stop offset="1" stopColor="#0b2a5b" /></radialGradient>
      </defs>
      <circle cx="210" cy="180" r="150" fill="#eaf1ff" />
      <circle cx="210" cy="180" r="105" fill="none" stroke="#c6d6f3" strokeWidth="2" strokeDasharray="4 8" />
      <g className="orbit">
        {nodes.map(([x, y], i) => <line key={i} x1="210" y1="180" x2={x} y2={y} stroke="#9fb4d6" strokeWidth="2.5" strokeDasharray="6 8" />)}
        {nodes.map(([x, y, n, c], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <g className="orbit-counter">
              <circle r="36" fill="#fff" stroke={c} strokeOpacity=".25" strokeWidth="2" />
              <g transform="translate(-16 -16) scale(1.33)" color={c}><Icon name={n} size={24} /></g>
            </g>
          </g>
        ))}
      </g>
      <circle cx="210" cy="180" r="52" fill="url(#na-core)" />
      <text x="210" y="196" textAnchor="middle" fontSize="46" fontWeight="800" fill="#fff" fontFamily="Inter, system-ui, sans-serif">B</text>
    </svg>
  )
}
/* Portfolio / case cover art, one per channel */
export function CaseCover({ kind }) {
  const themes = {
    upwork: ['#0b2a5b', '#2f6fe0', 'briefcase'],
    email: ['#7a3a0a', '#f57c1f', 'mail'],
    meta: ['#123a7a', '#4d8dff', 'megaphone'],
    google: ['#0b3b3a', '#2fb39a', 'search'],
  }
  const [a, b, icon] = themes[kind] || themes.upwork
  const id = `cc-${kind}`
  return (
    <svg className="cover" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${kind} project illustration`}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></linearGradient>
        <pattern id={`${id}-d`} width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.6" fill="#fff" opacity=".22" /></pattern>
      </defs>
      <rect width="400" height="220" fill={`url(#${id})`} />
      <rect width="400" height="220" fill={`url(#${id}-d)`} />
      <circle cx="330" cy="40" r="90" fill="#fff" opacity=".08" />
      <circle cx="60" cy="210" r="80" fill="#fff" opacity=".07" />
      <rect x="120" y="55" width="160" height="110" rx="14" fill="#fff" opacity=".95" />
      <rect x="136" y="72" width="60" height="8" rx="4" fill="#cfd9ea" />
      <rect x="136" y="90" width="128" height="6" rx="3" fill="#e3ebf8" />
      <rect x="136" y="104" width="100" height="6" rx="3" fill="#e3ebf8" />
      <rect x="136" y="130" width="50" height="22" rx="6" fill={b} />
      <circle cx="270" cy="62" r="22" fill={b} />
      <g transform="translate(258 50) scale(1)" color="#fff"><Icon name={icon} size={24} /></g>
    </svg>
  )
}

/* Final CTA backdrop */
export function CtaArt() {
  return (
    <svg className="ctaart" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="#fff" strokeOpacity=".12" strokeWidth="2">
        <circle cx="140" cy="360" r="120" /><circle cx="140" cy="360" r="190" /><circle cx="140" cy="360" r="260" />
        <circle cx="1080" cy="40" r="120" /><circle cx="1080" cy="40" r="190" /><circle cx="1080" cy="40" r="260" />
      </g>
      <circle cx="1040" cy="330" r="6" fill="#f57c1f" /><circle cx="180" cy="70" r="6" fill="#f57c1f" />
    </svg>
  )
}

/* Subtle pattern used behind inner-page heroes */
export function HeroPattern() {
  return (
    <svg className="heropattern" viewBox="0 0 600 300" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
      <g fill="none" stroke="#fff" strokeOpacity=".13" strokeWidth="2">
        <circle cx="500" cy="150" r="70" /><circle cx="500" cy="150" r="120" /><circle cx="500" cy="150" r="170" /><circle cx="500" cy="150" r="220" />
      </g>
      <circle cx="500" cy="150" r="9" fill="#f57c1f" />
      <circle cx="388" cy="92" r="5" fill="#9fc0ff" /><circle cx="560" cy="262" r="5" fill="#9fc0ff" />
    </svg>
  )
}

/* Industry illustrations: each scene is built to read clearly without a caption */
export function IndustryArt({ kind }) {
  const bg = { software: ['#0b2a5b', '#1e56c8'], agency: ['#123a7a', '#d96a12'], services: ['#0b2a5b', '#2f6fe0'], local: ['#7a3a0a', '#1e56c8'] }[kind]
  const id = `ia-${kind}`
  return (
    <svg className="indart" viewBox="0 0 480 360" preserveAspectRatio="xMidYMin meet" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={bg[0]} /><stop offset="1" stopColor={bg[1]} /></linearGradient>
        <pattern id={`${id}-d`} width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="#fff" opacity=".18" /></pattern>
        <filter id={`${id}-s`} x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#031230" floodOpacity=".4" /></filter>
      </defs>
      <circle cx="400" cy="60" r="110" fill="#fff" opacity=".07" />

      {kind === 'software' && (
        <g>
          {/* laptop */}
          <g filter={`url(#${id}-s)`}>
            <rect x="90" y="64" width="300" height="190" rx="12" fill="#0a1930" stroke="#cfe0ff" strokeWidth="5" />
            <rect x="90" y="64" width="300" height="24" rx="12" fill="#14284a" />
            <circle cx="110" cy="76" r="4.5" fill="#ff6b5e" /><circle cx="126" cy="76" r="4.5" fill="#ffc542" /><circle cx="142" cy="76" r="4.5" fill="#35d07f" />
            {[[112, 104, 70, '#7fb0ff'], [136, 122, 120, '#f5a35c'], [136, 140, 86, '#7fe0b0'], [136, 158, 140, '#cfd9ea'], [112, 176, 54, '#7fb0ff'], [136, 194, 104, '#f5a35c'], [112, 212, 40, '#7fb0ff']].map(([x, y, w, c], i) => <rect key={i} x={x} y={y} width={w} height="9" rx="4.5" fill={c} />)}
            <text x="330" y="190" fontSize="64" fontWeight="800" fill="#7fb0ff" opacity=".9" fontFamily="Consolas, monospace" textAnchor="middle">{'</>'}</text>
            <path d="M60 262 H420 L400 280 H80Z" fill="#cfe0ff" />
            <rect x="200" y="262" width="80" height="6" rx="3" fill="#8ca7d6" />
          </g>
          {/* gear + branch */}
          <g transform="translate(60 80)" filter={`url(#${id}-s)`}><circle r="30" fill="#fff" /><g transform="translate(-14 -14) scale(1.17)" color="#0b2a5b"><Icon name="code" size={24} /></g></g>
          <g filter={`url(#${id}-s)`} transform="translate(372 258)">
            <rect width="96" height="62" rx="12" fill="#fff" />
            <path d="M24 16v30M24 24c0 12 40 4 40 20" fill="none" stroke="#1e56c8" strokeWidth="4" strokeLinecap="round" />
            <circle cx="24" cy="16" r="6" fill="#0b2a5b" /><circle cx="24" cy="46" r="6" fill="#0b2a5b" /><circle cx="64" cy="44" r="6" fill="#f57c1f" />
          </g>
        </g>
      )}

      {kind === 'agency' && (
        <g>
          {/* analytics card */}
          <g filter={`url(#${id}-s)`} transform="translate(210 54)">
            <rect width="230" height="170" rx="16" fill="#fff" />
            <rect x="18" y="16" width="80" height="9" rx="4.5" fill="#cfd9ea" />
            {[40, 64, 52, 90, 76, 110].map((h, i) => <rect key={i} x={20 + i * 26} y={150 - h} width="16" height={h} rx="5" fill={i === 5 ? '#f57c1f' : '#7fb0ff'} />)}
            <path d="M22 118 C 60 108 80 84 112 78 S 170 70 206 34" fill="none" stroke="#0b2a5b" strokeWidth="4" strokeLinecap="round" />
            <circle cx="206" cy="34" r="6" fill="#fff" stroke="#0b2a5b" strokeWidth="3.5" />
          </g>
          {/* megaphone */}
          <g filter={`url(#${id}-s)`} transform="translate(30 130)">
            <circle cx="70" cy="70" r="76" fill="#fff" />
            <g transform="translate(18 18) scale(4.5)" color="#d96a12"><Icon name="megaphone" size={24} /></g>
          </g>
          {/* social bubbles */}
          <g filter={`url(#${id}-s)`}>
            <g transform="translate(70 66)"><rect width="104" height="46" rx="23" fill="#fff" /><path d="M30 14c-6-6-16 1-10 9l10 10 10-10c6-8-4-15-10-9z" fill="#f0506e" transform="translate(-2 -2) scale(.9)" /><rect x="52" y="17" width="36" height="8" rx="4" fill="#cfd9ea" /><rect x="52" y="30" width="24" height="6" rx="3" fill="#e3ebf8" /></g>
            <g transform="translate(270 262)"><rect width="150" height="56" rx="14" fill="#fff" /><rect x="14" y="14" width="64" height="9" rx="4.5" fill="#0b2a5b" opacity=".8" /><rect x="14" y="30" width="96" height="7" rx="3.5" fill="#d7e2f5" /><rect x="94" y="14" width="42" height="18" rx="9" fill="#f57c1f" /></g>
          </g>
        </g>
      )}

      {kind === 'services' && (
        <g>
          {/* contract */}
          <g filter={`url(#${id}-s)`} transform="translate(250 40) rotate(4 80 100)">
            <rect width="170" height="220" rx="12" fill="#fff" />
            <rect x="20" y="22" width="90" height="10" rx="5" fill="#0b2a5b" opacity=".85" />
            {[52, 70, 88, 106, 124].map((y, i) => <rect key={y} x="20" y={y} width={i === 4 ? 80 : 130} height="7" rx="3.5" fill="#d7e2f5" />)}
            <path d="M24 188 C 36 160 44 200 58 176 S 78 190 96 176" fill="none" stroke="#1e56c8" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="132" cy="178" r="22" fill="#f57c1f" /><path d="m122 178 8 8 14-16" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          {/* briefcase */}
          <g filter={`url(#${id}-s)`} transform="translate(40 200)">
            <rect y="22" width="150" height="100" rx="14" fill="#f57c1f" />
            <path d="M50 22v-12a8 8 0 0 1 8-8h34a8 8 0 0 1 8 8v12" fill="none" stroke="#fff" strokeWidth="9" />
            <rect y="62" width="150" height="9" fill="#d96a12" /><rect x="65" y="54" width="20" height="25" rx="4" fill="#fff" />
          </g>
          {/* consultation: two people + chat */}
          <g filter={`url(#${id}-s)`}>
            <Person x={80} y={96} s={1.5} fill="#0b2a5b" />
            <Person x={170} y={96} s={1.5} fill="#d96a12" />
            <g transform="translate(96 24)"><rect width="76" height="40" rx="12" fill="#fff" /><rect x="14" y="13" width="48" height="7" rx="3.5" fill="#cfd9ea" /><rect x="14" y="25" width="30" height="6" rx="3" fill="#e3ebf8" /></g>
          </g>
        </g>
      )}
      {kind === 'local' && (
        <g>
          {/* storefront with awning */}
          <g filter={`url(#${id}-s)`} transform="translate(120 60)">
            <rect x="0" y="62" width="240" height="190" rx="8" fill="#fff" />
            <path d="M-8 20h256l-12 52H4z" fill="#f57c1f" />
            {[0, 1, 2, 3, 4, 5].map((n) => <path key={n} d={`M${-8 + n * 42.7} 20h21.3l-${n % 2 ? 0 : 0}0 0z`} fill="none" />)}
            {[0, 2, 4].map((n) => <path key={n} d={`M${-8 + n * 42.7 + 4} 20h42.7l-1.6 52h-42.7z`} fill="#fff" opacity=".9" />)}
            <path d="M4 72c0 14 20 14 20 0 0 14 20 14 20 0 0 14 20 14 20 0 0 14 20 14 20 0 0 14 20 14 20 0 0 14 20 14 20 0 0 14 20 14 20 0 0 14 20 14 20 0 0 14 20 14 20 0 0 14 20 14 20 0 0 14 20 14 20 0 0 14 20 14 20 0" fill="none" />
            <rect x="26" y="104" width="100" height="84" rx="6" fill="#dbe9ff" />
            <path d="M32 112l36 76M60 112l50 66" stroke="#fff" strokeWidth="6" opacity=".6" />
            <rect x="146" y="112" width="70" height="140" rx="6" fill="#0b2a5b" />
            <circle cx="203" cy="186" r="5" fill="#ffb877" />
            <rect x="152" y="120" width="58" height="22" rx="6" fill="#f57c1f" />
            <text x="181" y="136" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="Inter, system-ui, sans-serif">OPEN</text>
          </g>
          {/* business types around the shop */}
          {[[70, 70, 'dumbbell'], [420, 90, 'scissors'], [66, 250, 'tooth'], [420, 262, 'scales']].map(([x, y, n]) => (
            <g key={n} transform={`translate(${x} ${y})`} filter={`url(#${id}-s)`}>
              <circle r="38" fill="#fff" />
              <g transform="translate(-24 -24) scale(2)" fill="none" stroke="#0b2a5b" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                {n === 'dumbbell' && <path d="M6 7v10M3 9.500v5M18 7v10M21 9.500v5M6 12h12" />}
                {n === 'scissors' && <><circle cx="6" cy="6.500" r="2.500" /><circle cx="6" cy="17.500" r="2.500" /><path d="M8 8l12 11M8 16L20 5" /></>}
                {n === 'tooth' && <path d="M8 3c-3 0-4.500 2-4.500 4.500 0 3 1.800 4.200 2.200 7 .3 2.200.9 6.500 2.500 6.500 1.500 0 1.200-4 3.800-4s2.300 4 3.800 4c1.600 0 2.200-4.300 2.500-6.500.4-2.800 2.200-4 2.200-7C20.500 5 19 3 16 3c-1.800 0-2.700 1-4 1S9.800 3 8 3z" />}
                {n === 'scales' && <path d="M12 3v18M6 21h12M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z" />}
              </g>
            </g>
          ))}
        </g>
      )}
    </svg>
  )
}

/* Brand marks for the floating contact buttons (filled glyphs, not stroked icons) */
export const BrandIcon = ({ name, size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    {name === 'linkedin' ? (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ) : (
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    )}
  </svg>
)
/* Fallback cover for blog posts without a featured image (deterministic per post) */
export function BlogCover({ seed = '' }) {
  const palettes = [['#0b2a5b', '#2f6fe0'], ['#123a7a', '#d96a12'], ['#0b2a5b', '#1b8a73']]
  let h = 0
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0
  const [a, b] = palettes[h % palettes.length]
  const id = `bc-${h % palettes.length}`
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bideez article" style={{ display: 'block', width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></linearGradient>
        <pattern id={`${id}-d`} width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="#fff" opacity=".2" /></pattern>
      </defs>
      <rect width="400" height="225" fill={`url(#${id})`} />
      <rect width="400" height="225" fill={`url(#${id}-d)`} />
      <circle cx="330" cy="40" r="90" fill="#fff" opacity=".08" />
      <rect x="110" y="52" width="180" height="121" rx="14" fill="#fff" opacity=".95" />
      <rect x="128" y="72" width="70" height="9" rx="4.5" fill="#cfd9ea" />
      <rect x="128" y="92" width="144" height="7" rx="3.5" fill="#e3ebf8" />
      <rect x="128" y="106" width="120" height="7" rx="3.5" fill="#e3ebf8" />
      <rect x="128" y="120" width="136" height="7" rx="3.5" fill="#e3ebf8" />
      <rect x="128" y="142" width="54" height="16" rx="8" fill="#f57c1f" />
      <circle cx="282" cy="62" r="20" fill="#f57c1f" />
      <g transform="translate(270 50)" color="#fff"><Icon name="pen" size={24} /></g>
    </svg>
  )
}