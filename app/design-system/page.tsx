import type { Metadata } from "next";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Pill } from "@/components/primitives/pill";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/motion/marquee";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { TextReveal } from "@/components/motion/text-reveal";

export const metadata: Metadata = {
  title: "Design System",
  robots: { index: false, follow: false },
};

export default function DesignSystemPage() {
  return (
    <>
      <Section spacing="lg">
        <Container>
          <Eyebrow color="yellow">Design System v1</Eyebrow>
          <h1 className="text-display-1 mt-4 text-balance">Bold Kinetic foundations</h1>
          <p className="mt-6 max-w-2xl text-lg text-[--color-text-muted]">
            Tokens, primitives, layout and motion components used across the site. This
            page is internal and not indexed.
          </p>
        </Container>
      </Section>

      <Section spacing="md" tone="elevated">
        <Container>
          <Eyebrow>01 · Colors</Eyebrow>
          <h2 className="text-display-3 mt-2 mb-8">Electric Multi-Accent</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { name: "yellow", label: "Consultoria" },
              { name: "pink", label: "Eter" },
              { name: "cyan", label: "Cognita" },
              { name: "lime", label: "Utilities" },
            ].map((c) => (
              <div key={c.name} className="rounded-xl border border-[--color-border] p-4">
                <div
                  className="mb-3 aspect-square w-full rounded-lg"
                  style={{ backgroundColor: `var(--color-accent-${c.name})` }}
                />
                <p className="text-eyebrow">{c.name}</p>
                <p className="mt-1 text-sm text-[--color-text-muted]">{c.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="md">
        <Container>
          <Eyebrow>02 · Typography</Eyebrow>
          <h2 className="text-display-3 mt-2 mb-8">Inter family</h2>
          <div className="space-y-8">
            <div>
              <p className="text-eyebrow mb-2 text-[--color-text-subtle]">
                display-1 / Inter 900
              </p>
              <p className="text-display-1">Tecnologia com alma.</p>
            </div>
            <div>
              <p className="text-eyebrow mb-2 text-[--color-text-subtle]">
                display-2 / Inter 800
              </p>
              <p className="text-display-2">Construímos futuros.</p>
            </div>
            <div>
              <p className="text-eyebrow mb-2 text-[--color-text-subtle]">
                display-3 / Inter 700
              </p>
              <p className="text-display-3">Para C-level que escolhe parceiros.</p>
            </div>
            <div>
              <p className="text-eyebrow mb-2 text-[--color-text-subtle]">
                body / Inter 400
              </p>
              <p className="max-w-2xl text-base text-[--color-text]">
                Construímos produtos, consultamos com impacto e modernizamos utilities com
                AI + IoT. Tecnologia com alma criativa.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="md" tone="elevated">
        <Container>
          <Eyebrow>03 · Buttons</Eyebrow>
          <h2 className="text-display-3 mt-2 mb-8">Variants &amp; sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra large</Button>
          </div>
        </Container>
      </Section>

      <Section spacing="md">
        <Container>
          <Eyebrow>04 · Pills &amp; Eyebrows</Eyebrow>
          <h2 className="text-display-3 mt-2 mb-8">Tags por pilar</h2>
          <div className="flex flex-wrap gap-3">
            <Pill color="yellow">Consultoria</Pill>
            <Pill color="pink">Eter</Pill>
            <Pill color="cyan">Cognita</Pill>
            <Pill color="lime">Utilities</Pill>
            <Pill>Default</Pill>
          </div>
        </Container>
      </Section>

      <Section spacing="md" tone="elevated">
        <Container>
          <Eyebrow>05 · Marquee</Eyebrow>
          <h2 className="text-display-3 mt-2 mb-8">Texto rolando lateral</h2>
        </Container>
        <Marquee className="border-y border-[--color-border] py-6">
          {["50+ PROJETOS", "4 PRODUTOS", "10.000+ PESSOAS", "6 ANOS", "★"].map((t) => (
            <span
              key={t}
              className="text-display-3 flex items-center gap-12 text-[--color-text-muted]"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </Section>

      <Section spacing="md">
        <Container>
          <Eyebrow>06 · Animated counters</Eyebrow>
          <h2 className="text-display-3 mt-2 mb-8">Conta ao entrar no viewport</h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <p className="text-display-1">
                <AnimatedCounter value={50} suffix="+" />
              </p>
              <p className="text-eyebrow mt-2 text-[--color-text-muted]">Projetos</p>
            </div>
            <div>
              <p className="text-display-1">
                <AnimatedCounter value={4} />
              </p>
              <p className="text-eyebrow mt-2 text-[--color-text-muted]">Produtos</p>
            </div>
            <div>
              <p className="text-display-1">
                <AnimatedCounter value={10000} suffix="+" />
              </p>
              <p className="text-eyebrow mt-2 text-[--color-text-muted]">Pessoas</p>
            </div>
            <div>
              <p className="text-display-1">
                <AnimatedCounter value={6} suffix="+" />
              </p>
              <p className="text-eyebrow mt-2 text-[--color-text-muted]">Anos</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="md" tone="elevated">
        <Container>
          <Eyebrow>07 · Text reveal</Eyebrow>
          <h2 className="text-display-3 mt-2 mb-8">Palavras animam ao entrar</h2>
          <TextReveal
            as="h2"
            text="Tecnologia com alma criativa para quem constrói o amanhã."
            className="text-display-2 max-w-3xl text-balance"
          />
        </Container>
      </Section>
    </>
  );
}
