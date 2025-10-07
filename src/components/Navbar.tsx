'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const servicesItems = [
    { name: 'Services', href: '/services' },
    { name: 'Template-Based Websites', href: '/template-based-websites' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/wflogo.svg"
              alt="Webloft Studio"
              width={120}
              height={40}
              className="navbar-logo"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="link-hover text-gray-300 hover:text-green-400 font-medium"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={toggleServices}
                  className="link-hover text-gray-300 hover:text-green-400 font-medium flex items-center"
                >
                  Services
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-lg shadow-lg border border-gray-700 py-2 z-50">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-gray-800 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link
                href="/contact"
                className="btn-primary-enhanced inline-block"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-md"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 animate-fade-in-up">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="link-hover block text-gray-300 hover:text-green-400 font-medium py-3 px-4 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                onClick={toggleMenu}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Services Section */}
            <div className="py-3 px-4">
              <div className="text-gray-300 font-medium mb-2">Services</div>
              <div className="ml-4 space-y-2">
                {servicesItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="link-hover block text-gray-400 hover:text-green-400 font-medium py-2 px-4 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                    onClick={toggleMenu}
                    style={{ animationDelay: `${(navItems.length + index) * 0.1}s` }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-700">
              <Link
                href="/contact"
                className="btn-primary-enhanced block text-center py-3 px-6 rounded-lg"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}