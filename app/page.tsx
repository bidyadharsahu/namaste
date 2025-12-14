'use client';

import HeroSection from '@/components/HeroSection';
import { motion } from 'framer-motion';
import { FiShield, FiUsers, FiClock, FiTrendingUp } from 'react-icons/fi';
import Link from 'next/link';

export default function HomePage() {
  const features = [
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Safety First',
      description: 'Every ride on Namaste is powered by trust, fairness, and smart technology.',
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Better for Drivers',
      description: 'We keep commissions low so drivers earn more on every trip.',
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: 'Available Anytime',
      description: 'Request a ride 24/7, from daily commutes to late-night trips.',
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Growing Worldwide',
      description: 'Now available in 15+ cities and expanding every month.',
    },
  ];

  const stats = [
    { number: '50,000+', label: 'Rides Completed' },
    { number: '99.8%', label: 'Customer Satisfaction' },
    { number: '15+', label: 'Cities Served' },
    { number: '200+', label: 'Active Drivers' },
  ];

  return (
    <main>
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
              Why Choose Namaste
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience a ride hailing platform that puts people first
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-brand-yellow mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-brand-black">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-black">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-brand-yellow mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
              Ready to Experience Better Rides?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of satisfied riders and drivers who have made the switch to Namaste.
            </p>
            <a
              href="https://namasterides.vercel.app/home"
              className="inline-block px-10 py-4 bg-brand-yellow text-brand-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition-colors duration-300"
            >
              TAKE A RIDE
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}