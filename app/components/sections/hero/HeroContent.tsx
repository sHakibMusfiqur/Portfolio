"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GitFork, Globe, Send, MapPin } from "lucide-react";

import Badge from "@/components/ui/Badge";
import { fadeUp, staggerContainer } from "@/lib/animations";

const socialIcons = [
  { label: "GitHub", href: "https://github.com/musfiqurshakib", icon: GitFork },
  { label: "LinkedIn", href: "https://linkedin.com/in/musfiqurshakib", icon: Globe },
  { label: "Email", href: "mailto:musfiqur@example.com", icon: Send },
];

export default function HeroContent() {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      animate="visible"
      className="flex max-w-2xl flex-col items-start gap-7"
    >
      {/* Availability badge */}
      <motion.div variants={fadeUp}>
        <Badge>
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--primary)] opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-[var(--primary)]" />
          </span>
          Available for opportunities
        </Badge>
      </motion.div>

      {/* Large heading */}
      <motion.div variants={fadeUp} className="space-y-2">
        <h1
          id="hero-heading"
          className="text-6xl font-bold leading-[0.95] tracking-tight text-[var(--foreground)] sm:text-7xl lg:text-8xl xl:text-[6.5rem]"
        >
          <span className="block">Musfiqur</span>
          <span className="block">
            Shakib{" "}
            <span className="inline-block text-[var(--primary)]">.</span>
          </span>
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.div variants={fadeUp} className="space-y-1">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
          Software Engineer
        </p>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        className="max-w-md text-base leading-relaxed text-[var(--muted)] sm:text-lg"
      >
        Full-stack engineer specializing in enterprise software, AI-powered
        applications, and scalable platforms.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        variants={fadeUp}
        className="flex flex-wrap items-center gap-3 pt-2"
      >
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 rounded-2xl bg-[var(--primary)] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--primary-hover)] hover:shadow-[var(--shadow-glow)] active:scale-[0.97]"
        >
          View Projects
        </Link>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] px-7 py-3.5 text-sm font-semibold text-[var(--foreground)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--glass-border-hover)] hover:bg-[var(--glass-highlight)] active:scale-[0.97]"
        >
          Contact Me
        </Link>
      </motion.div>

      {/* Social icons row */}
      <motion.div
        variants={fadeUp}
        className="flex items-center gap-3 pt-4"
      >
        {socialIcons.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="group flex size-10 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--surface-overlay)] text-[var(--muted)] transition-all duration-300 hover:border-[var(--glass-border-hover)] hover:text-[var(--foreground-secondary)] hover:shadow-[var(--shadow-md)]"
          >
            <social.icon className="size-[18px]" strokeWidth={1.8} />
          </Link>
        ))}

        <span className="mx-2 h-px w-8 bg-[var(--glass-border)]" />

        <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
          <MapPin className="size-4" strokeWidth={1.8} />
          <span>Dhaka, Bangladesh</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
