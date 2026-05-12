import type { Metadata } from "next";
import ServiceBusinessBlueprintForm from "@/components/ServiceBusinessBlueprintForm";

export const metadata: Metadata = {
  title: "Free Guide: The Service Business Website Blueprint | Webloft Studio",
  description:
    "Download the free blueprint that shows service businesses exactly how to structure a website that generates leads. Homepage framework, copy templates, trust signals, and local SEO checklist.",
  alternates: {
    canonical: "https://webloftstudio.com/free-ebook/service-business-website-blueprint",
  },
  openGraph: {
    title: "Free Guide: The Service Business Website Blueprint | Webloft Studio",
    description:
      "Download the free blueprint that shows service businesses exactly how to structure a website that generates leads.",
    url: "https://webloftstudio.com/free-ebook/service-business-website-blueprint",
    siteName: "Webloft Studio",
    images: [
      {
        url: "/webloftstudio.png",
        width: 1200,
        height: 630,
        alt: "Service Business Website Blueprint - Webloft Studio",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Guide: The Service Business Website Blueprint | Webloft Studio",
    description:
      "Download the free blueprint that shows service businesses exactly how to structure a website that generates leads.",
    images: ["/webloftstudio.png"],
  },
};

export default function ServiceBusinessBlueprintPage() {
  return <ServiceBusinessBlueprintForm />;
}
