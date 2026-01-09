// Centralized Portfolio Data
// All content for the portfolio is managed here

export const personalInfo = {
  name: "Muhammad Yousaf",
  title: "Software Engineer",
  subtitle: "Full-Stack Developer & Mobile App Specialist",
  bio: "Building modern web and mobile applications with a focus on clean code and user experience. Passionate about learning new technologies and solving real-world problems through software.",
  location: "Lahore, Pakistan",
  email: "muhammadyousuf575@gmail.com",
  phone: "+92 314 4386252",
  availability: "Available for Freelance & Full-Time",
  image: "/Profile/Pfp.jpg", // Profile image
  social: {
    github: "https://github.com/dev-yousaf",
    linkedin: "https://www.linkedin.com/in/muhammad-yousaf-website-developer/",
  }
}

export const about = {
  headline: "Crafting Digital Experiences",
  description: "I'm Muhammad Yousaf, a passionate Software Engineer based in Lahore. I build modern web and mobile applications with a focus on performance, scalability, and user experience. Working with technologies like Flutter, React, Node.js, and exploring AI/ML to create solutions that solve real problems.",
  philosophy: "I believe great software is about solving real-world problems and creating experiences that delight users. Every project is an opportunity to learn, grow, and deliver quality solutions.",
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "5" },
    { label: "Technologies", value: "10+" },
    { label: "Coffee Cups", value: "∞" }
  ]
}

export const timeline = [
  {
    year: "2025",
    title: "Associate Software Engineer",
    company: "Cubicsol.inc",
    location: "Lahore, Pakistan",
    description: "Developing mobile and web applications using Flutter, React, and Node.js. Building responsive, high-performance applications and working on backend integration. Collaborating with the team to deliver quality software solutions.",
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
    description: "OmniBlox is a modern ERP & CRM platform designed to replace fragmented business tools with a unified, scalable system. Features include sales pipelines, inventory & procurement, expense tracking, and real-time dashboards.",
    category: "Full-Stack Application",
    image: "/projects/panoptic.png",
    thumbnail: "/projects/panoptic-thumbnail.png",
    tech: ["Nest.js", "Next.js", "TypeScript", "PostgreSQL", "Prisma ORM"],
    github: "https://github.com/dev-yousaf/OmniBlox",
    live: null,
    featured: true,
    challenge: "Businesses suffer from data silos across separate CRM, ERP, and accounting tools which complicates reporting and automations.",
    solution: "Rebuild the platform on a type-safe full-stack (NestJS + Next.js) with a microservice-friendly architecture, centralized data models and realtime dashboards.",
    outcome: "Active development — source available on GitHub",
    features: [
      "Unified Dashboard - Integrates sales, inventory, and financial data into a single, real-time view",
      "End-to-End Lifecycle Management - Manages contacts, products, purchase orders, and expenses from one interface",
      "Scalable Microservice Architecture - The NestJS backend is designed for high performance and maintainability, ready to grow with the business",
      "Type-Safe & Modern Frontend - The Next.js and TypeScript frontend ensures a robust, error-free, and highly interactive user experience"
    ],
    screenshots: [
      "/projects/panoptic-1.png",
      "/projects/panoptic-2.png",
      "/projects/panoptic-3.png"
    ]
  },
  {
    id: "harmoni",
    title: "Harmoni AI – Team Collaboration Hub",
    shortDescription: "The AI-Powered Team Collaboration Hub",
    description: "Harmoni is an AI-first collaboration workspace with an AI Meeting Assistant that transcribes conversations, extracts action items, and helps assign tasks automatically. Includes chat, boards, and integrations for team productivity.",
    category: "Full-Stack Application",
    tech: ["Next.js", "Node.js", "AI APIs", "PostgreSQL", "Real-time Chat"],
    github: "https://github.com/dev-yousaf/Harmoni-Public",
    live: null,
    featured: true,
    challenge: "Modern teams are drowning in context-switching, losing productivity by juggling separate apps for project management, chat, and video calls. Verbal commitments made in meetings are often lost, requiring tedious manual follow-up.",
    solution: "Harmoni is an intelligent, all-in-one platform that serves as a central hub for all work. Its core innovation is an AI Meeting Assistant that actively listens to conversations, transcribes them, and autonomously converts verbal commitments into structured, assigned tasks.",
    outcome: "Prototype & public components available on GitHub",
    features: [
      "AI Meeting Assistant - Automatically transcribes meetings and creates tasks from verbal commitments, eliminating manual follow-up",
      "Proactive AI Agents - Provides intelligent suggestions for task assignments and monitors project health to alert managers of potential risks",
      "Unified Workspace - Combines project boards, real-time chat, and video conferencing in a single, seamless environment",
      "Secure & Enterprise-Ready - Features a multi-tiered access model and an offline mode for LAN-based operation"
    ],
    image: "/projects/harmoni-v20260109.png",
    thumbnail: "/projects/harmoni-thumbnail.png",
    screenshots: [
      "/projects/harmoni-1-v20260109.png",
      "/projects/harmoni-2-v20260109.png",
      "/projects/harmoni-3-v20260109.png"
    ]
  },
  {
    id: "eduassign",
    title: "EduAssign – Assignment Submission System",
    shortDescription: "Full-stack web application for managing assignments",
    description: "A comprehensive web application enabling students and instructors to manage assignment submissions securely and efficiently with role-based access control.",
    category: "Web Application",
    image: "/projects/eduassign.png",
    thumbnail: "/projects/eduassign-thumbnail.png",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/dev-yousaf/EduAssign",
    live: null,
    featured: true,
    challenge: "Educational institutions needed a secure platform for managing assignments with different access levels for admins, instructors, and students.",
    solution: "Built a role-based access control system with secure file handling, optimized MySQL queries, and responsive Bootstrap interface.",
    outcome: "Production-ready codebase for assignment management available on GitHub",
    features: [
      "Role-based access control (Admin, Instructor, Student)",
      "Secure file upload and download",
      "Assignment deadline management",
      "Grade submission and tracking",
      "Email notifications",
      "Admin dashboard with analytics"
    ],
    screenshots: [
      "/projects/eduassign.png",
      "/projects/eduassign-1.png"
    ]
  },
  {
    id: "assignmate",
    title: "AssignMate – Android Assignment App",
    shortDescription: "Mobile companion app for EduAssign",
    description: "AssignMate is a native Android client providing mobile access to EduAssign features, offline caching, and push notifications using Firebase.",
    category: "Mobile App",
    image: "/projects/assignmate.jpg",
    thumbnail: "/projects/assignmate-thumbnail.png",
    tech: ["Java", "XML", "Firebase", "Android SDK"],
    github: "https://github.com/dev-yousaf/AssignMate",
    live: null,
    featured: false,
    challenge: "Students and teachers needed mobile access to assignment management with offline capabilities and push notifications.",
    solution: "Developed native Android app with Firebase for real-time sync, implemented local caching for offline mode, and integrated FCM for notifications.",
    outcome: "Published Android client with Firebase integration",
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
    id: "fractal-explorer",
    title: "Distributed Fractal Explorer",
    shortDescription: "High-performance distributed Mandelbrot set renderer",
    description: "Distributed Fractal Explorer parallelizes Mandelbrot set rendering across CPU cores and nodes. C++ workers compute tiles (MSMPI), a Node.js middleware coordinates jobs, and a Next.js frontend visualizes progress and composes final tiles.",
    category: "High-Performance Computing",
    tech: ["C++", "MSMPI", "Node.js", "Next.js", "vcpkg", "Visual Studio Build Tools"],
    github: "https://github.com/dev-yousaf/Distributed-Fractal-Explorer",
    live: null,
    featured: true,
    challenge: "Rendering high-resolution Mandelbrot set fractals is computationally intensive and time-consuming on a single core. Users needed a solution that could leverage multiple CPU cores to dramatically reduce rendering time while providing an interactive web interface.",
    solution: "Developed a distributed computing system using C++ with MSMPI to parallelize fractal calculations across multiple cores. Created a Node.js middleware layer to manage render jobs and coordinate between the C++ backend and Next.js frontend. Utilized vcpkg for C++ dependency management and Visual Studio Build Tools for optimized compilation.",
    outcome: "Successfully implemented a distributed rendering system that achieves near-linear speedup with the number of cores. Users can explore fractals at various zoom levels and resolutions with significantly reduced rendering times compared to single-threaded implementations.",
    features: [
      "Distributed rendering across multiple CPU cores using MSMPI",
      "High-precision Mandelbrot set calculations in C++",
      "Real-time progress monitoring and visualization",
      "Interactive zoom and pan controls",
      "Dynamic load balancing across worker nodes",
      "Configurable resolution and iteration limits",
      "Export rendered fractals in high resolution",
      "Color palette customization",
      "Performance metrics and benchmarking tools"
    ],
    image: "/projects/fractal-explorer.png",
    thumbnail: "/projects/fractal-explorer-thumbnail.png",
    screenshots: [
      "/projects/fractal-explorer-1.png"
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
