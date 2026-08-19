import Image from "next/image"
import { WhatsAppCta } from "@/components/whatsapp-cta"
import { Reveal } from "@/components/reveal"

export function WomenSection() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="lg:order-2">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm md:aspect-[4/5]">
            <Image
              src="/Sabryna%202.jpeg"
              alt="Dra. Sabryna Fonseca"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </Reveal>

        <div className="lg:order-1">
          <Reveal>
            <span className="text-[11px] uppercase tracking-widest-plus text-primary">
              Para você
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 font-serif text-3xl leading-[1.15] text-foreground text-balance md:text-[2.75rem]">
              Seja uma questão familiar ou previdenciária, entender seus
              direitos é o primeiro passo!
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Questões envolvendo separação, filhos, pensão e patrimônio,
                assim como dúvidas sobre aposentadoria, benefícios ou BPC/LOAS,
                podem trazer insegurança e muitas dúvidas.
              </p>

              <p>
                Buscar orientação jurídica adequada é uma forma de compreender
                as possibilidades do seu caso e tomar decisões com mais clareza
                e segurança.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9">
              <WhatsAppCta message="Olá! Gostaria de conversar com o escritório sobre a minha situação.">
                Quero conversar com o escritório
              </WhatsAppCta>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
