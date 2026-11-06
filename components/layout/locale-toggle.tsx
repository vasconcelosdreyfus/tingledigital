"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export function LocaleToggle() {
  const locale = useLocale();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      disabled={pending}
      aria-label={locale === "pt" ? "Switch to English" : "Mudar para português"}
      aria-busy={pending}
      onClick={() => {
        Cookies.set("locale", locale === "pt" ? "en" : "pt", {
          expires: 365,
          sameSite: "lax",
        });
        startTransition(() => router.refresh());
      }}
      className="inline-flex min-h-10 items-center gap-1 rounded-full px-2 text-xs font-medium disabled:opacity-50"
      style={{ color: "var(--text-secondary)" }}
    >
      <span style={{ color: locale === "pt" ? "var(--text)" : "var(--text-muted)" }}>
        PT
      </span>
      <span aria-hidden>·</span>
      <span style={{ color: locale === "en" ? "var(--text)" : "var(--text-muted)" }}>
        EN
      </span>
    </button>
  );
}
