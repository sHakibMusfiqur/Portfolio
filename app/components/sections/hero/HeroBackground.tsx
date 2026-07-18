"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

import { fadeRight, spring } from "@/lib/animations";

const float = (delay: number) => ({
  y: [0, -8, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay,
  },
});

const techStack = [
  { icon: Code2, label: "TypeScript", color: "#3178c6" },
  { icon: Globe, label: "Next.js", color: "#0c1222" },
  { icon: Database, label: "PostgreSQL", color: "#336791" },
  { icon: Cpu, label: "AI/ML", color: "#8b5cf6" },
  { icon: Layers, label: "Platform", color: "#0ea5e9" },
  { icon: Shield, label: "Security", color: "#16a34a" },
];

export default function HeroBackground() {
  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      animate="visible"
      className="relative hidden lg:flex lg:h-[520px] lg:items-center lg:justify-center"
    >
      {/* Glow backdrop */}
      <div className="absolute inset-0 -right-12">
        <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/[0.04] blur-3xl" />
        <div className="absolute left-1/3 top-1/3 h-[200px] w-[200px] rounded-full bg-[var(--accent)]/[0.03] blur-2xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main card */}
      <motion.div
        animate={float(0)}
        className="relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-[var(--border-light)] bg-white/80 p-8 shadow-[var(--shadow-xl)] backdrop-blur-xl">
          {/* Header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-rose-600 shadow-lg shadow-[var(--primary)]/20">
              <Sparkles className="size-5 text-white" strokeWidth={2} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Tech Stack
              </p>
              <p className="text-xs text-[var(--muted)]">
                Tools I work with
              </p>
            </div>
          </div>

          {/* Tech grid */}
          <div className="grid grid-cols-3 gap-3">
            {techStack.map((tech) => (
              <motion.div
                key={tech.label}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={spring}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-[var(--border-light)] bg-white p-3 transition-all duration-200 hover:border-[var(--border-focus)] hover:shadow-[var(--shadow-sm)]"
              >
                <div
                  className="flex size-9 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
                  style={{
                    backgroundColor: `${tech.color}10`,
                  }}
                >
                  <tech.icon
                    className="size-4"
                    style={{ color: tech.color }}
                    strokeWidth={2}
                  />
                </div>
                <span className="text-[11px] font-medium text-[var(--foreground-secondary)]">
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[var(--border-light)] pt-5">
            {[
              { value: "3+", label: "Years" },
              { value: "15+", label: "Projects" },
              { value: "5+", label: "Technologies" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-lg font-bold text-[var(--foreground)]">
                  {stat.value}
                </p>
                <p className="text-[11px] text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating accent card */}
        <motion.div
          animate={float(1.5)}
          className="absolute -bottom-4 -left-8 z-20"
        >
          <div className="flex items-center gap-2.5 rounded-2xl border border-[var(--border-light)] bg-white/90 px-4 py-3 shadow-[var(--shadow-lg)] backdrop-blur-xl">
            <div className="flex size-8 items-center justify-center rounded-xl bg-[var(--primary-muted)]">
              <Zap className="size-4 text-[var(--primary)]" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--foreground)]">
                Performance
              </p>
              <p className="text-[10px] text-[var(--muted)]">
                Lighthouse 100
              </p>
            </div>
          </div>
        </motion.div>

        {/* Floating status card */}
        <motion.div
          animate={float(2.5)}
          className="absolute -right-4 top-8 z-20"
        >
          <div className="flex items-center gap-2.5 rounded-2xl border border-[var(--border-light)] bg-white/90 px-4 py-3 shadow-[var(--shadow-lg)] backdrop-blur-xl">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--success)] opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-[var(--success)]" />
            </span>
            <p className="text-xs font-semibold text-[var(--foreground)]">
              Available
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
