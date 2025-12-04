"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Summary
          </h2>
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center"
          >
            Mobile App Developer specialized in Flutter and Firebase, passionate about building smooth, data-driven Android and
            cross-platform apps. Skilled in Dart, GetX, Dio, and integrating Node.js/Nest.js APIs with Supabase, Neon, and
            PostgreSQL. Focused on modular architecture (MVVM/MVC) and writing clean, production-ready code that bridges mobile
            UI and backend systems seamlessly.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
