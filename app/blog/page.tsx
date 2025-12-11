'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import BlogList from '@/components/BlogList';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const [blogItems, setBlogItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog(currentPage);
  }, [currentPage]);

  const fetchBlog = async (page: number) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/blog?limit=9&page=${page}`);
      const data = await res.json();
      setBlogItems(data.data || []);
      setTotalPages(Math.ceil((data.total || 0) / 9));
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-charcoal to-brand-charcoal-light text-white py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                Blog
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Insights, stories, and perspectives on the future of mobility
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog List */}
        <section className="py-16">
          {loading ? (
            <div className="container-custom text-center py-20">
              <div className="inline-block w-16 h-16 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <BlogList items={blogItems} preview={false} />

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="container-custom mt-12">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-brand-orange hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Previous
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          currentPage === page
                            ? 'bg-brand-orange text-white'
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-brand-orange hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
