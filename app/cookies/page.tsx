'use client';

import { motion } from 'framer-motion';

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-brand-black">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              COOKIE <span className="text-brand-yellow">POLICY</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              How we use cookies on our website
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <p className="text-gray-600 mb-8">
                Third-Party Services
              </p>
              <p className="text-gray-600 mb-8">
                Some third-party services linked from our website (such as payment providers or external links) may use cookies. We do not control those cookies.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">Changes to This Policy</h2>
              <p className="text-gray-600 mb-6">
                If we start using cookies in the future, we will update this Cookie Policy and notify users where required.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}