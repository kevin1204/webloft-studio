import type { Metadata } from "next";
import IndustryLandingPage from "@/components/IndustryLandingPage";
import { getIndustryPage } from "@/lib/industry-pages";

const data = getIndustryPage("web-design-contractors")!;

export const metadata: Metadata = {
  title: "Web Design for Contractors | Websites That Get Leads | Webloft Studio",
  description: data.metaDescription,
  alternates: {
    canonical: "https://webloftstudio.com/web-design-contractors",
  },
  openGraph: {
    title: "Web Design for Contractors | Websites That Get Leads | Webloft Studio",
    description: data.metaDescription,
    url: "https://webloftstudio.com/web-design-contractors",
    siteName: "Webloft Studio",
    images: [
      {
        url: "/webloftstudio.png",
        width: 1200,
        height: 630,
        alt: "Web Design for Contractors - Webloft Studio",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design for Contractors | Websites That Get Leads | Webloft Studio",
    description: data.metaDescription,
    images: ["/webloftstudio.png"],
  },
};

export default function WebDesignContractors() {
  return <IndustryLandingPage data={data} />;
}
