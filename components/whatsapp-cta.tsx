"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { buildWhatsAppUrl } from "@/lib/site"
import { trackEvent } from "@/lib/tracking"

interface WhatsAppCtaProps {
  children: ReactNode
  message?: string
  variant?: "solid" | "outline" | "light"
  className?: string
}

export function WhatsAppCta({ children, message, variant = "solid", className }: WhatsAppCtaProps) {
  const handleClick = () => {
    trackEvent("Contact", { method: "whatsapp" })
  }

  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm tracking-wide transition-all duration-300 font-medium"

  const variants: Record<string, string> = {
    solid: "bg-primary text-primary-foreground hover:opacity-90 hover:-translate-y-0.5 shadow-sm",
    outline:
      "border border-foreground/25 text-foreground hover:border-foreground/60 hover:-translate-y-0.5",
    light:
      "bg-background/95 text-primary hover:bg-background hover:-translate-y-0.5 shadow-sm",
  }

  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </a>
  )
}
