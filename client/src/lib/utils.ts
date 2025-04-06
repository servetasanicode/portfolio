import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const techStacks = [
  {
    name: "Angular",
    icon: "fab fa-angular",
    color: "text-primary",
    level: "Advanced",
    percentage: 95
  },
  {
    name: "React",
    icon: "fab fa-react",
    color: "text-secondary",
    level: "Advanced",
    percentage: 85
  },
  {
    name: "Node.js",
    icon: "fab fa-node-js",
    color: "text-accent",
    level: "Proficient",
    percentage: 80
  },
  {
    name: "Python",
    icon: "fab fa-python",
    color: "text-primary",
    level: "Proficient",
    percentage: 75
  },
  {
    name: "Next.js",
    icon: "fab fa-react",
    color: "text-secondary",
    level: "Advanced",
    percentage: 85
  },
  {
    name: "React Native",
    icon: "fas fa-mobile-alt",
    color: "text-accent",
    level: "Proficient",
    percentage: 80
  },
  {
    name: "C#/.NET",
    icon: "fab fa-microsoft",
    color: "text-primary",
    level: "Advanced",
    percentage: 85
  },
  {
    name: "Firebase",
    icon: "fas fa-fire",
    color: "text-secondary",
    level: "Proficient",
    percentage: 75
  }
];

export const specialSkills = [
  { name: "Multilingual Support", icon: "fas fa-globe", color: "text-primary" },
  { name: "Performance Optimization", icon: "fas fa-tachometer-alt", color: "text-secondary" },
  { name: "SEO Optimization", icon: "fas fa-search", color: "text-accent" },
  { name: "Role-based Access Control", icon: "fas fa-shield-alt", color: "text-primary" },
  { name: "Dynamic Styling", icon: "fas fa-palette", color: "text-secondary" },
  { name: "CMS Integration", icon: "fas fa-database", color: "text-accent" }
];

export const projects = [
  {
    id: 1,
    title: "Modern Product Showcase",
    description: "A sleek commercial website with multilingual CMS integration, designed for showcasing services globally.",
    image: "/images/neo-swiss.png",
    category: "Angular",
    tags: ["Angular", "Strapi CMS", "i18n", "TailwindCSS", "Docker"],
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Point-of-Sale Web App",
    description: "An all-in-one solution for managing retail transactions, inventory, and customer insights through a responsive interface.",
    image: "/images/vendify.png",
    category: "React",
    tags: ["React", "Redux", "Node.js", "MongoDB", "Express", "Material UI"],
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Equestrian Services Website",
    description: "An engaging website for a horseback riding service with interactive content and booking capabilities.",
    image: "/images/horse-riding.png",
    category: "React Native",
    tags: ["React Native", "Firebase", "Expo", "Styled Components"],
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Digital Banking Web Platform",
    description: "Secure financial platform with features for transaction history, budgeting, and account management.",
    image: "/images/my-neo.png",
    category: "React",
    tags: ["React", "TypeScript", "Redux Toolkit", "Node.js", "JWT", "REST API"],
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Business Intelligence Dashboard",
    description: "Data analytics tool with real-time KPIs, charts, and predictive reporting for enterprise insights.",
    image: "/images/neo-analytics.png",
    category: "React",
    tags: ["React", "D3.js", "Chart.js", "Express", "WebSockets", "PostgreSQL"],
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Real Estate Listing Website",
    description: "A high-performance SSR platform with property listings, virtual tours, and advanced filtering.",
    image: "/images/invest-house.png",
    category: "Angular",
    tags: ["Angular", "Strapi CMS", "SEO", "Cloudinary", "GraphQL"],
    projectUrl: "#",
    githubUrl: "#"
  }
];



export const experiences = [
  {
    id: 1,
    role: "Web Developer",
    company: "iSolve",
    period: "2021 - Present",
    description: "Led complex Angular projects with rapid skill acceleration. Implemented CMS integration, SSR, multilingual support, and performance optimization techniques.",
    skills: ["Angular", "Strapi CMS", "React Native", "Ionic", "Node.js", "Flask", ".NET", "SEO"],
    borderColor: "border-primary/20 hover:border-primary/40"
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2020 - Present",
    description: "Developed two React Native applications, including a Firebase-integrated mobile solution. Created responsive web applications with Next.js and backend solutions.",
    skills: ["React Native", "Firebase", "Next.js", "Node.js", "React", "Redux", "Nest.js"],
    borderColor: "border-secondary/20 hover:border-secondary/40"
  }
];

export const contactInfo = {
  email: "servetasani.bussines@gmail.com",
  location: "Remote / Worldwide",
  workingHours: "Whenever, wherever"
};
