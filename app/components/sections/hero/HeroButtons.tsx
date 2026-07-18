"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function HeroButtons() {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap items-center gap-4 pt-6"
    >
      <motion.div variants={fadeUp}>
        <Button href="#projects" variant="primary">
          View Projects
          <ArrowRight className="size-4" strokeWidth={2.5} />
        </Button>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Button href="/resume.pdf" variant="secondary" className="group">
          <Download className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={2.5} />
          Download Resume
        </Button>
      </motion.div>
    </motion.div>
  );
}
