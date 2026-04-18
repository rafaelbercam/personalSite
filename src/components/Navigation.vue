<!-- src/components/Navigation.vue -->
<template>
  <nav class="navbar" role="navigation" aria-label="Navegação principal">
    <div class="container navbar-container">
      <div class="logo">
        <a
          href="#home"
          @click.prevent="scrollToSection('home')"
          class="logo-link"
          aria-label="Ir para o início da página"
        >
          <span class="logo-text">{{ siteConfig.name.split(' ')[0] }}</span>
        </a>
      </div>

      <!-- Desktop Menu -->
      <ul class="nav-menu" role="menubar">
        <li v-for="item in navItems" :key="item.id" role="none">
          <a
            :href="`#${item.id}`"
            @click.prevent="scrollToSection(item.id)"
            :class="{ active: activeSection === item.id }"
            role="menuitem"
            :aria-current="activeSection === item.id ? 'page' : undefined"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        class="mobile-menu-btn"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Alternar menu de navegação"
      >
        <span class="hamburger" :class="{ open: isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ open: isMenuOpen }" role="menu" :aria-hidden="isMenuOpen ? 'false' : 'true'">
      <ul class="mobile-nav-menu">
        <li v-for="item in navItems" :key="item.id" role="none">
          <a
            :href="`#${item.id}`"
            @click.prevent="handleMobileNav(item.id)"
            :class="{ active: activeSection === item.id }"
            role="menuitem"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { useAnalytics } from '@/hooks/useAnalytics'
import { siteConfig } from '@/config/site'

interface NavItem {
  id: string
  label: string
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Sobre Mim' },
  { id: 'projects', label: 'Projetos' },
  { id: 'tech-stack', label: 'Tecnologias' },
  { id: 'contact', label: 'Contato' }
]

const activeSection = ref('home')
const isMenuOpen = ref(false)
const { scrollToSection } = useSmoothScroll()
const { trackClick } = useAnalytics()

const handleMobileNav = (sectionId: string) => {
  scrollToSection(sectionId)
  isMenuOpen.value = false
  trackClick('mobile_nav_link', sectionId)
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  trackClick('mobile_menu_toggle', isMenuOpen.value ? 'open' : 'close')
}

const updateActiveSection = () => {
  const sections = navItems.map(item => item.id)
  const scrollPosition = window.scrollY + 100

  for (const sectionId of sections.reverse()) {
    const element = document.getElementById(sectionId)
    if (element && element.offsetTop <= scrollPosition) {
      activeSection.value = sectionId
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection() // Set initial active section
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(13, 17, 23, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md) 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.logo-link {
  color: var(--accent);
  text-decoration: none;
  transition: all 0.3s ease;
}

.logo-link:hover {
  color: var(--text-primary);
  transform: scale(1.05);
}

.logo-text {
  background: linear-gradient(135deg, var(--accent) 0%, #00a8cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  gap: var(--spacing-lg);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-menu a:hover,
.nav-menu a.active {
  color: var(--accent);
}

.nav-menu a.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent);
  border-radius: 1px;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
  background: var(--background-secondary);
}

.hamburger {
  width: 24px;
  height: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger span {
  width: 100%;
  height: 2px;
  background: var(--text-primary);
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.mobile-menu {
  display: none;
  background: var(--background-secondary);
  border-top: 1px solid var(--border);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.mobile-menu.open {
  max-height: 300px;
}

.mobile-nav-menu {
  list-style: none;
  margin: 0;
  padding: var(--spacing-lg);
}

.mobile-nav-menu a {
  display: block;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
  margin-bottom: var(--spacing-xs);
}

.mobile-nav-menu a:hover,
.mobile-nav-menu a.active {
  color: var(--accent);
  background: var(--background-tertiary);
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .mobile-menu {
    display: block;
  }
}
</style>
