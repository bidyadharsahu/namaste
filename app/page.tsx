'use client';

import HeroSection from '@/components/HeroSection';
import { motion } from 'framer-motion';
import { FiShield, FiUsers, FiClock, FiTrendingUp } from 'react-icons/fi';
import Link from 'next/link';

export default function HomePage() {
  const features = [
    {
      icon: &lt;FiShield className="w-8 h-8" /&gt;,
      title: 'Safety First',
      description: 'Every ride on Namaste is powered by trust, fairness, and smart technology.',
    },
    {
      icon: &lt;FiUsers className="w-8 h-8" /&gt;,
      title: 'Better for Drivers',
      description: 'We keep commissions low so drivers earn more on every trip.',
    },
    {
      icon: &lt;FiClock className="w-8 h-8" /&gt;,
      title: 'Available Anytime',
      description: 'Request a ride 24/7, from daily commutes to late-night trips.',
    },
    {
      icon: &lt;FiTrendingUp className="w-8 h-8" /&gt;,
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
    &lt;main&gt;
      &lt;HeroSection /&gt;

      {/* Features Section */}
      &lt;section className="py-20 bg-white"&gt;
        &lt;div className="container-custom"&gt;
          &lt;motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          &gt;
            &lt;h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4"&gt;
              Why Choose Namaste
            &lt;/h2&gt;
            &lt;p className="text-lg text-gray-600 max-w-2xl mx-auto"&gt;
              Experience a ride-hailing platform that puts people first
            &lt;/p&gt;
          &lt;/motion.div&gt;

          &lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"&gt;
            {features.map((feature, index) =&gt; (
              &lt;motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              &gt;
                &lt;div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-brand-yellow mb-6 group-hover:scale-110 transition-transform duration-300"&gt;
                  &lt;div className="text-brand-black"&gt;{feature.icon}&lt;/div&gt;
                &lt;/div&gt;
                &lt;h3 className="text-xl font-bold text-brand-black mb-3"&gt;
                  {feature.title}
                &lt;/h3&gt;
                &lt;p className="text-gray-600 leading-relaxed"&gt;{feature.description}&lt;/p&gt;
              &lt;/motion.div&gt;
            ))}
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* Stats Section */}
      &lt;section className="py-20 bg-brand-black"&gt;
        &lt;div className="container-custom"&gt;
          &lt;div className="grid grid-cols-2 lg:grid-cols-4 gap-8"&gt;
            {stats.map((stat, index) =&gt; (
              &lt;motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              &gt;
                &lt;div className="text-4xl md:text-5xl font-bold text-brand-yellow mb-2"&gt;
                  {stat.number}
                &lt;/div&gt;
                &lt;div className="text-gray-400 text-sm md:text-base"&gt;{stat.label}&lt;/div&gt;
              &lt;/motion.div&gt;
            ))}
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* CTA Section */}
      &lt;section className="py-20 bg-white"&gt;
        &lt;div className="container-custom"&gt;
          &lt;motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          &gt;
            &lt;h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6"&gt;
              Ready to Experience Better Rides?
            &lt;/h2&gt;
            &lt;p className="text-lg text-gray-600 mb-8"&gt;
              Join thousands of satisfied riders and drivers who have made the switch to Namaste.
            &lt;/p&gt;
            &lt;Link
              href="/book"
              className="inline-block px-10 py-4 bg-brand-yellow text-brand-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition-colors duration-300"
            &gt;
              TAKE A RIDE
            &lt;/Link&gt;
          &lt;/motion.div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
    &lt;/main&gt;
  );
}
