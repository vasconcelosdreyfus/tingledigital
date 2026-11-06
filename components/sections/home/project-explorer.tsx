"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { AppIcon } from "@/components/apps/app-icon";
import { StatusBadge } from "@/components/apps/status-badge";
import type { AppEntry } from "@/types/app";

export function ProjectExplorer({ apps }: { apps: AppEntry[] }) {
  const [active, setActive] = useState(0);
  const [instant, setInstant] = useState(false);
  const reduce = useReducedMotion();
  const t = useTranslations("immersive");
  const app = apps[active] ?? apps[0];
  if (!app) return null;
  return (
    <div className="project-experience">
      <div className="project-navigation">
        <div className="project-switcher" role="tablist" aria-label={t("projectsLabel")}>
          {apps.map((item, i) => (
            <button
              key={item.slug}
              id={`project-tab-${item.slug}`}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-controls="project-detail"
              tabIndex={active === i ? 0 : -1}
              onClick={() => {
                setInstant(false);
                setActive(i);
              }}
              onKeyDown={(event) => {
                let next = i;
                if (event.key === "ArrowRight") next = (i + 1) % apps.length;
                else if (event.key === "ArrowLeft")
                  next = (i - 1 + apps.length) % apps.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = apps.length - 1;
                else return;
                event.preventDefault();
                setInstant(true);
                setActive(next);
                document.getElementById(`project-tab-${apps[next]?.slug}`)?.focus();
              }}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div
        className="project-stage"
        id="project-detail"
        role="tabpanel"
        aria-labelledby={`project-tab-${app.slug}`}
        tabIndex={0}
      >
        <motion.div
          key={app.slug}
          className="project-stage-body"
          initial={
            reduce || instant ? false : { opacity: 0, transform: "translateY(16px)" }
          }
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{
            duration: reduce || instant ? 0 : 0.22,
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          <div className="project-stage-art" data-project={app.slug}>
            <span className="project-stage-word" aria-hidden>
              {app.name}
            </span>
            <div className="project-orbit" aria-hidden />
            <div className="project-orbit orbit-b" aria-hidden />
            <div className="project-orbit orbit-c" aria-hidden />
            <AppIcon app={app} className="project-stage-icon" />
            <div className="project-stage-category">
              <span>{app.category}</span>
              <span>
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(apps.length).padStart(2, "0")}
              </span>
            </div>
          </div>
          <div className="project-stage-copy">
            <StatusBadge kind={app.status.kind} label={app.status.label} />
            <h3>{app.tagline}</h3>
            <p>{app.description}</p>
            {app.metrics && (
              <dl className="project-proof">
                {app.metrics.slice(0, 2).map((metric) => (
                  <div key={metric.label}>
                    <dt>{metric.label}</dt>
                    <dd>{metric.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            <Link className="text-link" href={app.page ?? `/cases#${app.slug}`}>
              {t("projectDetails")}
              <ArrowUpRight size={18} aria-hidden />
            </Link>
          </div>
        </motion.div>
      </div>
      <Link href="/cases" className="text-link project-all">
        {t("allProjects")}
        <ArrowRight size={16} aria-hidden />
      </Link>
    </div>
  );
}
