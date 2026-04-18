// src/services/emailService.ts
import emailjs from '@emailjs/browser'

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export class EmailService {
  private serviceId: string
  private templateId: string
  private publicKey: string

  constructor() {
    // Configurações do EmailJS - em produção, usar variáveis de ambiente
    this.serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
    this.templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
    this.publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
  }

  async sendContactEmail(formData: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
      if (!this.serviceId || !this.templateId || !this.publicKey) {
        // Fallback para desenvolvimento - simular envio
        console.log('EmailJS not configured, simulating send:', formData)
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simular delay
        return { success: true, message: 'Mensagem enviada com sucesso!' }
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'faelbercam@gmail.com'
      }

      await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams,
        this.publicKey
      )

      return { success: true, message: 'Mensagem enviada com sucesso!' }
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      return {
        success: false,
        message: 'Erro ao enviar mensagem. Tente novamente mais tarde.'
      }
    }
  }
}

export const emailService = new EmailService()