import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/common/StructuredData";
import Hero from "@/components/sections/hero/Hero";

const About = dynamic(() => import("@/components/sections/about/About"), {
  loading: () => <div className="h-96" />,
});
const Skills = dynamic(() => import("@/components/sections/skills/Skills"), {
  loading: () => <div className="h-96" />,
});
const Projects = dynamic(() => import("@/components/sections/projects/Projects"), {
  loading: () => <div className="h-96" />,
});
const Research = dynamic(() => import("@/components/sections/research/Research"), {
  loading: () => <div className="h-96" />,
});
const Contact = dynamic(() => import("@/components/sections/contact/Contact"), {
  loading: () => <div className="h-96" />,
});

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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-[var(--primary)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--primary-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
