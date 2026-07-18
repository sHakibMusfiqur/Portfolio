"use client";

import { motion } from "framer-motion";

import Badge from "@/components/ui/Badge";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function HeroContent() {
  return (
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      animate="visible"
      className="flex max-w-2xl flex-col items-start gap-6"
    >
      <motion.div variants={fadeUp}>
        <Badge>
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--primary)] opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-[var(--primary)]" />
          </span>
          Available for opportunities
        </Badge>
      </motion.div>

      <motion.div variants={fadeUp} className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
          Software Engineer
        </p>

        <h1 id="hero-heading" className="text-5xl font-bold leading-[1.08] tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
          Building digital
          <br />
          experiences that{" "}
          <span className="bg-gradient-to-r from-[var(--primary)] to-rose-600 bg-clip-text text-transparent">
            matter.
          </span>
        </h1>
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="max-w-lg text-base leading-relaxed text-[var(--muted)] sm:text-lg"
      >
        Full-stack engineer specializing in enterprise software, AI-powered
        applications, and scalable platforms. Turning complex problems into
        elegant, performant solutions.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="flex flex-wrap items-center gap-3 pt-2"
      >
        <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
          <span className="flex size-8 items-center justify-center rounded-full bg-[var(--surface-sunken)] text-xs font-semibold text-[var(--foreground-secondary)]">
            MS
          </span>
          <span>Musfiqur Shakib</span>
        </div>
          <span className="hidden size-1 rounded-full bg-[var(--border)] sm:block" aria-hidden="true" />
        <div className="flex items-center gap-1.5 text-sm text-[var(--muted)]">
          <span className="size-1.5 rounded-full bg-[var(--success)]" />
          Open to work
        </div>
      </motion.div>
    </motion.div>
  );
}
