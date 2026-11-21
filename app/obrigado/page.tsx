import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from "next-intl/server";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";
import { LeadConversionTracker } from "@/components/seo/lead-conversion-tracker";
import { SITE_URL, buildPageMetadata } from "@/lib/social-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) === "en" ? "en" : "pt";
  return buildPageMetadata({
    title: locale === "en" ? "Message received" : "Mensagem recebida",
    description:
      locale === "en"
        ? "We received your message. Our team replies within 5 business days."
        : "Recebemos sua mensagem. Nossa equipe retorna em até 5 dias úteis.",
    canonical: `${SITE_URL}/obrigado`,
    locale,
    robots: { index: false, follow: false },
  });
}

export default async function ObrigadoPage() {
  const english = (await getLocale()) === "en";

  return (
    <section
      className="py-24 lg:py-36"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <LeadConversionTracker />
      <Container size="md">
        <div
          className="mx-auto max-w-2xl rounded-3xl p-8 text-center sm:p-12"
          style={{
            border: "1px solid var(--border)",
            backgroundColor: "var(--surface-elevated)",
          }}
        >
          <p className="text-eyebrow" style={{ color: "var(--text-secondary)" }}>
            {english ? "Confirmed" : "Recebida"}
          </p>
          <h1 className="text-display-2 mt-4 text-balance">
            {english ? "Your message has arrived." : "Sua mensagem chegou."}
          </h1>
          <p
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty"
            style={{ color: "var(--text-secondary)" }}
          >
            {english
              ? "Thank you for reaching out to Tingle Digital. We will review your project context and reply directly to the e-mail provided."
              : "Obrigado por falar com a Tingle Digital. Vamos analisar o contexto do seu projeto e retornar diretamente no e-mail informado."}
          </p>
          <p
            className="mt-4 inline-flex rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          >
            {english ? "Reply within 5 business days." : "Resposta em até 5 dias úteis."}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/cases">
                {english ? "Explore cases" : "Ver cases"}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a
                href="https://wa.me/5521996953940"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {english ? "Chat on WhatsApp" : "Falar no WhatsApp"}
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link href="/">{english ? "Back to Home" : "Voltar à Home"}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
