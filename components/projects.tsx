"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Expense Tracker App",
    description: "A cross-platform financial management application built with Flutter, enabling users to efficiently track, categorize, and analyze personal or business expenses.",
    details: "Designed and developed a robust, cross-platform expense tracking application using Flutter for the frontend and GetX for efficient state management. The app features a clean, intuitive user interface that allows users to effortlessly add, categorize, and analyze expenses with real-time data synchronization. Utilized Firebase Firestore for persistent and scalable data storage, ensuring secure and accessible financial records. Focused on optimizing user experience through responsive design, efficient CRUD operations, and insightful data visualization features.",
    tech: ["Flutter", "GetX", "Firebase", "Dart", "CRUD", "UI/UX", "Material Design", "Dio"]
  },
  {
    title: "SubMe – Online Assignment Submission System",
    description: "A full-stack web application enabling students and instructors to manage assignment submissions securely and efficiently.",
    details: "Implemented role-based access control (RBAC) for different user types (Admin, Instructor, Student), integrated file upload/download functionality, and optimized MySQL queries for fast performance.",
    tech: ["PHP", "MySQL", "Bootstrap", "CSS"]
  },
  {
    title: "AssignMate – Android Assignment App",
    description: "A mobile version of SubMe, developed with enhanced functionality and Firebase backend services for real-time synchronization.",
    details: "Built a responsive and user-friendly Android app with real-time notifications, authentication, and cloud data management, improving accessibility and collaboration for students and teachers.",
    tech: ["Java", "XML", "Firebase"]
  },
  {
    title: "GemBot – AI Storytelling Chatbot",
    description: "An interactive chatbot application that generates creative and context-aware stories using Google's Gemini API.",
    details: "Developed a conversational AI tool that dynamically crafts narratives based on user prompts, showcasing integration of Generative AI with a lightweight web interface built in Streamlit.",
    tech: ["Python", "Streamlit", "Gemini API"]
  }
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 group"
              whileHover={{ y: -8 }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-3 font-medium">
                {project.description}
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {project.details}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
