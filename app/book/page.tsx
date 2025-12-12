'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCalendar, FiClock, FiMapPin, FiUser, FiPhone, FiMail } from 'react-icons/fi';

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    vehicle: '',
    passengers: '1',
    specialRequests: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
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
            BOOK YOUR <span className="text-gradient-gold">RIDE</span>
          </motion.h1>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-32 bg-brand-gray-dark">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="p-10 bg-brand-black border border-brand-gold/20">
                <h2 className="text-3xl font-luxury font-bold text-brand-white mb-8">
                  PERSONAL <span className="text-gradient-gold">INFORMATION</span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-brand-gray-light mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
                      <FiUser size={16} /> Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-gray-dark border border-brand-gold/20 focus:border-brand-gold px-6 py-4 text-brand-white placeholder-brand-gray-light transition-colors outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-brand-gray-light mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
                      <FiPhone size={16} /> Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-gray-dark border border-brand-gold/20 focus:border-brand-gold px-6 py-4 text-brand-white placeholder-brand-gray-light transition-colors outline-none"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-brand-gray-light mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
                      <FiMail size={16} /> Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-gray-dark border border-brand-gold/20 focus:border-brand-gold px-6 py-4 text-brand-white placeholder-brand-gray-light transition-colors outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Journey Details */}
              <div className="p-10 bg-brand-black border border-brand-gold/20">
                <h2 className="text-3xl font-luxury font-bold text-brand-white mb-8">
                  JOURNEY <span className="text-gradient-gold">DETAILS</span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-brand-gray-light mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
                      <FiMapPin size={16} /> Pickup Location *
                    </label>
                    <input
                      type="text"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-gray-dark border border-brand-gold/20 focus:border-brand-gold px-6 py-4 text-brand-white placeholder-brand-gray-light transition-colors outline-none"
                      placeholder="Enter pickup address"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-brand-gray-light mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
                      <FiMapPin size={16} /> Dropoff Location *
                    </label>
                    <input
                      type="text"
                      name="dropoffLocation"
                      value={formData.dropoffLocation}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-gray-dark border border-brand-gold/20 focus:border-brand-gold px-6 py-4 text-brand-white placeholder-brand-gray-light transition-colors outline-none"
                      placeholder="Enter destination address"
                    />
                  </div>

                  <div>
                    <label className="block text-brand-gray-light mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
                      <FiCalendar size={16} /> Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-gray-dark border border-brand-gold/20 focus:border-brand-gold px-6 py-4 text-brand-white transition-colors outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-brand-gray-light mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
                      <FiClock size={16} /> Time *
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-gray-dark border border-brand-gold/20 focus:border-brand-gold px-6 py-4 text-brand-white transition-colors outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Selection */}
              <div className="p-10 bg-brand-black border border-brand-gold/20">
                <h2 className="text-3xl font-luxury font-bold text-brand-white mb-8">
                  VEHICLE <span className="text-gradient-gold">SELECTION</span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-brand-gray-light mb-2 text-sm uppercase tracking-wider">
                      Vehicle Type *
                    </label>
                    <select
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-gray-dark border border-brand-gold/20 focus:border-brand-gold px-6 py-4 text-brand-white transition-colors outline-none"
                    >
                      <option value="">Select a vehicle</option>
                      <option value="mercedes-s-class">Mercedes-Benz S-Class</option>
                      <option value="range-rover">Range Rover Autobiography</option>
                      <option value="rolls-royce">Rolls-Royce Phantom</option>
                      <option value="bmw-7">BMW 7 Series</option>
                      <option value="sprinter">Mercedes Sprinter Van</option>
                      <option value="bentley">Bentley Flying Spur</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-brand-gray-light mb-2 text-sm uppercase tracking-wider">
                      Number of Passengers *
                    </label>
                    <select
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-gray-dark border border-brand-gold/20 focus:border-brand-gold px-6 py-4 text-brand-white transition-colors outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-brand-gray-light mb-2 text-sm uppercase tracking-wider">
                      Special Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-brand-gray-dark border border-brand-gold/20 focus:border-brand-gold px-6 py-4 text-brand-white placeholder-brand-gray-light transition-colors outline-none resize-none"
                      placeholder="Any special requirements or preferences..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-full text-xl py-6">
                CONFIRM BOOKING
              </button>

              <p className="text-brand-gray-light text-sm text-center">
                By booking, you agree to our Terms of Service and Privacy Policy. 
                A confirmation will be sent to your email.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
