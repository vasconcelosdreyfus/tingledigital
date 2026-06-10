"use client";

import * as React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Container } from "@/components/primitives/container";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t("columns.products"),
      items: [
        { href: "/cognita", label: t("links.cognita") },
        { href: "/eter", label: t("links.eter") },
      ],
    },
    {
      title: t("columns.services"),
      items: [
        { href: "/consultoria", label: t("links.consultoria") },
        { href: "/utilities", label: t("links.utilities") },
      ],
    },
    {
      title: t("columns.company"),
      items: [
        { href: "/cases", label: t("links.cases") },
        { href: "/sobre", label: t("links.sobre") },
        { href: "/contato", label: t("links.contato") },
      ],
    },
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--surface-elevated)",
      }}
    >
      <Container size="xl" className="py-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
          <div className="space-y-4">
            <p
              className="text-2xl font-bold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              tingle.
            </p>
            <p
              className="max-w-sm text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {t("tagline")}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3
                  className="text-xs font-medium uppercase tracking-wider mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm transition-colors"
                        style={{ color: "var(--text)" }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div
          className="mt-12 flex flex-col sm:flex-row justify-between gap-4 pt-8 text-xs"
          style={{
            borderTop: "1px solid var(--border)",
            color: "var(--text-muted)",
          }}
        >
          <p>
            © {year} {t("copyright")}
          </p>
          <p>CNPJ 33.486.049/0001-55 · dreyfus@tingledigital.com</p>
        </div>
      </Container>
    </footer>
  );
}
