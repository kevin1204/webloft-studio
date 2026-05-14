import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design Pricing | Transparent, Fixed-Fee Plans | Webloft Studio',
  description:
    'Simple, fixed-fee web design pricing from $199/month. No hidden fees, no lock-in contracts. See what every plan includes and start your project today.',
  alternates: {
    canonical: 'https://webloftstudio.com/pricing',
  },
  openGraph: {
    title: 'Web Design Pricing | Transparent, Fixed-Fee Plans | Webloft Studio',
    description: 'Simple, fixed-fee web design pricing from $199/month. No hidden fees, no lock-in contracts. See what every plan includes and start your project today.',
    url: 'https://webloftstudio.com/pricing',
    siteName: 'Webloft Studio',
    images: [{ url: '/webloftstudio.png', width: 1200, height: 630, alt: 'Webloft Studio Pricing' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Pricing | Transparent, Fixed-Fee Plans',
    description: 'Simple, fixed-fee web design pricing from $199/month. No hidden fees, no lock-in contracts.',
    images: ['/webloftstudio.png'],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webloftstudio.com' },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://webloftstudio.com/pricing' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
