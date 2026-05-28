import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { sendContactEmail } from "@/lib/resend";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Corpo da requisição inválido (JSON malformado)." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos.", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  if (parsed.data.website) {
    // honeypot triggered — pretend success silently
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  try {
    await sendContactEmail({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company || undefined,
      projectType: parsed.data.projectType,
      message: parsed.data.message,
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Erro ao enviar email.";
    console.error("[contact] send failed:", message);
    return NextResponse.json(
      { error: "Não foi possível enviar agora. Tente novamente em instantes." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
