'use client';

import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiTwitter, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Fleet', href: '/fleet' },
      { label: 'Services', href: '/services' },
      { label: 'Team', href: '/team' },
    ],
    services: [
      { label: 'Corporate Transport', href: '/services#corporate' },
      { label: 'Special Events', href: '/services#events' },
      { label: 'Airport Services', href: '/services#airport' },
      { label: 'City Tours', href: '/services#tours' },
    ],
    resources: [
      { label: 'Newsroom', href: '/newsroom' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-brand-black border-t border-brand-yellow/20">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="font-luxury font-bold mb-6 text-brand-white text-lg uppercase tracking-wider">
              About Namaste
            </h4>
            <p className="text-brand-white-off mb-6 leading-relaxed">
              Fair, transparent, and driver first ride hailing platform. Making daily travel simple and safe.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-brand-gray-dark border border-brand-yellow/20 hover:border-brand-yellow hover:bg-brand-yellow/10 flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <FiTwitter size={18} className="text-brand-white hover:text-brand-yellow transition-colors" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-brand-gray-dark border border-brand-yellow/20 hover:border-brand-yellow hover:bg-brand-yellow/10 flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} className="text-brand-white hover:text-brand-yellow transition-colors" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-brand-gray-dark border border-brand-yellow/20 hover:border-brand-yellow hover:bg-brand-yellow/10 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <FiFacebook size={18} className="text-brand-white hover:text-brand-yellow transition-colors" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-brand-gray-dark border border-brand-yellow/20 hover:border-brand-yellow hover:bg-brand-yellow/10 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <FiInstagram size={18} className="text-brand-white hover:text-brand-yellow transition-colors" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-luxury font-bold mb-6 text-brand-white text-lg uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-brand-white-off hover:text-brand-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-luxury font-bold mb-6 text-brand-white text-lg uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-brand-white-off hover:text-brand-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-luxury font-bold mb-6 text-brand-white text-lg uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-brand-white-off hover:text-brand-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-yellow/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-white-off text-sm">
              © {currentYear} Namaste Rides. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link href="/privacy" className="text-brand-white-off hover:text-brand-yellow transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-brand-white-off hover:text-brand-yellow transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-brand-white-off hover:text-brand-yellow transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}