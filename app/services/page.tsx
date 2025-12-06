"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaCode,
  FaServer,
  FaRocket,
  FaCheck,
  FaArrowRight,
  FaLaptopCode,
  FaDatabase,
  FaShoppingCart,
} from "react-icons/fa";

const services = [
  {
    icon: FaServer,
    title: "Backend Development",
    description:
      "Scalable server-side architecture, RESTful APIs, microservices, and database design using NestJS, Go, and PostgreSQL.",
    features: [
      "RESTful & GraphQL APIs",
      "Microservices Architecture",
      "Database Design & Optimization",
      "Message Queue Integration",
      "Authentication & Authorization",
      "Third-party API Integrations",
    ],
    gradient: "from-blue-600 to-purple-600",
  },
  {
    icon: FaCode,
    title: "Full Stack Development",
    description:
      "End-to-end web application development combining powerful backends with modern, responsive frontends.",
    features: [
      "Complete Web Applications",
      "Backend + Frontend Integration",
      "Real-time Features",
      "Admin Dashboards",
      "User Authentication",
      "Payment Gateway Integration",
    ],
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: FaLaptopCode,
    title: "Frontend Development",
    description:
      "Modern, responsive, and performant user interfaces using React, Next.js, and latest web technologies.",
    features: [
      "React & Next.js Applications",
      "Responsive Design",
      "Performance Optimization",
      "Component Libraries",
      "State Management",
      "SEO Optimization",
    ],
    gradient: "from-green-600 to-teal-600",
  },
  {
    icon: FaShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Custom Shopify apps, Hydrogen storefronts, and complete e-commerce platforms tailored to your business needs.",
    features: [
      "Shopify App Development",
      "Custom Storefronts",
      "Payment Processing",
      "Inventory Management",
      "Order Management Systems",
      "Data Migration Services",
    ],
    gradient: "from-orange-600 to-red-600",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$2,500",
    duration: "per project",
    description: "Perfect for small projects and MVPs",
    features: [
      "Up to 5 pages/features",
      "Responsive design",
      "Basic SEO",
      "1 month support",
      "Source code delivery",
      "Documentation",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$5,000",
    duration: "per project",
    description: "Ideal for medium-sized applications",
    features: [
      "Up to 15 pages/features",
      "Advanced animations",
      "SEO optimization",
      "3 months support",
      "API integrations",
      "Admin dashboard",
      "Database design",
      "Testing & QA",
    ],
    highlighted: true,
    cta: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    duration: "per project",
    description: "For large-scale applications",
    features: [
      "Unlimited pages/features",
      "Microservices architecture",
      "Advanced SEO & Analytics",
      "6 months support",
      "Multiple integrations",
      "Dedicated dashboard",
      "Performance optimization",
      "DevOps & CI/CD",
      "Team training",
      "Priority support",
    ],
    highlighted: false,
    cta: "Contact Us",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We discuss your requirements, goals, and timeline. I'll provide a detailed proposal and project plan.",
    icon: FaLaptopCode,
  },
  {
    step: "02",
    title: "Design & Architecture",
    description:
      "I design the system architecture, database schema, and plan the technical implementation.",
    icon: FaDatabase,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Agile development with regular updates, demos, and iterations based on your feedback.",
    icon: FaCode,
  },
  {
    step: "04",
    title: "Testing & Deployment",
    description:
      "Thorough testing, bug fixes, and deployment to your preferred hosting platform.",
    icon: FaRocket,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-20 py-20">
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
              Services & Pricing
            </motion.span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Professional Development Services
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Transform your ideas into reality with expert backend and full
              stack development services. Quality code, scalable architecture,
              and timely delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              What I Offer
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Comprehensive development services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              <div
                className={`inline-flex p-4 bg-linear-to-br ${service.gradient} rounded-2xl text-white text-3xl mb-6`}
              >
                <service.icon />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                  >
                    <FaCheck className="text-green-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Plans */}
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
                Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Choose the plan that fits your project needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl transition-all ${
                  plan.highlighted
                    ? "ring-4 ring-purple-600 scale-105"
                    : "hover:shadow-2xl"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className="text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-500">
                    {plan.duration}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                    >
                      <FaCheck className="text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-full font-semibold text-lg transition-all ${
                      plan.highlighted
                        ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-400">
              Need a custom solution?{" "}
              <Link
                href="/contact"
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                Let&apos;s discuss your project →
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                How I Work
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A streamlined process for successful project delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="text-6xl font-bold text-gray-200 dark:text-gray-700 mb-4">
                    {step.step}
                  </div>
                  <div className="inline-flex p-3 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl text-white text-2xl mb-4">
                    <step.icon />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <FaArrowRight className="text-3xl text-gray-300 dark:text-gray-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let&apos;s discuss how I can help bring your ideas to life with
              professional development services.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all inline-flex items-center space-x-2"
              >
                <span>Get In Touch</span>
                <FaArrowRight />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
