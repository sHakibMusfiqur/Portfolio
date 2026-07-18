"use client";

import Container from "@/components/ui/Container";
import HeroBackground from "./HeroBackground";
import HeroButtons from "./HeroButtons";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
    >
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[var(--primary)]/[0.03] blur-3xl" />
        <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-[var(--accent)]/[0.02] blur-3xl" />
      </div>

      <Container className="relative z-10 w-full py-28 lg:py-0">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
          {/* Left — Content */}
          <div className="flex flex-col items-start">
            <HeroContent />
            <HeroButtons />
          </div>

          {/* Right — Visual */}
          <HeroBackground />
        </div>
      </Container>
    </section>
  );
}
