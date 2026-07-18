"use client";

import { motion } from "framer-motion";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { SKILL_CATEGORIES } from "@/components/data/skills";
import SkillCard from "./SkillCard";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Skills() {
  return (
    <Section id="skills" className="relative overflow-hidden bg-[var(--surface)]">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--primary)]/[0.02] blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col gap-12">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-2xl"
        >
          <Heading subtitle="Skills" title="What I work with" />
          <p className="mt-4 text-base text-[var(--muted)] sm:text-lg">
            A curated set of technologies and tools I use to build production-grade
            software — from frontend interfaces to cloud infrastructure.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
