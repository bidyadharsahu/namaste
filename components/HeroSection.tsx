'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-top"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-brand-black/70"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            REDEFINING THE WAY
            <br />
            <span className="text-brand-yellow">YOU RIDE</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Namaste is a next generation ride hailing platform built to be fair,
            <br />
            transparent, and driver first
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}