"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaBolt,
  FaShieldAlt,
  FaCog,
  FaEnvelope,
  FaShoppingCart,
  FaStore,
  FaChartBar,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiShopify,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGo,
  SiNestjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiGraphql,
} from "react-icons/si";

const projects = [
  {
    title: "Retail Pilot",
    category: "SaaS Platform",
    description:
      "Advanced Point of Sale (POS) system with comprehensive inventory management, real-time analytics, multi-store support, and customer relationship management. Built for retail businesses to streamline operations and boost sales.",
    features: [
      "Real-time inventory tracking",
      "Multi-store management",
      "Advanced analytics dashboard",
      "Customer loyalty programs",
      "Payment gateway integration",
      "Receipt printing & invoicing",
    ],
    tech: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiRedis, name: "Redis" },
      { icon: SiPrisma, name: "Prisma" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],
    gradient: "from-blue-600 via-purple-600 to-pink-600",
    icon: FaBolt,
    demoUrl: "https://retailpilot.demo",
    caseStudyUrl: "#",
    type: "featured",
  },
  {
    title: "Accounting Pilot",
    category: "Finance Software",
    description:
      "Comprehensive accounting software with automated bookkeeping, financial reporting, tax management, and expense tracking. Designed for SMEs to manage their finances efficiently.",
    features: [
      "Automated bookkeeping",
      "Financial reporting",
      "Tax calculation & filing",
      "Invoice management",
      "Expense tracking",
      "Bank reconciliation",
    ],
    tech: [
      { icon: SiReact, name: "React" },
      { icon: SiNestjs, name: "NestJS" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiDocker, name: "Docker" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiPrisma, name: "Prisma" },
    ],
    gradient: "from-green-600 via-teal-600 to-blue-600",
    icon: FaShieldAlt,
    demoUrl: "https://accountingpilot.demo",
    caseStudyUrl: "#",
    type: "featured",
  },
  {
    title: "Message Pilot",
    category: "Communication Platform",
    description:
      "Omnichannel messaging platform integrating WhatsApp, Email, SMS, and live chat in a unified dashboard. Perfect for businesses to manage customer communications efficiently.",
    features: [
      "Unified inbox for all channels",
      "WhatsApp Business API",
      "Email automation",
      "SMS campaigns",
      "Live chat widget",
      "Analytics & reporting",
    ],
    tech: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiGo, name: "Go" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiRedis, name: "Redis" },
      { icon: SiDocker, name: "Docker" },
      { icon: SiGraphql, name: "GraphQL" },
    ],
    gradient: "from-purple-600 via-pink-600 to-red-600",
    icon: FaCog,
    demoUrl: "https://messagepilot.demo",
    caseStudyUrl: "#",
    type: "featured",
  },
  {
    title: "Sender Bee",
    category: "Email Marketing",
    description:
      "Powerful email marketing platform with drag-and-drop builder, automation workflows, segmentation, and detailed analytics. Built for marketers to create engaging campaigns.",
    features: [
      "Drag-and-drop email builder",
      "Marketing automation",
      "List segmentation",
      "A/B testing",
      "Analytics & insights",
      "Template library",
    ],
    tech: [
      { icon: SiReact, name: "React" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiRedis, name: "Redis" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    icon: FaEnvelope,
    demoUrl: "https://senderbee.demo",
    caseStudyUrl: "#",
    type: "standard",
  },
  {
    title: "Shopify Product Sync App",
    category: "Shopify App",
    description:
      "Advanced Shopify app for syncing products across multiple stores, marketplaces, and sales channels. Automates inventory management and product updates.",
    features: [
      "Multi-store sync",
      "Marketplace integration",
      "Bulk product import/export",
      "Automated inventory updates",
      "Price synchronization",
      "Variant management",
    ],
    tech: [
      { icon: SiShopify, name: "Shopify" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiGraphql, name: "GraphQL" },
    ],
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    icon: FaShoppingCart,
    demoUrl: "https://apps.shopify.com/demo",
    caseStudyUrl: "#",
    type: "standard",
  },
  {
    title: "Custom Hydrogen Storefront",
    category: "E-commerce",
    description:
      "High-performance Shopify Hydrogen storefront with custom theme, optimized checkout flow, and advanced personalization features for premium brands.",
    features: [
      "Blazing fast performance",
      "Custom theme design",
      "Advanced filtering",
      "Personalized recommendations",
      "Optimized checkout",
      "SEO optimized",
    ],
    tech: [
      { icon: SiShopify, name: "Hydrogen" },
      { icon: SiReact, name: "React" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiGraphql, name: "GraphQL" },
      { icon: SiTypescript, name: "TypeScript" },
    ],
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    icon: FaStore,
    demoUrl: "https://hydrogen-demo.myshopify.com",
    caseStudyUrl: "#",
    type: "standard",
  },
  {
    title: "Analytics Dashboard",
    category: "Data Visualization",
    description:
      "Real-time analytics dashboard for e-commerce businesses. Track sales, customer behavior, inventory, and marketing performance in one place.",
    features: [
      "Real-time data",
      "Custom reports",
      "Visual dashboards",
      "Export capabilities",
      "Multi-store support",
      "Mobile responsive",
    ],
    tech: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiRedis, name: "Redis" },
      { icon: SiDocker, name: "Docker" },
    ],
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: FaChartBar,
    demoUrl: "https://analytics-demo.com",
    caseStudyUrl: "#",
    type: "standard",
  },
  {
    title: "API Gateway Service",
    category: "Backend Infrastructure",
    description:
      "High-performance API gateway built with Go for microservices architecture. Handles authentication, rate limiting, load balancing, and request routing.",
    features: [
      "Request routing",
      "Rate limiting",
      "Authentication & authorization",
      "Load balancing",
      "API versioning",
      "Monitoring & logging",
    ],
    tech: [
      { icon: SiGo, name: "Go" },
      { icon: SiRedis, name: "Redis" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiDocker, name: "Docker" },
    ],
    gradient: "from-gray-700 via-gray-800 to-black",
    icon: FaCode,
    demoUrl: null,
    githubUrl: "https://github.com/ridoy/api-gateway",
    type: "standard",
  },
];

export default function ProjectsPage() {
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
              Portfolio Showcase
            </motion.span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              A collection of projects I&apos;ve built for clients worldwide,
              ranging from SaaS platforms to Shopify apps and custom e-commerce
              solutions. Each project showcases modern tech stacks and best
              practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Projects */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 flex items-center"
          >
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
            <span className="ml-4 h-1 grow bg-linear-to-r from-blue-600 to-transparent rounded" />
          </motion.h2>

          <div className="grid lg:grid-cols-1 gap-8">
            {projects
              .filter((p) => p.type === "featured")
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Left - Gradient with Icon */}
                      <div
                        className={`relative h-64 lg:h-auto bg-linear-to-br ${project.gradient} p-12 flex flex-col justify-center items-center text-white overflow-hidden`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="relative z-10"
                        >
                          <project.icon className="text-8xl opacity-90" />
                        </motion.div>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all" />
                        <div className="absolute top-4 right-4 z-10">
                          <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Right - Content */}
                      <div className="p-8 lg:p-12">
                        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                          {project.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-3">
                            Key Features
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {project.features.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-start space-x-2"
                              >
                                <span className="text-green-500 mt-1">✓</span>
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-3">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {project.tech.map((tech) => (
                              <div
                                key={tech.name}
                                className="flex items-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
                              >
                                <tech.icon className="text-lg" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                  {tech.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-4">
                          {project.demoUrl && (
                            <Link href={project.demoUrl} target="_blank">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all"
                              >
                                <FaExternalLinkAlt />
                                <span>View Demo</span>
                              </motion.button>
                            </Link>
                          )}
                          {project.githubUrl && (
                            <Link href={project.githubUrl} target="_blank">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all"
                              >
                                <FaGithub />
                                <span>Source Code</span>
                              </motion.button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 flex items-center"
          >
            <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Other Projects
            </span>
            <span className="ml-4 h-1 grow bg-linear-to-r from-purple-600 to-transparent rounded" />
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.type === "standard")
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="h-full bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    {/* Gradient Header */}
                    <div
                      className={`relative h-48 bg-linear-to-br ${project.gradient} p-8 flex items-center justify-center overflow-hidden`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <project.icon className="text-7xl text-white opacity-90" />
                      </motion.div>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 4).map((tech) => (
                          <div
                            key={tech.name}
                            className="flex items-center space-x-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg"
                          >
                            <tech.icon className="text-sm" />
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        {project.demoUrl && (
                          <Link
                            href={project.demoUrl}
                            target="_blank"
                            className="flex-1"
                          >
                            <motion.button
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              className="w-full px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium text-sm flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all"
                            >
                              <FaExternalLinkAlt className="text-xs" />
                              <span>Demo</span>
                            </motion.button>
                          </Link>
                        )}
                        {project.githubUrl && (
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            className="flex-1"
                          >
                            <motion.button
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              className="w-full px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-full font-medium text-sm flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all"
                            >
                              <FaGithub className="text-xs" />
                              <span>Code</span>
                            </motion.button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let&apos;s work together to turn your ideas into reality. I&apos;m
              available for freelance projects and consulting.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all inline-flex items-center space-x-2"
              >
                <span>Start a Project</span>
                <FaExternalLinkAlt />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
