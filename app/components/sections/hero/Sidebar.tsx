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
  { label: "Twitter", href: "https://twitter.com/musfiqurshakib", icon: Send },
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
      className="pointer-events-auto fixed z-[200] hidden lg:flex flex-col items-center border backdrop-blur-[18px]"
      style={{
        left: 32,
        top: 150,
        width: 54,
        borderRadius: 28,
        background: "rgba(12,14,20,0.82)",
        borderColor: "rgba(255,255,255,0.06)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
        padding: "16px 0",
      }}
    >
      {/* ── Navigation Icons ── */}
      <div className="flex flex-col items-center" style={{ gap: 18 }}>
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
                  "relative flex items-center justify-center transition-all duration-300",
                  isActive
                    ? "text-white"
                    : "text-white/70 hover:text-white/90"
                )}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: isActive ? 10 : "50%",
                  background: isActive
                    ? "rgba(220,20,60,0.15)"
                    : "transparent",
                  boxShadow: isActive
                    ? "0 0 12px rgba(220,20,60,0.25)"
                    : "none",
                }}
              >
                <Icon className="relative z-10 size-[18px]" strokeWidth={1.8} />
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* ── Spacer ── */}
      <div className="flex-1" />

      {/* ── Social Icons ── */}
      <div className="flex flex-col items-center" style={{ gap: 18 }}>
        {socialLinks.map((link) => (
          <motion.div key={link.label} variants={fadeUp}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center justify-center text-white/70 transition-all duration-300 hover:text-white/90"
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <link.icon className="size-[18px]" strokeWidth={1.8} />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ── Crimson Line ── */}
      <div
        className="mt-4 rounded-full"
        style={{
          width: 2,
          height: 42,
          background: "#DC143C",
        }}
      />
    </motion.aside>
  );
}
