"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaBriefcase,
  FaAward,
  FaUsers,
  FaGlobe,
  FaRocket,
  FaHeart,
  FaCode,
  FaLightbulb,
} from "react-icons/fa";

const journey = [
  {
    year: "2020",
    title: "Started Backend Development Journey",
    description:
      "Began learning backend development, focusing on server-side architecture, databases, and API design.",
    icon: FaRocket,
  },
  {
    year: "2021",
    title: "Joined Workspace Infotech Limited",
    description:
      "Started professional career as Junior Software Engineer, working on enterprise backend systems and scalable architecture.",
    icon: FaBriefcase,
  },
  {
    year: "2022",
    title: "Advanced Backend Expertise",
    description:
      "Deepened expertise in NestJS, Go, microservices architecture, and message queues (BullMQ, RabbitMQ).",
    icon: FaCode,
  },
  {
    year: "2023",
    title: "Joined Bevy Commerce",
    description:
      "Started as Full Stack Developer, designing and implementing backend architecture for e-commerce platforms.",
    icon: FaLightbulb,
  },
  {
    year: "2024",
    title: "Co-founded Softs.ai",
    description:
      "Launched product-based startup with 2 co-founders as CTO, building innovative SaaS products with focus on backend architecture.",
    icon: FaAward,
  },
];

const companies = [
  {
    name: "Bevy Commerce",
    role: "Full Stack Developer",
    period: "April 2023 - Present",
    location: "Remote",
    description:
      "Designing and implementing scalable backend architecture for e-commerce solutions. Working with NestJS, Go, PostgreSQL, and microservices.",
  },
  {
    name: "Softs.ai",
    role: "Co-founder & CTO",
    period: "January 2024 - Present",
    location: "Bangladesh",
    description:
      "Product-based startup with 3 co-founders. Building innovative SaaS products including Retail Pilot, Accounting Pilot, and Message Pilot. Leading backend architecture design, database modeling, and system scalability.",
  },
  {
    name: "Workspace Infotech Limited",
    role: "Junior Software Engineer",
    period: "August 2021 - April 2023",
    location: "Dhaka, Bangladesh",
    description:
      "Started professional career developing backend systems and APIs. Gained experience in scalable architecture and enterprise applications.",
  },
];

const skills = [
  {
    category: "Backend",
    items: ["NestJS", "Go", "Node.js", "Go Fiber", "Express.js", "Python"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Mongoose"],
  },
  {
    category: "Message Queues",
    items: ["BullMQ", "RabbitMQ", "Redis Queue"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Remix",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "DevOps",
    items: ["Docker", "AWS", "Vercel", "GitHub Actions", "CI/CD Pipelines"],
  },
  {
    category: "E-commerce",
    items: [
      "Shopify Apps",
      "Hydrogen",
      "Storefront API",
      "Admin API",
      "Polaris",
    ],
  },
  {
    category: "Other",
    items: [
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Data Migration",
      "Agile/Scrum",
    ],
  },
];

const achievements = [
  { number: "50+", label: "Projects Delivered", icon: FaRocket },
  { number: "30+", label: "Happy Clients", icon: FaUsers },
  { number: "10+", label: "Countries Served", icon: FaGlobe },
  { number: "4+", label: "Years Experience", icon: FaAward },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-20">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg mb-6"
              >
                About Me
              </motion.span>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Mehedi Hasan Ridoy
                </span>
              </h1>

              <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Full Stack Developer & Entrepreneur
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                I&apos;m a passionate full stack developer with 4+ years of
                experience building world-class web applications. As Co-founder
                & CTO of Softs.ai and Full Stack Developer at Bevy Commerce, I
                specialize in creating scalable solutions using React, Next.js,
                Node.js, Go, and Shopify.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
                  >
                    Get In Touch
                  </motion.button>
                </Link>
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-full font-semibold text-lg hover:border-purple-600 dark:hover:border-purple-400 transition-all"
                  >
                    View Projects
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl text-center"
                >
                  <achievement.icon className="text-4xl mx-auto mb-4 text-blue-600" />
                  <div className="text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                My Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The path that led me here
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-blue-600 via-purple-600 to-pink-600 hidden lg:block" />

            <div className="space-y-12">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0
                        ? "lg:text-right lg:pr-12"
                        : "lg:text-left lg:pl-12"
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                      <div className="text-blue-600 font-bold text-xl mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:flex w-16 h-16 bg-linear-to-br from-blue-600 to-purple-600 rounded-full items-center justify-center shadow-lg relative z-10 shrink-0">
                    <item.icon className="text-white text-2xl" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
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
                Work Experience
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Companies I&apos;ve worked with
            </p>
          </motion.div>

          <div className="space-y-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {company.name}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                      {company.role}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 text-left md:text-right">
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      {company.period}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500">
                      {company.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {company.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
                Skills & Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Tools I use to build amazing products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-linear-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaHeart className="text-6xl text-white mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-white/90 mb-8">
              I&apos;m always interested in hearing about new projects and
              opportunities.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
              >
                Start a Conversation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
