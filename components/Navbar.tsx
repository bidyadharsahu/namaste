'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'WHO WE ARE' },
    { href: '/services', label: 'WHAT WE DO' },
    { href: '/team', label: 'TEAM' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-brand-black border-b border-brand-yellow/10' : 'bg-brand-black/90'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="Namaste Rides" 
              className="h-16 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-widest text-brand-white hover:text-brand-yellow transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="/book" className="px-6 py-2.5 bg-brand-yellow text-brand-black font-semibold hover:bg-brand-yellow-light transition-all duration-300 text-sm tracking-wider">
              TAKE A RIDE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-brand-white hover:text-brand-yellow transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-brand-gray-dark border-t border-brand-yellow/20"
            >
              <div className="py-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block px-6 py-3 text-sm font-medium tracking-widest text-brand-white hover:text-brand-yellow hover:bg-brand-gray-light transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="px-6 pt-4">
                  <Link href="/book" className="btn btn-primary w-full text-center block text-sm">
                    BOOK NOW
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
