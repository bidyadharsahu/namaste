'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 50000, suffix: '+', label: 'Rides Completed' },
  { value: 99.8, suffix: '%', label: 'Rider Satisfaction' },
  { value: 15, suffix: '+', label: 'Cities Active' },
  { value: 200, suffix: '+', label: 'Driver Partners' },
];

function CountUpAnimation({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      countRef.current = Math.floor(easeOutQuart * end);
      setCount(countRef.current);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
        setHasAnimated(true);
      }
    };

    updateCount();
  }, [end, duration, hasAnimated]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-brand-black relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-brand-black z-10"></div>
      </div>

      <div className="container-custom relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-luxury font-bold text-brand-white mb-6">
            EXCELLENCE IN <span className="text-gradient-gold">NUMBERS</span>
          </h2>
          <p className="text-xl text-brand-gray-light max-w-3xl mx-auto">
            Our progress reflects our commitment to quality and fairness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                <div className="text-6xl md:text-7xl font-luxury font-bold text-gradient-gold transition-all duration-500 group-hover:scale-110">
                  {inView ? <CountUpAnimation end={stat.value} suffix={stat.suffix} /> : `0${stat.suffix}`}
                </div>
                {/* Decorative underline */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-yellow"></div>
              </div>
              <p className="text-lg text-brand-gray-light font-medium tracking-wide mt-8">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
