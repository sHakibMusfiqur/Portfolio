"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

import Logo from "@/components/common/Logo";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = useCallback(
    (href: string) => {
      setMobileOpen(false);
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

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

  const desktopNavId = "desktop-nav";
  const mobileNavId = "mobile-nav";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-4"
      )}
      role="banner"
    >
      <Container>
        {/* ── Desktop Nav ── */}
        <nav
          id={desktopNavId}
          aria-label="Main navigation"
          className={cn(
            "hidden items-center justify-between rounded-full border px-6 transition-all duration-300 lg:flex",
            "h-14",
            scrolled
              ? "border-[var(--border-light)] bg-white/80 shadow-[var(--shadow-lg)] backdrop-blur-xl"
              : "border-transparent bg-white/50 shadow-none backdrop-blur-sm"
          )}
        >
          <Logo />

          <ul className="flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href} role="listitem">
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200",
                      isActive
                        ? "text-[var(--foreground)]"
                        : "text-[var(--muted)] hover:text-[var(--foreground)]"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-[var(--primary-muted)]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-semibold transition-all duration-200",
              "bg-[var(--primary)] text-[var(--primary-foreground)]",
              "hover:bg-[var(--primary-hover)] hover:shadow-[var(--shadow-md)]",
              "active:scale-[0.97]"
            )}
          >
            <Download className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
            Resume
          </Link>
        </nav>

        {/* ── Mobile Nav ── */}
        <div className="flex items-center justify-between lg:hidden">
          <Logo />

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls={mobileNavId}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className={cn(
              "flex size-10 items-center justify-center rounded-full transition-all duration-200",
              scrolled
                ? "border border-[var(--border-light)] bg-white/80 shadow-[var(--shadow-sm)] backdrop-blur-xl"
                : "border border-transparent bg-white/50 backdrop-blur-sm",
              mobileOpen && "!border-[var(--border)]"
            )}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                  aria-hidden="true"
                >
                  <X className="size-4.5" strokeWidth={2} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.15 }}
                  aria-hidden="true"
                >
                  <Menu className="size-4.5" strokeWidth={2} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </Container>

      {/* ── Mobile Menu Panel ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/10 backdrop-blur-xs lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              id={mobileNavId}
              role="dialog"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "fixed inset-x-0 top-[72px] z-50 mx-3 overflow-hidden rounded-2xl border lg:hidden",
                "border-[var(--border-light)] bg-white/90 shadow-[var(--shadow-2xl)] backdrop-blur-xl"
              )}
            >
              <div className="flex flex-col p-3" role="list">
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeSection === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: i * 0.03,
                        duration: 0.2,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      role="listitem"
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex items-center rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-150",
                          isActive
                            ? "bg-[var(--primary-muted)] text-[var(--foreground)]"
                            : "text-[var(--muted)] hover:bg-[var(--surface-sunken)] hover:text-[var(--foreground)]"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <div className="my-1 h-px bg-[var(--border-light)]" aria-hidden="true" />

                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: NAV_LINKS.length * 0.03,
                    duration: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  role="listitem"
                >
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200",
                      "bg-[var(--primary)] text-[var(--primary-foreground)]",
                      "hover:bg-[var(--primary-hover)]",
                      "active:scale-[0.98]"
                    )}
                  >
                    <Download className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                    Download Resume
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
