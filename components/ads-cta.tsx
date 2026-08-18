import { WhatsAppCta } from "@/components/whatsapp-cta"
import { Reveal } from "@/components/reveal"

export function AdsCta() {
  return (
    <section className="bg-accent/40 py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-foreground text-balance md:text-5xl">
            Uma decisão importante começa por entender os seus direitos!
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
            Seja em uma questão familiar, como divórcio, guarda ou pensão, ou em uma questão previdenciária,
            como aposentadoria, benefícios ou BPC/LOAS, cada situação merece uma análise individualizada.
            Entenda as possibilidades jurídicas para o seu caso!
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-9 flex justify-center">
            <WhatsAppCta message="Olá! Vim de um anúncio e gostaria de falar com o escritório.">
              Fale com um especialista!
            </WhatsAppCta>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
