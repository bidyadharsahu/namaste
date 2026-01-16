'use client';

import { motion } from 'framer-motion';

export default function StatsSection() {
  return (
    <section className="py-32 bg-brand-black relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-brand-black z-10"></div>
      </div>

      <div className="container-custom relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Quote Text */}
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-luxury font-bold text-brand-white mb-8 leading-relaxed">
            <span className="text-brand-yellow text-6xl md:text-7xl font-serif align-top">"</span>
            Every journey begins with trust. At Namaste, we're not just building rides, we're building relationships that move World forward.
            <span className="text-brand-yellow text-6xl md:text-7xl font-serif align-bottom">"</span>
          </blockquote>
          
          {/* Attribution */}
          <div className="mt-12">
            <p className="text-xl text-brand-yellow font-semibold">Harishwar Reddy Nakka</p>
            <p className="text-lg text-brand-gray-light">Founder & CEO, Namaste Rides</p>
          </div>

          {/* Decorative line */}
          <div className="mt-12 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-brand-yellow via-orange-500 to-brand-yellow rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
