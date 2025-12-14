'use client';

import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiTrendingUp } from 'react-icons/fi';

export default function AboutPage() {
  const values = [
    {
      icon: FiAward,
      title: 'Fairness',
      description: 'We ensure drivers earn more and riders always see honest pricing.',
    },
    {
      icon: FiHeart,
      title: 'Trust',
      description: 'Every ride includes verified drivers and insurance protection.',
    },
    {
      icon: FiTrendingUp,
      title: 'Innovation',
      description: 'Smart systems, live tracking, route intelligence, and efficient operations.',
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-black">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-luxury font-bold text-brand-white mb-6"
          >
            ABOUT <span className="text-gradient-gold">NAMASTE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-gray-light max-w-3xl mx-auto"
          >
            Built to transform ride-hailing with fairness and transparency
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-brand-gray-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-luxury font-bold text-brand-white mb-8">
                OUR <span className="text-gradient-gold">STORY</span>
              </h2>
              <div className="space-y-6 text-brand-gray-light text-lg leading-relaxed">
                <p>
                  We started Namaste to solve real challenges in the transport industry: Drivers losing 40–50% to commissions, riders facing surge pricing, no built-in insurance protection, lack of transparency, and inconsistent ride reliability.
                </p>
                <p>
                  Namaste changes this. We focus on fairness, safety, and technology-driven transparency. Drivers earn more. Riders pay fair rates. Everyone is protected.
                </p>
                <p>
                  Today we operate across major Indian and US cities — and we are just getting started. Our mission is to build a ride-hailing ecosystem where drivers thrive, riders feel safe, and mobility is transparent for all.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] bg-brand-black border border-brand-yellow/20 rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-brand-black font-luxury text-5xl">N</span>
                  </div>
                  <p className="text-brand-gray-light">Company Image</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-brand-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-luxury font-bold text-brand-white mb-6">
              OUR <span className="text-gradient-gold">VALUES</span>
            </h2>
            <p className="text-xl text-brand-gray-light max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-10 bg-brand-gray-dark border border-brand-yellow/20 hover:border-brand-yellow/60 transition-all duration-500 h-full rounded-3xl">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-yellow to-brand-yellow-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <value.icon className="w-10 h-10 text-brand-black" />
                  </div>
                  <h3 className="text-3xl font-luxury font-bold text-brand-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-brand-gray-light leading-relaxed text-lg">
                    {value.description}
                  </p>
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-yellow via-brand-yellow-light to-brand-yellow-dark w-0 group-hover:w-full transition-all duration-700 rounded-b-3xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-brand-gray-dark">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-luxury font-bold text-brand-white mb-8 leading-tight">
              OUR <span className="text-gradient-gold">MISSION</span>
            </h2>
            <p className="text-2xl md:text-3xl text-brand-gray-light font-light leading-relaxed">
              To build a ride-hailing ecosystem where drivers thrive, riders feel safe, and mobility is transparent for all.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
