"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "Cubicsol.inc",
    role: "Associate Software Engineer",
    type: "On-Site",
    period: "April 2025 - September 2025",
    website: "https://cubicsol.com/",
    achievements: [
      "Developed and tested Flutter features using GetX with Node.js/Nest.js APIs.",
      "Enhanced mobile UI responsiveness and data handling with Dio and Firebase integration.",
      "Collaborated on backend optimization to cut API latency and improve app stability."
    ]
  },
  {
    company: "Deal.ai",
    role: "Web Developer & Designer",
    type: "Remote",
    period: "March 2024 - March 2025",
    website: "https://home.deal.ai/",
    achievements: [
      "Designed and developed high-converting funnels and websites using Deal.ai's drag-and-drop builder.",
      "Implemented custom code components to enhance functionality, improve UX, and match client requirements.",
      "Collaborated remotely with designers and marketing teams to ensure brand consistency and optimized performance.",
      "Gained hands-on experience in front-end customization, responsive layouts, and AI-powered web design tools."
    ]
  }
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <a 
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      {exp.company}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <span className="text-gray-600 dark:text-gray-400">• {exp.type}</span>
                  </div>
                </div>
                <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
