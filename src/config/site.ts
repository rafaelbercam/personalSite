// src/config/site.ts
import type { Project, TechnologyCategory, ContactInfo, SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Rafael Bercam',
  title: 'QA Engineer Specialist & Tech Lead',
  description: 'Portfólio profissional focado em automação de testes e qualidade de software',
  url: 'https://rafaelbercam.dev',
  ogImage: '/og-image.jpg',
  links: {
    email: 'faelbercam@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rafaelbercam/',
    github: 'https://github.com/rafaelbercam',
    whatsapp: null // Removido conforme solicitado
  },
  stats: {
    experience: '15+',
    projects: '50+',
    quality: '100%'
  }
}

export const contactInfo: ContactInfo[] = [
  {
    icon: '📧',
    title: 'Email',
    value: siteConfig.links.email,
    link: `mailto:${siteConfig.links.email}`,
    action: 'Enviar Email'
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    value: 'Rafael Bercam',
    link: siteConfig.links.linkedin,
    action: 'Visitar Perfil'
  },
  {
    icon: '🐙',
    title: 'GitHub',
    value: 'rafaelbercam',
    link: siteConfig.links.github,
    action: 'Ver Projetos'
  }
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'API Tests com TypeScript (Mocha + Chai)',
    description: 'Boilerplate completo para testes de API com foco em organização, reutilização e boas práticas. Estrutura robusta para automação escalável.',
    icon: '🧪',
    technologies: ['TypeScript', 'Mocha', 'Chai', 'API Testing'],
    github: 'https://github.com/rafaelbercam/api-tests-typescript'
  },
  {
    id: 2,
    title: 'API Tests com Kotlin + RestAssured',
    description: 'Estrutura robusta para automação de APIs utilizando Kotlin, ideal para projetos escaláveis com foco em qualidade e performance.',
    icon: '⚡',
    technologies: ['Kotlin', 'RestAssured', 'JUnit', 'API Testing'],
    github: 'https://github.com/rafaelbercam/APITestsKotlin'
  },
  {
    id: 3,
    title: 'Boilerplates de Testes Automatizados',
    description: 'Coleção completa de templates prontos para acelerar a criação de projetos de automação (API, Web, Mobile).',
    icon: '📦',
    technologies: ['JavaScript', 'TypeScript', 'Kotlin', 'Playwright'],
    github: 'https://github.com/rafaelbercam/boilerplates'
  },
  {
    id: 4,
    title: 'Testes Web com Playwright + Jest',
    description: 'Projeto moderno para automação de testes E2E com foco em performance, confiabilidade e melhores práticas de QA.',
    icon: '🌐',
    technologies: ['Playwright', 'Jest', 'JavaScript', 'E2E Testing'],
    github: 'https://github.com/rafaelbercam/playwright-tests-jest'
  }
]

export const technologies: TechnologyCategory[] = [
  {
    category: 'Automação',
    items: [
      { name: 'Playwright', icon: '🎭', level: 'Avançado' },
      { name: 'Cypress', icon: '🌀', level: 'Avançado' },
      { name: 'RestAssured', icon: '🔗', level: 'Avançado' },
      { name: 'Appium', icon: '📱', level: 'Intermediário' }
    ]
  },
  {
    category: 'Linguagens',
    items: [
      { name: 'TypeScript', icon: '🔷', level: 'Avançado' },
      { name: 'JavaScript', icon: '🟨', level: 'Avançado' },
      { name: 'Kotlin', icon: '🟣', level: 'Avançado' },
      { name: 'Java', icon: '☕', level: 'Intermediário' }
    ]
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'Jest', icon: '🃏', level: 'Avançado' },
      { name: 'Mocha', icon: '☕', level: 'Avançado' },
      { name: 'JUnit', icon: '🧪', level: 'Intermediário' },
      { name: 'Vue.js', icon: '💚', level: 'Intermediário' }
    ]
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'GitHub Actions', icon: '⚙️', level: 'Avançado' },
      { name: 'Docker', icon: '🐳', level: 'Intermediário' },
      { name: 'AWS', icon: '☁️', level: 'Intermediário' },
      { name: 'Jenkins', icon: '🔧', level: 'Básico' }
    ]
  },
  {
    category: 'Banco de Dados',
    items: [
      { name: 'PostgreSQL', icon: '🐘', level: 'Intermediário' },
      { name: 'MongoDB', icon: '🍃', level: 'Intermediário' },
      { name: 'Redis', icon: '🔴', level: 'Básico' }
    ]
  }
]