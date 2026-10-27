"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Children, useEffect, useState, type ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cx } from "@/lib/styles";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Grid on desktop, swipeable Embla carousel with pager dots on mobile.
 * Embla only claims horizontal drags, so vertical swipes keep scrolling the page.
 */
export function SnapCarousel({ children, className }: { children: ReactNode; className: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    // One snap per slide, so the pager index always matches the card index.
    containScroll: "keepSnaps",
    // Matches --breakpoint-md: at 760px and up the children lay out as a plain grid.
    breakpoints: { "(min-width: 760px)": { active: false } },
  });
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  useEffect(() => {
    if (!emblaApi) return;
    // Embla only changes selectedScrollSnap on pointer release, so the pager lagged a whole
    // swipe behind. Track the snap nearest to the live scroll position instead.
    const update = () => {
      const progress = emblaApi.scrollProgress();
      const snaps = emblaApi.scrollSnapList();
      let nearest = 0;
      snaps.forEach((snap, i) => {
        if (Math.abs(snap - progress) < Math.abs(snaps[nearest] - progress)) nearest = i;
      });
      setActive(nearest);
    };
    update();
    emblaApi.on("scroll", update).on("reInit", update);
    return () => {
      emblaApi.off("scroll", update).off("reInit", update);
    };
  }, [emblaApi]);

  return (
    <>
      {/* Off-screen slides never intersect the viewport, so their own Reveal would keep them hidden until swiped in.
          On phones the slides are forced visible and the whole carousel reveals once; desktop keeps the per-card stagger. */}
      <Reveal className="relative z-2 md:transform-none! md:opacity-100!">
        <div ref={emblaRef} className="max-md:-mx-5 max-md:overflow-hidden">
          <div
            className={cx(
              "max-md:flex max-md:touch-pan-y max-md:touch-pinch-zoom max-md:gap-3 max-md:px-5 max-md:pt-1 max-md:pb-1.5",
              "max-md:*:min-w-0 max-md:*:shrink-0 max-md:*:grow-0 max-md:*:basis-[84%]",
              "max-md:*:transform-none! max-md:*:opacity-100!",
              className,
            )}
          >
            {children}
          </div>
        </div>
      </Reveal>
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
