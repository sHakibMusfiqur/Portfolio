"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { FEATURED_PROJECTS, PROJECTS } from "@/components/data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Projects() {
  return (
    <Section id="projects" className="relative overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[var(--primary)]/[0.02] blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col gap-14">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <Heading subtitle="Projects" title="Selected work" />
            <p className="mt-4 text-base text-[var(--muted)] sm:text-lg">
              A selection of projects that showcase my approach to building
              scalable, user-focused software.
            </p>
          </div>

          <Link
            href="#"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-colors duration-200 hover:text-[var(--primary-hover)]"
          >
            View all projects
            <ArrowRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={2.5}
            />
          </Link>
        </motion.div>

        {/* Featured projects */}
        <div className="flex flex-col gap-8">
          {FEATURED_PROJECTS.map((project, i) => (
            <FeaturedProject key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Secondary projects grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
