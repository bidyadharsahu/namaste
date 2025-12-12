'use client';

import { motion } from 'framer-motion';
import { FiLinkedin, FiMail } from 'react-icons/fi';

export default function TeamPage() {
  const leadership = [
    {
      name: 'Rajesh Kumar',
      title: 'Founder & CEO',
      bio: 'With over 20 years in luxury hospitality, Rajesh founded Namaste Rides to bring world-class transportation to discerning clients.',
      email: 'rajesh@namasterides.com',
    },
    {
      name: 'Priya Sharma',
      title: 'Chief Operating Officer',
      bio: 'Priya ensures operational excellence across all touchpoints, maintaining our commitment to unparalleled service.',
      email: 'priya@namasterides.com',
    },
    {
      name: 'Michael Chen',
      title: 'Head of Fleet Management',
      bio: 'Michael\'s expertise in luxury automotive care ensures every vehicle meets the highest standards of excellence.',
      email: 'michael@namasterides.com',
    },
    {
      name: 'Sarah Williams',
      title: 'Director of Client Experience',
      bio: 'Sarah leads our customer service team, crafting personalized experiences that exceed expectations.',
      email: 'sarah@namasterides.com',
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
            OUR <span className="text-gradient-gold">TEAM</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-gray-light max-w-3xl mx-auto"
          >
            Meet the exceptional people behind Namaste Rides
          </motion.p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 bg-brand-gray-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-luxury font-bold text-brand-white mb-6">
              LEADERSHIP <span className="text-gradient-gold">TEAM</span>
            </h2>
            <p className="text-xl text-brand-gray-light max-w-3xl mx-auto">
              Guided by vision, driven by excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-brand-black border border-brand-gold/20 hover:border-brand-gold/60 transition-all duration-500 overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="relative h-96 bg-brand-gray-dark flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-brand-red to-brand-red-dark rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-luxury text-5xl">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-3xl font-luxury font-bold text-brand-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-brand-gold text-sm uppercase tracking-widest mb-6">
                      {member.title}
                    </p>
                    <p className="text-brand-gray-light mb-6 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Contact */}
                    <div className="flex items-center gap-4">
                      <a 
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-brand-gray-light hover:text-brand-gold transition-colors"
                      >
                        <FiMail size={18} />
                        <span className="text-sm">Contact</span>
                      </a>
                      <a 
                        href="#"
                        className="flex items-center gap-2 text-brand-gray-light hover:text-brand-gold transition-colors"
                      >
                        <FiLinkedin size={18} />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                    </div>
                  </div>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-yellow w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-32 bg-brand-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-luxury font-bold text-brand-white mb-8">
                OUR <span className="text-gradient-gold">CULTURE</span>
              </h2>
              <div className="space-y-6 text-brand-gray-light text-lg leading-relaxed">
                <p>
                  At Namaste Rides, we believe our team is our greatest asset. We've cultivated a culture of excellence where every team member is empowered to deliver exceptional service.
                </p>
                <p>
                  From our chauffeurs to our management team, everyone shares a common passion: creating unforgettable luxury experiences for our clients.
                </p>
                <p>
                  We invest in continuous training, celebrate innovation, and maintain the highest standards of professionalism and integrity in everything we do.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                { stat: '150+', label: 'Team Members' },
                { stat: '50+', label: 'Professional Chauffeurs' },
                { stat: '15+', label: 'Years Average Experience' },
                { stat: '99%', label: 'Employee Satisfaction' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-6 p-6 bg-brand-gray-dark border-l-4 border-brand-gold"
                >
                  <div className="text-5xl font-luxury font-bold text-gradient-gold min-w-[120px]">
                    {item.stat}
                  </div>
                  <div className="text-brand-gray-light text-lg">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-32 bg-brand-gray-dark">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-luxury font-bold text-brand-white mb-6">
              JOIN OUR <span className="text-gradient-gold">TEAM</span>
            </h2>
            <p className="text-xl text-brand-gray-light max-w-3xl mx-auto mb-12">
              We're always looking for exceptional talent to join our growing team.
            </p>
            <a href="/careers" className="btn btn-primary text-lg px-10 py-5">
              VIEW CAREERS
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
