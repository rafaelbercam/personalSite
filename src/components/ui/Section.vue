<!-- src/components/ui/Section.vue -->
<template>
  <section :id="id" class="section" :class="backgroundClass">
    <div class="container">
      <h2 v-if="title" class="section-title" :class="titleClass">
        {{ title }}
      </h2>

      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  id?: string
  title?: string
  background?: 'default' | 'dark' | 'gradient'
  titleGradient?: boolean
}

const props = defineProps<Props>()

const backgroundClass = computed(() => {
  switch (props.background) {
    case 'dark':
      return 'section-dark'
    case 'gradient':
      return 'section-gradient'
    default:
      return ''
  }
})

const titleClass = computed(() => {
  return props.titleGradient ? 'title-gradient' : ''
})
</script>

<style scoped>
.section {
  padding: var(--spacing-xl) 0;
}

.section-dark {
  background: var(--background-secondary);
}

.section-gradient {
  background: linear-gradient(135deg, var(--background) 0%, var(--primary-dark) 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: var(--spacing-xl);
  color: var(--text-primary);
}

.title-gradient {
  background: linear-gradient(135deg, var(--accent) 0%, #00a8cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 768px) {
  .section {
    padding: var(--spacing-lg) 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .container {
    padding: 0 var(--spacing-md);
  }
}
</style>