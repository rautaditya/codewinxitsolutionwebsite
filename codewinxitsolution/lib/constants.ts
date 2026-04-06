export const SITE_NAME = "CodeWinx IT Solutions";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://codewinxitsolution.com";
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@codewinxitsolution.com";
export const PHONE = process.env.NEXT_PUBLIC_PHONE || "+91-XXXXXXXXXX";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: 1,
    title: "Web Development",
    slug: "web-development",
    icon: "Globe",
    description:
      "We craft blazing-fast, responsive websites and web apps using modern frameworks like Next.js, React, and Node.js — built to scale.",
    features: ["Custom Web Apps", "E-Commerce Solutions", "CMS Integration", "API Development"],
    image: "/images/services/web-development.jpg",
  },
  {
    id: 2,
    title: "Mobile App Development",
    slug: "mobile-development",
    icon: "Smartphone",
    description:
      "Native and cross-platform mobile apps for iOS & Android using React Native and Flutter — delivering seamless user experiences.",
    features: ["iOS & Android Apps", "Cross-Platform Development", "UI/UX Design", "App Store Deployment"],
    image: "/images/services/mobile-development.jpg",
  },
  {
    id: 3,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    icon: "Palette",
    description:
      "Design that converts. We create intuitive, visually compelling interfaces grounded in user research and interaction design principles.",
    features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
    image: "/images/services/ui-ux-design.jpg",
  },
  {
    id: 4,
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    icon: "Cloud",
    description:
      "From AWS and GCP to CI/CD pipelines and containerization — we set up infrastructure that's reliable, secure, and cost-efficient.",
    features: ["AWS / GCP / Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Server Monitoring"],
    image: "/images/services/cloud-devops.jpg",
  },
  {
    id: 5,
    title: "AI & Automation",
    slug: "ai-automation",
    icon: "Bot",
    description:
      "Integrate intelligent automation into your business — from chatbots and recommendation engines to custom ML model deployment.",
    features: ["AI Chatbots", "ML Model Integration", "Process Automation", "Data Analytics"],
    image: "/images/services/ai-automation.jpg",
  },
  {
    id: 6,
    title: "Digital Marketing & SEO",
    slug: "digital-marketing",
    icon: "TrendingUp",
    description:
      "Growth-focused digital marketing — technical SEO, content strategy, paid campaigns, and analytics to drive measurable results.",
    features: ["Technical SEO", "Google Ads", "Social Media Marketing", "Analytics & Reporting"],
    image: "/images/services/digital-marketing.jpg",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "ShopNest E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-featured multi-vendor e-commerce platform with real-time inventory, Razorpay integration, and an admin dashboard built with Next.js and Node.js.",
    tech: ["Next.js", "Node.js", "MongoDB", "Razorpay", "Tailwind CSS"],
    image: "/images/projects/shopnest.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "HealthTrack Mobile App",
    category: "Mobile Development",
    description:
      "A React Native health tracking app with wearable device sync, nutrition logging, and AI-powered insights for 10,000+ users.",
    tech: ["React Native", "Firebase", "Node.js", "OpenAI API"],
    image: "/images/projects/healthtrack.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "LearnX LMS Platform",
    category: "Web Development",
    description:
      "A scalable Learning Management System with live classes, course builder, certificate generation, and payment gateway integration.",
    tech: ["React", "Django", "PostgreSQL", "AWS S3", "WebRTC"],
    image: "/images/projects/learnx.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "AutoBot CRM Automation",
    category: "AI & Automation",
    description:
      "AI-powered CRM automation tool that qualifies leads, sends follow-up emails, and generates weekly sales reports — saving 20+ hours/week.",
    tech: ["Python", "OpenAI", "Zapier", "HubSpot API", "FastAPI"],
    image: "/images/projects/autobot.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Skynest Property Portal",
    category: "Web Development",
    description:
      "A real estate listing portal with map-based search, virtual tours, mortgage calculator, and a broker CMS panel.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Google Maps API", "Framer Motion"],
    image: "/images/projects/skynest.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "PulseAdmin SaaS Dashboard",
    category: "UI/UX Design",
    description:
      "A data-rich SaaS analytics dashboard with real-time charts, team collaboration, and role-based access control.",
    tech: ["React", "Recharts", "Node.js", "Redis", "TypeScript"],
    image: "/images/projects/pulseadmin.jpg",
    link: "#",
  },
];

export const TEAM = [
  {
    name: "Rahul Sharma",
    role: "Founder & Full Stack Developer",
    bio: "10+ years building scalable web and mobile applications. Passionate about clean code and great products.",
    image: "/images/team/rahul.jpg",
  },
  {
    name: "Priya Mehta",
    role: "UI/UX Lead Designer",
    bio: "Human-centered design advocate with expertise in Figma, design systems, and user research.",
    image: "/images/team/priya.jpg",
  },
  {
    name: "Arjun Patil",
    role: "Backend & DevOps Engineer",
    bio: "Cloud infrastructure specialist with deep knowledge of AWS, Docker, and microservices architecture.",
    image: "/images/team/arjun.jpg",
  },
  {
    name: "Sneha Joshi",
    role: "Mobile App Developer",
    bio: "React Native and Flutter expert who ships polished cross-platform apps loved by users.",
    image: "/images/team/sneha.jpg",
  },
];

export const STATS = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Happy Clients", value: "85+" },
  { label: "Years of Experience", value: "7+" },
  { label: "Team Members", value: "20+" },
];

export const TESTIMONIALS = [
  {
    name: "Vikram Nair",
    company: "ShopNest India",
    quote:
      "CodeWinx delivered our e-commerce platform ahead of schedule. Their team's attention to detail and communication was exceptional.",
    rating: 5,
  },
  {
    name: "Ananya Rao",
    company: "LearnX EdTech",
    quote:
      "The LMS they built for us handles thousands of concurrent users without a glitch. Highly recommend their engineering team.",
    rating: 5,
  },
  {
    name: "Deepak Gupta",
    company: "AutoBot CRM",
    quote:
      "Their AI automation solution transformed our sales workflow. We save over 20 hours a week now — phenomenal ROI.",
    rating: 5,
  },
];
