export const personalInfo = {
  name: "Ayush Raj",
  email: "ayushraj150103@gmail.com",
  phone: "+91 7464026177",
  location: "Patna, Bihar, India",
  github: "Ayush-Raj",
  githubUrl: "https://github.com/Ayush-Raj",
  twitter: "ayushhCreator",
  twitterUrl: "https://twitter.com/ayushhCreator",
  linkedin: "https://linkedin.com/in/ayush-raj-633526186/",
  portfolio: "myportfolio15.vercel.app",
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

export const aboutText = `MCA graduate and aspiring Full-Stack Developer with hands-on internship experience building production-grade systems in automotive services, HRMS, and real-time collaboration. Comfortable across the stack — REST APIs, RBAC, Docker deployments — using Python/Frappe, Spring Boot, and Node.js. Seeking a full-time role where I can contribute immediately and grow as a backend-focused engineer.`;

export const skills = {
  Languages: ["Python", "JavaScript (ES6+)", "TypeScript", "Java", "SQL"],
  Frameworks: ["Frappe v15", "Node.js", "Express.js", "React 19", "Spring Boot", "ASP.NET MVC"],
  Databases: ["MariaDB", "MySQL", "MongoDB", "Redis"],
  "DevOps & Tools": ["Docker", "Docker Compose", "GitHub Actions (CI/CD)", "Git", "Postman", "Ruff", "pre-commit"],
  "APIs & Auth": ["REST APIs", "JWT Authentication", "RBAC", "Google Calendar API"]
};

export const experience = [
  {
    role: "Software Developer Intern",
    title: "Software Developer Intern",
    company: "Yawlit",
    duration: "Sep 2025 – Mar 2026",
    date: "Sep 2025 – Mar 2026",
    badge: "INTERNSHIP",
    badgeColor: "blue",
    bullets: [
      "Architected and sole-engineered a production automotive services platform (Frappe v15 + Python) with three role-specific portals — Admin, Customer, and Vendor — across 371 commits and 18 merged PRs.",
      "Built a 5-step booking engine with real-time pricing, coupon validation, slot management, and bidirectional Google Calendar sync.",
      "Containerized the full stack using Docker and Docker Compose; authored GitHub Actions CI/CD pipeline with pre-commit hooks, Ruff linting, and gitleaks secret scanning.",
      "Resolved 7 critical navigation regressions by refactoring routing with React Context API; embedded dual Vite/React micro-apps (customer + vendor portals) within Frappe backend."
    ]
  },
  {
    role: "Java Full Stack Developer Intern",
    title: "Java Full Stack Developer Intern",
    company: "Tripillar Solutions LLP",
    duration: "Oct 2024 – Dec 2024",
    date: "Oct 2024 – Dec 2024",
    badge: "INTERNSHIP",
    badgeColor: "blue",
    bullets: [
      "Delivered HRMS-integrated timetable system using Spring Boot and MySQL, cutting weekly scheduling time from 6 hours to under 30 minutes (~92% reduction).",
      "Designed RESTful APIs with Spring Security RBAC, supporting 200+ concurrent users; delivered a production-ready system within a 6-week deadline."
    ]
  },
  {
    role: "Web Developer",
    title: "Web Developer",
    company: "Dot Plus Technologies Pvt. Ltd.",
    duration: "Apr 2023 – Sep 2023",
    date: "Apr 2023 – Sep 2023",
    badge: "ROLE",
    badgeColor: "blue",
    bullets: [
      "Built 5+ client-facing web applications (HTML5, CSS3, JavaScript, ASP.NET MVC) serving 500+ daily users.",
      "Improved load performance by 25% and mobile responsiveness by 40%."
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
    title: "WorkNest",
    subtitle: "Real-Time Kanban Collaboration Platform",
    type: "Full-Stack",
    badge: "LIVE",
    badgeColor: "blue",
    description: "Full-stack MERN project management platform with Socket.io-powered real-time Kanban boards, drag-and-drop task management, and live multi-user collaboration.",
    highlights: [
      "JWT authentication with granular RBAC (Admin / Member / Viewer)",
      "Cloudinary file attachments and automated email onboarding — reduced team setup friction by ~40%",
      "Event-driven WebSocket architecture in TypeScript supporting concurrent room-based sessions without polling",
      "Deployed on Vercel with 99% uptime"
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "TypeScript", "Cloudinary", "JWT"],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "TypeScript", "Cloudinary", "JWT"],
    links: {
      live: "https://worknestpro.vercel.app/dashboard",
      github: "[ADD GITHUB URL]"
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
    degree: "Master of Computer Applications (MCA)",
    institution: "New Horizon College of Engineering, Bengaluru",
    duration: "Dec 2023 – Aug 2025",
    cgpa: "7.97",
    period: "Dec 2023 – Aug 2025"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "L.N. Mishra Institute, Patna",
    duration: "Oct 2020 – Jul 2023",
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

export const certificationDetails = [
  { name: "SQL Server Foundations", issuer: "ScholarHat" },
  { name: "Full-Stack Web Development", issuer: "Udemy" },
  { name: "The Joy of Computing Using Python", issuer: "NPTEL" }
];
