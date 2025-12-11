'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

interface HowItWorksProps {
  steps: Step[];
}

export default function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className="section-padding bg-white" id="how-we-work">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-brand-charcoal">
            How We <span className="text-brand-orange">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, seamless, and scalable solutions for your business transportation needs.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange/20 via-brand-orange to-brand-orange/20" 
               style={{ top: '80px' }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step number circle */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4 text-brand-orange">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-display font-bold mb-3 text-brand-charcoal">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn btn-primary text-lg">
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
