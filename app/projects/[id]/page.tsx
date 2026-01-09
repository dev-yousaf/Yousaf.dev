"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"
import { use, useState } from "react"
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Layers, Cpu, Trophy, Smartphone, Globe, Brain } from "lucide-react"
import { projectsData } from "@/lib/portfolio-data"

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const project = projectsData.find(p => p.id === id)

  if (!project) {
    notFound()
  }

  const [lightbox, setLightbox] = useState<string | null>(null)

  const getIcon = (category: string) => {
    switch(category) {
      case "Mobile App": return <Smartphone className="w-6 h-6" />;
      case "Web Application": return <Globe className="w-6 h-6" />;
      case "AI/ML": return <Brain className="w-6 h-6" />;
      default: return <Layers className="w-6 h-6" />;
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-transparent to-purple-50 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20 opacity-50" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <Link href="/projects">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </motion.button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center gap-2 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800">
                  {getIcon(project.category)}
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-4 py-1.5 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-semibold border border-yellow-200 dark:border-yellow-800">
                    Featured Case Study
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                {project.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    <Github className="w-5 h-5" />
                    View Source
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              {/* Main Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Challenge & Solution Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-red-50 dark:bg-red-900/10 p-8 rounded-3xl border border-red-100 dark:border-red-900/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400">
                  <Layers className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Challenge</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-green-50 dark:bg-green-900/10 p-8 rounded-3xl border border-green-100 dark:border-green-900/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Solution</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>

          {/* Tech Stack & Features */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-blue-600" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm border border-gray-200 dark:border-gray-700"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-500" />
                Key Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Project Gallery</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots && project.screenshots.map((shot, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 relative group cursor-pointer"
                  onClick={() => setLightbox(shot)}
                >
                  <Image
                    src={shot}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white font-bold">View Fullscreen</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

            {/* Lightbox Modal */}
            {lightbox && (
              <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
                <div className="relative w-full max-w-5xl h-[80vh]">
                  <Image src={lightbox} alt="Screenshot" fill className="object-contain" />
                  <button
                    onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
                    className="absolute top-4 right-4 bg-white/20 text-white rounded-full p-2 hover:bg-white/30"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}

            {/* Outcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-600 text-white p-8 md:p-12 rounded-3xl text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 opacity-90" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">The Outcome</h2>
              <p className="text-xl text-blue-50 leading-relaxed">
                "{project.outcome}"
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
