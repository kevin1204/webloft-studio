import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Web Design & Development Services | Fixed-Fee, 21-Day Delivery | Webloft Studio",
  description: "8 fixed-fee web design services for service businesses. Custom design, Webflow builds, SEO, landing pages, lead capture, and more. No surprises — book a free call today.",
  keywords: [
    'website design services',
    'website development services',
    'website redesign services',
    'landing page design',
    'on page SEO setup',
    'lead capture automation',
    'website maintenance',
    'analytics tracking setup',
  ],
  alternates: {
    canonical: 'https://webloftstudio.com/services',
  },
  openGraph: {
    title: 'Web Design & Development Services | Fixed-Fee, 21-Day Delivery',
    description: '8 fixed-fee web design services for service businesses. Custom design, Webflow builds, SEO, landing pages, lead capture, and more.',
    url: 'https://webloftstudio.com/services',
    siteName: 'Webloft Studio',
    images: [{ url: '/webloftstudio.png', width: 1200, height: 630, alt: 'Webloft Studio Services' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & Development Services | Webloft Studio',
    description: '8 fixed-fee web design services for service businesses. No surprises — book a free call today.',
    images: ['/webloftstudio.png'],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
