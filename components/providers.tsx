"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { MotionConfig } from "motion/react";
import { useEffect, type ReactNode } from "react";
import { REDUCED_MOTION_QUERY, useMediaQuery } from "@/hooks/use-media-query";

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

/** Routes every in-page `#anchor` click through Lenis so jumps glide instead of snapping, then moves focus to the target. */
function AnchorScroll() {
  const lenis = useLenis();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      const hash = link?.getAttribute("href");
      if (!hash || hash.length < 2) return;
      const target = document.querySelector(hash);
      if (!target) return;
      event.preventDefault();
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { duration: 1.4, easing: easeOutQuart, force: true });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
      // Keyboard and screen-reader users continue from the target (focusable ones, such as the skip link's `<main>`).
      (target as HTMLElement).focus({ preventScroll: true });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  return null;
}

export function Providers({ children }: { children: ReactNode }) {
  // Lenis stays off until the client confirms the user did not ask for reduced motion.
  const reduceMotion = useMediaQuery(REDUCED_MOTION_QUERY, true);

  return (
    <MotionConfig reducedMotion="user">
      {!reduceMotion && <ReactLenis root options={{ lerp: 0.085, wheelMultiplier: 0.9, smoothWheel: true }} />}
      <AnchorScroll />
      {children}
    </MotionConfig>
  );
}
