import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Webloft Studio',
  description: 'Get in touch with Webloft Studio for your web development project. Free consultation and quote. Professional web design and development services.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}