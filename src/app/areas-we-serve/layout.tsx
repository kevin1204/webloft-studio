import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Areas We Serve | Web Design Across North America | Webloft Studio',
  description:
    'Webloft Studio builds high-performance websites for businesses across North America. Explore our featured cities and industry specializations. Get the same premium experience wherever you are.',
  openGraph: {
    title: 'Areas We Serve | Web Design Across North America | Webloft Studio',
    description:
      'Premium, conversion-focused websites for service businesses across North America. Local expertise in Toronto, Ottawa, Miami, Dallas, Austin and more.',
    url: 'https://webloftstudio.com/areas-we-serve',
    siteName: 'Webloft Studio',
    images: [
      {
        url: '/webloftstudio.png',
        width: 1200,
        height: 630,
        alt: 'Webloft Studio — Areas We Serve',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Areas We Serve | Web Design Across North America | Webloft Studio',
    description:
      'Premium, conversion-focused websites for service businesses across North America.',
    images: ['/webloftstudio.png'],
  },
  alternates: {
    canonical: 'https://webloftstudio.com/areas-we-serve',
  },
};

export default function AreasWeServeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
