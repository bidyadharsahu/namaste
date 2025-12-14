'use client';

import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    },
    {
      icon: FiMail,
      title: 'Email',
      details: ['namasterides26@gmail.com', 'support@namasterides.com'],
    },
    {
      icon: FiMapPin,
      title: 'Office',
      details: ['123 Luxury Drive', 'San Francisco, CA 94102'],
    },
    {
      icon: FiClock,
      title: 'Hours',
      details: ['24/7 Service Available', 'Office: Mon-Fri 9AM-6PM'],
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
            CONTACT <span className="text-gradient-gold">US</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-gray-light max-w-3xl mx-auto"
          >
            We're here to assist you 24/7. Reach out to experience luxury.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-32 bg-brand-gray-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-luxury font-bold text-brand-white mb-8">
                SEND US A <span className="text-gradient-gold">MESSAGE</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-brand-gray-light mb-2 text-sm uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-black border border-brand-yellow/20 focus:border-brand-yellow px-6 py-4 text-brand-white placeholder-brand-gray-light transition-colors outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-brand-gray-light mb-2 text-sm uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-black border border-brand-yellow/20 focus:border-brand-yellow px-6 py-4 text-brand-white placeholder-brand-gray-light transition-colors outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-brand-gray-light mb-2 text-sm uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-brand-black border border-brand-yellow/20 focus:border-brand-yellow px-6 py-4 text-brand-white placeholder-brand-gray-light transition-colors outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-brand-gray-light mb-2 text-sm uppercase tracking-wider">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-brand-black border border-brand-yellow/20 focus:border-brand-yellow px-6 py-4 text-brand-white transition-colors outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="corporate">Corporate Transportation</option>
                    <option value="events">Special Events</option>
                    <option value="airport">Airport Services</option>
                    <option value="rental">Long-Term Rental</option>
                    <option value="group">Group Transportation</option>
                    <option value="tours">City Tours</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-brand-gray-light mb-2 text-sm uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-brand-black border border-brand-yellow/20 focus:border-brand-yellow px-6 py-4 text-brand-white placeholder-brand-gray-light transition-colors outline-none resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full text-lg py-5">
                  SEND MESSAGE
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-luxury font-bold text-brand-white mb-8">
                  GET IN <span className="text-gradient-gold">TOUCH</span>
                </h2>
                <p className="text-brand-gray-light text-lg leading-relaxed mb-12">
                  Whether you have a question about our services, pricing, or anything else, 
                  our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-6 p-6 bg-brand-black border border-brand-yellow/20 hover:border-brand-yellow/60 transition-all duration-500 group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-yellow to-brand-yellow-dark flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <info.icon className="w-7 h-7 text-brand-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-luxury font-bold text-brand-white mb-3">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-brand-gray-light mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="h-80 bg-brand-black border border-brand-yellow/20 flex items-center justify-center mt-8">
                <p className="text-brand-gray-light">Interactive Map</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-brand-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-luxury font-bold text-brand-white mb-6">
              FREQUENTLY ASKED <span className="text-gradient-gold">QUESTIONS</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'How far in advance should I book?',
                answer: 'We recommend booking at least 24-48 hours in advance for regular services. For special events or peak seasons, booking a week ahead is advisable.',
              },
              {
                question: 'Do you offer airport meet and greet services?',
                answer: 'Yes, our chauffeurs will meet you at arrivals with a name sign and assist with your luggage.',
              },
              {
                question: 'What is your cancellation policy?',
                answer: 'Cancellations made 24 hours before the scheduled pickup receive a full refund. Cancellations within 24 hours are subject to a 50% fee.',
              },
              {
                question: 'Are your vehicles insured?',
                answer: 'All our vehicles carry comprehensive commercial insurance coverage for your peace of mind.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-brand-gray-dark border border-brand-yellow/20 hover:border-brand-yellow/60 transition-all duration-500"
              >
                <h3 className="text-2xl font-luxury font-bold text-brand-white mb-4">
                  {faq.question}
                </h3>
                <p className="text-brand-gray-light leading-relaxed text-lg">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
