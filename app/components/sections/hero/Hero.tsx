"use client";

import Container from "@/components/ui/Container";
import Sidebar from "./Sidebar";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import GitHubContributions from "./GitHubContributions";

export default function Hero() {
  return (
    <>
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative min-h-[100dvh] overflow-hidden"
      >
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          {/* Crimson glow top right */}
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[var(--primary)]/[0.07] blur-[120px]" />
          {/* Crimson glow bottom left */}
          <div className="absolute -left-24 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[var(--primary)]/[0.04] blur-[100px]" />
          {/* Center ambient */}
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/[0.02] blur-[150px]" />
        </div>

        {/* 3-column layout: Sidebar | Content | Visual */}
        <Container className="relative z-10 flex h-[100dvh] items-center">
          <div className="grid w-full grid-cols-[80px_1fr] items-center gap-0 lg:grid-cols-[80px_minmax(0,620px)_minmax(0,1fr)] lg:gap-4">

            {/* Column 1 — Sidebar */}
            <div className="hidden lg:flex lg:justify-center">
              <Sidebar />
            </div>

            {/* Column 2 — Left Content */}
            <div className="flex flex-col items-start py-28 sm:py-32 lg:py-0">
              <HeroContent />
            </div>

            {/* Column 3 — Right Visual */}
            <div className="hidden lg:flex lg:items-center lg:justify-end">
              <HeroBackground />
            </div>
          </div>
        </Container>
      </section>

      {/* GitHub Contributions — below hero, full width */}
      <GitHubContributions />
    </>
  );
}
