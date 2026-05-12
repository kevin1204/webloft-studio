import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import LogoWall from '@/components/home/LogoWall';
import StatsSection from '@/components/home/StatsSection';
import ManifestoSection from '@/components/home/ManifestoSection';
import WhyWebloftSection from '@/components/home/WhyWebloftSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import CasesSection from '@/components/home/CasesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import PricingSection from '@/components/home/PricingSection';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Web Design Agency | Websites That Convert for Service Businesses | Webloft Studio',
  description:
    'We build conversion-focused websites for service businesses — custom design, Webflow, SEO, and lead capture. Fixed-fee pricing, 21-day launches. Book a free call today.',
  alternates: {
    canonical: 'https://webloftstudio.com',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does a typical project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Studio projects launch in 21–30 days from kickoff. Landing pages can ship in 7–10. Atelier (custom) timelines depend on scope, but we always commit to a fixed launch date before we start.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build on Webflow or custom code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Both. Webflow is our default — fast, beautiful, easy for you to edit. For complex apps, multi-language, or unusual integrations, we build with Next.js, Astro, or whatever fits the job. We'll recommend the right stack on the discovery call.",
      },
    },
    {
      '@type': 'Question',
      name: 'What if I already have a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most of our work is redesigns. We audit what's converting, keep what's earning, and rebuild everything else around real conversion goals. Migrations, redirects, and SEO preservation are part of the standard process.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will you handle hosting and the domain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — we set up hosting, DNS, SSL, email-routing, and deliver a launch checklist 47 items deep. You own everything. We just handle the boring part if you want us to.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer ongoing support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Optional monthly retainers cover content updates, A/B testing, SEO, and conversion optimization. Most clients stay on for 6+ months because the site keeps earning more once the data starts coming in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you integrate AI chatbots?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We integrate AI chat (typically built on GPT or Claude) trained on your services, pricing, and FAQs. It captures leads 24/7 and routes hot ones straight to your phone.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is pricing handled?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fixed-fee, no hourly billing. 50% to start, 50% on launch. Atelier projects can be milestone-based. No surprise invoices, ever.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries do you specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Service businesses — contractors, clinics, salons, fitness studios, restaurants, healthcare, home services. If you have customers calling, booking, or filling out forms, we know how to make your site earn more of them.',
      },
    },
  ],
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Webloft Studio',
  description:
    'Premium, conversion-focused websites for service businesses ready to grow.',
  url: 'https://webloftstudio.com',
  email: 'info@webloftstudio.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CA',
    addressRegion: 'ON',
    addressLocality: 'London',
  },
  areaServed: [
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United States' },
  ],
  serviceType: 'Web Design Agency',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Website Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Webflow Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Redesign' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landing Pages' } },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroSection />
      <LogoWall />
      <StatsSection />
      <ManifestoSection />
      <WhyWebloftSection />
      <ServicesSection />
      <ProcessSection />
      <CasesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
