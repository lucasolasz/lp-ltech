import Image from "next/image";
import Link from "next/link";
import { Wrap } from "@/components/ui/primitives";
import { btn, cx } from "@/lib/styles";
import logoBlack from "@/public/images/logo-ltech-black.png";

/** Static header for pages outside the home: logo back to the start plus the main call to action. */
export function PageHeader() {
  return (
    <header className="border-b border-ink/8 bg-cream pt-[env(safe-area-inset-top)] text-ink">
      <Wrap className="flex h-15.5 items-center justify-between md:h-18.5">
        <Link href="/" aria-label="LTECH — início">
          <Image src={logoBlack} alt="LTECH" loading="eager" className="h-3.75 w-auto" />
        </Link>
        <Link href="/#contato" className={cx(btn.grad, "px-5 py-2.75 text-[13.5px]")}>
          Diagnóstico gratuito
        </Link>
      </Wrap>
    </header>
  );
}
