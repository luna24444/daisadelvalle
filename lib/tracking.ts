// Helper de eventos para Meta Pixel e Google Analytics 4 (GTM).
// Os scripts só são carregados se as variáveis de ambiente estiverem definidas.

type StandardEvent = "PageView" | "ViewContent" | "Contact" | "Lead"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function trackEvent(event: StandardEvent, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return

  // Meta Pixel
  if (typeof window.fbq === "function") {
    window.fbq("track", event, params)
  }

  // Google Analytics 4 via gtag
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params ?? {})
  }

  // Camada de dados do GTM
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...params })
  }
}
