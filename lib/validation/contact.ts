import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string({ message: "Nome é obrigatório." })
    .trim()
    .min(2, "Nome muito curto.")
    .max(120, "Nome muito longo."),
  email: z
    .string({ message: "Email é obrigatório." })
    .trim()
    .email("Email inválido."),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  projectType: z
    .enum(["produto", "consultoria", "utilities", "outro"], {
      message: "Selecione um tipo de projeto.",
    })
    .optional(),
  message: z
    .string({ message: "Mensagem é obrigatória." })
    .trim()
    .min(20, "Mensagem muito curta (mínimo 20 caracteres).")
    .max(4000, "Mensagem muito longa (máximo 4000 caracteres)."),
  // honeypot — must remain empty
  website: z.string().max(0, "spam-detected").optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
