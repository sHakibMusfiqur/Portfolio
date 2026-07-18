"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { viewport } from "@/lib/animations";
import type { SkillCategory } from "@/types/skill";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export default function SkillCard({ category, index }: SkillCardProps) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className="group"
    >
      <div
        className={cn(
          "relative flex h-full flex-col gap-5 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] p-6 backdrop-blur-xl",
          "transition-all duration-300",
          "hover:border-[var(--glass-border-hover)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5"
        )}
      >
        {/* Glow on hover */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${category.color}08, transparent 40%)`,
          }}
        />

        {/* Header */}
        <div className="relative flex items-center gap-3">
          <div
            className="flex size-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundColor: `${category.color}12`,
            }}
          >
            <Icon
              className="size-5"
              style={{ color: category.color }}
              strokeWidth={1.8}
            />
          </div>
          <div>
            <h3 className="text-base font-semibold text-[var(--foreground)]">
              {category.title}
            </h3>
            <p className="text-xs text-[var(--muted)]">
              {category.skills.length} technologies
            </p>
          </div>
        </div>

        {/* Skills grid */}
        <div className="relative flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill.name}
              className={cn(
                "rounded-lg border border-[var(--glass-border)] bg-[var(--surface-overlay)] px-3 py-1.5",
                "text-sm font-medium text-[var(--foreground-secondary)]",
                "transition-all duration-300",
                "group-hover:border-[var(--glass-border-hover)] group-hover:bg-[var(--surface-sunken)]"
              )}
            >
              {skill.name}
            </span>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="mt-auto pt-2">
          <div
            className="h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full"
            style={{ backgroundColor: category.color }}
          />
        </div>
      </div>
    </motion.div>
  );
}
