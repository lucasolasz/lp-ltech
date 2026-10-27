"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import type { ReactNode } from "react";

const spring = { stiffness: 220, damping: 22, mass: 0.6 };

/** Glass card that leans toward the pointer (fine pointers only). */
export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const rotateX = useSpring(useMotionValue(0), spring);
  const rotateY = useSpring(useMotionValue(0), spring);
  const y = useSpring(useMotionValue(0), spring);

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, y, transformPerspective: 900 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        rotateY.set(((e.clientX - r.left) / r.width - 0.5) * 6);
        rotateX.set(-((e.clientY - r.top) / r.height - 0.5) * 6);
        y.set(-4);
      }}
      onPointerLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
