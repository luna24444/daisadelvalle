import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Suspense } from "react"
import { TrackingScripts } from "@/components/tracking-scripts"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const siteUrl = "https://delvalleefonsecaadv.com.br"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Escritório de Advocacia em Muzambinho MG | Daísa Del Valle & Sabryna Fonseca",
    template: "%s | Daísa Del Valle & Sabryna Fonseca Advocacia",
  },

  description:
    "Escritório de advocacia em Muzambinho/MG especializado em Direito de Família e Direito Previdenciário. Orientação em divórcio, guarda, pensão alimentícia, inventário, aposentadoria, benefícios do INSS e BPC/LOAS.",

  applicationName: "Daísa Del Valle & Sabryna Fonseca Advocacia",

  authors: [
    {
      name: "Daísa Del Valle & Sabryna Fonseca Advocacia",
      url: siteUrl,
    },
  ],

  creator: "Daísa Del Valle & Sabryna Fonseca Advocacia",
  publisher: "Daísa Del Valle & Sabryna Fonseca Advocacia",

  category: "Law",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  keywords: [
    "escritório de advocacia",
    "escritório de advocacia em Muzambinho",
    "escritório de advocacia em Muzambinho MG",
    "escritório de advocacia Muzambinho",
    "escritório de advocacia Muzambinho MG",
    "advocacia em Muzambinho",
    "advocacia em Muzambinho MG",
    "advocacia Muzambinho",
    "advocacia Muzambinho MG",
    "advogado em Muzambinho",
    "advogada em Muzambinho",
    "advogado Muzambinho MG",
    "advogada Muzambinho MG",

    "direito de família",
    "direito de família em Muzambinho",
    "direito familiar em Muzambinho",
    "advogado de família",
    "advogado de família em Muzambinho",
    "advogada de família",
    "advogada de família em Muzambinho",
    "advocacia de família em Muzambinho",

    "divórcio",
    "divórcio em Muzambinho",
    "advogado para divórcio",
    "advogada para divórcio",
    "advogado de divórcio em Muzambinho",
    "advogada de divórcio em Muzambinho",
    "divórcio consensual",
    "divórcio consensual em Muzambinho",
    "divórcio litigioso",
    "divórcio litigioso em Muzambinho",
    "separação em Muzambinho",

    "guarda de filhos",
    "guarda de filhos em Muzambinho",
    "guarda compartilhada",
    "guarda compartilhada em Muzambinho",
    "guarda unilateral",
    "direito de convivência",
    "regulamentação de visitas",
    "advogado para guarda de filhos",

    "pensão alimentícia",
    "pensão alimentícia em Muzambinho",
    "advogado pensão alimentícia",
    "advogada pensão alimentícia",
    "pensão para filhos",
    "execução de pensão alimentícia",
    "cobrança de pensão alimentícia",
    "revisão de pensão alimentícia",
    "ação de alimentos",

    "inventário",
    "inventário em Muzambinho",
    "advogado para inventário",
    "advogada para inventário",
    "inventário judicial",
    "inventário extrajudicial",
    "inventário extrajudicial em Muzambinho",
    "sucessões",
    "direito sucessório",
    "direito de sucessões",
    "advogado de sucessões",
    "partilha de bens",
    "partilha de bens em Muzambinho",
    "planejamento sucessório",
    "planejamento patrimonial",

    "direito previdenciário",
    "direito previdenciário em Muzambinho",
    "advogado previdenciário",
    "advogado previdenciário em Muzambinho",
    "advogada previdenciária",
    "advogada previdenciária em Muzambinho",
    "advocacia previdenciária em Muzambinho",
    "advogado do INSS",
    "advogado do INSS em Muzambinho",
    "advogada do INSS",
    "advogada do INSS em Muzambinho",
    "advogado INSS Muzambinho",
    "advogada INSS Muzambinho",

    "aposentadoria",
    "aposentadoria em Muzambinho",
    "advogado para aposentadoria",
    "advogada para aposentadoria",
    "advogado de aposentadoria em Muzambinho",
    "aposentadoria INSS",
    "aposentadoria pelo INSS",
    "planejamento previdenciário",
    "planejamento previdenciário em Muzambinho",
    "revisão de aposentadoria",
    "revisão de aposentadoria em Muzambinho",

    "benefícios do INSS",
    "benefício previdenciário",
    "benefício previdenciário em Muzambinho",
    "benefício do INSS",
    "benefício do INSS em Muzambinho",
    "advogado para benefício do INSS",
    "advogada para benefício do INSS",
    "auxílio por incapacidade temporária",
    "benefício por incapacidade",
    "benefício por incapacidade temporária",
    "benefício por incapacidade permanente",

    "BPC LOAS",
    "BPC LOAS em Muzambinho",
    "BPC",
    "LOAS",
    "benefício assistencial",
    "benefício assistencial em Muzambinho",
    "advogado BPC LOAS",
    "advogada BPC LOAS",
    "advogado BPC em Muzambinho",
    "advogada BPC em Muzambinho",
  ],

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Daísa Del Valle & Sabryna Fonseca Advocacia",

    title:
      "Escritório de Advocacia em Muzambinho MG | Daísa Del Valle & Sabryna Fonseca",

    description:
      "Escritório de advocacia em Muzambinho/MG com atuação em Direito de Família e Direito Previdenciário. Divórcio, guarda, pensão, inventário, aposentadoria, benefícios do INSS e BPC/LOAS.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Daísa Del Valle & Sabryna Fonseca Advocacia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Escritório de Advocacia em Muzambinho MG | Daísa Del Valle & Sabryna Fonseca",

    description:
      "Direito de Família e Direito Previdenciário em Muzambinho/MG. Atendimento presencial e online.",

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${siteUrl}/#legalservice`,

  name: "Daísa Del Valle & Sabryna Fonseca Advocacia",

  url: siteUrl,

  description:
    "Escritório de advocacia em Muzambinho/MG com atuação em Direito de Família e Direito Previdenciário.",

  areaServed: {
    "@type": "City",
    name: "Muzambinho",
    containedInPlace: {
      "@type": "State",
      name: "Minas Gerais",
      containedInPlace: {
        "@type": "Country",
        name: "Brasil",
      },
    },
  },

  serviceType: [
    "Direito de Família",
    "Direito Previdenciário",
    "Divórcio e Separação",
    "Guarda e Convivência",
    "Pensão Alimentícia",
    "Partilha de Bens",
    "Inventário e Sucessões",
    "Planejamento Patrimonial",
    "Planejamento Sucessório",
    "Aposentadoria",
    "Benefícios Previdenciários",
    "Benefícios do INSS",
    "BPC/LOAS",
    "Benefício por Incapacidade",
  ],
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4efe7",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5Z4PZWHX"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        <Suspense fallback={null}>
          <TrackingScripts />
        </Suspense>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
