// src/services/validationService.ts
import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras e espaços'),

  email: z
    .string()
    .email('Email inválido')
    .max(254, 'Email muito longo'),

  subject: z
    .string()
    .min(5, 'Assunto deve ter pelo menos 5 caracteres')
    .max(200, 'Assunto deve ter no máximo 200 caracteres'),

  message: z
    .string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(2000, 'Mensagem deve ter no máximo 2000 caracteres')
})

export type ContactFormValidation = z.infer<typeof contactFormSchema>

export class ValidationService {
  static validateContactForm(data: unknown) {
    return contactFormSchema.safeParse(data)
  }

  static getFieldError(result: z.SafeParseReturnType<any, any>, field: string): string | null {
    if (result.success) return null

    const fieldError = result.error.issues.find(issue => issue.path[0] === field)
    return fieldError?.message || null
  }
}