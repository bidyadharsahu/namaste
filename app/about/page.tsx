'use client';

import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiTrendingUp } from 'react-icons/fi';
import Image from 'next/image';

export default function AboutPage() {
  const values = [
    {
      icon: FiAward,
      title: 'Excellence',
      description: 'We strive for perfection in every aspect of our service, from vehicle maintenance to customer care.',
    },
    {
      icon: FiHeart,
      title: 'Integrity',
      description: 'Trust and transparency form the foundation of every relationship we build with our clients.',
    },
    {
      icon: FiTrendingUp,
      title: 'Innovation',
      description: 'We continuously evolve to deliver cutting-edge luxury transportation experiences.',
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
            Redefining luxury transportation with unparalleled elegance and service
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
                  Founded with a vision to transform luxury transportation, Namaste Rides has become synonymous with elegance, reliability, and exceptional service. Our journey began with a simple belief: every ride should be an experience to remember.
                </p>
                <p>
                  Today, we serve discerning clients across major cities worldwide, offering a fleet of meticulously maintained luxury vehicles and a team of professional chauffeurs dedicated to exceeding expectations.
                </p>
                <p>
                  From corporate executives to special occasions, we understand that our clients demand nothing but the best. That's why we've built our reputation on three pillars: uncompromising quality, personalized service, and absolute discretion.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] bg-brand-black border border-brand-gold/20"
            >
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-brand-red flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-luxury text-5xl">N</span>
                  </div>
                  <p className="text-brand-gray-light">Luxury Vehicle Image</p>
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
                <div className="relative p-10 bg-brand-gray-dark border border-brand-gold/20 hover:border-brand-gold/60 transition-all duration-500 h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-red to-brand-red-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <value.icon className="w-10 h-10 text-brand-white" />
                  </div>
                  <h3 className="text-3xl font-luxury font-bold text-brand-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-brand-gray-light leading-relaxed text-lg">
                    {value.description}
                  </p>
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-yellow w-0 group-hover:w-full transition-all duration-700"></div>
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
              To provide unparalleled luxury transportation experiences that exceed expectations, combining world-class service with the finest vehicles to create memorable journeys for our distinguished clientele.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
