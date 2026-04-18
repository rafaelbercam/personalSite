<template>
  <section class="contact section">
    <div class="container">
      <h2 class="section-title">Entre em Contato</h2>

      <div class="contact-content">
        <div class="contact-info fade-in-up">
<!-- src/components/Contact.vue -->
<template>
  <Section id="contact" title="Entre em Contato">
    <div class="contact-content">
      <div class="contact-info fade-in-up">
        <div
          v-for="info in contactInfo"
          :key="info.title"
          class="info-card"
        >
          <div class="info-icon" :aria-label="info.title">
            {{ info.icon }}
          </div>
          <h3>{{ info.title }}</h3>
          <p>{{ info.value }}</p>
          <a
            v-if="info.link"
            :href="info.link"
            target="_blank"
            class="contact-link"
            @click="trackContactClick(info.title)"
          >
            {{ info.action }}
          </a>
        </div>
      </div>

      <form class="contact-form slide-in-right" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Nome</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Seu nome completo"
            required
            :class="{ 'error': fieldErrors.name }"
            aria-describedby="name-error"
          >
          <span v-if="fieldErrors.name" id="name-error" class="error-message" role="alert">
            {{ fieldErrors.name }}
          </span>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="seu@email.com"
            required
            :class="{ 'error': fieldErrors.email }"
            aria-describedby="email-error"
          >
          <span v-if="fieldErrors.email" id="email-error" class="error-message" role="alert">
            {{ fieldErrors.email }}
          </span>
        </div>

        <div class="form-group">
          <label for="subject">Assunto</label>
          <input
            id="subject"
            v-model="form.subject"
            type="text"
            placeholder="Assunto da mensagem"
            required
            :class="{ 'error': fieldErrors.subject }"
            aria-describedby="subject-error"
          >
          <span v-if="fieldErrors.subject" id="subject-error" class="error-message" role="alert">
            {{ fieldErrors.subject }}
          </span>
        </div>

        <div class="form-group">
          <label for="message">Mensagem</label>
          <textarea
            id="message"
            v-model="form.message"
            placeholder="Sua mensagem aqui..."
            rows="6"
            required
            :class="{ 'error': fieldErrors.message }"
            aria-describedby="message-error"
          ></textarea>
          <span v-if="fieldErrors.message" id="message-error" class="error-message" role="alert">
            {{ fieldErrors.message }}
          </span>
        </div>

        <button
          type="submit"
          class="submit-btn"
          :disabled="isSubmitting"
          :aria-describedby="submitStatus"
        >
          <span v-if="isSubmitting" class="loading-spinner" aria-hidden="true"></span>
          {{ submitButtonText }}
        </button>

        <div v-if="submitStatus" :id="submitStatus" class="status-message" :class="submitStatusClass" role="status">
          {{ submitMessage }}
        </div>
      </form>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import Section from '@/components/ui/Section.vue'
import { contactInfo } from '@/config/site'
import { emailService, type ContactFormData } from '@/services/emailService'
import { ValidationService, type ContactFormValidation } from '@/services/validationService'
import { useAnalytics } from '@/hooks/useAnalytics'

const { trackClick, trackFormSubmit } = useAnalytics()

const form = reactive<ContactFormData>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const fieldErrors = reactive<Record<string, string | null>>({
  name: null,
  email: null,
  subject: null,
  message: null
})

const isSubmitting = ref(false)
const submitStatus = ref<'success' | 'error' | null>(null)
const submitMessage = ref('')

const submitButtonText = computed(() => {
  if (isSubmitting.value) return 'Enviando...'
  return 'Enviar Mensagem'
})

const submitStatusClass = computed(() => {
  return submitStatus.value === 'success' ? 'success' : 'error'
})

const validateForm = (): boolean => {
  const result = ValidationService.validateContactForm(form)

  // Limpar erros anteriores
  Object.keys(fieldErrors).forEach(key => {
    fieldErrors[key] = null
  })

  if (!result.success) {
    result.error.issues.forEach(issue => {
      const field = issue.path[0] as string
      fieldErrors[field] = issue.message
    })
    return false
  }

  return true
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  submitStatus.value = null

  try {
    const result = await emailService.sendContactEmail(form)

    if (result.success) {
      submitStatus.value = 'success'
      submitMessage.value = result.message
      // Limpar formulário em caso de sucesso
      Object.keys(form).forEach(key => {
        form[key as keyof ContactFormData] = ''
      })
    } else {
      submitStatus.value = 'error'
      submitMessage.value = result.message
    }

    trackFormSubmit('contact_form', result.success)
  } catch (error) {
    submitStatus.value = 'error'
    submitMessage.value = 'Erro inesperado. Tente novamente mais tarde.'
    trackFormSubmit('contact_form', false)
  } finally {
    isSubmitting.value = false
  }
}

const trackContactClick = (contactType: string) => {
  trackClick(`${contactType.toLowerCase()}_link`, 'contact')
}
</script>

<style scoped>
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.info-card {
  background: var(--background-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.1);
}

.info-icon {
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
}

.info-card h3 {
  font-size: 1.125rem;
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
}

.info-card p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.contact-link {
  display: inline-block;
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.contact-link:hover {
  color: var(--text-primary);
  transform: translateX(5px);
}

.contact-form {
  background: var(--background-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-group label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
  color: var(--text-primary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--background);
  color: var(--text-primary);
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
}

.form-group input.error,
.form-group textarea.error {
  border-color: #ef4444;
}

.error-message {
  display: block;
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: var(--spacing-xs);
}

.submit-btn {
  width: 100%;
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--accent);
  color: var(--primary-dark);
  border: 2px solid var(--accent);
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
}

.submit-btn:hover:not(:disabled) {
  background: transparent;
  color: var(--accent);
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.status-message {
  margin-top: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  text-align: center;
  font-weight: 500;
}

.status-message.success {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.status-message.error {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.2);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>
        </div>

        <form class="contact-form slide-in-right" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Nome</label>
            <input 
              id="name" 
              v-model="form.name" 
              type="text" 
              placeholder="Seu nome"
              required
            >
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input 
              id="email" 
              v-model="form.email" 
              type="email" 
              placeholder="seu@email.com"
              required
            >
          </div>

          <div class="form-group">
            <label for="subject">Assunto</label>
            <input 
              id="subject" 
              v-model="form.subject" 
              type="text" 
              placeholder="Assunto da mensagem"
              required
            >
          </div>

          <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              placeholder="Sua mensagem aqui..."
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-btn">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Aqui você pode adicionar a lógica para enviar o formulário
  // Por exemplo, usando uma API ou serviço de email
  console.log('Formulário enviado:', form)
  
  // Resetar o formulário
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  
  // Mostrar mensagem de sucesso
  alert('Obrigado pela sua mensagem! Entrarei em contato em breve.')
}
</script>

<style scoped>
.contact {
  background: linear-gradient(135deg, var(--background) 0%, var(--primary-dark) 100%);
  border-top: 1px solid var(--border);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: var(--spacing-xl);
  background: linear-gradient(135deg, var(--accent) 0%, #00a8cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
}

.info-card {
  background: linear-gradient(135deg, var(--background-secondary) 0%, var(--primary-dark) 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.1);
}

.info-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
}

.info-card h3 {
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
}

.info-card p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  font-size: 0.95rem;
}

.info-card a {
  display: inline-block;
  padding: 8px 16px;
  background: linear-gradient(135deg, var(--accent) 0%, #00a8cc 100%);
  color: var(--primary-dark);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.info-card a:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
}

.contact-form {
  background: linear-gradient(135deg, var(--background-secondary) 0%, var(--primary-dark) 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.1);
}

.form-group {
  margin-bottom: var(--spacing-md);
}

.form-group label {
  display: block;
  margin-bottom: var(--spacing-xs);
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  background: var(--background-tertiary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-family: inherit;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
  background: var(--background-secondary);
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.2);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-muted);
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, var(--accent) 0%, #00a8cc 100%);
  color: var(--primary-dark);
  border: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: var(--spacing-md);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
}

.submit-btn:active {
  transform: scale(0.98);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }

  .info-card {
    padding: var(--spacing-md);
  }
}
</style>
