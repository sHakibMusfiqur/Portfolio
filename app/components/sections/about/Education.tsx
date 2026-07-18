"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "University of Dhaka",
    period: "2019 — 2023",
    description:
      "Specialized in software engineering and artificial intelligence. Published research on NLP and machine learning applications.",
    highlights: ["Dean's List", "Research Publication", "Teaching Assistant"],
  },
];

export default function Education() {
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
          <GraduationCap className="size-5 text-[var(--primary)]" strokeWidth={2} />
        </div>
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          Education
        </h3>
      </motion.div>

      {education.map((item) => (
        <motion.div
          key={item.degree}
          variants={fadeUp}
          className="group rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] p-6 transition-all duration-300 hover:border-[var(--glass-border-hover)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-1.5">
              <p className="text-base font-semibold text-[var(--foreground)]">
                {item.degree}
              </p>
              <p className="text-sm font-medium text-[var(--primary)]">
                {item.institution}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
              <Calendar className="size-3.5" strokeWidth={2} />
              {item.period}
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            {item.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {item.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full border border-[var(--glass-border)] bg-[var(--surface-overlay)] px-3 py-1 text-xs font-medium text-[var(--foreground-secondary)]"
              >
                {h}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
