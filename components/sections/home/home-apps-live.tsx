import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { StatusBadge } from "@/components/apps/status-badge";
import { AppIcon } from "@/components/apps/app-icon";
import { apps } from "@/content/data/apps";
import type { AppEntry } from "@/types/app";

function AppTile({ app }: { app: AppEntry }) {
  const metric = app.metrics?.[0];
  return (
    <Link
      href={app.page ?? `/cases#${app.slug}`}
      className="group flex h-full flex-col rounded-2xl p-6 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] hover:bg-[var(--surface-elevated)]"
      style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg)" }}
    >
      <AppIcon app={app} className="w-14" />
      <h3 className="mt-5 text-lg font-semibold" style={{ color: "var(--text)" }}>
        {app.name}
      </h3>
      <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {app.tagline}
      </p>
      <StatusBadge kind={app.status.kind} label={app.status.label} className="mt-4" />
      {metric && (
        <p className="mt-auto flex items-baseline gap-2 pt-5">
          <span className="text-2xl font-semibold tabular-nums" style={{ color: "var(--text)" }}>
            {metric.value}
          </span>
          <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
            {metric.label}
          </span>
        </p>
      )}
    </Link>
  );
}

/** Uma única seção de aplicações na home: cada app aparece uma vez, representado pelo ícone oficial. */
export async function HomeAppsLive() {
  const t = await getTranslations("appsLive");
  // 8 = grade 4×2 completa; a vitrine em /cases mostra todas.
  const live = apps.filter((a) => a.status.kind === "publicado" || a.status.kind === "realizado").slice(0, 8);

  return (
    <section
      id="produtos"
      className="py-24 lg:py-32"
      style={{
        backgroundColor: "var(--surface-elevated)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Container>
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>
            {t("eyebrow")}
          </p>
          <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>
            {t("title")}
          </h2>
        </Reveal>
        <RevealGroup stagger={0.05} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {live.map((app) => (
            <RevealItem key={app.slug} className="h-full">
              <AppTile app={app} />
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal className="mt-12 flex justify-center">
          <Link
            href="/cases"
            className="group inline-flex items-center gap-2 text-sm font-medium hover:underline"
            style={{ color: "var(--text)" }}
          >
            {t("cta")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
