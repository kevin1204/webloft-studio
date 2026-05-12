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

/* ── Shared data ────────────────────────────────────────────────── */

const sharedTestimonials: CityPageData['testimonials'] = [
  {
    name: 'Sergio Amigon', title: 'CEO', company: 'Amigo Contracting Services',
    rating: 5, date: '2024-12-15',
    review: 'Working with Webloft Studio transformed our online presence. Within 3 months, we saw a 150% increase in qualified leads. Their attention to detail and understanding of business needs is exceptional.',
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
    name: 'David Chen', title: 'Owner', company: 'Local Home Services',
    rating: 5, date: '2024-10-30',
    review: "From strategy to execution, everything was seamless. They understood our local market and built a website that actually brings in customers. Best investment we've made for our business.",
    projectImage: '/PROJECTS/aeries.webp',
    projectName: 'Aeries', projectCategory: 'Business',
    projectResult: 'Improved User Experience',
  },
];

const sharedServices: CityPageData['services'] = [
  {
    title: 'Custom Web Design',
    desc: 'Conversion-engineered designs built around your business goals. Not templates\u2014everything from scratch, informed by what actually drives leads in your industry.',
    features: ['Conversion-first', 'Responsive', 'Accessibility'],
  },
  {
    title: 'Webflow Development',
    desc: 'Clean, fast Webflow builds that you can update yourself. No developer dependency, no monthly lock-in. You own everything.',
    features: ['CMS integration', 'Visual editing', 'No lock-in'],
  },
  {
    title: 'Local SEO',
    desc: "Technical SEO, Google Business Profile optimization, and content strategy targeting the searches your customers actually make. We don't guess\u2014we use data.",
    features: ['Google Business', 'Schema markup', 'Local keywords'],
  },
  {
    title: 'Ongoing Support',
    desc: 'Monthly retainers for content updates, A/B testing, performance monitoring, and conversion optimization. Most clients stay because the site keeps earning more.',
    features: ['A/B testing', 'Analytics', 'Content updates'],
  },
];

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
      { value: 20, suffix: '+', label: 'Sites shipped', note: 'For Ontario businesses' },
      { value: 312, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'On every site we ship' },
      { value: 21, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: sharedServices,
    caseStudy: {
      tag: 'Contracting \u00b7 Toronto',
      title: 'Amigo Contracting',
      blurb: 'From outdated site to a sleek Webflow build with call tracking, instant SMS lead alerts, and local SEO that actually ranks.',
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
    testimonials: sharedTestimonials,
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
      { value: 20, suffix: '+', label: 'Sites shipped', note: 'For Ontario businesses' },
      { value: 250, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'On every site we ship' },
      { value: 21, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: sharedServices,
    caseStudy: {
      tag: 'Yoga studio \u00b7 Toronto',
      title: 'Flowga Yoga',
      blurb: 'A premium, calm visual system + booking-funnel landing pages turned cold traffic into a waitlist.',
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
    testimonials: sharedTestimonials,
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
      { title: 'Face-to-face', body: "We'll meet at your office, your shop, or a café in Port Credit. Real conversations build better websites." },
      { title: 'GTA network', body: "We work with businesses across Mississauga, Brampton, and Oakville\u2014your referrals are our best marketing." },
    ],
    stats: [
      { value: 20, suffix: '+', label: 'Sites shipped', note: 'For Ontario businesses' },
      { value: 250, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'On every site we ship' },
      { value: 21, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: sharedServices,
    caseStudy: {
      tag: 'Business \u00b7 Toronto',
      title: 'Aeries',
      blurb: 'Clean, conversion-focused redesign that established a polished digital presence and improved user engagement across the board.',
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
    testimonials: sharedTestimonials,
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
      { value: 20, suffix: '+', label: 'Sites shipped', note: 'For Ontario businesses' },
      { value: 250, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'On every site we ship' },
      { value: 21, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: sharedServices,
    caseStudy: { tag: 'Contracting \u00b7 Toronto', title: 'Amigo Contracting', blurb: 'From outdated site to a sleek Webflow build with call tracking, SMS lead alerts, and local SEO that ranks.', image: '/PROJECTS/gallery/amigo-contracting-1.webp', href: '/case-studies/amigo-contracting-services', kpis: [{ value: '+180%', label: 'inbound leads' }, { value: '98', label: 'PageSpeed' }, { value: '21-day', label: 'launch' }] },
    schema: { streetAddress: '150 Elgin Street', addressLocality: 'Ottawa', postalCode: 'K2P 1L4', latitude: '45.4215', longitude: '-75.6972', areaServed: ['Ottawa, Ontario', 'Gatineau, Quebec', 'Kanata, Ontario', 'Orleans, Ontario', 'Barrhaven, Ontario'], ratingValue: '4.8', reviewCount: '35' },
    testimonials: sharedTestimonials,
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
    localKnowledge: { title: 'Steel City grit, digital polish.', description: "Hamilton doesn't need another generic agency. It needs a studio that understands what a James Street North café needs vs. what an Ancaster dental practice needs\u2014and builds accordingly." },
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
      { value: 20, suffix: '+', label: 'Sites shipped', note: 'For Ontario businesses' },
      { value: 250, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'On every site we ship' },
      { value: 21, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: sharedServices,
    caseStudy: { tag: 'Yoga studio \u00b7 Toronto', title: 'Flowga Yoga', blurb: 'A premium, calm visual system + booking-funnel landing pages turned cold traffic into a waitlist.', image: '/PROJECTS/gallery/flowga-1.webp', href: '/case-studies/flowga-yoga-studio', kpis: [{ value: '+300%', label: 'online bookings' }, { value: '3.2\u00d7', label: 'session time' }, { value: 'Fast', label: 'delivery' }] },
    schema: { streetAddress: '100 King Street West', addressLocality: 'Hamilton', postalCode: 'L8P 4S6', latitude: '43.2557', longitude: '-79.8711', areaServed: ['Hamilton, Ontario', 'Burlington, Ontario', 'Ancaster, Ontario', 'Dundas, Ontario', 'Stoney Creek, Ontario'], ratingValue: '4.8', reviewCount: '30' },
    testimonials: sharedTestimonials,
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
      { value: 20, suffix: '+', label: 'Sites shipped', note: 'For Ontario businesses' },
      { value: 250, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'On every site we ship' },
      { value: 21, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: sharedServices,
    caseStudy: { tag: 'Contracting \u00b7 Toronto', title: 'Amigo Contracting', blurb: 'From outdated site to a sleek Webflow build with call tracking, SMS lead alerts, and local SEO that ranks.', image: '/PROJECTS/gallery/amigo-contracting-1.webp', href: '/case-studies/amigo-contracting-services', kpis: [{ value: '+180%', label: 'inbound leads' }, { value: '98', label: 'PageSpeed' }, { value: '21-day', label: 'launch' }] },
    schema: { streetAddress: '2 Wellington Street West', addressLocality: 'Brampton', postalCode: 'L6Y 4R2', latitude: '43.7315', longitude: '-79.7624', areaServed: ['Brampton, Ontario', 'Mississauga, Ontario', 'Caledon, Ontario', 'Georgetown, Ontario', 'Bolton, Ontario'], ratingValue: '4.8', reviewCount: '26' },
    testimonials: sharedTestimonials,
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
      { title: 'Coffee meeting ready', body: "DTK café or your Waterloo office. We build better websites when we understand your business in person." },
      { title: 'Innovation DNA', body: "KW businesses expect modern tech. We deliver\u2014fast sites, clean code, no legacy junk." },
    ],
    stats: [
      { value: 20, suffix: '+', label: 'Sites shipped', note: 'For Ontario businesses' },
      { value: 312, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'On every site we ship' },
      { value: 21, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: sharedServices,
    caseStudy: { tag: 'Business \u00b7 Toronto', title: 'Aeries', blurb: 'Clean, conversion-focused redesign that established a polished digital presence and improved user engagement.', image: '/PROJECTS/gallery/aeries-1.webp', href: '/case-studies/aeries', kpis: [{ value: 'Improved', label: 'UX' }, { value: 'Mobile', label: 'first' }, { value: 'SEO', label: 'foundation' }] },
    schema: { streetAddress: '305 King Street West', addressLocality: 'Kitchener', postalCode: 'N2G 1B9', latitude: '43.4516', longitude: '-80.4925', areaServed: ['Kitchener, Ontario', 'Waterloo, Ontario', 'Cambridge, Ontario', 'Guelph, Ontario', 'Elmira, Ontario'], ratingValue: '4.9', reviewCount: '29' },
    testimonials: sharedTestimonials,
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
      { value: 20, suffix: '+', label: 'Sites shipped', note: 'For Ontario businesses' },
      { value: 250, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'On every site we ship' },
      { value: 21, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: sharedServices,
    caseStudy: { tag: 'Yoga studio \u00b7 Toronto', title: 'Flowga Yoga', blurb: 'A premium, calm visual system + booking-funnel landing pages turned cold traffic into a waitlist.', image: '/PROJECTS/gallery/flowga-1.webp', href: '/case-studies/flowga-yoga-studio', kpis: [{ value: '+300%', label: 'online bookings' }, { value: '3.2\u00d7', label: 'session time' }, { value: 'Fast', label: 'delivery' }] },
    schema: { streetAddress: '100 Ouellette Avenue', addressLocality: 'Windsor', postalCode: 'N9A 6T3', latitude: '42.3149', longitude: '-83.0364', areaServed: ['Windsor, Ontario', 'Tecumseh, Ontario', 'LaSalle, Ontario', 'Leamington, Ontario', 'Amherstburg, Ontario'], ratingValue: '4.8', reviewCount: '24' },
    testimonials: sharedTestimonials,
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
      { value: 20, suffix: '+', label: 'Sites shipped', note: 'For Ontario businesses' },
      { value: 312, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'On every site we ship' },
      { value: 21, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: sharedServices,
    caseStudy: { tag: 'Contracting \u00b7 Toronto', title: 'Amigo Contracting', blurb: 'From outdated site to a sleek Webflow build with call tracking, SMS lead alerts, and local SEO that ranks.', image: '/PROJECTS/gallery/amigo-contracting-1.webp', href: '/case-studies/amigo-contracting-services', kpis: [{ value: '+180%', label: 'inbound leads' }, { value: '98', label: 'PageSpeed' }, { value: '21-day', label: 'launch' }] },
    schema: { streetAddress: '8030 Enterprise Drive', addressLocality: 'Markham', postalCode: 'L6G 0B5', latitude: '43.8561', longitude: '-79.3370', areaServed: ['Markham, Ontario', 'Stouffville, Ontario', 'Unionville, Ontario', 'Richmond Hill, Ontario', 'Scarborough, Ontario'], ratingValue: '4.9', reviewCount: '31' },
    testimonials: sharedTestimonials,
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
      { title: 'Meet locally', body: "Woodbridge café or your VMC office. We prefer face-to-face because it builds better websites." },
      { title: 'Growth-ready', body: "Vaughan is one of Ontario's fastest-growing cities. We build sites that scale with your business." },
    ],
    stats: [
      { value: 20, suffix: '+', label: 'Sites shipped', note: 'For Ontario businesses' },
      { value: 250, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'On every site we ship' },
      { value: 21, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: sharedServices,
    caseStudy: { tag: 'Business \u00b7 Toronto', title: 'Aeries', blurb: 'Clean, conversion-focused redesign that established a polished digital presence and improved user engagement.', image: '/PROJECTS/gallery/aeries-1.webp', href: '/case-studies/aeries', kpis: [{ value: 'Improved', label: 'UX' }, { value: 'Mobile', label: 'first' }, { value: 'SEO', label: 'foundation' }] },
    schema: { streetAddress: '3300 Highway 7 West', addressLocality: 'Vaughan', postalCode: 'L4K 4M3', latitude: '43.8361', longitude: '-79.4981', areaServed: ['Vaughan, Ontario', 'Woodbridge, Ontario', 'Maple, Ontario', 'Kleinburg, Ontario', 'Concord, Ontario'], ratingValue: '4.8', reviewCount: '27' },
    testimonials: sharedTestimonials,
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
      { value: 20, suffix: '+', label: 'Sites shipped', note: 'For Ontario businesses' },
      { value: 250, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'On every site we ship' },
      { value: 21, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: sharedServices,
    caseStudy: { tag: 'Yoga studio \u00b7 Toronto', title: 'Flowga Yoga', blurb: 'A premium, calm visual system + booking-funnel landing pages turned cold traffic into a waitlist.', image: '/PROJECTS/gallery/flowga-1.webp', href: '/case-studies/flowga-yoga-studio', kpis: [{ value: '+300%', label: 'online bookings' }, { value: '3.2\u00d7', label: 'session time' }, { value: 'Fast', label: 'delivery' }] },
    schema: { streetAddress: '10 Newkirk Road', addressLocality: 'Richmond Hill', postalCode: 'L4C 3G3', latitude: '43.8828', longitude: '-79.4403', areaServed: ['Richmond Hill, Ontario', 'Markham, Ontario', 'Vaughan, Ontario', 'Aurora, Ontario', 'Thornhill, Ontario'], ratingValue: '4.8', reviewCount: '25' },
    testimonials: sharedTestimonials,
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
      { value: 20, suffix: '+', label: 'Sites shipped', note: 'For Ontario businesses' },
      { value: 250, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'On every site we ship' },
      { value: 21, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: sharedServices,
    caseStudy: { tag: 'Contracting \u00b7 Toronto', title: 'Amigo Contracting', blurb: 'From outdated site to a sleek Webflow build with call tracking, SMS lead alerts, and local SEO that ranks.', image: '/PROJECTS/gallery/amigo-contracting-1.webp', href: '/case-studies/amigo-contracting-services', kpis: [{ value: '+180%', label: 'inbound leads' }, { value: '98', label: 'PageSpeed' }, { value: '21-day', label: 'launch' }] },
    schema: { streetAddress: '414 Brant Street', addressLocality: 'Burlington', postalCode: 'L7R 2G5', latitude: '43.3255', longitude: '-79.7990', areaServed: ['Burlington, Ontario', 'Oakville, Ontario', 'Hamilton, Ontario', 'Milton, Ontario', 'Waterdown, Ontario'], ratingValue: '4.9', reviewCount: '28' },
    testimonials: sharedTestimonials,
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
      { value: 20, suffix: '+', label: 'Sites shipped', note: 'For Ontario businesses' },
      { value: 312, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
      { value: 98, suffix: '/100', label: 'PageSpeed', note: 'On every site we ship' },
      { value: 21, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
    ],
    services: sharedServices,
    caseStudy: { tag: 'Yoga studio \u00b7 Toronto', title: 'Flowga Yoga', blurb: 'A premium, calm visual system + booking-funnel landing pages turned cold traffic into a waitlist.', image: '/PROJECTS/gallery/flowga-1.webp', href: '/case-studies/flowga-yoga-studio', kpis: [{ value: '+300%', label: 'online bookings' }, { value: '3.2\u00d7', label: 'session time' }, { value: 'Fast', label: 'delivery' }] },
    schema: { streetAddress: '119 Lakeshore Road East', addressLocality: 'Oakville', postalCode: 'L6J 1H3', latitude: '43.4675', longitude: '-79.6877', areaServed: ['Oakville, Ontario', 'Burlington, Ontario', 'Mississauga, Ontario', 'Milton, Ontario', 'Bronte, Ontario'], ratingValue: '4.9', reviewCount: '26' },
    testimonials: sharedTestimonials,
    metaDescription: 'Web design for Oakville businesses. Premium, conversion-focused websites, Webflow development, and Halton Region SEO. Free consultation.',
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
