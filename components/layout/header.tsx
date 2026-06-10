"use client";

import * as React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LocaleToggle } from "@/components/layout/locale-toggle";

export function Header() {
  const t = useTranslations("header");
  const [open, setOpen] = React.useState(false);
  const navItems = [
    { href: "/cognita", label: t("nav.cognita") },
    { href: "/eter", label: t("nav.eter") },
    { href: "/consultoria", label: t("nav.consultoria") },
    { href: "/utilities", label: t("nav.utilities") },
    { href: "/cases", label: t("nav.cases") },
    { href: "/sobre", label: t("nav.sobre") },
  ];

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl"
      style={{
        borderBottom: "1px solid var(--border)",
        backgroundColor: "color-mix(in srgb, var(--bg) 80%, transparent)",
      }}
    >
      <Container size="xl" className="flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Tingle Digital — home" className="text-lg font-bold tracking-tight" style={{ color: "var(--text)" }}>
          tingle.
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block"><LocaleToggle /></div>
          <ThemeToggle />
          <Button size="sm" asChild className="hidden sm:inline-flex">
            <Link href="/contato">{t("cta")}</Link>
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md transition-colors"
            style={{ color: "var(--text)" }}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden border-t" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}>
          <Container size="xl" className="py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile principal">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 px-2 text-base rounded-md"
                  style={{ color: "var(--text)" }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                <LocaleToggle />
                <Button size="sm" asChild className="flex-1">
                  <Link href="/contato" onClick={() => setOpen(false)}>{t("cta")}</Link>
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
