'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiArrowRight, FiTag } from 'react-icons/fi';

interface BlogItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  author?: string;
  content_url?: string;
}

interface BlogListProps {
  items: BlogItem[];
  preview?: boolean;
}

export default function BlogList({ items, preview = false }: BlogListProps) {
  const displayItems = preview ? items.slice(0, 3) : items;

  return (
    <section className={`${preview ? 'section-padding' : ''} bg-white`} id={preview ? 'blog-preview' : undefined}>
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
              From the <span className="text-brand-orange">Blog</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, stories, and updates from the world of mobility.
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
              <Link href={item.content_url || `/blog/${item.id}`}>
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-orange text-white text-sm font-semibold rounded-full">
                      <FiTag size={14} />
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 mb-3 text-sm">
                    <FiCalendar size={14} />
                    <time>
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                    {item.author && (
                      <>
                        <span>•</span>
                        <span>{item.author}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-2xl font-display font-bold mb-3 text-brand-charcoal group-hover:text-brand-orange transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-brand-orange font-semibold group-hover:gap-3 transition-all">
                    Read article
                    <FiArrowRight />
                  </span>
                </div>
              </Link>
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
            <Link href="/blog" className="btn btn-secondary text-lg">
              Read More Articles
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
