// Centralized Portfolio Data
// All content for the portfolio is managed here

export const personalInfo = {
  name: "Muhammad Yousaf",
  title: "Full-Stack Developer",
  subtitle: "React · Next.js · Node.js · NestJS",
  bio: "I build full-stack web applications end-to-end — from database schema and REST APIs to responsive React interfaces. With professional experience at a software house and a remote product company, I focus on clean architecture, maintainable code, and shipping features that work reliably.",
  location: "Lahore, Pakistan",
  email: "muhammadyousuf575@gmail.com",
  phone: "+92 314 4386252",
  availability: "Open to Full-Time Roles — Local & Remote",
  image: "/Profile/Pfp.jpg",
  social: {
    github: "https://github.com/dev-yousaf",
    linkedin: "https://www.linkedin.com/in/yousaf-dev/",
  }
}

export const about = {
  headline: "Building Full-Stack Systems That Work",
  description: "Based in Lahore, I specialize in React/Next.js frontends and Node.js/NestJS backends. I have worked in team environments with Git workflows, sprint cycles, and real product requirements. I care about writing code that is easy to read, extend, and hand off.",
  philosophy: "Ship working software first. Refactor with intention. Document decisions so the next developer does not have to guess.",
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "8+" },
    { label: "Core Stack", value: "React + Node" },
    { label: "Availability", value: "Open to Work" }
  ]
}

export const timeline = [
  {
    year: "2025",
    title: "Associate Software Engineer",
    company: "Cubicsol.inc",
    location: "Lahore, Pakistan",
    description: "Built and maintained production features across 2 platforms (Flutter mobile and React web). Integrated third-party APIs, implemented UI components from design specs, and contributed through Git-based code reviews and release cycles.",
    icon: "Briefcase",
    tags: ["Flutter", "React", "Node.js", "API Integration", "Git"]
  },
  {
    year: "2024 - 2025",
    title: "Web Developer",
    company: "Deal.ai",
    location: "Remote",
    description: "Developed responsive landing pages and reusable UI components for a remote product team. Delivered pixel-accurate layouts across desktop, tablet, and mobile breakpoints using React and Next.js while coordinating asynchronously with an international team.",
    icon: "Globe",
    tags: ["React", "Next.js", "Responsive UI", "Component Design", "Remote"]
  },
  {
    year: "2022 - Present",
    title: "Bachelor of Computer Science",
    company: "Superior University",
    location: "Lahore, Pakistan",
    description: "Pursuing BSCS with focus on software engineering, databases, algorithms, and system design. Applying coursework directly through full-stack and mobile projects.",
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
    icon: "Server",
    items: ["Node.js", "NestJS", "REST API Design", "Authentication", "Validation", "Error Handling", "WebSockets"]
  },
  {
    category: "Databases & Data Modeling",
    icon: "Database",
    items: ["PostgreSQL", "Prisma ORM", "MongoDB", "Firebase", "Schema Design", "Relations", "Migrations"]
  },
  {
    category: "Mobile Development",
    icon: "Smartphone",
    items: ["Flutter", "Dart", "GetX", "Provider", "Android SDK", "Firebase", "Offline Cache Patterns"]
  },
  {
    category: "Tooling & DevOps",
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
    icon: "Server",
    title: "Backend API Development",
    description: "Designing backend services with Node.js and NestJS, including authentication, validation, error handling, and database integration."
  },
  {
    icon: "Database",
    title: "Database & Architecture",
    description: "Modeling relational data with PostgreSQL and Prisma, structuring modules for maintainability, and documenting architectural trade-offs."
  },
  {
    icon: "Smartphone",
    title: "Cross-Platform Mobile",
    description: "Developing Flutter apps with clean architecture and API integration when mobile delivery is part of the project scope."
  }
]

export const process = [
  { icon: "MessageSquare", title: "Discovery", desc: "Understanding your goals, requirements, and constraints." },
  { icon: "Layout", title: "Design", desc: "Planning architecture and interface before writing code." },
  { icon: "GitBranch", title: "Development", desc: "Writing clean, maintainable code with regular progress updates." },
  { icon: "Zap", title: "Delivery", desc: "Deploying, documenting, and handing off the finished product." }
]

export const projectsData = [
  {
    id: "omniblox",
    title: "OmniBlox — ERP & CRM Web Application",
    shortDescription: "Modular full-stack ERP/CRM system with NestJS backend, Next.js frontend, and PostgreSQL data layer.",
    description: "A full-stack ERP/CRM system built to consolidate contact management, product catalog, purchase orders, and expense tracking in one codebase. Demonstrates modular NestJS architecture, type-safe API contracts, and relational data modeling with Prisma ORM.",
    category: "Full-Stack Application",
    image: "/projects/panoptic.png",
    thumbnail: "/projects/panoptic-thumbnail.png",
    tech: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Prisma ORM"],
    github: "https://github.com/dev-yousaf/OmniBlox",
    live: null,
    featured: true,
    challenge: "Structure a large product domain — CRM and ERP concepts — without mixing concerns across frontend, backend, and data layers.",
    solution: "Implemented domain-focused modules in NestJS with a typed Next.js frontend. Used PostgreSQL and Prisma for relational modeling and predictable data access patterns.",
    outcome: "Delivered 5 core ERP/CRM workflows in one end-to-end TypeScript codebase with modular NestJS architecture and Prisma-backed data modeling.",
    features: [
      "Role and workflow modules for contacts, products, purchase orders, and expenses",
      "Type-safe contracts between frontend and backend using TypeScript throughout",
      "Relational schema design in PostgreSQL with Prisma models and migrations",
      "Dashboard UI with reusable components and clear state boundaries",
      "End-to-end ownership: architecture, API design, database modeling, and UI"
    ],
    screenshots: [
      "/projects/panoptic-1.png",
      "/projects/panoptic-2.png",
      "/projects/panoptic-3.png"
    ]
  },
  {
    id: "harmoni",
    title: "Harmoni — Team Collaboration Platform",
    shortDescription: "Full-stack collaboration workspace with project boards, real-time chat, and AI-assisted meeting notes.",
    description: "A unified workspace combining project boards, chat, and AI-assisted meeting note capture. Built to explore how multi-feature collaboration tools can be structured with independent, maintainable modules. Integrates real-time communication patterns with a PostgreSQL-backed data model.",
    category: "Full-Stack Application",
    image: "/projects/harmoni-v20260109.png",
    thumbnail: "/projects/harmoni-thumbnail.png",
    tech: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "AI APIs", "WebSockets"],
    github: "https://github.com/dev-yousaf/Harmoni-Public",
    live: null,
    featured: true,
    challenge: "Unify multiple collaboration features — boards, chat, meeting notes — in one architecture while keeping each module independently maintainable.",
    solution: "Designed feature modules with clear boundaries, implemented real-time communication patterns, and persisted workspace data in PostgreSQL.",
    outcome: "Implemented 4 collaboration flows (boards, tasks, chat, and meeting notes) with module-level separation and PostgreSQL persistence.",
    features: [
      "Unified workspace model for boards, tasks, chat, and activity context",
      "AI-assisted meeting notes workflow for note capture and task extraction",
      "Real-time communication integrated with backend services",
      "PostgreSQL-backed data model for teams, tasks, and workspace activity",
      "Full-stack implementation and product flow design"
    ],
    screenshots: [
      "/projects/harmoni-1-v20260109.png",
      "/projects/harmoni-2-v20260109.png",
      "/projects/harmoni-3-v20260109.png"
    ]
  },
  {
    id: "fractal-explorer",
    title: "Distributed Fractal Explorer",
    shortDescription: "Distributed rendering pipeline combining C++ compute workers with Node.js orchestration and a Next.js interface.",
    description: "A systems-focused project that offloads fractal rendering to parallel C++ workers coordinated by a Node.js API, with a Next.js frontend for render controls and real-time progress. Demonstrates clean separation of compute, orchestration, and presentation layers across a multi-stack architecture.",
    category: "High-Performance Computing",
    image: "/projects/fractal-explorer.png",
    thumbnail: "/projects/fractal-explorer-thumbnail.png",
    tech: ["C++", "MSMPI", "Node.js", "Next.js", "vcpkg"],
    github: "https://github.com/dev-yousaf/Distributed-Fractal-Explorer",
    live: null,
    featured: true,
    challenge: "Model a distributed pipeline that separates heavy numerical computation from API coordination and UI concerns.",
    solution: "Implemented C++ worker execution with MSMPI for parallel rendering, added Node.js middleware for job coordination, and built a Next.js interface for render control and progress visibility.",
    outcome: "Built a 3-layer distributed architecture (C++ compute, Node.js orchestration, Next.js UI) for parallel rendering and progress-aware control.",
    features: [
      "Distributed rendering across CPU workers using MSMPI",
      "C++ compute layer cleanly separated from Node.js orchestration layer",
      "Render task management and status reporting pipeline",
      "Interactive frontend for zoom, parameter controls, and render progress",
      "Architecture and cross-stack integration owned end-to-end"
    ],
    screenshots: [
      "/projects/fractal-explorer-1.png"
    ]
  },
  {
    id: "eduassign",
    title: "EduAssign — Assignment Management System",
    shortDescription: "Role-based web application for managing academic assignments across admin, instructor, and student roles.",
    description: "A web application demonstrating role-based access control, file workflows, and structured CRUD operations for academic assignment handling. Features distinct permission levels, assignment lifecycle management, and secure file submission.",
    category: "Web Application",
    image: "/projects/eduassign.png",
    thumbnail: "/projects/eduassign-thumbnail.png",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/dev-yousaf/EduAssign",
    live: null,
    featured: false,
    challenge: "Build a clear multi-role workflow where admins, instructors, and students have different permissions and interface experiences.",
    solution: "Implemented permission-aware routes, assignment lifecycle actions, and file submission handling with responsive UI.",
    outcome: "Implemented 3-role access control (Admin, Instructor, Student) and assignment lifecycle flows including creation, submission, grading, and tracking.",
    features: [
      "Role-based access control for Admin, Instructor, and Student users",
      "Assignment creation, submission, and grading lifecycle",
      "Secure file upload and download workflows",
      "Deadline and status management for assignments",
      "Admin-facing management screens for academic operations"
    ],
    screenshots: [
      "/projects/eduassign.png",
      "/projects/eduassign-1.png"
    ]
  },
  {
    id: "assignmate",
    title: "AssignMate — Android Assignment App",
    shortDescription: "Android client for assignment workflows with Firebase authentication and push notifications.",
    description: "A native Android app extending assignment workflows to mobile. Demonstrates Firebase authentication, push notifications, and local storage patterns for a student/instructor use case optimized for mobile usage.",
    category: "Mobile App",
    image: "/projects/assignmate.jpg",
    thumbnail: "/projects/assignmate-thumbnail.png",
    tech: ["Java", "XML", "Firebase", "Android SDK"],
    github: "https://github.com/dev-yousaf/AssignMate",
    live: null,
    featured: false,
    challenge: "Provide reliable mobile access to assignment tasks on potentially unstable networks.",
    solution: "Built Android screens for assignment tracking, integrated Firebase authentication and notifications, and added local storage for offline continuity.",
    outcome: "Implemented 5 core mobile flows: authentication, assignment viewing, status updates, push notifications, and local continuity support.",
    features: [
      "Mobile login and user session handling with Firebase Auth",
      "Assignment viewing and status update flows for small screens",
      "Push notification integration for assignment deadlines and events",
      "Local storage support for better mobile continuity on poor networks",
      "Material-style interface with reusable screen components"
    ],
    screenshots: [
      "/projects/assignmate-1.jpg",
      "/projects/assignmate-2.jpg"
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