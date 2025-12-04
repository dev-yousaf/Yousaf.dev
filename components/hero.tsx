"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Github, Linkedin } from "lucide-react"
import { ReactNode } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="max-w-4xl w-full text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="mb-6"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Muhammad Yousaf
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium"
          >
            Crafting Functional, Fast & Fluid Apps with Flutter and Firebase
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 mb-8 text-gray-600 dark:text-gray-400"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Lahore, Pakistan</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+923144386252</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:muhammadyousuf575@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              muhammadyousuf575@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex justify-center gap-4"
        >
          <SocialButton href="https://github.com/dev-yousaf" icon={<Github />} label="GitHub" />
          <SocialButton href="https://linkedin.com/in/muhammad-yousaf" icon={<Linkedin />} label="LinkedIn" />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 dark:text-gray-600"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function SocialButton({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  )
}
