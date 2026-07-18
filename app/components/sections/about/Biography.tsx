"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Rocket } from "lucide-react";

import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const highlights = [
  {
    icon: Rocket,
    label: "Mission",
    text: "Turning complex engineering challenges into elegant, scalable solutions that make a measurable impact.",
  },
  {
    icon: Briefcase,
    label: "Focus",
    text: "Enterprise software, AI-powered applications, and platform engineering across fintech and SaaS domains.",
  },
  {
    icon: GraduationCap,
    label: "Growth",
    text: "Constantly learning and adapting to emerging technologies while mentoring the next generation of engineers.",
  },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "5+", label: "Core Technologies" },
  { value: "10+", label: "Happy Clients" },
];

export default function Biography() {
  return (
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="flex flex-col gap-12"
    >
      {/* Intro */}
      <motion.div variants={fadeUp} className="space-y-5">
        <p className="text-base leading-relaxed text-[var(--foreground-secondary)] sm:text-lg lg:text-xl">
          I&apos;m a full-stack software engineer with a passion for building
          high-performance digital products. With experience spanning enterprise
          platforms, AI integrations, and cloud-native architectures, I bridge
          the gap between product vision and technical execution.
        </p>
        <p className="text-base leading-relaxed text-[var(--foreground-secondary)] sm:text-lg lg:text-xl">
          I thrive at the intersection of clean code and meaningful user
          experiences — writing systems that are not only functional but
          maintainable and delightful to work with.
        </p>
      </motion.div>

      {/* Highlight cards */}
      <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="group flex flex-col gap-4 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] p-6 transition-all duration-300 hover:border-[var(--glass-border-hover)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5 backdrop-blur-xl"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--surface-sunken)] transition-colors duration-300 group-hover:bg-[var(--primary-muted)]">
              <item.icon className="size-5 text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--primary)]" strokeWidth={2} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Stats grid */}
      <motion.div
        variants={fadeUp}
        className="grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1.5 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] p-6 text-center backdrop-blur-xl"
          >
            <p className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
              {stat.value}
            </p>
            <p className="text-xs font-medium text-[var(--muted)]">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Location */}
      <motion.div
        variants={fadeUp}
        className="flex items-center gap-2.5 text-sm text-[var(--muted)]"
      >
        <MapPin className="size-4" strokeWidth={2} />
        <span>Based in Bangladesh &middot; Open to remote worldwide</span>
      </motion.div>
    </motion.div>
  );
}
