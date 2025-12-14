'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
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
              PRIVACY <span className="text-brand-yellow">POLICY</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your privacy is important to us
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
                This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our website or services.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We may collect the following information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Address (if required)</li>
                <li>Payment details (processed securely by third-party payment providers)</li>
                <li>Information you provide through forms, support requests, or messages</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Provide and improve our services</li>
                <li>Create and manage your account</li>
                <li>Process payments</li>
                <li>Communicate with you (support, updates, notices)</li>
                <li>Improve website security and performance</li>
                <li>Comply with legal requirements</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">Sharing of Information</h2>
              <p className="text-gray-600 mb-4">
                We do not sell your personal data. We may share information only with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Trusted service providers (payment, hosting, support)</li>
                <li>Legal authorities if required by law</li>
                <li>Business partners only when needed to provide our services</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We take reasonable steps to protect your data using technical and organizational security measures. However, no online system is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">Data Retention</h2>
              <p className="text-gray-600 mb-4">
                We keep your data only as long as necessary:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>While your account is active</li>
                <li>To meet legal, tax, or regulatory requirements</li>
                <li>For safety, fraud prevention, or dispute resolution</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You may:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Access your personal data</li>
                <li>Request corrections</li>
                <li>Request deletion of your account and data</li>
                <li>Withdraw consent where applicable</li>
              </ul>
              <p className="text-gray-600 mb-6">
                To exercise your rights, contact us at [Contact Email].
              </p>

              <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">Updates to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Privacy Policy from time to time. Continued use of our website means you accept the updated policy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}