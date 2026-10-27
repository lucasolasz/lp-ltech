"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { cx } from "@/lib/styles";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Grid on desktop, swipeable snap carousel with pager dots on mobile.
 * Each child should carry its own grid sizing plus `max-md:basis-[84%]`.
 */
export function SnapCarousel({ children, className }: { children: ReactNode; className: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const center = track.scrollLeft + track.clientWidth / 2;
      let best = Infinity;
      let index = 0;
      [...track.children].forEach((child, i) => {
        const el = child as HTMLElement;
        const distance = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
        if (distance < best) {
          best = distance;
          index = i;
        }
      });
      setActive(index);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    return () => track.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <div
        ref={trackRef}
        className={cx(
          "relative z-2",
          "max-md:-mx-5 max-md:flex max-md:snap-x max-md:snap-mandatory max-md:gap-3 max-md:overflow-x-auto max-md:px-5 max-md:pt-1 max-md:pb-1.5 max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden",
          "max-md:*:min-w-0 max-md:*:shrink-0 max-md:*:grow-0 max-md:*:basis-[84%] max-md:*:snap-center",
          className,
        )}
      >
        {children}
      </div>
      <div className="mt-4.5 flex items-center justify-between md:hidden" aria-hidden>
        <div className="flex gap-1.5">
          {Array.from({ length: count }, (_, i) => (
            <i
              key={i}
              className={cx(
                "h-1.5 rounded-md transition-[width,opacity] duration-450 ease-out-soft",
                i === active ? "w-5.5 bg-linear-90 from-lflame to-lcoral opacity-100" : "w-1.5 bg-current opacity-25",
              )}
            />
          ))}
        </div>
        <span className="font-mich text-[9px] tracking-[.25em] opacity-65">
          {pad(active + 1)} / {pad(count)}
        </span>
      </div>
    </>
  );
}
