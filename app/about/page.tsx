"use client"

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { 
  Code2, 
  Smartphone, 
  Database, 
  Brain, 
  Trophy,
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  User,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Terminal,
  Cpu,
  Globe,
  Heart,
  Coffee,
  Camera
} from "lucide-react"
import { personalInfo, about, timeline, skills } from "@/lib/portfolio-data"

const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, any> = {
    Briefcase,
    Globe,
    GraduationCap,
    Smartphone,
    Database,
    Brain,
    Terminal
  };
  return iconMap[iconName] || Briefcase;
};

function TimelineItem({ item, index }: { item: any, index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const IconComponent = getIconComponent(item.icon)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex flex-col md:flex-row gap-8 mb-12 relative ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -translate-x-1/2 hidden md:block" />
      
      {/* Content */}
      <div className="flex-1 md:w-1/2">
        <div className={`p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 ${
          index % 2 === 0 ? "md:text-right" : ""
        }`}>
          <div className={`flex items-center gap-3 mb-2 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}>
            <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
              {item.year}
            </span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
          </div>
          
          <div className={`flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4 text-sm ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}>
            <span className="font-medium">{item.company}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {item.location}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {item.description}
          </p>

          <div className={`flex flex-wrap gap-2 ${
            index % 2 === 0 ? "md:justify-end" : ""
          }`}>
            {item.tags.map((tag: string) => (
              <span key={tag} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Icon Marker */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-lg z-10 border-4 border-white dark:border-gray-900">
        <IconComponent className="w-5 h-5" />
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  )
}

export default function AboutPage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20 overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-white dark:bg-gray-900">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-30" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm mb-6"
              >
                <User className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">About Me</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {about.headline.split(' ').slice(0, 2).join(' ')} <br />
                <span className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {about.headline.split(' ').slice(2).join(' ')}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {about.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
                >
                  Let's Talk
                </motion.a>
                <motion.a
                  href={personalInfo.social.github}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 relative">
                {/* Profile photo */}
                <Image
                  src="/Profile/Pfp.jpg"
                  alt={personalInfo.name + ' profile'}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent dark:from-gray-900/50" />
              </div>
              
              {/* Floating Stats Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Code2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Clean Code</p>
                    <p className="font-bold text-gray-900 dark:text-white">Always</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Problem Solver</p>
                    <p className="font-bold text-gray-900 dark:text-white">Creative</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {about.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section (New) */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Code with Purpose
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              "{about.philosophy}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A timeline of my professional experience and educational background.
            </p>
          </motion.div>

          <div className="relative">
            {timeline.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const SkillIcon = getIconComponent(skill.icon);
              return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                  <SkillIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item: string) => (
                    <span 
                      key={item}
                      className="px-2 py-1 text-xs font-medium bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section (New) */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Life & Work</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A glimpse into my workspace and daily life.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/life-and-work/Workspace.jpg",
              "/life-and-work/coding.webp",
              "/life-and-work/Coffee.jpg",
              "/life-and-work/Idea.jpg",
            ].map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative rounded-2xl overflow-hidden ${index === 0 ? "col-span-2 row-span-2 h-96" : "h-44"}`}
              >
                <Image
                  src={src}
                  alt={`Life & Work ${index}`}
                  fill
                  className="object-cover"
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                />
                <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
