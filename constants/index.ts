import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/trithanka",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/trithanka",
  },
  {
    name: "Email",
    icon: RxInstagramLogo,
    link: "mailto:trithanka.dev@gmail.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Modern Next.js 14 Portfolio",
    description: "A modern, dynamic portfolio built with Next.js 14 to showcase web development skills.",
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "Interactive Cards Portfolio",
    description: "An interactive portfolio using cards to present skills and projects in a visually engaging way.",
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "Space Themed Website",
    description: "A visually stunning website with a space theme and immersive user experience.",
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
] as const;

export const PERSONAL_PROJECTS = [
  {
    title: "Government Job Portal",
    date: "Mar 2024 - Present",
    description: "A scalable job portal for government recruitment with OTP login and real-time dashboards.",
    technologies: ["Node.js", "Express", "MySQL", "OTP Auth", "Redis", "JWT"]
  },
  {
    title: "National Registration Portal",
    date: "Jan 2024 - Present",
    description: "Unified backend for nationwide candidate registration with identity verification.",
    technologies: ["Node.js", "MongoDB", "API Integration", "NLP", "Validation"]
  },
  {
    title: "HR Management System",
    date: "Apr 2024 - Present", 
    description: "HR platform for automated workflows and performance tracking in government departments.",
    technologies: ["Node.js", "Express", "MongoDB", "Access Control", "Reporting"]
  },
  {
    title: "AI University Chatbot",
    date: "Mar 2023 - Jun 2023",
    description: "NLP-powered chatbot for university queries, built from scratch without external libraries.",
    technologies: ["Node.js", "NLP", "AI/ML", "Messaging API", "Text Analysis"]
  },
  {
    title: "Convergence Dashboard for Government Department",
    date: "2023 - Present",
    description: "Dashboard for real-time monitoring and reporting of government KPIs.",
    technologies: ["React", "Node.js", "Express", "MySQL", "Chart.js", "REST API"]
  },
  {
    title: "Attendance & Leave Management App",
    date: "2023 - Present",
    description: "App for employee attendance, leave management, and notifications.",
    technologies: ["React Native", "Node.js", "Express", "MongoDB", "Push Notifications"]
  },
  {
    title: "Picbin Garbage Management System (Freelance)",
    date: "2022 - 2023",
    description: "Smart garbage collection system with real-time bin status and route optimization.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "IoT Integration"]
  },
  {
    title: "Compare-Kro (Online Price Compare - Web Scraping)",
    date: "2022 - 2023",
    description: "Platform for comparing product prices across e-commerce sites using web scraping.",
    technologies: ["Next.js", "Node.js", "Puppeteer", "MongoDB", "REST API"]
  },
  {
    title: "MIS System for Government Body",
    date: "2021 - 2022",
    description: "MIS for government data-driven decision making and workflow automation.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Reporting"]
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#personal-projects",
  },
  {
    title: "Contact Me",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};

export const EXPERIENCE_DATA = [
  {
    title: "Senior Backend Developer (Node.js + MySQL)",
    company: "Cognitive Tech",
    date: "May 2024 - Present",
    location: "Assam, India",
    description: [
      "Developing and maintaining scalable backend systems using Node.js and MySQL to support multiple large-scale government applications.",
      "Designing RESTful APIs and optimizing MySQL queries for performance and reliability across multiple modules.",
      "Collaborating with frontend teams to integrate APIs and ensure seamless end-to-end delivery.",
      "Participating in code reviews, debugging sessions, and production-level deployments to enhance system efficiency and reduce downtime.",
      "Managing backend architecture and development for multiple State Government departments and public service systems."
    ],
    technologies: ["Node.js", "MySQL", "REST API", "Express", "Government Projects"],
    logo: ""
  },
  {
    title: "Graduate Engineer Trainee",
    company: "_VOIS (Vodafone Intelligence Solution)",
    date: "Aug 2023 - Apr 2024",
    location: "Pune, India",
    description: [
      "Integrated MongoDB with Node.js and Express to develop a scalable backend system capable of efficiently handling over 10,000 concurrent user requests.",
      "Enhanced database queries and schema designs to enhance performance and scalability, resulting in a 50% reduction in server load.",
      "Participated in over 20 code reviews, providing detailed feedback that led to a 30% increase in code quality and contributed to fostering a culture of continuous improvement.",
      "Participated in Agile sprint planning and daily stand-ups, collaborating closely with cross-functional teams to deliver features on schedule."
    ],
    technologies: ["Node.js", "MongoDB", "Express", "Agile", "Code Review"],
    logo: ""
  },
  {
    title: "Backend Developer",
    company: "Aptech Pvt Ltd",
    date: "Nov 2021 - Dec 2021",
    location: "Guwahati, India",
    description: [
      "Developed and maintained backend systems for managing exam registration, ensuring seamless functionality and data integrity.",
      "Created and implemented a robust system for administering UGC NET 2021 in Guwahati, facilitating smooth registration and examination processes.",
      "Ensured the scalability and reliability of the backend infrastructure to handle large volumes of concurrent users, Achieved a 50% reduction in system downtime."
    ],
    technologies: ["Node.js", "Express", "Exam Systems", "UGC NET"],
    logo: ""
  }
] as const;

export const CONTACT_INFO = {
  email: "trithanka.dev@gmail.com",
  phone: "+91 8638361258",
  linkedin: "linkedin.com/in/trithanka",
  github: "github.com/trithanka"
} as const;
