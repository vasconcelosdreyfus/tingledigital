import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { AppEntry } from "@/types/app";
import { StatusBadge } from "@/components/apps/status-badge";
import { AppCover } from "@/components/apps/app-cover";
import { cn } from "@/lib/utils";

export function AppCard({ app }: { app: AppEntry }) {
  const wide = Boolean(app.featured);
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl",
        wide && "lg:grid lg:grid-cols-[1.1fr_1fr]",
      )}
      style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg)" }}
    >
      <div
        className={cn("border-b", wide && "lg:border-b-0 lg:border-r")}
        style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-elevated)" }}
      >
        <AppCover app={app} wide={wide} />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-center gap-3">
          {app.logo && app.images.length > 0 && (
            <Image
              src={app.logo.src}
              width={app.logo.width}
              height={app.logo.height}
              alt=""
              sizes="40px"
              className="h-10 w-10 shrink-0 rounded-xl object-contain"
              style={{ border: "1px solid var(--border)" }}
            />
          )}
          <div className="min-w-0">
            <h3 className="text-xl font-semibold text-balance sm:text-2xl" style={{ color: "var(--text)" }}>
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

        {app.links.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
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
