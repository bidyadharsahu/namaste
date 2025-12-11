'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FiLinkedin, FiMail } from 'react-icons/fi';

export interface TeamMemberType {
  id: string;
  name: string;
  title: string;
  photo: string;
  bio_short: string;
  bio_long: string;
  linkedin?: string;
}

interface TeamGridProps {
  members: TeamMemberType[];
}

interface TeamModalProps {
  member: TeamMemberType | null;
  onClose: () => void;
}

function TeamModal({ member, onClose }: TeamModalProps) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-display font-bold text-brand-charcoal mb-2">{member.name}</h3>
              <p className="text-xl text-brand-orange mb-4">{member.title}</p>
              <div className="flex gap-3 justify-center md:justify-start">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-brand-orange text-white rounded-full hover:bg-brand-orange-dark transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin size={20} />
                  </a>
                )}
                <a
                  href={`mailto:contact@namasterides.com`}
                  className="p-2 bg-brand-charcoal text-white rounded-full hover:bg-brand-charcoal-light transition-colors"
                  aria-label="Email"
                >
                  <FiMail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {member.bio_long}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function TeamGrid({ members }: TeamGridProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMemberType | null>(null);

  return (
    <>
      <section className="section-padding bg-white" id="team">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-brand-charcoal">
              Meet the <span className="text-brand-orange">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate leaders driving innovation in mobility and transportation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedMember(member)}
                className="group cursor-pointer"
              >
                <div className="relative mb-4">
                  <div className="relative w-full aspect-square rounded-full overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-brand-charcoal mb-1 group-hover:text-brand-orange transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-brand-orange mb-2">{member.title}</p>
                  <p className="text-sm text-gray-600 line-clamp-2">{member.bio_short}</p>
                  
                  {member.linkedin && (
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <FiLinkedin className="inline-block text-brand-orange" size={20} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </>
  );
}
