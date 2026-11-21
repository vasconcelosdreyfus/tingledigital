import { MessageCircle } from "lucide-react";

export function MobileWhatsAppCta({ locale }: { locale: string }) {
  const english = locale === "en";

  return (
    <a
      href="https://wa.me/5521996953940"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        english
          ? "Chat with Tingle Digital on WhatsApp (opens in a new tab)"
          : "Conversar com a Tingle Digital pelo WhatsApp (abre em nova aba)"
      }
      className="fixed right-3 bottom-3 z-40 inline-flex items-center gap-1.5 rounded-full px-3.5 py-2.5 text-xs font-medium shadow-lg transition-transform active:scale-95 md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
      style={{
        backgroundColor: "var(--text)",
        color: "var(--bg)",
        border: "1px solid var(--border)",
      }}
    >
      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
