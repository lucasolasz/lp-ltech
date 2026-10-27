"use client";

import { animate, inView, motion, useMotionValue, useScroll, useTransform, type Transition } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { MOBILE_QUERY } from "@/hooks/use-media-query";
import { cx, EASE, gradFill } from "@/lib/styles";

const STEP_SECONDS = 0.95;
const OVERSHOOT = [0.34, 1.35, 0.64, 1] as const;

const svgText = "font-mich text-[7px] tracking-[1.2px]";

/** Fades in and settles from `dy` once `on` flips. */
const fadeIn = (on: boolean, dy: number, transition: Transition) => ({
  initial: { opacity: 0, y: dy },
  animate: on ? { opacity: 1, y: 0 } : undefined,
  transition: { ease: EASE, ...transition },
});

function Grid() {
  return <rect width="300" height="170" fill="url(#mgrid)" />;
}

function Diagnosis({ lit }: { lit: boolean }) {
  return (
    <svg viewBox="0 0 300 170" className="absolute inset-0 size-full">
      <Grid />
      <path d="M70 85h40M170 85h40" className="fill-none stroke-white/25" />
      <rect x="20" y="65" width="50" height="40" rx="10" className="fill-white/8 stroke-white/15" />
      <motion.rect
        x="110" y="65" width="60" height="40" rx="10" strokeDasharray="4 4"
        className="fill-lcoral/8 stroke-lcoral"
        animate={lit ? { opacity: [1, 0.35, 1, 0.35, 1] } : undefined}
        transition={{ duration: 2, ease: "linear" }}
      />
      <text x="140" y="125" textAnchor="middle" className={cx(svgText, "fill-lcoral tracking-[1.5px]")}>GARGALO</text>
      <g className="origin-center animate-scan transform-fill">
        <circle cx="45" cy="80" r="26" fill="rgba(255,255,255,.55)" stroke="url(#mg)" strokeWidth="3" />
        <path d="M63 98l16 16" stroke="url(#mg)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="38" cy="72" r="7" fill="rgba(255,255,255,.9)" />
      </g>
    </svg>
  );
}

const STRATEGY_PATH = "M40 120 C 90 120, 90 50, 140 50 S 200 115, 260 60";

function Strategy({ lit }: { lit: boolean }) {
  return (
    <svg viewBox="0 0 300 170" className="absolute inset-0 size-full">
      <Grid />
      <path d={STRATEGY_PATH} strokeDasharray="6 7" className="fill-none stroke-white/12 stroke-2" />
      <motion.path
        d={STRATEGY_PATH} stroke="url(#mg)" strokeWidth="3" fill="none" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={lit ? { pathLength: 1 } : undefined}
        transition={{ duration: 1.6, ease: EASE }}
      />
      <g className="fill-white/8 stroke-white/20">
        <circle cx="40" cy="120" r="9" />
        <circle cx="140" cy="50" r="9" />
        <circle cx="260" cy="60" r="11" className="stroke-lorange stroke-2" />
      </g>
      <motion.circle
        cx="260" cy="60" r="4" className="origin-center fill-lorange transform-fill"
        initial={{ opacity: 0, scale: 0.2 }}
        animate={lit ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 0.7, delay: 1.25, ease: [0.34, 1.5, 0.64, 1] }}
      />
      <text x="40" y="146" textAnchor="middle" className={cx(svgText, "fill-white/45 text-[6.5px]")}>HOJE</text>
      <text x="260" y="90" textAnchor="middle" className={cx(svgText, "fill-lorange text-[6.5px]")}>META</text>
    </svg>
  );
}

const BLOCKS = [
  { x: 60, label: "CRM", rect: "fill-white/8 stroke-white/15", text: "fill-white/60" },
  { x: 122, label: "IA", rect: "", text: "fill-white/8", grad: true },
  { x: 184, label: "ERP", rect: "fill-white/8 stroke-white/15", text: "fill-white/60" },
];

function Implementation({ lit }: { lit: boolean }) {
  return (
    <svg viewBox="0 0 300 170" className="absolute inset-0 size-full">
      <Grid />
      <rect x="50" y="118" width="200" height="16" rx="8" className="fill-white/8" />
      {BLOCKS.map((b, i) => (
        <motion.g key={b.label} {...fadeIn(lit, -34, { duration: 0.9, delay: i * 0.15, ease: OVERSHOOT })}>
          <rect x={b.x} y="78" width="56" height="36" rx="10" className={b.rect} fill={b.grad ? "url(#mg)" : undefined} />
          <text x={b.x + 28} y="100" textAnchor="middle" className={cx("font-sans text-[9px]", b.text)}>{b.label}</text>
        </motion.g>
      ))}
      <motion.g {...fadeIn(lit, 8, { duration: 0.8, delay: 0.8 })}>
        <rect x="104" y="30" width="92" height="26" rx="13" className="fill-white/8 stroke-[rgba(61,220,151,.6)]" />
        <circle cx="117" cy="43" r="4" className="fill-ok" />
        <text x="160" y="47" textAnchor="middle" className={cx(svgText, "fill-mint")}>INTEGRADO</text>
      </motion.g>
    </svg>
  );
}

const RISE_PATH = "M30 140 C 80 136, 100 120, 140 112 S 210 70, 270 34";

function Optimization({ lit }: { lit: boolean }) {
  return (
    <svg viewBox="0 0 300 170" className="absolute inset-0 size-full">
      <Grid />
      <motion.path
        d={`${RISE_PATH} L270 150 L30 150Z`} fill="url(#mgv)"
        {...fadeIn(lit, 0, { duration: 1.4, delay: 0.35 })}
      />
      <motion.path
        d={RISE_PATH} stroke="url(#mg)" strokeWidth="3" fill="none" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={lit ? { pathLength: 1 } : undefined}
        transition={{ duration: 1.7, ease: EASE }}
      />
      <circle cx="270" cy="34" r="6" className="fill-lcoral">
        <animate attributeName="r" values="5;8;5" dur="1.6s" repeatCount="indefinite" />
      </circle>
      <motion.g {...fadeIn(lit, 8, { duration: 0.8, delay: 1.2 })}>
        <rect x="170" y="24" width="74" height="24" rx="12" className="fill-white/8 stroke-white/10" />
        <text x="207" y="40" textAnchor="middle" className={cx(svgText, "fill-lorange")}>EVOLUINDO</text>
      </motion.g>
    </svg>
  );
}

const STEPS: { title: string; text: string; Ill: (p: { lit: boolean }) => ReactNode }[] = [
  { title: "Diagnóstico", text: "Mapeamos a operação e entendemos o que precisa melhorar.", Ill: Diagnosis },
  {
    title: "Estratégia",
    text: "Desenhamos a solução para a sua operação e traçamos o escopo do projeto, sem modelo genérico de prateleira.",
    Ill: Strategy,
  },
  { title: "Implementação", text: "Construímos a solução e a colocamos para funcionar dentro da empresa.", Ill: Implementation },
  { title: "Otimização", text: "Acompanhamos a solução em uso para garantir que ela chegue ao resultado esperado.", Ill: Optimization },
];

/**
 * Desktop: a beam runs across the rail and lights each step as it arrives.
 * Mobile: a vertical line follows the scroll and each step lights as it enters the screen.
 */
export function MethodTrack() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lit, setLit] = useState<boolean[]>(() => STEPS.map(() => false));

  const beam = useMotionValue(0);
  const beamWidth = useTransform(beam, (v) => `${v * 100}%`);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 70%", "end 70%"] });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const light = (i: number) => setLit((prev) => (prev[i] ? prev : prev.map((v, j) => v || j === i)));

    if (window.matchMedia(MOBILE_QUERY).matches) {
      const stops = stepRefs.current.map((el, i) => (el ? inView(el, () => light(i), { amount: 0.55 }) : () => {}));
      return () => stops.forEach((stop) => stop());
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    const stop = inView(
      track,
      () => {
        animate(beam, 1, { duration: STEP_SECONDS * 3, ease: "linear" });
        STEPS.forEach((_, i) => timers.push(setTimeout(() => light(i), i * STEP_SECONDS * 1000)));
      },
      { amount: 0.35 },
    );
    return () => {
      stop();
      timers.forEach(clearTimeout);
    };
  }, [beam]);

  return (
    <div ref={trackRef} className="relative z-2 max-md:pl-13">
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <linearGradient id="mg" x1="0" x2="1">
            <stop offset="0" stopColor="#FFB36B" />
            <stop offset=".5" stopColor="#FF6B00" />
            <stop offset="1" stopColor="#FF3366" />
          </linearGradient>
          <linearGradient id="mgv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FF6B00" stopOpacity=".35" />
            <stop offset="1" stopColor="#FF6B00" stopOpacity="0" />
          </linearGradient>
          <pattern id="mgrid" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M16 0H0V16" fill="none" stroke="rgba(255,255,255,.06)" />
          </pattern>
        </defs>
      </svg>

      {/* desktop rail */}
      <div className="relative top-7 mx-[12.5%] hidden h-0.5 rounded-xs bg-white/10 lg:block">
        <motion.i style={{ width: beamWidth }} className="absolute inset-y-0 left-0 rounded-xs bg-linear-90 from-lamber via-lorange to-lcoral shadow-glow" />
        <motion.span
          style={{ left: beamWidth }}
          className="absolute top-1/2 size-3 -translate-1/2 rounded-full bg-white shadow-[0_0_0_4px_rgba(255,107,0,.25),0_0_20px_#FF6B00]"
        />
      </div>

      {/* mobile line */}
      <div className="absolute top-7 bottom-7 left-5.25 w-0.5 rounded-xs bg-white/10 md:hidden">
        <motion.i
          style={{ scaleY: scrollYProgress }}
          className="absolute inset-0 origin-top rounded-xs bg-linear-to-b from-lamber via-lorange to-lcoral shadow-[0_0_12px_rgba(255,107,0,.6)]"
        />
      </div>

      <div className="flex flex-col gap-4.5 md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-10 lg:grid-cols-4 lg:gap-5">
        {STEPS.map(({ title, text, Ill }, i) => (
          <div key={title} ref={(el) => { stepRefs.current[i] = el; }} className="relative flex flex-col">
            <span
              className={cx(
                "z-2 grid place-items-center rounded-full bg-ink-deep font-light transition-[background-color,box-shadow,color] duration-600 ease-out-soft",
                "absolute top-2.5 -left-13 size-11 text-[13px]",
                "md:relative md:top-auto md:left-auto md:mb-7 md:size-14 md:self-center md:text-[15px]",
                lit[i] ? cx(gradFill, "text-white shadow-node-lit") : "bg-linear-150 from-white/14 to-white/4 text-paper shadow-node",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div
              className={cx(
                "glass flex-1 rounded-[26px] p-2.5 pb-5 transition-transform duration-900 ease-out-soft md:p-3.5 md:pb-6.5",
                lit[i] && "-translate-y-1.5",
              )}
            >
              <div className="relative h-37.5 overflow-hidden rounded-[18px] bg-[radial-gradient(120%_100%_at_50%_0%,rgba(255,255,255,.07),rgba(255,255,255,.015))] shadow-panel md:h-42.5">
                <Ill lit={lit[i]} />
              </div>
              <h3 className="mx-2 mt-4 mb-1.5 text-[22px] font-light md:mx-2.5 md:mt-5.5 md:mb-2 md:text-2xl">{title}</h3>
              <p className="mx-2 text-[14.5px] text-paper/60 md:mx-2.5 md:text-[15px]">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
