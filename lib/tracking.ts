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


  if (typeof window.fbq === "function") {
    window.fbq("track", event, params)
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", event, params ?? {})
  }


  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...params })
  }
}
