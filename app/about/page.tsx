'use client';

import { motion } from 'framer-motion';
import { FiHeart, FiShield, FiZap, FiUsers } from 'react-icons/fi';

export default function AboutPage() {
  const values = [
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: 'Fairness',
      description: 'We believe in fair pricing and fair treatment for both riders and drivers.',
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Trust',
      description: 'Building trust through transparency, safety, and reliable service.',
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Using smart technology to make transportation better for everyone.',
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Community',
      description: 'Creating positive impact for riders, drivers, and communities we serve.',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-brand-black">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              WHO <span className="text-brand-yellow">WE ARE</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A next-generation ride-hailing platform built to be fair, transparent, and driver-first
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We started Namaste to solve real challenges in the transport industry: Drivers losing 40–50% to commissions, riders facing surge pricing, and a lack of transparency.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our mission is simple: create a ride-hailing platform that's truly fair for everyone — riders, drivers, and communities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're building a sustainable future for urban mobility, one ride at a time, with technology that empowers rather than exploits.
              </p>
            </motion.div>

            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden bg-gray-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/20 to-orange-500/20"></div>
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <FiUsers className="w-32 h-32" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-yellow mb-6">
                  <div className="text-brand-black">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-brand-black">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              To create a ride-hailing platform that's truly fair for everyone — riders, drivers, and communities. We're building a sustainable future for urban mobility, one ride at a time.
            </p>
            <div className="inline-flex items-center gap-4 text-brand-yellow text-lg font-semibold">
              <span>Driver-First</span>
              <span className="text-gray-600">•</span>
              <span>Rider-Focused</span>
              <span className="text-gray-600">•</span>
              <span>Community-Driven</span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}