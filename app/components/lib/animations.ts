import type { Variants, Transition } from "framer-motion";

/* ─── Easing — Linear-quality ─── */
const ease = [0.16, 1, 0.3, 1] as const;

/* ─── Shared Transition ─── */
export const spring: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 30,
};

/* ─── Fade Up — Elegant ─── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

/* ─── Fade In — Elegant ─── */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease },
  },
};

/* ─── Fade Right (for side content) ─── */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
};

/* ─── Scale In — Elegant ─── */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease },
  },
};

/* ─── Stagger Container ─── */
export function staggerContainer(
  staggerChildren = 0.08,
  delayChildren = 0
): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  };
}

/* ─── Default Viewport ─── */
export const viewport = { once: true, margin: "-80px" } as const;
