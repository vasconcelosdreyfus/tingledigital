import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from "next-intl/server";
import { MapPin, ArrowUpRight } from "lucide-react";
import { SITE_URL, buildPageMetadata } from "@/lib/social-metadata";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/primitives/container";
import { ContactForm } from "@/components/forms/contact-form";
import { contato } from "@/content/data/contato";
import type { ContactInput } from "@/lib/validation/contact";

export const metadata: Metadata = buildPageMetadata({
  title: "Contato e orçamento",
  description:
    "Envie seu desafio para a Tingle Digital e receba uma proposta com escopo, prazo e valor. Resposta direta em até 5 dias úteis.",
  canonical: `${SITE_URL}/contato`,
});

function pickParam(value?: string | string[]): string {
  if (typeof value === "string") return value.trim();
  if (Array.isArray(value) && typeof value[0] === "string") return value[0].trim();
  return "";
}

function resolveInitialContactContext(params: {
  ideia?: string | string[];
  produto?: string | string[];
  servico?: string | string[];
}): {
  initialMessage: string;
  initialProjectType?: ContactInput["projectType"];
} {
  const ideia = pickParam(params.ideia).slice(0, 4000);
  const produto = pickParam(params.produto);
  const servico = pickParam(params.servico);

  if (ideia) {
    return { initialMessage: ideia, initialProjectType: "outro" };
  }

  if (produto) {
    const normalized = produto.toLowerCase();
    const initialMessage =
      normalized === "cognita"
        ? "Gostaria de solicitar uma demonstração do Cognita para o nosso projeto."
        : normalized === "eter"
          ? "Gostaria de conversar sobre o produto Eter."
          : `Gostaria de conversar sobre o produto ${produto.slice(0, 80)}.`;
    return { initialMessage, initialProjectType: "produto" };
  }

  if (servico) {
    const normalized = servico.toLowerCase();
    if (normalized === "consultoria") {
      return {
        initialMessage:
          "Gostaria de conversar sobre um projeto de consultoria com a Tingle Digital.",
        initialProjectType: "consultoria",
      };
    }
    if (normalized === "utilities") {
      return {
        initialMessage:
          "Gostaria de conversar sobre projetos em utilities, energia e inovação.",
        initialProjectType: "utilities",
      };
    }
    return {
      initialMessage: `Gostaria de conversar sobre o serviço ${servico.slice(0, 80)}.`,
      initialProjectType: "outro",
    };
  }

  return { initialMessage: "" };
}

export default async function ContatoPage({
  searchParams,
}: {
  searchParams: Promise<{
    ideia?: string | string[];
    produto?: string | string[];
    servico?: string | string[];
  }>;
}) {
  const english = (await getLocale()) === "en";
  const params = await searchParams;
  const { initialMessage, initialProjectType } = resolveInitialContactContext(params);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: english ? "Home" : "Início", href: "/" },
          { label: english ? "Contact" : "Contato", href: "/contato" },
        ]}
      />
      <PageHero
        eyebrow={contato.hero.eyebrow}
        title={contato.hero.title}
        subtitle={contato.hero.subtitle}
      />

      <section className="py-16 lg:py-20" style={{ backgroundColor: "var(--bg)" }}>
        <Container size="md">
          <ContactForm
            key={`${initialProjectType ?? ""}:${initialMessage}`}
            initialMessage={initialMessage}
            initialProjectType={initialProjectType}
          />
        </Container>
      </section>

      <section
        className="py-24 lg:py-32"
        style={{
          borderTop: "1px solid var(--border)",
          backgroundColor: "var(--surface-elevated)",
        }}
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
            <div>
              <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>
                {contato.channels.eyebrow}
              </p>
              <h2 className="text-display-3" style={{ color: "var(--text)" }}>
                {contato.channels.title}
              </h2>
              <p className="mt-4 text-sm" style={{ color: "var(--text-secondary)" }}>
                Resposta em até 5 dias úteis.
              </p>
            </div>
            <ul className="space-y-6">
              {contato.channels.items.map((ch) => (
                <li key={ch.label}>
                  <Link
                    href={ch.href}
                    className="group flex items-baseline justify-between gap-6 pb-4 transition-colors"
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    <span
                      className="text-eyebrow"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {ch.label}
                    </span>
                    <span
                      className="text-lg font-semibold transition-colors"
                      style={{ color: "var(--text)" }}
                    >
                      {ch.value}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section
        className="py-24 lg:py-32"
        style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}
      >
        <Container size="lg">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
            <div>
              <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>
                {contato.location.eyebrow}
              </p>
              <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>
                {contato.location.title}
              </h2>
              <p
                className="mt-6 text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {contato.location.body}
              </p>

              <div
                className="mt-8 rounded-2xl border p-6"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface-elevated)",
                }}
              >
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: "var(--text)" }}
                    aria-hidden="true"
                  />
                  <div className="space-y-2 text-sm leading-relaxed">
                    <h3 className="font-semibold" style={{ color: "var(--text)" }}>
                      Como chegar
                    </h3>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Rua Visconde de Pirajá, 414, Sala 718, Ipanema, Rio de Janeiro/RJ, CEP 22410-002
                    </p>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Atendimento remoto em todo o Brasil e reuniões presenciais mediante agendamento prévio.
                    </p>
                    <a
                      href="https://maps.google.com/?q=Rua+Visconde+de+Piraj%C3%A1,+414,+Ipanema,+Rio+de+Janeiro,+RJ,+22410-002"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 pt-1 font-medium underline underline-offset-4"
                      style={{ color: "var(--text)" }}
                    >
                      Abrir no Google Maps
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="overflow-hidden rounded-2xl border"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface-elevated)",
              }}
            >
              <iframe
                title="Mapa da sede da Tingle Digital em Ipanema, Rio de Janeiro"
                src="https://www.google.com/maps?q=Rua+Visconde+de+Piraj%C3%A1+414+Ipanema+Rio+de+Janeiro+RJ+22410-002&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[16/10] w-full border-0 grayscale contrast-95 dark:invert-[0.9] dark:hue-rotate-180"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
