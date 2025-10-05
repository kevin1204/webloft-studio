import Link from "next/link";

export const metadata = {
  title: "Custom Web Design Services - Webloft Studio",
  description: "Professional custom web design services that convert visitors into customers. Mobile-first, conversion-optimized designs tailored to your business goals.",
  keywords: "custom web design, responsive web design, conversion optimization, mobile-first design, business website design",
};

export default function WebDesignService() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Custom Design
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Custom Web Design That <span className="text-green-400">Converts</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your brand deserves a website that stands out. We create custom designs that reflect your unique identity while converting visitors into customers.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">00</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                What You Get
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Every design decision is made with your business goals in mind. We focus on user experience, conversion optimization, and mobile-first design to ensure your website not only looks amazing but drives real business results.
              </p>
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
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Our Design Process</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Discovery & Strategy</h4>
                    <p className="text-gray-300 text-sm">We learn about your business, target audience, and goals to create a design strategy that converts.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Wireframing & Prototyping</h4>
                    <p className="text-gray-300 text-sm">We create wireframes and prototypes to plan the user journey and layout before visual design.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Visual Design</h4>
                    <p className="text-gray-300 text-sm">We bring your brand to life with custom visuals, colors, typography, and imagery.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Review & Refinement</h4>
                    <p className="text-gray-300 text-sm">We collaborate with you to refine the design until it perfectly represents your vision.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Custom Design Matters */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Custom Design Matters
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Your website is often the first impression potential customers have of your business. Make it count with custom design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Stand Out from Competitors</h3>
              <p className="text-gray-300">Custom design ensures your website is unique and memorable, helping you stand out in a crowded market.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Higher Conversion Rates</h3>
              <p className="text-gray-300">Strategic design elements guide visitors toward your goals, increasing leads and sales.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Build Trust & Credibility</h3>
              <p className="text-gray-300">Professional custom design builds trust with potential customers and reflects your business quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Custom Website?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create a website that perfectly represents your business and converts visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300">
              Get Free Consultation
            </Link>
            <Link href="/projects" className="border-2 border-white text-white hover:bg-white hover:text-green-500 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
