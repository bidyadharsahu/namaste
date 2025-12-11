'use client';

import Link from 'next/link';
import { FiMail, FiMapPin, FiTwitter, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-white" id="contact">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-brand-yellow mb-4">Namaste Rides</h3>
            <p className="text-gray-300 mb-4">
              Local-first, safe, and scalable ride solutions for cities and enterprises.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-brand-orange transition-colors" aria-label="Twitter">
                <FiTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-brand-orange transition-colors" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-brand-orange transition-colors" aria-label="Facebook">
                <FiFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-brand-orange transition-colors" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-brand-yellow">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/#about" className="text-gray-300 hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link href="/#team" className="text-gray-300 hover:text-brand-orange transition-colors">Our Team</Link></li>
              <li><Link href="/#offerings" className="text-gray-300 hover:text-brand-orange transition-colors">Offerings</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-brand-orange transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-brand-yellow">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/newsroom" className="text-gray-300 hover:text-brand-orange transition-colors">Newsroom</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-brand-orange transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-brand-orange transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-brand-orange transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-brand-yellow">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FiMapPin className="mt-1 text-brand-orange flex-shrink-0" />
                <span className="text-gray-300">
                  123 Business District<br />
                  Bangalore, KA 560001<br />
                  India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <FiMail className="text-brand-orange" />
                <a href="mailto:press@namasterides.com" className="text-gray-300 hover:text-brand-orange transition-colors">
                  press@namasterides.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FiMail className="text-brand-orange" />
                <a href="mailto:business@namasterides.com" className="text-gray-300 hover:text-brand-orange transition-colors">
                  business@namasterides.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Namaste Rides. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
