<!-- src/components/TechStack.vue -->
<template>
  <Section id="tech-stack" title="Tecnologias" background="dark">
    <div class="tech-categories">
      <div
        v-for="category in technologiesData"
        :key="category.category"
        class="tech-category fade-in-up"
      >
        <h3 class="category-title">{{ category.category }}</h3>

        <div class="tech-items">
          <TechBadge
            v-for="tech in category.items"
            :key="tech.name"
            :name="tech.name"
            :icon="tech.icon"
            :level="tech.level"
          />
        </div>
      </div>
    </div>

    <div class="tech-summary fade-in-up">
      <div class="summary-card">
        <h3>🎯 Especialidades</h3>
        <ul>
          <li>Arquitetura de testes escalável e robusta</li>
          <li>Automação de testes (API, Web, Mobile)</li>
          <li>Desenvolvimento de boilerplates reutilizáveis</li>
          <li>Integração contínua e DevOps para QA</li>
          <li>Qualidade de software e melhores práticas</li>
          <li>AI Generativa aplicada à automação</li>
        </ul>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/ui/Section.vue'
import TechBadge from '@/components/ui/TechBadge.vue'
import { technologies } from '@/config/site'

const technologiesData = technologies
</script>

<style scoped>
.tech-stack {
  background: var(--background);
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

.tech-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.tech-category {
  background: linear-gradient(135deg, var(--background-secondary) 0%, var(--primary-dark) 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: all 0.3s ease;
}

.tech-category:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.1);
}

.category-title {
  font-size: 1.3rem;
  margin-bottom: var(--spacing-md);
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 8px;
}

.tech-items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.tech-summary {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.summary-card {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--background-secondary) 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.1);
}

.summary-card h3 {
  color: var(--accent);
  margin-bottom: var(--spacing-md);
  font-size: 1.3rem;
}

.summary-card ul {
  list-style: none;
}

.summary-card li {
  color: var(--text-secondary);
  padding: var(--spacing-sm) 0;
  padding-left: var(--spacing-lg);
  position: relative;
}

.summary-card li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 600;
}

.summary-card li:hover {
  color: var(--accent);
  transform: translateX(5px);
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .tech-categories {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }

  .tech-item {
    flex-direction: column;
    text-align: center;
  }

  .tech-icon {
    font-size: 2rem;
  }
}
</style>