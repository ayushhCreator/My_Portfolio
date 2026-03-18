export const personalInfo = {
  name: "Ayush Raj",
  email: "ayushraj150103@gmail.com",
  phone: "+91 7464026177",
  location: "Patna, Bihar, India",
  github: "https://github.com/ayushhCreator",
  linkedin: "https://linkedin.com/in/ayush-raj-633526186/",
  portfolio: "https://myportfolio15.vercel.app",
  tagline: "I build production-grade systems — APIs, real-time apps, and scalable backends that actually ship."
};

export const roles = [
  "Full-Stack Developer",
  "Backend Engineer",
  "MCA Graduate, 2025"
];

export const stats = [
  { value: "371+", label: "Commits on Production Codebase" },
  { value: "18", label: "Merged PRs" },
  { value: "3", label: "Internships / Roles" },
  { value: "92%", label: "Efficiency Improvement" }
];

export const aboutText = `MCA graduate (2025) from New Horizon College of Engineering, Bengaluru. I've spent the last 2 years building real production systems — a full automotive services platform, HRMS tools, and real-time collaboration apps. I care about clean architecture, meaningful metrics, and code that actually works in production.`;

export const skills = {
  Languages: ["Python", "Java", "TypeScript", "JavaScript", "SQL"],
  Frameworks: ["Frappe v15", "Spring Boot", "React 19", "Node.js", "Express.js"],
  Databases: ["MariaDB", "MySQL", "MongoDB", "Redis"],
  "DevOps & Tools": ["Docker", "Docker Compose", "GitHub Actions", "Git", "Postman", "Linux"],
  "APIs & Auth": ["REST APIs", "JWT", "RBAC", "Google Calendar API"]
};

export const experience = [
  {
    role: "Software Developer",
    company: "Yawlit",
    date: "Mar 2026 – Present",
    badge: "FULL-TIME",
    badgeColor: "green",
    bullets: [
      "Promoted from intern after shipping the production automotive platform",
      "Continuing architectural improvements and new feature development"
    ]
  },
  {
    role: "Software Developer Intern",
    company: "Yawlit",
    date: "Sep 2025 – Mar 2026",
    badge: "INTERNSHIP",
    badgeColor: "blue",
    bullets: [
      "Architected a production automotive services platform on Frappe v15 (Python) — 3 portals (Admin, Customer, Vendor), 371 commits, 18 merged PRs",
      "Built 5-step booking engine with real-time pricing, slot management, and Google Calendar sync",
      "Containerized full stack with Docker + Docker Compose; authored GitHub Actions CI/CD with Ruff linting and gitleaks secret scanning",
      "Resolved 7 critical navigation regressions by refactoring routing with React Context API"
    ]
  },
  {
    role: "Java Full Stack Developer Intern",
    company: "Tripillar Solutions LLP",
    date: "Oct 2024 – Dec 2024",
    badge: "INTERNSHIP",
    badgeColor: "blue",
    bullets: [
      "Built HRMS-integrated timetable system (Java + Spring Boot + MySQL) — cut scheduling time from 6 hrs → 30 min/week (92% reduction)",
      "Designed RESTful APIs with Spring Security RBAC, supporting 200+ concurrent users"
    ]
  },
  {
    role: "Web Developer Intern",
    company: "Dot Plus Technologies",
    date: "Apr 2023 – Sep 2023",
    badge: "INTERNSHIP",
    badgeColor: "blue",
    bullets: [
      "Built 5+ client websites serving 500+ daily users; improved performance by 25% and mobile responsiveness by 40%"
    ]
  }
];

export const projects = [
  {
    title: "Yawlit Automotive Services Platform",
    badge: "PRODUCTION · SHIPPED",
    badgeColor: "green",
    description: "Production-grade car washing & detailing booking platform. 3 role-specific portals, real-time pricing engine, slot management, and CI/CD pipeline. My most complex shipped project.",
    stats: ["371 commits", "18 PRs", "3 Portals"],
    tech: ["Python", "Frappe v15", "React 19", "TypeScript", "Docker", "GitHub Actions", "MariaDB", "Redis"],
    links: {
      github: "https://github.com/ayushhCreator/yawlit_automotive_services"
    },
    featured: true
  },
  {
    title: "WorkNest — Real-Time Kanban Platform",
    badge: "LIVE",
    badgeColor: "blue",
    description: "Full-stack MERN project management platform with Socket.io-powered real-time Kanban boards, drag-and-drop tasks, and granular RBAC. Deployed on Vercel with 99% uptime.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io", "Cloudinary"],
    links: {
      live: "https://work-nest-rho.vercel.app/login",
      github: "https://github.com/ayushhCreator/WorkNest"
    },
    featured: false
  },
  {
    title: "HRMS-MU — University Timetable System",
    badge: "PRODUCTION",
    badgeColor: "green",
    description: "Enterprise scheduling system for Magadh University built during Tripillar internship. Automated faculty-course-room allocation, cutting manual effort by 92%.",
    tech: ["Java", "Spring Boot", "MySQL", "Spring Security", "Thymeleaf"],
    links: {
      github: "https://github.com/ayushhCreator/HRMS-MU"
    },
    featured: false
  },
  {
    title: "DevPulse — AI PR Review Bot",
    badge: "IN PROGRESS",
    badgeColor: "yellow",
    description: "GitHub Webhook listener + Claude API integration to auto-review PRs for code quality and post inline comments. Async task queue with Redis.",
    tech: ["FastAPI", "GitHub Webhooks", "Claude API", "Redis", "Python"],
    links: {},
    featured: false
  }
];

export const education = [
  {
    degree: "MCA",
    institution: "New Horizon College of Engineering, Bengaluru",
    cgpa: "7.97",
    period: "Dec 2023 – Aug 2025"
  },
  {
    degree: "BCA",
    institution: "L.N. Mishra Institute, Patna",
    cgpa: "8.27",
    note: "Top 15%",
    period: "Oct 2020 – Jul 2023"
  }
];

export const certifications = [
  "SQL Server Foundations — ScholarHat",
  "Full-Stack Web Development — Udemy",
  "The Joy of Computing Using Python — NPTEL"
];
