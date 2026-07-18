import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/common/StructuredData";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Skills from "@/components/sections/skills/Skills";
import Projects from "@/components/sections/projects/Projects";
import Research from "@/components/sections/research/Research";
import Contact from "@/components/sections/contact/Contact";

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

      <Navbar />

      <main>
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
