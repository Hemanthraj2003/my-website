export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'desktop' | 'fullstack';
  status: 'completed' | 'in-progress' | 'planned';
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  challenges?: string[];
  learnings?: string[];
}

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and TypeScript',
    longDescription: 'This portfolio website showcases my skills and projects with a modern design. Built using Next.js 14, TypeScript, and Tailwind CSS, it features responsive design, smooth animations, and optimized performance.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'DaisyUI'],
    category: 'web',
    status: 'completed',
    githubUrl: 'https://github.com/Hemanthraj2003/my-website',
    demoUrl: 'https://hemanthraj.dev',
    features: [
      'Responsive design for all devices',
      'Modern UI with smooth animations',
      'SEO optimized',
      'Fast loading with Next.js optimization',
      'Interactive skill showcase',
      'Contact form integration'
    ],
    challenges: [
      'Implementing smooth animations without affecting performance',
      'Creating a responsive design that works across all devices',
      'Optimizing images and assets for fast loading'
    ],
    learnings: [
      'Advanced Next.js features and optimization techniques',
      'Modern CSS animations and transitions',
      'SEO best practices for React applications'
    ]
  },
  {
    id: 'task-management-app',
    title: 'Task Management Application',
    description: 'A full-stack task management app with real-time updates and team collaboration',
    longDescription: 'A comprehensive task management solution built with the MERN stack. Features include real-time updates, team collaboration, project organization, and advanced filtering capabilities.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
    category: 'fullstack',
    status: 'in-progress',
    githubUrl: 'https://github.com/Hemanthraj2003/task-manager',
    features: [
      'Real-time task updates using Socket.io',
      'User authentication and authorization',
      'Team collaboration and project sharing',
      'Advanced task filtering and sorting',
      'File attachments and comments',
      'Email notifications'
    ],
    challenges: [
      'Implementing real-time updates efficiently',
      'Managing complex state with multiple users',
      'Designing scalable database schema'
    ],
    learnings: [
      'Real-time communication with WebSockets',
      'Advanced MongoDB aggregation pipelines',
      'JWT authentication best practices'
    ]
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast App',
    description: 'A React Native weather app with location-based forecasts and beautiful UI',
    longDescription: 'A mobile weather application that provides accurate weather forecasts based on user location. Features beautiful animations, detailed weather information, and offline capabilities.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'Weather API', 'AsyncStorage'],
    category: 'mobile',
    status: 'completed',
    githubUrl: 'https://github.com/Hemanthraj2003/weather-app',
    features: [
      'Location-based weather forecasts',
      'Beautiful weather animations',
      '7-day weather forecast',
      'Offline data caching',
      'Multiple location support',
      'Weather alerts and notifications'
    ],
    challenges: [
      'Handling location permissions across platforms',
      'Creating smooth weather animations',
      'Implementing offline functionality'
    ],
    learnings: [
      'React Native development best practices',
      'Working with device APIs and permissions',
      'Optimizing mobile app performance'
    ]
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with payment integration and admin dashboard',
    longDescription: 'A complete e-commerce solution featuring product management, shopping cart, payment processing, and comprehensive admin dashboard. Built with modern technologies for scalability and performance.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    category: 'fullstack',
    status: 'planned',
    features: [
      'Product catalog with search and filtering',
      'Shopping cart and wishlist functionality',
      'Secure payment processing with Stripe',
      'User authentication and profiles',
      'Admin dashboard for inventory management',
      'Order tracking and management'
    ],
    challenges: [
      'Implementing secure payment processing',
      'Managing complex product variations',
      'Building scalable inventory system'
    ],
    learnings: [
      'Payment gateway integration',
      'Database design for e-commerce',
      'Security best practices for financial data'
    ]
  },
  {
    id: 'chat-application',
    title: 'Real-time Chat Application',
    description: 'A real-time chat app with group messaging and file sharing capabilities',
    longDescription: 'A modern chat application supporting real-time messaging, group chats, file sharing, and emoji reactions. Built with Socket.io for instant communication and MongoDB for message persistence.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js', 'Cloudinary'],
    category: 'fullstack',
    status: 'completed',
    githubUrl: 'https://github.com/Hemanthraj2003/chat-app',
    features: [
      'Real-time messaging with Socket.io',
      'Group chat functionality',
      'File and image sharing',
      'Emoji reactions and typing indicators',
      'Message history and search',
      'User presence indicators'
    ],
    challenges: [
      'Handling multiple concurrent connections',
      'Implementing efficient message delivery',
      'Managing file uploads and storage'
    ],
    learnings: [
      'WebSocket communication patterns',
      'Real-time application architecture',
      'File upload and cloud storage integration'
    ]
  }
];

export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.category === category);
};

export const getProjectsByStatus = (status: string) => {
  return projects.filter(project => project.status === status);
};
