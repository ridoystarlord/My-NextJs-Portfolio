"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCalendar, FaClock, FaArrowRight, FaSearch } from "react-icons/fa";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Shopify Apps with Next.js and Prisma",
    excerpt: "Learn how to build production-ready Shopify apps using Next.js 14, Prisma ORM, and best practices for authentication and API design.",
    category: "Shopify",
    date: "Dec 5, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: 2,
    title: "Mastering Server Components in Next.js 15",
    excerpt: "Deep dive into React Server Components, streaming, and advanced patterns for building lightning-fast web applications.",
    category: "Next.js",
    date: "Nov 28, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: 3,
    title: "Go Microservices: From Development to Production",
    excerpt: "Complete guide to building, deploying, and scaling microservices with Go, Docker, and Kubernetes.",
    category: "Backend",
    date: "Nov 20, 2025",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 4,
    title: "TypeScript Advanced Patterns for Enterprise Apps",
    excerpt: "Explore advanced TypeScript patterns, generics, and type utilities for building maintainable enterprise applications.",
    category: "TypeScript",
    date: "Nov 15, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    id: 5,
    title: "Database Optimization: PostgreSQL Performance Tuning",
    excerpt: "Practical tips for optimizing PostgreSQL queries, indexing strategies, and connection pooling for high-traffic applications.",
    category: "Database",
    date: "Nov 10, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop",
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    id: 6,
    title: "React Performance: Optimization Techniques That Matter",
    excerpt: "Essential React optimization techniques including memoization, code splitting, and virtual list rendering.",
    category: "React",
    date: "Nov 5, 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
    gradient: "from-cyan-500 to-teal-600",
  },
];

const categories = ["All", "Shopify", "Next.js", "React", "Backend", "TypeScript", "Database"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-20">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg mb-6"
            >
              Blog & Insights
            </motion.span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Thoughts & Tutorials
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Sharing my knowledge about web development, best practices, and lessons learned from building production applications.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative max-w-2xl mx-auto"
            >
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full text-gray-900 dark:text-white focus:outline-none focus:border-purple-600 transition-all"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No articles found. Try different keywords or categories.
            </p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-linear-to-br ${post.gradient} opacity-90`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl">📝</span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-1">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center space-x-1">
                            <FaCalendar />
                            <span>{post.date}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <FaClock />
                            <span>{post.readTime}</span>
                          </span>
                        </div>
                        <FaArrowRight className="text-blue-600 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="mt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 -z-10" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Subscribe to My Newsletter
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest articles and tutorials delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
