"use client";

import { motion } from "framer-motion";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Biography from "./Biography";
import Education from "./Education";
import ExperienceSummary from "./ExperienceSummary";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function About() {
  return (
    <Section id="about" className="relative overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-[var(--primary)]/[0.02] blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-[300px] w-[300px] rounded-full bg-[var(--accent)]/[0.02] blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col gap-16">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <Heading subtitle="About Me" title="Who I am" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left — Biography + Stats */}
          <Biography />

          {/* Right — Education + Experience */}
          <div className="flex flex-col gap-10">
            <ExperienceSummary />
            <Education />
          </div>
        </div>
      </div>
    </Section>
  );
}
