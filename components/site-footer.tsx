import { MapPin, Mail } from "lucide-react"
import { navLinks, site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <p className="font-serif text-lg leading-tight tracking-[0.14em] text-foreground">
              DAÍSA DEL VALLE
              <br />
              &amp; SABRYNA FONSECA
            </p>
            <p className="mt-1 text-[10px] tracking-[0.42em] text-primary">ADVOGADOS ASSOCIADOS</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Advocacia próxima, estratégica e responsável em Direito de Família e Direito Previdenciário.
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Rodapé">
            <h3 className="text-[11px] uppercase tracking-widest-plus text-primary">Navegação</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h3 className="text-[11px] uppercase tracking-widest-plus text-primary">Contato</h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" strokeWidth={1.5} />
                {site.city}
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-primary" strokeWidth={1.5} />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <svg
                    className="h-4 w-4 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
            <div className="mt-6 space-y-1 text-xs text-muted-foreground">
              <p>{site.oab.daisa}</p>
              <p>{site.oab.sabryna}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-muted-foreground">
            Conteúdo de caráter informativo e educativo. As informações apresentadas neste site não substituem a análise e a orientação jurídica individualizada.
          </p>
          <p className="mt-4 text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} {site.fullName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
