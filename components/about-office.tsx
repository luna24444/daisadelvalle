import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function AboutOffice() {
  return (
    <section id="escritorio" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/interior-warm.png"
                alt="Recepção do escritório de advocacia"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-sm border border-primary-foreground/25 bg-foreground/45 px-4 py-3 text-center backdrop-blur-sm">
                <span className="text-[11px] uppercase tracking-widest-plus text-primary-foreground/90">
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-[11px] uppercase tracking-widest-plus text-primary">
              ESCRITÓRIO
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-serif text-3xl leading-[1.15] text-foreground text-balance md:text-[2.75rem]">
              Você sabe quais são os seus direitos antes de tomar uma decisão importante?
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Uma separação. A guarda dos filhos. Uma pensão. A divisão de um patrimônio. A aposentadoria que se aproxima. Um benefício do INSS.
              Cada uma dessas situações pode envolver decisões importantes — e entender as possibilidades jurídicas antes de agir pode fazer toda a diferença.
              NO Del Valle & Fonseca Advocacia, você encontra orientação próxima e individualizada em Direito de Família e Direito Previdenciário, com análise cuidadosa de cada situação.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 rounded-sm border border-dashed border-border bg-secondary/40 p-5 text-sm leading-relaxed text-muted-foreground">
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
