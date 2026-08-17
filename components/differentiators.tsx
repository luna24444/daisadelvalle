import { Ear, Lightbulb, Target, Handshake } from "lucide-react"
import { Reveal } from "@/components/reveal"

const blocks = [
  {
    icon: Ear,
    title: "Escuta",
    text: "Antes de qualquer orientação, buscamos compreender a história, as necessidades e as particularidades de cada situação.",
  },
  {
    icon: Lightbulb,
    title: "Clareza",
    text: "Explicamos as possibilidades jurídicas de maneira acessível, objetiva e responsável.",
  },
  {
    icon: Target,
    title: "Estratégia",
    text: "Cada caso é analisado individualmente para identificar os caminhos juridicamente possíveis.",
  },
  {
    icon: Handshake,
    title: "Proximidade",
    text: "Valorizamos uma relação próxima e transparente durante todo o acompanhamento.",
  },
]

export function Differentiators() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-[11px] uppercase tracking-widest-plus text-primary">
              Nossos diferenciais
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-serif text-3xl leading-[1.15] text-foreground text-balance md:text-5xl">
              Uma advocacia mais próxima, estratégica e humana.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((block, i) => (
            <Reveal key={block.title} delay={i * 100} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent bg-accent/25">
                <block.icon className="h-6 w-6 text-primary" strokeWidth={1.4} />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-foreground">{block.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{block.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
