import { LegalMain } from "@/components/legal";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/sections/footer";

export default function LegalLayout({ children }: LayoutProps<"/legal">) {
  return (
    <>
      <PageHeader />
      <LegalMain>{children}</LegalMain>
      <Footer linkBase="/" />
    </>
  );
}
