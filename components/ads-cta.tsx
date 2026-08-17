import { WhatsAppCta } from "@/components/whatsapp-cta"
import { Reveal } from "@/components/reveal"

export function AdsCta() {
  return (
    <section className="bg-accent/40 py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-foreground text-balance md:text-5xl">
            Está passando por uma questão familiar?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
            Se você está enfrentando uma separação, dúvida sobre guarda, pensão, partilha ou outra
            questão relacionada à família, o primeiro passo pode ser compreender melhor a sua
            situação.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-9 flex justify-center">
            <WhatsAppCta message="Olá! Vim de um anúncio e gostaria de falar com o escritório.">
              Falar com o escritório
            </WhatsAppCta>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
