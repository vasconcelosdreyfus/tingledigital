import Link from "next/link";
import { Code2, Zap, Lightbulb, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/primitives/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

const areas = [
  { key: "technology", icon: Code2, href: "/contato" },
  { key: "energy", icon: Zap, href: "/utilities" },
  { key: "strategy", icon: Lightbulb, href: "/consultoria" },
] as const;

export async function HomeServices() {
  const t = await getTranslations("homeServices");
  return (
    <section
      id="atuacao"
      aria-labelledby="home-services-title"
      className="border-t border-[var(--border)] bg-[var(--bg)] py-20 lg:py-24"
    >
      <Container>
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-eyebrow mb-4 text-[var(--text-secondary)]">{t("eyebrow")}</p>
          <h2 id="home-services-title" className="text-display-2 text-balance">
            {t("title")}
          </h2>
        </Reveal>
        <RevealGroup className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {areas.map(({ key, icon: Icon, href }) => (
            <RevealItem key={key} className="h-full">
              <Link
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-7 transition-colors hover:border-[var(--text-muted)]"
              >
                <Icon className="mb-7 size-6 text-[var(--text-secondary)]" aria-hidden />
                <h3 className="text-xl font-semibold tracking-tight">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
                  {t(`${key}.description`)}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-medium underline-offset-4 group-hover:underline">
                  {t(`${key}.cta`)}
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
