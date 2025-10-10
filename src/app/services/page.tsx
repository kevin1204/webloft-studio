'use client';

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// Custom hook for intersection observer animations
const useIntersectionObserver = (threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible] as const;
};

export default function Services() {
  const [heroRef, heroVisible] = useIntersectionObserver(0.3);
  const [designDevRef, designDevVisible] = useIntersectionObserver(0.2);
  const [growthOptRef, growthOptVisible] = useIntersectionObserver(0.2);
  const [supportMainRef, supportMainVisible] = useIntersectionObserver(0.2);
  const [faqRef, faqVisible] = useIntersectionObserver(0.2);
  const [ctaRef, ctaVisible] = useIntersectionObserver(0.3);
  
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className={`pt-20 pb-16 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Subtle floating background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-emerald-500 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-green-300 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
              Services That Drive <span className="text-green-400">Results</span>
            </h1>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-200 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
              At Webloft Studio, we don't just build websites — we craft tailored digital experiences that help businesses grow. Every project is rooted in strategy, design, and measurable results.
            </p>
            <div className={`transition-all duration-1000 delay-400 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get a Free Consultation
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Design & Development Services */}
      <section ref={designDevRef} className={`py-20 bg-gray-800 relative overflow-hidden transition-all duration-1000 ${designDevVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-10 left-20 w-40 h-40 bg-green-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-20 w-36 h-36 bg-emerald-500 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
              </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${designDevVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-4xl font-bold text-white mb-4">
              Design & <span className="text-green-400">Development</span>
              </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transform your vision into a powerful digital presence that converts visitors into customers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Custom Web Design */}
            <div className={`bg-gray-900 rounded-xl p-8 border border-gray-700 transition-all duration-1000 ${designDevVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 flex flex-col h-full`} style={{transitionDelay: designDevVisible ? '0.1s' : '0ms'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Web Design</h3>
              <p className="text-gray-300 mb-6">Unique, brand-focused designs that stand out from the competition and drive conversions.</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Brand-aligned visual identity</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Mobile-first responsive design</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Conversion-optimized layouts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">User experience optimization</span>
                </li>
              </ul>
              
              <div className="flex flex-col gap-3 mt-auto">
                <Link href="/contact" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl text-center block">
                  Start Your Project
                </Link>
                <Link href="/services/web-design" className="w-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-center block">
                  View More
                </Link>
              </div>
            </div>

            {/* Website Redesign */}
            <div className={`bg-gray-900 rounded-xl p-8 border border-gray-700 transition-all duration-1000 ${designDevVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 flex flex-col h-full`} style={{transitionDelay: designDevVisible ? '0.2s' : '0ms'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
          </div>
              <h3 className="text-2xl font-bold text-white mb-4">Website Redesign</h3>
              <p className="text-gray-300 mb-6">Modernize your existing website with fresh design and improved functionality.</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Modern design refresh</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Performance optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Content migration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">SEO preservation</span>
                </li>
              </ul>
              
              <div className="flex flex-col gap-3 mt-auto">
                <Link href="/contact" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl text-center block">
                  Get Quote
                </Link>
                <Link href="/services/website-redesign" className="w-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-center block">
                  View More
                </Link>
              </div>
            </div>

            {/* Webflow Development */}
            <div className={`bg-gray-900 rounded-xl p-8 border border-gray-700 transition-all duration-1000 ${designDevVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 flex flex-col h-full`} style={{transitionDelay: designDevVisible ? '0.3s' : '0ms'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
          </div>
              <h3 className="text-2xl font-bold text-white mb-4">Webflow Development</h3>
              <p className="text-gray-300 mb-6">Fast, scalable websites built on Webflow's powerful platform with custom functionality.</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Lightning-fast performance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Easy content management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Custom interactions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Built-in SEO foundations</span>
                </li>
              </ul>
              
              <div className="flex flex-col gap-3 mt-auto">
                <Link href="/contact" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl text-center block">
                  Start Building
                </Link>
                <Link href="/services/webflow-development" className="w-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-center block">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth & Optimization Services */}
      <section ref={growthOptRef} className={`py-20 bg-gray-900 relative overflow-hidden transition-all duration-1000 ${growthOptVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-20 right-10 w-44 h-44 bg-green-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-28 h-28 bg-emerald-500 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${growthOptVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-4xl font-bold text-white mb-4">
              Growth & <span className="text-green-400">Optimization</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Maximize your website's potential with data-driven strategies that drive traffic and conversions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* SEO & Content Optimization */}
            <div className={`bg-gray-800 rounded-xl p-8 border border-gray-700 transition-all duration-1000 ${growthOptVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 flex flex-col h-full`}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </div>
              <h3 className="text-2xl font-bold text-white mb-4">SEO & Content Optimization</h3>
              <p className="text-gray-300 mb-6">Get found by your ideal customers with strategic SEO and content that converts.</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Technical SEO audit & setup</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Local search optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Content strategy & optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Ongoing performance monitoring</span>
                </li>
              </ul>
              
              <div className="flex flex-col gap-3 mt-auto">
                <Link href="/contact" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl text-center block">
                  Boost Visibility
                </Link>
                <Link href="/services/seo-optimization" className="w-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-center block">
                  View More
                </Link>
              </div>
            </div>

            {/* Conversion Rate Optimization */}
            <div className={`bg-gray-800 rounded-xl p-8 border border-gray-700 transition-all duration-1000 ${growthOptVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 flex flex-col h-full`} style={{transitionDelay: growthOptVisible ? '0.2s' : '0ms'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Conversion Rate Optimization</h3>
              <p className="text-gray-300 mb-6">Turn more visitors into customers with data-driven optimization strategies.</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">User behavior analysis</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">A/B testing implementation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Landing page optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Call-to-action optimization</span>
                </li>
              </ul>
              
              <div className="flex flex-col gap-3 mt-auto">
                <Link href="/contact" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl text-center block">
                  Optimize Now
                </Link>
                <Link href="/services/conversion-rate-optimization" className="w-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-center block">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Maintenance Services */}
      <section ref={supportMainRef} className={`py-20 bg-gray-800 relative overflow-hidden transition-all duration-1000 ${supportMainVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-10 right-20 w-36 h-36 bg-emerald-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-20 w-40 h-40 bg-green-500 rounded-full blur-2xl animate-float" style={{animationDelay: '3.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${supportMainVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-4xl font-bold text-white mb-4">
              Support & <span className="text-green-400">Maintenance</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Keep your website running smoothly with ongoing support and maintenance services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Website Maintenance */}
            <div className={`bg-gray-900 rounded-xl p-8 border border-gray-700 transition-all duration-1000 ${supportMainVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 flex flex-col h-full`} style={{transitionDelay: supportMainVisible ? '0.1s' : '0ms'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Website Maintenance</h3>
              <p className="text-gray-300 mb-6">Comprehensive maintenance to keep your website secure, fast, and up-to-date.</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Regular updates & backups</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Performance monitoring</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Content updates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Priority support</span>
                </li>
              </ul>
              
              <div className="flex flex-col gap-3 mt-auto">
                <Link href="/contact" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl text-center block">
                  Secure Website
                </Link>
                <Link href="/services/website-maintenance" className="w-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-center block">
                  View More
                </Link>
              </div>
            </div>

            {/* Hosting & Security Setup */}
            <div className={`bg-gray-900 rounded-xl p-8 border border-gray-700 transition-all duration-1000 ${supportMainVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 flex flex-col h-full`} style={{transitionDelay: supportMainVisible ? '0.2s' : '0ms'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Hosting & Security Setup</h3>
              <p className="text-gray-300 mb-6">Professional hosting setup on reliable platforms with security best practices.</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Platform setup (Webflow/Netlify/Vercel)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">SSL certificate installation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Domain configuration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                  <span className="text-gray-300 text-sm">Security monitoring setup</span>
                    </li>
                </ul>
              
              <div className="flex flex-col gap-3 mt-auto">
                <Link href="/contact" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl text-center block">
                  Setup Hosting
                </Link>
                <Link href="/services/hosting-security-setup" className="w-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-center block">
                  View More
                </Link>
              </div>
            </div>

            {/* Analytics & Monthly Reports */}
            <div className={`bg-gray-900 rounded-xl p-8 border border-gray-700 transition-all duration-1000 ${supportMainVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 flex flex-col h-full`} style={{transitionDelay: supportMainVisible ? '0.3s' : '0ms'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Analytics & Monthly Reports</h3>
              <p className="text-gray-300 mb-6">Data-driven insights to track your website's performance and growth.</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Google Analytics setup</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Monthly performance reports</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Traffic & conversion tracking</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Actionable recommendations</span>
                </li>
              </ul>
              
              <div className="flex flex-col gap-3 mt-auto">
                <Link href="/contact" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl text-center block">
                  Track Performance
                </Link>
                <Link href="/services/analytics-monthly-reports" className="w-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-center block">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className={`py-20 bg-gray-900 transition-all duration-1000 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="text-green-400">Questions</span>
            </h2>
            <p className="text-lg text-gray-300">
              Everything you need to know about our web design and development process.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical website project take?",
                answer: "For most businesses, a typical website project takes 2-4 weeks when implementing the design. However, the timeline depends on several factors including project complexity, whether you need custom design or have existing designs, content creation requirements (images, copywriting), number of pages, and specific functionality needs. We'll provide a detailed timeline during our initial consultation and keep you updated throughout the process."
              },
              {
                question: "Do you provide hosting services?",
                answer: "We don't provide hosting infrastructure, but we set up hosting for you on reliable platforms like Webflow, Netlify, or Vercel. This ensures better performance, security, and cost-effectiveness for your business."
              },
              {
                question: "What's included in website maintenance?",
                answer: "Our maintenance plans include regular updates, security monitoring, performance optimization, content updates, and priority support. We also provide monthly reports on your website's performance and recommendations for improvement."
              },
              {
                question: "Can you help with SEO after the website is built?",
                answer: "Absolutely! We offer ongoing SEO services including content optimization, technical SEO improvements, and monthly performance tracking. We can also help with conversion rate optimization to maximize your website's effectiveness."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className={`bg-gray-800 rounded-lg border border-gray-700 transition-all duration-1000 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 overflow-hidden`}
                style={{transitionDelay: faqVisible ? `${index * 0.1}s` : '0ms'}}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <h3 className="text-xl font-semibold text-white pr-4">{faq.question}</h3>
                  <svg 
                    className={`w-6 h-6 text-green-400 transition-transform duration-300 flex-shrink-0 ${expandedFAQ === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    expandedFAQ === index 
                      ? 'max-h-96 opacity-100 pb-6 px-6' 
                      : 'max-h-0 opacity-0 pb-0 px-6'
                  }`}
                >
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className={`py-20 bg-gradient-to-r from-green-500 to-emerald-600 relative overflow-hidden transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Floating background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-white rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className={`text-4xl font-bold text-white mb-6 transition-all duration-1000 ${ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
            Ready to Grow Your Business Online?
          </h2>
          <p className={`text-xl text-green-100 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
            Let's discuss your project and create a website that drives real business growth.
          </p>
          <div className={`transition-all duration-1000 delay-400 ${ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
          <Link
            href="/contact"
              className="bg-white text-green-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-flex items-center justify-center text-center transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
              Book a Free Consultation
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
}