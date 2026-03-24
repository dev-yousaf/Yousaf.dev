// Centralized Portfolio Data
// All content for the portfolio is managed here

export const personalInfo = {
  name: "Muhammad Yousaf",
  title: "Full-Stack Developer",
  subtitle: "React/Next.js + Node.js/NestJS (Mobile Secondary)",
  bio: "Full-Stack developer focused on building web applications with React, Next.js, Node.js, and NestJS. I design APIs, data models, and clean frontend architecture through hands-on projects that demonstrate practical engineering decisions, maintainability, and delivery discipline.",
  location: "Lahore, Pakistan",
  email: "muhammadyousuf575@gmail.com",
  phone: "+92 314 4386252",
  availability: "Open to Full-Time Roles (Local & Remote)",
  image: "/Profile/Pfp.jpg", // Profile image
  social: {
    github: "https://github.com/dev-yousaf",
    linkedin: "https://www.linkedin.com/in/muhammad-yousaf-website-developer/",
  }
}

export const about = {
  headline: "Building Practical Full-Stack Systems",
  description: "I am a Full-Stack developer based in Lahore, focused on React/Next.js on the frontend and Node.js/NestJS on the backend. My work centers on API design, database modeling, authentication flows, and clean UI architecture. I use portfolio projects to show real implementation depth, clear technical trade-offs, and production-minded engineering practices.",
  philosophy: "I value clarity over hype: define the problem, build the simplest reliable architecture, and document decisions so the product can scale with fewer rewrites.",
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "5" },
    { label: "Core Stack", value: "React + Node" },
    { label: "Primary Focus", value: "Full-Stack" }
  ]
}

export const timeline = [
  {
    year: "2025",
    title: "Associate Software Engineer",
    company: "Cubicsol.inc",
    location: "Lahore, Pakistan",
    description: "Worked on application features using Flutter, React, and Node.js. Contributed to UI implementation, API integration, and code maintenance tasks in a team workflow with Git-based collaboration and iterative delivery.",
    icon: "Briefcase",
    tags: ["Flutter", "React", "Node.js", "API Integration", "Git"]
  },
  {
    year: "2024 - 2025",
    title: "Web Developer & Designer",
    company: "Deal.ai",
    location: "Remote",
    description: "Built responsive landing pages and reusable web components in a remote setup. Focused on layout quality, cross-device behavior, and practical frontend implementation aligned with product requirements.",
    icon: "Globe",
    tags: ["React", "Next.js", "Responsive UI", "Component Design", "Remote"]
  },
  {
    year: "2022 - Present",
    title: "Bachelor of Computer Science",
    company: "Superior University",
    location: "Lahore, Pakistan",
    description: "Pursuing BSCS with focus on software engineering fundamentals, databases, algorithms, and system design concepts. Applying coursework directly through full-stack and mobile portfolio projects.",
    icon: "GraduationCap",
    tags: ["Software Engineering", "Databases", "Algorithms", "System Design"]
  }
]

export const skills = [
  {
    category: "Frontend Engineering",
    icon: "Globe",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive UI", "Component Architecture"]
  },
  {
    category: "Backend Engineering",
    icon: "Database",
    items: ["Node.js", "Nest.js", "REST API Design", "Authentication", "Validation", "Error Handling", "WebSocket Basics"]
  },
  {
    category: "Databases & Data Modeling",
    icon: "Database",
    items: ["PostgreSQL", "Prisma ORM", "MongoDB", "Firebase", "Schema Design", "Relations", "Migrations"]
  },
  {
    category: "Mobile Development (Secondary)",
    icon: "Smartphone",
    items: ["Flutter", "Dart", "GetX", "Provider", "Android SDK", "Firebase", "Offline Cache Patterns"]
  },
  {
    category: "Testing, DevOps & Tooling",
    icon: "Terminal",
    items: ["Git", "GitHub", "Postman", "Docker", "ESLint", "Prettier", "VS Code"]
  }
]

export const services = [
  {
    icon: "Globe",
    title: "Frontend Development",
    description: "Building responsive interfaces with React and Next.js using reusable components, clear state flow, and accessible UI patterns."
  },
  {
    icon: "Database",
    title: "Backend API Development",
    description: "Designing backend services with Node.js and NestJS, including auth, validation, error handling, and database integration."
  },
  {
    icon: "Database",
    title: "Database & Architecture",
    description: "Modeling relational data with PostgreSQL and Prisma, structuring modules for maintainability, and documenting trade-offs."
  },
  {
    icon: "Smartphone",
    title: "Cross-Platform Mobile",
    description: "Developing Flutter apps with practical architecture and API integration when mobile delivery is required."
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
    shortDescription: "Full-stack ERP/CRM practice project with modular backend and typed frontend workflows.",
    description: "OmniBlox is a full-stack practice project focused on consolidating CRM and ERP style workflows into one codebase. The goal is to demonstrate practical architecture decisions across NestJS services, Next.js UI modules, PostgreSQL schema design, and API-driven dashboard features.",
    category: "Full-Stack Application",
    image: "/projects/panoptic.png",
    thumbnail: "/projects/panoptic-thumbnail.png",
    tech: ["Nest.js", "Next.js", "TypeScript", "PostgreSQL", "Prisma ORM"],
    github: "https://github.com/dev-yousaf/OmniBlox",
    live: null,
    featured: true,
    challenge: "Demonstrate how to structure a large product domain (CRM + ERP concepts) without mixing concerns across frontend, backend, and data layers.",
    solution: "Implemented a modular NestJS backend with domain-focused modules and a typed Next.js frontend. Used PostgreSQL + Prisma for relational modeling and predictable data access patterns.",
    outcome: "Public repository showcasing architecture-first implementation and ongoing feature expansion.",
    features: [
      "Role and workflow modules for contacts, products, purchase orders, and expenses",
      "Type-safe contracts between frontend and backend using TypeScript",
      "Relational schema design in PostgreSQL with Prisma models and migrations",
      "Dashboard-oriented UI with reusable components and clear state boundaries",
      "Personal role: end-to-end ownership across architecture, API, database, and UI"
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
    shortDescription: "Collaboration platform prototype combining chat, tasks, and meeting assistant workflows.",
    description: "Harmoni is a full-stack prototype built to explore collaboration workflows in one workspace. It combines project boards, chat flows, and AI-assisted meeting notes to show integration patterns between UI, API, data persistence, and assistant-style automation features.",
    category: "Full-Stack Application",
    tech: ["Next.js", "Node.js", "AI APIs", "PostgreSQL", "Real-time Chat"],
    github: "https://github.com/dev-yousaf/Harmoni-Public",
    live: null,
    featured: true,
    challenge: "Show how collaboration tools can be unified in one project architecture while keeping each module independently maintainable.",
    solution: "Designed feature modules for chat, task flows, and meeting notes. Implemented backend integration patterns for real-time interactions and persisted workspace data in PostgreSQL.",
    outcome: "Prototype-level implementation with public code focused on system design and feature composition.",
    features: [
      "Unified workspace model for boards, chat, and task updates",
      "Meeting assistant workflow for note capture and task extraction concepts",
      "Real-time communication patterns integrated with backend services",
      "PostgreSQL-backed data model for teams, tasks, and activity context",
      "Personal role: full-stack implementation and product flow design"
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
    shortDescription: "Role-based assignment management system for students and instructors.",
    description: "EduAssign is a web application that demonstrates role-based access control, file workflows, and structured CRUD operations for academic assignment handling. It highlights practical backend logic and interface flow for multi-role users.",
    category: "Web Application",
    image: "/projects/eduassign.png",
    thumbnail: "/projects/eduassign-thumbnail.png",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/dev-yousaf/EduAssign",
    live: null,
    featured: true,
    challenge: "Create a clear multi-role workflow where admins, instructors, and students have different permissions and responsibilities.",
    solution: "Implemented permission-aware routes, assignment lifecycle actions, and file submission handling in a PHP + MySQL stack with responsive UI.",
    outcome: "Complete learning project published on GitHub with core role-based features implemented.",
    features: [
      "Role-based access control for Admin, Instructor, and Student users",
      "Assignment creation, submission, and grading lifecycle",
      "Secure file upload and download workflows",
      "Deadline and status management for assignments",
      "Admin-facing management screens for academic operations",
      "Personal role: end-to-end implementation of core modules"
    ],
    screenshots: [
      "/projects/eduassign.png",
      "/projects/eduassign-1.png"
    ]
  },
  {
    id: "assignmate",
    title: "AssignMate – Android Assignment App",
    shortDescription: "Android client companion for assignment workflows with Firebase integration.",
    description: "AssignMate extends assignment workflows to mobile through a native Android app. It demonstrates app-side authentication, notification handling, and local data behavior for a student/instructor use case.",
    category: "Mobile App",
    image: "/projects/assignmate.jpg",
    thumbnail: "/projects/assignmate-thumbnail.png",
    tech: ["Java", "XML", "Firebase", "Android SDK"],
    github: "https://github.com/dev-yousaf/AssignMate",
    live: null,
    featured: false,
    challenge: "Provide mobile access to assignment tasks while keeping interactions usable on unstable networks.",
    solution: "Built Android screens for assignment tracking, integrated Firebase authentication and notifications, and added local storage patterns for smoother mobile usage.",
    outcome: "Working Android project with core flows and Firebase-backed interactions available in source code.",
    features: [
      "Mobile login and user session handling with Firebase",
      "Assignment viewing and update flows optimized for small screens",
      "Push notification integration for assignment events",
      "Local storage support for better mobile continuity",
      "Material-style interface with reusable components",
      "Personal role: native Android implementation and Firebase integration"
    ],
    screenshots: [
      "/projects/assignmate-1.jpg",
      "/projects/assignmate-2.jpg"
    ]
  },
  {
    id: "fractal-explorer",
    title: "Distributed Fractal Explorer",
    shortDescription: "Distributed rendering project combining C++ compute workers with Node.js and Next.js orchestration.",
    description: "Distributed Fractal Explorer is a systems-focused project showing how compute-heavy workloads can be split across worker processes and coordinated through a web stack. It demonstrates integration between C++ computation, Node.js orchestration, and frontend visualization.",
    category: "High-Performance Computing",
    tech: ["C++", "MSMPI", "Node.js", "Next.js", "vcpkg", "Visual Studio Build Tools"],
    github: "https://github.com/dev-yousaf/Distributed-Fractal-Explorer",
    live: null,
    featured: true,
    challenge: "Model a distributed pipeline that separates heavy numerical computation from API and UI concerns.",
    solution: "Implemented C++ worker execution with MSMPI, added Node.js middleware for job coordination, and built a Next.js interface for render control and progress visibility.",
    outcome: "Public multi-stack engineering project demonstrating distributed processing architecture and integration workflow.",
    features: [
      "Distributed rendering across CPU workers using MSMPI",
      "C++ compute layer separated from Node.js orchestration",
      "Render task management and status reporting pipeline",
      "Interactive frontend for zoom, controls, and progress visibility",
      "Configurable rendering parameters and output workflow",
      "Personal role: architecture and cross-stack integration"
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
