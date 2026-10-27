import type { Metadata, Viewport } from "next";
import { Michroma, Sora } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "LTECH — Inteligência Operacional",
  description:
    "LTECH — Inteligência Operacional. IA, automação e sistemas sob medida para reduzir custos, eliminar gargalos e acelerar o crescimento da sua operação.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F4F3EF",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${michroma.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
