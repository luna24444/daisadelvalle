import { WhatsAppCta } from "@/components/whatsapp-cta"
import { Reveal } from "@/components/reveal"

export function Connection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <span className="text-[11px] uppercase tracking-widest-plus text-primary">
            Um primeiro passo
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-3xl leading-[1.15] text-foreground text-balance md:text-5xl">
            Algumas decisões começam quando você decide entender os seus direitos.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Divórcio, conflitos familiares, guarda, pensão, questões patrimoniais e sucessões
              podem envolver decisões importantes e momentos de grande insegurança.
            </p>
            <p>
              Nessas situações, informação jurídica adequada pode ajudar você a compreender suas
              possibilidades e tomar decisões com mais clareza.
            </p>
          </div>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex justify-center">
            <WhatsAppCta message="Olá! Gostaria de entender melhor a minha situação.">
              Quero entender minha situação
            </WhatsAppCta>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
