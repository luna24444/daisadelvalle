import {
  Heart,
  Users,
  Coins,
  Scale,
  Landmark,
  FileText,
  ShieldCheck,
  CalendarClock,
  type LucideIcon,
} from "lucide-react"
import { Reveal } from "@/components/reveal"

type Area = {
  num: string
  icon: LucideIcon
  title: string
  text: string
}

const areas: Area[] = [

  {
    num: "01",
    icon: Heart,
    title: "Divórcio e Separação",
    text: "Orientação jurídica em divórcios consensuais e litigiosos, incluindo questões relacionadas à partilha de bens e aos demais aspectos da separação.",
  },
  {
    num: "02",
    icon: Users,
    title: "Guarda e Convivência",
    text: "Atuação em questões envolvendo guarda dos filhos, convivência familiar e responsabilidades parentais, considerando as particularidades de cada caso.",
  },
  {
    num: "03",
    icon: Coins,
    title: "Pensão Alimentícia",
    text: "Orientação e atuação em questões relacionadas à fixação, revisão, exoneração e cobrança de pensão alimentícia.",
  },
  {
    num: "04",
    icon: Scale,
    title: "União Estável e Partilha de Bens",
    text: "Orientação sobre reconhecimento e dissolução de união estável, além de questões patrimoniais decorrentes da relação familiar.",
  },
  {
    num: "05",
    icon: Landmark,
    title: "Aposentadorias",
    text: "Análise do histórico previdenciário e orientação sobre as possibilidades de aposentadoria de acordo com as características de cada caso.",
  },
  {
    num: "06",
    icon: ShieldCheck,
    title: "Benefício por Incapacidade",
    text: "Orientação em situações de incapacidade para o trabalho e análise das possibilidades relacionadas aos benefícios previdenciários.",
  },
  {
    num: "07",
    icon: FileText,
    title: "BPC/LOAS",
    text: "Orientação sobre o Benefício de Prestação Continuada destinado à pessoa idosa e à pessoa com deficiência, conforme os requisitos aplicáveis.",
  },
  {
    num: "08",
    icon: CalendarClock,
    title: "Planejamento Previdenciário",
    text: "Análise do histórico contributivo e orientação para identificar possibilidades e caminhos previdenciários adequados a cada situação.",
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
              Direito de Família e Previdenciário
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Atuação jurídica cuidadosa e individualizada em questões que
              envolvem família, patrimônio, benefícios e direitos previdenciários.
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
                <area.icon
                  className="h-7 w-7 text-primary"
                  strokeWidth={1.3}
                />

                <span className="font-serif text-2xl text-accent-foreground/40">
                  {area.num}
                </span>
              </div>

              <h3 className="mt-6 font-serif text-xl leading-snug text-foreground">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {area.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
