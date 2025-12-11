'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureBulletsProps {
  items: Array<{
    icon: ReactNode;
    title: string;
    description: string;
  }>;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export default function FeatureBullets({ items, testimonial }: FeatureBulletsProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white" id="about">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-brand-charcoal">
            Why We <span className="text-brand-orange">Ride</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on trust, powered by innovation, and driven by our commitment to make every journey exceptional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-xl flex items-center justify-center mb-6 text-white">
                {item.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-brand-charcoal">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {testimonial && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-charcoal text-white p-8 md:p-12 rounded-2xl max-w-4xl mx-auto"
          >
            <div className="relative">
              <svg className="absolute -top-4 -left-4 w-12 h-12 text-brand-orange opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl md:text-2xl italic mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-brand-yellow">{testimonial.author}</p>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
