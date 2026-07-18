"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const experiences = [
  {
    role: "Software Engineer",
    company: "Freelance / Contract",
    period: "2023 — Present",
    description:
      "Architecting and building full-stack applications for clients across fintech, e-commerce, and SaaS. Led platform migrations and implemented AI-powered features.",
    technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "AI/ML"],
  },
  {
    role: "Full Stack Developer",
    company: "Various Startups",
    period: "2022 — 2023",
    description:
      "Built and shipped production applications from MVP to scale. Implemented authentication systems, payment integrations, and real-time features.",
    technologies: ["React", "Node.js", "Python", "Docker", "AWS"],
  },
];

export default function ExperienceSummary() {
  return (
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="flex flex-col gap-6"
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--primary-muted)]">
          <Briefcase className="size-5 text-[var(--primary)]" strokeWidth={2} />
        </div>
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          Experience
        </h3>
      </motion.div>

      <div className="relative flex flex-col gap-0">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-10 bottom-4 w-px bg-[var(--glass-border)]" />

        {experiences.map((item) => (
          <motion.div
            key={item.role}
            variants={fadeUp}
            className="group relative flex gap-4 py-4"
          >
            {/* Timeline dot */}
            <div className="relative z-10 mt-1.5 flex size-[9px] shrink-0 rounded-full border-2 border-[var(--primary)] bg-[var(--background)]" />

            <div className="flex-1 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] p-5 transition-all duration-300 hover:border-[var(--glass-border-hover)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5 backdrop-blur-xl">
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-base font-semibold text-[var(--foreground)]">
                    {item.role}
                  </p>
                  <p className="text-sm font-medium text-[var(--primary)]">
                    {item.company}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
                  <Calendar className="size-3.5" strokeWidth={2} />
                  {item.period}
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {item.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--glass-border)] bg-[var(--surface-overlay)] px-3 py-1 text-xs font-medium text-[var(--foreground-secondary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
