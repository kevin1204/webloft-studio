import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";
import { getCityPage } from "@/lib/city-pages";

const data = getCityPage("web-design-windsor")!;

export const metadata: Metadata = {
  title: "Web Design Services in Windsor | Custom Website Design | Webloft Studio",
  description: data.metaDescription,
  alternates: {
    canonical: "https://webloftstudio.com/web-design-windsor",
  },
  openGraph: {
    title: "Web Design Services in Windsor | Custom Website Design | Webloft Studio",
    description: data.metaDescription,
    url: "https://webloftstudio.com/web-design-windsor",
    siteName: "Webloft Studio",
    images: [
      {
        url: "/webloftstudio.png",
        width: 1200,
        height: 630,
        alt: "Web Design Services in Windsor - Webloft Studio",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Services in Windsor | Custom Website Design | Webloft Studio",
    description: data.metaDescription,
    images: ["/webloftstudio.png"],
  },
};

export default function WebDesignWindsor() {
  return <CityLandingPage data={data} />;
}
