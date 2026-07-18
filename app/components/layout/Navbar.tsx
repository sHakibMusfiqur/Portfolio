"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

import Logo from "@/components/common/Logo";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants/navigation";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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

  const mobileNavId = "mobile-nav";

  return (
    <>
      {/* ═══════════════════════════════════════════
          DESKTOP — Three-Column Header
         ═══════════════════════════════════════════ */}
      <header
        className="pointer-events-auto fixed inset-x-0 top-5 z-[1000] hidden px-10 lg:block"
      >
        <div
          className="mx-auto grid max-w-[1440px] items-center"
          style={{ gridTemplateColumns: "1fr auto 1fr" }}
        >
          {/* Left — Logo */}
          <div className="flex items-center justify-start">
            <Logo />
          </div>

          {/* Center — Navigation Pill */}
          <nav
            aria-label="Main navigation"
            className="pointer-events-auto flex justify-center"
          >
            <div
              className={cn(
                "flex h-[60px] w-[760px] items-center justify-center rounded-full border px-5",
                "bg-[rgba(15,15,20,0.72)] backdrop-blur-[20px]",
                "border-[rgba(255,255,255,0.08)] shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
              )}
            >
              <ul className="flex items-center gap-[40px]" role="list">
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
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "relative flex flex-col items-center gap-1 text-[15px] font-medium transition-colors duration-300",
                          isActive
                            ? "text-[#DC143C]"
                            : "text-white hover:text-[#DC143C]"
                        )}
                      >
                        <span className="relative z-10">{link.label}</span>

                        {isActive && (
                          <motion.span
                            layoutId="nav-active-indicator"
                            className="flex flex-col items-center gap-0.5"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          >
                            <span className="block h-[2px] w-4 rounded-full bg-[#DC143C] shadow-[0_0_8px_#DC143C]" />
                            <span className="block size-1 rounded-full bg-[#DC143C] shadow-[0_0_6px_#DC143C]" />
                          </motion.span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* Right — Download CV Button */}
          <div className="flex items-center justify-end">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center rounded-full p-[2px]"
              style={{ height: 46 }}
            >
              {/* Rotating conic-gradient border */}
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(220,20,60,0.9), transparent 30%, transparent 70%, rgba(220,20,60,0.9))",
                  animation: "cv-spin 4s linear infinite",
                }}
              />

              {/* Hover glow layer */}
              <span
                className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(220,20,60,1), transparent 30%, transparent 70%, rgba(220,20,60,1))",
                  animation: "cv-spin 4s linear infinite",
                  filter: "blur(6px)",
                }}
              />

              {/* Inner button */}
              <span
                className="relative z-10 flex items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 ease-out group-hover:-translate-y-px"
                style={{
                  borderColor: "#DC143C",
                  background: "rgba(10,10,14,0.75)",
                  paddingLeft: 22,
                  paddingRight: 22,
                  paddingTop: 12,
                  paddingBottom: 12,
                  gap: 10,
                  boxShadow: "0 0 12px rgba(220,20,60,0.15)",
                }}
              >
                <Download
                  className="transition-all duration-300"
                  size={18}
                  strokeWidth={2}
                  style={{ color: "#DC143C" }}
                  aria-hidden="true"
                />
                <span className="text-white" style={{ fontSize: 16, fontWeight: 600 }}>
                  Download{" "}
                </span>
                <span style={{ color: "#DC143C", fontSize: 16, fontWeight: 600 }}>
                  CV
                </span>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Keyframes for rotating border */}
      <style
        dangerouslySetInnerHTML={{
          __html: `@keyframes cv-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`,
        }}
      />

      {/* ═══════════════════════════════════════════
          MOBILE — Top Bar + Slide-down Panel
         ═══════════════════════════════════════════ */}

      {/* ── Mobile: Top Bar ── */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 lg:hidden"
        )}
      >
        <div className="flex items-center justify-between px-5 pt-4">
          <Logo />

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls={mobileNavId}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className={cn(
              "flex size-10 items-center justify-center rounded-full border transition-all duration-300",
              "border-[rgba(255,255,255,0.08)] bg-[rgba(15,15,20,0.72)] backdrop-blur-[20px]",
              "shadow-[0_2px_12px_rgba(0,0,0,0.2)]",
              mobileOpen && "!border-[rgba(255,255,255,0.14)]"
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
                  <X className="size-4.5 text-white" strokeWidth={2} />
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
                  <Menu className="size-4.5 text-white" strokeWidth={2} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* ── Mobile: Slide-down Menu Panel ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
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
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "fixed inset-x-0 top-[76px] z-50 mx-3 overflow-hidden rounded-2xl border lg:hidden",
                "border-[rgba(255,255,255,0.08)] bg-[rgba(15,15,20,0.92)] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-[24px]"
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
                          "flex items-center rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200",
                          isActive
                            ? "bg-[rgba(220,20,60,0.1)] text-[#DC143C]"
                            : "text-white hover:bg-[rgba(255,255,255,0.04)] hover:text-[#DC143C]"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <div
                  className="my-1 h-px bg-[rgba(255,255,255,0.06)]"
                  aria-hidden="true"
                />

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
                      "flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300",
                      "border-[#DC143C] text-[#DC143C]",
                      "hover:bg-[rgba(220,20,60,0.1)] hover:shadow-[0_0_16px_rgba(220,20,60,0.12)]",
                      "active:scale-[0.98]"
                    )}
                  >
                    <Download
                      className="size-3.5"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    Download CV
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
