"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGo,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiAmazon,
  SiShopify,
  SiPrisma,
  SiExpress,
  SiNestjs,
  SiVercel,
  SiGithubactions,
  SiRemix,
} from "react-icons/si";
import {
  FaRocket,
  FaCode,
  FaUsers,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaBolt,
  FaShieldAlt,
  FaCog,
} from "react-icons/fa";

const techStack = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: SiRemix, name: "Remix", color: "#000000" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiShopify, name: "Shopify", color: "#96BF48" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiGo, name: "Go", color: "#00ADD8" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiExpress, name: "Express", color: "#000000" },
  { icon: SiNestjs, name: "NestJS", color: "#E0234E" },
  { icon: SiPrisma, name: "Prisma", color: "#2D3748" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiRedis, name: "Redis", color: "#DC382D" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiAmazon, name: "AWS", color: "#FF9900" },
  { icon: SiVercel, name: "Vercel", color: "#000000" },
  { icon: SiGithubactions, name: "GitHub Actions", color: "#2088FF" },
];

const agileMethodology = [
  {
    icon: FaRocket,
    title: "Sprint Planning",
    description: "Breaking down complex projects into manageable 2-week sprints with clear goals and deliverables.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaCode,
    title: "Continuous Integration",
    description: "Automated testing and deployment pipelines ensuring code quality and rapid delivery.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FaUsers,
    title: "Daily Standups",
    description: "Regular communication and collaboration to identify blockers and maintain momentum.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: FaChartLine,
    title: "Iterative Development",
    description: "Continuous feedback loops with stakeholders for refining features and user experience.",
    color: "from-orange-500 to-red-500",
  },
];

const featuredProjects = [
  {
    title: "Retail Pilot",
    description: "Advanced POS System with inventory management, real-time analytics, and multi-store support",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    gradient: "from-blue-600 via-purple-600 to-pink-600",
    icon: FaBolt,
  },
  {
    title: "Accounting Pilot",
    description: "Comprehensive accounting software with automated bookkeeping and financial reporting",
    tech: ["React", "NestJS", "PostgreSQL", "Docker"],
    gradient: "from-green-600 via-teal-600 to-blue-600",
    icon: FaShieldAlt,
  },
  {
    title: "Message Pilot",
    description: "Omnichannel messaging platform integrating WhatsApp, Email, and SMS in one dashboard",
    tech: ["Next.js", "Go", "MongoDB", "Redis"],
    gradient: "from-purple-600 via-pink-600 to-red-600",
    icon: FaCog,
  },
];

const stats = [
  { number: "4+", label: "Years Experience" },
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: "15+", label: "Tech Stack" },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg">
                  ✨ Available for Freelance Projects
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Hey, I'm{" "}
                <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Ridoy
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              >
                Full Stack Developer crafting world-class web applications with{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>,{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">Next.js</span>, and{" "}
                <span className="font-semibold text-green-600 dark:text-green-400">Shopify</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                  🚀 Co-founder & CTO at <span className="font-bold text-blue-600">Softs.ai</span>
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  💼 Full Stack Developer at <span className="font-bold text-purple-600">Bevy Commerce</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center space-x-2"
                  >
                    <span>View My Work</span>
                    <FaArrowRight />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-full font-semibold text-lg hover:border-purple-600 dark:hover:border-purple-400 transition-all"
                  >
                    Let's Talk
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Animated Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[500px]">
                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl p-6 text-white"
                >
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold mb-2">Fast & Scalable</h3>
                  <p className="text-sm opacity-90">Building high-performance applications</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-br from-pink-500 to-orange-600 rounded-3xl shadow-2xl p-6 text-white"
                >
                  <div className="text-5xl mb-4">🎨</div>
                  <h3 className="text-2xl font-bold mb-2">Modern Design</h3>
                  <p className="text-sm opacity-90">Beautiful UI/UX that converts</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-linear-to-br from-green-500 to-teal-600 rounded-3xl shadow-2xl p-6 text-white z-10"
                >
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold mb-2">Agile Workflow</h3>
                  <p className="text-sm opacity-90">Iterative & efficient delivery</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
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
                Tech Stack & Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Technologies I use to build amazing products
            </p>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <tech.icon
                  className="text-5xl mb-3"
                  style={{ color: tech.color }}
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agile Methodology Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Agile Development Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I follow industry-standard agile methodologies to ensure timely delivery and exceptional quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agileMethodology.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
                  <div className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${item.color} mb-6`}>
                    <item.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className={`absolute inset-0 bg-linear-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity -z-10`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
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
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Check out some of my recent work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                  <div className={`h-48 bg-linear-to-br ${project.gradient} p-8 flex items-center justify-center relative overflow-hidden`}>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <project.icon className="text-7xl text-white opacity-90" />
                    </motion.div>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center space-x-2"
              >
                <span>View All Projects</span>
                <FaArrowRight />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 -z-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
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
