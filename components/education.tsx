"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    institution: "Superior University",
    degree: "Bachelor of Science in Computer Science",
    field: "Computer Science",
    gpa: "3.07 GPA",
    period: "2022-Present"
  },
  {
    institution: "Govt Islamia College Civil Lines",
    degree: "Intermediate",
    field: "FSc Pre Engineering",
    gpa: "82.36%",
    period: "2020-2022"
  }
]

const languages = ["English", "Urdu", "Punjabi"]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>
        
        <div className="space-y-6 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-linear-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 dark:bg-blue-500 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                        {edu.degree}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {edu.field}
                      </p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Languages</h3>
          <div className="flex justify-center gap-4">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-full font-semibold shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {language}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
