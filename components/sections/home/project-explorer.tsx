"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { AppIcon } from "@/components/apps/app-icon";
import { StatusBadge } from "@/components/apps/status-badge";
import type { AppEntry } from "@/types/app";

export function ProjectExplorer({ apps }: { apps: AppEntry[] }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const t = useTranslations("immersive");
  const app = apps[active] ?? apps[0];
  if (!app) return null;
  return (
    <div className="project-explorer">
      <div className="project-selector">
        <div
          className="project-index"
          role="tablist"
          aria-label={t("projectsLabel")}
          aria-orientation="vertical"
        >
          {apps.map((item, i) => (
            <button
              key={item.slug}
              id={`project-tab-${item.slug}`}
              role="tab"
              type="button"
              aria-selected={active === i}
              aria-controls="project-detail"
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(event) => {
                let next = i;
                if (event.key === "ArrowDown" || event.key === "ArrowRight")
                  next = (i + 1) % apps.length;
                else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
                  next = (i - 1 + apps.length) % apps.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = apps.length - 1;
                else return;
                event.preventDefault();
                setActive(next);
                document.getElementById(`project-tab-${apps[next]?.slug}`)?.focus();
              }}
              className="project-index-item"
            >
              <span className="project-number">{String(i + 1).padStart(2, "0")}</span>
              <span>{item.name}</span>
              <ArrowUpRight size={18} aria-hidden />
            </button>
          ))}
        </div>
        <Link href="/cases" className="project-all text-link">
          {t("allProjects")}
          <ArrowRight size={17} aria-hidden />
        </Link>
      </div>
      <div
        id="project-detail"
        className="project-detail"
        role="tabpanel"
        aria-labelledby={`project-tab-${app.slug}`}
        tabIndex={0}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={app.slug}
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.18 }}
          >
            <div className="project-art" data-project={app.slug}>
              <span className="project-art-category">{app.category}</span>
              <div className="project-art-ring" aria-hidden />
              <AppIcon app={app} className="project-large-icon" />
              <span className="project-art-owner">{app.owner}</span>
            </div>
            <div className="project-detail-copy">
              <StatusBadge kind={app.status.kind} label={app.status.label} />
              <h3>{app.tagline}</h3>
              <p>{app.description}</p>
              <Link href={app.page ?? `/cases#${app.slug}`} className="text-link">
                {t("projectDetails")}
                <ArrowUpRight size={17} aria-hidden />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
