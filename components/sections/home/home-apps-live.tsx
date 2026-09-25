import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { StatusBadge } from "@/components/apps/status-badge";
import { apps } from "@/content/data/apps";
import type { AppEntry, AppImage } from "@/types/app";

function Cover({ image }: { image: AppImage }) {
  // Tela de celular aparece inteira (contain); captura larga preenche o quadro (cover, ancorada no topo).
  // Nos dois casos a proporção original é mantida.
  const portrait = image.height > image.width;
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden"
      style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--border)" }}
    >
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
        className={
          portrait
            ? "absolute inset-0 h-full w-full object-contain p-4"
            : "absolute inset-0 h-full w-full object-cover object-top"
        }
      />
    </div>
  );
}

function AppLiveCard({ app }: { app: AppEntry }) {
  const cover = app.images[0];
  const metric = app.metrics?.[0];
  return (
    <Link
      href="/cases"
      className="group flex h-full flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-lg hover:shadow-black/5"
      style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg)" }}
    >
      {cover && <Cover image={cover} />}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
            {app.category}
          </span>
          <StatusBadge kind={app.status.kind} label={app.status.label} />
        </div>
        <h3 className="text-lg font-semibold text-balance" style={{ color: "var(--text)" }}>
          {app.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
          {app.tagline}
        </p>
        {metric && (
          <div className="mt-6 flex items-baseline gap-2 pt-5" style={{ borderTop: "1px solid var(--border)" }}>
            <span className="text-2xl font-bold tabular-nums" style={{ color: "var(--text)" }}>
              {metric.value}
            </span>
            <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
              {metric.label}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}

export async function HomeAppsLive() {
  const t = await getTranslations("appsLive");
  const featured = apps.filter((a) => a.featured);

  return (
    <section
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
        <RevealGroup stagger={0.08} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {featured.map((app) => (
            <RevealItem key={app.slug} className="h-full">
              <AppLiveCard app={app} />
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
