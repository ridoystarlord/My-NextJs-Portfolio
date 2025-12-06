"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTelegram,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

const contactInfo = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "hello@ridoy.dev",
    link: "mailto:hello@ridoy.dev",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaPhone,
    title: "Phone",
    value: "+880 1XXX-XXXXXX",
    link: "tel:+8801XXXXXXXXX",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "Dhaka, Bangladesh",
    link: "#",
    gradient: "from-red-500 to-pink-500",
  },
];

const socialLinks = [
  { icon: FaGithub, name: "GitHub", link: "https://github.com/ridoy", color: "#333" },
  { icon: FaLinkedin, name: "LinkedIn", link: "https://linkedin.com/in/ridoy", color: "#0077B5" },
  { icon: FaTwitter, name: "Twitter", link: "https://twitter.com/ridoy", color: "#1DA1F2" },
  { icon: FaTelegram, name: "Telegram", link: "https://t.me/ridoy", color: "#0088cc" },
  { icon: FaWhatsapp, name: "WhatsApp", link: "https://wa.me/8801XXXXXXXXX", color: "#25D366" },
  { icon: SiDiscord, name: "Discord", link: "https://discord.com/users/ridoy", color: "#5865F2" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Get In Touch
            </motion.span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Let&apos;s Work Together
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Have a project in mind? I&apos;m available for freelance work and consulting. 
              Let&apos;s discuss how I can help bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="block"
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all text-center">
                <div className={`inline-flex p-6 rounded-2xl bg-linear-to-br ${info.gradient} mb-4`}>
                  <info.icon className="text-4xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{info.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact Form & Social Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Send Me a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-purple-600 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-purple-600 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-purple-600 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-purple-600 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-xl text-center font-medium"
                >
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-xl text-center font-medium"
                >
                  ✗ Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Connect With Me
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Feel free to reach out through any of these platforms. I&apos;m most active on GitHub and LinkedIn, 
              but I respond to all messages within 24 hours.
            </p>

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <social.icon className="text-4xl mb-2" style={{ color: social.color }} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{social.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
              <p className="mb-4 leading-relaxed">
                I typically respond to inquiries within 24 hours. For urgent matters, 
                feel free to reach out via WhatsApp or Telegram.
              </p>
              <div className="flex flex-col space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Available for freelance projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Open to consulting opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Long-term partnerships welcome</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {[
            {
              q: "What is your typical project timeline?",
              a: "Project timelines vary based on complexity. Small projects take 2-4 weeks, medium projects 1-2 months, and large-scale applications 3+ months. I provide detailed timelines during the initial consultation.",
            },
            {
              q: "Do you work with international clients?",
              a: "Yes! I have experience working with clients from UAE, Netherlands, Singapore, Germany, Holland, and more. I'm comfortable with different time zones and communication styles.",
            },
            {
              q: "What are your rates?",
              a: "Rates depend on project scope, complexity, and duration. I offer both hourly and fixed-price contracts. Contact me for a detailed quote based on your requirements.",
            },
            {
              q: "Do you provide ongoing support?",
              a: "Absolutely! I offer maintenance and support packages for all projects. This includes bug fixes, updates, and feature enhancements as needed.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{faq.q}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
