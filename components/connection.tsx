import { WhatsAppCta } from "@/components/whatsapp-cta"
import { Reveal } from "@/components/reveal"

export function Connection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <span className="text-[11px] uppercase tracking-widest-plus text-primary">
            Direito Familiar e Previdenciário.
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-3xl leading-[1.15] text-foreground text-balance md:text-5xl">
            Você não precisa tomar uma decisão importante sem entender seus direitos.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Questão familiar,separação, guarda ou pensão. Uma dúvida sobre aposentadoria, benefício ou BPC/LOAS. Cada situação merece ser analisada de forma individualizada.
            </p>
            <p>
              Conte com a orientação da Daísa Del Valle & Sabryna Fonseca Advocacia para compreender sua situação e as possibilidades jurídicas que podem ser avaliadas!
            </p>
          </div>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex justify-center">
            <WhatsAppCta message="Olá! Gostaria de entender melhor a minha situação.">
              Fale conosco!
            </WhatsAppCta>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
