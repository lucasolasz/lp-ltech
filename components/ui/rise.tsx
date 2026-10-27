import type { CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/styles";

type RiseProps = {
  as?: "div" | "p" | "span";
  delay?: number;
  /** Seconds the entrance takes. */
  duration?: number;
  /** Distance in px the element rises from. */
  y?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Above-the-fold entrance done in CSS, so it starts on the first paint instead of waiting for hydration.
 * Keeps the hero copy from holding back Largest Contentful Paint.
 */
export function Rise({ as: Tag = "div", delay = 0, duration = 1.1, y = 32, className, children }: RiseProps) {
  const style = { "--rise-y": `${y}px`, animationDelay: `${delay}s`, animationDuration: `${duration}s` } as CSSProperties;
  return (
    <Tag className={cx("animate-rise motion-reduce:animate-none", className)} style={style}>
      {children}
    </Tag>
  );
}
