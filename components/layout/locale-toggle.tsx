"use client";

import * as React from "react";
import Cookies from "js-cookie";

type Locale = "pt" | "en";

export function LocaleToggle() {
  const [locale, setLocale] = React.useState<Locale>("pt");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const saved = (Cookies.get("locale") as Locale) ?? "pt";
    setLocale(saved);
  }, []);

  function toggle() {
    const next: Locale = locale === "pt" ? "en" : "pt";
    Cookies.set("locale", next, { expires: 365 });
    setLocale(next);
    // Reload so server can pick up new locale (placeholder; full next-intl wiring later)
    window.location.reload();
  }

  if (!mounted) return <div className="w-14 h-7" />;

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium transition-colors"
      style={{
        border: "1px solid var(--border)",
        color: "var(--text-secondary)",
      }}
    >
      <span style={{ color: locale === "pt" ? "var(--text)" : "var(--text-muted)" }}>PT</span>
      <span style={{ color: "var(--text-muted)" }}>·</span>
      <span style={{ color: locale === "en" ? "var(--text)" : "var(--text-muted)" }}>EN</span>
    </button>
  );
}
