"use client";

import Link from "next/link";
import { useEffect } from "react";
import { trackServicePageVisit } from "@/lib/analytics";

export default function WebDesignServices() {
  useEffect(() => {
    trackServicePageVisit('web_design', 'general');
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
            "name": "Professional Web Design Services",
            "description": "Custom, responsive website design services for businesses that want to grow online",
            "provider": {
              "@type": "Organization",
              "name": "Webloft Studio",
              "url": "https://webloftstudio.com"
            },
            "serviceType": "Web Design",
            "areaServed": "Canada",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Website Design"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Responsive Web Design"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce Website Design"
                  }
                }
              ]
            }
          })
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                🎨 Professional Web Design
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Professional
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"> Web Design Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Transform your business with custom, responsive websites that convert visitors into customers. 
                <strong className="text-green-600"> Professional web design that drives results.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  href="/projects" 
                  className="border border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors text-lg"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Complete Web Design Solutions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From concept to launch, we create websites that not only look amazing but also drive business growth and customer engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Custom Website Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Unique, brand-focused designs tailored to your business goals and target audience. No templates, just custom solutions.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Responsive Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Perfect display on all devices - desktop, tablet, and mobile. Your website will look great everywhere.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Fast Loading Speed
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Optimized for speed and performance. Fast-loading websites rank better and convert more visitors.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  SEO Optimized
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built with SEO best practices to help your website rank higher in search results and attract more customers.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  E-commerce Solutions
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Complete online stores with secure payment processing, inventory management, and customer accounts.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  User Experience Focus
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Intuitive navigation and user-friendly design that guides visitors toward your most important actions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Web Design Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We follow a proven process to ensure your website exceeds expectations and delivers real business results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Discovery & Strategy
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We learn about your business, goals, and target audience to create the perfect strategy.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Design & Prototyping
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We create wireframes and visual designs that bring your vision to life.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Development & Testing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We build your website with clean code and thoroughly test every feature.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Launch & Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We launch your site and provide ongoing support to ensure continued success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Choose Our Web Design Services?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  We don't just build websites - we create digital experiences that drive business growth and customer engagement.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Conversion-Focused Design
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Every element is designed to guide visitors toward your most important actions and increase conversions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Modern Technology
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We use the latest web technologies and best practices to ensure your site is fast, secure, and future-proof.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Ongoing Support
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We provide ongoing support and maintenance to keep your website running smoothly and securely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-green-100 mb-6">
                    Let's discuss your project and create a website that drives real business results.
                  </p>
                  <Link 
                    href="/contact" 
                    className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                  >
                    Get Free Quote
                  </Link>
                </div>
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
                Common questions about our web design services
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  How much does web design cost?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Web design costs vary based on your specific needs, including the number of pages, features, and complexity. We offer custom quotes tailored to your project requirements. <Link href="/contact" className="text-green-600 hover:text-green-700 font-medium">Contact us for a free consultation</Link> and detailed pricing based on your project scope.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  What's included in your web design services?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our web design services include custom design, responsive development, SEO optimization, content integration, testing across devices, and basic training. We also provide ongoing support and maintenance options to keep your website running smoothly.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  How long does web design take?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A typical web design project takes 4-8 weeks from start to launch, depending on the complexity and scope. This includes design, development, content integration, and testing. We'll provide a detailed timeline during our initial consultation.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Do you provide web design for small businesses?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Absolutely! We specialize in web design for small and medium businesses. We understand the unique challenges and budget constraints of smaller companies and create cost-effective solutions that deliver professional results and drive business growth.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Will my website be mobile-friendly?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, all our websites are fully responsive and mobile-friendly. We design and develop with a mobile-first approach, ensuring your website looks and functions perfectly on all devices, from smartphones to desktop computers.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Do you offer ongoing website maintenance?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, we offer comprehensive <Link href="/services/website-maintenance" className="text-green-600 hover:text-green-700 font-medium">website maintenance services</Link> including security updates, content updates, performance monitoring, and technical support to keep your website running smoothly.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Can I update my website content myself?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, we can build your website with a user-friendly content management system (CMS) that allows you to easily update text, images, and other content without technical knowledge. We also provide training on how to use the CMS effectively.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Do you provide SEO services with web design?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, all our websites are built with SEO best practices in mind. We also offer dedicated <Link href="/services/seo-optimization" className="text-green-600 hover:text-green-700 font-medium">SEO optimization services</Link> to help improve your search engine rankings and drive more organic traffic to your website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Let's create a professional website that converts visitors into customers and grows your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Start Your Project
              </Link>
              <Link 
                href="/projects" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
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