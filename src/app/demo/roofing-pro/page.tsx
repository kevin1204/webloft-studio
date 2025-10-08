"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Metadata is handled by the parent layout

export default function RoofingProDemo() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [activeSection, setActiveSection] = useState('home');
  const [countedNumbers, setCountedNumbers] = useState({ years: 0, projects: 0, satisfaction: 0 });
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    observerRef.current = observer;
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      if (observerRef.current) {
        sections.forEach((section) => observerRef.current!.unobserve(section));
      }
    };
  }, []);

  // Counting animation effect
  useEffect(() => {
    if (isVisible.home) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      // Years animation (0 to 25)
      let yearsStep = 0;
      const yearsInterval = setInterval(() => {
        yearsStep++;
        const progress = yearsStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCountedNumbers(prev => ({ ...prev, years: Math.floor(25 * easeOutQuart) }));
        
        if (yearsStep >= steps) {
          clearInterval(yearsInterval);
          setCountedNumbers(prev => ({ ...prev, years: 25 }));
        }
      }, stepDuration);

      // Projects animation (0 to 5000)
      let projectsStep = 0;
      const projectsInterval = setInterval(() => {
        projectsStep++;
        const progress = projectsStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCountedNumbers(prev => ({ ...prev, projects: Math.floor(5000 * easeOutQuart) }));
        
        if (projectsStep >= steps) {
          clearInterval(projectsInterval);
          setCountedNumbers(prev => ({ ...prev, projects: 5000 }));
        }
      }, stepDuration);

      // Satisfaction animation (0 to 100)
      let satisfactionStep = 0;
      const satisfactionInterval = setInterval(() => {
        satisfactionStep++;
        const progress = satisfactionStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCountedNumbers(prev => ({ ...prev, satisfaction: Math.floor(100 * easeOutQuart) }));
        
        if (satisfactionStep >= steps) {
          clearInterval(satisfactionInterval);
          setCountedNumbers(prev => ({ ...prev, satisfaction: 100 }));
        }
      }, stepDuration);

      return () => {
        clearInterval(yearsInterval);
        clearInterval(projectsInterval);
        clearInterval(satisfactionInterval);
      };
    }
  }, [isVisible.home]);

  // Slider functionality
  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleSliderStart = () => {
    setIsDragging(true);
  };

  const handleSliderEnd = () => {
    setIsDragging(false);
  };

  // FAQ toggle functionality
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="text-3xl font-bold text-gray-900">
                <span className="text-blue-600">Roofing</span>Pro
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a 
                  href="#home" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === 'home' 
                      ? 'text-blue-600 bg-blue-50 font-semibold' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === 'about' 
                      ? 'text-blue-600 bg-blue-50 font-semibold' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  About
                </a>
                <a 
                  href="#services" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === 'services' 
                      ? 'text-blue-600 bg-blue-50 font-semibold' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Services
                </a>
                <a 
                  href="#why-choose-us" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === 'why-choose-us' 
                      ? 'text-blue-600 bg-blue-50 font-semibold' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Why Us
                </a>
                <a 
                  href="#projects" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === 'projects' 
                      ? 'text-blue-600 bg-blue-50 font-semibold' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Projects
                </a>
                <a 
                  href="#gallery" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === 'gallery' 
                      ? 'text-blue-600 bg-blue-50 font-semibold' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Gallery
                </a>
                <a 
                  href="#faq" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === 'faq' 
                      ? 'text-blue-600 bg-blue-50 font-semibold' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  FAQ
                </a>
                <a 
                  href="#contact" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === 'contact' 
                      ? 'text-blue-600 bg-blue-50 font-semibold' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+1-555-ROOF-123" 
                className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now: (555) ROOF-123
                </span>
              </a>
            </div>
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { left: 12, top: 29, delay: 0.5, duration: 2.5 },
            { left: 85, top: 15, delay: 1.2, duration: 3.1 },
            { left: 45, top: 78, delay: 0.8, duration: 2.8 },
            { left: 67, top: 42, delay: 1.5, duration: 3.3 },
            { left: 23, top: 65, delay: 0.3, duration: 2.2 },
            { left: 91, top: 88, delay: 2.1, duration: 3.7 },
            { left: 34, top: 12, delay: 0.7, duration: 2.9 },
            { left: 78, top: 56, delay: 1.8, duration: 3.4 },
            { left: 56, top: 91, delay: 0.4, duration: 2.6 },
            { left: 89, top: 33, delay: 1.9, duration: 3.2 },
            { left: 15, top: 47, delay: 0.6, duration: 2.4 },
            { left: 72, top: 74, delay: 1.3, duration: 3.0 },
            { left: 38, top: 19, delay: 0.9, duration: 2.7 },
            { left: 94, top: 61, delay: 2.0, duration: 3.5 },
            { left: 26, top: 83, delay: 0.2, duration: 2.1 },
            { left: 63, top: 37, delay: 1.6, duration: 3.6 },
            { left: 49, top: 95, delay: 0.1, duration: 2.3 },
            { left: 81, top: 8, delay: 1.7, duration: 3.8 },
            { left: 17, top: 72, delay: 0.5, duration: 2.8 },
            { left: 76, top: 25, delay: 1.4, duration: 3.1 }
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
              {/* Content - Left Side */}
              <div className={`text-white transform transition-all duration-1000 ${
                isVisible.home ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Professional <span className="text-blue-400 relative inline-block">
                    <span className="relative z-10">Roofing Services</span>
                    <div className="absolute -inset-1 bg-blue-400/20 blur-lg"></div>
                  </span> You Can Trust
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                  Over 25 years of experience delivering quality roofing solutions. Licensed, insured, and committed to excellence in every project.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Request Free Quote
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                  
                  <button className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 relative overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Our Work
                    </span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="group text-center sm:text-left">
                    <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {countedNumbers.years}+
                    </div>
                    <div className="text-gray-200 group-hover:text-white transition-colors duration-300">Years Experience</div>
                  </div>
                  <div className="group text-center sm:text-left">
                    <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {countedNumbers.projects.toLocaleString()}+
                    </div>
                    <div className="text-gray-200 group-hover:text-white transition-colors duration-300">Projects Completed</div>
                  </div>
                  <div className="group text-center sm:text-left">
                    <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {countedNumbers.satisfaction}%
                    </div>
                    <div className="text-gray-200 group-hover:text-white transition-colors duration-300">Satisfaction Guaranteed</div>
                  </div>
                </div>
              </div>

              {/* Image - Right Side */}
              <div className={`relative transform transition-all duration-1000 delay-300 ${
                isVisible.home ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Professional roofing team at work"
                      className="w-full h-[500px] sm:h-[600px] lg:h-[700px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/10 transition-all duration-300"></div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl hover-lift animate-float">
                    <div className="text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {countedNumbers.years}+
                    </div>
                    <div className="text-blue-100 text-sm">Years of Excellence</div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${
              isVisible.about ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 relative group">
                About RoofingPro
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                For over 25 years, RoofingPro has been the trusted name in residential and commercial roofing services. We pride ourselves on delivering exceptional craftsmanship, using only the highest quality materials, and providing outstanding customer service.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of licensed and insured professionals serves the entire metropolitan area, handling everything from minor repairs to complete roof replacements. We're committed to protecting your most valuable asset - your home or business.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="group hover-lift p-4 rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Licensed & Insured</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Fully licensed contractors with comprehensive insurance coverage</p>
                </div>
                <div className="group hover-lift p-4 rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">24/7 Emergency Service</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Round-the-clock availability for urgent roofing issues</p>
                </div>
                <div className="group hover-lift p-4 rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Quality Materials</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Only premium materials from trusted manufacturers</p>
                </div>
                <div className="group hover-lift p-4 rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">Expert Team</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Skilled craftsmen with decades of combined experience</p>
                </div>
              </div>
            </div>
            <div className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible.about ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="relative group">
                <div 
                  className="h-96 rounded-lg bg-cover bg-center bg-no-repeat shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
                  }}
                ></div>
                <div className="absolute inset-0 bg-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl hover-lift animate-float">
                <div className="text-3xl font-bold group-hover:scale-110 transition-transform duration-300">25+</div>
                <div className="text-blue-100">Years of Excellence</div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              Our Roofing Services
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive roofing solutions for residential and commercial properties
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover-lift hover-glow transform ${
              isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Roof Installation</h3>
              <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">Complete roof replacement and new construction roofing with premium materials and expert installation.</p>
              <ul className="space-y-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  <svg className="w-4 h-4 text-blue-500 mr-2 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Asphalt Shingles
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-100">
                  <svg className="w-4 h-4 text-blue-500 mr-2 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Metal Roofing
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-200">
                  <svg className="w-4 h-4 text-blue-500 mr-2 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tile & Slate
                </li>
              </ul>
            </div>
            <div className={`group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover-lift hover-glow transform ${
              isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Roof Repair & Maintenance</h3>
              <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">Expert repair services and preventive maintenance to extend your roof's lifespan and protect your property.</p>
              <ul className="space-y-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  <svg className="w-4 h-4 text-green-500 mr-2 group-hover:text-green-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Leak Repairs
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-100">
                  <svg className="w-4 h-4 text-green-500 mr-2 group-hover:text-green-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Shingle Replacement
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-200">
                  <svg className="w-4 h-4 text-green-500 mr-2 group-hover:text-green-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Storm Damage
                </li>
              </ul>
            </div>
            <div className={`group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover-lift hover-glow transform ${
              isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Flat Roofing</h3>
              <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">Specialized flat roof solutions for commercial buildings and modern residential properties.</p>
              <ul className="space-y-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  <svg className="w-4 h-4 text-purple-500 mr-2 group-hover:text-purple-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  EPDM Rubber
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-100">
                  <svg className="w-4 h-4 text-purple-500 mr-2 group-hover:text-purple-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  TPO Membrane
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-200">
                  <svg className="w-4 h-4 text-purple-500 mr-2 group-hover:text-purple-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Modified Bitumen
                </li>
              </ul>
            </div>
            <div className={`group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover-lift hover-glow transform ${
              isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">Gutter Installation & Cleaning</h3>
              <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">Complete gutter solutions including installation, repair, and maintenance to protect your property from water damage.</p>
              <ul className="space-y-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  <svg className="w-4 h-4 text-orange-500 mr-2 group-hover:text-orange-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Seamless Gutters
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-100">
                  <svg className="w-4 h-4 text-orange-500 mr-2 group-hover:text-orange-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Gutter Guards
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-200">
                  <svg className="w-4 h-4 text-orange-500 mr-2 group-hover:text-orange-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Downspout Repair
                </li>
              </ul>
            </div>
            <div className={`group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover-lift hover-glow transform ${
              isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">Emergency Leak Repair</h3>
              <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">24/7 emergency response for urgent roofing issues to minimize damage and protect your property.</p>
              <ul className="space-y-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  <svg className="w-4 h-4 text-red-500 mr-2 group-hover:text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Same-Day Response
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-100">
                  <svg className="w-4 h-4 text-red-500 mr-2 group-hover:text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Temporary Patching
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-200">
                  <svg className="w-4 h-4 text-red-500 mr-2 group-hover:text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Permanent Solutions
                </li>
              </ul>
            </div>
            <div className={`group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover-lift hover-glow transform ${
              isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '1000ms' }}>
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">Shingle Replacement</h3>
              <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">Professional shingle replacement services using high-quality materials and expert installation techniques.</p>
              <ul className="space-y-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  <svg className="w-4 h-4 text-teal-500 mr-2 group-hover:text-teal-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Architectural Shingles
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-100">
                  <svg className="w-4 h-4 text-teal-500 mr-2 group-hover:text-teal-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  3-Tab Shingles
                </li>
                <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-200">
                  <svg className="w-4 h-4 text-teal-500 mr-2 group-hover:text-teal-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Designer Shingles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible['why-choose-us'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              Why Choose RoofingPro?
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another roofing company. Here's what sets us apart from the competition.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`text-center group hover-lift transform transition-all duration-500 p-6 rounded-xl ${
              isVisible['why-choose-us'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Licensed & Insured</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Fully licensed contractors with comprehensive insurance coverage for your peace of mind.</p>
            </div>
            <div className={`text-center group hover-lift transform transition-all duration-500 p-6 rounded-xl ${
              isVisible['why-choose-us'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">25+ Years Experience</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Over two decades of expertise in residential and commercial roofing projects.</p>
            </div>
            <div className={`text-center group hover-lift transform transition-all duration-500 p-6 rounded-xl ${
              isVisible['why-choose-us'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">100% Satisfaction</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">We guarantee your complete satisfaction with our workmanship and materials.</p>
            </div>
            <div className={`text-center group hover-lift transform transition-all duration-500 p-6 rounded-xl ${
              isVisible['why-choose-us'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">Premium Materials</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">We use only the highest quality materials from trusted manufacturers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="service-areas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible['service-areas'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              Service Areas
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve the greater metropolitan area and surrounding communities with professional roofing services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`group bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover-lift transform transition-all duration-500 ${
              isVisible['service-areas'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Primary Service Area</h3>
              <ul className="space-y-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                <li className="group-hover:translate-x-2 transition-transform duration-300">• Downtown Metro</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-100">• Westside District</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-200">• Eastside Heights</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-300">• Northside Valley</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-400">• Southside Hills</li>
              </ul>
            </div>
            <div className={`group bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover-lift transform transition-all duration-500 ${
              isVisible['service-areas'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Extended Coverage</h3>
              <ul className="space-y-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                <li className="group-hover:translate-x-2 transition-transform duration-300">• Suburban Communities</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-100">• Rural Areas (30-mile radius)</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-200">• Commercial Districts</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-300">• Industrial Zones</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-400">• Residential Neighborhoods</li>
              </ul>
            </div>
            <div className={`group bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover-lift transform transition-all duration-500 ${
              isVisible['service-areas'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">Emergency Service</h3>
              <ul className="space-y-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                <li className="group-hover:translate-x-2 transition-transform duration-300">• 24/7 Emergency Response</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-100">• Storm Damage Assessment</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-200">• Same-Day Repairs</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-300">• Temporary Tarping</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-400">• Insurance Claim Assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.process ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              Our Process
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final inspection, we follow a proven process that ensures quality results every time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`text-center group hover-lift transform transition-all duration-700 p-6 rounded-xl ${
              isVisible.process ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Free Consultation</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Schedule a free, no-obligation inspection and detailed estimate for your roofing project.</p>
            </div>
            <div className={`text-center group hover-lift transform transition-all duration-700 p-6 rounded-xl ${
              isVisible.process ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:scale-110 group-hover:bg-green-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/25">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">Custom Proposal</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Receive a detailed proposal with material options, timeline, and transparent pricing.</p>
            </div>
            <div className={`text-center group hover-lift transform transition-all duration-700 p-6 rounded-xl ${
              isVisible.process ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:scale-110 group-hover:bg-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Professional Installation</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Our skilled team performs the work with precision, keeping you informed throughout the process.</p>
            </div>
            <div className={`text-center group hover-lift transform transition-all duration-700 p-6 rounded-xl ${
              isVisible.process ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:scale-110 group-hover:bg-orange-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/25">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">Final Inspection</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Complete quality inspection and cleanup, with warranty documentation and maintenance tips.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects/Portfolio Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              Our Recent Projects
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our quality workmanship and attention to detail
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Residential Roof Replacement */}
            <div className={`group cursor-pointer transform transition-all duration-700 ${
              isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="relative h-80 w-full perspective-1000">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                          alt="Residential roof replacement project"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900">Residential Roof Replacement</h3>
                      </div>
                    </div>
                  </div>
                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full relative">
                      <img 
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Residential roof replacement project"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/70"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="text-center text-white">
                          <h3 className="text-xl font-semibold mb-4">Residential Roof Replacement</h3>
                          <p className="text-gray-200">Complete asphalt shingle replacement with architectural shingles. Professional installation with premium materials and expert craftsmanship.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Commercial Flat Roof */}
            <div className={`group cursor-pointer transform transition-all duration-700 ${
              isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="relative h-80 w-full perspective-1000">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                          alt="Commercial flat roof installation"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900">Commercial Flat Roof</h3>
                      </div>
                    </div>
                  </div>
                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full relative">
                      <img 
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Commercial flat roof installation"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/70"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="text-center text-white">
                          <h3 className="text-xl font-semibold mb-4">Commercial Flat Roof</h3>
                          <p className="text-gray-200">EPDM membrane installation for office building. Durable, weather-resistant solution for commercial properties.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Metal Roof Installation */}
            <div className={`group cursor-pointer transform transition-all duration-700 ${
              isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="relative h-80 w-full perspective-1000">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                          alt="Metal roof installation project"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900">Metal Roof Installation</h3>
                      </div>
                    </div>
                  </div>
                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full relative">
                      <img 
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Metal roof installation project"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/70"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="text-center text-white">
                          <h3 className="text-xl font-semibold mb-4">Metal Roof Installation</h3>
                          <p className="text-gray-200">Standing seam metal roof for modern home. Long-lasting, energy-efficient solution with contemporary appeal.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Gutter System Installation */}
            <div className={`group cursor-pointer transform transition-all duration-700 ${
              isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              <div className="relative h-80 w-full perspective-1000">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                          alt="Gutter system installation"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900">Gutter System Installation</h3>
                      </div>
                    </div>
                  </div>
                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full relative">
                      <img 
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Gutter system installation"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/70"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="text-center text-white">
                          <h3 className="text-xl font-semibold mb-4">Gutter System Installation</h3>
                          <p className="text-gray-200">Seamless aluminum gutters with leaf guards. Complete water management system for your property.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 - Storm Damage Repair */}
            <div className={`group cursor-pointer transform transition-all duration-700 ${
              isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '1000ms' }}>
              <div className="relative h-80 w-full perspective-1000">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                          alt="Storm damage repair work"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900">Storm Damage Repair</h3>
                      </div>
                    </div>
                  </div>
                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full relative">
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Storm damage repair work"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/70"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="text-center text-white">
                          <h3 className="text-xl font-semibold mb-4">Storm Damage Repair</h3>
                          <p className="text-gray-200">Emergency repair after severe weather damage. Quick response and professional restoration services.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 - Tile Roof Restoration */}
            <div className={`group cursor-pointer transform transition-all duration-700 ${
              isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '1200ms' }}>
              <div className="relative h-80 w-full perspective-1000">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                          alt="Tile roof restoration work"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900">Tile Roof Restoration</h3>
                      </div>
                    </div>
                  </div>
                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full relative">
                      <img 
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Tile roof restoration work"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/70"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="text-center text-white">
                          <h3 className="text-xl font-semibold mb-4">Tile Roof Restoration</h3>
                          <p className="text-gray-200">Clay tile roof repair and maintenance. Preserving the beauty and integrity of traditional roofing materials.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.gallery ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              Before & After Gallery
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the dramatic transformations we've achieved for our clients. Every project tells a story of quality and craftsmanship.
            </p>
          </div>
          {/* Interactive Slider Gallery */}
          <div className={`max-w-4xl mx-auto transform transition-all duration-1000 delay-300 ${
            isVisible.gallery ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div 
                className="relative cursor-col-resize"
                onMouseMove={handleSliderMove}
                onMouseDown={handleSliderStart}
                onMouseUp={handleSliderEnd}
                onMouseLeave={handleSliderEnd}
                onTouchMove={(e) => {
                  e.preventDefault();
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.touches[0].clientX - rect.left;
                  const percentage = (x / rect.width) * 100;
                  setSliderPosition(Math.max(0, Math.min(100, percentage)));
                }}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
              >
                {/* Before Image */}
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    alt="Before roof repair"
                    className="w-full h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                    BEFORE
                  </div>
                </div>
                
                {/* After Image with Slider */}
                <div 
                  className="absolute top-0 left-0 w-full h-full overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    alt="After roof repair"
                    className="w-full h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
                    AFTER
                  </div>
                </div>
                
                {/* Slider Line */}
                <div 
                  className="absolute top-0 w-20 h-full z-10 -ml-10 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Visual slider line */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-white shadow-lg"></div>
                  {/* Draggable handle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-auto cursor-col-resize hover:scale-110 transition-transform duration-200">
                    <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                
                {/* Instructions */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
                  Drag anywhere to compare before and after
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Residential Roof Transformation</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Complete roof replacement with premium materials and expert installation. This project showcases our attention to detail and commitment to quality craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Awards & Certifications Section */}
      <section id="awards" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.awards ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              Awards & Certifications
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized for excellence in roofing services and customer satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`text-center group hover-lift transform transition-all duration-700 p-6 rounded-xl ${
              isVisible.awards ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-10 h-10 text-yellow-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">A+ BBB Rating</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Better Business Bureau</p>
            </div>
            <div className={`text-center group hover-lift transform transition-all duration-700 p-6 rounded-xl ${
              isVisible.awards ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">GAF Certified</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Master Elite Contractor</p>
            </div>
            <div className={`text-center group hover-lift transform transition-all duration-700 p-6 rounded-xl ${
              isVisible.awards ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-10 h-10 text-green-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">5-Star Reviews</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Google & Yelp</p>
            </div>
            <div className={`text-center group hover-lift transform transition-all duration-700 p-6 rounded-xl ${
              isVisible.awards ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-10 h-10 text-purple-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Licensed & Bonded</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">State Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Financing Section */}
      <section id="insurance-financing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible['insurance-financing'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              Insurance & Financing
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make it easy to protect your investment with flexible payment options and insurance assistance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`bg-white rounded-lg shadow-lg p-6 group hover-lift transform transition-all duration-700 ${
              isVisible['insurance-financing'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Insurance Claims</h3>
              <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">We work directly with your insurance company to handle the entire claims process, ensuring you get the coverage you deserve.</p>
              <ul className="text-sm text-gray-600 space-y-1 group-hover:text-gray-700 transition-colors duration-300">
                <li className="group-hover:translate-x-2 transition-transform duration-300">• Storm damage assessment</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-100">• Detailed documentation</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-200">• Direct insurance billing</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-300">• Claims advocacy</li>
              </ul>
            </div>
            <div className={`bg-white rounded-lg shadow-lg p-6 group hover-lift transform transition-all duration-700 ${
              isVisible['insurance-financing'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">Flexible Financing</h3>
              <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">Multiple financing options available to fit your budget, including low-interest loans and payment plans.</p>
              <ul className="text-sm text-gray-600 space-y-1 group-hover:text-gray-700 transition-colors duration-300">
                <li className="group-hover:translate-x-2 transition-transform duration-300">• 0% APR financing available</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-100">• No payment for 12 months</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-200">• Quick approval process</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-300">• Flexible terms</li>
              </ul>
            </div>
            <div className={`bg-white rounded-lg shadow-lg p-6 group hover-lift transform transition-all duration-700 ${
              isVisible['insurance-financing'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Warranty Protection</h3>
              <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">Comprehensive warranty coverage on both materials and workmanship to protect your investment.</p>
              <ul className="text-sm text-gray-600 space-y-1 group-hover:text-gray-700 transition-colors duration-300">
                <li className="group-hover:translate-x-2 transition-transform duration-300">• Material warranties up to 50 years</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-100">• Workmanship warranty 5-10 years</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-200">• Transferable warranties</li>
                <li className="group-hover:translate-x-2 transition-transform duration-300 delay-300">• 24/7 warranty support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              What Our Customers Say
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`bg-gray-50 rounded-lg p-8 group hover-lift transform transition-all duration-700 ${
              isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20" style={{ animationDelay: `${i * 100}ms` }}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic group-hover:text-gray-700 transition-colors duration-300">
                "RoofingPro did an outstanding job replacing our roof after storm damage. The team was professional, punctual, and the quality of work exceeded our expectations. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4 group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300">
                  S
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Sarah Mitchell</div>
                  <div className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors duration-300">Homeowner</div>
                </div>
              </div>
            </div>
            <div className={`bg-gray-50 rounded-lg p-8 group hover-lift transform transition-all duration-700 ${
              isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20" style={{ animationDelay: `${i * 100}ms` }}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic group-hover:text-gray-700 transition-colors duration-300">
                "We've used RoofingPro for multiple commercial properties. Their attention to detail, competitive pricing, and reliable service make them our go-to roofing contractor."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4 group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300">
                  M
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Michael Rodriguez</div>
                  <div className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors duration-300">Property Manager</div>
                </div>
              </div>
            </div>
            <div className={`bg-gray-50 rounded-lg p-8 group hover-lift transform transition-all duration-700 ${
              isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20" style={{ animationDelay: `${i * 100}ms` }}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic group-hover:text-gray-700 transition-colors duration-300">
                "When we had an emergency leak, RoofingPro responded immediately and fixed the problem the same day. Their emergency service is truly exceptional and saved us from major water damage."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4 group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300">
                  J
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Jennifer Thompson</div>
                  <div className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors duration-300">Business Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.faq ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              Frequently Asked Questions
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common roofing questions from our experts.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "How long does a roof replacement take?",
                answer: "Most residential roof replacements take 1-3 days, depending on the size and complexity of the project. We'll provide a detailed timeline during your consultation."
              },
              {
                question: "Do you work with insurance companies?",
                answer: "Yes, we work directly with insurance companies to help you navigate the claims process. We can provide detailed estimates and documentation for your claim."
              },
              {
                question: "What warranties do you offer?",
                answer: "We offer comprehensive warranties on both materials and workmanship. Our workmanship warranty ranges from 5-10 years, and material warranties vary by manufacturer."
              },
              {
                question: "How often should I inspect my roof?",
                answer: "We recommend professional roof inspections twice a year - once in spring and once in fall. Regular inspections help identify potential issues before they become major problems."
              },
              {
                question: "What's the cost of a new roof?",
                answer: "Roof costs vary based on size, materials, and complexity. We provide free, detailed estimates with no obligation. Contact us for a personalized quote."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-700 ${
                  isVisible.faq ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${200 + (index * 100)}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 pr-4 group-hover:text-blue-600 transition-colors duration-300">{faq.question}</h3>
                  <div className={`transform transition-all duration-500 ${openFAQ === index ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`}>
                    <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="cta" className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Ready for a New Roof?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait for problems to get worse. Get a free inspection and protect your property today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Schedule Free Inspection
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Get Free Quote
            </button>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              Contact Us Today
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to get started? Contact us for a free consultation and quote.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible.contact ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 group">
                Get In Touch
                <div className="w-12 h-1 bg-blue-600 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option>Select a service</option>
                    <option>Roof Installation</option>
                    <option>Roof Repair</option>
                    <option>Flat Roofing</option>
                    <option>Gutter Installation</option>
                    <option>Emergency Repair</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible.contact ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 group">
                Contact Information
                <div className="w-12 h-1 bg-blue-600 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">123 Roofing Street<br />Construction City, CC 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">(555) ROOF-123<br />(555) 766-3123</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@roofingpro.com<br />emergency@roofingpro.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Mon-Fri: 7:00 AM - 6:00 PM<br />Sat: 8:00 AM - 4:00 PM<br />Emergency: 24/7</p>
                  </div>
                </div>
              </div>
              
              {/* Simple Map Placeholder */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Service Area</h4>
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p>Interactive Map</p>
                    <p className="text-sm">Serving the entire metropolitan area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-4">
                <span className="text-blue-400">Roofing</span>Pro
              </div>
              <p className="text-gray-400 mb-4">Professional roofing services you can trust. Licensed, insured, and committed to excellence.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Roof Installation</a></li>
                <li><a href="#" className="hover:text-white">Roof Repair</a></li>
                <li><a href="#" className="hover:text-white">Flat Roofing</a></li>
                <li><a href="#" className="hover:text-white">Gutter Services</a></li>
                <li><a href="#" className="hover:text-white">Emergency Repair</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Our Team</a></li>
                <li><a href="#" className="hover:text-white">Projects</a></li>
                <li><a href="#" className="hover:text-white">Testimonials</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Roofing Street</li>
                <li>Construction City, CC 12345</li>
                <li>Phone: (555) ROOF-123</li>
                <li>Email: info@roofingpro.com</li>
                <li className="pt-4 text-sm">
                  Template by <Link href="/template-based-websites" className="text-blue-400 hover:text-blue-300">Webloft Studio</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RoofingPro. All rights reserved. | Licensed & Insured</p>
          </div>
        </div>
      </footer>

      {/* Demo Notice */}
      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-xl max-w-xs z-50">
        <div className="flex items-center mb-2">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-medium">This is a demo template</span>
        </div>
        <p className="text-xs text-blue-100 mb-3">
          Like what you see? Get your own professional website!
        </p>
        <div className="space-y-2">
          <Link 
            href="#contact" 
            className="block w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-2 px-3 rounded text-xs text-center transition-colors duration-200"
          >
            Get Your Website →
          </Link>
          <Link 
            href="/template-based-websites" 
            className="block text-xs text-blue-100 hover:text-white underline hover:no-underline text-center transition-colors duration-200"
          >
            View all templates
          </Link>
        </div>
      </div>
    </div>
  );
}
