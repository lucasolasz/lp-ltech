/** Joins class names, skipping falsy values. */
export const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

/** Motion easing shared by every entrance animation. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const gradText =
  "bg-linear-100 from-lpeach via-lorange via-38% to-lcoral to-80% bg-clip-text text-transparent";

export const gradFill = "bg-linear-135 from-lflame to-lcoral";

const btnBase =
  "relative inline-flex cursor-pointer items-center gap-3.5 rounded-full px-7 py-4 text-[14.5px] font-normal tracking-[.02em] whitespace-nowrap transition-[translate,scale,box-shadow,background-color,color] duration-300 active:scale-[.98]";

export const btn = {
  grad: cx(
    btnBase,
    "bg-linear-110 from-lflame via-lorange via-45% to-lcoral text-white shadow-btn-grad hover:-translate-y-px hover:shadow-btn-grad-hover",
  ),
  glassLight: cx(btnBase, "bg-linear-to-b from-white/85 to-white/50 text-ink shadow-btn-light hover:from-white hover:to-white/70"),
};
