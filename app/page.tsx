import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { MicroHighlights } from "@/components/micro-highlights"
import { Connection } from "@/components/connection"
import { PracticeAreas } from "@/components/practice-areas"
import { Differentiators } from "@/components/differentiators"
import { AboutOffice } from "@/components/about-office"
import { Lawyers } from "@/components/lawyers"
import { ProcessTimeline } from "@/components/process-timeline"
import { WomenSection } from "@/components/women-section"
import { Articles } from "@/components/articles"
import { AdsCta } from "@/components/ads-cta"
import { Faq } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { site } from "@/lib/site"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.fullName,
  description:
    "Escritório de advocacia em Muzambinho/MG com atuação em Direito de Família, Divórcio, Guarda, Pensão, Inventário, Sucessões e Planejamento Patrimonial.",
  areaServed: "Muzambinho, MG",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Muzambinho",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Direito de Família",
    "Divórcio",
    "Guarda de filhos",
    "Pensão alimentícia",
    "Partilha de bens",
    "Inventário",
    "Sucessões",
    "Planejamento patrimonial",
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <MicroHighlights />
        <Connection />
        <PracticeAreas />
        <Differentiators />
        <AboutOffice />
        <Lawyers />
        <ProcessTimeline />
        <WomenSection />
        <Articles />
        <AdsCta />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
