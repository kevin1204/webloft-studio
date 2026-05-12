import { Metadata } from 'next';
import ResultsPage from './ResultsPage';

export const metadata: Metadata = {
  title: 'Client Results | Real Metrics from Real Projects | Webloft Studio',
  description:
    'See the numbers behind our work — +300% bookings, +180% leads, 1.8s load times. Real results from real service businesses. View all case studies and metrics.',
  alternates: {
    canonical: 'https://webloftstudio.com/results',
  },
  openGraph: {
    title: 'Client Results | Real Metrics from Real Projects | Webloft Studio',
    description:
      'See the numbers behind our work — +300% bookings, +180% leads, 1.8s load times. Real results from real service businesses.',
    url: 'https://webloftstudio.com/results',
    siteName: 'Webloft Studio',
    type: 'website',
  },
};

export default function Results() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webloftstudio.com' },
      { '@type': 'ListItem', position: 2, name: 'Results', item: 'https://webloftstudio.com/results' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ResultsPage />
    </>
  );
}
