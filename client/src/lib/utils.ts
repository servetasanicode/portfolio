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
    title: "E-commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce management with role-based access control and multilingual support.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Angular",
    tags: ["Angular", "Strapi CMS", "i18n"],
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "Mobile application for tracking workouts, nutrition, and progress with offline capability and cloud synchronization.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Mobile",
    tags: ["React Native", "Firebase", "Redux"],
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Real Estate Platform",
    description: "SSR-optimized real estate listing platform with advanced search, filters, and virtual tour capabilities.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Next.js",
    tags: ["Next.js", "Strapi CMS", "SEO"],
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Delivery Logistics App",
    description: "Mobile application for managing delivery routes, tracking packages, and optimizing delivery performance.",
    image: "https://images.unsplash.com/photo-1586892478025-2b5472316f22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Mobile",
    tags: ["React Native", "Maps API", "Node.js"],
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Healthcare Portal",
    description: "Secure patient portal with appointment scheduling, medical record access, and doctor communication features.",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Angular",
    tags: ["Angular", "ASP.NET", "OAuth"],
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Financial Dashboard",
    description: "Interactive financial analytics platform with real-time data visualization, reporting, and forecasting tools.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "React",
    tags: ["React", "D3.js", "Express"],
    projectUrl: "#",
    githubUrl: "#"
  }
];

export const experiences = [
  {
    id: 1,
    role: "Angular Developer",
    company: "iSolve",
    period: "2021 - Present",
    description: "Led complex Angular projects with rapid skill acceleration. Implemented CMS integration, SSR, multilingual support, and performance optimization techniques.",
    skills: ["Angular", "Strapi CMS", "i18n", "SEO"],
    borderColor: "border-primary/20 hover:border-primary/40"
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2020 - Present",
    description: "Developed two React Native applications, including a Firebase-integrated mobile solution. Created responsive web applications with Next.js and backend solutions.",
    skills: ["React Native", "Firebase", "Next.js", "Node.js"],
    borderColor: "border-secondary/20 hover:border-secondary/40"
  },
  {
    id: 3,
    role: "Backend Developer",
    company: "Tech Solutions",
    period: "2019 - 2021",
    description: "Focused on C# and ASP.NET backend development with Python Flask for microservices. Built RESTful APIs and database solutions for enterprise applications.",
    skills: ["C#", "ASP.NET", "Python", "SQL"],
    borderColor: "border-accent/20 hover:border-accent/40"
  }
];

export const contactInfo = {
  email: "contact@yourdomain.com",
  location: "Remote / Worldwide",
  workingHours: "Mon - Fri, 9AM - 6PM"
};
