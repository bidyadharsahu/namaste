'use client';

import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
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
              TERMS OF <span className="text-brand-yellow">SERVICE</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Please read these terms carefully
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
                By accessing or using our website, you agree to these Terms. If you do not agree, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">Use of Services</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>You must be at least 18 years old to use our services.</li>
                <li>You agree to use the website only for lawful purposes.</li>
                <li>You are responsible for all activity under your account.</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">Account Responsibility</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>You must provide accurate and up-to-date information.</li>
                <li>You are responsible for keeping your login details secure.</li>
                <li>We may suspend or terminate accounts for misuse or violation of these Terms.</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">Payments</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Prices and fees will be shown before payment.</li>
                <li>Payments are processed through secure third-party providers.</li>
                <li>Fees are non-refundable unless stated otherwise.</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">Prohibited Activities</h2>
              <p className="text-gray-600 mb-4">
                You must not:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Use the website for illegal activities</li>
                <li>Attempt to hack, damage, or misuse the system</li>
                <li>Copy or resell our services without permission</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">Third-Party Services</h2>
              <p className="text-gray-600 mb-6">
                Our website may contain links to third-party services. We are not responsible for their content, policies, or actions.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                Our services are provided "as is". We are not responsible for indirect losses, data loss, or service interruptions to the extent allowed by law.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">Termination</h2>
              <p className="text-gray-600 mb-6">
                We may suspend or terminate your access at any time if you violate these Terms.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These Terms are governed by the laws of India, unless otherwise required by local law.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We may update these Terms at any time. Continued use of the website means you accept the updated Terms.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}