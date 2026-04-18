<!-- src/components/About.vue -->
<template>
  <Section id="about" title="Sobre Mim" background="gradient">
    <div class="about-content">
      <div class="about-text fade-in-up">
        <p>
          Sou QA Engineer Specialist e Tech Lead com mais de {{ stats.experience }} anos de experiência em qualidade de software, atuando na construção de estratégias de testes robustas, automação escalável e melhoria contínua de processos.
        </p>

        <p>
          Minha atuação vai além da execução de testes: foco na definição de arquitetura de automação, tomada de decisões técnicas e implementação de soluções que aumentam a confiabilidade e reduzem o tempo de feedback em pipelines de desenvolvimento.
        </p>

        <p>
          Tenho forte experiência em testes de API, web e mobile, utilizando tecnologias modernas como Playwright, RestAssured e TypeScript, além de integração com pipelines CI/CD e práticas de DevOps.
        </p>

        <p>
          Atualmente, venho explorando o uso de AI Generativa aplicada à automação de testes, buscando criar soluções mais inteligentes para geração, análise e manutenção de cenários automatizados.
        </p>

        <p>
          Meu objetivo é construir ecossistemas de qualidade sustentáveis, que sejam fáceis de evoluir, manter e escalar ao longo do tempo.
        </p>

        <div class="about-stats">
          <div class="stat">
            <span class="stat-number">{{ stats.experience }}</span>
            <span class="stat-label">Anos de Experiência</span>
          </div>
          <div class="stat">
            <span class="stat-number">{{ stats.projects }}</span>
            <span class="stat-label">Projetos Automatizados</span>
          </div>
          <div class="stat">
            <span class="stat-number">{{ stats.quality }}</span>
            <span class="stat-label">Foco em Qualidade</span>
          </div>
        </div>
      </div>

      <div class="about-visual slide-in-right">
        <div class="profile-card">
          <div class="card-header"></div>
          <div class="card-content">
            <div class="avatar-placeholder"></div>
            <h3>{{ siteConfig.name }}</h3>
            <p class="role">{{ siteConfig.title }}</p>
            <p class="location">📍 Brazil</p>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/ui/Section.vue'
import { siteConfig } from '@/config/site'

const stats = siteConfig.stats
</script>

<style scoped>
.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-xl);
  align-items: start;
}

.about-text {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}

.about-visual {
  opacity: 0;
  transform: translateX(30px);
  animation: slideInRight 0.8s ease-out 0.2s forwards;
}

.about-stats {
  display: flex;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.stat {
  text-align: center;
  padding: var(--spacing-md);
  background: var(--background-secondary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  flex: 1;
  transition: all 0.3s ease;
}

.stat:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.1);
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--accent);
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.profile-card {
  background: var(--background-secondary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: all 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 60px rgba(0, 212, 255, 0.2);
}

.card-header {
  height: 120px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
}

.card-content {
  padding: var(--spacing-lg);
  text-align: center;
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  background: var(--background-tertiary);
  border-radius: 50%;
  margin: -50px auto var(--spacing-md);
  border: 4px solid var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.card-content h3 {
  margin: 0 0 var(--spacing-xs) 0;
  color: var(--text-primary);
  font-size: 1.2rem;
}

.role {
  color: var(--accent);
  font-weight: 500;
  margin: 0 0 var(--spacing-sm) 0;
}

.location {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .about-stats {
    flex-direction: column;
  }

  .stat {
    margin-bottom: var(--spacing-md);
  }
}
</style>
