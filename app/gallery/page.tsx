"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaPlay, FaQuoteLeft } from "react-icons/fa";

const galleryItems = [
  {
    id: 1,
    type: "image",
    title: "Modern Dashboard Design",
    category: "UI/UX",
    thumbnail: "🎨",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    type: "image",
    title: "E-commerce Platform",
    category: "Web Development",
    thumbnail: "🛒",
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: 3,
    type: "video",
    title: "App Demo Walkthrough",
    category: "Product Demo",
    thumbnail: "🎬",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    type: "image",
    title: "Mobile App Interface",
    category: "Mobile Design",
    thumbnail: "📱",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: 5,
    type: "image",
    title: "Brand Identity",
    category: "Branding",
    thumbnail: "✨",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 6,
    type: "video",
    title: "Development Process",
    category: "Behind the Scenes",
    thumbnail: "⚙️",
    gradient: "from-indigo-500 to-purple-600",
  },
];

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, TechCorp",
    company: "Netherlands",
    content: "Ridoy delivered an exceptional Shopify app that exceeded our expectations. His technical expertise and attention to detail are outstanding.",
    rating: 5,
    avatar: "👨‍💼",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Singapore",
    content: "Working with Ridoy was a pleasure. He understood our requirements perfectly and delivered a scalable solution on time.",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    name: "Ahmed Al-Rashid",
    role: "CTO, E-commerce Solutions",
    company: "UAE",
    content: "Impressive full-stack development skills. Ridoy built our entire platform from scratch with Next.js and delivered beyond expectations.",
    rating: 5,
    avatar: "👨‍💻",
  },
  {
    name: "Lisa Chen",
    role: "Founder, RetailTech",
    company: "Germany",
    content: "Excellent communication and technical skills. The POS system Ridoy built is now the backbone of our retail operations.",
    rating: 5,
    avatar: "👩‍💻",
  },
  {
    name: "Michael Brown",
    role: "Director, BRAC",
    company: "Bangladesh",
    content: "Ridoy&apos;s work on our enterprise application was remarkable. Professional, efficient, and highly skilled developer.",
    rating: 5,
    avatar: "👨‍💼",
  },
  {
    name: "Emma Wilson",
    role: "Marketing Director",
    company: "USA",
    content: "The email marketing platform Ridoy developed has significantly improved our campaign performance. Highly recommended!",
    rating: 5,
    avatar: "👩‍💼",
  },
];

const categories = ["All", "UI/UX", "Web Development", "Mobile Design", "Product Demo", "Branding", "Behind the Scenes"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

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
              Visual Portfolio
            </motion.span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Gallery & Testimonials
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Visual showcase of my work and feedback from clients worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
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

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className={`relative h-80 bg-linear-to-br ${item.gradient} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all`}>
                {/* Thumbnail */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl">{item.thumbnail}</span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                  {item.type === "video" && (
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <FaPlay className="text-2xl text-gray-900 ml-1" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              What clients say about working with me
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all relative"
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="text-4xl text-blue-600 opacity-20 absolute top-6 left-6" />

                {/* Rating */}
                <div className="flex space-x-1 mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed relative z-10">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 relative z-10">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
