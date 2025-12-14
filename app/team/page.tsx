'use client';

import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';

export default function TeamPage() {
  const leadership = [
    {
      name: 'Hariswar',
      title: 'Founder & CEO',
      bio: 'With over 15 years in tech and transportation, Hariswar founded Namaste to bring fairness and transparency to ride-hailing.',
    },
    {
      name: 'Prasad',
      title: 'Chief Operating Officer',
      bio: 'Prasad ensures operational excellence across all cities, maintaining our commitment to driver satisfaction and rider safety.',
    },
    {
      name: 'Bidyadhar',
      title: 'Head of Technology',
      bio: 'Bidyadhar leads our engineering team, building smart systems that make rides safer, faster, and more efficient.',
    },
    {
      name: 'Rajesh',
      title: 'Director of Customer Experience',
      bio: 'Rajesh crafts exceptional experiences for both riders and drivers, ensuring everyone feels valued.',
    },
    {
      name: 'Abinash',
      title: 'Marketing Director',
      bio: 'Abinash drives our marketing strategy and brand presence, connecting Namaste with communities across India.',
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
              OUR <span className="text-brand-yellow">TEAM</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Meet the people behind Namaste Rides
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
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
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guided by vision, driven by excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative mb-6">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-brand-yellow to-orange-500 flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold text-6xl">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-2">
                  {member.name}
                </h3>
                <p className="text-brand-yellow font-semibold mb-4">
                  {member.title}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
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
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented individuals who share our vision of fair, transparent transportation. Join us in building the future of ride-hailing.
            </p>
            <a
              href="mailto:namasterides26@gmail.com"
              className="inline-flex items-center gap-2 px-10 py-4 bg-brand-yellow text-brand-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition-colors duration-300"
            >
              <FiMail className="w-5 h-5" />
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}