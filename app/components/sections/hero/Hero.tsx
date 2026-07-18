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
        className="relative flex min-h-[100dvh] items-center overflow-hidden"
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

        {/* Floating sidebar */}
        <Sidebar />

        {/* Main content */}
        <Container className="relative z-10 w-full py-32 lg:py-0">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-8 xl:pl-16">
            {/* Left — Content */}
            <div className="flex flex-col items-start">
              <HeroContent />
            </div>

            {/* Right — Visual */}
            <HeroBackground />
          </div>
        </Container>
      </section>

      {/* GitHub Contributions — below hero */}
      <GitHubContributions />
    </>
  );
}
