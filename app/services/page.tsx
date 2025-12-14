'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiBriefcase, FiNavigation, FiUsers, FiSettings } from 'react-icons/fi';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: <FiMapPin className="w-8 h-8" />,
      title: 'Daily Rides',
      description: 'Commute to work, run errands, or meet friends — anytime, anywhere.',
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: 'Airport Transfers',
      description: 'Reliable pickups and drop-offs for your flights, with real-time tracking.',
    },
    {
      icon: <FiBriefcase className="w-8 h-8" />,
      title: 'Office & Corporate Commutes',
      description: 'Regular pickups, dedicated support, and invoicing for teams.',
    },
    {
      icon: <FiNavigation className="w-8 h-8" />,
      title: 'Intercity Travel',
      description: 'Long-distance trips made comfortable and affordable.',
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Shared Rides',
      description: 'Save money by sharing your ride with others heading the same way.',
    },
    {
      icon: <FiSettings className="w-8 h-8" />,
      title: 'Custom Solutions',
      description: 'Tailored transportation solutions for your unique needs.',
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
              WHAT <span className="text-brand-yellow">WE DO</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From daily commutes to special trips, we've got you covered
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the ride that fits your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-yellow mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-brand-black">{service.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience better rides with Namaste today
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