"use client";

import { motion } from "framer-motion";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { SKILL_CATEGORIES } from "@/components/data/skills";
import { fadeUp, viewport } from "@/lib/animations";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <Section id="skills" aria-labelledby="skills-heading" className="relative overflow-hidden bg-[var(--surface)]">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--primary)]/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col gap-14">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-2xl"
        >
          <Heading id="skills-heading" subtitle="Skills" title="What I work with" />
          <p className="mt-5 text-base text-[var(--muted)] sm:text-lg lg:text-xl">
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
