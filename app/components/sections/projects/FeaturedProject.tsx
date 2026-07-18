"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, GitFork, BookOpen, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

interface FeaturedProjectProps {
  project: Project;
  index: number;
}

const iconMap = {
  github: GitFork,
  external: ExternalLink,
  "case-study": BookOpen,
};

export default function FeaturedProject({ project, index }: FeaturedProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className="group"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl border border-[var(--border-light)] bg-white",
          "transition-all duration-500",
          "hover:border-[var(--border-focus)] hover:shadow-[var(--shadow-xl)]"
        )}
      >
        <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
          {/* Image placeholder */}
          <div className="relative overflow-hidden">
            <div
              className={cn(
                "aspect-[16/10] bg-gradient-to-br",
                project.gradient,
                "transition-transform duration-700 ease-out",
                "group-hover:scale-[1.02]"
              )}
            >
              {/* Decorative grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Floating badge */}
              <div className="absolute left-5 top-5">
                <span className="inline-flex items-center rounded-full border border-white/30 bg-white/80 px-3 py-1 text-xs font-semibold text-[var(--foreground)] shadow-sm backdrop-blur-sm">
                  Featured
                </span>
              </div>

              {/* Decorative circles */}
              <div className="absolute bottom-8 right-8 size-24 rounded-full border border-white/20" />
              <div className="absolute bottom-4 right-4 size-16 rounded-full border border-white/10" />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5 p-7 sm:p-8 lg:p-10">
            {/* Title */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl">
                {project.title}
              </h3>
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[var(--border-light)] bg-[var(--surface)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary-muted)]">
                <ArrowUpRight
                  className="size-4 text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                  strokeWidth={2}
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              {project.description}
            </p>

            {project.longDescription && (
              <p className="hidden text-sm leading-relaxed text-[var(--muted-light)] lg:block">
                {project.longDescription}
              </p>
            )}

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[var(--border-light)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--foreground-secondary)] transition-colors duration-200 group-hover:border-[var(--border)] group-hover:bg-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
              {project.links.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200",
                      link.icon === "github"
                        ? "border border-[var(--border)] bg-white text-[var(--foreground)] hover:bg-[var(--surface-sunken)] hover:border-[var(--border-focus)]"
                        : link.icon === "case-study"
                        ? "bg-[var(--primary-muted)] text-[var(--primary)] hover:bg-[var(--primary)]/15"
                        : "bg-[var(--foreground)] text-white hover:bg-[var(--foreground-secondary)]",
                      "active:scale-[0.97]"
                    )}
                  >
                    <Icon className="size-3.5" strokeWidth={2.5} />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
