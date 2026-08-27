import Image from "next/image"
import { MapPin } from "lucide-react"
import { WhatsAppCta } from "@/components/whatsapp-cta"
import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background pt-28 md:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 md:px-8 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

        {/* Texto */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest-plus text-primary">
              DEL VALLE & FONSECA ADVOGADOS ASSOCIADOS 
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.05] tracking-tight text-foreground text-balance sm:text-6xl lg:text-[4.25rem]">
              Orientação jurídica para decisões que importam.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Atuação estratégica e humanizada em Direito de Família, Sucessões,
              Patrimônio e Previdenciário, com atendimento próximo e análise
              individualizada de cada caso.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppCta>Fale conosco!</WhatsAppCta>

              <a
                href="#atuacao"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-foreground/25 px-7 py-3.5 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/60"
              >
                Conheça o escritório!
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" strokeWidth={1.5} />
              Muzambinho/MG • Atendimento presencial e online
            </p>
          </Reveal>
        </div>

        {/* Foto da Sabryna */}
        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/Sabryna 3.jpeg"
                alt="Dra. Sabryna Fonseca"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 -z-0 hidden h-full w-full rounded-sm border border-accent/60 md:block"
            />
          </div>
        </Reveal>

      </div>
    </section>
  )
}
