import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { AppEntry } from "@/types/app";
import { StatusBadge } from "@/components/apps/status-badge";
import { AppIcon } from "@/components/apps/app-icon";
import styles from "./app-card.module.css";

export function AppCard({ app }: { app: AppEntry }) {
  const locale = useLocale();
  const metrics = app.metrics ?? [];
  const hasLinks = Boolean(app.page || app.links.length);

  return (
    <article
      id={app.slug}
      className={`${styles.card} scroll-mt-28 rounded-2xl p-6 sm:p-8`}
      style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg)" }}
    >
      <div className={styles.header} data-card-slot="header">
        <AppIcon app={app} className="w-16 sm:w-[72px]" />
        <h3 className="min-w-0 text-xl font-semibold text-balance" data-card-slot="title" style={{ color: "var(--text)" }}>
          {app.name}
        </h3>
        <p className="min-w-0 text-sm" data-card-slot="owner" style={{ color: "var(--text-muted)" }}>
          {app.owner} · {app.category}
        </p>
      </div>

      <div className={styles.status} data-card-slot="status">
        <StatusBadge kind={app.status.kind} label={app.status.label} labelEn={app.status.labelEn} className="items-start" />
      </div>

      <p className={`${styles.tagline} text-base font-medium text-pretty`} data-card-slot="tagline" style={{ color: "var(--text)" }}>
        {app.tagline}
      </p>
      <p className={`${styles.description} text-sm leading-relaxed text-pretty`} data-card-slot="description" style={{ color: "var(--text-secondary)" }}>
        {locale === "en" ? app.descriptionEn ?? app.description : app.description}
      </p>

      {metrics.length > 0 ? (
        <dl
          className={styles.metrics}
          data-card-slot="metrics"
          style={{ gridTemplateColumns: `repeat(${metrics.length === 4 ? 2 : Math.min(metrics.length, 3)}, minmax(0, 1fr))` }}
        >
          {metrics.map((m) => (
            <div key={m.label} className={styles.metric}>
              <dt className="mt-1 text-xs leading-snug" style={{ color: "var(--text-secondary)" }}>
                {m.label}
              </dt>
              <dd className={`${styles.value} font-semibold tabular-nums`} style={{ color: "var(--text)" }}>
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : <div className={styles.metrics} data-card-slot="metrics" aria-hidden="true" />}

      <ul className={`${styles.platforms} flex flex-wrap items-start gap-2`} data-card-slot="platforms" aria-label="Plataformas">
        {app.platforms.map((p) => (
          <li key={p} className="rounded-full px-3 py-1 text-xs" style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}>
            {p}
          </li>
        ))}
      </ul>

      <div className={styles.actions} data-card-slot="actions">
        {hasLinks && (
          <ul className="flex flex-wrap items-start gap-x-5 gap-y-2">
            {app.page && (
              <li>
                <Link href={app.page} className="inline-flex items-center gap-1 rounded-sm text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]" style={{ color: "var(--text)" }}>
                  Conhecer o {app.name}
                  {app.page.startsWith("https://") ? (
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
                  ) : (
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                  )}
                </Link>
              </li>
            )}
            {app.links.map((link) => (
              <li key={link.href} className="min-w-0">
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex max-w-full items-center gap-1 rounded-sm text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]" style={{ color: "var(--text)" }}>
                  <span className="min-w-0 [overflow-wrap:anywhere]">{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
        {app.notice && (
          <p className="mt-6 text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{app.notice}</p>
        )}
      </div>
    </article>
  );
}
