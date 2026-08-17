"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "Como funciona o primeiro atendimento?",
    a: "No primeiro atendimento, você apresenta brevemente a sua situação para que possamos compreender os principais pontos envolvidos e indicar as possibilidades jurídicas que podem ser avaliadas.",
  },
  {
    q: "O atendimento pode ser feito online?",
    a: "Sim. Realizamos atendimento presencial em Muzambinho/MG e também de forma online, conforme a necessidade e a preferência de cada pessoa.",
  },
  {
    q: "O escritório atende casos de divórcio?",
    a: "Sim. Atuamos em divórcios consensuais e litigiosos, incluindo questões relacionadas à partilha de bens e demais aspectos decorrentes da separação.",
  },
  {
    q: "Vocês atuam em questões de guarda e pensão?",
    a: "Sim. Orientamos e atuamos em questões relacionadas à guarda, convivência familiar e alimentos, incluindo fixação, revisão, exoneração e execução.",
  },
  {
    q: "Vocês trabalham com inventário?",
    a: "Sim. Atuamos em inventários judiciais e extrajudiciais, partilha de bens e questões relacionadas à sucessão.",
  },
  {
    q: "É possível conversar com o escritório antes de decidir contratar?",
    a: "Sim. É possível apresentar a sua situação e compreender as possibilidades jurídicas antes de qualquer decisão sobre a contratação dos serviços.",
  },
  {
    q: "O escritório atende pessoas de outras cidades?",
    a: "Sim. Além do atendimento presencial em Muzambinho/MG, o atendimento online permite acompanhar pessoas de outras cidades.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="duvidas" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center">
          <Reveal>
            <span className="text-[11px] uppercase tracking-widest-plus text-primary">
              Dúvidas frequentes
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground text-balance md:text-5xl">
              Perguntas frequentes
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 divide-y divide-border/70 border-y border-border/70">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.q} delay={(i % 4) * 60}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg text-foreground md:text-xl">{faq.q}</span>
                    <Plus
                      className={cn(
                        "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                      strokeWidth={1.5}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
