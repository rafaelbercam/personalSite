// src/hooks/useAnalytics.ts
export const useAnalytics = () => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Placeholder para integração com analytics (Google Analytics, Plausible, etc.)
    console.log('Analytics Event:', eventName, properties)

    // Exemplo de integração com Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', eventName, properties)
    }
  }

  const trackClick = (element: string, section?: string) => {
    trackEvent('click', {
      element,
      section,
      timestamp: new Date().toISOString()
    })
  }

  const trackFormSubmit = (formName: string, success: boolean) => {
    trackEvent('form_submit', {
      form: formName,
      success,
      timestamp: new Date().toISOString()
    })
  }

  const trackSectionView = (sectionName: string) => {
    trackEvent('section_view', {
      section: sectionName,
      timestamp: new Date().toISOString()
    })
  }

  return {
    trackEvent,
    trackClick,
    trackFormSubmit,
    trackSectionView
  }
}