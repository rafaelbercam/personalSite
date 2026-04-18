<!-- src/components/ui/TechBadge.vue -->
<template>
  <div class="tech-badge" :class="levelClass">
    <span class="tech-icon">{{ icon }}</span>
    <span class="tech-name">{{ name }}</span>
    <span class="tech-level">{{ level }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  icon: string
  level: string
}

const props = defineProps<Props>()

const levelClass = computed(() => {
  switch (props.level.toLowerCase()) {
    case 'avançado':
      return 'level-advanced'
    case 'intermediário':
      return 'level-intermediate'
    case 'básico':
      return 'level-basic'
    default:
      return ''
  }
})
</script>

<style scoped>
.tech-badge {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--background-tertiary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
  position: relative;
}

.tech-badge:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
  box-shadow: 0 5px 15px rgba(0, 212, 255, 0.1);
}

.tech-icon {
  font-size: 1.25rem;
}

.tech-name {
  font-weight: 500;
  color: var(--text-primary);
  flex: 1;
}

.tech-level {
  font-size: 0.75rem;
  padding: 0.125rem 0.375rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.level-advanced {
  border-left: 3px solid #00d4ff;
}

.level-advanced .tech-level {
  background: #00d4ff;
  color: var(--primary-dark);
}

.level-intermediate {
  border-left: 3px solid #ffa500;
}

.level-intermediate .tech-level {
  background: #ffa500;
  color: var(--primary-dark);
}

.level-basic {
  border-left: 3px solid #6b7280;
}

.level-basic .tech-level {
  background: #6b7280;
  color: var(--text-primary);
}
</style>