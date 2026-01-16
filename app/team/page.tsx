'use client';

import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import Image from 'next/image';

function TeamMemberCard({ member, index }: { member: { name: string; title: string; bio: string; photo: string }; index: number }) {
  return (
    <motion.div
      className="text-center group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative mb-6">
        <div className="w-48 h-48 rounded-full overflow-hidden mx-auto group-hover:scale-105 transition-transform duration-300 shadow-lg">
          <Image
            src={member.photo}
            alt={member.name}
            width={192}
            height={192}
            className="object-cover w-full h-full"
            unoptimized
          />
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
  );
}

export default function TeamPage() {
  const leadership = [
    {
      name: 'Harishwar Reddy Nakka',
      title: 'Founder & CEO',
      bio: 'Harishwar leads Namaste with a clear vision to build a reliable, people-first mobility platform. As a hands-on founder, he drives product direction, partnerships, and long-term strategy while learning and evolving alongside the team.',
      photo: '/images/team/harishwar.jpg',
    },
    {
      name: 'Prasad Kalangi',
      title: 'Co-Founder',
      bio: 'Prasad supports the core operations and planning of Namaste. He works closely with the founding team to turn ideas into action, helping shape the foundation of the startup as it grows city by city.',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Talagana Rajesh',
      title: 'Full Stack Developer',
      bio: 'Rajesh focuses on building and improving the Namaste platform end-to-end. From frontend to backend, he helps turn concepts into working features while continuously learning and adapting to startup challenges.',
      photo: '/images/team/rajesh.jpg',
    },
    {
      name: 'Bidyadhar Sahu',
      title: 'Cloud Developer & R&D',
      bio: 'Bidyadhar works on cloud infrastructure, scalability, and research-driven solutions. He experiments with new technologies to make the platform more efficient, secure, and ready for future growth.',
      photo: '/images/team/bidyadhar.jpg',
    },
    {
      name: 'Abinash Singh',
      title: 'Application & Android Developer',
      bio: 'Abinash develops and maintains the Namaste mobile application. He focuses on creating smooth, user-friendly app experiences while learning how to build scalable apps in a fast-moving startup environment.',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
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
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {leadership.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
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