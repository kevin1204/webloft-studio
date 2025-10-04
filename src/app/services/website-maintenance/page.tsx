import Link from "next/link";

export const metadata = {
  title: "Website Maintenance Services - Webloft Studio",
  description: "Professional website maintenance services to keep your site secure, fast, and up-to-date. Regular updates, backups, and ongoing support.",
  keywords: "website maintenance, website updates, website security, website support, ongoing maintenance",
};

export default function WebsiteMaintenanceService() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Website Maintenance
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Keep Your Website <span className="text-green-400">Running Smoothly</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Launch your website with confidence knowing we've got your back. Focus on running your business while we handle the technical details.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Secure Your Website
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">What You Get</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Regular Updates & Backups: Your website stays secure and up-to-date automatically</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Performance Monitoring: We keep your site running fast and smooth</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Content Updates: Quick changes and additions when you need them</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Priority Support: Direct access to our team for any questions or issues</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Website Maintenance Matters
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Your website is a business investment that needs protection. Our maintenance plans ensure your site stays secure, fast, and working perfectly so you never lose leads or customers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Security Protection</h4>
                    <p className="text-gray-300 text-sm">Regular security updates protect against hackers and malware</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Performance Optimization</h4>
                    <p className="text-gray-300 text-sm">Keep your site running fast and smooth for better user experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Peace of Mind</h4>
                    <p className="text-gray-300 text-sm">Focus on your business while we handle the technical details</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Cost Savings</h4>
                    <p className="text-gray-300 text-sm">Prevent expensive emergency fixes with proactive maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Maintenance Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive website maintenance to keep your site secure, fast, and up-to-date.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Security Updates</h3>
              <p className="text-gray-300">Regular security patches and vulnerability fixes to protect your site from threats.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Regular Backups</h3>
              <p className="text-gray-300">Automated daily backups to ensure your data is always safe and recoverable.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Performance Monitoring</h3>
              <p className="text-gray-300">Continuous monitoring of site speed and performance with optimization as needed.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Content Updates</h3>
              <p className="text-gray-300">Quick content changes, image updates, and text modifications when you need them.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Plugin Updates</h3>
              <p className="text-gray-300">Keep all plugins and themes updated for security and compatibility.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Priority Support</h3>
              <p className="text-gray-300">Direct access to our team for any questions, issues, or urgent updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Maintenance Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible maintenance plans designed to fit your business needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
              <p className="text-gray-300 mb-6">Perfect for small websites with minimal updates</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Monthly security updates
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Weekly backups
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic performance monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Email support
                </li>
              </ul>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$99<span className="text-lg text-gray-400">/month</span></div>
                <Link href="/contact" className="btn-secondary w-full text-center">Get Started</Link>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl border-2 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <p className="text-gray-300 mb-6">Ideal for growing businesses with regular content updates</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Weekly security updates
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Daily backups
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced performance monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  2 hours of content updates
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority support
                </li>
              </ul>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$199<span className="text-lg text-gray-400">/month</span></div>
                <Link href="/contact" className="btn-primary w-full text-center">Get Started</Link>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <p className="text-gray-300 mb-6">For businesses that need comprehensive maintenance and support</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Daily security updates
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time backups
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Comprehensive monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited content updates
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 priority support
                </li>
              </ul>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$399<span className="text-lg text-gray-400">/month</span></div>
                <Link href="/contact" className="btn-secondary w-full text-center">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Website?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's keep your website running smoothly so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300">
              Get Maintenance Plan
            </Link>
            <Link href="/blog/how-often-update-website-why-matters" className="border-2 border-white text-white hover:bg-white hover:text-green-500 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300">
              Learn About Maintenance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
