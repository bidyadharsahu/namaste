'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
    { href: '/#about', label: 'About' },
    { href: '/#team', label: 'Team' },
    { href: '/#offerings', label: 'Offerings' },
    { href: '/newsroom', label: 'Newsroom' },
    { href: '/blog', label: 'Blog' },
    { href: '/careers', label: 'Careers' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className={`text-2xl font-display font-bold ${isScrolled ? 'text-brand-charcoal' : 'text-white'}`}>
              Namaste
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-brand-charcoal hover:text-brand-orange' 
                    : 'text-white hover:text-brand-yellow'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#contact" className="btn btn-primary">
              Contact Sales
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-brand-charcoal' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg rounded-b-lg pb-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-brand-charcoal hover:bg-brand-orange/10 hover:text-brand-orange transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link href="/#contact" className="btn btn-primary w-full text-center block">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
