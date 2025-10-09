export type ProjectLink = {
  label: string
  url: string
}

export type Project = {
  slug: string
  title: string
  subtitle?: string
  coverImage: string
  gallery?: string[]
  description: string
  role?: string
  responsibilities?: string[]
  outcomes?: string[]
  techStack: string[]
  links?: ProjectLink[]
  year?: number
}

export const projects: Project[] = [
  {
    slug: "gallery-slansky",
    title: "Gallery Slansky",
    subtitle: "E-commerce website for art gallery",
    coverImage: "/gallery-slansky.png",
    gallery: ["/gallery-slansky.png", "/gallery-slansky-shop.png", "/gallery-slansky-poster.png"],
    description:
      "Modern e-commerce website for Markus Slansky art gallery with responsive design, animations and full online store functionality. Payment systems integration and content management system. All in one solution for art gallery.",
    role: "Full-featured online store development and UI/UX design",
    responsibilities: [
      "E-commerce platform architecture design",
      "Full-featured online store development",
      "Stripe payment system integration",
      "Content management system development",
      "Admin panel development",
    ],
    outcomes: [
      "online store with full functionality",
      "fast, responsive and beautiful design with two themes",
      "outstanding user experience",
      "admin panel with outstanding functionality",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "Prisma",
      "MongoDB",
      "TailwindCSS",
      "i18next",
      "Framer Motion",
      "more...",
    ],
    links: [
      { label: "Website", url: "https://galerieslansky.com/" },
    ],
    year: 2025,
  },
  {
    slug: "cireon-studio",
    title: "Cireon Studio",
    subtitle: "Digital studio landing page with AI and 3D",
    coverImage: "/cireon-studio.png",
    gallery: ["/cireon-studio.png", "/cireon-studio-studio.png", "/cireon-studio-numbers.png"],
    description:
      "Digital studio landing page with modern design, 3D elements and AI functions integration. Interactive animations, responsive layout and optimized performance.",
    role: "Development of our own studio landing page",
    responsibilities: [
      "3D scene and interactive elements creation",
      "Animation and transition system development",
      "AI chatbot integration with OpenAI API",
      "Performance optimization",
    ],
    outcomes: [
      "Beautiful and responsive design",
      "Interactive animations",
      "AI chatbot with OpenAI API",
      "Performance optimization",
    ],
    techStack: [
      "Next.js",
      "Three.js",
      "React Three Fiber",
      "Framer Motion",
      "TypeScript",
      "TailwindCSS",
      "OpenAI API",
      "more...",
    ],
    year: 2025,
  },
  {
    slug: "kids-only",
    title: "Kids Only",
    subtitle: "Newsletter subscription platform",
    coverImage: "/kids-only-app.png",
    gallery: ["/kids-only-app.png", "/kids-only-editor.png", "/kids-only-dashboard.png"],
    description:
      "Newsletter subscription platform for clothing store with full-featured admin panel and advanced email template editor. Analytics system and email campaign automation.",
    role: "Full-stack development",
    responsibilities: [
      "Subscription management system development",
      "Visual email template editor creation",
      "Email providers integration",
      "Analytics and reporting implementation",
      "Subscription form with validation and autocompletion", 
    ],
    outcomes: [
      "newsletter subscription platform",
      "advanced email template editor",
      "analytics system",
      "email campaign automation",
      "subscription form with validation and autocompletion",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Brevo",
      "React Hook Form",
      "Recharts",
      "TailwindCSS",
      "more...",
    ],
    year: 2025,
  },
  {
    slug: "goldlagerhaus",
    title: "Goldlagerhaus",
    subtitle: "Corporate website for Goldlagerhaus company",
    coverImage: "/goldlagerhaus-site.png",
    gallery: ["/goldlagerhaus-site.png", "/goldlagerhaus-site-cards.png", "/goldlagerhaus-site-mine.png"],
    description:
      "Corporate website for Goldlagerhaus company with modern design and newsletter subscription form. Multilingual support and SEO setup.",
    role: "Full-stack development",
    responsibilities: [
      "Multilingual interface development",
      "Corporate website development",
      "SEO setup",
      "UX/UI design",
    ],
    outcomes: [
      "corporate website for Goldlagerhaus company",
      "multilingual support",
      "improved user experience",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "MongoDB",
      "i18next",
      "TailwindCSS",
      "more...",
    ],
    links: [
      { label: "Website", url: "https://goldlagerhaus.com" },
    ],
    year: 2025,
  },
  /*{
    slug: "cnotes",
    title: "CNotes",
    subtitle: "Hair salon management system",
    coverImage: "/cnotes-app.png",
    gallery: ["/cnotes-app.png", "/mobile-app-ui.png", "/ai-dashboard-ui.png"],
    description:
      "Web application for hair salon with appointment booking system and financial management. Mobile version, appointment calendar, notification system and analytics.",
    role: "Full-stack development",
    responsibilities: [
      "Appointment booking system development",
      "Financial module creation",
      "Calendar systems integration",
      "Mobile version development",
    ],
    outcomes: [
      "80% salon process automation",
      "45% increase in client count",
      "60% reduction in administration time",
    ],
    techStack: [
      "Next.js",
      "React Native",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Calendar API",
      "Push Notifications",
      "more...",
    ],
    year: 2024,
  },*/
]

export function getProjects(): Project[] {
  return projects.sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

