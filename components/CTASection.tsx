'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiPhone } from 'react-icons/fi';

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/cta-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/70"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-luxury font-bold text-brand-white mb-6 leading-tight">
              READY TO EXPERIENCE
              <br />
              <span className="text-gradient-gold">LUXURY REDEFINED?</span>
            </h2>
            <p className="text-xl md:text-2xl text-brand-gray-light mb-12 max-w-2xl font-light leading-relaxed">
              Book your premium ride today and discover why discerning clients choose Namaste Rides for their most important journeys.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/book" className="btn btn-primary group text-lg px-10 py-5">
                BOOK NOW
                <FiArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
              </Link>
              <Link href="/contact" className="btn btn-secondary group text-lg px-10 py-5">
                <FiPhone className="mr-3" size={24} />
                CONTACT US
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 flex items-center gap-12 flex-wrap"
            >
              <div>
                <p className="text-brand-gold text-sm uppercase tracking-widest mb-2">Available 24/7</p>
                <p className="text-brand-white text-2xl font-bold">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-brand-gold text-sm uppercase tracking-widest mb-2">Email Us</p>
                <p className="text-brand-white text-2xl font-bold">namasterides26@gmail.com</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
