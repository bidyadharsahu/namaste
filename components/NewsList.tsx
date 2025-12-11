'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content_url?: string;
}

interface NewsListProps {
  items: NewsItem[];
  preview?: boolean;
}

export default function NewsList({ items, preview = false }: NewsListProps) {
  const displayItems = preview ? items.slice(0, 3) : items;

  return (
    <section className={`${preview ? 'section-padding' : ''} bg-gradient-to-br from-gray-50 to-white`} id={preview ? 'newsroom-preview' : undefined}>
      <div className="container-custom">
        {preview && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-brand-charcoal">
              Latest <span className="text-brand-orange">News</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest announcements and company news.
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-brand-orange mb-3">
                  <FiCalendar size={16} />
                  <time className="text-sm font-medium">
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>

                <h3 className="text-2xl font-display font-bold mb-3 text-brand-charcoal group-hover:text-brand-orange transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                <Link
                  href={item.content_url || `/newsroom/${item.id}`}
                  className="inline-flex items-center gap-2 text-brand-orange font-semibold group-hover:gap-3 transition-all"
                >
                  Read more
                  <FiArrowRight />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {preview && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/newsroom" className="btn btn-secondary text-lg">
              View All Newsroom
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
