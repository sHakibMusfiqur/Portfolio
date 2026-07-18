"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, Globe, Mail, Send } from "lucide-react";

import Logo from "@/components/common/Logo";
import Container from "@/components/ui/Container";
import { NAV_LINKS } from "@/components/constants/navigation";
import { CONTACT_INFO } from "@/components/constants/socials";
import { cn } from "@/lib/utils";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/musfiqurshakib", icon: Globe },
  { label: "GitHub", href: "https://github.com/musfiqurshakib", icon: Globe },
  { label: "Email", href: `mailto:${CONTACT_INFO.email}`, icon: Mail },
  { label: "Telegram", href: "https://t.me/musfiqurshakib", icon: Send },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[var(--border-light)] bg-[var(--surface)]">
      <Container>
        <div className="flex flex-col gap-10 py-12 sm:py-16">
          {/* Top row */}
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            {/* Logo + tagline */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex max-w-sm flex-col gap-3"
            >
              <Logo />
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                Building digital experiences that matter. Always open to
                interesting conversations and collaborations.
              </p>
            </motion.div>

            {/* Navigation + Socials */}
            <div className="flex gap-12 sm:gap-16">
              {/* Nav links */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground-secondary)]">
                  Navigation
                </p>
                <ul className="flex flex-col gap-2">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Social links */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground-secondary)]">
                  Connect
                </p>
                <ul className="flex flex-col gap-2">
                  {socials.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[var(--border-light)]" />

          {/* Bottom row */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-[var(--muted)]">
              &copy; {new Date().getFullYear()} Musfiqur Shakib. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className={cn(
                "group flex items-center gap-2 text-xs font-medium text-[var(--muted)]",
                "transition-colors duration-200 hover:text-[var(--foreground)]"
              )}
            >
              Back to top
              <span className="flex size-7 items-center justify-center rounded-full border border-[var(--border)] bg-white transition-all duration-200 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary-muted)]">
                <ArrowUp
                  className="size-3.5 text-[var(--muted)] transition-colors duration-200 group-hover:text-[var(--primary)]"
                  strokeWidth={2.5}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
