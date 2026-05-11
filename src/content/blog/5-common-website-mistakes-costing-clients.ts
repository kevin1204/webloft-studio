import type { BlogPost } from '@/lib/blog';

const post: BlogPost = {
  slug: '5-common-website-mistakes-costing-clients',
  number: '04',
  title: '5 Common Website Mistakes That Could Be Costing You Clients',
  shortTitle: 'Website mistakes',
  excerpt:
    'Five practical website issues that quietly reduce trust, weaken conversions, and make it harder for qualified visitors to become clients.',
  category: 'Web Design',
  date: 'January 8, 2025',
  isoDate: '2025-01-08',
  readTime: '6 min read',
  featured: false,
  image: '/blog/blog-04-mistakes.jpg',
  keywords: [
    'website mistakes',
    'website conversion mistakes',
    'web design mistakes',
    'website not converting',
    'business website tips',
  ],
  takeaways: [
    'Confusing messaging is often more damaging than imperfect visuals.',
    'Weak mobile UX, slow pages, and unclear CTAs reduce conversion quickly.',
    'Proof and trust signals should appear before a visitor has to ask for them.',
  ],
  sections: [
    {
      id: 'unclear-message',
      heading: '1. The Website Does Not Explain the Offer Quickly',
      paragraphs: [
        'Visitors should understand what you do, who you help, and why it matters within seconds. If they need to decode your homepage, you have already introduced friction.',
        'Clear positioning is the foundation of conversion. Strong websites make the offer obvious, then support it with proof and action paths.',
      ],
    },
    {
      id: 'generic-proof',
      heading: '2. The Site Makes Claims Without Proof',
      paragraphs: [
        'Phrases like "high quality" and "trusted partner" are not enough on their own. Visitors need evidence that your business can deliver.',
        'Use case studies, testimonials, metrics, before-and-after examples, recognizable clients, process detail, and specific outcomes to build credibility.',
      ],
    },
    {
      id: 'mobile',
      heading: '3. Mobile Feels Like an Afterthought',
      paragraphs: [
        'Many visitors will judge your business from a phone. If buttons are hard to tap, text feels cramped, images crop badly, or forms are awkward, they will leave.',
        'Responsive design should be planned, not patched. The mobile version needs its own hierarchy, spacing, and conversion flow.',
      ],
    },
    {
      id: 'cta',
      heading: '4. Calls to Action Are Too Weak or Too Rare',
      paragraphs: [
        'A visitor should always know what to do next. That does not mean every section needs a loud button, but it does mean the page needs a clear rhythm of next steps.',
        'Use CTAs that match intent: book a call, request a quote, view work, download a guide, or compare services.',
      ],
    },
    {
      id: 'speed',
      heading: '5. The Site Is Slow or Technically Messy',
      paragraphs: [
        'Slow loading, broken links, layout shifts, missing metadata, and poor accessibility all weaken trust. They also make every marketing channel less efficient.',
        'Fixing technical issues is often one of the fastest ways to improve the experience without changing the whole brand.',
      ],
    },
  ],
  ctaTitle: 'Not sure what is holding your website back?',
  ctaText: 'We can audit the page experience, conversion flow, SEO basics, and technical foundation.',
  related: [
    'real-roi-great-website-investment-not-expense',
    'how-often-update-website-why-matters',
    'seo-local-seo-secret-getting-found-online',
  ],
};

export default post;
