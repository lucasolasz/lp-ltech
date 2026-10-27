"use client";

import { useLenis } from "lenis/react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/site";
import { btn, cx, EASE } from "@/lib/styles";
import logoBlack from "@/public/images/logo-ltech-black.png";
import logoWhite from "@/public/images/logo-ltech-white.png";

type Theme = "light" | "dark";

/** Reads which section sits under the header line, which nav section is in view, and whether the hero is still behind it. */
function useHeaderState() {
  const [theme, setTheme] = useState<Theme>("light");
  const [atTop, setAtTop] = useState(true);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>("[data-theme]")];
    const navSections = NAV_LINKS.map((link) => document.querySelector<HTMLElement>(link.href));
    const hero = document.getElementById("hero");
    const update = () => {
      const current = sections.find((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= 39 && r.bottom > 39;
      });
      setTheme(current?.dataset.theme === "light" ? "light" : "dark");
      setAtTop(!!hero && hero.getBoundingClientRect().bottom > 80);
      const line = innerHeight * 0.4;
      const inView = navSections.find((el) => {
        const r = el?.getBoundingClientRect();
        return !!r && r.top <= line && r.bottom > line;
      });
      setActive(inView ? `#${inView.id}` : null);
    };
    update();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    return () => {
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
    };
  }, []);

  return { theme, atTop, active };
}

export function Header() {
  const { theme, atTop, active } = useHeaderState();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const lenis = useLenis();
  const dark = theme === "dark" || open;

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.body.style.overflow = open ? "hidden" : "";
  }, [open, lenis]);

  // While the menu is open, focus starts on its first link and Tab cycles between the toggle and the menu.
  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    const focusables = () => [toggle, ...document.querySelectorAll<HTMLElement>("#mobile-menu a")].filter((el) => el !== null);
    focusables()[1]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 65.625rem)");
    const onDesktop = () => desktop.matches && setOpen(false);
    addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);
    return () => {
      removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  return (
    <>
      <header
        className={cx(
          "fixed inset-x-0 top-0 pt-[env(safe-area-inset-top)] transition-[background-color,color] duration-400",
          open ? "z-130 bg-transparent text-paper" : "z-100",
          !open && (theme === "light" ? "text-ink" : "text-paper"),
          // Phones skip the frosted blur, which re-samples the page on every scroll frame; a denser tint stands in for it.
          !open && !atTop && "md:backdrop-blur-[16px] md:backdrop-saturate-140",
          !open && !atTop && (theme === "light" ? "bg-[rgba(243,241,236,.96)] md:bg-[rgba(243,241,236,.82)]" : "bg-ink-deep/95 md:bg-ink-deep/78"),
        )}
      >
        <div className="relative mx-auto flex h-15.5 max-w-305 items-center justify-between px-[max(20px,env(safe-area-inset-left))] md:h-18.5 md:px-[max(40px,env(safe-area-inset-left))]">
          <a href="#hero" aria-label="LTECH — início" className="relative h-3.75 w-24">
            <Image src={logoWhite} alt="LTECH" loading="eager" className={cx("absolute inset-0 h-3.75 w-auto transition-opacity duration-400", !dark && "opacity-0")} />
            <Image src={logoBlack} alt="" loading="eager" className={cx("absolute inset-0 h-3.75 w-auto transition-opacity duration-400", dark && "opacity-0")} />
          </a>

          <ul
            className={cx(
              "hidden gap-1 rounded-full p-1.25 lg:flex",
              atTop ? "inset-ring inset-ring-ink/12" : "inset-ring inset-ring-[rgba(128,128,128,.28)]",
            )}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href ? "location" : undefined}
                  className="relative block rounded-full px-4.5 py-2 text-[13.5px] font-normal tracking-[.01em] opacity-85 transition-[opacity,color] duration-250 hover:opacity-100 aria-[current=location]:text-white aria-[current=location]:opacity-100"
                >
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.55 }}
                      className="absolute inset-0 rounded-full bg-linear-110 from-lflame via-lorange to-lcoral"
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contato"
              className={cx(
                "hidden rounded-full px-5 py-2.75 text-[13.5px] font-normal whitespace-nowrap shadow-[inset_0_1px_0_rgba(255,255,255,.12)] transition-shadow duration-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_10px_30px_rgba(11,11,13,.25)] lg:inline-flex",
                theme === "dark" ? "bg-paper text-ink" : "bg-ink text-paper",
              )}
            >
              Diagnóstico gratuito
            </a>
            <button
              ref={toggleRef}
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
              className={cx(
                "relative grid size-11 cursor-pointer place-items-center rounded-full lg:hidden",
                open
                  ? "bg-white/10 inset-ring inset-ring-white/15"
                  : dark
                    ? "bg-linear-150 from-white/16 to-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_0_0_1px_rgba(255,255,255,.08)]"
                    : "bg-linear-150 from-white/75 to-white/40 shadow-[inset_0_1px_0_#fff,0_0_0_1px_rgba(11,11,13,.08)]",
              )}
            >
              <span className={cx("absolute h-[1.5px] w-4.5 bg-current transition-transform duration-450 ease-out-soft", open ? "rotate-45" : "-translate-y-[3.5px]")} />
              <span className={cx("absolute h-[1.5px] w-4.5 bg-current transition-transform duration-450 ease-out-soft", open ? "-rotate-45" : "translate-y-[3.5px]")} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.45, ease: EASE } }}
            exit={{ opacity: 0, transition: { duration: 0.35, ease: EASE } }}
            className="fixed inset-0 z-110 flex flex-col justify-between bg-ink-deep/96 bg-[radial-gradient(90%_60%_at_100%_0%,rgba(255,107,0,.28),transparent_60%),radial-gradient(80%_50%_at_0%_100%,rgba(255,51,102,.2),transparent_60%)] px-6 pt-26 pb-[calc(30px+env(safe-area-inset-bottom))] text-paper backdrop-blur-[18px] lg:hidden"
          >
            <div>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.href ? "location" : undefined}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.06, ease: EASE }}
                  className="flex items-baseline gap-4 border-b border-white/8 py-4 text-[32px] font-extralight tracking-[-.02em] aria-[current=location]:text-lamber"
                >
                  <small className="font-mich text-[9px] tracking-[.25em] text-lamber">{String(i + 1).padStart(2, "0")}</small>
                  {link.label}
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="flex flex-col gap-4"
            >
              <a href="#contato" onClick={() => setOpen(false)} className={cx(btn.grad, "justify-center")}>
                Diagnóstico gratuito →
              </a>
              <div className="flex items-center justify-between font-mich text-[9px] tracking-[.28em] text-white/50">
                <span>RIO DE JANEIRO · RJ</span>
                <span>AUTOMATIZE · ESCALE · CRESÇA</span>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
