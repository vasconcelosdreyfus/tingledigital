import "server-only";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey && process.env.NODE_ENV === "production") {
  console.error("[resend] RESEND_API_KEY is missing — emails will fail in production.");
}

export const resend = apiKey ? new Resend(apiKey) : null;

export const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL ?? "contato@tingledigital.com";

export const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "no-reply@tingledigital.com";

export interface ContactEmailPayload {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  message: string;
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  if (!resend) {
    throw new Error("Resend is not configured (missing RESEND_API_KEY).");
  }
  return resend.emails.send({
    from: `Tingle Site <${CONTACT_FROM_EMAIL}>`,
    to: [CONTACT_TO_EMAIL],
    replyTo: payload.email,
    subject: `[Site] Novo contato — ${payload.name}`,
    text: [
      `Nome: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.company ? `Empresa: ${payload.company}` : null,
      payload.projectType ? `Tipo: ${payload.projectType}` : null,
      "",
      "Mensagem:",
      payload.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });
}
