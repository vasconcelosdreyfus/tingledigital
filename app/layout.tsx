import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LenisProvider } from "@/components/providers/lenis-provider";
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
      <body className="min-h-screen bg-white text-[#0A0A0A] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-[#0A0A0A] focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <LenisProvider>
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
