import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { inter } from "@/lib/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileWhatsAppCta } from "@/components/layout/mobile-whatsapp-cta";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { GoogleAnalytics } from "@/components/seo/google-analytics";
import { OrganizationJsonLd } from "@/components/seo/organization-jsonld";
import { SITE_NAME, SITE_URL, socialImages } from "@/lib/social-metadata";
import "./globals.css";

const defaultTitle = "Tingle Digital: tecnologia com alma criativa";
const defaultDescription =
  "Desenvolvemos produtos digitais próprios, consultoria estratégica e soluções em utilities. Conheça nossas entregas e fale conosco.";

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: "%s · Tingle Digital",
  },
  description: defaultDescription,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
    images: socialImages,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: socialImages.map((img) => img.url),
  },
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
        <OrganizationJsonLd />
        <GoogleAnalytics />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
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
              <MobileWhatsAppCta locale={locale} />
            </LenisProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
