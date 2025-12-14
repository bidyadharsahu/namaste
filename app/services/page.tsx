'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiStar, FiMapPin, FiCalendar, FiUsers, FiGlobe } from 'react-icons/fi';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: FiBriefcase,
      title: 'Daily Rides',
      description: 'Convenient and affordable rides for everyday travel.',
      features: ['Quick booking', 'Fair pricing', 'Verified drivers', 'GPS tracking'],
    },
    {
      icon: FiStar,
      title: 'Airport Transfers',
      description: 'Timely, stress-free rides to and from airports.',
      features: ['Flight tracking', 'Meet & greet', 'Luggage assistance', 'On-time guarantee'],
    },
    {
      icon: FiMapPin,
      title: 'Office & Corporate Commutes',
      description: 'Reliable transport solutions tailored for employees and companies.',
      features: ['Corporate accounts', 'Monthly billing', 'Route optimization', 'Dedicated support'],
    },
    {
      icon: FiCalendar,
      title: 'Intercity Travel',
      description: 'Comfortable long-distance rides at predictable, fair pricing.',
      features: ['Fixed pricing', 'Comfortable vehicles', 'Experienced drivers', 'Flexible stops'],
    },
    {
      icon: FiUsers,
      title: 'Shared Rides',
      description: 'Cost-effective trips for riders traveling in the same direction. (Coming Soon)',
      features: ['Save money', 'Eco-friendly', 'Meet new people', 'Smart matching'],
    },
    {
      icon: FiGlobe,
      title: 'Custom Solutions',
      description: 'Tailored transportation packages for your specific needs.',
      features: ['Event transport', 'Group bookings', 'Special occasions', 'Custom routing'],
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
            OUR <span className="text-gradient-gold">SERVICES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-gray-light max-w-3xl mx-auto"
          >
            Comprehensive luxury transportation solutions tailored to your needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-brand-gray-dark">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-8 bg-brand-black border border-brand-yellow/20 hover:border-brand-yellow/60 transition-all duration-500 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow to-brand-yellow-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-8 h-8 text-brand-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-luxury font-bold text-brand-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray-light mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-brand-gray-light text-sm">
                        <div className="w-1.5 h-1.5 bg-brand-yellow mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-yellow via-brand-yellow to-brand-yellow w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-black">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-luxury font-bold text-brand-white mb-6">
              READY TO <span className="text-gradient-gold">BOOK?</span>
            </h2>
            <p className="text-xl text-brand-gray-light max-w-3xl mx-auto mb-12">
              Contact us today to discuss your transportation needs and experience the Namaste difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/book" className="btn btn-primary text-lg px-10 py-5">
                BOOK NOW
              </Link>
              <Link href="/contact" className="btn btn-secondary text-lg px-10 py-5">
                CONTACT US
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
