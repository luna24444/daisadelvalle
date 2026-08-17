import { WhatsAppCta } from "@/components/whatsapp-cta"
import { Reveal } from "@/components/reveal"

export function FinalCta() {
  return (
    <section className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-balance md:text-5xl">
            Vamos conversar sobre o seu caso?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            Se você deseja compreender melhor uma questão familiar, patrimonial ou sucessória, entre
            em contato com nosso escritório.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10 flex justify-center">
            <WhatsAppCta variant="light">Falar com o escritório</WhatsAppCta>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
