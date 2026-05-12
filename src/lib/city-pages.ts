export interface CityPageData {
  slug: string;
  city: string;
  region: string;
  displayName: string;
  eyebrow: string;
  servingLabel: string;
  /* Hero */
  heroHeadline1: string;
  heroAccent: string;
  heroHeadline3: string;
  heroSubtext: string;
  heroImages: [string, string];          // [front, back] mockup images
  ctaButtonText: string;
  ctaConsultationText: string;
  /* Why local manifesto */
  localKnowledge: { title: string; description: string };
  whyLocalLines: Array<{ before?: string; accent?: string; after?: string }>;
  pillars: Array<{ title: string; body: string }>;
  /* Stats (counter-animated) */
  stats: Array<{ value: number; suffix: string; label: string; note: string }>;
  /* Services */
  services: Array<{ title: string; desc: string; features: string[] }>;
  /* Case study card */
  caseStudy: {
    tag: string;
    title: string;
    blurb: string;
    image: string;
    href: string;
    kpis: Array<{ value: string; label: string }>;
  };
  /* Schema / SEO */
  schema: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    latitude: string;
    longitude: string;
    areaServed: string[];
    ratingValue: string;
    reviewCount: string;
  };
  testimonials: Array<{
    name: string; title: string; company: string; rating: number;
    review: string; date: string; projectImage: string;
    projectName: string; projectCategory: string; projectResult: string;
  }>;
  metaDescription: string;
}

/* ── City definitions ───────────────────────────────────────────── */

const cityPages: CityPageData[] = [
  // ── Toronto ──────────────────────────────────────────────────────
  {
    slug: 'web-design-toronto',
    city: 'Toronto',
    region: 'Ontario',
    displayName: 'Toronto, Ontario',
    eyebrow: 'Web Design \u00b7 Toronto',
    servingLabel: 'Serving Toronto & the GTA',
    heroHeadline1: 'Web design for',
    heroAccent: 'Toronto',
    heroHeadline3: 'businesses that mean it.',
    heroSubtext: "The GTA is the most competitive market in Canada. Your website can't just look good\u2014it needs to outwork your competitors from Bay Street to Liberty Village. We build sites that do exactly that.",
    heroImages: ['/PROJECTS/gallery/amigo-contracting-1.webp', '/PROJECTS/gallery/flowga-1.webp'],
    ctaButtonText: 'Start your project',
    ctaConsultationText: 'Free Toronto consultation',
    localKnowledge: {
      title: 'We know this market.',
      description: "Toronto moves fast. Your website needs to keep up. We understand the difference between what works on King West and what converts in Scarborough\u2014because local context isn't a nice-to-have, it's how you win.",
    },
    whyLocalLines: [
      { before: "Your competitors on Google aren't sleeping." },
      { before: 'We build sites that ', accent: 'outrank', after: ' them.' },
      { before: 'Every section earns its place.' },
      { before: 'Every click moves toward a lead.' },
    ],
    pillars: [
      { title: 'GTA-specific SEO', body: "We target the searches Toronto customers actually make\u2014not generic national keywords that don't convert." },
      { title: 'In-person available', body: 'Coffee on Queen West, meeting at your office in North York. We show up.' },
      { title: 'Competitive intelligence', body: "We research your Toronto competitors and build a site that makes the choice obvious." },
    ],
    stats: [
      { value: 25, suffix: '+', label: 'Sites shipped', note: 'For GTA businesses' },
      { value: 312, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
      { value: 99, suffix: '/100', label: 'PageSpeed', note: 'Lighthouse performance score' },
      { value: 18, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: [
      { title: 'Custom Web Design', desc: 'Conversion-engineered designs built for Toronto\u2019s competitive landscape. Not templates\u2014every layout, colour, and CTA is informed by what actually drives leads in the GTA market.', features: ['Conversion-first', 'Responsive', 'GTA-optimized'] },
      { title: 'Webflow Development', desc: 'Clean, fast Webflow builds you can update yourself. No developer dependency, no monthly lock-in. Built to handle the traffic volume Toronto businesses generate.', features: ['CMS integration', 'Visual editing', 'Scalable'] },
      { title: 'Local SEO', desc: 'Technical SEO and Google Business Profile optimization targeting the searches your Toronto customers make\u2014from "near me" in Yorkville to neighbourhood-specific queries in Etobicoke.', features: ['Google Business', 'Neighbourhood targeting', 'Schema markup'] },
      { title: 'Ongoing Support', desc: 'Monthly retainers for content updates, A/B testing, and conversion optimization. Most Toronto clients stay because their site keeps earning more month after month.', features: ['A/B testing', 'Performance monitoring', 'Content updates'] },
    ],
    caseStudy: {
      tag: 'Contracting \u00b7 Toronto',
      title: 'Amigo Contracting',
      blurb: 'From outdated site to a sleek Webflow build with call tracking, instant SMS lead alerts, and local SEO that actually ranks across the GTA.',
      image: '/PROJECTS/gallery/amigo-contracting-1.webp',
      href: '/case-studies/amigo-contracting-services',
      kpis: [
        { value: '+180%', label: 'inbound leads' },
        { value: '98', label: 'PageSpeed' },
        { value: '21-day', label: 'launch' },
      ],
    },
    schema: {
      streetAddress: '695 Talbot St', addressLocality: 'London',
      postalCode: 'N6A 2T3', latitude: '43.6532', longitude: '-79.3832',
      areaServed: ['Toronto, Ontario', 'Mississauga, Ontario', 'Brampton, Ontario', 'Markham, Ontario', 'Vaughan, Ontario', 'Richmond Hill, Ontario'],
      ratingValue: '4.9', reviewCount: '47',
    },
    testimonials: [
      {
        name: 'Sergio Amigon', title: 'CEO', company: 'Amigo Contracting Services',
        rating: 5, date: '2024-12-15',
        review: 'Webloft Studio rebuilt our entire web presence from scratch. The results spoke for themselves\u2014our phone started ringing with qualified leads within the first month. They understood our business and built a site that works as hard as we do.',
        projectImage: '/PROJECTS/amigo-contracting-services.webp',
        projectName: 'Amigo Contracting Services', projectCategory: 'Construction',
        projectResult: '+180% Lead Increase',
      },
      {
        name: 'Sarah Mitchell', title: 'Founder', company: 'Bloom Wellness',
        rating: 5, date: '2024-11-20',
        review: "The team at Webloft Studio didn't just build us a website\u2014they built us a lead generation machine. Our booking rate increased by 200% and we finally have a site that represents our brand perfectly.",
        projectImage: '/PROJECTS/flowga.webp',
        projectName: 'Flowga Yoga Studio', projectCategory: 'Wellness',
        projectResult: '+300% Online Bookings',
      },
      {
        name: 'Jessica Wong', title: 'Director', company: 'NovaTech Solutions',
        rating: 5, date: '2025-01-08',
        review: "As a tech company, we had high standards for our website. Webloft exceeded them. The site is fast, beautifully designed, and most importantly it converts visitors into demo requests at 3\u00d7 our previous rate.",
        projectImage: '/PROJECTS/amigo-contracting-services.webp',
        projectName: 'Amigo Contracting Services', projectCategory: 'Technology',
        projectResult: '3\u00d7 Qualified Leads',
      },
    ],
    metaDescription: 'Web design for Toronto businesses. Conversion-focused websites, Webflow development, and local SEO that turns your GTA visitors into paying customers. Free consultation.',
  },

  // ── London, Ontario ──────────────────────────────────────────────
  {
    slug: 'web-design-london-ontario',
    city: 'London',
    region: 'Ontario',
    displayName: 'London, Ontario',
    eyebrow: 'Web Design \u00b7 London ON',
    servingLabel: 'Serving London & Southwestern Ontario',
    heroHeadline1: 'Web design for',
    heroAccent: 'London',
    heroHeadline3: 'businesses ready to grow.',
    heroSubtext: "We're based here. We know the difference between what works for a Richmond Row restaurant and a Hyde Park contractor. Your website should reflect your market\u2014not look like it came from a factory in another province.",
    heroImages: ['/PROJECTS/gallery/flowga-1.webp', '/PROJECTS/gallery/aeries-1.webp'],
    ctaButtonText: 'Start your project',
    ctaConsultationText: 'Free London consultation',
    localKnowledge: {
      title: 'Built in London. For London.',
      description: "From the downtown core to Byron, from Western's campus to the 401 corridor\u2014we understand what London businesses need because we live and work here too.",
    },
    whyLocalLines: [
      { before: "We don't outsource your project." },
      { before: 'We build it ', accent: 'in-house', after: ', right here.' },
      { before: 'Same city. Same timezone.' },
      { before: 'Actually ', accent: 'accountable', after: '.' },
    ],
    pillars: [
      { title: 'London-first SEO', body: "Targeting the searches Londoners actually make\u2014\"roofer London Ontario,\" not \"roofer Canada.\"" },
      { title: 'Meet in person', body: "Walk into our office or we'll come to yours. That's how we build websites that actually match your business." },
      { title: 'Local referrals', body: "Most of our clients come from other London business owners. That's the kind of reputation we protect." },
    ],
    stats: [
      { value: 20, suffix: '+', label: 'Sites shipped', note: 'For Southwestern Ontario' },
      { value: 250, suffix: '%', label: 'Avg. lead lift', note: 'Across local projects' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'On every site we ship' },
      { value: 21, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: [
      { title: 'Custom Web Design', desc: 'Every London business is different\u2014a Richmond Row bar needs a different site than a Byron dental clinic. We design from scratch based on your market, your customers, and what actually converts locally.', features: ['Conversion-first', 'Responsive', 'Locally informed'] },
      { title: 'Webflow Development', desc: 'Webflow sites you own and control. No developer on retainer just to change a phone number. We build it clean, fast, and editable\u2014right here in London.', features: ['CMS integration', 'Self-service editing', 'No lock-in'] },
      { title: 'Local SEO', desc: "Google Business Profile optimization, schema markup, and keyword strategy targeting the searches London customers actually type\u2014\"HVAC London Ontario\" not \"HVAC Canada.\"", features: ['Google Business', 'Local keywords', 'Schema markup'] },
      { title: 'Ongoing Support', desc: 'Content updates, performance tracking, and conversion optimization from a team you can actually visit in person. Most London clients stay year after year.', features: ['Monthly reporting', 'Content updates', 'In-person available'] },
    ],
    caseStudy: {
      tag: 'Yoga studio \u00b7 Toronto',
      title: 'Flowga Yoga',
      blurb: 'A premium visual system + booking-funnel pages that turned cold traffic into a loyal waitlist\u2014the same conversion-first approach we bring to London businesses.',
      image: '/PROJECTS/gallery/flowga-1.webp',
      href: '/case-studies/flowga-yoga-studio',
      kpis: [
        { value: '+300%', label: 'online bookings' },
        { value: '3.2\u00d7', label: 'session time' },
        { value: 'Fast', label: 'delivery' },
      ],
    },
    schema: {
      streetAddress: '123 King Street', addressLocality: 'London',
      postalCode: 'N6A 1A1', latitude: '42.9849', longitude: '-81.2453',
      areaServed: ['London, Ontario', 'St. Thomas, Ontario', 'Strathroy, Ontario', 'Woodstock, Ontario', 'Sarnia, Ontario'],
      ratingValue: '4.8', reviewCount: '32',
    },
    testimonials: [
      {
        name: 'David Chen', title: 'Owner', company: 'Local Home Services',
        rating: 5, date: '2024-10-30',
        review: "From strategy to execution, everything was seamless. They understood our local market and built a website that actually brings in customers. Best investment we've made for our business.",
        projectImage: '/PROJECTS/aeries.webp',
        projectName: 'Aeries', projectCategory: 'Business',
        projectResult: 'Improved User Experience',
      },
      {
        name: "Ryan O'Connor", title: 'Owner', company: "O'Connor Plumbing",
        rating: 5, date: '2024-08-22',
        review: "I was skeptical about how much a website could matter for a plumbing business. Webloft proved me wrong. Our service calls jumped significantly and the site basically pays for itself every month.",
        projectImage: '/PROJECTS/flowga.webp',
        projectName: 'Flowga Yoga Studio', projectCategory: 'Trades',
        projectResult: '+160% Service Calls',
      },
      {
        name: 'Tom Erikson', title: 'Owner', company: 'Erikson Landscaping',
        rating: 5, date: '2024-07-18',
        review: "Seasonal businesses like ours need a website that generates leads year-round. Webloft built us a site with SEO that keeps quote requests coming in even during the slow months. Game changer.",
        projectImage: '/PROJECTS/flowga.webp',
        projectName: 'Flowga Yoga Studio', projectCategory: 'Outdoor Services',
        projectResult: '+190% Quote Requests',
      },
    ],
    metaDescription: 'Web design in London, Ontario. Conversion-focused websites built locally by a studio that knows your market. Webflow, SEO, and lead generation. Free consultation.',
  },

  // ── Mississauga ──────────────────────────────────────────────────
  {
    slug: 'web-design-mississauga',
    city: 'Mississauga',
    region: 'Ontario',
    displayName: 'Mississauga, Ontario',
    eyebrow: 'Web Design \u00b7 Mississauga',
    servingLabel: 'Serving Mississauga & Peel Region',
    heroHeadline1: 'Web design for',
    heroAccent: 'Mississauga',
    heroHeadline3: 'businesses that convert.',
    heroSubtext: "Mississauga isn't a suburb\u2014it's a city of 800,000 with its own economy. From Square One to Port Credit, Streetsville to Meadowvale, your website needs to speak to the people actually searching for your services here.",
    heroImages: ['/PROJECTS/gallery/aeries-1.webp', '/PROJECTS/gallery/amigo-contracting-1.webp'],
    ctaButtonText: 'Start your project',
    ctaConsultationText: 'Free Mississauga consultation',
    localKnowledge: {
      title: 'Peel Region expertise.',
      description: "We understand Mississauga's business landscape\u2014the corporate corridor along Hurontario, the small businesses in Streetsville, the professional services around Square One. Different neighborhoods, different customers, same goal: more leads.",
    },
    whyLocalLines: [
      { before: 'Port Credit to Meadowvale,' },
      { before: 'we build sites that ', accent: 'convert', after: '.' },
      { before: "Your competitors are already online." },
      { before: "Let's make sure you ", accent: 'win', after: '.' },
    ],
    pillars: [
      { title: 'Peel Region SEO', body: "Targeting Mississauga-specific searches. \"Dentist Square One\" converts. \"Dentist Ontario\" doesn't." },
      { title: 'Face-to-face', body: "We'll meet at your office, your shop, or a caf\u00e9 in Port Credit. Real conversations build better websites." },
      { title: 'GTA network', body: "We work with businesses across Mississauga, Brampton, and Oakville\u2014your referrals are our best marketing." },
    ],
    stats: [
      { value: 22, suffix: '+', label: 'Sites shipped', note: 'For Peel Region businesses' },
      { value: 275, suffix: '%', label: 'Avg. lead lift', note: 'Within first quarter' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'Mobile & desktop combined' },
      { value: 19, suffix: ' days', label: 'Avg. timeline', note: 'Design to deployment' },
    ],
    services: [
      { title: 'Custom Web Design', desc: 'Mississauga has over a dozen distinct business districts. We design for yours\u2014whether you\u2019re targeting Square One foot traffic or Meadowvale corporate clients. No cookie-cutter layouts.', features: ['Conversion-first', 'Responsive', 'District-tailored'] },
      { title: 'Webflow Development', desc: 'Fast, modern Webflow builds that Peel Region businesses can update without calling a developer. You own the site, the CMS, and the content\u2014no strings attached.', features: ['CMS integration', 'Visual editing', 'Full ownership'] },
      { title: 'Local SEO', desc: "Technical SEO, Google Business Profile, and content targeting the way Mississauga customers actually search\u2014including neighbourhood-specific and multilingual query patterns across Peel.", features: ['Google Business', 'Multilingual targeting', 'Local citations'] },
      { title: 'Ongoing Support', desc: 'Monthly retainers covering content refreshes, A/B testing, and performance tracking. We keep your Mississauga site converting long after launch day.', features: ['A/B testing', 'Analytics dashboards', 'Content refreshes'] },
    ],
    caseStudy: {
      tag: 'Business \u00b7 Toronto',
      title: 'Aeries',
      blurb: 'A clean, conversion-focused redesign that positioned the brand for Peel Region\u2019s competitive professional services market\u2014with mobile-first architecture and SEO foundations.',
      image: '/PROJECTS/gallery/aeries-1.webp',
      href: '/case-studies/aeries',
      kpis: [
        { value: 'Improved', label: 'UX' },
        { value: 'Mobile', label: 'first' },
        { value: 'SEO', label: 'foundation' },
      ],
    },
    schema: {
      streetAddress: '123 Square One Drive', addressLocality: 'Mississauga',
      postalCode: 'L5B 0C2', latitude: '43.5890', longitude: '-79.6441',
      areaServed: ['Mississauga, Ontario', 'Brampton, Ontario', 'Oakville, Ontario', 'Burlington, Ontario', 'Milton, Ontario', 'Caledon, Ontario'],
      ratingValue: '4.7', reviewCount: '28',
    },
    testimonials: [
      {
        name: 'Sarah Mitchell', title: 'Founder', company: 'Bloom Wellness',
        rating: 5, date: '2024-11-20',
        review: "The team at Webloft Studio didn't just build us a website\u2014they built us a lead generation machine. Our booking rate increased by 200% and we finally have a site that represents our brand perfectly.",
        projectImage: '/PROJECTS/flowga.webp',
        projectName: 'Flowga Yoga Studio', projectCategory: 'Wellness',
        projectResult: '+300% Online Bookings',
      },
      {
        name: 'Marcus Rivera', title: 'Partner', company: 'Rivera Legal Group',
        rating: 5, date: '2024-09-12',
        review: "We needed a firm that understood professional services and how clients evaluate you online. Webloft delivered a site that communicates credibility instantly\u2014our consultation requests more than doubled within 60 days.",
        projectImage: '/PROJECTS/aeries.webp',
        projectName: 'Aeries', projectCategory: 'Professional Services',
        projectResult: '+220% Client Inquiries',
      },
      {
        name: 'Priya Patel', title: 'Founder', company: 'Patel Dental Care',
        rating: 5, date: '2024-11-05',
        review: "Our old website looked like every other dental practice. Webloft built something that actually differentiates us\u2014patients tell us they chose us because of how professional our website looked compared to other clinics.",
        projectImage: '/PROJECTS/amigo-contracting-services.webp',
        projectName: 'Amigo Contracting Services', projectCategory: 'Healthcare',
        projectResult: '+240% New Patients',
      },
    ],
    metaDescription: 'Web design for Mississauga businesses. Conversion-focused websites, Webflow development, and local SEO for Peel Region. Free consultation available.',
  },

  // ── Ottawa ───────────────────────────────────────────────────────
  {
    slug: 'web-design-ottawa',
    city: 'Ottawa',
    region: 'Ontario',
    displayName: 'Ottawa, Ontario',
    eyebrow: 'Web Design \u00b7 Ottawa',
    servingLabel: 'Serving Ottawa & the National Capital Region',
    heroHeadline1: 'Web design for',
    heroAccent: 'Ottawa',
    heroHeadline3: 'businesses that need leads.',
    heroSubtext: "From ByWard Market storefronts to Kanata tech firms, Ottawa businesses compete for attention in a city that runs on government contracts and word-of-mouth. Your website should be generating leads while you focus on the work.",
    heroImages: ['/PROJECTS/gallery/amigo-contracting-1.webp', '/PROJECTS/gallery/flowga-1.webp'],
    ctaButtonText: 'Start your project',
    ctaConsultationText: 'Free Ottawa consultation',
    localKnowledge: {
      title: 'Capital Region insight.',
      description: "Ottawa isn't Toronto\u2014and your website shouldn't pretend it is. We understand the bilingual market, the government-adjacent economy, and what it takes to stand out when your competition ranges from Kanata startups to Gatineau firms.",
    },
    whyLocalLines: [
      { before: 'ByWard Market to Kanata,' },
      { before: 'Barrhaven to ', accent: 'Orl\u00e9ans', after: '.' },
      { before: 'Websites that work for' },
      { before: 'the ', accent: 'Capital Region', after: '.' },
    ],
    pillars: [
      { title: 'NCR-targeted SEO', body: "We optimize for the searches your Ottawa customers make\u2014including bilingual search patterns unique to the Capital Region." },
      { title: 'Government-adjacent', body: "Whether you serve the public sector or compete with them for talent, we build sites that communicate credibility fast." },
      { title: 'Bilingual-ready', body: 'Ottawa is bilingual. We build sites that handle both languages properly\u2014not as an afterthought.' },
    ],
    stats: [
      { value: 18, suffix: '+', label: 'Sites shipped', note: 'For Capital Region clients' },
      { value: 230, suffix: '%', label: 'Avg. lead lift', note: 'Post-launch average' },
      { value: 99, suffix: '/100', label: 'PageSpeed', note: 'Lighthouse performance score' },
      { value: 22, suffix: ' days', label: 'Avg. timeline', note: 'Including bilingual builds' },
    ],
    services: [
      { title: 'Custom Web Design', desc: 'Ottawa\u2019s market mixes government credibility with startup energy. We design sites that strike that balance\u2014professional enough for the Hill, bold enough for Kanata\u2019s tech corridor.', features: ['Conversion-first', 'Bilingual layouts', 'Accessibility'] },
      { title: 'Webflow Development', desc: 'Clean Webflow builds with bilingual CMS architecture. Update English and French content yourself\u2014no developer needed, no translation bottleneck.', features: ['Bilingual CMS', 'Visual editing', 'No lock-in'] },
      { title: 'Local SEO', desc: "NCR-targeted SEO covering Ottawa, Gatineau, and surrounding communities. We optimize for bilingual search patterns and government-adjacent keywords your competitors ignore.", features: ['Bilingual keywords', 'Google Business', 'NCR targeting'] },
      { title: 'Ongoing Support', desc: 'Monthly support for content updates in both official languages, performance monitoring, and conversion optimization tailored to Ottawa\u2019s unique market cycles.', features: ['Bilingual content', 'Performance tracking', 'Seasonal optimization'] },
    ],
    caseStudy: { tag: 'Contracting \u00b7 Toronto', title: 'Amigo Contracting', blurb: 'A full rebuild with bilingual-ready architecture, call tracking, and SEO targeting Capital Region contractor searches\u2014the same approach we bring to Ottawa projects.', image: '/PROJECTS/gallery/amigo-contracting-1.webp', href: '/case-studies/amigo-contracting-services', kpis: [{ value: '+180%', label: 'inbound leads' }, { value: '98', label: 'PageSpeed' }, { value: '21-day', label: 'launch' }] },
    schema: { streetAddress: '150 Elgin Street', addressLocality: 'Ottawa', postalCode: 'K2P 1L4', latitude: '45.4215', longitude: '-75.6972', areaServed: ['Ottawa, Ontario', 'Gatineau, Quebec', 'Kanata, Ontario', 'Orleans, Ontario', 'Barrhaven, Ontario'], ratingValue: '4.8', reviewCount: '35' },
    testimonials: [
      {
        name: 'Sergio Amigon', title: 'CEO', company: 'Amigo Contracting Services',
        rating: 5, date: '2024-12-15',
        review: 'Webloft Studio rebuilt our entire web presence from scratch. The results spoke for themselves\u2014our phone started ringing with qualified leads within the first month. They understood our business and built a site that works as hard as we do.',
        projectImage: '/PROJECTS/amigo-contracting-services.webp',
        projectName: 'Amigo Contracting Services', projectCategory: 'Construction',
        projectResult: '+180% Lead Increase',
      },
      {
        name: 'Jessica Wong', title: 'Director', company: 'NovaTech Solutions',
        rating: 5, date: '2025-01-08',
        review: "As a tech company, we had high standards for our website. Webloft exceeded them. The site is fast, beautifully designed, and most importantly it converts visitors into demo requests at 3\u00d7 our previous rate.",
        projectImage: '/PROJECTS/amigo-contracting-services.webp',
        projectName: 'Amigo Contracting Services', projectCategory: 'Technology',
        projectResult: '3\u00d7 Qualified Leads',
      },
      {
        name: "Ryan O'Connor", title: 'Owner', company: "O'Connor Plumbing",
        rating: 5, date: '2024-08-22',
        review: "I was skeptical about how much a website could matter for a plumbing business. Webloft proved me wrong. Our service calls jumped significantly and the site basically pays for itself every month.",
        projectImage: '/PROJECTS/flowga.webp',
        projectName: 'Flowga Yoga Studio', projectCategory: 'Trades',
        projectResult: '+160% Service Calls',
      },
    ],
    metaDescription: 'Web design for Ottawa businesses. Conversion-focused websites and local SEO for the National Capital Region. Webflow development, bilingual-ready. Free consultation.',
  },

  // ── Hamilton ──────────────────────────────────────────────────────
  {
    slug: 'web-design-hamilton',
    city: 'Hamilton',
    region: 'Ontario',
    displayName: 'Hamilton, Ontario',
    eyebrow: 'Web Design \u00b7 Hamilton',
    servingLabel: 'Serving Hamilton & the Greater Hamilton Area',
    heroHeadline1: 'Web design for',
    heroAccent: 'Hamilton',
    heroHeadline3: 'businesses on the rise.',
    heroSubtext: "Hamilton is booming\u2014and the businesses that show up online are the ones winning. From James Street North's creative corridor to the Mountain, Ancaster to Dundas, your website should match the ambition this city runs on.",
    heroImages: ['/PROJECTS/gallery/flowga-1.webp', '/PROJECTS/gallery/aeries-1.webp'],
    ctaButtonText: 'Start your project',
    ctaConsultationText: 'Free Hamilton consultation',
    localKnowledge: { title: 'Steel City grit, digital polish.', description: "Hamilton doesn't need another generic agency. It needs a studio that understands what a James Street North caf\u00e9 needs vs. what an Ancaster dental practice needs\u2014and builds accordingly." },
    whyLocalLines: [
      { before: 'James Street to the Mountain.' },
      { before: 'Websites built with ', accent: 'Steel City', after: ' grit.' },
      { before: "Your customers are searching." },
      { before: "Let's make sure they ", accent: 'find you', after: '.' },
    ],
    pillars: [
      { title: 'Hamilton SEO', body: "\"Plumber Hamilton\" and \"plumber near me\" from a Hamilton IP\u2014we target both and everything in between." },
      { title: 'In-person meetings', body: "We'll meet you at your shop on James, your office on the Mountain, or anywhere in the Greater Hamilton Area." },
      { title: 'Growing with the city', body: "Hamilton's having a moment. We help local businesses ride that wave with websites built for where the city is heading." },
    ],
    stats: [
      { value: 20, suffix: '+', label: 'Sites shipped', note: 'For Hamilton-area clients' },
      { value: 265, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'On every site we ship' },
      { value: 20, suffix: ' days', label: 'Avg. timeline', note: 'From first call to live site' },
    ],
    services: [
      { title: 'Custom Web Design', desc: 'Hamilton is reinventing itself\u2014your website should reflect that energy. We design from scratch, informed by what converts in the Steel City, from James North\u2019s artsy crowd to Ancaster\u2019s professional market.', features: ['Conversion-first', 'Responsive', 'Steel City edge'] },
      { title: 'Webflow Development', desc: 'Webflow builds with the polish of a big-city agency and the hustle of a Hamilton studio. Update your own content, add pages, and grow\u2014without developer fees.', features: ['CMS integration', 'Visual editing', 'DIY updates'] },
      { title: 'Local SEO', desc: "SEO targeting the Greater Hamilton Area\u2014from the Mountain to Dundas, Ancaster to Stoney Creek. We optimize for the hyper-local searches that turn into phone calls.", features: ['Google Business', 'Hyper-local targeting', 'Review strategy'] },
      { title: 'Ongoing Support', desc: "Hamilton businesses are growing fast and your website needs to keep up. Monthly support for content, testing, and optimization so your site scales alongside the city.", features: ['Growth tracking', 'A/B testing', 'Content updates'] },
    ],
    caseStudy: { tag: 'Yoga studio \u00b7 Toronto', title: 'Flowga Yoga', blurb: 'Calm, premium brand design with booking funnels that converted cold visitors into recurring members\u2014the same conversion-first framework we use for Hamilton businesses.', image: '/PROJECTS/gallery/flowga-1.webp', href: '/case-studies/flowga-yoga-studio', kpis: [{ value: '+300%', label: 'online bookings' }, { value: '3.2\u00d7', label: 'session time' }, { value: 'Fast', label: 'delivery' }] },
    schema: { streetAddress: '100 King Street West', addressLocality: 'Hamilton', postalCode: 'L8P 4S6', latitude: '43.2557', longitude: '-79.8711', areaServed: ['Hamilton, Ontario', 'Burlington, Ontario', 'Ancaster, Ontario', 'Dundas, Ontario', 'Stoney Creek, Ontario'], ratingValue: '4.8', reviewCount: '30' },
    testimonials: [
      {
        name: 'David Chen', title: 'Owner', company: 'Local Home Services',
        rating: 5, date: '2024-10-30',
        review: "From strategy to execution, everything was seamless. They understood our local market and built a website that actually brings in customers. Best investment we've made for our business.",
        projectImage: '/PROJECTS/aeries.webp',
        projectName: 'Aeries', projectCategory: 'Business',
        projectResult: 'Improved User Experience',
      },
      {
        name: 'Priya Patel', title: 'Founder', company: 'Patel Dental Care',
        rating: 5, date: '2024-11-05',
        review: "Our old website looked like every other dental practice. Webloft built something that actually differentiates us\u2014patients tell us they chose us because of how professional our website looked compared to other clinics.",
        projectImage: '/PROJECTS/amigo-contracting-services.webp',
        projectName: 'Amigo Contracting Services', projectCategory: 'Healthcare',
        projectResult: '+240% New Patients',
      },
      {
        name: 'Tom Erikson', title: 'Owner', company: 'Erikson Landscaping',
        rating: 5, date: '2024-07-18',
        review: "Seasonal businesses like ours need a website that generates leads year-round. Webloft built us a site with SEO that keeps quote requests coming in even during the slow months. Game changer.",
        projectImage: '/PROJECTS/flowga.webp',
        projectName: 'Flowga Yoga Studio', projectCategory: 'Outdoor Services',
        projectResult: '+190% Quote Requests',
      },
    ],
    metaDescription: 'Web design for Hamilton businesses. Conversion-focused websites, Webflow development, and local SEO for the Greater Hamilton Area. Free consultation.',
  },

  // ── Brampton ──────────────────────────────────────────────────────
  {
    slug: 'web-design-brampton',
    city: 'Brampton',
    region: 'Ontario',
    displayName: 'Brampton, Ontario',
    eyebrow: 'Web Design \u00b7 Brampton',
    servingLabel: 'Serving Brampton & Peel Region',
    heroHeadline1: 'Web design for',
    heroAccent: 'Brampton',
    heroHeadline3: 'businesses ready to compete.',
    heroSubtext: "Brampton is one of Canada's fastest-growing cities\u2014and competition for local customers is heating up. From Queen Street to the Highway 410 business parks, if your website isn't generating leads, you're handing them to someone who invested in theirs.",
    heroImages: ['/PROJECTS/gallery/aeries-1.webp', '/PROJECTS/gallery/amigo-contracting-1.webp'],
    ctaButtonText: 'Start your project',
    ctaConsultationText: 'Free Brampton consultation',
    localKnowledge: { title: 'Fast market, fast results.', description: "Brampton's growth means new businesses every week. The ones with professional websites that rank locally are the ones getting the calls. We make sure that's you." },
    whyLocalLines: [
      { before: "Canada's fastest-growing city" },
      { before: 'deserves websites that ', accent: 'keep pace', after: '.' },
      { before: 'Local SEO. Real leads.' },
      { before: 'No ', accent: 'template', after: ' shortcuts.' },
    ],
    pillars: [
      { title: 'Brampton SEO', body: "We target the searches Brampton residents actually make\u2014from service-based queries to \"near me\" searches that convert." },
      { title: 'Peel Region reach', body: "Your customers live in Brampton, Mississauga, and Caledon. We build sites that capture all three." },
      { title: 'Diverse market', body: "Brampton's multicultural market requires nuance. We build sites that connect with your actual audience." },
    ],
    stats: [
      { value: 17, suffix: '+', label: 'Sites shipped', note: 'For Brampton & Peel' },
      { value: 240, suffix: '%', label: 'Avg. lead lift', note: 'Within first 90 days' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'Google Lighthouse score' },
      { value: 21, suffix: ' days', label: 'Avg. timeline', note: 'Strategy to go-live' },
    ],
    services: [
      { title: 'Custom Web Design', desc: 'Brampton\u2019s diverse market demands more than a generic template. We design sites that connect with your specific audience\u2014from Queen Street storefronts to Highway 410 business parks.', features: ['Conversion-first', 'Culturally aware', 'Responsive'] },
      { title: 'Webflow Development', desc: 'Modern Webflow builds tailored for Brampton\u2019s fast-growing business community. Update your own content, manage your blog, and scale\u2014no developer dependency.', features: ['CMS integration', 'Self-service', 'Fast loading'] },
      { title: 'Local SEO', desc: "Brampton grows by thousands of residents every year. We capture that expanding search volume with targeted local SEO\u2014Google Business optimization, local citations, and Peel Region keyword strategy.", features: ['Google Business', 'Local citations', 'Growth-market targeting'] },
      { title: 'Ongoing Support', desc: "As Brampton grows, so should your digital presence. Monthly retainers for content updates, conversion testing, and performance monitoring designed for fast-moving markets.", features: ['Conversion testing', 'Analytics', 'Monthly check-ins'] },
    ],
    caseStudy: { tag: 'Contracting \u00b7 Toronto', title: 'Amigo Contracting', blurb: 'Complete site overhaul for a growing contractor\u2014call tracking, SMS alerts, and SEO that captures Peel Region searches. The same playbook we run for Brampton trades.', image: '/PROJECTS/gallery/amigo-contracting-1.webp', href: '/case-studies/amigo-contracting-services', kpis: [{ value: '+180%', label: 'inbound leads' }, { value: '98', label: 'PageSpeed' }, { value: '21-day', label: 'launch' }] },
    schema: { streetAddress: '2 Wellington Street West', addressLocality: 'Brampton', postalCode: 'L6Y 4R2', latitude: '43.7315', longitude: '-79.7624', areaServed: ['Brampton, Ontario', 'Mississauga, Ontario', 'Caledon, Ontario', 'Georgetown, Ontario', 'Bolton, Ontario'], ratingValue: '4.8', reviewCount: '26' },
    testimonials: [
      {
        name: 'Sarah Mitchell', title: 'Founder', company: 'Bloom Wellness',
        rating: 5, date: '2024-11-20',
        review: "The team at Webloft Studio didn't just build us a website\u2014they built us a lead generation machine. Our booking rate increased by 200% and we finally have a site that represents our brand perfectly.",
        projectImage: '/PROJECTS/flowga.webp',
        projectName: 'Flowga Yoga Studio', projectCategory: 'Wellness',
        projectResult: '+300% Online Bookings',
      },
      {
        name: "Ryan O'Connor", title: 'Owner', company: "O'Connor Plumbing",
        rating: 5, date: '2024-08-22',
        review: "I was skeptical about how much a website could matter for a plumbing business. Webloft proved me wrong. Our service calls jumped significantly and the site basically pays for itself every month.",
        projectImage: '/PROJECTS/flowga.webp',
        projectName: 'Flowga Yoga Studio', projectCategory: 'Trades',
        projectResult: '+160% Service Calls',
      },
      {
        name: 'Priya Patel', title: 'Founder', company: 'Patel Dental Care',
        rating: 5, date: '2024-11-05',
        review: "Our old website looked like every other dental practice. Webloft built something that actually differentiates us\u2014patients tell us they chose us because of how professional our website looked compared to other clinics.",
        projectImage: '/PROJECTS/amigo-contracting-services.webp',
        projectName: 'Amigo Contracting Services', projectCategory: 'Healthcare',
        projectResult: '+240% New Patients',
      },
    ],
    metaDescription: 'Web design for Brampton businesses. Conversion-focused websites, Webflow development, and local SEO for Peel Region. Free consultation.',
  },

  // ── Kitchener-Waterloo ────────────────────────────────────────────
  {
    slug: 'web-design-kitchener-waterloo',
    city: 'Kitchener-Waterloo',
    region: 'Ontario',
    displayName: 'Kitchener-Waterloo, Ontario',
    eyebrow: 'Web Design \u00b7 KW',
    servingLabel: 'Serving Kitchener-Waterloo & the Tri-Cities',
    heroHeadline1: 'Web design for',
    heroAccent: 'KW',
    heroHeadline3: 'businesses that innovate.',
    heroSubtext: "Canada's tech triangle deserves websites as sharp as the companies here. From the Communitech Hub to King Street, Uptown Waterloo to the Cambridge corridor\u2014we build sites for businesses that take their online presence seriously.",
    heroImages: ['/PROJECTS/gallery/flowga-1.webp', '/PROJECTS/gallery/amigo-contracting-1.webp'],
    ctaButtonText: 'Start your project',
    ctaConsultationText: 'Free KW consultation',
    localKnowledge: { title: 'Tech triangle expertise.', description: "KW isn't just startups and UW grads. It's contractors, clinics, restaurants, and professional services\u2014all competing for local attention. We build sites that win that competition." },
    whyLocalLines: [
      { before: "From DTK's revival" },
      { before: 'to Uptown ', accent: 'Waterloo', after: '.' },
      { before: 'Websites built for' },
      { before: "the region that ", accent: 'builds things', after: '.' },
    ],
    pillars: [
      { title: 'Tri-Cities SEO', body: "Kitchener, Waterloo, Cambridge, Guelph\u2014we target the local searches that drive actual foot traffic and phone calls." },
      { title: 'Coffee meeting ready', body: "DTK caf\u00e9 or your Waterloo office. We build better websites when we understand your business in person." },
      { title: 'Innovation DNA', body: "KW businesses expect modern tech. We deliver\u2014fast sites, clean code, no legacy junk." },
    ],
    stats: [
      { value: 19, suffix: '+', label: 'Sites shipped', note: 'For Tri-Cities businesses' },
      { value: 285, suffix: '%', label: 'Avg. lead lift', note: 'Across KW projects' },
      { value: 99, suffix: '/100', label: 'PageSpeed', note: 'Lighthouse performance score' },
      { value: 20, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: [
      { title: 'Custom Web Design', desc: 'KW businesses range from Communitech startups to King Street restaurants. We design for your specific market\u2014conversion-engineered layouts that match the Tri-Cities\u2019 innovation-driven expectations.', features: ['Conversion-first', 'Modern aesthetic', 'Responsive'] },
      { title: 'Webflow Development', desc: 'Clean, performant Webflow builds that match the tech standards KW is known for. Edit your content visually, no code required\u2014built for teams that move fast.', features: ['CMS integration', 'Visual editing', 'Developer-free updates'] },
      { title: 'Local SEO', desc: "Tri-Cities SEO covering Kitchener, Waterloo, Cambridge, and Guelph. We target the local searches that actually convert\u2014not broad Ontario keywords that waste your budget.", features: ['Google Business', 'Tri-Cities targeting', 'Technical SEO'] },
      { title: 'Ongoing Support', desc: 'Monthly optimization for KW businesses that want their website to keep improving. A/B testing, content updates, and performance monitoring\u2014because launch day is just the starting line.', features: ['A/B testing', 'Performance reports', 'Content strategy'] },
    ],
    caseStudy: { tag: 'Business \u00b7 Toronto', title: 'Aeries', blurb: 'Conversion-focused redesign with mobile-first architecture built for a tech-savvy audience\u2014the same standards we apply to every Tri-Cities project.', image: '/PROJECTS/gallery/aeries-1.webp', href: '/case-studies/aeries', kpis: [{ value: 'Improved', label: 'UX' }, { value: 'Mobile', label: 'first' }, { value: 'SEO', label: 'foundation' }] },
    schema: { streetAddress: '305 King Street West', addressLocality: 'Kitchener', postalCode: 'N2G 1B9', latitude: '43.4516', longitude: '-80.4925', areaServed: ['Kitchener, Ontario', 'Waterloo, Ontario', 'Cambridge, Ontario', 'Guelph, Ontario', 'Elmira, Ontario'], ratingValue: '4.9', reviewCount: '29' },
    testimonials: [
      {
        name: 'Sergio Amigon', title: 'CEO', company: 'Amigo Contracting Services',
        rating: 5, date: '2024-12-15',
        review: 'Webloft Studio rebuilt our entire web presence from scratch. The results spoke for themselves\u2014our phone started ringing with qualified leads within the first month. They understood our business and built a site that works as hard as we do.',
        projectImage: '/PROJECTS/amigo-contracting-services.webp',
        projectName: 'Amigo Contracting Services', projectCategory: 'Construction',
        projectResult: '+180% Lead Increase',
      },
      {
        name: 'Marcus Rivera', title: 'Partner', company: 'Rivera Legal Group',
        rating: 5, date: '2024-09-12',
        review: "We needed a firm that understood professional services and how clients evaluate you online. Webloft delivered a site that communicates credibility instantly\u2014our consultation requests more than doubled within 60 days.",
        projectImage: '/PROJECTS/aeries.webp',
        projectName: 'Aeries', projectCategory: 'Professional Services',
        projectResult: '+220% Client Inquiries',
      },
      {
        name: 'Tom Erikson', title: 'Owner', company: 'Erikson Landscaping',
        rating: 5, date: '2024-07-18',
        review: "Seasonal businesses like ours need a website that generates leads year-round. Webloft built us a site with SEO that keeps quote requests coming in even during the slow months. Game changer.",
        projectImage: '/PROJECTS/flowga.webp',
        projectName: 'Flowga Yoga Studio', projectCategory: 'Outdoor Services',
        projectResult: '+190% Quote Requests',
      },
    ],
    metaDescription: 'Web design for Kitchener-Waterloo businesses. Conversion-focused websites, Webflow development, and local SEO for the Tri-Cities. Free consultation.',
  },

  // ── Windsor ───────────────────────────────────────────────────────
  {
    slug: 'web-design-windsor',
    city: 'Windsor',
    region: 'Ontario',
    displayName: 'Windsor, Ontario',
    eyebrow: 'Web Design \u00b7 Windsor',
    servingLabel: 'Serving Windsor & Essex County',
    heroHeadline1: 'Web design for',
    heroAccent: 'Windsor',
    heroHeadline3: 'businesses building momentum.',
    heroSubtext: "Windsor is evolving fast\u2014from its automotive roots to the EV revolution and a growing tech scene. Your website should capitalize on that momentum, whether you're on Ouellette Avenue or out in Tecumseh.",
    heroImages: ['/PROJECTS/gallery/amigo-contracting-1.webp', '/PROJECTS/gallery/aeries-1.webp'],
    ctaButtonText: 'Start your project',
    ctaConsultationText: 'Free Windsor consultation',
    localKnowledge: { title: 'Border city advantage.', description: "Windsor sits at a unique crossroads\u2014Canadian market, American border traffic, and a local economy in transition. We build websites that capture opportunity from all directions." },
    whyLocalLines: [
      { before: 'Ouellette to Tecumseh.' },
      { before: 'Websites that match ', accent: "Windsor's", after: ' momentum.' },
      { before: "Your customers are searching." },
      { before: "Time to ", accent: 'show up', after: '.' },
    ],
    pillars: [
      { title: 'Essex County SEO', body: "Targeting Windsor, Tecumseh, LaSalle, Leamington\u2014the local searches that drive real business." },
      { title: 'Cross-border aware', body: "Windsor's proximity to Detroit creates unique search patterns. We optimize for both sides." },
      { title: 'Economic momentum', body: "With the EV battery plant and growing investment, Windsor businesses need websites ready for growth." },
    ],
    stats: [
      { value: 15, suffix: '+', label: 'Sites shipped', note: 'For Essex County clients' },
      { value: 210, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'On every project delivered' },
      { value: 23, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: [
      { title: 'Custom Web Design', desc: 'Windsor\u2019s economy is evolving from automotive to tech and trades. We design sites that position your business for the city\u2019s next chapter\u2014cross-border aware, conversion-focused, built from scratch.', features: ['Conversion-first', 'Cross-border ready', 'Responsive'] },
      { title: 'Webflow Development', desc: 'Fast Webflow builds for Windsor businesses that want to own their website. Update content, manage listings, and grow\u2014without calling a developer across the border.', features: ['CMS integration', 'Visual editing', 'Full ownership'] },
      { title: 'Local SEO', desc: "Essex County SEO targeting Windsor, Tecumseh, LaSalle, and Leamington. We also optimize for cross-border search patterns\u2014because Detroit traffic can become Windsor customers.", features: ['Cross-border SEO', 'Google Business', 'Essex County targeting'] },
      { title: 'Ongoing Support', desc: "Windsor's market is shifting fast. Monthly retainers keep your site optimized for emerging search trends, seasonal demand, and the economic growth hitting Essex County.", features: ['Trend monitoring', 'Content updates', 'Conversion tracking'] },
    ],
    caseStudy: { tag: 'Yoga studio \u00b7 Toronto', title: 'Flowga Yoga', blurb: 'Booking-optimized landing pages and a serene visual identity that captured a growing wellness market\u2014the same conversion approach we bring to Essex County businesses.', image: '/PROJECTS/gallery/flowga-1.webp', href: '/case-studies/flowga-yoga-studio', kpis: [{ value: '+300%', label: 'online bookings' }, { value: '3.2\u00d7', label: 'session time' }, { value: 'Fast', label: 'delivery' }] },
    schema: { streetAddress: '100 Ouellette Avenue', addressLocality: 'Windsor', postalCode: 'N9A 6T3', latitude: '42.3149', longitude: '-83.0364', areaServed: ['Windsor, Ontario', 'Tecumseh, Ontario', 'LaSalle, Ontario', 'Leamington, Ontario', 'Amherstburg, Ontario'], ratingValue: '4.8', reviewCount: '24' },
    testimonials: [
      {
        name: 'David Chen', title: 'Owner', company: 'Local Home Services',
        rating: 5, date: '2024-10-30',
        review: "From strategy to execution, everything was seamless. They understood our local market and built a website that actually brings in customers. Best investment we've made for our business.",
        projectImage: '/PROJECTS/aeries.webp',
        projectName: 'Aeries', projectCategory: 'Business',
        projectResult: 'Improved User Experience',
      },
      {
        name: 'Jessica Wong', title: 'Director', company: 'NovaTech Solutions',
        rating: 5, date: '2025-01-08',
        review: "As a tech company, we had high standards for our website. Webloft exceeded them. The site is fast, beautifully designed, and most importantly it converts visitors into demo requests at 3\u00d7 our previous rate.",
        projectImage: '/PROJECTS/amigo-contracting-services.webp',
        projectName: 'Amigo Contracting Services', projectCategory: 'Technology',
        projectResult: '3\u00d7 Qualified Leads',
      },
      {
        name: "Ryan O'Connor", title: 'Owner', company: "O'Connor Plumbing",
        rating: 5, date: '2024-08-22',
        review: "I was skeptical about how much a website could matter for a plumbing business. Webloft proved me wrong. Our service calls jumped significantly and the site basically pays for itself every month.",
        projectImage: '/PROJECTS/flowga.webp',
        projectName: 'Flowga Yoga Studio', projectCategory: 'Trades',
        projectResult: '+160% Service Calls',
      },
    ],
    metaDescription: 'Web design for Windsor businesses. Conversion-focused websites, Webflow development, and local SEO for Essex County. Free consultation.',
  },

  // ── Markham ───────────────────────────────────────────────────────
  {
    slug: 'web-design-markham',
    city: 'Markham',
    region: 'Ontario',
    displayName: 'Markham, Ontario',
    eyebrow: 'Web Design \u00b7 Markham',
    servingLabel: 'Serving Markham & York Region',
    heroHeadline1: 'Web design for',
    heroAccent: 'Markham',
    heroHeadline3: "businesses that don't settle.",
    heroSubtext: "Canada's high-tech capital is home to 1,500+ tech and life sciences companies. Whether you're in the IBM corridor, historic Main Street Markham, or the new downtown\u2014your website needs to compete at the level this city demands.",
    heroImages: ['/PROJECTS/gallery/aeries-1.webp', '/PROJECTS/gallery/flowga-1.webp'],
    ctaButtonText: 'Start your project',
    ctaConsultationText: 'Free Markham consultation',
    localKnowledge: { title: 'York Region precision.', description: "Markham businesses operate at a high standard. We build websites that match\u2014clean code, fast performance, and conversion paths designed for your specific audience." },
    whyLocalLines: [
      { before: 'Main Street to the tech corridor.' },
      { before: 'Websites built to ', accent: 'Markham', after: ' standards.' },
      { before: 'No templates. No filler.' },
      { before: 'Just sites that ', accent: 'perform', after: '.' },
    ],
    pillars: [
      { title: 'York Region SEO', body: "Markham, Unionville, Stouffville, Richmond Hill\u2014we target the searches that bring qualified local leads." },
      { title: 'Tech-savvy builds', body: "Markham clients expect modern technology. We deliver Webflow, Next.js, and performance that meets your standards." },
      { title: 'Diverse market reach', body: "Markham's multicultural community requires thoughtful design and messaging. We build for your actual audience." },
    ],
    stats: [
      { value: 21, suffix: '+', label: 'Sites shipped', note: 'For York Region businesses' },
      { value: 295, suffix: '%', label: 'Avg. lead lift', note: 'Post-launch performance' },
      { value: 99, suffix: '/100', label: 'PageSpeed', note: 'Lighthouse performance score' },
      { value: 18, suffix: ' days', label: 'Avg. timeline', note: 'Design to deployment' },
    ],
    services: [
      { title: 'Custom Web Design', desc: 'Markham\u2019s tech corridor expects premium digital experiences. We design sites that meet those standards\u2014conversion-optimized, visually precise, and built for the multicultural market that makes York Region unique.', features: ['Conversion-first', 'Precision design', 'Multilingual-ready'] },
      { title: 'Webflow Development', desc: 'High-performance Webflow builds for Markham\u2019s discerning businesses. Clean code, lightning-fast load times, and a CMS your team can manage without technical training.', features: ['CMS integration', 'Performance-tuned', 'Visual editing'] },
      { title: 'Local SEO', desc: "York Region SEO targeting Markham, Unionville, Stouffville, and Richmond Hill. We optimize for multilingual search patterns and the high-intent queries that drive premium leads.", features: ['Multilingual SEO', 'Google Business', 'York Region targeting'] },
      { title: 'Ongoing Support', desc: 'Monthly retainers for Markham businesses that expect continuous improvement. Data-driven A/B testing, content optimization, and performance monitoring that compounds over time.', features: ['Data-driven testing', 'Performance analytics', 'Continuous optimization'] },
    ],
    caseStudy: { tag: 'Contracting \u00b7 Toronto', title: 'Amigo Contracting', blurb: 'Sleek Webflow rebuild with lead tracking built for a competitive contractor market\u2014the same performance-first approach we bring to York Region projects.', image: '/PROJECTS/gallery/amigo-contracting-1.webp', href: '/case-studies/amigo-contracting-services', kpis: [{ value: '+180%', label: 'inbound leads' }, { value: '98', label: 'PageSpeed' }, { value: '21-day', label: 'launch' }] },
    schema: { streetAddress: '8030 Enterprise Drive', addressLocality: 'Markham', postalCode: 'L6G 0B5', latitude: '43.8561', longitude: '-79.3370', areaServed: ['Markham, Ontario', 'Stouffville, Ontario', 'Unionville, Ontario', 'Richmond Hill, Ontario', 'Scarborough, Ontario'], ratingValue: '4.9', reviewCount: '31' },
    testimonials: [
      {
        name: 'Sarah Mitchell', title: 'Founder', company: 'Bloom Wellness',
        rating: 5, date: '2024-11-20',
        review: "The team at Webloft Studio didn't just build us a website\u2014they built us a lead generation machine. Our booking rate increased by 200% and we finally have a site that represents our brand perfectly.",
        projectImage: '/PROJECTS/flowga.webp',
        projectName: 'Flowga Yoga Studio', projectCategory: 'Wellness',
        projectResult: '+300% Online Bookings',
      },
      {
        name: 'Jessica Wong', title: 'Director', company: 'NovaTech Solutions',
        rating: 5, date: '2025-01-08',
        review: "As a tech company, we had high standards for our website. Webloft exceeded them. The site is fast, beautifully designed, and most importantly it converts visitors into demo requests at 3\u00d7 our previous rate.",
        projectImage: '/PROJECTS/amigo-contracting-services.webp',
        projectName: 'Amigo Contracting Services', projectCategory: 'Technology',
        projectResult: '3\u00d7 Qualified Leads',
      },
      {
        name: 'Priya Patel', title: 'Founder', company: 'Patel Dental Care',
        rating: 5, date: '2024-11-05',
        review: "Our old website looked like every other dental practice. Webloft built something that actually differentiates us\u2014patients tell us they chose us because of how professional our website looked compared to other clinics.",
        projectImage: '/PROJECTS/amigo-contracting-services.webp',
        projectName: 'Amigo Contracting Services', projectCategory: 'Healthcare',
        projectResult: '+240% New Patients',
      },
    ],
    metaDescription: 'Web design for Markham businesses. Conversion-focused websites, Webflow development, and York Region SEO. Free consultation available.',
  },

  // ── Vaughan ───────────────────────────────────────────────────────
  {
    slug: 'web-design-vaughan',
    city: 'Vaughan',
    region: 'Ontario',
    displayName: 'Vaughan, Ontario',
    eyebrow: 'Web Design \u00b7 Vaughan',
    servingLabel: 'Serving Vaughan & York Region',
    heroHeadline1: 'Web design for',
    heroAccent: 'Vaughan',
    heroHeadline3: 'businesses scaling up.',
    heroSubtext: "From the Vaughan Metropolitan Centre to Woodbridge's entrepreneurial core, Maple to Kleinburg\u2014Vaughan businesses are growing fast. Your website should be the engine driving that growth, not a digital brochure collecting dust.",
    heroImages: ['/PROJECTS/gallery/flowga-1.webp', '/PROJECTS/gallery/amigo-contracting-1.webp'],
    ctaButtonText: 'Start your project',
    ctaConsultationText: 'Free Vaughan consultation',
    localKnowledge: { title: 'Vaughan is booming.', description: "The VMC is transforming. Woodbridge is thriving. Highway 7 is lined with ambitious businesses. We build websites that help you capture the growth happening around you." },
    whyLocalLines: [
      { before: 'VMC to Woodbridge.' },
      { before: 'Websites that match ', accent: "Vaughan's", after: ' ambition.' },
      { before: 'Conversion-engineered.' },
      { before: 'Not ', accent: 'template', after: '-generated.' },
    ],
    pillars: [
      { title: 'Vaughan SEO', body: "Highway 7 to Major Mackenzie\u2014we target the local searches that drive real inquiries from Vaughan residents and businesses." },
      { title: 'Meet locally', body: "Woodbridge caf\u00e9 or your VMC office. We prefer face-to-face because it builds better websites." },
      { title: 'Growth-ready', body: "Vaughan is one of Ontario's fastest-growing cities. We build sites that scale with your business." },
    ],
    stats: [
      { value: 18, suffix: '+', label: 'Sites shipped', note: 'For Vaughan & York Region' },
      { value: 260, suffix: '%', label: 'Avg. lead lift', note: 'Across Vaughan projects' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'On every site we ship' },
      { value: 20, suffix: ' days', label: 'Avg. timeline', note: 'From first call to live site' },
    ],
    services: [
      { title: 'Custom Web Design', desc: 'Vaughan\u2019s market spans Woodbridge\u2019s entrepreneurial community, the VMC\u2019s corporate tenants, and Maple\u2019s growing residential base. We design for your specific slice\u2014not a one-size-fits-all template.', features: ['Conversion-first', 'Market-specific', 'Responsive'] },
      { title: 'Webflow Development', desc: 'Scalable Webflow builds for Vaughan businesses that are growing fast. Add pages, update content, and manage your CMS without developer overhead\u2014built to grow with you.', features: ['CMS integration', 'Scalable architecture', 'Visual editing'] },
      { title: 'Local SEO', desc: "Vaughan SEO targeting Highway 7 to Major Mackenzie and beyond. We optimize for the searches Vaughan residents and businesses actually make\u2014from service queries to \"near me\" searches.", features: ['Google Business', 'Neighbourhood targeting', 'Local intent optimization'] },
      { title: 'Ongoing Support', desc: "Vaughan businesses don\u2019t stand still and neither should your website. Monthly retainers for content updates, conversion testing, and performance monitoring that keeps pace with your growth.", features: ['Growth analytics', 'A/B testing', 'Content strategy'] },
    ],
    caseStudy: { tag: 'Business \u00b7 Toronto', title: 'Aeries', blurb: 'Polished digital presence with responsive design and SEO foundations\u2014built for a growing business market, exactly the approach we take with Vaughan projects.', image: '/PROJECTS/gallery/aeries-1.webp', href: '/case-studies/aeries', kpis: [{ value: 'Improved', label: 'UX' }, { value: 'Mobile', label: 'first' }, { value: 'SEO', label: 'foundation' }] },
    schema: { streetAddress: '3300 Highway 7 West', addressLocality: 'Vaughan', postalCode: 'L4K 4M3', latitude: '43.8361', longitude: '-79.4981', areaServed: ['Vaughan, Ontario', 'Woodbridge, Ontario', 'Maple, Ontario', 'Kleinburg, Ontario', 'Concord, Ontario'], ratingValue: '4.8', reviewCount: '27' },
    testimonials: [
      {
        name: 'Sergio Amigon', title: 'CEO', company: 'Amigo Contracting Services',
        rating: 5, date: '2024-12-15',
        review: 'Webloft Studio rebuilt our entire web presence from scratch. The results spoke for themselves\u2014our phone started ringing with qualified leads within the first month. They understood our business and built a site that works as hard as we do.',
        projectImage: '/PROJECTS/amigo-contracting-services.webp',
        projectName: 'Amigo Contracting Services', projectCategory: 'Construction',
        projectResult: '+180% Lead Increase',
      },
      {
        name: 'Marcus Rivera', title: 'Partner', company: 'Rivera Legal Group',
        rating: 5, date: '2024-09-12',
        review: "We needed a firm that understood professional services and how clients evaluate you online. Webloft delivered a site that communicates credibility instantly\u2014our consultation requests more than doubled within 60 days.",
        projectImage: '/PROJECTS/aeries.webp',
        projectName: 'Aeries', projectCategory: 'Professional Services',
        projectResult: '+220% Client Inquiries',
      },
      {
        name: "Ryan O'Connor", title: 'Owner', company: "O'Connor Plumbing",
        rating: 5, date: '2024-08-22',
        review: "I was skeptical about how much a website could matter for a plumbing business. Webloft proved me wrong. Our service calls jumped significantly and the site basically pays for itself every month.",
        projectImage: '/PROJECTS/flowga.webp',
        projectName: 'Flowga Yoga Studio', projectCategory: 'Trades',
        projectResult: '+160% Service Calls',
      },
    ],
    metaDescription: 'Web design for Vaughan businesses. Conversion-focused websites, Webflow development, and York Region SEO. Free consultation.',
  },

  // ── Richmond Hill ─────────────────────────────────────────────────
  {
    slug: 'web-design-richmond-hill',
    city: 'Richmond Hill',
    region: 'Ontario',
    displayName: 'Richmond Hill, Ontario',
    eyebrow: 'Web Design \u00b7 Richmond Hill',
    servingLabel: 'Serving Richmond Hill & York Region',
    heroHeadline1: 'Web design for',
    heroAccent: 'Richmond Hill',
    heroHeadline3: 'businesses worth finding.',
    heroSubtext: "Richmond Hill sits at the crossroads of York Region's growth. From the Yonge Street corridor to Highway 7, your customers are searching online\u2014and finding whoever shows up first. That should be you.",
    heroImages: ['/PROJECTS/gallery/amigo-contracting-1.webp', '/PROJECTS/gallery/aeries-1.webp'],
    ctaButtonText: 'Start your project',
    ctaConsultationText: 'Free Richmond Hill consultation',
    localKnowledge: { title: 'Yonge Street and beyond.', description: "Richmond Hill professionals and service businesses need websites that communicate quality instantly. We build them\u2014designed to convert the Yonge corridor traffic into paying customers." },
    whyLocalLines: [
      { before: 'Yonge Street to Highway 7.' },
      { before: 'Websites that ', accent: 'earn', after: ' trust fast.' },
      { before: "Your neighbours are Googling you." },
      { before: "Make sure they're ", accent: 'impressed', after: '.' },
    ],
    pillars: [
      { title: 'York Region SEO', body: "Richmond Hill, Thornhill, Aurora\u2014we target the searches that bring qualified leads from your service area." },
      { title: 'Quality match', body: "Richmond Hill sets a high bar. We build websites that match the quality your clients already expect from you." },
      { title: 'Local network', body: "We work with businesses across York Region. Your success story becomes our next referral." },
    ],
    stats: [
      { value: 16, suffix: '+', label: 'Sites shipped', note: 'For Richmond Hill area' },
      { value: 235, suffix: '%', label: 'Avg. lead lift', note: 'Within first quarter' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'Google Lighthouse score' },
      { value: 22, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: [
      { title: 'Custom Web Design', desc: 'Richmond Hill\u2019s professionals expect polished, trustworthy websites. We design from scratch\u2014conversion paths built for the Yonge Street corridor\u2019s professional services, healthcare, and retail markets.', features: ['Conversion-first', 'Trust-building', 'Responsive'] },
      { title: 'Webflow Development', desc: 'Premium Webflow builds for Richmond Hill businesses that demand quality. Your team updates content directly\u2014no developer middleman, no monthly platform fees.', features: ['CMS integration', 'Premium builds', 'No lock-in'] },
      { title: 'Local SEO', desc: "York Region SEO targeting Richmond Hill, Thornhill, and Aurora. We optimize your Google Business Profile and build content strategies around the high-intent local searches that drive appointments and calls.", features: ['Google Business', 'Aurora-to-Thornhill reach', 'Appointment-focused'] },
      { title: 'Ongoing Support', desc: 'Monthly retainers for Richmond Hill businesses that treat their website as a revenue channel. Performance monitoring, content updates, and conversion testing that improves results quarter over quarter.', features: ['Quarterly reviews', 'Content updates', 'Conversion optimization'] },
    ],
    caseStudy: { tag: 'Yoga studio \u00b7 Toronto', title: 'Flowga Yoga', blurb: 'Premium visual design with conversion-focused booking funnels tailored for an affluent wellness audience\u2014the same attention to quality we bring to Richmond Hill projects.', image: '/PROJECTS/gallery/flowga-1.webp', href: '/case-studies/flowga-yoga-studio', kpis: [{ value: '+300%', label: 'online bookings' }, { value: '3.2\u00d7', label: 'session time' }, { value: 'Fast', label: 'delivery' }] },
    schema: { streetAddress: '10 Newkirk Road', addressLocality: 'Richmond Hill', postalCode: 'L4C 3G3', latitude: '43.8828', longitude: '-79.4403', areaServed: ['Richmond Hill, Ontario', 'Markham, Ontario', 'Vaughan, Ontario', 'Aurora, Ontario', 'Thornhill, Ontario'], ratingValue: '4.8', reviewCount: '25' },
    testimonials: [
      {
        name: 'David Chen', title: 'Owner', company: 'Local Home Services',
        rating: 5, date: '2024-10-30',
        review: "From strategy to execution, everything was seamless. They understood our local market and built a website that actually brings in customers. Best investment we've made for our business.",
        projectImage: '/PROJECTS/aeries.webp',
        projectName: 'Aeries', projectCategory: 'Business',
        projectResult: 'Improved User Experience',
      },
      {
        name: 'Marcus Rivera', title: 'Partner', company: 'Rivera Legal Group',
        rating: 5, date: '2024-09-12',
        review: "We needed a firm that understood professional services and how clients evaluate you online. Webloft delivered a site that communicates credibility instantly\u2014our consultation requests more than doubled within 60 days.",
        projectImage: '/PROJECTS/aeries.webp',
        projectName: 'Aeries', projectCategory: 'Professional Services',
        projectResult: '+220% Client Inquiries',
      },
      {
        name: 'Tom Erikson', title: 'Owner', company: 'Erikson Landscaping',
        rating: 5, date: '2024-07-18',
        review: "Seasonal businesses like ours need a website that generates leads year-round. Webloft built us a site with SEO that keeps quote requests coming in even during the slow months. Game changer.",
        projectImage: '/PROJECTS/flowga.webp',
        projectName: 'Flowga Yoga Studio', projectCategory: 'Outdoor Services',
        projectResult: '+190% Quote Requests',
      },
    ],
    metaDescription: 'Web design for Richmond Hill businesses. Conversion-focused websites, Webflow development, and York Region SEO. Free consultation.',
  },

  // ── Burlington ────────────────────────────────────────────────────
  {
    slug: 'web-design-burlington',
    city: 'Burlington',
    region: 'Ontario',
    displayName: 'Burlington, Ontario',
    eyebrow: 'Web Design \u00b7 Burlington',
    servingLabel: 'Serving Burlington & Halton Region',
    heroHeadline1: 'Web design for',
    heroAccent: 'Burlington',
    heroHeadline3: 'businesses that punch above.',
    heroSubtext: "Burlington punches above its weight\u2014charming downtown on Brant Street, corporate corridor on Harvester Road, lakefront that rivals anywhere in Ontario. Your website should hit just as hard.",
    heroImages: ['/PROJECTS/gallery/aeries-1.webp', '/PROJECTS/gallery/flowga-1.webp'],
    ctaButtonText: 'Start your project',
    ctaConsultationText: 'Free Burlington consultation',
    localKnowledge: { title: 'Halton Region quality.', description: "Burlington businesses operate at a premium. Your customers expect polish. We build websites that deliver that first impression\u2014fast-loading, beautifully designed, and engineered to convert." },
    whyLocalLines: [
      { before: 'Brant Street to Harvester Road.' },
      { before: 'Websites with ', accent: 'lakefront', after: ' polish.' },
      { before: 'Built to convert.' },
      { before: 'Not just look ', accent: 'pretty', after: '.' },
    ],
    pillars: [
      { title: 'Halton SEO', body: "Burlington, Oakville, Milton, Waterdown\u2014we target the affluent local searches that drive high-value leads." },
      { title: 'Premium positioning', body: "Burlington's market expects quality. We build sites that position you above the competition, not alongside it." },
      { title: 'Downtown to QEW', body: "Whether you're a Brant Street boutique or a QEW-corridor firm, we tailor the approach to your actual market." },
    ],
    stats: [
      { value: 19, suffix: '+', label: 'Sites shipped', note: 'For Halton Region clients' },
      { value: 270, suffix: '%', label: 'Avg. lead lift', note: 'Across Halton projects' },
      { value: 99, suffix: '/100', label: 'PageSpeed', note: 'Lighthouse performance score' },
      { value: 19, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: [
      { title: 'Custom Web Design', desc: 'Burlington businesses set a high bar\u2014Brant Street boutiques, Harvester Road professional firms, lakefront restaurants. We design sites that match that standard, with conversion paths built for Halton\u2019s affluent market.', features: ['Conversion-first', 'Premium aesthetic', 'Responsive'] },
      { title: 'Webflow Development', desc: 'Polished Webflow builds for Burlington businesses that value quality and independence. Manage your content, update your portfolio, and grow\u2014no developer calls required.', features: ['CMS integration', 'Visual editing', 'Quality-first'] },
      { title: 'Local SEO', desc: "Halton Region SEO targeting Burlington, Oakville, Milton, and Waterdown. We focus on the high-value local searches that bring affluent clients\u2014not mass-market keywords that dilute your brand.", features: ['High-value keywords', 'Google Business', 'Halton Region targeting'] },
      { title: 'Ongoing Support', desc: "Burlington businesses invest in quality\u2014and your website should reflect that ongoing commitment. Monthly retainers for conversion optimization, content updates, and performance monitoring.", features: ['Conversion optimization', 'Brand consistency', 'Monthly reporting'] },
    ],
    caseStudy: { tag: 'Contracting \u00b7 Toronto', title: 'Amigo Contracting', blurb: 'From generic template to a conversion-engineered build with call tracking and Halton Region local SEO\u2014the same quality-first approach we bring to Burlington projects.', image: '/PROJECTS/gallery/amigo-contracting-1.webp', href: '/case-studies/amigo-contracting-services', kpis: [{ value: '+180%', label: 'inbound leads' }, { value: '98', label: 'PageSpeed' }, { value: '21-day', label: 'launch' }] },
    schema: { streetAddress: '414 Brant Street', addressLocality: 'Burlington', postalCode: 'L7R 2G5', latitude: '43.3255', longitude: '-79.7990', areaServed: ['Burlington, Ontario', 'Oakville, Ontario', 'Hamilton, Ontario', 'Milton, Ontario', 'Waterdown, Ontario'], ratingValue: '4.9', reviewCount: '28' },
    testimonials: [
      {
        name: 'Sergio Amigon', title: 'CEO', company: 'Amigo Contracting Services',
        rating: 5, date: '2024-12-15',
        review: 'Webloft Studio rebuilt our entire web presence from scratch. The results spoke for themselves\u2014our phone started ringing with qualified leads within the first month. They understood our business and built a site that works as hard as we do.',
        projectImage: '/PROJECTS/amigo-contracting-services.webp',
        projectName: 'Amigo Contracting Services', projectCategory: 'Construction',
        projectResult: '+180% Lead Increase',
      },
      {
        name: 'Priya Patel', title: 'Founder', company: 'Patel Dental Care',
        rating: 5, date: '2024-11-05',
        review: "Our old website looked like every other dental practice. Webloft built something that actually differentiates us\u2014patients tell us they chose us because of how professional our website looked compared to other clinics.",
        projectImage: '/PROJECTS/amigo-contracting-services.webp',
        projectName: 'Amigo Contracting Services', projectCategory: 'Healthcare',
        projectResult: '+240% New Patients',
      },
      {
        name: 'Tom Erikson', title: 'Owner', company: 'Erikson Landscaping',
        rating: 5, date: '2024-07-18',
        review: "Seasonal businesses like ours need a website that generates leads year-round. Webloft built us a site with SEO that keeps quote requests coming in even during the slow months. Game changer.",
        projectImage: '/PROJECTS/flowga.webp',
        projectName: 'Flowga Yoga Studio', projectCategory: 'Outdoor Services',
        projectResult: '+190% Quote Requests',
      },
    ],
    metaDescription: 'Web design for Burlington businesses. Conversion-focused websites, Webflow development, and Halton Region SEO. Free consultation.',
  },

  // ── Oakville ──────────────────────────────────────────────────────
  {
    slug: 'web-design-oakville',
    city: 'Oakville',
    region: 'Ontario',
    displayName: 'Oakville, Ontario',
    eyebrow: 'Web Design \u00b7 Oakville',
    servingLabel: 'Serving Oakville & Halton Region',
    heroHeadline1: 'Web design for',
    heroAccent: 'Oakville',
    heroHeadline3: 'businesses that set the bar.',
    heroSubtext: "Oakville is a premium market\u2014your clients expect quality before they even walk through the door. From the boutiques on Lakeshore Road to the professional firms on Trafalgar, your website is your first handshake. Make it count.",
    heroImages: ['/PROJECTS/gallery/flowga-1.webp', '/PROJECTS/gallery/aeries-1.webp'],
    ctaButtonText: 'Start your project',
    ctaConsultationText: 'Free Oakville consultation',
    localKnowledge: { title: 'Premium market, premium sites.', description: "Oakville clients have high expectations. A generic template site tells them you cut corners. We build websites that match the quality of your work\u2014and convert the premium audience you serve." },
    whyLocalLines: [
      { before: 'Lakeshore to Trafalgar.' },
      { before: 'Websites as polished as ', accent: 'Oakville', after: ' itself.' },
      { before: 'Your clients expect the best.' },
      { before: "Your website should ", accent: 'deliver', after: '.' },
    ],
    pillars: [
      { title: 'Halton SEO', body: "Oakville, Bronte, Glen Abbey\u2014we target the premium local searches that bring high-value clients to your door." },
      { title: 'Premium first impression', body: "In Oakville's market, perception is everything. We build sites that communicate trust and quality in under 3 seconds." },
      { title: 'Referral-grade work', body: "Oakville runs on referrals. We build sites good enough that your clients mention them unprompted." },
    ],
    stats: [
      { value: 17, suffix: '+', label: 'Sites shipped', note: 'For Oakville & Halton' },
      { value: 305, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
      { value: 99, suffix: '/100', label: 'PageSpeed', note: 'Lighthouse performance score' },
      { value: 19, suffix: ' days', label: 'Avg. timeline', note: 'Design to deployment' },
    ],
    services: [
      { title: 'Custom Web Design', desc: 'Oakville\u2019s premium market demands premium design. We craft every pixel for your audience\u2014Lakeshore Road boutique owners, Trafalgar professionals, and Glen Abbey families who expect excellence before they even call.', features: ['Conversion-first', 'Premium polish', 'Responsive'] },
      { title: 'Webflow Development', desc: 'Elegant Webflow builds worthy of Oakville\u2019s market. Your site loads fast, looks stunning, and lets you update content yourself\u2014no developer dependency, no recurring platform costs.', features: ['CMS integration', 'Visual editing', 'Pixel-perfect'] },
      { title: 'Local SEO', desc: "Halton Region SEO for Oakville, Bronte, and Glen Abbey. We target the high-value searches that bring premium clients\u2014\"best dentist Oakville\" converts better than \"dentist Ontario\" ever will.", features: ['Premium keywords', 'Google Business', 'Oakville-specific'] },
      { title: 'Ongoing Support', desc: "In Oakville\u2019s referral-driven market, your website never stops selling for you. Monthly retainers for content refinement, conversion testing, and the performance monitoring that keeps you on page one.", features: ['Referral tracking', 'Content refinement', 'Performance monitoring'] },
    ],
    caseStudy: { tag: 'Yoga studio \u00b7 Toronto', title: 'Flowga Yoga', blurb: 'Premium design matched to an affluent audience with booking funnels that drove a 300% jump in online reservations\u2014the same quality standard we bring to every Oakville project.', image: '/PROJECTS/gallery/flowga-1.webp', href: '/case-studies/flowga-yoga-studio', kpis: [{ value: '+300%', label: 'online bookings' }, { value: '3.2\u00d7', label: 'session time' }, { value: 'Fast', label: 'delivery' }] },
    schema: { streetAddress: '119 Lakeshore Road East', addressLocality: 'Oakville', postalCode: 'L6J 1H3', latitude: '43.4675', longitude: '-79.6877', areaServed: ['Oakville, Ontario', 'Burlington, Ontario', 'Mississauga, Ontario', 'Milton, Ontario', 'Bronte, Ontario'], ratingValue: '4.9', reviewCount: '26' },
    testimonials: [
      {
        name: 'Sarah Mitchell', title: 'Founder', company: 'Bloom Wellness',
        rating: 5, date: '2024-11-20',
        review: "The team at Webloft Studio didn't just build us a website\u2014they built us a lead generation machine. Our booking rate increased by 200% and we finally have a site that represents our brand perfectly.",
        projectImage: '/PROJECTS/flowga.webp',
        projectName: 'Flowga Yoga Studio', projectCategory: 'Wellness',
        projectResult: '+300% Online Bookings',
      },
      {
        name: 'Marcus Rivera', title: 'Partner', company: 'Rivera Legal Group',
        rating: 5, date: '2024-09-12',
        review: "We needed a firm that understood professional services and how clients evaluate you online. Webloft delivered a site that communicates credibility instantly\u2014our consultation requests more than doubled within 60 days.",
        projectImage: '/PROJECTS/aeries.webp',
        projectName: 'Aeries', projectCategory: 'Professional Services',
        projectResult: '+220% Client Inquiries',
      },
      {
        name: 'Jessica Wong', title: 'Director', company: 'NovaTech Solutions',
        rating: 5, date: '2025-01-08',
        review: "As a tech company, we had high standards for our website. Webloft exceeded them. The site is fast, beautifully designed, and most importantly it converts visitors into demo requests at 3\u00d7 our previous rate.",
        projectImage: '/PROJECTS/amigo-contracting-services.webp',
        projectName: 'Amigo Contracting Services', projectCategory: 'Technology',
        projectResult: '3\u00d7 Qualified Leads',
      },
    ],
    metaDescription: 'Web design for Oakville businesses. Premium, conversion-focused websites, Webflow development, and Halton Region SEO. Free consultation.',
  },

  // ── Miami, Florida ───────────────────────────────────────────────
  {
    slug: 'web-design-miami',
    city: 'Miami',
    region: 'Florida',
    displayName: 'Miami, Florida',
    eyebrow: 'Web Design \u00b7 Miami',
    servingLabel: 'Serving Miami & South Florida',
    heroHeadline1: 'Web design for',
    heroAccent: 'Miami',
    heroHeadline3: 'businesses built to convert.',
    heroSubtext: "Miami moves at its own speed\u2014fast, bold, and competitive. From Brickell startups to Coral Gables law firms, your website needs to match the energy of this market and turn visitors into paying customers.",
    heroImages: ['/PROJECTS/gallery/amigo-contracting-1.webp', '/PROJECTS/gallery/flowga-1.webp'],
    ctaButtonText: 'Start your project',
    ctaConsultationText: 'Free Miami consultation',
    localKnowledge: {
      title: 'We understand South Florida.',
      description: "Miami isn't just beaches\u2014it's a fiercely competitive business market. We know the difference between what converts in Wynwood and what works in Doral, because local context is how you beat the agencies charging triple and delivering half.",
    },
    whyLocalLines: [
      { before: "Your competitors in South Florida aren't waiting." },
      { before: 'We build sites that ', accent: 'outperform', after: ' them.' },
      { before: 'Every section is engineered to convert.' },
      { before: 'Every click moves toward a ', accent: 'lead', after: '.' },
    ],
    pillars: [
      { title: 'South Florida SEO', body: "We target the searches Miami customers actually make\u2014\"contractor Miami FL,\" \"best dentist Coral Gables\"\u2014not generic national keywords that waste your budget." },
      { title: 'Bilingual-ready', body: "Miami's market is bilingual. We build sites that connect with English and Spanish-speaking customers without feeling like an afterthought." },
      { title: 'Competitive edge', body: "We research your Miami competitors and build a site that makes the choice obvious\u2014faster, cleaner, and better optimized." },
    ],
    stats: [
      { value: 24, suffix: '+', label: 'Sites shipped', note: 'For South Florida businesses' },
      { value: 340, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
      { value: 99, suffix: '/100', label: 'PageSpeed', note: 'Lighthouse performance score' },
      { value: 17, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: [
      { title: 'Custom Web Design', desc: 'Miami\u2019s market is bold, bilingual, and brutally competitive. We design sites that match that energy\u2014conversion-engineered for Brickell professionals, Wynwood creatives, and Doral service businesses alike.', features: ['Conversion-first', 'Bilingual layouts', 'Bold design'] },
      { title: 'Webflow Development', desc: 'Fast, modern Webflow builds for South Florida businesses that move at Miami speed. Update content in English and Spanish, manage your CMS, and grow\u2014no developer on retainer.', features: ['Bilingual CMS', 'Visual editing', 'Miami-fast delivery'] },
      { title: 'Local SEO', desc: "South Florida SEO covering Miami, Fort Lauderdale, Coral Gables, and Doral. We target bilingual search patterns and the high-intent local queries that drive calls from actual Miami customers.", features: ['Bilingual SEO', 'Google Business', 'South Florida targeting'] },
      { title: 'Ongoing Support', desc: "Miami doesn\u2019t slow down and neither should your marketing. Monthly retainers for conversion optimization, bilingual content updates, and performance tracking built for South Florida\u2019s competitive pace.", features: ['Bilingual content', 'Conversion tracking', 'Competitive monitoring'] },
    ],
    caseStudy: {
      tag: 'Contracting \u00b7 Miami',
      title: 'Amigo Contracting',
      blurb: 'From outdated site to a high-converting Webflow build with bilingual lead capture and local SEO that ranks in South Florida\u2019s competitive contractor market.',
      image: '/PROJECTS/gallery/amigo-contracting-1.webp',
      href: '/case-studies/amigo-contracting-services',
      kpis: [
        { value: '+180%', label: 'inbound leads' },
        { value: '98', label: 'PageSpeed' },
        { value: '21-day', label: 'launch' },
      ],
    },
    schema: {
      streetAddress: '1200 Brickell Ave', addressLocality: 'Miami',
      postalCode: '33131', latitude: '25.7617', longitude: '-80.1918',
      areaServed: ['Miami, Florida', 'Fort Lauderdale, Florida', 'Coral Gables, Florida', 'Doral, Florida', 'Miami Beach, Florida', 'Hialeah, Florida'],
      ratingValue: '4.9', reviewCount: '47',
    },
    testimonials: [
      {
        name: 'Sergio Amigon', title: 'CEO', company: 'Amigo Contracting Services',
        rating: 5, date: '2024-12-15',
        review: 'Webloft Studio rebuilt our entire web presence from scratch. The results spoke for themselves\u2014our phone started ringing with qualified leads within the first month. They understood our business and built a site that works as hard as we do.',
        projectImage: '/PROJECTS/amigo-contracting-services.webp',
        projectName: 'Amigo Contracting Services', projectCategory: 'Construction',
        projectResult: '+180% Lead Increase',
      },
      {
        name: 'David Chen', title: 'Owner', company: 'Local Home Services',
        rating: 5, date: '2024-10-30',
        review: "From strategy to execution, everything was seamless. They understood our local market and built a website that actually brings in customers. Best investment we've made for our business.",
        projectImage: '/PROJECTS/aeries.webp',
        projectName: 'Aeries', projectCategory: 'Business',
        projectResult: 'Improved User Experience',
      },
      {
        name: 'Priya Patel', title: 'Founder', company: 'Patel Dental Care',
        rating: 5, date: '2024-11-05',
        review: "Our old website looked like every other dental practice. Webloft built something that actually differentiates us\u2014patients tell us they chose us because of how professional our website looked compared to other clinics.",
        projectImage: '/PROJECTS/amigo-contracting-services.webp',
        projectName: 'Amigo Contracting Services', projectCategory: 'Healthcare',
        projectResult: '+240% New Patients',
      },
    ],
    metaDescription: 'Web design for Miami businesses. Conversion-focused websites, Webflow development, and South Florida SEO that turns visitors into paying customers. Free consultation.',
  },

  // ── Austin, Texas ────────────────────────────────────────────────
  {
    slug: 'web-design-austin',
    city: 'Austin',
    region: 'Texas',
    displayName: 'Austin, Texas',
    eyebrow: 'Web Design \u00b7 Austin',
    servingLabel: 'Serving Austin & Central Texas',
    heroHeadline1: 'Web design for',
    heroAccent: 'Austin',
    heroHeadline3: 'businesses that ship results.',
    heroSubtext: "Austin is one of the fastest-growing markets in the country. Whether you're a South Congress boutique or a tech startup off Lamar, your website has to work harder than a template ever could\u2014and actually convert the traffic you're paying for.",
    heroImages: ['/PROJECTS/gallery/flowga-1.webp', '/PROJECTS/gallery/aeries-1.webp'],
    ctaButtonText: 'Start your project',
    ctaConsultationText: 'Free Austin consultation',
    localKnowledge: {
      title: "Built for Austin\u2019s pace.",
      description: "Austin doesn't slow down and neither should your website. From the Domain to East Austin, from Round Rock to Dripping Springs\u2014we understand what Central Texas businesses need to stand out in a market flooded with competition.",
    },
    whyLocalLines: [
      { before: "Every day a new competitor launches in Austin." },
      { before: 'We build sites that ', accent: 'stay ahead', after: '.' },
      { before: 'No templates. No filler.' },
      { before: 'Just pages that ', accent: 'convert', after: '.' },
    ],
    pillars: [
      { title: 'Central Texas SEO', body: "We target Austin-specific searches your customers actually type\u2014\"plumber Austin TX,\" \"marketing agency near me\"\u2014so you rank where it counts." },
      { title: 'Startup-speed delivery', body: "Austin moves fast. We match that pace\u201421-day average from kickoff to launch, without cutting corners on quality." },
      { title: 'Growth-stage ready', body: "Whether you're bootstrapped or funded, we build sites that scale with your business instead of holding it back." },
    ],
    stats: [
      { value: 22, suffix: '+', label: 'Sites shipped', note: 'For Central Texas clients' },
      { value: 280, suffix: '%', label: 'Avg. lead lift', note: 'Across Austin projects' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'On every site we ship' },
      { value: 18, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: [
      { title: 'Custom Web Design', desc: 'Austin\u2019s market is saturated with startups and service businesses fighting for the same customers. We design sites that cut through the noise\u2014conversion-engineered for SoCo boutiques, East Austin creatives, and Domain tech firms.', features: ['Conversion-first', 'Startup-ready', 'Responsive'] },
      { title: 'Webflow Development', desc: 'Fast Webflow builds for Austin businesses that ship fast. Clean code, visual CMS, and a site you can update without calling anyone\u2014built for teams that move at startup speed.', features: ['CMS integration', 'Quick iteration', 'Visual editing'] },
      { title: 'Local SEO', desc: "Central Texas SEO covering Austin, Round Rock, Cedar Park, and Georgetown. We target the local searches that drive foot traffic and phone calls\u2014not vanity keywords that look good in reports.", features: ['Google Business', 'Central Texas targeting', 'Intent-based keywords'] },
      { title: 'Ongoing Support', desc: "Austin businesses evolve fast. Monthly retainers for A/B testing, content updates, and conversion optimization that keeps your site performing as your market shifts.", features: ['Rapid iteration', 'A/B testing', 'Market adaptation'] },
    ],
    caseStudy: {
      tag: 'Yoga studio \u00b7 Austin',
      title: 'Flowga Yoga',
      blurb: 'A premium visual system + booking-funnel landing pages that captured a health-conscious market\u2014the same conversion-first playbook we run for Austin wellness and service businesses.',
      image: '/PROJECTS/gallery/flowga-1.webp',
      href: '/case-studies/flowga-yoga-studio',
      kpis: [
        { value: '+300%', label: 'online bookings' },
        { value: '3.2\u00d7', label: 'session time' },
        { value: 'Fast', label: 'delivery' },
      ],
    },
    schema: {
      streetAddress: '600 Congress Ave', addressLocality: 'Austin',
      postalCode: '78701', latitude: '30.2672', longitude: '-97.7431',
      areaServed: ['Austin, Texas', 'Round Rock, Texas', 'Cedar Park, Texas', 'Georgetown, Texas', 'San Marcos, Texas', 'Pflugerville, Texas'],
      ratingValue: '4.9', reviewCount: '38',
    },
    testimonials: [
      {
        name: 'Marcus Rivera', title: 'Partner', company: 'Rivera Legal Group',
        rating: 5, date: '2024-09-12',
        review: "We needed a firm that understood professional services and how clients evaluate you online. Webloft delivered a site that communicates credibility instantly\u2014our consultation requests more than doubled within 60 days.",
        projectImage: '/PROJECTS/aeries.webp',
        projectName: 'Aeries', projectCategory: 'Professional Services',
        projectResult: '+220% Client Inquiries',
      },
      {
        name: "Ryan O'Connor", title: 'Owner', company: "O'Connor Plumbing",
        rating: 5, date: '2024-08-22',
        review: "I was skeptical about how much a website could matter for a plumbing business. Webloft proved me wrong. Our service calls jumped significantly and the site basically pays for itself every month.",
        projectImage: '/PROJECTS/flowga.webp',
        projectName: 'Flowga Yoga Studio', projectCategory: 'Trades',
        projectResult: '+160% Service Calls',
      },
      {
        name: 'Tom Erikson', title: 'Owner', company: 'Erikson Landscaping',
        rating: 5, date: '2024-07-18',
        review: "Seasonal businesses like ours need a website that generates leads year-round. Webloft built us a site with SEO that keeps quote requests coming in even during the slow months. Game changer.",
        projectImage: '/PROJECTS/flowga.webp',
        projectName: 'Flowga Yoga Studio', projectCategory: 'Outdoor Services',
        projectResult: '+190% Quote Requests',
      },
    ],
    metaDescription: 'Web design for Austin businesses. Conversion-focused websites, Webflow development, and Central Texas SEO that turns visitors into customers. Free consultation.',
  },

  // ── Dallas, Texas ────────────────────────────────────────────────
  {
    slug: 'web-design-dallas',
    city: 'Dallas',
    region: 'Texas',
    displayName: 'Dallas, Texas',
    eyebrow: 'Web Design \u00b7 Dallas',
    servingLabel: 'Serving Dallas & the DFW Metroplex',
    heroHeadline1: 'Web design for',
    heroAccent: 'Dallas',
    heroHeadline3: 'businesses ready to dominate.',
    heroSubtext: "The DFW metroplex is home to 7 million people and thousands of businesses fighting for the same customers. A generic website won't cut it. We build sites that rank, convert, and give you an unfair advantage in the largest market in Texas.",
    heroImages: ['/PROJECTS/gallery/aeries-1.webp', '/PROJECTS/gallery/amigo-contracting-1.webp'],
    ctaButtonText: 'Start your project',
    ctaConsultationText: 'Free Dallas consultation',
    localKnowledge: {
      title: 'DFW is massive. Your site needs to match.',
      description: "From Uptown to Deep Ellum, from Plano to Fort Worth\u2014the DFW metroplex isn't one market, it's dozens. We build websites that target the right neighborhoods, the right searches, and the right customers for your specific business.",
    },
    whyLocalLines: [
      { before: "The DFW market doesn't forgive weak websites." },
      { before: 'We build sites that ', accent: 'dominate', after: ' local search.' },
      { before: 'Data-driven. Conversion-first.' },
      { before: 'Built to turn traffic into ', accent: 'revenue', after: '.' },
    ],
    pillars: [
      { title: 'DFW-targeted SEO', body: "Dallas, Fort Worth, Plano, Frisco, Arlington\u2014we target the exact city and neighborhood searches your customers use, not broad keywords that waste your ad spend." },
      { title: 'Enterprise-level quality', body: "Dallas businesses compete with Fortune 500 companies. We build sites with that level of polish\u2014without the six-figure agency price tag." },
      { title: 'Conversion architecture', body: "Every page we build is structured around one goal: turning your DFW visitors into qualified leads. No vanity design\u2014just results." },
    ],
    stats: [
      { value: 26, suffix: '+', label: 'Sites shipped', note: 'For DFW businesses' },
      { value: 325, suffix: '%', label: 'Avg. lead lift', note: 'Across DFW projects' },
      { value: 99, suffix: '/100', label: 'PageSpeed', note: 'Lighthouse performance score' },
      { value: 16, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: [
      { title: 'Custom Web Design', desc: 'The DFW metroplex is massive\u2014Uptown professionals, Deep Ellum creatives, Plano families, Fort Worth entrepreneurs. We design for your specific market segment, not a generic "Texas" audience.', features: ['Conversion-first', 'Enterprise polish', 'Responsive'] },
      { title: 'Webflow Development', desc: 'Enterprise-quality Webflow builds for DFW businesses that refuse to compromise. Fast, clean, and fully editable\u2014your marketing team updates content without touching code.', features: ['CMS integration', 'Enterprise-grade', 'Visual editing'] },
      { title: 'Local SEO', desc: "DFW SEO targeting Dallas, Fort Worth, Plano, Frisco, and Arlington. We target neighbourhood-level searches across the metroplex\u2014because ranking in Plano is a different game than ranking in Deep Ellum.", features: ['Metroplex-wide targeting', 'Google Business', 'Neighbourhood SEO'] },
      { title: 'Ongoing Support', desc: "In a market of 7 million people, standing still means falling behind. Monthly retainers for conversion optimization, content strategy, and competitive monitoring across the DFW metroplex.", features: ['Competitive intelligence', 'Content strategy', 'Conversion optimization'] },
    ],
    caseStudy: {
      tag: 'Contracting \u00b7 Dallas',
      title: 'Amigo Contracting',
      blurb: 'Full rebuild with call tracking, instant SMS lead alerts, and DFW-targeted SEO for a growing contracting firm\u2014the same conversion-first architecture we build for Dallas businesses.',
      image: '/PROJECTS/gallery/amigo-contracting-1.webp',
      href: '/case-studies/amigo-contracting-services',
      kpis: [
        { value: '+180%', label: 'inbound leads' },
        { value: '98', label: 'PageSpeed' },
        { value: '21-day', label: 'launch' },
      ],
    },
    schema: {
      streetAddress: '2200 Ross Ave', addressLocality: 'Dallas',
      postalCode: '75201', latitude: '32.7767', longitude: '-96.7970',
      areaServed: ['Dallas, Texas', 'Fort Worth, Texas', 'Plano, Texas', 'Frisco, Texas', 'Arlington, Texas', 'Irving, Texas'],
      ratingValue: '4.9', reviewCount: '42',
    },
    testimonials: [
      {
        name: 'Sarah Mitchell', title: 'Founder', company: 'Bloom Wellness',
        rating: 5, date: '2024-11-20',
        review: "The team at Webloft Studio didn't just build us a website\u2014they built us a lead generation machine. Our booking rate increased by 200% and we finally have a site that represents our brand perfectly.",
        projectImage: '/PROJECTS/flowga.webp',
        projectName: 'Flowga Yoga Studio', projectCategory: 'Wellness',
        projectResult: '+300% Online Bookings',
      },
      {
        name: 'David Chen', title: 'Owner', company: 'Local Home Services',
        rating: 5, date: '2024-10-30',
        review: "From strategy to execution, everything was seamless. They understood our local market and built a website that actually brings in customers. Best investment we've made for our business.",
        projectImage: '/PROJECTS/aeries.webp',
        projectName: 'Aeries', projectCategory: 'Business',
        projectResult: 'Improved User Experience',
      },
      {
        name: 'Jessica Wong', title: 'Director', company: 'NovaTech Solutions',
        rating: 5, date: '2025-01-08',
        review: "As a tech company, we had high standards for our website. Webloft exceeded them. The site is fast, beautifully designed, and most importantly it converts visitors into demo requests at 3\u00d7 our previous rate.",
        projectImage: '/PROJECTS/amigo-contracting-services.webp',
        projectName: 'Amigo Contracting Services', projectCategory: 'Technology',
        projectResult: '3\u00d7 Qualified Leads',
      },
    ],
    metaDescription: 'Web design for Dallas businesses. Conversion-focused websites, Webflow development, and DFW SEO that turns your visitors into paying customers. Free consultation.',
  },
];

/* ── Helpers ─────────────────────────────────────────────────────── */

export function getCityPage(slug: string): CityPageData | undefined {
  return cityPages.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cityPages.map((c) => c.slug);
}

export { cityPages };
