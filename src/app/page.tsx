import Image from "next/image";
import Link from "next/link";
import ParticleTextAnimation from "@/components/ParticleTextAnimation";
import RotatingTypewriterText from "@/components/RotatingTypewriterText";
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
      date: "2024-12-15",
      projectImage: "/PROJECTS/AMIGO CONTRACTING SERVICES.png",
      projectName: "Amigo Contracting Services",
      projectCategory: "Construction",
      projectResult: "+180% Lead Increase"
    },
    {
      name: "Sarah Mitchell",
      title: "Founder",
      company: "Bloom Wellness",
      rating: 5,
      review: "The team at Webloft Studio didn't just build us a website—they built us a lead generation machine. Our booking rate increased by 200% and we finally have a site that represents our brand perfectly.",
      date: "2024-11-20",
      projectImage: "/PROJECTS/FLOWGA.png",
      projectName: "Flowga Yoga Studio",
      projectCategory: "Wellness",
      projectResult: "+300% Online Bookings"
    },
    {
      name: "David Chen",
      title: "Owner",
      company: "Local Home Services",
      rating: 5,
      review: "From strategy to execution, everything was seamless. They understood our local market and built a website that actually brings in customers. Best investment we've made for our business.",
      date: "2024-10-30",
      projectImage: "/PROJECTS/AERIES.png",
      projectName: "Aeries",
      projectCategory: "Business",
      projectResult: "Improved User Experience"
    }
  ];

  return (
    <>
      <TestimonialStructuredData testimonials={testimonials} />
      
      {/* Service Area Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Webloft Studio",
            "description": "Professional web design services serving businesses across North America",
            "provider": {
              "@type": "Organization",
              "name": "Webloft Studio",
              "description": "Professional web design services serving businesses across North America",
              "url": "https://webloftstudio.com",
              "email": "info@webloftstudio.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CA"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "North America"
                },
                {
                  "@type": "Country", 
                  "name": "United States"
                },
                {
                  "@type": "Country",
                  "name": "Canada"
                }
              ],
              "serviceType": "Web Design Agency",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Design Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Design"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Website Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO Optimization"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Responsive Design"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-commerce Development"
                    }
                  }
                ]
              }
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative h-screen hero-section bg-black text-white overflow-visible">
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
                <br />
                <RotatingTypewriterText />
              </h1>

              <p className="text-base sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-1">
                Your website is not an expense—it's an investment. We build high-performing, lead-generating websites that scale with your business success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-2">
                <Link href="/contact" className="btn-primary-enhanced text-lg px-8 py-4 animate-bounce-attention">
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

        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-8 relative z-10">
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

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Results-Focused Card */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up stagger-1 flex flex-col h-full">
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
              <div className="relative bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up stagger-2 flex flex-col h-full">
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
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Template sites: live in one week</span>
                  </div>
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Custom sites: 2-4 week delivery</span>
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
              <div className="relative bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up stagger-3 flex flex-col h-full">
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

      {/* Why Your Business Needs a Website Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400/20 to-emerald-600/20"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-300 text-sm font-medium mb-6 animate-fade-in-up">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Essential for Modern Business
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up stagger-1">
              Why Every Business Needs a 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"> Professional Website</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
              Your website is more than a digital brochure—it's your 24/7 salesperson, trust-builder, and competitive advantage. 
              Here's why having a professional online presence is essential for business success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Build Instant Credibility Card */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up stagger-1 flex flex-col h-full">
                <div className="mb-6 flex flex-col flex-grow">
                  <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full mb-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 transition-colors duration-300 pr-4">Build Instant Credibility</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    75% of consumers judge a company's credibility based on website design. A professional website instantly builds trust and positions you as a legitimate, established business.
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="text-3xl font-bold text-green-600 mb-2">75%</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">judge credibility by design</div>
                </div>
              </div>
            </div>

            {/* Digital Business Card Card */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up stagger-2 flex flex-col h-full">
                <div className="mb-6 flex flex-col flex-grow">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full mb-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors duration-300 pr-4">Your Digital Business Card</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    Available 24/7 when you're not. Your website is often the first impression customers have of your business, showcasing your expertise and services around the clock.
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">always available</div>
                </div>
              </div>
            </div>

            {/* Strong Online Presence Card */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up stagger-3 flex flex-col h-full">
                <div className="mb-6 flex flex-col flex-grow">
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mb-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 transition-colors duration-300 pr-4">Control Your Brand</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    Establish a strong online presence and control your brand narrative. Outrank competitors in search results and ensure customers find you first when they're looking for your services.
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="text-3xl font-bold text-purple-600 mb-2">#1</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">search ranking goal</div>
                </div>
              </div>
            </div>

            {/* Generate Leads Card */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up stagger-4 flex flex-col h-full">
                <div className="mb-6 flex flex-col flex-grow">
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-red-600 rounded-full mb-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 transition-colors duration-300 pr-4">Generate Leads Automatically</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    Turn visitors into customers with strategic design and conversion optimization. Capture inquiries automatically and grow your business while you focus on what you do best.
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">lead potential</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't let your competitors dominate the online space. A professional website is not an expense—it's an investment in your business's future success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary-enhanced text-lg px-8 py-4">
                Get Your Professional Website
              </Link>
              <Link href="/template-based-websites" className="btn-secondary-enhanced text-lg px-8 py-4">
                Launch in One Week
              </Link>
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

        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-8 relative z-10">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Web Design Service */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up stagger-1 flex flex-col h-full">
                <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up stagger-2 flex flex-col h-full">
                <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up stagger-3 flex flex-col h-full">
                <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up stagger-4 flex flex-col h-full">
                <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium mb-6 animate-fade-in-up">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Client Success
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up stagger-1">
              Recent 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600"> Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
              See how we've helped businesses like yours achieve remarkable online growth with strategic web design and development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                {/* Card Background Glow */}
                <div className={`absolute inset-0 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-700 ${
                  testimonial.projectCategory === 'Construction' ? 'bg-gradient-to-r from-green-400 to-emerald-600' :
                  testimonial.projectCategory === 'Wellness' ? 'bg-gradient-to-r from-purple-400 to-pink-600' :
                  'bg-gradient-to-r from-blue-400 to-indigo-600'
                }`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-102 animate-fade-in-up overflow-hidden" style={{animationDelay: `${index * 0.2}s`}}>
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-t-3xl h-48 project-image-container">
                    <Image
                      src={testimonial.projectImage}
                      alt={`${testimonial.projectName} - Professional web design project by Webloft Studio showcasing custom website design and development services`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 project-card-image"
                      loading="lazy"
                      priority={false}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                        testimonial.projectCategory === 'Construction' ? 'bg-green-500 text-white' :
                        testimonial.projectCategory === 'Wellness' ? 'bg-purple-500 text-white' :
                        'bg-blue-500 text-white'
                      }`}>
                        {testimonial.projectCategory}
                      </span>
            </div>

                    {/* View Project Button */}
                    <div className="absolute bottom-4 right-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-0 md:translate-y-2 group-hover:translate-y-0">
                      <a 
                        href="#"
                        className="bg-white text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg flex items-center gap-2 text-sm"
                      >
                        View
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Project Info */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors duration-300">
                        {testimonial.projectName}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-2 h-2 rounded-full animate-pulse ${
                          testimonial.projectCategory === 'Construction' ? 'bg-green-500' :
                          testimonial.projectCategory === 'Wellness' ? 'bg-purple-500' :
                          'bg-blue-500'
                        }`}></div>
                        <span className={`font-bold text-sm ${
                          testimonial.projectCategory === 'Construction' ? 'text-green-600 dark:text-green-400' :
                          testimonial.projectCategory === 'Wellness' ? 'text-purple-600 dark:text-purple-400' :
                          'text-blue-600 dark:text-blue-400'
                        }`}>
                          {testimonial.projectResult}
                        </span>
                      </div>
            </div>

                    {/* Testimonial */}
                    <div className="mb-4">
                      <div className="flex items-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                        ))}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic">
                        "{testimonial.review}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                <div className="w-15 h-15 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <Image
                  src="/avatar1.jpg"
                  alt="Marcus Johnson - CEO of TechStart Solutions - Client testimonial for professional web design services"
                  width={60}
                  height={60}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  priority={false}
                />
                </div>
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
                <div className="w-15 h-15 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <Image
                  src="/avatar2.jpg"
                  alt="Sarah Mitchell - Founder of Bloom Wellness - Client testimonial for custom website design and development"
                  width={60}
                  height={60}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  priority={false}
                />
                </div>
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
                <div className="w-15 h-15 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <Image
                  src="/avatar3.jpg"
                  alt="David Chen - Owner of Local Home Services - Client testimonial for professional web development services"
                  width={60}
                  height={60}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  priority={false}
                />
                </div>
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

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get answers to the most common questions about our web design services and process.
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="group">
              <details className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    How much does a website cost?
                  </h3>
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Website costs depend on several factors including complexity, number of pages, features needed, and specific requirements. Every project is unique, so it's best to <Link href="/contact" className="text-green-600 hover:text-green-700 font-semibold underline">contact us</Link> or fill out our project form for a personalized quote. We'll provide detailed pricing after understanding your specific needs and goals. Every project includes responsive design, SEO optimization, and 3 months of free support.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 2 */}
            <div className="group">
              <details className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    How long does it take to build a website?
                  </h3>
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    For most business websites, we deliver within 2-4 weeks. Simple brochure sites can be completed in 1-2 weeks, while complex e-commerce or custom applications may take 4-8 weeks. We provide a detailed timeline during our initial consultation and keep you updated throughout the process with regular milestones and previews.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 3 */}
            <div className="group">
              <details className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    Do you provide ongoing website maintenance?
                  </h3>
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Yes! We offer comprehensive maintenance plans starting at $150/month. This includes security updates, performance monitoring, content updates, backup management, and technical support. We also provide emergency support and can help with ongoing SEO improvements, content additions, and feature enhancements as your business grows.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 4 */}
            <div className="group">
              <details className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    What platforms do you work with?
                  </h3>
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We specialize in Webflow, WordPress, and custom React/Next.js solutions. Webflow is our preferred platform for most business websites due to its flexibility, performance, and ease of management. We also work with Shopify for e-commerce, and can migrate existing sites from platforms like Squarespace, Wix, or older WordPress installations.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 5 */}
            <div className="group">
              <details className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    Do you offer SEO services?
                  </h3>
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Absolutely! SEO is built into every website we create. We include technical SEO optimization, keyword research, meta tag optimization, site speed optimization, and mobile responsiveness. We also offer ongoing SEO services including content strategy, local SEO optimization, Google Analytics setup, and monthly performance reports to help you rank higher in search results.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 6 */}
            <div className="group">
              <details className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    Can you redesign my existing website?
                  </h3>
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Yes! We frequently help businesses modernize their existing websites. Whether you need a complete redesign or just want to update specific sections, we can work with your current content and branding to create a fresh, modern look. We also offer website audits to identify areas for improvement and can migrate your site to a better platform if needed.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 7 */}
            <div className="group">
              <details className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    What makes your web design different?
                  </h3>
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We focus on results, not just aesthetics. Every design decision is made with your business goals in mind. We combine beautiful, modern design with conversion optimization, fast loading speeds, and mobile-first responsive design. Our clients typically see 150-300% increases in leads within the first 6 months because we build websites that actually work for your business.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 8 */}
            <div className="group">
              <details className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    Do you provide content for my website?
                  </h3>
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We can help with content strategy and copywriting as part of our web design package. While we encourage you to provide your own content (as you know your business best), we can write compelling headlines, service descriptions, and calls-to-action. We also offer content creation services including blog posts, case studies, and marketing copy to help establish your expertise and improve SEO.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 9 */}
            <div className="group">
              <details className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    Will my website work on mobile devices?
                  </h3>
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Absolutely! All our websites are built mobile-first and are fully responsive. This means they automatically adapt to any screen size - from phones to tablets to desktops. With over 60% of web traffic coming from mobile devices, we ensure your website looks and functions perfectly on every device, which also helps with Google rankings and user experience.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 10 */}
            <div className="group">
              <details className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    What happens after my website is launched?
                  </h3>
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    After launch, we provide 3 months of free support for any technical issues. We also offer training on how to update your website content, and can set up Google Analytics to track your website's performance. Many clients choose our ongoing maintenance plans to keep their site updated, secure, and optimized. We're always available for questions and can help with future enhancements as your business grows.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Still have questions? We'd love to help!
            </p>
            <Link href="/contact" className="btn-primary">
              Get Your Free Consultation
            </Link>
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