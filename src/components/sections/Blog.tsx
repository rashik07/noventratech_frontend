"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export function Blog() {
  const posts = [
    {
      title: "The Future of AI in Enterprise Software Development",
      category: "AI & Machine Learning",
      date: "Oct 12, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      excerpt: "Explore how artificial intelligence is reshaping the way enterprise applications are built and maintained.",
    },
    {
      title: "Why Migrate to Next.js 14 for Your E-commerce Store",
      category: "Web Development",
      date: "Nov 05, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      excerpt: "Performance, SEO, and developer experience. Learn why Next.js is the perfect framework for modern commerce.",
    },
    {
      title: "Best Practices for Securing Cloud Infrastructure",
      category: "Cyber Security",
      date: "Dec 02, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      excerpt: "A comprehensive guide to protecting your cloud assets against modern cybersecurity threats.",
    },
  ];

  return (
    <section className="py-24 relative bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Insights & <span className="text-gradient">Resources</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Stay updated with the latest trends, tips, and insights from our engineering and design teams.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center text-[#008080] hover:text-[#006666] transition-colors font-medium">
            View All Articles <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-[#FF6600] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {post.category}
                </div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-slate-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#008080] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100">
                  <a href="#" className="inline-flex items-center text-[#008080] hover:text-[#006666] text-sm font-medium transition-colors">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
