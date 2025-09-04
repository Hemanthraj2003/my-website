export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "web" | "mobile" | "desktop" | "fullstack";
  status: "completed" | "in-progress" | "planned";
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  challenges?: string[];
  learnings?: string[];
}

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and TypeScript",
    longDescription:
      "This portfolio website showcases my skills and projects with a modern design. Built using Next.js 14, TypeScript, and Tailwind CSS, it features responsive design, smooth animations, and optimized performance.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "DaisyUI"],
    category: "web",
    status: "completed",
    githubUrl: "https://github.com/Hemanthraj2003/my-website",
    demoUrl: "https://hemanth-raj.netlify.app",
    features: [
      "Responsive design for all devices",
      "Modern UI with smooth animations",
      "SEO optimized",
      "Fast loading with Next.js optimization",
      "Interactive skill showcase",
      "Contact form integration",
    ],
    challenges: [
      "Implementing smooth animations without affecting performance",
      "Creating a responsive design that works across all devices",
      "Optimizing images and assets for fast loading",
    ],
    learnings: [
      "Advanced Next.js features and optimization techniques",
      "Modern CSS animations and transitions",
      "SEO best practices for React applications",
    ],
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    description:
      "A comprehensive library management system built with Next.js and TypeScript",
    longDescription:
      "A full-featured library management system designed to handle book inventory, user management, and lending operations. Built with modern web technologies for optimal performance and user experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    category: "web",
    status: "completed",
    githubUrl: "https://github.com/Hemanthraj2003/library-management-system",
    demoUrl: "https://github.com/Hemanthraj2003/library-management-system",
    features: [
      "Book inventory management",
      "User registration and management",
      "Book lending and return system",
      "Search and filter functionality",
      "Responsive design",
      "Admin dashboard",
    ],
    challenges: [
      "Designing efficient database schema for library operations",
      "Implementing complex search and filter logic",
      "Managing state for multiple user roles",
    ],
    learnings: [
      "Advanced database design patterns",
      "Role-based access control implementation",
      "Complex state management in React",
    ],
  },
  {
    id: "youtube-clone",
    title: "YouTube Clone",
    description:
      "A feature-rich YouTube clone built with React and modern web technologies",
    longDescription:
      "A comprehensive video streaming platform that replicates core YouTube functionalities. Features video playback, search capabilities, and responsive design for optimal viewing experience across devices.",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    category: "web",
    status: "completed",
    githubUrl: "https://github.com/Hemanthraj2003/youtubeclone",
    demoUrl: "https://raj-youtube-clone.netlify.app/",
    features: [
      "Video streaming and playback",
      "Search functionality",
      "Responsive video player",
      "Video recommendations",
      "Modern UI design",
      "Mobile-friendly interface",
    ],
    challenges: [
      "Implementing smooth video playback experience",
      "Building responsive video player controls",
      "Optimizing performance for video content",
    ],
    learnings: [
      "Video streaming implementation",
      "Advanced React component architecture",
      "Performance optimization for media content",
    ],
  },
  {
    id: "friends-cars-resale",
    title: "Friends Cars - Car Resale Platform",
    description:
      "A comprehensive car resale platform with mobile app, admin panel, and backend API",
    longDescription:
      "A complete car resale solution featuring React Native mobile app, Next.js admin dashboard, and Node.js backend. This mono-repo project includes advanced filtering, real-time chat, and comprehensive car management features.",
    technologies: [
      "React Native",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Firebase",
      "Expo",
    ],
    category: "fullstack",
    status: "completed",
    githubUrl: "https://github.com/Hemanthraj2003/PROJECT_01",
    demoUrl: "https://project-01-admin-pannel.vercel.app/",
    features: [
      "Mobile app with advanced car filtering",
      "Admin dashboard for car management",
      "Real-time chat functionality",
      "Image upload and processing",
      "Offline support for mobile app",
      "Firebase integration",
      "Multi-platform deployment",
    ],
    challenges: [
      "Managing mono-repo architecture",
      "Implementing real-time features across platforms",
      "Coordinating mobile, web, and backend development",
    ],
    learnings: [
      "Mono-repo project management",
      "Cross-platform development coordination",
      "Firebase real-time database implementation",
    ],
  },
  {
    id: "pixelpirate-anime-platform",
    title: "PixelPirate - Anime Listing Platform",
    description:
      "An anime content management and streaming platform with admin panel and Telegram integration",
    longDescription:
      "A comprehensive anime platform featuring content management, episode tracking, and Telegram bot integration. Built with React, TypeScript, and Supabase for modern anime content organization and distribution.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "Tailwind CSS",
      "Telegram API",
    ],
    category: "web",
    status: "in-progress",
    githubUrl: "https://github.com/Hemanthraj2003/PixelPirate",
    demoUrl: "https://pixelpirate.netlify.app/home",
    features: [
      "Anime content management system",
      "Episode and season organization",
      "Admin panel for content moderation",
      "Telegram bot integration",
      "File link management",
      "Quality-based content organization",
      "Mobile-responsive design",
    ],
    challenges: [
      "Building complex content management hierarchy",
      "Integrating Telegram API for content distribution",
      "Managing large amounts of media metadata",
    ],
    learnings: [
      "Complex database relationships and management",
      "Telegram API integration",
      "Content management system architecture",
    ],
  },
];

export const getProjectsByCategory = (category: string) => {
  return projects.filter((project) => project.category === category);
};

export const getProjectsByStatus = (status: string) => {
  return projects.filter((project) => project.status === status);
};
