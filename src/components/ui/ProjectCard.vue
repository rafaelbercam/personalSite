<!-- src/components/ui/ProjectCard.vue -->
<template>
  <div class="project-card fade-in-up">
    <div class="project-header">
      <div class="project-icon">
        {{ project.icon }}
      </div>
    </div>

    <div class="project-content">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>

      <div class="project-tech">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="tech-tag"
        >
          {{ tech }}
        </span>
      </div>

      <div class="project-links">
        <a :href="project.github" target="_blank" class="link-btn" @click="handleCodeClick">
          Ver Código <span class="arrow">→</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAnalytics } from '@/hooks/useAnalytics'

interface Project {
  id: number
  title: string
  description: string
  icon: string
  technologies: string[]
  github: string
}

interface Props {
  project: Project
}

const props = defineProps<Props>()
const { trackClick } = useAnalytics()

const handleCodeClick = () => {
  trackClick('project_code_button', `project_${props.project.id}`)
}
</script>

<style scoped>
.project-card {
  background: linear-gradient(135deg, var(--background-secondary) 0%, var(--primary-dark) 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent);
  box-shadow: 0 20px 40px rgba(0, 212, 255, 0.15);
}

.project-header {
  height: 150px;
  background: linear-gradient(135deg, var(--accent) 0%, #00a8cc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.project-header::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  animation: moveBackground 20s linear infinite;
}

@keyframes moveBackground {
  0% { transform: translate(0, 0); }
  100% { transform: translate(-30px, -30px); }
}

.project-icon {
  font-size: 3rem;
  z-index: 1;
  position: relative;
}

.project-content {
  padding: var(--spacing-lg);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-content h3 {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
}

.project-content p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  flex: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
}

.tech-tag {
  background: var(--background-tertiary);
  color: var(--accent);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid var(--border);
}

.project-links {
  margin-top: auto;
}

.link-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  background: var(--accent);
  color: var(--primary-dark);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid var(--accent);
}

.link-btn:hover {
  background: transparent;
  color: var(--accent);
  transform: translateX(5px);
}

.arrow {
  transition: transform 0.3s ease;
}

.link-btn:hover .arrow {
  transform: translateX(3px);
}
</style>