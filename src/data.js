// All site content lives here. No client results, testimonials or statistics are
// included until they are supplied and verified (see TODO markers).
export const SITE = {
  name: 'Bideez',
  url: 'https://bideez.org',
  email: 'info@bideez.org',
  address: 'Suite 305, Landmark Plaza, I.I. Chundrigar Road, Karachi, Pakistan',
  phone: '+92 333 3481657',
  phoneHref: 'tel:+923333481657',
  linkedin: 'https://www.linkedin.com/company/bideez',
  whatsapp: 'https://wa.me/923333481657',
  founded: 2018,
  hours: ['Monday - Friday: 9:00 AM - 6:00 PM (PKT)', 'Saturday: 10:00 AM - 4:00 PM (PKT)', 'Sunday: Closed'],
}

export const HOME = {
  eyebrow: 'Business Development & Digital Advertising',
  title: 'Find More Clients. Grow Your Business.',
  lead: 'Bideez helps businesses generate new opportunities through Upwork bidding, email marketing, Meta Ads and Google Ads. We help you reach potential clients, improve your visibility and support your growth with targeted business development and advertising strategies.',
  introTitle: 'Your Partner in Business Development',
  intro: [
    'Finding the right clients and reaching the right audience are essential for business growth.',
    'At Bideez, we help businesses strengthen their client acquisition efforts through Upwork bidding, email marketing and digital advertising.',
    `Established in ${SITE.founded}, we work with businesses looking to generate opportunities, expand their reach and build a stronger presence in their target markets.`,
    'Our approach focuses on understanding your business, identifying opportunities and implementing strategies aligned with your objectives.',
  ],
}

export const SERVICES = [
  {
    slug: 'upwork-bidding',
    icon: 'briefcase',
    title: 'Upwork Bidding & Lead Generation',
    nav: 'Upwork Bidding',
    tagline: 'Connect with potential clients through Upwork.',
    short: 'We identify relevant projects, prepare tailored proposals and manage your bidding activity to generate client conversations.',
    desc: 'Upwork bidding and lead generation: job research, tailored proposal writing, profile support and bidding management for software houses and agencies.',
    problem: 'Winning work on Upwork takes steady attention: finding the right jobs early, writing proposals that speak to the client, and presenting a profile that builds trust. Many delivery teams do not have the time to do this consistently.',
    includes: [
      ['Job research', 'Setting up searches and screening new postings so your team sees only relevant opportunities.'],
      ['Proposal writing', 'Tailored proposals written around each client’s requirements, not recycled templates.'],
      ['Profile support', 'Reviewing your agency or freelancer profile, portfolio items and positioning.'],
      ['Bidding management', 'Managing bids, Connects usage and follow-ups so activity stays consistent.'],
      ['Conversation handoff', 'Passing interested clients to your sales or delivery team with clear context.'],
      ['Activity review', 'Regular review of proposals sent and responses received to improve the approach.'],
    ],
    suited: 'Software houses, IT companies and agencies that want to pursue Upwork projects without taking their own team away from delivery.',
    faq: [
      ['Do you write proposals for each job?', 'Yes. Each proposal is written for the specific posting so it reflects what the client asked for.'],
      ['Can you work with our existing Upwork profile?', 'Yes. We start by reviewing your current profile and suggest improvements before bidding begins.'],
      ['Who talks to the client?', 'Once a client responds, the conversation is handed to your team so you control scoping, pricing and delivery.'],
    ],
  },
  {
    slug: 'email-marketing',
    icon: 'mail',
    title: 'Email Marketing & Lead Generation',
    nav: 'Email Marketing',
    tagline: 'Reach the right people directly in their inbox.',
    short: 'Targeted email campaigns and follow-up sequences that start relevant conversations with potential clients.',
    desc: 'Email marketing for lead generation: audience research, copywriting, outreach sequences, deliverability setup and reporting for B2B businesses.',
    problem: 'Email is one of the most direct ways to reach decision makers, but generic messages and poor setup quickly end up ignored or in spam. Results depend on a clear audience, relevant messaging and careful sending practices.',
    includes: [
      ['Audience definition', 'Defining who you want to reach, and why your offer matters to them.'],
      ['Prospect lists', 'Building and cleaning targeted contact lists that match your ideal client profile.'],
      ['Copywriting', 'Concise, relevant emails written around a single clear offer and call to action.'],
      ['Sequences & follow-ups', 'Planned multi-step sequences so interested prospects are not lost after the first email.'],
      ['Deliverability setup', 'Guidance on sending domains and authentication (SPF, DKIM, DMARC) so emails reach inboxes.'],
      ['Reporting & testing', 'Reviewing opens, replies and conversations, and testing subject lines and messaging.'],
    ],
    suited: 'B2B businesses with a clear offer that want a repeatable outbound channel to start conversations with potential clients.',
    faq: [
      ['Do you follow email regulations?', 'We plan campaigns with applicable rules in mind, such as clear sender identity and easy opt-out, and we advise on compliance for your target regions.'],
      ['Do you provide the contact lists?', 'We can help build and clean lists around your ideal client profile, or work with lists you already have.'],
      ['How is success reviewed?', 'We review the activity and replies we can measure, and use them to refine the audience and message.'],
    ],
  },
  {
    slug: 'performance-marketing',
    icon: 'target',
    title: 'Digital Advertising',
    nav: 'Digital Advertising',
    tagline: 'Reach potential customers through Meta Ads and Google Ads.',
    short: 'Targeted advertising campaigns on Meta and Google, built around your objectives and improved over time.',
    desc: 'Digital advertising with Google Ads and Meta Ads: campaign strategy, targeting, execution and optimization aligned with your business goals.',
    problem: 'Advertising budgets work harder with a clear objective, the right audience and proper tracking. Without those, campaigns can generate clicks that never turn into conversations.',
    includes: [
      ['Objective setting', 'Agreeing what a good result looks like for your business before spending begins.'],
      ['Campaign strategy', 'Choosing channels, audiences and offers that fit your services.'],
      ['Ad creation', 'Writing ad copy and guiding creative direction.'],
      ['Tracking setup', 'Setting up conversion tracking so you can see what each campaign produces.'],
      ['Optimization', 'Adjusting targeting, budgets and creative based on campaign data.'],
      ['Reporting', 'Clear updates on activity and available results.'],
    ],
    suited: 'Businesses that want to increase visibility and generate inquiries through paid channels.',
    faq: [
      ['Which platform is right for us?', 'It depends on your audience. Google reaches people actively searching, while Meta builds visibility and reaches audiences by interest and profile. We recommend after learning about your business.'],
      ['Do we need a landing page?', 'A focused landing page usually helps. We can advise on what it should include.'],
    ],
    children: [
      {
        slug: 'google-ads',
        icon: 'search',
        title: 'Google Ads',
        tagline: 'Connect with potential customers actively searching for what you offer.',
        short: 'Search advertising and other suitable campaign formats, with strategy, targeting, execution and optimization.',
        desc: 'Google Ads management: search campaign strategy, targeting, execution and optimization according to your business objectives.',
        problem: 'People searching for your service are already looking for a solution. Reaching them depends on the right keywords, relevant ads and tracking that shows what is working.',
        includes: [
          ['Keyword research', 'Finding the searches that match what you sell.'],
          ['Search campaigns', 'Structuring campaigns and ad groups around intent.'],
          ['Ad copywriting', 'Writing ads and extensions that match the search.'],
          ['Conversion tracking', 'Measuring calls, form submissions and other actions.'],
          ['Optimization', 'Refining keywords, bids, budgets and negative keywords over time.'],
          ['Reporting', 'Regular summaries of campaign activity and available results.'],
        ],
        suited: 'Businesses whose customers search online for their services.',
        faq: [
          ['Is Google Ads only search?', 'Search is the usual starting point, and we can recommend other formats where they suit your goals.'],
        ],
      },
      {
        slug: 'meta-ads',
        icon: 'megaphone',
        title: 'Meta Ads',
        tagline: 'Reach potential customers on Facebook and Instagram.',
        short: 'Targeted campaigns that increase visibility, reach relevant audiences and generate inquiries.',
        desc: 'Meta Ads (Facebook and Instagram) management: audience targeting, creative direction, lead capture and optimization.',
        problem: 'Meta Ads work best when the audience, message and follow-up are aligned. Boosting posts without a plan rarely reaches the right people.',
        includes: [
          ['Audience strategy', 'Defining who to reach by location, interests, roles and behavior.'],
          ['Offer & messaging', 'Shaping the message that fits each audience.'],
          ['Creative direction', 'Guiding images, video and copy for the ads.'],
          ['Lead capture', 'Setting up forms or landing pages to collect inquiries.'],
          ['Pixel & tracking', 'Installing tracking so results can be measured.'],
          ['Testing & optimization', 'Testing creatives and audiences and improving over time.'],
        ],
        suited: 'Businesses that want to build visibility and generate inquiries on social platforms.',
        faq: [
          ['Do you design the creatives?', 'We guide creative direction and copy. Design support can be discussed during the consultation.'],
        ],
      },
    ],
  },
]

export const INDUSTRIES = [
  {
    slug: 'software-houses-it-companies',
    icon: 'code',
    title: 'Software Houses & IT Companies',
    short: 'Helping software businesses pursue new project opportunities and strengthen their client acquisition efforts.',
    desc: 'Business development for software houses and IT companies: Upwork bidding, email outreach and advertising to pursue new project opportunities.',
    body: 'Software houses and IT companies often rely on referrals and irregular inbound inquiries. We help build additional, more consistent routes to new projects through Upwork bidding, email outreach and targeted advertising, so your team can focus on delivery.',
    fit: ['Upwork Bidding', 'Email Marketing', 'Google Ads'],
  },
  {
    slug: 'digital-marketing-agencies',
    icon: 'layers',
    title: 'Digital Marketing Agencies',
    short: 'Supporting agencies looking to expand their reach and generate new business opportunities.',
    desc: 'Business development for digital marketing agencies: expanding reach and generating new client opportunities through bidding, email and advertising.',
    body: 'Agencies spend their time winning results for clients, which leaves little time to market themselves. We act as an extra business development arm, supporting your own pipeline through Upwork, email campaigns and paid channels.',
    fit: ['Email Marketing', 'Upwork Bidding', 'Meta Ads'],
  },
  {
    slug: 'professional-services',
    icon: 'building',
    title: 'Professional Services',
    short: 'Helping service-based businesses reach potential customers through targeted business development and advertising.',
    desc: 'Business development for professional service businesses: reaching potential customers through email, Google Ads and Meta Ads.',
    body: 'Consultancies and service firms depend on trust and relevance. We help you reach the right people with clear messaging through email and advertising, and hand over conversations that are ready to continue.',
    fit: ['Email Marketing', 'Google Ads', 'Meta Ads'],
  },
  {
    slug: 'small-local-businesses',
    icon: 'store',
    title: 'Small & Local Businesses',
    short: 'Helping gyms, spas, salons, law firms, dental clinics and other local businesses attract more customers in their area.',
    desc: 'Marketing for small and local businesses such as gyms, spas, salons, lawyers and dentists: Meta Ads, Google Ads and email campaigns that bring in new local customers.',
    body: 'Gyms, spas, salons, law firms, dental clinics and other local businesses depend on being found by people nearby. We help you reach them through Google Ads for people searching in your area, Meta Ads that build visibility and generate inquiries, and email campaigns that keep customers coming back, with clear targeting and simple reporting.',
    fit: ['Google Ads', 'Meta Ads', 'Email Marketing'],
    examples: ['Gyms & fitness studios', 'Spas & salons', 'Law firms', 'Dental & medical clinics'],
  },]

export const WHY = [
  ['clock', 'Established Experience', `Bideez has been providing business development services since ${SITE.founded}.`],
  ['target', 'Targeted Approach', 'We focus on relevant opportunities and audiences aligned with your business objectives.'],
  ['layout', 'Structured Processes', 'Our services follow organized workflows for research, bidding, campaign execution and improvement.'],
  ['shield', 'Business-Focused Solutions', 'We align our approach with your services, target audience and growth goals.'],
  ['users', 'Collaborative Partnership', 'We work with businesses to understand their requirements and support their client acquisition efforts.'],
]

export const STEPS = [
  ['compass', 'Understand Your Business', 'We learn about your services, target market and business objectives.'],
  ['target', 'Develop a Strategy', 'We identify the appropriate bidding, email or advertising approach.'],
  ['play', 'Execute the Plan', 'We carry out the agreed activities through Upwork bidding, email marketing, Meta Ads or Google Ads.'],
  ['chart', 'Review and Improve', 'We review campaign activity and available results to identify improvement opportunities.'],
]

// Portfolio filters. Email marketing is intentionally not a separate filter: we have no standalone
// email case studies, so lead generation work is shown as one portfolio.
export const CASE_FILTERS = ['All', 'Upwork', 'Meta Ads', 'Google Ads']

export const PORTFOLIO_DISCLAIMER = {
  upwork: 'Figures are taken from the public Upwork statistics visible in each screenshot. Freelancer names and photos are hidden for privacy. Results vary by profile, niche, market conditions and effort, and past results do not guarantee future outcomes.',
  ads: 'Figures are taken from the ad-account screenshots shown. Client names are withheld for confidentiality. Results vary by business, niche, market conditions and budget, and past results do not guarantee future outcomes.',
}

// Source: "Upwork case studies.pdf", "Bideez Meta Portfolio Copy.pdf", "Bideez Google Portfolio Copy.pdf"
const upwork = (o) => ({ platform: 'Upwork', kind: 'upwork', tag: 'Upwork Profile Management', ...o })
export const CASES = [
  upwork({
    slug: 'ai-powered-full-stack-developer-python-node-react', title: 'AI-Powered Full-Stack Developer (Python + Node.js + React)', badge: 'Expert-Vetted', meta: 'Austin, Texas, USA · $150/hr',
    image: '/portfolio/upwork-profile-1.jpg', headline: '$2M+', headlineLabel: 'total earnings',
    stats: [['$2M+', 'Total earnings'], ['1,280', 'Total jobs'], ['62,000', 'Total hours'], ['100%', 'Job success']],
    contribution: ['Positioned the profile around AI solutions and full-stack development', 'Presented the Expert-Vetted badge and a 100% Job Success Score as clear trust signals', 'Set a premium hourly rate to attract serious, well-funded clients', 'Focused lead generation on startups and enterprises with scalable product needs'],
    results: ['$2M+ in total earnings on the profile', '1,280 completed jobs and 62,000 hours logged', 'Premium rate sustained alongside a 100% Job Success Score'],
    takeaway: 'Clear niche positioning and trust signals can support premium rates at scale on Upwork.',
  }),
  upwork({
    slug: 'wordpress-expert-frontend-developer', title: 'WordPress Expert & Frontend Developer', badge: 'Expert-Vetted', meta: 'San Francisco, USA · $25/hr',
    image: '/portfolio/upwork-profile-2.jpg', headline: '$500K+', headlineLabel: 'total earnings',
    stats: [['$500K+', 'Total earnings'], ['239', 'Total jobs'], ['4,300', 'Total hours'], ['100%', 'Job success']],
    contribution: ['Positioned the profile as a WordPress specialist offering custom themes and plugins', 'Used the Expert-Vetted badge and a 100% Job Success Score as authority signals', 'Highlighted speed, security and scalability as the core value proposition', 'Targeted clients looking for high-performance, custom WordPress solutions'],
    results: ['$500K+ in total earnings on the profile', '239 completed jobs and 4,300 hours logged', 'Strong trust signals with a 100% Job Success Score'],
    takeaway: 'A focused specialty plus visible trust signals can drive steady, high-value work.',
  }),
  upwork({
    slug: 'full-stack-developer-ai-powered', title: 'Full-Stack Developer (AI-Powered)', badge: 'Expert-Vetted', meta: 'Dubai, UAE · $30/hr',
    image: '/portfolio/upwork-profile-3.jpg', headline: '$200,000+', headlineLabel: 'total earnings',
    stats: [['$200,000+', 'Total earnings'], ['99', 'Total jobs'], ['5,335+', 'Total hours'], ['100%', 'Job success']],
    contribution: ['Positioned the profile as a premium Expert-Vetted developer', 'Focused on high-value, long-term clients instead of low-budget projects', 'Created a strong niche authority around AI-powered Full-Stack Development', 'Optimized proposals to attract enterprise-level and startup founders'],
    results: ['Consistent inflow of high-paying clients', 'Strong trust signals for Upwork’s algorithm', 'Long-term contracts with premium hourly rates'],
    takeaway: 'Correct positioning and lead strategy can unlock top-tier clients on Upwork.',
  }),
  upwork({
    slug: 'amazon-ppc-ads-specialist', title: 'Amazon PPC & Ads Specialist', badge: 'Top Rated Plus', meta: 'Lahore, Pakistan · $19.99/hr',
    image: '/portfolio/upwork-profile-4.jpg', headline: '$100,000+', headlineLabel: 'total earnings',
    stats: [['$100,000+', 'Total earnings'], ['57', 'Total jobs'], ['11,352+', 'Total hours'], ['100%', 'Job success']],
    contribution: ['Rewrote and optimized the profile to highlight Amazon PPC performance', 'Built a retainer-focused lead strategy for recurring monthly clients', 'Filtered low-quality leads and targeted serious Amazon sellers', 'Maintained strong client communication and account consistency'],
    results: ['Fewer jobs with very high total hours', 'Stable monthly income from long-term clients', 'Strong Top Rated Plus performance with zero drops in JSS'],
    takeaway: 'Quality leads matter more than volume.',
  }),
  upwork({
    slug: 'backend-development-virtual-assistance', title: 'Backend Development & Virtual Assistance', badge: 'Top Rated Plus', meta: 'Lahore, Pakistan',
    image: '/portfolio/upwork-profile-5.jpg', headline: '$100,000+', headlineLabel: 'total earnings',
    stats: [['$100,000+', 'Total earnings'], ['50', 'Total jobs'], ['8,762+', 'Total hours'], ['100%', 'Job success']],
    contribution: ['Created a hybrid positioning (Backend + Virtual Assistance)', 'Targeted consistent mid-range clients for long-term work', 'Optimized proposals to match client pain points', 'Improved profile structure to increase invite rate'],
    results: ['Steady and predictable workflow', 'Strong client retention', 'High earnings with fewer disputes and revisions'],
    takeaway: 'Even competitive niches can be scaled with proper handling.',
  }),
  upwork({
    slug: 'full-stack-developer-web-mobile-ai', title: 'Full-Stack Developer (Web, Mobile, AI)', badge: 'Top Rated Plus', meta: 'Karachi, Pakistan · $30/hr',
    image: '/portfolio/upwork-profile-6.jpg', headline: '100%', headlineLabel: 'job success score',
    stats: [['$30/hr', 'Hourly rate'], ['11', 'Total jobs'], ['686', 'Total hours'], ['100%', 'Job success']],
    contribution: ['Positioned the profile clearly as a Full-Stack Developer (Web, Mobile, AI)', 'Leveraged the Top Rated Plus badge as a strong authority and trust signal', 'Highlighted experience points visible on the profile (10+ years, global delivery)', 'Focused on quality-driven lead generation instead of mass proposals'],
    results: ['Strong credibility despite a lower job count', 'Premium perception within the developer category', 'Consistent inbound interest from serious, relevant clients'],
    takeaway: 'Clear positioning and the right lead strategy can create trust even with fewer completed jobs.',
  }),
  {
    slug: 'fashion-store-meta-249k', platform: 'Meta Ads', kind: 'meta', tag: 'Meta Ads · Ecommerce', title: 'Ecommerce Fashion Store', niche: 'Apparel & Fashion',
    image: '/portfolio/meta-fashion-249k.jpg', headline: '4.50x ROAS', headlineLabel: '$55K into $249K', period: 'November 2024',
    stats: [['$55K', 'Ad spend'], ['$249K', 'Purchase conversion value'], ['4.50x', 'ROAS'], ['1,516', 'Purchases']],
  },
  {
    slug: 'fashion-store-meta-black-friday', platform: 'Meta Ads', kind: 'meta', tag: 'Meta Ads · Ecommerce', title: 'Ecommerce Fashion Store: Black Friday / Cyber Monday', niche: 'Apparel & Fashion',
    image: '/portfolio/meta-fashion-bfcm.jpg', headline: '4.84x ROAS', headlineLabel: '$17K into $82K in 4 days', period: 'BFCM, 29 Nov – 2 Dec 2024',
    stats: [['$17K', 'Ad spend'], ['$82K', 'Purchase conversion value'], ['4.84x', 'ROAS'], ['551', 'Purchases']],
  },
  {
    slug: 'fashion-store-meta-retargeting', platform: 'Meta Ads', kind: 'meta', tag: 'Meta Ads · Retargeting', title: 'Retargeting Campaign: Ecommerce Fashion Store', niche: 'Apparel & Fashion',
    image: '/portfolio/meta-retargeting.jpg', headline: '11.48x ROAS', headlineLabel: '€400 into €4,589 from retargeting alone', period: 'August 2025',
    stats: [['€400', 'Ad spend'], ['€4,589', 'Purchase conversion value'], ['11.48x', 'ROAS'], ['63', 'Purchases']],
  },
  {
    slug: 'roofing-lead-generation-meta', platform: 'Meta Ads', kind: 'meta', tag: 'Meta Ads · Lead Generation', title: 'Lead Generation: Roofing Service', niche: 'Roofing Service',
    image: '/portfolio/meta-leadgen.jpg', headline: '1,000+ leads', headlineLabel: 'at about $26 per lead', period: 'Campaign data to March 2025',
    stats: [['1,000+', 'Leads generated'], ['$26', 'Cost per lead'], ['23', 'Ad sets'], ['498K', 'Impressions']],
  },
  {
    slug: 'fashion-store-google-127k', platform: 'Google Ads', kind: 'google', tag: 'Google Ads · Ecommerce', title: 'Ecommerce Fashion Store', niche: 'Apparel & Fashion',
    image: '/portfolio/google-fashion-127k.jpg', headline: '9.87x ROAS', headlineLabel: '$12K into $127K', period: 'December 2024',
    stats: [['$12.9K', 'Ad spend'], ['$127K', 'Conversion value'], ['9.87x', 'ROAS'], ['798.97', 'Conversions']],
  },
  {
    slug: 'dropshipping-store-google-827k', platform: 'Google Ads', kind: 'google', tag: 'Google Ads · Ecommerce', title: 'Dropshipping Store', niche: 'General Dropshipping',
    image: '/portfolio/google-dropship-827k.jpg', headline: '2.45x ROAS', headlineLabel: '€338K into €827K', period: 'June 2026',
    stats: [['€338K', 'Ad spend'], ['€827K', 'Conversion value'], ['2.45x', 'ROAS'], ['11.2K', 'Conversions']],
  },
  {
    slug: 'fashion-dropshipping-google-4m', platform: 'Google Ads', kind: 'google', tag: 'Google Ads · Ecommerce', title: 'Fashion Dropshipping Store', niche: 'Fashion Dropshipping',
    image: '/portfolio/google-dropship-435m.jpg', headline: '2.83x ROAS', headlineLabel: '€1.54M into €4.35M', period: 'June 2026',
    stats: [['€1.54M', 'Ad spend'], ['€4.35M', 'Conversion value'], ['2.83x', 'ROAS'], ['57.1K', 'Conversions']],
  },
]

// Featured on the homepage: one per channel, mixed so no single channel dominates.
export const FEATURED = ['ai-powered-full-stack-developer-python-node-react', 'roofing-lead-generation-meta', 'fashion-store-google-127k', 'fashion-store-meta-black-friday']

// Blog content comes from WordPress at build time (scripts/fetch-wp.mjs -> src/generated/). No articles live in this file.

export const FAQ = [
  ['Who does Bideez work with?', 'Software houses, IT companies, digital marketing agencies, professional service businesses, and small and local businesses such as gyms, spas, salons, law firms and dental clinics.'],
  ['Which services do you offer?', 'Upwork bidding and lead generation, email marketing, Meta Ads and Google Ads.'],
  ['How long have you been operating?', `Bideez was established in ${SITE.founded}.`],
  ['Can I use just one service?', 'Yes. You can start with a single channel and add others later.'],
  ['How do we get started?', 'Book a consultation. We will discuss your objectives and recommend an approach.'],
]

export const LEADERS = [
  {
    name: 'Muhammad Ali, PMP', role: 'CEO & Founder', photo: '/team/leader-ceo.jpg',
    intro: 'Muhammad Ali is the Founder and CEO of Bideez. A PMP-certified project manager, he brings a background in project management, business development and client management to the way Bideez plans, delivers and grows its client work.',
    highlightsTitle: 'Experience highlights',
    highlights: ['Coordinated 25+ software projects', 'Collaborated with 50+ clients', 'Led cross-functional teams of up to 20 members', 'Managed 10,000+ Upwork proposals', 'Contributed to $10M+ in business opportunities'],
    outro: 'He brings structured execution, stakeholder communication, team coordination and continuous improvement into the way the team works with every client.',
  },
  {
    name: 'Muzammil Aamir', role: 'Co-Founder & Operational Head', photo: '/team/leader-cofounder.jpg',
    intro: 'Muzammil Aamir is Co-Founder and Operational Head at Bideez. A seasoned digital marketing strategist, he has a proven track record of generating profitable purchases and scaling brands to seven figures in total revenue.',
    outro: 'He leads research and content development teams, oversees social media content and purchase advertising, and builds digital marketing strategies around each client’s goals. His leadership at Bideez is built on clear direction, disciplined execution and results clients can measure.',
  },
]

export const MANAGEMENT = [{ name: 'Shafaq Ali', role: 'Human Resources Manager', photo: '/team/leader-hr.jpg' }]

export const TEAM = [
  { name: 'Muhammad Usama', role: 'Senior Business Developer' },
  { name: 'Abdul Rafay', role: 'Senior Upwork Bidder' },
  { name: 'Muhammad Abrar', role: 'Senior AI Developer' },
  { name: 'Farhina', role: 'Meta Ads Specialist' },
  { name: 'Aiman Junaid', role: 'Meta Ads Specialist' },
  { name: 'Abdul Hadi', role: 'Google Ads Specialist' },
  { name: 'Abdul Wahab', role: 'Google Ads Manager' },
  { name: 'Sarah Aamir', role: 'Graphic Designer' },
  { name: 'Dania Irfan', role: 'Content Creator' },
]
export const PAGES = {
  '/': { title: 'Bideez | Upwork Bidding, Email Marketing, Meta Ads & Google Ads', desc: 'Bideez is a business development and digital advertising company, established in 2018, helping businesses find clients through Upwork bidding, email marketing, Meta Ads and Google Ads.' },
  '/services': { title: 'Services | Bideez', desc: 'Upwork bidding, email marketing, Meta Ads and Google Ads from Bideez.' },
  '/industries': { title: 'Industries We Support | Bideez', desc: 'Business development for software houses, IT companies, digital marketing agencies, professional service firms, and small and local businesses such as gyms, spas, salons, lawyers and dentists.' },
  '/portfolio': { title: 'Portfolio | Bideez', desc: 'Selected Bideez projects across Upwork bidding, email marketing, Meta Ads and Google Ads.' },
  '/about': { title: 'About Bideez | Business Development Since 2018', desc: 'Learn about Bideez, our approach and why businesses choose us for business development and digital advertising.' },
  '/blog': { title: 'Blog | Bideez', desc: 'Articles on Upwork, lead generation, digital marketing and business growth.' },
  '/contact': { title: 'Contact Bideez', desc: 'Get in touch with Bideez about Upwork bidding, email marketing, Google Ads or Meta Ads.' },
  '/book-a-consultation': { title: 'Book a Consultation | Bideez', desc: 'Book a consultation with Bideez to discuss your business development goals.' },
  '/privacy-policy': { title: 'Privacy Policy | Bideez', desc: 'How Bideez collects and uses information.' },
  '/terms-and-conditions': { title: 'Terms & Conditions | Bideez', desc: 'Terms of use for the Bideez website and services.' },
  '/cookie-policy': { title: 'Cookie Policy | Bideez', desc: 'How Bideez uses cookies.' },
}

export function allRoutes() {
  const routes = Object.entries(PAGES).map(([path, m]) => ({ path, ...m }))
  for (const s of SERVICES) {
    routes.push({ path: `/services/${s.slug}`, title: `${s.nav || s.title} | Bideez`, desc: s.desc })
    for (const c of s.children || []) routes.push({ path: `/services/${s.slug}/${c.slug}`, title: `${c.title} | Bideez`, desc: c.desc })
  }
  for (const i of INDUSTRIES) routes.push({ path: `/industries/${i.slug}`, title: `${i.title} | Bideez`, desc: i.desc })
  for (const c of CASES) routes.push({ path: `/portfolio/${c.slug}`, title: `${c.title} | Portfolio | Bideez`, desc: `${c.tag}: ${c.title}, ${c.headline} ${c.headlineLabel}.` })
  return routes // blog routes are added by scripts/postbuild.mjs from the WordPress data
}

// Verified testimonials. Avatars are monograms (initials) for every entry so all cards share one layout;
// no stock or random photos are used for real people. `source` is shown only for LinkedIn recommendations.
export const TESTIMONIALS = [
  { name: 'Waqar Ghaffar', role: 'Founder, TPLEX & Zunaro', service: 'Upwork Bidding', source: 'LinkedIn recommendation', text: 'Undoubtedly he has a command of writing converting proposals as he has brought several projects to our company. I will recommend Ali for bidding on Upwork because he always comes up with the latest bidding techniques and always updates the proposal format according to his recent research.' },
  { name: 'Valentin Butiugin', role: 'Venture Builder, _Digital Billion', service: 'Upwork Bidding', source: 'LinkedIn recommendation', text: 'Big shoutout to Muhammad Ali and his incredible team for their outstanding support with Upwork bidding services! Their expertise and dedication helped us secure valuable projects. Highly recommend them for anyone seeking top-notch bidding assistance on Upwork!' },
  { name: 'Faseeh ur Rahman', role: '2D Animator, Co-founder, Studio Qais', service: 'Upwork Lead Generation', source: 'LinkedIn recommendation', text: 'I appreciate and recommend Ali and his team Bideez they have secured me many valuable clients by providing lead generation service on Upwork. We are still working with them and I found the punctual and results oriented. I would recommend Bideez lead generation service and also Ali’s training to those who can’t afford this service. Good luck to him!' },
  { name: 'George', role: 'Roofing Service', service: 'Meta Ads', text: 'I had a great experience working with Muhammad and Bideez on our Meta Ads campaigns. Their team helped us generate quality leads for our roofing business while keeping the campaign focused on our target audience. Muhammad was professional, responsive, and committed to understanding our business needs. I would definitely recommend Bideez to businesses looking to grow through paid advertising.' },
  { name: 'Pepius Fernandes', role: 'Apparel & Fashion', service: 'Meta Ads', text: 'Muhammad and Bideez did a great job managing our Meta Ads, particularly with retargeting campaigns. Their approach helped us make better use of our audience and advertising budget. I appreciated their communication, commitment, and focus on campaign performance. It’s been a pleasure working with them, and I would recommend Bideez for Meta Ads and lead generation.' },
  { name: 'Alister D’Costa', role: 'General Dropshipping', service: 'Google Ads', text: 'Working with Muhammad and Bideez on our Google Ads campaigns has been a positive experience. Their team helped us scale our advertising efforts while maintaining a clear focus on performance and return on investment. Muhammad understands the importance of business goals and communicates professionally throughout the process. I would recommend Bideez to businesses looking for reliable Google Ads support.' },
]