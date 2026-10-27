"use client";

import { motion } from "motion/react";
import { FRONTS } from "@/components/ui/icons";
import { cx, EASE, gradFill } from "@/lib/styles";

const RINGS = [
  { r: 118 },
  { r: 150, accent: true },
  { r: 188 },
  { r: 232 },
  { r: 280, accent: true, dashed: true },
  { r: 332 },
  { r: 388, faint: true },
];

const TAG_POSITIONS = ["left-[24%] top-[20%]", "left-[86%] top-1/2", "left-[20%] top-[70%]", "left-[60%] top-[87%]"];

/** Concentric rings, glowing core and floating service tags behind the hero copy. */
export function HeroWaves() {
  return (
    <div
      aria-hidden
      className={cx(
        "pointer-events-none z-0 aspect-square",
        // mobile: oversized backdrop peeking from the right edge
        "absolute top-5 -right-58.75 w-117.5 opacity-85",
        // tablet: sits under the copy
        "md:relative md:top-auto md:right-auto md:mx-auto md:mt-10 md:w-[min(460px,90vw)] md:opacity-100",
        // desktop: beside the copy
        "lg:absolute lg:top-1/2 lg:right-[5%] lg:z-1 lg:mt-0 lg:w-[min(620px,44vw)] lg:-translate-y-1/2",
      )}
    >
      <svg viewBox="0 0 800 800" className="absolute inset-0 size-full overflow-visible">
        <defs>
          <linearGradient id="wgrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFB36B" />
            <stop offset=".5" stopColor="#FF6B00" />
            <stop offset="1" stopColor="#FF3366" />
          </linearGradient>
        </defs>
        {RINGS.map((ring, i) => (
          <motion.circle
            key={ring.r}
            cx="400"
            cy="400"
            r={ring.r}
            strokeDasharray={ring.dashed ? "2 8" : undefined}
            className={cx(
              "origin-center fill-none transform-fill",
              ring.accent ? "stroke-[url(#wgrad)] stroke-[1.4]" : ring.faint ? "stroke-ink/7" : "stroke-ink/13",
            )}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: ring.accent ? 0.7 : 1, scale: 1 }}
            transition={{ duration: 1.8, delay: 0.2 + i * 0.08, ease: EASE }}
          />
        ))}
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.35, ease: EASE }}
        className={cx(
          "absolute top-[39%] left-[39%] aspect-square w-[22%] rounded-full",
          "bg-[radial-gradient(circle_at_32%_28%,#FFE1C4_0%,#FF8A3D_30%,#FF6B00_52%,#FF3366_88%)]",
          "shadow-[0_0_0_10px_rgba(255,255,255,.35),0_30px_80px_rgba(255,90,40,.35),inset_-14px_-20px_40px_rgba(120,0,40,.3)]",
          "after:absolute after:-inset-[18%] after:rounded-full after:bg-linear-150 after:from-white/80 after:via-white/45 after:to-white/65",
          "after:shadow-[inset_0_2px_0_rgba(255,255,255,.9),inset_0_0_0_1px_rgba(255,255,255,.7)] after:mask-[radial-gradient(circle,transparent_58%,#000_60%)]",
        )}
      />

      {FRONTS.map(({ label, Icon }, i) => (
        <motion.span
          key={label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 1 + i * 0.12, ease: EASE }}
          className={cx("absolute z-2 hidden -translate-1/2 md:block", TAG_POSITIONS[i])}
        >
          <motion.span
            animate={{ y: [0, -7] }}
            transition={{ duration: 3.6 + i * 0.5, delay: i * 0.7, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
            className="inline-flex items-center gap-2.5 rounded-full bg-linear-150 from-white/96 to-white/86 py-2.25 pr-3.5 pl-2.5 text-[12.5px] whitespace-nowrap text-ink shadow-chip backdrop-blur-xs"
          >
            <i className={cx("grid size-5.5 place-items-center rounded-[9px] text-white shadow-icon", gradFill)}>
              <Icon className="size-3.5" />
            </i>
            {label}
          </motion.span>
        </motion.span>
      ))}
    </div>
  );
}
