import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us - Webloft Studio",
  description: "Learn about Webloft Studio, our mission to help small and medium businesses succeed online, and our approach to web development.",
  alternates: {
    canonical: 'https://webloftstudio.com/about'
  }
};

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white dark:text-white mb-6">
            About Webloft Studio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 dark:text-gray-300 leading-relaxed">
            We're on a mission to help small and medium businesses thrive online with websites that actually drive business growth.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300  mb-6 leading-relaxed">
                We believe every business deserves a website that works as hard as they do. Too many small business owners are stuck with outdated, slow websites that don't generate leads or reflect their professional expertise.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300  mb-6 leading-relaxed">
                That's where we come in. We combine modern design, cutting-edge technology, and proven marketing strategies to create websites that don't just look good—they deliver measurable business results.
              </p>
              <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                Your success is our success. When your website drives more leads, converts more customers, and grows your business, we've done our job right.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-800 dark:to-emerald-900 p-8 rounded-xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white  mb-4">
                  Business-First Approach
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Every design decision and line of code is made with your business goals in mind, not just aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white  mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300  max-w-3xl mx-auto">
              These core principles guide everything we do and every decision we make for your project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white  mb-4">
                ✅ Results Over Pretty Pictures
              </h3>
              <p className="text-gray-600 dark:text-gray-300 ">
                We prioritize conversions and business growth over awards. Beautiful design means nothing if it doesn't generate leads and sales.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white  mb-4">
                ✅ Simplicity in Complexity
              </h3>
              <p className="text-gray-600 dark:text-gray-300 ">
                Making advanced technology accessible to everyone. You shouldn't need to become a tech expert to have a website that works.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white  mb-4">
                ✅ Long-term Partnerships
              </h3>
              <p className="text-gray-600 dark:text-gray-300 ">
                Building relationships that grow with your business. We're here for the long haul, not just the initial launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white  mb-8 text-center">
            Why We Started Webloft Studio
          </h2>

          <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300  space-y-6">
            <p className="text-lg leading-relaxed">
              After working with dozens of small and medium businesses, we noticed a common problem: most business owners were frustrated with their websites. They had invested thousands of dollars in sites that looked okay but didn't generate leads, were impossible to update, and didn't grow with their business.
            </p>

            <p className="text-lg leading-relaxed">
              The web development industry was failing these businesses. Agencies focused more on flashy designs than business results. Freelancers disappeared after launch. And business owners were left with expensive digital assets that didn't deliver value.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl my-8">
              <p className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">
                We founded Webloft Studio to change this.
              </p>
              <p className="text-lg text-green-700 dark:text-green-300 leading-relaxed">
                Our approach is different—we treat your website as a business investment, not a creative project. Every design decision, every line of code, and every optimization is made with your business goals in mind.
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              Today, we specialize in working with businesses across North America and Europe, particularly in industries like construction, trades, healthcare, beauty, fitness, and hospitality. These business owners don't need to become tech experts—they need websites that work.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white  mb-4">
              How We Work With You
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300  max-w-3xl mx-auto">
              Our process is designed around your business needs, not our convenience. Here's exactly what you can expect when working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Process Steps */}
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white  mb-3">Business Deep Dive</h3>
                  <p className="text-gray-600 dark:text-gray-300 ">
                    We start by understanding your business inside and out. Who are your customers? What makes them buy? What are your biggest challenges? This isn't about web design yet—it's about business strategy.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white  mb-3">Competitive Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-300 ">
                    We analyze what's working (and what isn't) in your industry. What are your competitors doing right? Where are the gaps? How can we position you to win more business?
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white  mb-3">Strategic Planning</h3>
                  <p className="text-gray-600 dark:text-gray-300 ">
                    Based on our research, we create a comprehensive strategy. This includes site structure, key messaging, conversion points, and a roadmap for long-term growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white  mb-3">Design & Development</h3>
                  <p className="text-gray-600 dark:text-gray-300 ">
                    Now we bring the strategy to life. Every design element serves a purpose. Every page is optimized for conversions. We keep you involved throughout the process with regular updates and feedback sessions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white  mb-3">Launch & Optimization</h3>
                  <p className="text-gray-600 dark:text-gray-300 ">
                    Launch is just the beginning. We monitor performance, gather data, and continuously optimize your site for better results. Your website evolves as your business grows.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - What Makes Us Different */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white  mb-3">Business-First Mindset</h3>
                <p className="text-gray-600 dark:text-gray-300 ">
                  We don't just ask what you want your website to look like. We ask what you want your website to accomplish for your business.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white  mb-3">Data-Driven Decisions</h3>
                <p className="text-gray-600 dark:text-gray-300 ">
                  Every recommendation we make is backed by research, industry best practices, and real performance data from similar businesses.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white  mb-3">Clear Communication</h3>
                <p className="text-gray-600 dark:text-gray-300 ">
                  No tech jargon or confusing explanations. We explain everything in plain English and keep you informed every step of the way.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white  mb-3">Ongoing Partnership</h3>
                <p className="text-gray-600 dark:text-gray-300 ">
                  We don't disappear after launch. Your success is our success, and we're committed to helping your website perform better over time.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-3">Our Promise</h3>
                <p className="text-green-700 dark:text-green-300">
                  If your website doesn't generate more leads and help grow your business within 90 days, we'll work with you until it does—at no additional cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white  mb-4">
              Industries We Specialize In
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300  max-w-3xl mx-auto">
              We work with businesses across North America and Europe, with particular expertise in these sectors where we understand the unique challenges and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Construction & Trades", icon: "🏗️", desc: "Lead generation focused sites for contractors and service providers" },
              { name: "Healthcare & Wellness", icon: "🏥", desc: "Patient-focused websites with booking and information systems" },
              { name: "Beauty & Aesthetics", icon: "💄", desc: "Visual portfolios and appointment booking for beauty professionals" },
              { name: "Fitness & Nutrition", icon: "💪", desc: "Membership and class booking sites for fitness businesses" },
              { name: "Hospitality & Tourism", icon: "🏨", desc: "Booking and reservation systems for hotels and travel services" },
              { name: "Professional Services", icon: "💼", desc: "Trust-building sites for consultants and service professionals" }
            ].map((industry, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800  p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 text-center">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white  mb-2 text-center">{industry.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300  text-center">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet the Founder
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The person behind Webloft Studio, passionate about helping your business succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Founder Photo */}
            <div className="animate-fade-in-left">
              <div className="relative">
                <div className="w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] mx-auto bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-800 dark:to-emerald-900 rounded-2xl flex items-center justify-center shadow-2xl p-1">
                  {/* Kevin's Photo */}
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/kevin.png"
                      alt="Kevin Ortega - Founder of Webloft Studio"
                      width={400}
                      height={500}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-400 rounded-full animate-bounce"></div>
              </div>
            </div>

            {/* Founder Bio */}
            <div className="animate-fade-in-right">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm Kevin Ortega
              </h3>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a Computer Science graduate with a 2-year post-graduate specialization in Web Development & Internet Applications. But more importantly, I'm someone who genuinely cares about your business success.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  What gets me excited? <strong className="text-green-600 dark:text-green-400">Technology, automation, AI tools, and the endless possibilities they create for small businesses.</strong> I love diving deep into new technologies and finding ways to make them work for real businesses like yours.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I founded Webloft Studio because I saw too many amazing businesses struggling with websites that didn't reflect their potential. I believe every business owner deserves a website that works as hard as they do—one that combines strategy, design, and functionality to deliver real results, not just pretty pictures.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                  <p className="text-green-800 dark:text-green-200 font-medium italic">
                    "I'm not just building websites—I'm building digital foundations that help businesses grow, connect with their customers, and achieve their dreams. Your success is what drives me to keep learning and improving every single day."
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Computer Science Graduate</span>
                  </div>
                  <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-sm">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Web Development Specialist</span>
                  </div>
                  <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI & Automation Enthusiast</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help your business succeed online. Get a free consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}