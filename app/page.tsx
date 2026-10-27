import type { Metadata } from "next";
import { Header } from "@/components/header";
import { homeJsonLd, JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Method } from "@/components/sections/method";
import { Projects } from "@/components/sections/projects";
import { Solutions } from "@/components/sections/solutions";
import { WhatsAppCta } from "@/components/whatsapp-cta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Solutions />
        <Method />
        <Projects />
        <Contact />
        <Faq />
      </main>
      <Footer />
      <WhatsAppCta />
    </>
  );
}
