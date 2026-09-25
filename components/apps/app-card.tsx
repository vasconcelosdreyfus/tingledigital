import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { AppEntry } from "@/types/app";
import { StatusBadge } from "@/components/apps/status-badge";
import { AppIcon } from "@/components/apps/app-icon";

export function AppCard({ app }: { app: AppEntry }) {
  return (
    <article
      id={app.slug}
      className="flex h-full scroll-mt-28 flex-col rounded-2xl p-6 sm:p-8"
      style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg)" }}
    >
      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-4">
          <AppIcon app={app} className="w-16 sm:w-[72px]" />
          <div className="min-w-0">
            <h3 className="text-xl font-semibold text-balance" style={{ color: "var(--text)" }}>
              {app.name}
            </h3>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              {app.owner} · {app.category}
            </p>
          </div>
        </div>

        <StatusBadge kind={app.status.kind} label={app.status.label} className="mt-4" />

        <p className="mt-4 text-base font-medium text-pretty" style={{ color: "var(--text)" }}>
          {app.tagline}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-pretty" style={{ color: "var(--text-secondary)" }}>
          {app.description}
        </p>

        {app.metrics && app.metrics.length > 0 && (
          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
            {app.metrics.map((m) => (
              <div key={m.label} className="flex min-w-0 flex-col-reverse">
                <dt className="mt-1 text-xs leading-snug" style={{ color: "var(--text-secondary)" }}>
                  {m.label}
                </dt>
                <dd className="text-2xl font-semibold tabular-nums sm:text-3xl" style={{ color: "var(--text)" }}>
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Plataformas">
          {app.platforms.map((p) => (
            <li
              key={p}
              className="rounded-full px-3 py-1 text-xs"
              style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
            >
              {p}
            </li>
          ))}
        </ul>

        {(app.page || app.links.length > 0) && (
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {app.page && (
              <li>
                <Link
                  href={app.page}
                  className="inline-flex items-center gap-1 rounded-sm text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                  style={{ color: "var(--text)" }}
                >
                  Conhecer o {app.name}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </li>
            )}
            {app.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-sm text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                  style={{ color: "var(--text)" }}
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              </li>
            ))}
          </ul>
        )}

        {app.notice && (
          <p className="mt-6 text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {app.notice}
          </p>
        )}
      </div>
    </article>
  );
}
