import { Metadata } from 'next';
import ProjectsPage from './ProjectsPage';

export const metadata: Metadata = {
  title: "Web Design Portfolio | Real Projects, Real Results | Webloft Studio",
  description: "See our work — custom websites that drove +300% bookings, +150% engagement, and more leads for service businesses. View case studies and start your project.",
  alternates: {
    canonical: 'https://webloftstudio.com/projects'
  }
};

export default function Projects() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webloftstudio.com' },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://webloftstudio.com/projects' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProjectsPage />
    </>
  );
}