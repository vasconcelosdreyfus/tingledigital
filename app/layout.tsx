import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { inter } from "@/lib/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <body
        className="min-h-screen antialiased"
        style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange={false}
          >
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-white"
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
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
