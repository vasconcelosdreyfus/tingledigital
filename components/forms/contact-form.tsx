"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactInput } from "@/lib/validation/contact";
import { cn } from "@/lib/utils";

const projectTypes = [
  { value: "produto" as const, label: "Produto (Cognita / Eter)" },
  { value: "consultoria" as const, label: "Consultoria" },
  { value: "utilities" as const, label: "Utilities · Energia" },
  { value: "outro" as const, label: "Outro" },
];

type SubmitState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactInput>({
    resolver: standardSchemaResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: undefined,
      message: "",
      website: "",
    },
  });

  const [state, setState] = React.useState<SubmitState>({ kind: "idle" });

  const onSubmit = async (values: ContactInput) => {
    setState({ kind: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? `HTTP ${res.status}`);
      }
      setState({ kind: "success" });
      reset();
    } catch (e) {
      const message = e instanceof Error ? e.message : "Erro desconhecido";
      setState({ kind: "error", message });
    }
  };

  if (state.kind === "success") {
    return (
      <div className="rounded-3xl border border-[--color-accent-lime]/40 bg-[--color-accent-lime]/5 p-10 text-center">
        <p className="text-eyebrow text-[--color-accent-lime]">Recebida</p>
        <h3 className="text-display-3 mt-4">Sua mensagem chegou.</h3>
        <p className="mt-4 text-lg text-[--color-text-muted]">
          Em até 5 dias úteis você receberá uma resposta direta no email informado.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <input
        type="text"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
        {...register("website")}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Nome" error={errors.name?.message} htmlFor="name">
          <input
            id="name"
            type="text"
            autoComplete="name"
            {...register("name")}
            className={inputClass(!!errors.name)}
          />
        </Field>

        <Field label="Email" error={errors.email?.message} htmlFor="email">
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className={inputClass(!!errors.email)}
          />
        </Field>
      </div>

      <Field label="Empresa (opcional)" error={errors.company?.message} htmlFor="company">
        <input
          id="company"
          type="text"
          autoComplete="organization"
          {...register("company")}
          className={inputClass(!!errors.company)}
        />
      </Field>

      <Field label="Tipo de projeto" error={errors.projectType?.message} htmlFor="projectType">
        <select
          id="projectType"
          {...register("projectType")}
          className={inputClass(!!errors.projectType)}
        >
          <option value="">Selecione…</option>
          {projectTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Mensagem" error={errors.message?.message} htmlFor="message">
        <textarea
          id="message"
          rows={6}
          {...register("message")}
          className={cn(inputClass(!!errors.message), "resize-y min-h-[120px]")}
          placeholder="Conte rapidamente: contexto, problema, prazo se houver."
        />
      </Field>

      {state.kind === "error" && (
        <p className="rounded-md border border-[--color-accent-pink]/40 bg-[--color-accent-pink]/5 p-4 text-sm text-[--color-accent-pink]">
          Não foi possível enviar: {state.message}. Você pode escrever direto para contato@tingledigital.com.
        </p>
      )}

      <div className="flex items-center gap-4">
        <Button type="submit" size="lg" disabled={state.kind === "submitting"}>
          {state.kind === "submitting" ? "Enviando…" : "Enviar mensagem"}
        </Button>
        <p className="text-xs text-[--color-text-muted]">
          Resposta em até 5 dias úteis.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-eyebrow text-[--color-text-muted] mb-2">
        {label}
      </label>
      {children}
      {error && <p className="mt-2 text-sm text-[--color-accent-pink]">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "block w-full rounded-md border bg-[--color-surface]/50 px-4 py-3 text-base text-[--color-text] placeholder:text-[--color-text-subtle] transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[--color-bg] focus:border-[--color-accent-yellow] focus:ring-[--color-accent-yellow]",
    hasError
      ? "border-[--color-accent-pink]"
      : "border-[--color-border] hover:border-[--color-border-strong]"
  );
}
