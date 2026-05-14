import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Webloft Studio | Senior-Led Web Design Studio | Est. 2022",
  description: "A small, senior-led studio building premium websites for service businesses across North America. Fixed fees, 21-day launches, 312% average lead lift. See our story.",
  alternates: {
    canonical: 'https://webloftstudio.com/about',
  },
  openGraph: {
    title: 'About Webloft Studio | Senior-Led Web Design Studio',
    description: 'A small, senior-led studio building premium websites for service businesses across North America. Fixed fees, 21-day launches, 312% average lead lift.',
    url: 'https://webloftstudio.com/about',
    siteName: 'Webloft Studio',
    images: [{ url: '/webloftstudio.png', width: 1200, height: 630, alt: 'About Webloft Studio' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Webloft Studio | Senior-Led Web Design Studio',
    description: 'A small, senior-led studio building premium websites for service businesses across North America.',
    images: ['/webloftstudio.png'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
