import type { ReactNode } from "react";
import { cx } from "@/lib/styles";

/** Small wide-tracked label with the gradient dash in front of it. */
export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-3.5 font-mich text-[9px] tracking-[.3em] text-current/60 uppercase md:text-[10.5px] md:tracking-[.34em]",
        "before:h-px before:w-7 before:bg-linear-to-r before:from-lorange before:to-lcoral",
        className,
      )}
    >
      {children}
    </span>
  );
}

const blobColors = {
  orange: "from-lorange",
  coral: "from-lcoral",
  amber: "from-lamber",
};

/** Soft blurred gradient orb used as section ambience. Stays still on phones, where the drift costs a repaint per frame. */
export function Blob({ color, className }: { color: keyof typeof blobColors; className: string }) {
  return (
    <div
      aria-hidden
      className={cx(
        "pointer-events-none absolute z-0 rounded-full bg-radial to-transparent to-70% blur-[70px] max-md:animate-none",
        blobColors[color],
        className,
      )}
    />
  );
}

/** Centered max-width container with safe-area aware gutters. */
export function Wrap({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cx(
        "relative z-2 mx-auto w-full max-w-305 px-[max(20px,env(safe-area-inset-left))] md:px-[max(40px,env(safe-area-inset-left))]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export const sectionPad = "relative overflow-hidden py-18 md:py-26";

export const h2Class = "text-[34px] leading-[1.06] md:text-[clamp(40px,5.4vw,78px)] md:leading-[1.02]";

export const subClass = "text-[15.5px] font-light tracking-[.005em] text-current/60 md:text-[clamp(16px,1.35vw,18.5px)]";
