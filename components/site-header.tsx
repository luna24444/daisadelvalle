"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { navLinks } from "@/lib/site"
import { WhatsAppCta } from "@/components/whatsapp-cta"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Del Valle & Fonseca Advocacia — Início">
          <img
            src="/images/logo.png"
            alt="Logotipo Del Valle & Fonseca Advocacia"
            className="h-11 w-11 md:h-12 md:w-12 rounded-full object-cover"
          />
          <span className="leading-none">
            <span className="block font-serif text-[15px] md:text-base tracking-[0.18em] text-foreground">
              DEL VALLE &amp; FONSECA
            </span>
            <span className="mt-1 block text-[9px] md:text-[10px] tracking-[0.42em] text-primary">
              ADVOGADOS ASSOCIADOS
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[13px] tracking-wide text-foreground/75 transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppCta className="px-5 py-2.5 text-[13px]">Falar com o escritório</WhatsAppCta>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
          aria-label="Abrir menu"
        >
          <Menu className="h-6 w-6" strokeWidth={1.4} />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background transition-transform duration-500 lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <span className="flex items-center gap-2.5">
            <img
              src="/images/logo.png"
              alt="Logotipo Del Valle & Fonseca Advocacia"
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="font-serif text-sm tracking-[0.18em]">DEL VALLE &amp; FONSECA</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center"
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6" strokeWidth={1.4} />
          </button>
        </div>
        <nav className="mt-6 flex flex-col px-5" aria-label="Navegação mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-4 font-serif text-2xl text-foreground/90"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="px-5 pt-8">
          <WhatsAppCta className="w-full">Falar com o escritório</WhatsAppCta>
        </div>
      </div>
    </header>
  )
}
