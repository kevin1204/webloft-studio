import { Metadata } from "next";
import FreeWebsiteAuditForm from "@/components/FreeWebsiteAuditForm";

export const metadata: Metadata = {
  title: "Free Website Audit | Find What's Hurting Your Site | Webloft Studio",
  description: "Request your free professional website audit. We review your site's performance, SEO, design, and conversion rate — and send you a clear report within 24–48 hours.",
  alternates: {
    canonical: "https://webloftstudio.com/free-website-audit",
  },
  openGraph: {
    title: "Free Website Audit | Find What's Hurting Your Site | Webloft Studio",
    description: "We review your site's performance, SEO, design, and conversion rate — and send you a clear report within 24–48 hours.",
    url: "https://webloftstudio.com/free-website-audit",
    siteName: "Webloft Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website Audit | Find What's Hurting Your Site | Webloft Studio",
    description: "We review your site's performance, SEO, design, and conversion rate — and send you a clear report within 24–48 hours.",
  },
};

export default function FreeWebsiteAuditPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webloftstudio.com' },
      { '@type': 'ListItem', position: 2, name: 'Free Website Audit', item: 'https://webloftstudio.com/free-website-audit' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FreeWebsiteAuditForm />
    </>
  );
}
