"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LocaleToggle } from "@/components/layout/locale-toggle";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { TingleMark } from "@/components/brand/tingle-mark";

export function Header() {
  const t = useTranslations("header");
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const menuButton = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) return;
    function dismiss(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    window.addEventListener("keydown", dismiss);
    return () => window.removeEventListener("keydown", dismiss);
  }, [open]);
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
      <ScrollProgress />
      <Container size="xl" className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Tingle Digital — home"
          className="inline-flex items-center gap-2 text-lg font-bold tracking-tight"
          style={{ color: "var(--text)" }}
        >
          <TingleMark className="h-7 w-auto" />
          tingle.
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="text-sm transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LocaleToggle />
          </div>
          <ThemeToggle />
          <Button size="sm" asChild className="hidden sm:inline-flex">
            <Link href="/contato">{t("cta")}</Link>
          </Button>
          <button
            ref={menuButton}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 transition-colors lg:hidden"
            style={{ color: "var(--text)" }}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div
          className="border-t lg:hidden"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}
        >
          <Container size="xl" className="py-4">
            <nav
              id="mobile-navigation"
              className="flex flex-col gap-1"
              aria-label="Mobile principal"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-base"
                  style={{ color: "var(--text)" }}
                >
                  {item.label}
                </Link>
              ))}
              <div
                className="mt-4 flex items-center gap-2 border-t pt-4"
                style={{ borderColor: "var(--border)" }}
              >
                <LocaleToggle />
                <Button size="sm" asChild className="flex-1">
                  <Link href="/contato" onClick={() => setOpen(false)}>
                    {t("cta")}
                  </Link>
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
