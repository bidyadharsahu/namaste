'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface AboutHeroProps {
  title: string;
  subtitle: string;
  ctas: Array<{ label: string; href: string; primary?: boolean }>;
  media: {
    type: 'video' | 'image';
    src: string;
    poster?: string;
  };
}

export default function AboutHero({ title, subtitle, ctas, media }: AboutHeroProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'team', label: 'Team' },
    { id: 'offerings', label: 'Offerings' },
    { id: 'how-we-work', label: 'How We Work' },
    { id: 'newsroom-preview', label: 'Newsroom' },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {media.type === 'video' ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={media.poster}
            className="w-full h-full object-cover object-[center_20%] md:object-[center_30%]"
          >
            <source src={media.src} type="video/mp4" />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${media.src})` }}
          />
        )}
        {/* Dark overlay */}
        <div className="gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {title.split(' — ').map((part, index) => (
              <span key={index}>
                {part}
                {index === 0 && <span className="text-brand-orange"> — </span>}
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {ctas.map((cta, index) => (
              <Link
                key={index}
                href={cta.href}
                className={`${cta.primary ? 'btn btn-primary' : 'btn btn-secondary'} text-lg px-8 py-4`}
              >
                {cta.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Anchor Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-0 right-0"
        >
          <div className="flex flex-wrap justify-center gap-4 px-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300"
              >
                {section.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}