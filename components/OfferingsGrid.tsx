'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Offering {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}

interface OfferingsGridProps {
  offerings: Offering[];
}

export default function OfferingsGrid({ offerings }: OfferingsGridProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-charcoal to-brand-charcoal-light text-white" id="offerings">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="text-brand-orange">Offerings</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive mobility solutions designed for modern businesses and cities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={offering.href}
                className="block group h-full"
              >
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-brand-orange transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {offering.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-brand-orange transition-colors">
                    {offering.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {offering.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-brand-orange font-semibold group-hover:gap-3 transition-all">
                    Learn more
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
