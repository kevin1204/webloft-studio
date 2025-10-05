import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/wflogo.svg"
                alt="Webloft Studio"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-white font-bold text-xl">Webloft Studio</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Building modern websites that drive business growth for small and medium businesses.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/webloftstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/webloftstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.987-5.366 11.987-11.99C24.004 5.367 18.641.001 12.017.001zm5.568 16.586c-.88.88-2.076 1.364-3.368 1.364H9.782c-1.292 0-2.487-.484-3.368-1.364-.88-.88-1.364-2.077-1.364-3.368V9.782c0-1.29.484-2.487 1.364-3.368.88-.88 2.076-1.364 3.368-1.364h4.435c1.292 0 2.487.484 3.368 1.364.88.88 1.364 2.077 1.364 3.368v4.435c0 1.291-.484 2.488-1.364 3.368zM17.64 9.782c0-.663-.537-1.2-1.2-1.2s-1.2.537-1.2 1.2.537 1.2 1.2 1.2 1.2-.537 1.2-1.2zM12.017 7.729c-2.29 0-4.154 1.864-4.154 4.154s1.864 4.154 4.154 4.154 4.154-1.864 4.154-4.154-1.864-4.154-4.154-4.154z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Pages</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-green-400 transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-green-400 transition-colors">Projects</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-green-400 transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400">Web Design</span></li>
              <li><span className="text-gray-400">Webflow Development</span></li>
              <li><span className="text-gray-400">SEO Optimization</span></li>
              <li><span className="text-gray-400">Website Maintenance</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:infowebloftstudio@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors">
                  infowebloftstudio@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+12263766326" className="text-gray-400 hover:text-green-400 transition-colors">
                  +1 (226) 376-6326
                </a>
              </li>
              <li><span className="text-gray-400">Mon-Fri, 9AM-6PM EST</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Webloft Studio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}