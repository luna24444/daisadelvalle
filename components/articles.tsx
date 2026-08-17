import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

// Estrutura preparada para futura conexão com CMS/blog.
type Article = {
  category: string
  title: string
  summary: string
  date: string
  slug: string
}

const articles: Article[] = [
  {
    category: "Guarda",
    title: "Seu ex disse que vai tirar seus filhos? Entenda o que você precisa saber.",
    summary:
      "Entenda de forma geral como a guarda e a convivência são tratadas e o que pode ser avaliado em cada caso.",
    date: "2025",
    slug: "guarda-de-filhos",
  },
  {
    category: "Divórcio",
    title: "Quem sai de casa perde seus direitos?",
    summary:
      "Uma dúvida comum em separações. Veja aspectos gerais sobre direitos relacionados ao imóvel e à convivência.",
    date: "2025",
    slug: "sair-de-casa-direitos",
  },
  {
    category: "Pensão",
    title: "O pai não está pagando pensão. Quais caminhos podem ser avaliados?",
    summary:
      "Conheça, em linhas gerais, as possibilidades relacionadas à execução e revisão de alimentos.",
    date: "2025",
    slug: "pensao-nao-paga",
  },
  {
    category: "Família",
    title: "Guarda compartilhada: o que ela realmente significa?",
    summary:
      "Esclarecemos conceitos gerais sobre a guarda compartilhada e como ela pode ser organizada.",
    date: "2025",
    slug: "guarda-compartilhada",
  },
  {
    category: "Sucessões",
    title: "Inventário: por onde começar?",
    summary:
      "Uma visão geral sobre os primeiros passos e as modalidades judicial e extrajudicial de inventário.",
    date: "2025",
    slug: "inventario-por-onde-comecar",
  },
  {
    category: "Patrimônio",
    title: "O que acontece quando existe patrimônio a ser partilhado após um falecimento?",
    summary:
      "Entenda de forma geral como a partilha de bens costuma ser conduzida em processos sucessórios.",
    date: "2025",
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
              Conteúdos
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground text-balance md:text-5xl">
              Informação para decisões mais conscientes.
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
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                  Ler conteúdo
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
