import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Skills from "@/components/sections/skills/Skills";
import Projects from "@/components/sections/projects/Projects";
import Research from "@/components/sections/research/Research";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
      </main>
    </>
  );
}
