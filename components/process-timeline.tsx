import { WhatsAppCta } from "@/components/whatsapp-cta"
import { Reveal } from "@/components/reveal"

const steps = [
  {
    num: "01",
    title: "Primeiro contato",
    text: "Você apresenta brevemente a situação que está enfrentando.",
  },
  {
    num: "02",
    title: "Compreensão do caso",
    text: "Buscamos compreender os principais fatos e necessidades envolvidos.",
  },
  {
    num: "03",
    title: "Orientação jurídica",
    text: "São apresentadas as possibilidades jurídicas que podem ser avaliadas.",
  },
  {
    num: "04",
    title: "Próximos passos",
    text: "Com clareza sobre a situação, você entende quais medidas podem ser consideradas.",
  },
]

export function ProcessTimeline() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-[11px] uppercase tracking-widest-plus text-primary">
              Como funciona o atendimento
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground text-balance md:text-5xl">
              Do primeiro contato aos próximos passos.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border/70 bg-border/70 md:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 90} className="bg-card p-8">
              <span className="font-serif text-4xl text-accent-foreground/35">{step.num}</span>
              <div className="mt-6 h-px w-10 bg-primary" />
              <h3 className="mt-5 font-serif text-xl text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex justify-center">
            <WhatsAppCta>Falar com o escritório</WhatsAppCta>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
