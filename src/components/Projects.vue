<!-- src/components/Projects.vue -->
<template>
  <Section id="projects" title="Projetos Destacados" title-gradient>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in projectsData"
        :key="project.id"
        :project="project"
      />
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/ui/Section.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { projects } from '@/config/site'

const projectsData = [
  {
    id: 1,
    title: 'API Tests com TypeScript (Mocha + Chai)',
    description: 'Boilerplate completo para testes de API com foco em organização, reutilização e boas práticas.',
    icon: '🧪',
    technologies: ['TypeScript', 'Mocha', 'Chai', 'REST'],
    link: 'https://github.com/rafaelbercam/api-tests-typescript',
    github: 'https://github.com/rafaelbercam/api-tests-typescript'
  },
  {
    id: 2,
    title: 'API Tests com Kotlin + RestAssured',
    description: 'Estrutura robusta para automação de APIs utilizando Kotlin, ideal para projetos escaláveis com foco em qualidade e performance.',
    icon: '⚡',
    technologies: ['Kotlin', 'RestAssured', 'JUnit', 'API Testing'],
    link: 'https://github.com/rafaelbercam/APITestsKotlin',
    github: 'https://github.com/rafaelbercam/APITestsKotlin'
  },
  {
    id: 3,
    title: 'Boilerplates de Testes Automatizados',
    description: 'Coleção completa de templates prontos para acelerar a criação de projetos de automação (API, Web, Mobile).',
    icon: '📦',
    technologies: ['JavaScript', 'TypeScript', 'Kotlin', 'Playwright'],
    link: 'https://github.com/rafaelbercam/boilerplates',
    github: 'https://github.com/rafaelbercam/boilerplates'
  },
  {
    id: 4,
    title: 'Testes Web com Playwright + Jest',
    description: 'Projeto moderno para automação de testes E2E com foco em performance, confiabilidade e melhores práticas de QA.',
    icon: '🌐',
    technologies: ['Playwright', 'Jest', 'JavaScript', 'E2E Testing'],
    link: 'https://github.com/rafaelbercam/playwright-tests-jest',
    github: 'https://github.com/rafaelbercam/playwright-tests-jest'
  }
]
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}
</style>
