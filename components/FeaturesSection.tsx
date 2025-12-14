'use client';

import { motion } from 'framer-motion';
import { FiShield, FiClock, FiStar, FiMapPin } from 'react-icons/fi';

const features = [
  {
    icon: FiShield,
    title: 'Safety First',
    description: 'Verified drivers, insured rides, and GPS-based tracking for dependable journeys.',
  },
  {
    icon: FiStar,
    title: 'Better for Drivers',
    description: 'With only 8–10% commission, drivers earn more — ensuring a stronger, more reliable network.',
  },
  {
    icon: FiClock,
    title: 'Available Anytime',
    description: 'Rides you can depend on, available 24/7 in supported cities.',
  },
  {
    icon: FiMapPin,
    title: 'Growing Worldwide',
    description: 'Expanding across major cities in India and the USA, with more regions coming soon.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-32 bg-brand-gray-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-yellow/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full filter blur-3xl"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-luxury font-bold text-brand-white mb-6">
            EVERY RIDE POWERED BY <span className="text-gradient-gold">TRUST</span>
          </h2>
          <p className="text-xl text-brand-gray-light max-w-3xl mx-auto">
            Every ride on Namaste is powered by trust, fairness, and smart technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-8 bg-brand-black border border-brand-yellow/20 hover:border-brand-yellow/60 transition-all duration-500 h-full rounded-3xl">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-brand-yellow-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-8 h-8 text-brand-black" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-luxury font-bold text-brand-white mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-brand-gray-light leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-yellow via-brand-yellow-light to-brand-yellow-dark w-0 group-hover:w-full transition-all duration-700 rounded-b-3xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
