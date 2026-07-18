import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/common/StructuredData";
import HeroV2 from "@/components/sections/hero/HeroV2";

export const metadata: Metadata = {
  title: "Musfiqur Shakib — Software Engineer",
  description:
    "Full-stack software engineer specializing in enterprise software, AI-powered applications, and scalable platforms. View my projects, skills, and research.",
  alternates: {
    canonical: "https://musfiqurshakib.dev",
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />

      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-[var(--primary)] focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-[var(--primary-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <HeroV2 />
      </main>

      <Footer />
    </>
  );
}
