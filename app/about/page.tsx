'use client';

import { motion } from 'framer-motion';
import { FiHeart, FiShield, FiZap, FiUsers } from 'react-icons/fi';

export default function AboutPage() {
  const values = [
    {
      icon: &lt;FiHeart className="w-8 h-8" /&gt;,
      title: 'Fairness',
      description: 'We believe in fair pricing and fair treatment for both riders and drivers.',
    },
    {
      icon: &lt;FiShield className="w-8 h-8" /&gt;,
      title: 'Trust',
      description: 'Building trust through transparency, safety, and reliable service.',
    },
    {
      icon: &lt;FiZap className="w-8 h-8" /&gt;,
      title: 'Innovation',
      description: 'Using smart technology to make transportation better for everyone.',
    },
    {
      icon: &lt;FiUsers className="w-8 h-8" /&gt;,
      title: 'Community',
      description: 'Creating positive impact for riders, drivers, and communities we serve.',
    },
  ];

  return (
    &lt;main className="min-h-screen bg-white"&gt;
      {/* Hero Section */}
      &lt;section className="pt-32 pb-20 bg-brand-black"&gt;
        &lt;div className="container-custom"&gt;
          &lt;motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          &gt;
            &lt;h1 className="text-5xl md:text-7xl font-bold text-white mb-6"&gt;
              WHO &lt;span className="text-brand-yellow"&gt;WE ARE&lt;/span&gt;
            &lt;/h1&gt;
            &lt;p className="text-xl text-gray-300 leading-relaxed"&gt;
              A next-generation ride-hailing platform built to be fair, transparent, and driver-first
            &lt;/p&gt;
          &lt;/motion.div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* Story Section */}
      &lt;section className="py-20"&gt;
        &lt;div className="container-custom"&gt;
          &lt;div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"&gt;
            &lt;motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            &gt;
              &lt;h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6"&gt;
                Our Story
              &lt;/h2&gt;
              &lt;p className="text-lg text-gray-600 leading-relaxed mb-6"&gt;
                We started Namaste to solve real challenges in the transport industry: Drivers losing 40–50% to commissions, riders facing surge pricing, and a lack of transparency.
              &lt;/p&gt;
              &lt;p className="text-lg text-gray-600 leading-relaxed mb-6"&gt;
                Our mission is simple: create a ride-hailing platform that's truly fair for everyone — riders, drivers, and communities.
              &lt;/p&gt;
              &lt;p className="text-lg text-gray-600 leading-relaxed"&gt;
                We're building a sustainable future for urban mobility, one ride at a time, with technology that empowers rather than exploits.
              &lt;/p&gt;
            &lt;/motion.div&gt;

            &lt;motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden bg-gray-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            &gt;
              &lt;div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/20 to-orange-500/20"&gt;&lt;/div&gt;
              {/* Placeholder for image */}
              &lt;div className="absolute inset-0 flex items-center justify-center text-gray-400"&gt;
                &lt;FiUsers className="w-32 h-32" /&gt;
              &lt;/div&gt;
            &lt;/motion.div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* Values Section */}
      &lt;section className="py-20 bg-gray-50"&gt;
        &lt;div className="container-custom"&gt;
          &lt;motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          &gt;
            &lt;h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4"&gt;
              Our Core Values
            &lt;/h2&gt;
            &lt;p className="text-lg text-gray-600 max-w-2xl mx-auto"&gt;
              These principles guide everything we do
            &lt;/p&gt;
          &lt;/motion.div&gt;

          &lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"&gt;
            {values.map((value, index) =&gt; (
              &lt;motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              &gt;
                &lt;div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-yellow mb-6"&gt;
                  &lt;div className="text-brand-black"&gt;{value.icon}&lt;/div&gt;
                &lt;/div&gt;
                &lt;h3 className="text-xl font-bold text-brand-black mb-3"&gt;
                  {value.title}
                &lt;/h3&gt;
                &lt;p className="text-gray-600 leading-relaxed"&gt;
                  {value.description}
                &lt;/p&gt;
              &lt;/motion.div&gt;
            ))}
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* Mission Section */}
      &lt;section className="py-20 bg-brand-black"&gt;
        &lt;div className="container-custom"&gt;
          &lt;motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          &gt;
            &lt;h2 className="text-4xl md:text-5xl font-bold text-white mb-6"&gt;
              Our Mission
            &lt;/h2&gt;
            &lt;p className="text-xl text-gray-300 leading-relaxed mb-8"&gt;
              To create a ride-hailing platform that's truly fair for everyone — riders, drivers, and communities. We're building a sustainable future for urban mobility, one ride at a time.
            &lt;/p&gt;
            &lt;div className="inline-flex items-center gap-4 text-brand-yellow text-lg font-semibold"&gt;
              &lt;span&gt;Driver-First&lt;/span&gt;
              &lt;span className="text-gray-600"&gt;•&lt;/span&gt;
              &lt;span&gt;Rider-Focused&lt;/span&gt;
              &lt;span className="text-gray-600"&gt;•&lt;/span&gt;
              &lt;span&gt;Community-Driven&lt;/span&gt;
            &lt;/div&gt;
          &lt;/motion.div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
    &lt;/main&gt;
  );
}
