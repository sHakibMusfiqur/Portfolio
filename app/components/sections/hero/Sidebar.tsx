"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, User, Code2, FolderKanban, FlaskConical, Mail, GitFork, Globe, Send } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants/navigation";
import { fadeUp, staggerContainer } from "@/lib/animations";

const sectionIcons: Record<string, React.ElementType> = {
  "#hero": Home,
  "#about": User,
  "#skills": Code2,
  "#projects": FolderKanban,
  "#research": FlaskConical,
  "#contact": Mail,
};

const socialLinks = [
  { label: "GitHub", href: "https://github.com/musfiqurshakib", icon: GitFork },
  { label: "LinkedIn", href: "https://linkedin.com/in/musfiqurshakib", icon: Globe },
  { label: "Email", href: "mailto:musfiqur@example.com", icon: Send },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <motion.aside
      variants={staggerContainer(0.06)}
      initial="hidden"
      animate="visible"
      aria-label="Side navigation"
      className="flex flex-col items-center gap-2"
    >
      {/* Navigation icons */}
      <div className="flex flex-col items-center gap-1 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] p-2 backdrop-blur-2xl shadow-[var(--shadow-lg)]">
        {NAV_LINKS.map((link) => {
          const Icon = sectionIcons[link.href] || Home;
          const isActive = activeSection === link.href;
          return (
            <motion.div key={link.href} variants={fadeUp}>
              <button
                onClick={() => handleClick(link.href)}
                aria-label={link.label}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group relative flex size-10 items-center justify-center rounded-xl transition-all duration-300",
                  isActive
                    ? "bg-[var(--primary-muted)] text-[var(--primary)]"
                    : "text-[var(--muted)] hover:bg-[var(--glass-highlight)] hover:text-[var(--foreground-secondary)]"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-xl bg-[var(--primary-muted)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="relative z-10 size-[18px]" strokeWidth={1.8} />
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Separator */}
      <div className="my-1 h-px w-6 bg-[var(--glass-border)]" />

      {/* Social icons */}
      <div className="flex flex-col items-center gap-1 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] p-2 backdrop-blur-2xl shadow-[var(--shadow-lg)]">
        {socialLinks.map((link) => (
          <motion.div key={link.label} variants={fadeUp}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="group flex size-10 items-center justify-center rounded-xl text-[var(--muted)] transition-all duration-300 hover:bg-[var(--glass-highlight)] hover:text-[var(--foreground-secondary)]"
            >
              <link.icon className="size-[18px]" strokeWidth={1.8} />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.aside>
  );
}
