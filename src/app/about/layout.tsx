import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Webloft Studio | Senior-Led Web Design Studio | Est. 2022",
  description: "A small, senior-led studio building premium websites for service businesses across North America. Fixed fees, 21-day launches, 312% average lead lift. See our story.",
  alternates: {
    canonical: 'https://webloftstudio.com/about'
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
