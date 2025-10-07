import Link from "next/link";

export const metadata = {
  title: "Web Design Services Toronto | Webflow Development | SEO | Webloft",
  description: "Professional web design services in Toronto. Custom websites, Webflow development, SEO optimization, and maintenance. Drive business growth with expert web solutions.",
  alternates: {
    canonical: 'https://webloftstudio.com/services'
  }
};

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Services That Drive <span className="text-green-400">Results</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We don't just build websites—we create digital growth engines that convert visitors into customers and scale with your business success.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Web Design Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">00</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Custom Web Design
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Your brand deserves a website that stands out. We create custom designs that reflect your unique identity while converting visitors into customers.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Every design decision is made with your business goals in mind. We focus on user experience, conversion optimization, and mobile-first design to ensure your website not only looks amazing but drives real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Start Your Project
                </Link>
                <Link href="/services/web-design" className="border border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-green-900/30 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">What You Get:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Brand-Aligned Design: Custom visuals that perfectly represent your business identity</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Mobile-First Approach: Optimized for all devices where your customers browse</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Conversion-Optimized Layouts: Strategic design elements that guide visitors to take action</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">User Experience Focus: Intuitive navigation and engaging interactions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Webflow Development Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">What You Get:</h3>
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
                Webflow Development
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Get a website that's fast, secure, and easy to manage. Our Webflow expertise ensures you get a professional site without the technical headaches.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Webflow combines the power of custom code with the simplicity of visual editing. You'll have complete control over your content while we handle all the technical complexities behind the scenes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Get Started Today
                </Link>
                <Link href="/services/webflow-development" className="border border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-green-900/30 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO & Optimization Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                SEO & Optimization
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                What's the point of a beautiful website if no one can find it? We make sure your ideal customers discover your business when they search online.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Our SEO approach focuses on attracting qualified leads, not just traffic. We optimize for searches that matter to your business and convert browsers into buyers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Boost Your Visibility
                </Link>
                <Link href="/services/seo-optimization" className="border border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-green-900/30 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">What You Get:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Technical SEO Setup: Proper site structure, speed optimization, and mobile-friendliness</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Local Search Optimization: Dominate local searches in your service area</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Content Strategy: SEO-optimized content that speaks to your ideal customers</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Ongoing Monitoring: Regular performance tracking and optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Website Maintenance Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">What You Get:</h3>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Website Maintenance
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Launch your website with confidence knowing we've got your back. Focus on running your business while we handle the technical details.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Your website is a business investment that needs protection. Our maintenance plans ensure your site stays secure, fast, and working perfectly so you never lose leads or customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Secure Your Website
                </Link>
                <Link href="/services/website-maintenance" className="border border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-green-900/30 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Simple Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-green-400">Simple Process</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From discovery to launch, we make website development straightforward and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery Call", desc: "We learn about your business, goals, and ideal customers to create the perfect strategy." },
              { step: "2", title: "Design & Plan", desc: "Custom designs and development roadmap tailored to your brand and business needs." },
              { step: "3", title: "Build & Optimize", desc: "Development, testing, and optimization to ensure everything works perfectly." },
              { step: "4", title: "Launch & Support", desc: "Go live with confidence and ongoing support to keep your website performing." }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{phase.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-300 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a website that drives real business growth.
          </p>
          <Link
            href="/contact"
            className="bg-white text-green-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 inline-flex items-center justify-center text-center"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}