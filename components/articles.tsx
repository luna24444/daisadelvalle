import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { buildWhatsAppUrl } from "@/lib/site"

type Article = {
  category: string
  title: string
  summary: string
  date: string
  slug: string
}

const articles: Article[] = [
  {
    category: "PREVIDENCIÁRIO",
    title: "Está pensando em se aposentar?",
    summary:
      "Orientação e análise das possibilidades de aposentadoria de acordo com o histórico previdenciário e as particularidades de cada caso.",
    date: "2026",
    slug: "aposentadoria-o-que-analisar",
  },
  {
    category: "PREVIDENCIÁRIO",
    title: "Não consegue trabalhar por causa de uma doença ou incapacidade?",
    summary:
      "Entenda, de forma geral, como funciona o benefício por incapacidade temporária e quais aspectos podem ser considerados em cada situação.",
    date: "2026",
    slug: "beneficio-incapacidade-temporaria",
  },
  {
    category: "DIREITO FAMILIAR",
    title: "O pai não está pagando pensão. Quais caminhos podem ser avaliados?",
    summary:
      "Conheça, em linhas gerais, as possibilidades relacionadas à execução e revisão de alimentos.",
    date: "2026",
    slug: "pensao-nao-paga",
  },
  {
    category: "DIREITO FAMILIAR",
    title: "Guarda compartilhada: o que ela realmente significa?",
    summary:
      "Esclarecemos conceitos gerais sobre a guarda compartilhada e como ela pode ser organizada.",
    date: "2026",
    slug: "guarda-compartilhada",
  },
  {
    category: "PREVIDENCIÁRIO",
    title: "BPC/LOAS: quem pode ter direito ao benefício?",
    summary:
      "Conheça os principais aspectos do Benefício de Prestação Continuada destinado à pessoa idosa e à pessoa com deficiência.",
    date: "2026",
    slug: "bpc-loas-quem-pode-ter-direito",
  },
  {
    category: "DIREITO FAMILIAR",
    title: "O que acontece quando existe patrimônio a ser partilhado após um falecimento?",
    summary:
      "Entenda de forma geral como a partilha de bens costuma ser conduzida em processos sucessórios.",
    date: "2026",
    slug: "partilha-apos-falecimento",
  },
]

export function Articles() {
  return (
    <section id="conteudos" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-[11px] uppercase tracking-widest-plus text-primary">
              Direito Previdenciário e Familiar
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground text-balance md:text-5xl">
              Entender seus direitos hoje pode fazer diferença no seu futuro.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <Reveal key={article.slug} delay={(i % 3) * 90}>
              <article className="group flex h-full flex-col rounded-sm border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                
                <div className="flex items-center justify-between text-[11px] uppercase tracking-widest-plus text-primary">
                  <span>{article.category}</span>
                  <span className="text-muted-foreground">{article.date}</span>
                </div>

                <h3 className="mt-5 font-serif text-xl leading-snug text-foreground text-balance">
                  {article.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.summary}
                </p>

                <a
                  href={buildWhatsAppUrl(
                    `Olá! Gostaria de saber mais sobre: ${article.title}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-primary"
                >
                  Ler conteúdo
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </a>

              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
