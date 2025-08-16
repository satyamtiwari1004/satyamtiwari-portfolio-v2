import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogProps {
  blogs: BlogPost[];
}

const Blog: React.FC<BlogProps> = ({ blogs }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section id="blog" className="mx-auto mt-32 max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl mb-4">
          Latest Blog Posts
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights from my journey in software development
        </p>
      </motion.div>

      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group glass-effect rounded-2xl border overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Blog Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center">
                <BookOpen className="text-accent" size={48} />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{formatDate(blog.created_at)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>5 min read</span>
                  </div>
                </div>

                <h3 className="font-semibold text-xl mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {blog.excerpt || truncateText(blog.content, 150)}
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-accent font-medium hover:underline"
                >
                  Read More <ArrowRight size={14} />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <BookOpen className="text-accent mx-auto mb-4" size={64} />
          <h3 className="text-xl font-semibold mb-2">No blog posts yet</h3>
          <p className="text-slate-600 dark:text-slate-300">
            I'm working on some interesting content. Check back soon!
          </p>
        </motion.div>
      )}

      {/* View All Posts Button */}
      {blogs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            View All Posts
          </motion.button>
        </motion.div>
      )}
    </section>
  );
};

export default Blog;
