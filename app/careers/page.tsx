'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiBriefcase, FiArrowRight } from 'react-icons/fi';

interface Job {
  id: string;
  title: string;
  location: string;
  job_type: string;
  description: string;
  apply_url?: string;
}

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch('/api/jobs');
      const data = await res.json();
      setJobs(data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-charcoal to-brand-charcoal-light text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Reimagine at <span className="text-brand-orange">Namaste</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join our team of innovators, builders, and dreamers who are transforming transportation across India. 
              We're looking for passionate individuals who want to make a real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">Work on cutting-edge technology that impacts millions of lives</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <p className="text-gray-600">Continuous learning and development opportunities</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Impact</h3>
              <p className="text-gray-600">Make a difference in how people move every day</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Open <span className="text-brand-orange">Positions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find your next opportunity with Namaste Rides
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-16 h-16 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="space-y-4 max-w-4xl mx-auto">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-brand-charcoal group-hover:text-brand-orange transition-colors mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <FiMapPin size={16} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiBriefcase size={16} />
                          {job.job_type}
                        </span>
                      </div>
                      <p className="text-gray-600">{job.description}</p>
                    </div>
                    <a
                      href={job.apply_url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary flex items-center gap-2 whitespace-nowrap"
                    >
                      Apply
                      <FiArrowRight />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {!loading && jobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No open positions at the moment. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-charcoal text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Don't see a role that fits?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and let us know how you'd like to contribute.
            </p>
            <a href="mailto:careers@namasterides.com" className="btn btn-primary text-lg">
              Send Your Resume
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}