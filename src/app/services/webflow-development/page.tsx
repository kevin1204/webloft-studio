import Link from "next/link";

export const metadata = {
  title: "Webflow Development Services - Webloft Studio",
  description: "Professional Webflow development services. Fast, secure, and easy-to-manage websites built with Webflow's powerful visual development platform.",
  keywords: "Webflow development, Webflow agency, visual web development, CMS websites, Webflow design",
};

export default function WebflowDevelopmentService() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Webflow Development
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Webflow Development That <span className="text-green-400">Performs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get a website that's fast, secure, and easy to manage. Our Webflow expertise ensures you get a professional site without the technical headaches.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Started Today
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
                  <span className="text-gray-300">Lightning-Fast Performance: Optimized code and hosting for superior loading speeds</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Easy Content Management: Update your website without technical knowledge</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Scalable Architecture: Built to grow with your business needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Built-in SEO: Technical SEO foundations that help you rank better</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">&lt;/&gt;</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Webflow?
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Webflow combines the power of custom code with the simplicity of visual editing. You'll have complete control over your content while we handle all the technical complexities behind the scenes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Visual Development</h4>
                    <p className="text-gray-300 text-sm">Design and develop simultaneously with Webflow's visual interface</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Clean Code</h4>
                    <p className="text-gray-300 text-sm">Generate semantic, accessible HTML and CSS automatically</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">CMS Integration</h4>
                    <p className="text-gray-300 text-sm">Built-in content management system for easy updates</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Hosting Included</h4>
                    <p className="text-gray-300 text-sm">Fast, reliable hosting with global CDN included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webflow Features */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Webflow Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Harness the full power of Webflow with our expert development services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Custom Interactions</h3>
              <p className="text-gray-300">Create engaging animations and micro-interactions that enhance user experience.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Responsive Design</h3>
              <p className="text-gray-300">Perfect display across all devices with Webflow's responsive design tools.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">CMS Collections</h3>
              <p className="text-gray-300">Dynamic content management with custom fields and collections.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Fast Loading</h3>
              <p className="text-gray-300">Optimized code and hosting for lightning-fast page load times.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Security & Reliability</h3>
              <p className="text-gray-300">Enterprise-grade security and 99.9% uptime guarantee.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">SEO Optimized</h3>
              <p className="text-gray-300">Built-in SEO tools and clean code for better search rankings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build with Webflow?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's create a powerful, easy-to-manage website that grows with your business using Webflow's advanced platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300">
              Start Your Project
            </Link>
            <Link href="/projects" className="border-2 border-white text-white hover:bg-white hover:text-green-500 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300">
              See Webflow Examples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
