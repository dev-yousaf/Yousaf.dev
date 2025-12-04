// Centralized Portfolio Data
// All content for the portfolio is managed here

export const personalInfo = {
  name: "Muhammad Yousaf",
  title: "Software Engineer",
  subtitle: "Full-Stack Developer & Mobile App Specialist",
  bio: "Crafting functional, fast & fluid applications with modern technologies. Building intelligent solutions that bridge frontend elegance and backend robustness seamlessly.",
  location: "Lahore, Pakistan",
  email: "muhammadyousuf575@gmail.com",
  phone: "+92 314 4386252",
  availability: "Available for Freelance & Full-Time",
  image: "/profile.jpg", // Add your profile image here
  social: {
    github: "https://github.com/dev-yousaf",
    linkedin: "https://linkedin.com/in/muhammad-yousaf",
  }
}

export const about = {
  headline: "Crafting Digital Experiences",
  description: "I'm Muhammad Yousaf, a passionate Software Engineer based in Lahore. I specialize in building modern web and mobile applications with a focus on performance, scalability, and user experience. With expertise in Flutter, React, Node.js, and AI/ML, I create solutions that are both powerful and intuitive.",
  philosophy: "I believe that great software is not just about writing code; it's about solving real-world problems and creating experiences that delight users. Every line of code I write is driven by a passion for quality, performance, and user-centric design.",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Happy Clients", value: "10+" },
    { label: "Coffee Cups", value: "∞" }
  ]
}

export const timeline = [
  {
    year: "2025",
    title: "Associate Software Engineer",
    company: "Cubicsol.inc",
    location: "Lahore, Pakistan",
    description: "Spearheading mobile and web application development using Flutter, React, and Node.js. Focusing on creating responsive, high-performance applications and optimizing backend integration for seamless data flow. Collaborating with cross-functional teams to deliver robust software solutions.",
    icon: "Briefcase",
    tags: ["Flutter", "React", "Node.js", "Full-Stack"]
  },
  {
    year: "2024 - 2025",
    title: "Web Developer & Designer",
    company: "Deal.ai",
    location: "Remote",
    description: "Designed and implemented high-converting sales funnels and custom web components. Worked in a fast-paced remote environment, ensuring pixel-perfect designs and optimal user experience across devices.",
    icon: "Globe",
    tags: ["Web Design", "UI/UX", "Funnels", "Remote"]
  },
  {
    year: "2022 - Present",
    title: "Bachelor of Computer Science",
    company: "Superior University",
    location: "Lahore, Pakistan",
    description: "Currently pursuing a BSCS degree with a strong focus on Software Engineering, Artificial Intelligence, and Machine Learning. Actively involved in technical societies and coding competitions.",
    icon: "GraduationCap",
    tags: ["CS", "AI/ML", "Software Engineering", "Algorithms"]
  }
]

export const skills = [
  {
    category: "Mobile Development",
    icon: "Smartphone",
    items: ["Flutter", "Dart", "GetX", "Provider", "Bloc", "Clean Architecture", "iOS & Android"]
  },
  {
    category: "Web Development",
    icon: "Globe",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript", "Responsive Design"]
  },
  {
    category: "Backend & Database",
    icon: "Database",
    items: ["Node.js", "Nest.js", "Firebase", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
  },
  {
    category: "AI & Machine Learning",
    icon: "Brain",
    items: ["Python", "TensorFlow", "PyTorch", "Generative AI", "Computer Vision", "NLP"]
  },
  {
    category: "Tools & DevOps",
    icon: "Terminal",
    items: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Android Studio", "Figma"]
  }
]

export const services = [
  {
    icon: "Smartphone",
    title: "Mobile Development",
    description: "Building cross-platform apps with Flutter, focusing on performance, smooth animations, and intuitive user experiences."
  },
  {
    icon: "Globe",
    title: "Web Development",
    description: "Creating responsive, modern web applications using React, Next.js, and TypeScript with a focus on performance and SEO."
  },
  {
    icon: "Database",
    title: "Backend Integration",
    description: "Connecting applications with robust backend systems using Node.js, Firebase, Supabase, and PostgreSQL."
  },
  {
    icon: "Code2",
    title: "Full-Stack Solutions",
    description: "End-to-end development from UI design to database architecture, implementing clean MVVM/MVC patterns."
  }
]

export const process = [
  { icon: "MessageSquare", title: "Discovery", desc: "Understanding your goals and requirements." },
  { icon: "Layout", title: "Design", desc: "Creating intuitive and beautiful user interfaces." },
  { icon: "GitBranch", title: "Development", desc: "Writing clean, scalable, and efficient code." },
  { icon: "Zap", title: "Deployment", desc: "Launching your app to the world." }
]

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    text: "Yousaf transformed our vague requirements into a polished, high-performance application. His attention to detail and ability to solve complex problems is outstanding.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Startup Founder",
    text: "Working with Yousaf was a game-changer for our MVP. He delivered faster than expected and the code quality was exceptional. Highly recommended!",
    rating: 5
  }
]

export const projectsData = [
  {
    id: "omniblox",
    title: "OmniBlox – ERP & CRM for Modern Businesses",
    shortDescription: "An All-in-One ERP & CRM for Modern Businesses",
    description: "OmniBlox is being architected as the central nervous system for a business. By migrating a legacy PHP system to a modern, scalable stack, we are building a unified platform to manage the entire business lifecycle, from sales pipelines and inventory to procurement and expense tracking.",
    category: "Full-Stack Application",
    image: "/projects/omniblox.jpg",
    tech: ["Nest.js", "Next.js", "TypeScript", "PostgreSQL", "Prisma ORM"],
    github: null,
    live: null,
    featured: true,
    challenge: "Small to medium-sized businesses often rely on a fragmented set of tools for CRM and ERP, leading to data silos, inefficiencies, and a lack of a single source of truth for their operations.",
    solution: "OmniBlox is being architected as the central nervous system for a business. By migrating a legacy PHP system to a modern, scalable stack (NestJS & Next.js), we are building a unified platform to manage the entire business lifecycle, from sales pipelines and inventory to procurement and expense tracking.",
    outcome: "In Progress - Repository coming soon",
    features: [
      "Unified Dashboard - Integrates sales, inventory, and financial data into a single, real-time view",
      "End-to-End Lifecycle Management - Manages contacts, products, purchase orders, and expenses from one interface",
      "Scalable Microservice Architecture - The NestJS backend is designed for high performance and maintainability, ready to grow with the business",
      "Type-Safe & Modern Frontend - The Next.js and TypeScript frontend ensures a robust, error-free, and highly interactive user experience"
    ],
    screenshots: [
      "/projects/omniblox-1.jpg",
      "/projects/omniblox-2.jpg",
      "/projects/omniblox-3.jpg"
    ]
  },
  {
    id: "harmoni",
    title: "Harmoni AI – Team Collaboration Hub",
    shortDescription: "The AI-Powered Team Collaboration Hub",
    description: "Harmoni is an intelligent, all-in-one platform that serves as a central hub for all work. Its core innovation is an AI Meeting Assistant that actively listens to conversations, transcribes them, and autonomously converts verbal commitments into structured, assigned tasks.",
    category: "Full-Stack Application",
    image: "/projects/harmoni.jpg",
    tech: ["Next.js", "Node.js", "AI APIs", "PostgreSQL", "Real-time Chat"],
    github: null,
    live: null,
    featured: true,
    challenge: "Modern teams are drowning in context-switching, losing productivity by juggling separate apps for project management, chat, and video calls. Verbal commitments made in meetings are often lost, requiring tedious manual follow-up.",
    solution: "Harmoni is an intelligent, all-in-one platform that serves as a central hub for all work. Its core innovation is an AI Meeting Assistant that actively listens to conversations, transcribes them, and autonomously converts verbal commitments into structured, assigned tasks.",
    outcome: "In Progress - Repository coming soon",
    features: [
      "AI Meeting Assistant - Automatically transcribes meetings and creates tasks from verbal commitments, eliminating manual follow-up",
      "Proactive AI Agents - Provides intelligent suggestions for task assignments and monitors project health to alert managers of potential risks",
      "Unified Workspace - Combines project boards, real-time chat, and video conferencing in a single, seamless environment",
      "Secure & Enterprise-Ready - Features a multi-tiered access model and an offline mode for LAN-based operation"
    ],
    screenshots: [
      "/projects/harmoni-1.jpg",
      "/projects/harmoni-2.jpg",
      "/projects/harmoni-3.jpg"
    ]
  },
  {
    id: "subme",
    title: "SubMe – Assignment Submission System",
    shortDescription: "Full-stack web application for managing assignments",
    description: "A comprehensive web application enabling students and instructors to manage assignment submissions securely and efficiently with role-based access control.",
    category: "Web Application",
    image: "/projects/subme.jpg",
    tech: ["PHP", "MySQL", "Bootstrap", "CSS", "JavaScript"],
    github: "https://github.com/dev-yousaf/subme",
    live: null,
    featured: true,
    challenge: "Educational institutions needed a secure platform for managing assignments with different access levels for admins, instructors, and students.",
    solution: "Built a role-based access control system with secure file handling, optimized MySQL queries, and responsive Bootstrap interface.",
    outcome: "Created a fully functional system handling multiple user roles, file uploads/downloads, and fast database performance with optimized queries.",
    features: [
      "Role-based access control (Admin, Instructor, Student)",
      "Secure file upload and download",
      "Assignment deadline management",
      "Grade submission and tracking",
      "Email notifications",
      "Admin dashboard with analytics"
    ],
    screenshots: [
      "/projects/subme-1.jpg",
      "/projects/subme-2.jpg"
    ]
  },
  {
    id: "assignmate",
    title: "AssignMate – Android Assignment App",
    shortDescription: "Mobile version of SubMe with enhanced functionality",
    description: "A mobile version of SubMe developed with enhanced functionality and Firebase backend services for real-time synchronization and improved accessibility.",
    category: "Mobile App",
    image: "/projects/assignmate.jpg",
    tech: ["Java", "XML", "Firebase", "Android SDK"],
    github: "https://github.com/dev-yousaf/assignmate",
    live: null,
    featured: false,
    challenge: "Students and teachers needed mobile access to assignment management with offline capabilities and push notifications.",
    solution: "Developed native Android app with Firebase for real-time sync, implemented local caching for offline mode, and integrated FCM for notifications.",
    outcome: "Delivered a responsive mobile app improving accessibility and collaboration with real-time updates and cloud data management.",
    features: [
      "Real-time assignment notifications",
      "Offline mode with local storage",
      "File upload from mobile device",
      "Push notifications for deadlines",
      "User authentication with Firebase",
      "Material Design UI"
    ],
    screenshots: [
      "/projects/assignmate-1.jpg",
      "/projects/assignmate-2.jpg"
    ]
  },
  {
    id: "gembot",
    title: "GemBot – AI Storytelling Chatbot",
    shortDescription: "Interactive AI chatbot using Google's Gemini API",
    description: "An interactive chatbot application that generates creative and context-aware stories using Google's Gemini API, showcasing integration of Generative AI with a lightweight web interface.",
    category: "AI/ML",
    image: "/projects/gembot.jpg",
    tech: ["Python", "Streamlit", "Gemini API", "NLP"],
    github: "https://github.com/dev-yousaf/gembot",
    live: "https://gembot-demo.streamlit.app",
    featured: true,
    challenge: "Creating an engaging conversational AI that generates coherent, creative stories based on user prompts while maintaining context.",
    solution: "Integrated Google's Gemini API for advanced language generation, implemented context management, and built an intuitive Streamlit interface.",
    outcome: "Developed a functional AI storytelling tool demonstrating practical Generative AI integration with smooth user experience.",
    features: [
      "Context-aware story generation",
      "Interactive conversation flow",
      "Multiple story genres",
      "Story customization options",
      "Save and share stories",
      "Responsive web interface"
    ],
    screenshots: [
      "/projects/gembot-1.jpg",
      "/projects/gembot-2.jpg"
    ]
  }
]

export const contactInfo = [
  {
    icon: "Mail",
    title: "Email",
    value: "muhammadyousuf575@gmail.com",
    href: "mailto:muhammadyousuf575@gmail.com",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    icon: "Phone",
    title: "Phone",
    value: "+92 314 4386252",
    href: "tel:+923144386252",
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-900/20"
  },
  {
    icon: "MapPin",
    title: "Location",
    value: "Lahore, Pakistan",
    href: null,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20"
  }
]
