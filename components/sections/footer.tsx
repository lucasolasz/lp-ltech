import Image from "next/image";
import { InstagramIcon } from "@/components/ui/icons";
import { Blob, Wrap } from "@/components/ui/primitives";
import Link from "next/link";
import { LEGAL_PAGES, LTECH_CNPJ, LTECH_EMAIL, LTECH_INSTAGRAM, LTECH_LEGAL_NAME, NAV_LINKS, whatsappLink } from "@/lib/site";
import logoWhite from "@/public/images/logo-ltech-white.png";
import octopus from "@/public/images/octopus.png";
import { CurrentYear } from "./current-year";

const heading = "mb-4 font-mich text-[9px] font-normal tracking-[.3em] text-paper/60";
const link = "mb-2.25 block text-[14.5px] text-paper/75 transition-colors hover:text-lamber";

/** `linkBase` prefixes the in-page anchors so pages outside the home can point back to its sections. */
export function Footer({ linkBase = "" }: { linkBase?: string }) {
  const footerNav = [...NAV_LINKS.slice(0, 3), { href: "#contato", label: "Diagnóstico gratuito" }];

  return (
    <footer data-theme="dark" className="relative overflow-hidden bg-ink-deep pt-14 pb-27.5 text-paper md:pt-16 md:pb-6.5">
      <Blob color="orange" className="-bottom-37.5 left-[30%] h-75 w-150 animate-drift opacity-40" />
      <Wrap>
        <div className="grid grid-cols-2 gap-6.5 md:gap-8 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="col-span-2 lg:col-span-1">
            <Image src={logoWhite} alt="LTECH" className="mb-3 h-4 w-auto" />
            <p className="max-w-75 text-[14.5px] text-paper/50">Inteligência que impulsiona resultados.</p>
            <div className="mt-4 flex gap-2.5">
              <a
                href={LTECH_INSTAGRAM}
                target="_blank"
                rel="noopener"
                aria-label="Instagram da LTECH"
                className="grid size-9.5 place-items-center rounded-xl bg-linear-150 from-white/10 to-white/3 text-paper/75 shadow-[inset_0_1px_0_rgba(255,255,255,.18),inset_0_0_0_1px_rgba(255,255,255,.07)] transition-colors duration-250 hover:from-lflame hover:to-lcoral hover:text-white"
              >
                <InstagramIcon className="size-4.5" />
              </a>
            </div>
          </div>
          <div>
            <p className={heading}>CONTATO</p>
            <a href={`mailto:${LTECH_EMAIL}`} className={link}>
              {LTECH_EMAIL}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener" className={link}>
              WhatsApp
            </a>
            <p className="mb-2.25 text-[14.5px] text-paper/75">Rio de Janeiro · RJ</p>
          </div>
          <div>
            <p className={heading}>NAVEGAÇÃO</p>
            {footerNav.map((item) => (
              <a key={item.label} href={linkBase + item.href} className={link}>
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <p className={heading}>LEGAL</p>
            {LEGAL_PAGES.map((item) => (
              <Link key={item.href} href={item.href} className={link}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div aria-hidden className="relative z-2 mx-auto mt-1.5 -mb-3.5 flex justify-center">
          <Image
            src={octopus}
            alt=""
            className="w-[min(124px,34vw)] opacity-7 brightness-160 grayscale mask-b-from-30% mask-b-to-95%"
          />
        </div>

        <div className="relative z-2 flex flex-col justify-between gap-1.5 border-t border-white/8 pt-4.5 font-mich text-[8.5px] tracking-[.28em] text-paper/60 uppercase md:flex-row md:flex-wrap md:gap-3">
          <span>
            © <CurrentYear /> {LTECH_LEGAL_NAME} · CNPJ {LTECH_CNPJ}
          </span>
          <span>Automatize · Escale · Cresça</span>
        </div>
      </Wrap>
    </footer>
  );
}
