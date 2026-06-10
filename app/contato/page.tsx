import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/primitives/container";
import { ContactForm } from "@/components/forms/contact-form";
import { contato } from "@/content/data/contato";

export const metadata: Metadata = {
  title: "Contato",
  description: contato.hero.subtitle,
  openGraph: { title: "Contato · Tingle Digital", description: contato.hero.subtitle },
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow={contato.hero.eyebrow}
        title={contato.hero.title}
        subtitle={contato.hero.subtitle}
      />

      <section className="py-16 lg:py-20" style={{ backgroundColor: "var(--bg)" }}>
        <Container size="md">
          <ContactForm />
        </Container>
      </section>

      <section className="py-24 lg:py-32" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--surface-elevated)" }}>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
            <div>
              <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>{contato.channels.eyebrow}</p>
              <h2 className="text-display-3" style={{ color: "var(--text)" }}>{contato.channels.title}</h2>
            </div>
            <ul className="space-y-6">
              {contato.channels.items.map((ch) => (
                <li key={ch.label}>
                  <Link
                    href={ch.href}
                    className="group flex items-baseline justify-between gap-6 pb-4 transition-colors"
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    <span className="text-eyebrow" style={{ color: "var(--text-secondary)" }}>{ch.label}</span>
                    <span className="text-lg font-semibold transition-colors" style={{ color: "var(--text)" }}>
                      {ch.value}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}>
        <Container size="md">
          <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>{contato.location.eyebrow}</p>
          <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>{contato.location.title}</h2>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>{contato.location.body}</p>
        </Container>
      </section>
    </>
  );
}
