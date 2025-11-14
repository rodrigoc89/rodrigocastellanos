import type { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Rodrigo Joaquín Castellanos',
    title: 'Full Stack Developer',
    age: 36,
    nationality: 'Argentina',
    location: 'La Banda, Santiago del Estero',
    bio: 'Desarrollador web apasionado con experiencia en frontend y backend. Me especializo en crear aplicaciones web modernas, escalables y centradas en el usuario, utilizando las últimas tecnologías y mejores prácticas de la industria.',
    email: 'rodriojoaquinc89@gmail.com',
    social: {
      github: 'https://github.com/rodrigoc89',
      linkedin: 'https://www.linkedin.com/in/rodrigo-j-castellanos/',
      website: 'https://rodrigocastellanos.dev',
    },
  },

  skills: [
    // Frontend
    { name: 'React', level: 'expert', category: 'frontend' },
    { name: 'TypeScript', level: 'advanced', category: 'frontend' },
    { name: 'JavaScript', level: 'expert', category: 'frontend' },
    { name: 'HTML5', level: 'expert', category: 'frontend' },
    { name: 'CSS3', level: 'advanced', category: 'frontend' },
    { name: 'Tailwind CSS', level: 'advanced', category: 'frontend' },
    { name: 'Next.js', level: 'advanced', category: 'frontend' },
    { name: 'Vue.js', level: 'intermediate', category: 'frontend' },

    // Backend
    { name: 'Node.js', level: 'advanced', category: 'backend' },
    { name: 'Express', level: 'advanced', category: 'backend' },
    { name: 'NestJS', level: 'intermediate', category: 'backend' },
    { name: 'Python', level: 'intermediate', category: 'backend' },
    { name: 'RESTful APIs', level: 'advanced', category: 'backend' },
    { name: 'GraphQL', level: 'intermediate', category: 'backend' },

    // Database
    { name: 'PostgreSQL', level: 'advanced', category: 'database' },
    { name: 'MongoDB', level: 'advanced', category: 'database' },
    { name: 'MySQL', level: 'intermediate', category: 'database' },
    { name: 'Redis', level: 'intermediate', category: 'database' },

    // DevOps & Tools
    { name: 'Git', level: 'advanced', category: 'tools' },
    { name: 'Docker', level: 'intermediate', category: 'devops' },
    { name: 'CI/CD', level: 'intermediate', category: 'devops' },
    { name: 'AWS', level: 'intermediate', category: 'devops' },
    { name: 'Vercel', level: 'advanced', category: 'devops' },
  ],

  experience: [
    {
      id: 'exp-1',
      company: 'Tech Solutions SA',
      position: 'Senior Full Stack Developer',
      location: 'Buenos Aires, Argentina',
      startDate: '2022-03',
      endDate: 'present',
      description:
        'Desarrollo y mantenimiento de aplicaciones web empresariales utilizando React, Node.js y PostgreSQL.',
      achievements: [
        'Lideré la migración de una aplicación legacy a una arquitectura moderna con React y TypeScript',
        'Implementé un sistema de caché con Redis que redujo los tiempos de carga en un 60%',
        'Mentoría a 3 desarrolladores junior en mejores prácticas de código',
        'Reduje el tiempo de build en un 40% optimizando la configuración de Webpack',
      ],
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'Redis',
        'Docker',
        'AWS',
      ],
    },
    {
      id: 'exp-2',
      company: 'Digital Agency',
      position: 'Full Stack Developer',
      location: 'Córdoba, Argentina',
      startDate: '2020-01',
      endDate: '2022-02',
      description:
        'Desarrollo de sitios web y aplicaciones para clientes de diversos sectores.',
      achievements: [
        'Desarrollé más de 15 proyectos web exitosos para clientes',
        'Implementé un sistema de CMS personalizado usando Next.js y Strapi',
        'Optimicé el SEO de múltiples sitios logrando mejoras del 80% en rankings',
        'Establecí flujos de trabajo con Git y CI/CD para el equipo',
      ],
      technologies: [
        'React',
        'Next.js',
        'Node.js',
        'MongoDB',
        'Tailwind CSS',
        'Vercel',
      ],
    },
    {
      id: 'exp-3',
      company: 'Freelance',
      position: 'Desarrollador Web',
      location: 'Remoto',
      startDate: '2018-06',
      endDate: '2019-12',
      description:
        'Desarrollo de sitios web y aplicaciones para clientes internacionales.',
      achievements: [
        'Trabajé con más de 20 clientes de Argentina, México y España',
        'Desarrollé e-commerce completos con pasarelas de pago integradas',
        'Creé landing pages de alto rendimiento con tasas de conversión superiores al 5%',
      ],
      technologies: [
        'JavaScript',
        'React',
        'Vue.js',
        'PHP',
        'MySQL',
        'WordPress',
      ],
    },
  ],

  projects: [
    {
      id: 'proj-1',
      title: 'E-commerce Platform',
      description:
        'Plataforma de comercio electrónico completa con carrito, pagos y panel de administración',
      longDescription:
        'Sistema completo de e-commerce desarrollado con Next.js y Stripe para pagos. Incluye gestión de inventario, procesamiento de órdenes, y analytics en tiempo real.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Stripe',
        'PostgreSQL',
        'Prisma',
        'Tailwind CSS',
      ],
      github: 'https://github.com/rodrigoc89/ecommerce-platform',
      demo: 'https://demo-ecommerce.vercel.app',
      featured: true,
      startDate: '2024-01',
    },
    {
      id: 'proj-2',
      title: 'Task Management App',
      description:
        'Aplicación de gestión de tareas con colaboración en tiempo real',
      longDescription:
        'Herramienta de productividad tipo Trello con funcionalidades de arrastrar y soltar, asignación de tareas, y notificaciones en tiempo real usando WebSockets.',
      technologies: [
        'React',
        'Node.js',
        'Socket.io',
        'MongoDB',
        'Express',
        'Material-UI',
      ],
      github: 'https://github.com/rodrigoc89/task-manager',
      demo: 'https://task-manager-demo.vercel.app',
      featured: true,
      startDate: '2023-08',
      endDate: '2023-11',
    },
    {
      id: 'proj-3',
      title: 'Weather Dashboard',
      description: 'Dashboard del clima con gráficos y pronósticos extendidos',
      longDescription:
        'Aplicación que muestra información meteorológica detallada con gráficos interactivos, pronósticos de 7 días y geolocalización.',
      technologies: [
        'React',
        'TypeScript',
        'Chart.js',
        'OpenWeather API',
        'Vite',
      ],
      github: 'https://github.com/rodrigoc89/weather-dashboard',
      demo: 'https://weather-dashboard-demo.vercel.app',
      featured: false,
      startDate: '2023-05',
      endDate: '2023-06',
    },
    {
      id: 'proj-4',
      title: 'Blog Platform',
      description: 'Plataforma de blogging con CMS headless y markdown',
      technologies: ['Next.js', 'MDX', 'Contentlayer', 'Tailwind CSS'],
      github: 'https://github.com/rodrigoc89/blog-platform',
      featured: false,
      startDate: '2023-03',
    },
  ],

  education: [
    {
      id: 'edu-1',
      institution: 'Universidad Nacional de Córdoba',
      degree: 'Licenciatura',
      field: 'Ciencias de la Computación',
      location: 'Córdoba, Argentina',
      startDate: '2015',
      endDate: '2020',
      description:
        'Estudios en algoritmos, estructuras de datos, bases de datos, ingeniería de software y desarrollo web.',
      grade: '8.5/10',
    },
  ],

  certifications: [
    {
      id: 'cert-1',
      name: 'Advanced React and TypeScript',
      issuer: 'Frontend Masters',
      date: '2024-01',
      url: 'https://frontendmasters.com/certificates/',
    },
    {
      id: 'cert-2',
      name: 'Node.js Application Developer',
      issuer: 'OpenJS Foundation',
      date: '2023-06',
      credentialId: 'NODEJS-2023-12345',
    },
    {
      id: 'cert-3',
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023-03',
      credentialId: 'AWS-CCP-2023',
      url: 'https://aws.amazon.com/certification/',
    },
  ],
};
