import type { BlogPost } from '@/lib/blog';

const post: BlogPost = {
  slug: 'how-often-update-website-why-matters',
  number: '05',
  title: 'How Often Should You Update Your Website? (And Why It Matters)',
  shortTitle: 'Website updates',
  excerpt:
    'A practical maintenance guide for keeping your website current, secure, search-friendly, and aligned with your business as it changes.',
  category: 'Website Maintenance',
  date: 'January 5, 2025',
  isoDate: '2025-01-05',
  readTime: '7 min read',
  featured: false,
  image: '/blog/blog-05-updates.jpg',
  keywords: [
    'how often update website',
    'website maintenance',
    'website updates',
    'website care plan',
    'website refresh',
  ],
  takeaways: [
    'Most business websites need small monthly checks and larger quarterly reviews.',
    'Content, performance, security, forms, and tracking should all be maintained.',
    'A website should evolve as services, proof, offers, and buyer questions change.',
  ],
  sections: [
    {
      id: 'cadence',
      heading: 'The Right Update Cadence Depends on the Website',
      paragraphs: [
        'A simple five-page website may not need weekly edits, but it still needs regular checks. A larger site with blogs, campaigns, integrations, and forms needs a more active maintenance rhythm.',
        'For most service businesses, a monthly technical check and a quarterly content review is a strong baseline.',
      ],
    },
    {
      id: 'content',
      heading: 'Update Content When the Business Changes',
      paragraphs: [
        'Your website should reflect current services, pricing signals, team details, locations, process, case studies, and proof. Outdated content makes the business feel less active and less trustworthy.',
        'Small updates can have a large impact when they make the site more accurate and useful for buyers.',
      ],
    },
    {
      id: 'technical',
      heading: 'Maintain the Technical Foundation',
      paragraphs: [
        'Forms, tracking, redirects, page speed, broken links, plugins, CMS settings, backups, and security checks all need attention. Many website problems go unnoticed until a lead form breaks or a campaign starts sending paid traffic to a weak page.',
        'Regular QA keeps small technical issues from becoming expensive problems.',
      ],
      bullets: [
        'Test contact forms and booking flows',
        'Check analytics and conversion events',
        'Review page speed and image weight',
        'Update CMS, plugins, or platform settings when required',
      ],
    },
    {
      id: 'seo',
      heading: 'Freshness Helps SEO When It Adds Value',
      paragraphs: [
        'Updating a website just to change dates is not a strategy. Updating pages with better answers, clearer structure, new proof, stronger internal links, and improved media can support search performance.',
        'Content reviews are especially useful for service pages, local pages, and posts that already get impressions.',
      ],
    },
    {
      id: 'refresh',
      heading: 'When to Consider a Full Redesign',
      paragraphs: [
        'If the business has repositioned, the site no longer converts, the design feels dated, mobile UX is weak, or the technical foundation is holding you back, small updates may not be enough.',
        'A redesign is worth considering when the current site cannot support the next stage of growth.',
      ],
    },
  ],
  ctaTitle: 'Need a website care plan?',
  ctaText: 'We help keep websites stable, current, measurable, and ready for the next campaign.',
  related: [
    '5-common-website-mistakes-costing-clients',
    'seo-local-seo-secret-getting-found-online',
    'why-webflow-best-platform-small-medium-businesses',
  ],
};

export default post;
