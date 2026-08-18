import { WhatsAppCta } from "@/components/whatsapp-cta"
import { Reveal } from "@/components/reveal"

export function FinalCta() {
  return (
    <section className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-balance md:text-5xl">
            Uma decisão importante começa por entender os seus direitos.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            Seja uma questão de Família, como divórcio, guarda ou pensão. Ou Previdenciária, como aposentadoria e benefícios, entender seus direitos é o primeiro passo.
Fale com o escritório e compreenda as possibilidades para o seu caso.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10 flex justify-center">
            <WhatsAppCta variant="light">Clique aqui!</WhatsAppCta>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
