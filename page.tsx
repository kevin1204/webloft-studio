'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', business: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Talk About <span className="gradient-text">Your Website</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your online presence? Get a free consultation and discover how we can drive more leads to your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Get Your Free Quote</h2>

              {isSubmitted ? (
                <div className="card bg-green-900/20 border-green-500/30 text-center py-12">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                  <p className="text-gray-300">We'll get back to you within 24 hours to discuss your project.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="business" className="block text-white font-semibold mb-2">
                      Business/Company Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your business name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your business, goals, and what you're looking for in a website..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send My Request'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Other Ways to Reach Us</h2>
              </div>

              <div className="card">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                    <p className="text-gray-400 mb-2">For project inquiries and questions</p>
                    <a href="mailto:hello@webloftstudio.com" className="text-green-400 hover:text-green-300 font-semibold">
                      hello@webloftstudio.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                    <p className="text-gray-400 mb-2">Mon-Fri, 9AM-6PM EST</p>
                    <a href="tel:+1234567890" className="text-green-400 hover:text-green-300 font-semibold">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/company/webloftstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/webloftstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.987-5.366 11.987-11.99C24.004 5.367 18.641.001 12.017.001zm5.568 16.586c-.88.88-2.076 1.364-3.368 1.364H9.782c-1.292 0-2.487-.484-3.368-1.364-.88-.88-1.364-2.077-1.364-3.368V9.782c0-1.29.484-2.487 1.364-3.368.88-.88 2.076-1.364 3.368-1.364h4.435c1.292 0 2.487.484 3.368 1.364.88.88 1.364 2.077 1.364 3.368v4.435c0 1.291-.484 2.488-1.364 3.368zM17.64 9.782c0-.663-.537-1.2-1.2-1.2s-1.2.537-1.2 1.2.537 1.2 1.2 1.2 1.2-.537 1.2-1.2zM12.017 7.729c-2.29 0-4.154 1.864-4.154 4.154s1.864 4.154 4.154 4.154 4.154-1.864 4.154-4.154-1.864-4.154-4.154-4.154z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="card bg-green-900/20 border-green-500/30">
                <h3 className="text-xl font-bold text-white mb-4">What Happens Next?</h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 font-bold mr-3">1.</span>
                    <span>We'll review your project details and get back to you within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 font-bold mr-3">2.</span>
                    <span>Schedule a free 30-minute discovery call to discuss your goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 font-bold mr-3">3.</span>
                    <span>Receive a custom proposal with timeline and investment details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 font-bold mr-3">4.</span>
                    <span>Start building your website that drives business growth</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-400">
              Got questions? We've got answers. Here are the most common questions we hear from business owners.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">How long does it take to build a website?</h3>
              <p className="text-gray-400">
                Most websites are completed within 2-4 weeks, depending on complexity and content requirements. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">What's included in your website packages?</h3>
              <p className="text-gray-400">
                Every website includes custom design, mobile optimization, SEO setup, content management system, hosting setup, and 30 days of post-launch support. Additional services are available based on your needs.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">Can I update my website myself?</h3>
              <p className="text-gray-400">
                Absolutely! We build all websites on user-friendly platforms that allow you to easily update content, add pages, and make changes without any technical knowledge.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">Do you provide ongoing maintenance?</h3>
              <p className="text-gray-400">
                Yes, we offer website maintenance packages that include regular updates, backups, security monitoring, and priority support to keep your website running smoothly.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">What if I need changes after the website is live?</h3>
              <p className="text-gray-400">
                We include 30 days of post-launch support for any adjustments or minor changes. After that, we offer flexible hourly support or ongoing maintenance packages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}