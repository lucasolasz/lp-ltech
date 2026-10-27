"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";
import { EASE } from "@/lib/styles";

const tags = {
  div: motion.div,
  article: motion.article,
  p: motion.p,
  span: motion.span,
};

type RevealProps = Omit<ComponentProps<typeof motion.div>, "initial" | "animate" | "whileInView"> & {
  as?: keyof typeof tags;
  delay?: number;
  /** Distance in px the element rises from. */
  y?: number;
  /** Play on mount instead of when scrolled into view (used above the fold). */
  onMount?: boolean;
};

/** Fades and lifts its content in, once, when it enters the viewport. */
export function Reveal({ as = "div", delay = 0, y = 32, onMount = false, transition, ...props }: RevealProps) {
  const Tag = tags[as] as typeof motion.div;
  const shown = { opacity: 1, y: 0 };

  return (
    <Tag
      initial={{ opacity: 0, y }}
      {...(onMount ? { animate: shown } : { whileInView: shown })}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -6% 0px" }}
      transition={{ duration: onMount ? 1.1 : 1.05, delay, ease: EASE, ...transition }}
      {...props}
    />
  );
}
