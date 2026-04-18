<!-- src/App.vue -->
<template>
  <div id="app">
    <Navigation />

    <main>
      <section id="home">
        <Hero />
      </section>

      <section id="about" :class="{ 'section-hidden': !showAbout }">
        <Suspense>
          <About />
        </Suspense>
      </section>

      <section id="projects" :class="{ 'section-hidden': !showProjects }">
        <Suspense>
          <Projects />
        </Suspense>
      </section>

      <section id="tech-stack" :class="{ 'section-hidden': !showTechStack }">
        <Suspense>
          <TechStack />
        </Suspense>
      </section>

      <section id="contact" :class="{ 'section-hidden': !showContact }">
        <Suspense>
          <Contact />
        </Suspense>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { defineAsyncComponent, Suspense } from 'vue'
import Navigation from '@/components/Navigation.vue'
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useAnalytics } from '@/hooks/useAnalytics'

// Lazy load components
const About = defineAsyncComponent(() => import('@/components/About.vue'))
const Projects = defineAsyncComponent(() => import('@/components/Projects.vue'))
const TechStack = defineAsyncComponent(() => import('@/components/TechStack.vue'))
const Contact = defineAsyncComponent(() => import('@/components/Contact.vue'))

const { trackSectionView } = useAnalytics()

// Lazy loading states
const showAbout = ref(false)
const showProjects = ref(false)
const showTechStack = ref(false)
const showContact = ref(false)

// Intersection observers for lazy loading
const { target: aboutTarget } = useIntersectionObserver(() => {
  showAbout.value = true
  trackSectionView('about')
}, { threshold: 0.1 })

const { target: projectsTarget } = useIntersectionObserver(() => {
  showProjects.value = true
  trackSectionView('projects')
}, { threshold: 0.1 })

const { target: techStackTarget } = useIntersectionObserver(() => {
  showTechStack.value = true
  trackSectionView('tech_stack')
}, { threshold: 0.1 })

const { target: contactTarget } = useIntersectionObserver(() => {
  showContact.value = true
  trackSectionView('contact')
}, { threshold: 0.1 })

onMounted(() => {
  // Set up intersection observer targets
  const aboutEl = document.getElementById('about')
  const projectsEl = document.getElementById('projects')
  const techStackEl = document.getElementById('tech-stack')
  const contactEl = document.getElementById('contact')

  if (aboutEl) aboutTarget.value = aboutEl
  if (projectsEl) projectsTarget.value = projectsEl
  if (techStackEl) techStackTarget.value = techStackEl
  if (contactEl) contactTarget.value = contactEl

  // Track initial page view
  trackSectionView('home')
})
</script>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--text-primary);
  background: var(--background);
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* CSS Custom Properties (Variables) */
:root {
  /* Colors */
  --primary: #0f3c7d;
  --primary-light: #1e5ba8;
  --primary-dark: #0a2847;
  --accent: #00d4ff;
  --accent-dark: #00a8cc;
  --background: #0d1117;
  --background-secondary: #161b22;
  --background-tertiary: #21262d;
  --text-primary: #e6edf3;
  --text-secondary: #8b949e;
  --text-muted: #6e7681;
  --border: #30363d;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;

  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}

/* Utility classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.section {
  padding: var(--spacing-xl) 0;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-30px);
  animation: slideInLeft 0.8s ease-out forwards;
}

.slide-in-right {
  opacity: 0;
  transform: translateX(30px);
  animation: slideInRight 0.8s ease-out forwards;
}

.glow {
  color: var(--accent);
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}

/* Animations */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Focus styles for accessibility */
*:focus {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

button:focus,
a:focus {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

/* Loading states */
.skeleton {
  background: linear-gradient(90deg, var(--background-tertiary) 25%, var(--background-secondary) 50%, var(--background-tertiary) 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    padding: 0 var(--spacing-md);
  }

  .section {
    padding: var(--spacing-lg) 0;
  }

  :root {
    --spacing-lg: 1rem;
    --spacing-xl: 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--spacing-sm);
  }

  :root {
    --spacing-md: 0.75rem;
    --spacing-lg: 0.75rem;
    --spacing-xl: 1rem;
  }
}

/* Print styles */
@media print {
  .navbar,
  .mobile-menu-btn {
    display: none !important;
  }

  body {
    background: white !important;
    color: black !important;
  }

  .section {
    page-break-inside: avoid;
  }
}
</style>
