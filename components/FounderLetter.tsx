'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface FounderLetterProps {
  photo: string;
  name: string;
  title: string;
  paragraphs: string[];
  signatureSvg?: string;
}

export default function FounderLetter({ photo, name, title, paragraphs, signatureSvg }: FounderLetterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="section-padding bg-white" id="founder">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={photo}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange rounded-full opacity-20 blur-3xl" />
          </motion.div>

          {/* Right - Letter */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-brand-charcoal">
              A Letter from our <span className="text-brand-orange">CEO</span>
            </h2>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              {paragraphs.slice(0, 3).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              {signatureSvg && (
                <div className="mb-4">
                  <img src={signatureSvg} alt="Signature" className="h-16" />
                </div>
              )}
              <p className="font-semibold text-brand-charcoal text-xl">{name}</p>
              <p className="text-gray-600">{title}</p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 text-brand-orange font-semibold hover:text-brand-orange-dark transition-colors flex items-center gap-2"
            >
              Read full letter
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Modal for full letter */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setIsModalOpen(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-3xl font-display font-bold mb-6 text-brand-charcoal">Letter from {name}</h3>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              {signatureSvg && (
                <div className="mb-4">
                  <img src={signatureSvg} alt="Signature" className="h-16" />
                </div>
              )}
              <p className="font-semibold text-brand-charcoal text-xl">{name}</p>
              <p className="text-gray-600">{title}</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
