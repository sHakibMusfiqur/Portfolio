import {
  Code2,
  Server,
  Database,
  Cloud,
  BrainCircuit,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { SkillCategory } from "@/types/skill";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    color: "#0ea5e9",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "HTML / CSS" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "#8b5cf6",
    skills: [
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "Python" },
      { name: "Django" },
      { name: "Express.js" },
      { name: "REST & GraphQL" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "#16a34a",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Prisma ORM" },
      { name: "Firebase" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "#f59e0b",
    skills: [
      { name: "Docker" },
      { name: "AWS" },
      { name: "CI / CD" },
      { name: "Linux" },
      { name: "Vercel" },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    color: "#dc143c",
    skills: [
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "NLP" },
      { name: "OpenAI API" },
      { name: "LangChain" },
    ],
  },
  {
    title: "Tools & Practices",
    icon: Wrench,
    color: "#06b6d4",
    skills: [
      { name: "Git / GitHub" },
      { name: "Agile / Scrum" },
      { name: "System Design" },
      { name: "Testing" },
      { name: "Figma" },
    ],
  },
];
