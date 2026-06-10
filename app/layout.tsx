import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tingle Digital — Tecnologia com alma criativa",
    template: "%s · Tingle Digital",
  },
  description:
    "Construímos produtos, consultamos com impacto e modernizamos utilities com AI + IoT. Tecnologia com alma criativa.",
  metadataBase: new URL("https://tingledigital.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body className="noise-overlay min-h-screen bg-[#0a0a0f] text-[#F5F5FA] antialiased">
        <ScrollProgress />
        <LenisProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-[--color-accent-yellow] focus:px-4 focus:py-2 focus:text-[--color-bg]"
          >
            Pular para o conteúdo
          </a>
          <Header />
          <main id="main" className="pt-16">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
