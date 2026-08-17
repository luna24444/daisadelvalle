import {
  Heart,
  Users,
  Coins,
  Scale,
  Scroll,
  ShieldCheck,
  Landmark,
  FileHeart,
  type LucideIcon,
} from "lucide-react"
import { Reveal } from "@/components/reveal"

type Area = { num: string; icon: LucideIcon; title: string; text: string }

const areas: Area[] = [
  {
    num: "01",
    icon: Heart,
    title: "Divórcio e Separação",
    text: "Orientação e atuação em divórcios consensuais e litigiosos, considerando também questões relacionadas à partilha de bens e demais aspectos decorrentes da separação.",
  },
  {
    num: "02",
    icon: Users,
    title: "Guarda e Convivência",
    text: "Orientação jurídica em questões relacionadas à guarda, convivência familiar e responsabilidades parentais.",
  },
  {
    num: "03",
    icon: Coins,
    title: "Pensão Alimentícia",
    text: "Atuação em questões relacionadas à fixação, revisão, exoneração e execução de alimentos.",
  },
  {
    num: "04",
    icon: Scale,
    title: "Partilha de Bens",
    text: "Orientação sobre divisão patrimonial decorrente de divórcio, dissolução de união estável e outras situações familiares.",
  },
  {
    num: "05",
    icon: Scroll,
    title: "Inventário e Sucessões",
    text: "Orientação e acompanhamento em inventários judiciais e extrajudiciais, partilha de bens e questões relacionadas à sucessão.",
  },
  {
    num: "06",
    icon: Landmark,
    title: "Planejamento Patrimonial e Sucessório",
    text: "Orientação preventiva para organização patrimonial e sucessória de acordo com as características e objetivos de cada família.",
  },
  {
    num: "07",
    icon: ShieldCheck,
    title: "Violência Doméstica e Familiar",
    text: "Orientação jurídica para situações de violência doméstica e familiar, considerando as medidas juridicamente disponíveis em cada caso.",
  },
  {
    num: "08",
    icon: FileHeart,
    title: "União Estável",
    text: "Orientação sobre reconhecimento e dissolução de união estável e questões patrimoniais decorrentes da relação.",
  },
]

export function PracticeAreas() {
  return (
    <section id="atuacao" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-[11px] uppercase tracking-widest-plus text-primary">
              Áreas de atuação
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground text-balance md:text-5xl">
              Como podemos orientar você
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Atuação jurídica direcionada às questões que envolvem família, patrimônio e sucessões.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, i) => (
            <Reveal
              key={area.num}
              delay={(i % 4) * 80}
              className="group flex h-full flex-col bg-card p-7 transition-colors duration-300 hover:bg-background"
            >
              <div className="flex items-center justify-between">
                <area.icon className="h-7 w-7 text-primary" strokeWidth={1.3} />
                <span className="font-serif text-2xl text-accent-foreground/40">{area.num}</span>
              </div>
              <h3 className="mt-6 font-serif text-xl leading-snug text-foreground">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
