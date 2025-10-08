import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceWorkerRegistration from "../components/ServiceWorkerRegistration";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://webloftstudio.com'),
  title: "Professional Web Design Services | Custom Websites | Webloft Studio",
  description: "Expert web design services for businesses worldwide. Custom websites, responsive design, SEO optimization. Drive business growth with professional web development. Get started today!",
  icons: {
    icon: [
      { url: '/wflogo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/wflogo.svg',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Web Design Services | Custom Website Design Company | Webloft Studio",
    description: "Professional web design services that drive business growth. Custom websites, responsive design, SEO optimization. Get more leads with our expert web design company.",
    url: "https://webloftstudio.com",
    siteName: "Webloft Studio",
    images: [
      {
        url: "/webloftstudio.png",
        width: 1200,
        height: 630,
        alt: "Webloft Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Services | Custom Website Design Company | Webloft Studio",
    description: "Professional web design services that drive business growth. Custom websites, responsive design, SEO optimization. Get more leads with our expert web design company.",
    images: ["/webloftstudio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/wflogo.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/wflogo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://webloftstudio.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KZM9M28MYB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZM9M28MYB');
          `}
        </Script>
        
        <ServiceWorkerRegistration />
        <Navbar />
        <main className="pt-16 overflow-visible">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
