"use client";

import Link from "next/link";
import { useEffect } from "react";
import { trackServicePageVisit } from "@/lib/analytics";

export default function WebflowDevelopmentServices() {
  useEffect(() => {
    trackServicePageVisit('webflow_development', 'general');
  }, []);
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Professional Webflow Development Services",
            "description": "Custom Webflow website development services for businesses that want fast, responsive, and SEO-optimized websites",
            "provider": {
              "@type": "Organization",
              "name": "Webloft Studio",
              "url": "https://webloftstudio.com"
            },
            "serviceType": "Webflow Development",
            "areaServed": "Canada",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Webflow Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Webflow Websites"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Webflow CMS Integration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Webflow E-commerce Development"
                  }
                }
              ]
            }
          })
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                ⚡ Webflow Development
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Professional
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"> Webflow Development</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Build lightning-fast, responsive websites with Webflow's powerful platform. 
                <strong className="text-blue-600"> Custom development that delivers results.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  href="/projects" 
                  className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors text-lg"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Webflow Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Choose Webflow for Your Business?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Webflow combines the power of custom development with the ease of visual design, giving you the best of both worlds.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Lightning Fast Performance
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Webflow generates clean, optimized code that loads faster than traditional website builders.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Visual Design Interface
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Design pixel-perfect websites without writing code, with complete creative control.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Built-in SEO Tools
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Advanced SEO controls built into the platform for better search engine rankings.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Responsive by Default
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Every design is automatically responsive across all devices and screen sizes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Build with Webflow?</h3>
                  <p className="text-blue-100 mb-6">
                    Let's create a fast, beautiful, and conversion-optimized website using Webflow's powerful platform.
                  </p>
                  <Link 
                    href="/contact" 
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Webflow Development Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From simple business websites to complex e-commerce stores, we build powerful Webflow solutions for every business need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Custom Webflow Websites
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bespoke websites designed and developed specifically for your business goals and brand identity.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Webflow CMS Integration
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dynamic content management systems that allow you to easily update and manage your website content.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  E-commerce Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Complete online stores with Webflow's powerful e-commerce features and payment processing.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Performance Optimization
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Speed optimization and performance tuning to ensure your Webflow site loads lightning fast.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  SEO Optimization
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built-in SEO tools and optimization to help your Webflow site rank higher in search results.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Training & Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive training on how to manage and update your Webflow site independently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Webflow Development Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We follow a streamlined process to deliver exceptional Webflow websites that exceed your expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Project Planning
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We analyze your requirements and create a detailed project plan for your Webflow site.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Design & Prototyping
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We create wireframes and visual designs using Webflow's powerful design tools.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Development & Testing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We build your site in Webflow and thoroughly test all functionality and responsiveness.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Launch & Training
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We launch your site and provide training on how to manage it using Webflow's CMS.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Common questions about our Webflow development services
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Why choose Webflow over other platforms?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Webflow offers the perfect balance of design flexibility and performance. It generates clean, fast-loading code while providing visual design tools that don't require coding knowledge. It's ideal for businesses that want professional results without technical complexity.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  How long does Webflow development take?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A typical Webflow project takes 3-6 weeks from start to launch, depending on complexity. This includes design, development, content integration, and testing. We provide detailed timelines during our consultation.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Can I update my Webflow site myself?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes! Webflow's CMS allows you to easily update content, add blog posts, and manage your site without technical knowledge. We provide training on how to use the CMS effectively and can set up custom content types for your specific needs.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Is Webflow good for SEO?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Absolutely! Webflow generates clean, semantic HTML that search engines love. It also includes built-in SEO tools and allows for advanced optimization. We ensure your Webflow site is fully optimized for search engines.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Do you offer ongoing support for Webflow sites?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, we provide ongoing support and maintenance for all our Webflow projects. This includes updates, troubleshooting, performance optimization, and training to keep your site running smoothly.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Can Webflow handle e-commerce?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes! Webflow has powerful e-commerce capabilities that allow you to create online stores with product catalogs, shopping carts, and payment processing. We can build custom e-commerce solutions tailored to your business needs.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  What makes your Webflow development different?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We combine Webflow's powerful platform with strategic design and development expertise. Our focus is on creating websites that not only look great but also drive business results through conversion optimization and performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build with Webflow?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's create a fast, beautiful, and conversion-optimized website using Webflow's powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Start Your Project
              </Link>
              <Link 
                href="/projects" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}