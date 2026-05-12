import type { Metadata } from "next";
import WebsiteLaunchChecklistForm from "@/components/WebsiteLaunchChecklistForm";

export const metadata: Metadata = {
  title: "Free Checklist: 47-Point Website Launch Checklist | Webloft Studio",
  description:
    "The same 47-point checklist our team uses before every website launch. Pre-launch and post-launch items covering SEO, performance, forms, redirects, and analytics. Free download.",
  alternates: {
    canonical: "https://webloftstudio.com/free-ebook/website-launch-checklist",
  },
  openGraph: {
    title: "Free Checklist: 47-Point Website Launch Checklist | Webloft Studio",
    description:
      "The same 47-point checklist our team uses before every website launch. Free download.",
    url: "https://webloftstudio.com/free-ebook/website-launch-checklist",
    siteName: "Webloft Studio",
    images: [
      {
        url: "/webloftstudio.png",
        width: 1200,
        height: 630,
        alt: "Website Launch Checklist - Webloft Studio",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Checklist: 47-Point Website Launch Checklist | Webloft Studio",
    description:
      "The same 47-point checklist our team uses before every website launch. Free download.",
    images: ["/webloftstudio.png"],
  },
};

export default function WebsiteLaunchChecklistPage() {
  return <WebsiteLaunchChecklistForm />;
}
