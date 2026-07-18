"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, GitFork, BookOpen, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const iconMap = {
  github: GitFork,
  external: ExternalLink,
  "case-study": BookOpen,
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className="group"
    >
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border-light)] bg-white",
          "transition-all duration-300",
          "hover:border-[var(--border-focus)] hover:shadow-[var(--shadow-lg)]"
        )}
      >
        {/* Image placeholder */}
        <div className="relative overflow-hidden">
          <div
            className={cn(
              "aspect-[16/9] bg-gradient-to-br",
              project.gradient,
              "transition-transform duration-500 ease-out",
              "group-hover:scale-[1.03]"
            )}
          >
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Decorative element */}
            <div className="absolute bottom-6 right-6 size-20 rounded-full border border-white/20" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-4 p-6">
          {/* Title + arrow */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold tracking-tight text-[var(--foreground)]">
              {project.title}
            </h3>
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--border-light)] bg-[var(--surface)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary-muted)]">
              <ArrowUpRight
                className="size-3.5 text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                strokeWidth={2}
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-[var(--border-light)] bg-[var(--surface)] px-2.5 py-1 text-xs font-medium text-[var(--foreground-secondary)] transition-colors duration-200 group-hover:border-[var(--border)] group-hover:bg-white"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-3">
            {project.links.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200",
                    link.icon === "github"
                      ? "border border-[var(--border)] bg-white text-[var(--foreground)] hover:bg-[var(--surface-sunken)] hover:border-[var(--border-focus)]"
                      : link.icon === "case-study"
                      ? "bg-[var(--primary-muted)] text-[var(--primary)] hover:bg-[var(--primary)]/15"
                      : "bg-[var(--foreground)] text-white hover:bg-[var(--foreground-secondary)]",
                    "active:scale-[0.97]"
                  )}
                >
                  <Icon className="size-3" strokeWidth={2.5} />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
