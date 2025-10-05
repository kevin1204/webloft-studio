import Image from "next/image";
import Link from "next/link";
import ParticleTextAnimation from "@/components/ParticleTextAnimation";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import TestimonialStructuredData from "@/components/TestimonialStructuredData";

export default function Home() {
  const testimonials = [
    {
      name: "Marcus Johnson",
      title: "CEO",
      company: "TechStart Solutions",
      rating: 5,
      review: "Working with Webloft Studio transformed our online presence. Within 3 months, we saw a 150% increase in qualified leads. Their attention to detail and understanding of business needs is exceptional.",
      date: "2024-12-15"
    },
    {
      name: "Sarah Mitchell",
      title: "Founder",
      company: "Bloom Wellness",
      rating: 5,
      review: "The team at Webloft Studio didn't just build us a website—they built us a lead generation machine. Our booking rate increased by 200% and we finally have a site that represents our brand perfectly.",
      date: "2024-11-20"
    },
    {
      name: "David Chen",
      title: "Owner",
      company: "Local Home Services",
      rating: 5,
      review: "From strategy to execution, everything was seamless. They understood our local market and built a website that actually brings in customers. Best investment we've made for our business.",
      date: "2024-10-30"
    }
  ];

  return (
    <>
      <TestimonialStructuredData testimonials={testimonials} />
      {/* Hero Section */}
      <section className="relative h-full bg-black text-white overflow-visible">
        <div className="flex h-full flex-col pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-12 lg:pb-12 overflow-visible">
          {/* Particle Text Animation Strip - Allow particles to overflow */}
          <div className="relative overflow-visible">
            <ParticleTextAnimation />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 mx-auto flex flex-1 w-full max-w-4xl flex-col items-center px-4 text-center gap-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <h1 className="text-[32px] sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
                Modern Websites That Drive
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 gradient-text-animated"> Business Growth</span>
              </h1>

              <p className="text-base sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-1">
                Your website is not an expense—it's an investment. We build high-performing, lead-generating websites that scale with your business success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-2">
                <Link href="/contact" className="btn-primary-enhanced text-lg px-8 py-4">
                  Start Your Project
                </Link>
                <Link href="/projects" className="btn-secondary-enhanced text-lg px-8 py-4">
                  View Our Work
                </Link>
              </div>
              
              {/* Scroll Down Arrow - positioned below buttons on all devices */}
              <div className="mt-6 animate-fade-in-up stagger-3">
                <ScrollDownArrow />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We don't just build websites—we build success stories. Here's the impact we've made for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 hover-glow rounded-xl transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-1">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 animate-pulse-slow">50+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Projects Delivered</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Across various industries</div>
            </div>
            <div className="p-6 hover-glow rounded-xl transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-2">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 animate-pulse-slow">250%</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Avg. Lead Increase</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Within first 6 months</div>
            </div>
            <div className="p-6 hover-glow rounded-xl transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-3">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 animate-pulse-slow">98%</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Client Satisfaction</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Based on project reviews</div>
            </div>
            <div className="p-6 hover-glow rounded-xl transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-4">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 animate-pulse-slow">24hrs</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Response Time</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Usually much faster</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400/20 to-emerald-600/20"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-300 text-sm font-medium mb-6 animate-fade-in-up">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Trusted by 50+ Businesses
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up stagger-1">
              Why Choose 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"> Webloft Studio</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
              We're not just web developers—we're your partners in digital growth. Here's what sets us apart from the competition.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Results-Focused Card */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up stagger-1 flex flex-col h-full">
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="mb-6 pr-20 flex flex-col flex-grow">
                  <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full mb-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 transition-colors duration-300 pr-4">Results-Focused Approach</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    Every design decision is made with your business goals in mind. We don't just build pretty websites—we build lead-generating machines.
                  </p>
                </div>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Conversion optimization built-in</span>
                  </div>
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Performance tracking and analytics</span>
                  </div>
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">ROI-focused strategies</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fast Turnaround Card */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up stagger-2 flex flex-col h-full">
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="mb-6 pr-20 flex flex-col flex-grow">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full mb-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors duration-300 pr-4">Fast Turnaround</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    We understand that time is money. Our streamlined process gets your website live quickly without compromising quality.
                  </p>
                </div>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">2-4 week typical delivery</span>
                  </div>
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Clear milestones and updates</span>
                  </div>
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Emergency support available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Service Card */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up stagger-3 flex flex-col h-full">
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="mb-6 pr-20 flex flex-col flex-grow">
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mb-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 transition-colors duration-300 pr-4">Personal Service</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    You're not just a project number. We take the time to understand your business and provide personalized solutions.
                  </p>
                </div>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Direct access to your developer</span>
                  </div>
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Custom solutions for your industry</span>
                  </div>
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Ongoing partnership approach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-green-400/20 to-emerald-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 animate-fade-in-up">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Comprehensive Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up stagger-1">
              What We Do 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"> Best</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
              We specialize in creating websites that don't just look good—they perform. Every service is designed to maximize your online success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Web Design Service */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up stagger-1 flex flex-col h-full">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="pt-4 flex flex-col flex-grow">
                  <div className="w-8 h-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full mb-6"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 transition-colors duration-300">Web Design</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    Modern, responsive designs that convert visitors into customers with stunning visuals and intuitive user experience.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Responsive Design
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Conversion Optimization
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Modern UI/UX
                    </div>
                  </div>
                  <Link href="/services" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300 mt-auto">
                    Learn More 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Webflow Development Service */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up stagger-2 flex flex-col h-full">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="pt-4 flex flex-col flex-grow">
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full mb-6"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors duration-300">Webflow Development</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    Custom Webflow solutions that are easy to manage and update, built with clean code and advanced interactions.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Custom Interactions
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      CMS Integration
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Easy Management
                    </div>
                  </div>
                  <Link href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300 mt-auto">
                    Learn More 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* SEO Optimization Service */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up stagger-3 flex flex-col h-full">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="pt-4 flex flex-col flex-grow">
                  <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mb-6"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 transition-colors duration-300">SEO Optimization</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    Get found online with our proven SEO strategies that drive organic traffic and improve your search rankings.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Keyword Research
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Technical SEO
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Content Strategy
                    </div>
                  </div>
                  <Link href="/services" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300 mt-auto">
                    Learn More 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Website Maintenance Service */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up stagger-4 flex flex-col h-full">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="pt-4 flex flex-col flex-grow">
                  <div className="w-8 h-1 bg-gradient-to-r from-orange-400 to-red-600 rounded-full mb-6"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 transition-colors duration-300">Website Maintenance</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    Keep your site running smoothly with ongoing support, updates, and monitoring to ensure peak performance.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Regular Updates
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Performance Monitoring
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      24/7 Support
                    </div>
                  </div>
                  <Link href="/services" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300 mt-auto">
                    Learn More 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We've refined our approach over dozens of successful projects. Here's exactly how we turn your vision into a high-performing website.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Discovery & Strategy</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We dive deep into your business goals, target audience, and competitive landscape to create a winning strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Design & Wireframing</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We create detailed wireframes and stunning designs that align with your brand and convert visitors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Development & Testing</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Our developers bring the design to life with clean, fast code and rigorous testing across all devices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Launch & Optimize</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We launch your site and provide ongoing optimization to ensure maximum performance and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Recent Success Stories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how we've helped businesses like yours achieve remarkable online growth with strategic web design and development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Amigo Contracting</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Construction services website with lead capture optimization</p>
              <div className="text-green-600 font-semibold mb-4">+180% Lead Increase</div>
              <a href="https://amigocontracting.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 hover:text-green-700 font-medium">
                View Project →
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Flowga Yoga Studio</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Wellness website with online booking and class management</p>
              <div className="text-blue-600 font-semibold mb-4">+300% Online Bookings</div>
              <a href="https://flowgav2.webflow.io/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View Project →
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Sportlink Events</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Event management platform with registration system</p>
              <div className="text-purple-600 font-semibold mb-4">500+ Participants Managed</div>
              <a href="https://wfm5-level-1-course-build-725271.design.webflow.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                View Project →
              </a>
            </div>
          </div>

          <div className="text-center">
            <Link href="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what real business owners have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/avatar1.jpg"
                  alt="Client testimonial"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Marcus Johnson</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">CEO, TechStart Solutions</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-200 italic">
                "Working with Webloft Studio transformed our online presence. Within 3 months, we saw a 150% increase in qualified leads. Their attention to detail and understanding of business needs is exceptional."
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/avatar2.jpg"
                  alt="Client testimonial"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Sarah Mitchell</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Founder, Bloom Wellness</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-200 italic">
                "The team at Webloft Studio didn't just build us a website—they built us a lead generation machine. Our booking rate increased by 200% and we finally have a site that represents our brand perfectly."
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/avatar3.jpg"
                  alt="Client testimonial"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">David Chen</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Owner, Local Home Services</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-200 italic">
                "From strategy to execution, everything was seamless. They understood our local market and built a website that actually brings in customers. Best investment we've made for our business."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a website that drives real business results. Get a free consultation today.
          </p>
          <Link
            href="/contact"
            className="btn-primary-enhanced inline-block text-lg px-8 py-4"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}