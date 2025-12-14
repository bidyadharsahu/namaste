'use client';

import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '24/7 Support'],
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email',
      details: ['namasterides26@gmail.com', 'support@namasterides.com'],
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Office',
      details: ['123 Transport Avenue', 'San Francisco, CA 94102'],
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['24/7 Rides Available', 'Office: Mon-Fri 9AM-6PM'],
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
              GET IN <span className="text-brand-yellow">TOUCH</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're here to assist you 24/7. Reach out anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-brand-black mb-8">
                Contact Information
              </h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-brand-yellow flex items-center justify-center text-brand-black">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-black mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-brand-black mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-brand-yellow transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-brand-yellow transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-brand-yellow transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-brand-yellow transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-brand-yellow text-brand-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition-colors duration-300"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How do I book a ride?',
                a: 'Simply visit our booking page, enter your pickup and drop-off locations, choose your vehicle, and confirm your ride.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, debit cards, and digital wallets for your convenience.',
              },
              {
                q: 'Is Namaste available 24/7?',
                a: 'Yes! Our rides are available 24 hours a day, 7 days a week in all our service cities.',
              },
              {
                q: 'How are drivers vetted?',
                a: 'All drivers undergo thorough background checks, vehicle inspections, and training before joining Namaste.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-brand-black mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
