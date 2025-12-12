'use client';

import { motion } from 'framer-motion';
import { FiUsers, FiBriefcase, FiShield } from 'react-icons/fi';
import Link from 'next/link';

export default function FleetPage() {
  const vehicles = [
    {
      name: 'Mercedes-Benz S-Class',
      category: 'Executive Sedan',
      capacity: '3 Passengers',
      features: ['Premium leather', 'Climate control', 'Privacy glass', 'WiFi'],
      description: 'The epitome of luxury sedans, perfect for executive travel and special occasions.',
    },
    {
      name: 'Range Rover Autobiography',
      category: 'Luxury SUV',
      capacity: '6 Passengers',
      features: ['Spacious interior', 'All-terrain capability', 'Premium sound', 'Panoramic roof'],
      description: 'Commanding presence with unmatched comfort for both business and leisure.',
    },
    {
      name: 'Rolls-Royce Phantom',
      category: 'Ultra Luxury',
      capacity: '4 Passengers',
      features: ['Bespoke interior', 'Champagne cooler', 'Starlight headliner', 'Supreme comfort'],
      description: 'The ultimate expression of luxury, crafted for the most discerning clientele.',
    },
    {
      name: 'BMW 7 Series',
      category: 'Executive Sedan',
      capacity: '3 Passengers',
      features: ['Executive lounge', 'Massage seats', 'Gesture control', 'Ambient lighting'],
      description: 'German engineering excellence meets sophisticated luxury.',
    },
    {
      name: 'Mercedes-Benz Sprinter',
      category: 'Luxury Van',
      capacity: '12 Passengers',
      features: ['Reclining seats', 'Entertainment system', 'Luggage space', 'USB charging'],
      description: 'Group transportation without compromising on comfort or style.',
    },
    {
      name: 'Bentley Flying Spur',
      category: 'Grand Tourer',
      capacity: '4 Passengers',
      features: ['Handcrafted interior', 'Premium Naim audio', 'Ventilated seats', 'Mood lighting'],
      description: 'British luxury at its finest, combining performance with refined elegance.',
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
            OUR <span className="text-gradient-gold">FLEET</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-gray-light max-w-3xl mx-auto"
          >
            A curated collection of the world's finest automobiles
          </motion.p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-32 bg-brand-gray-dark">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-brand-black border border-brand-gold/20 hover:border-brand-gold/60 transition-all duration-500 overflow-hidden h-full flex flex-col">
                  {/* Image Placeholder */}
                  <div className="relative h-80 bg-brand-gray-dark flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent z-10"></div>
                    <div className="text-center z-0">
                      <div className="w-20 h-20 bg-brand-red flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-luxury text-4xl">N</span>
                      </div>
                      <p className="text-brand-gray-light text-sm">{vehicle.name}</p>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-6 right-6 bg-brand-red px-4 py-2 z-20">
                      <span className="text-white text-xs font-bold tracking-wider">{vehicle.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-3xl font-luxury font-bold text-brand-white mb-2">
                      {vehicle.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-6">
                      <FiUsers className="text-brand-gold" />
                      <span className="text-brand-gray-light text-sm">{vehicle.capacity}</span>
                    </div>

                    <p className="text-brand-gray-light mb-6 leading-relaxed flex-grow">
                      {vehicle.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {vehicle.features.map((feature) => (
                        <div key={feature} className="flex items-center text-brand-gray-light text-sm">
                          <div className="w-1.5 h-1.5 bg-brand-gold mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link 
                      href="/book" 
                      className="text-brand-gold hover:text-brand-yellow transition-colors font-medium tracking-wider text-sm flex items-center group"
                    >
                      BOOK THIS VEHICLE
                      <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </Link>
                  </div>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-yellow w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-brand-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-luxury font-bold text-brand-white mb-6">
              EVERY VEHICLE <span className="text-gradient-gold">INCLUDES</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FiShield,
                title: 'Safety First',
                description: 'Regular maintenance, safety inspections, and comprehensive insurance coverage.',
              },
              {
                icon: FiBriefcase,
                title: 'Professional Chauffeurs',
                description: 'Experienced, vetted drivers trained in luxury service and discretion.',
              },
              {
                icon: FiUsers,
                title: 'Personalized Service',
                description: 'Customized amenities and preferences tailored to your requirements.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-brand-red to-brand-red-dark flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-brand-white" />
                </div>
                <h3 className="text-2xl font-luxury font-bold text-brand-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-brand-gray-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-gray-dark">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-luxury font-bold text-brand-white mb-6">
              READY TO <span className="text-gradient-gold">RIDE?</span>
            </h2>
            <p className="text-xl text-brand-gray-light max-w-3xl mx-auto mb-12">
              Choose your perfect vehicle and book your luxury experience today.
            </p>
            <Link href="/book" className="btn btn-primary text-lg px-10 py-5">
              BOOK NOW
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
