import { HeartHandshake, Scale, Compass, MonitorSmartphone } from "lucide-react"
import { Reveal } from "@/components/reveal"

const items = [
  { icon: HeartHandshake, label: "Atendimento personalizado" },
  { icon: Compass, label: "Análise individualizada" },
  { icon: Scale, label: "Atuação estratégica" },
  { icon: MonitorSmartphone, label: "Atendimento presencial e online" },
]

export function MicroHighlights() {
  return (
    <section className="border-y border-border/70 bg-secondary/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border/70 px-0 md:grid-cols-4 md:divide-y-0">
        {items.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 90}
            className="flex flex-col items-center gap-3 px-5 py-8 text-center md:flex-row md:gap-4 md:px-7 md:py-9 md:text-left"
          >
            <item.icon className="h-6 w-6 shrink-0 text-primary" strokeWidth={1.4} />
            <span className="text-sm leading-snug text-foreground/85">{item.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
