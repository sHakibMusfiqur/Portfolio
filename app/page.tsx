import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
