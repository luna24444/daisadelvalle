import { WhatsAppCta } from "@/components/whatsapp-cta"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

const lawyers = [
  {
    name: "Daísa Del Valle",
    placeholder: "[FOTO DA DAÍSA]",
    bio: "[INSERIR BIOGRAFIA PROFISSIONAL DA DAÍSA — formação, áreas de dedicação e abordagem de atendimento.]",
    message: "Olá! Gostaria de conhecer a atuação da Dra. Daísa Del Valle.",
  },
  {
    name: "Sabryna Fonseca",
    placeholder: "[FOTO DA SABRYNA]",
    bio: "[INSERIR BIOGRAFIA PROFISSIONAL DA SABRYNA — formação, áreas de dedicação e abordagem de atendimento.]",
    message: "Olá! Gostaria de conhecer a atuação da Dra. Sabryna Fonseca.",
  },
]

export function Lawyers() {
  return (
    <section id="advogadas" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-[11px] uppercase tracking-widest-plus text-primary">
              As advogadas
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground text-balance md:text-5xl">
              Quem vai acompanhar o seu caso
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 space-y-16 md:space-y-24">
          {lawyers.map((lawyer, i) => (
            <div
              key={lawyer.name}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
            >
              <Reveal
                className={cn(i % 2 === 1 && "md:order-2")}
              >
                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-sm border border-border bg-gradient-to-br from-accent/30 via-secondary to-muted">
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-16 w-px bg-primary/40" />
                    <span className="text-[11px] uppercase tracking-widest-plus text-primary/70">
                      {lawyer.placeholder}
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120} className={cn(i % 2 === 1 && "md:order-1")}>
                <p className="font-serif text-lg text-primary">0{i + 1}</p>
                <h3 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
                  {lawyer.name}
                </h3>
                <div className="mt-5 rounded-sm border border-dashed border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
                  {lawyer.bio}
                </div>
                <div className="mt-7">
                  <WhatsAppCta variant="outline" message={lawyer.message}>
                    Conheça a atuação
                  </WhatsAppCta>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
