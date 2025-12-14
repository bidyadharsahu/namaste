'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiBriefcase, FiNavigation, FiUsers, FiSettings } from 'react-icons/fi';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: &lt;FiMapPin className="w-8 h-8" /&gt;,
      title: 'Daily Rides',
      description: 'Commute to work, run errands, or meet friends — anytime, anywhere.',
    },
    {
      icon: &lt;FiClock className="w-8 h-8" /&gt;,
      title: 'Airport Transfers',
      description: 'Reliable pickups and drop-offs for your flights, with real-time tracking.',
    },
    {
      icon: &lt;FiBriefcase className="w-8 h-8" /&gt;,
      title: 'Office &amp; Corporate Commutes',
      description: 'Regular pickups, dedicated support, and invoicing for teams.',
    },
    {
      icon: &lt;FiNavigation className="w-8 h-8" /&gt;,
      title: 'Intercity Travel',
      description: 'Long-distance trips made comfortable and affordable.',
    },
    {
      icon: &lt;FiUsers className="w-8 h-8" /&gt;,
      title: 'Shared Rides',
      description: 'Save money by sharing your ride with others heading the same way.',
    },
    {
      icon: &lt;FiSettings className="w-8 h-8" /&gt;,
      title: 'Custom Solutions',
      description: 'Tailored transportation solutions for your unique needs.',
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
              WHAT &lt;span className="text-brand-yellow"&gt;WE DO&lt;/span&gt;
            &lt;/h1&gt;
            &lt;p className="text-xl text-gray-300 leading-relaxed"&gt;
              From daily commutes to special trips, we've got you covered
            &lt;/p&gt;
          &lt;/motion.div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* Services Grid */}
      &lt;section className="py-20"&gt;
        &lt;div className="container-custom"&gt;
          &lt;motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          &gt;
            &lt;h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4"&gt;
              Our Services
            &lt;/h2&gt;
            &lt;p className="text-lg text-gray-600 max-w-2xl mx-auto"&gt;
              Choose the ride that fits your needs
            &lt;/p&gt;
          &lt;/motion.div&gt;

          &lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"&gt;
            {services.map((service, index) =&gt; (
              &lt;motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              &gt;
                &lt;div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-yellow mb-6 group-hover:scale-110 transition-transform duration-300"&gt;
                  &lt;div className="text-brand-black"&gt;{service.icon}&lt;/div&gt;
                &lt;/div&gt;
                &lt;h3 className="text-2xl font-bold text-brand-black mb-4"&gt;
                  {service.title}
                &lt;/h3&gt;
                &lt;p className="text-gray-600 leading-relaxed"&gt;
                  {service.description}
                &lt;/p&gt;
              &lt;/motion.div&gt;
            ))}
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* CTA Section */}
      &lt;section className="py-20 bg-gray-50"&gt;
        &lt;div className="container-custom"&gt;
          &lt;motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          &gt;
            &lt;h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6"&gt;
              Ready to Get Started?
            &lt;/h2&gt;
            &lt;p className="text-xl text-gray-600 mb-8"&gt;
              Experience better rides with Namaste today
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
