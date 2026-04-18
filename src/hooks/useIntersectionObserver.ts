// src/hooks/useIntersectionObserver.ts
import { ref, onMounted, onUnmounted } from 'vue'

export const useIntersectionObserver = (
  callback: () => void,
  options: IntersectionObserverInit = {}
) => {
  const target = ref<Element | null>(null)
  const isIntersecting = ref(false)

  let observer: IntersectionObserver | null = null

  const observe = () => {
    if (target.value && observer) {
      observer.observe(target.value)
    }
  }

  const unobserve = () => {
    if (target.value && observer) {
      observer.unobserve(target.value)
    }
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersecting.value = entry.isIntersecting
          if (entry.isIntersecting) {
            callback()
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    )

    observe()
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    target,
    isIntersecting,
    observe,
    unobserve
  }
}