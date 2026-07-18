import type { Project } from "@/types/project";

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Enterprise SaaS Platform",
    description:
      "A multi-tenant SaaS platform serving thousands of users with real-time collaboration, advanced analytics, and enterprise-grade security.",
    longDescription:
      "Built from the ground up with Next.js and NestJS, featuring role-based access control, WebSocket-powered real-time updates, and a custom analytics dashboard processing millions of events daily.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Docker", "AWS"],
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    links: [
      { label: "Source Code", href: "#", icon: "github" },
      { label: "Live Demo", href: "#", icon: "external" },
      { label: "Case Study", href: "#", icon: "case-study" },
    ],
    featured: true,
  },
  {
    title: "AI-Powered Content Engine",
    description:
      "An intelligent content generation platform leveraging GPT and custom ML models to produce SEO-optimized articles, social media copy, and marketing materials at scale.",
    longDescription:
      "Integrates multiple AI providers with a custom fine-tuning pipeline, featuring a WYSIWYG editor, brand voice calibration, and automated content scheduling across channels.",
    techStack: ["Python", "FastAPI", "React", "OpenAI", "LangChain", "Redis"],
    gradient: "from-rose-500/20 via-orange-500/10 to-amber-500/20",
    links: [
      { label: "Source Code", href: "#", icon: "github" },
      { label: "Live Demo", href: "#", icon: "external" },
    ],
    featured: true,
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Real-Time Analytics Dashboard",
    description:
      "A high-performance dashboard processing 100k+ events/sec with WebSocket streaming, custom charting, and configurable alert rules.",
    techStack: ["Next.js", "D3.js", "WebSocket", "ClickHouse"],
    gradient: "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
    links: [
      { label: "Source Code", href: "#", icon: "github" },
      { label: "Live Demo", href: "#", icon: "external" },
    ],
  },
  {
    title: "DevOps Pipeline Manager",
    description:
      "A unified CI/CD dashboard that orchestrates builds across GitHub Actions, GitLab CI, and custom runners with rollback support.",
    techStack: ["NestJS", "React", "Docker", "GitHub Actions"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    links: [
      { label: "Source Code", href: "#", icon: "github" },
    ],
  },
  {
    title: "NLP Research Toolkit",
    description:
      "A modular toolkit for text classification, sentiment analysis, and named entity recognition with pre-trained model fine-tuning.",
    techStack: ["Python", "PyTorch", "Hugging Face", "FastAPI"],
    gradient: "from-amber-500/20 via-yellow-500/10 to-lime-500/20",
    links: [
      { label: "Source Code", href: "#", icon: "github" },
      { label: "Case Study", href: "#", icon: "case-study" },
    ],
  },
];
