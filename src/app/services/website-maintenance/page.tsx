"use client";

import Link from "next/link";
import { useEffect } from "react";
import { trackServicePageVisit } from "@/lib/analytics";

export default function WebsiteMaintenanceServices() {
  useEffect(() => {
    trackServicePageVisit('website_maintenance', 'general');
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
            "name": "Website Maintenance Services",
            "description": "Professional website maintenance services to keep your website secure, fast, and up-to-date. Regular updates, backups, and performance monitoring.",
            "provider": {
              "@type": "Organization",
              "name": "Webloft Studio",
              "url": "https://webloftstudio.com"
            },
            "serviceType": "Website Maintenance",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Maintenance Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Security Updates"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Performance Monitoring"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Content Updates"
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
                🛡️ Website Maintenance Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Keep Your Website
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"> Safe & Fast</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Don't let your website become a liability. 
                <strong className="text-blue-600"> Our maintenance services keep your site secure, fast, and always working perfectly.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  Get Maintenance Plan
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

        {/* Why Maintenance Matters Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Website Maintenance is Critical
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  <strong>75% of websites are vulnerable to security breaches</strong> due to outdated software and plugins. A single security incident can cost your business thousands and damage your reputation permanently.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Security Protection
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Regular security updates and monitoring protect your website from hackers, malware, and data breaches.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Peak Performance
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Regular optimization keeps your site loading fast, which improves user experience and search rankings.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Regular Backups
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Automated backups ensure you never lose your website data, even in the worst-case scenario.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Protect Your Investment</h3>
                  <p className="text-blue-100 mb-6">
                    Your website is a business asset that needs protection. Our maintenance plans ensure your site stays secure, fast, and always working perfectly.
                  </p>
                  <Link 
                    href="/contact" 
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                  >
                    Get Maintenance Plan
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
                Our Website Maintenance Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive maintenance packages designed to keep your website secure, fast, and always up-to-date.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Security Updates
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Regular security patches, plugin updates, and vulnerability monitoring to protect your website from threats.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Automated Backups
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Daily automated backups with secure off-site storage to ensure your data is always protected and recoverable.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Performance Monitoring
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Continuous monitoring of site speed, uptime, and performance metrics with proactive optimization.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Content Updates
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Quick content changes, image updates, and text modifications to keep your website fresh and current.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  SSL Certificate Management
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  SSL certificate installation, renewal, and monitoring to ensure your website is always secure and trusted.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Priority Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Direct access to our team for urgent issues, questions, and technical support when you need it most.
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
                Common questions about our website maintenance services
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Why do I need website maintenance?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Websites require regular updates to stay secure, fast, and functional. Without maintenance, your site becomes vulnerable to security breaches, performance issues, and may stop working altogether. Regular maintenance protects your investment and keeps your business running smoothly.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  What's included in your maintenance plans?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our maintenance plans include security updates, automated backups, performance monitoring, content updates, SSL certificate management, and priority support. We also provide monthly reports showing what work was performed and any recommendations for improvement.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  How often do you update my website?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We perform security updates as soon as they're available, typically within 24-48 hours. Performance monitoring runs continuously, and we check for updates weekly. Content updates are handled as requested, usually within 1-2 business days.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  What if my website goes down?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We monitor your website 24/7 and will be notified immediately if it goes down. Our priority support ensures we respond quickly to restore your site. We also maintain recent backups so we can quickly restore your site if needed.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  How much does website maintenance cost?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Maintenance costs depend on your website's complexity and your specific needs. We offer different packages to fit various budgets and requirements. <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">Contact us</Link> for a personalized quote based on your website and maintenance needs.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Can I cancel my maintenance plan anytime?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, you can cancel your maintenance plan at any time. However, we recommend keeping your website maintained to avoid security vulnerabilities and performance issues. We're happy to discuss your needs and adjust your plan if necessary.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Protect Your Website Investment
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't let your website become a liability. Our maintenance services keep your site secure, fast, and always working perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Get Maintenance Plan
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