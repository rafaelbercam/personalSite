// src/types/index.ts
export interface Project {
  id: number
  title: string
  description: string
  icon: string
  technologies: string[]
  github: string
}

export interface Technology {
  name: string
  icon: string
  level: 'Básico' | 'Intermediário' | 'Avançado'
}

export interface TechnologyCategory {
  category: string
  items: Technology[]
}

export interface ContactInfo {
  icon: string
  title: string
  value: string
  link?: string
  action: string
}

export interface SiteStats {
  experience: string
  projects: string
  quality: string
}

export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  ogImage: string
  links: {
    email: string
    linkedin: string
    github: string
    whatsapp: null
  }
  stats: SiteStats
}