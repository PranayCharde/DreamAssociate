import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Future of Business Consulting',
    category: 'Innovation',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
    link: '/blog/future-consulting'
  },
  {
    title: 'Managing Global Teams',
    category: 'Management',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600',
    link: '/blog/global-teams'
  },
  {
    title: 'Sustainability in Modern Business',
    category: 'Strategy',
    date: 'March 05, 2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    link: '/blog/sustainability'
  }
];

export function BlogPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Latest News</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Insights to fuel your growth</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all mb-4">
            VIEW ALL POSTS <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight mb-4">
                {post.title}
              </h3>
              <p className="text-gray-500 mb-6 line-clamp-2">
                Discover the latest trends and architectural insights that are shaping the future of global businesses.
              </p>
              <button className="flex items-center gap-2 font-bold text-slate-900 group-hover:gap-4 transition-all">
                READ MORE <ArrowRight className="w-4 h-4 text-primary" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
