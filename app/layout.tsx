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
    default: "Escritório de Advocacia em Muzambinho MG",
    template: "%s | Del Valle & Fonseca Advogados Associados",
  },

  description:
    "Del Valle & Fonseca Advocacia em Muzambinho/MG. Atuação em Direito da Família e Direito Previdenciário, com atendimento presencial e online.",

  keywords: [
    "advocacia em Muzambinho",
    "advogada em Muzambinho",
    "advocacia Muzambinho MG",
    "direito de família em Muzambinho",
    "direito previdenciário em Muzambinho",
    "advogada previdenciária em Muzambinho",
    "divórcio em Muzambinho",
    "pensão alimentícia em Muzambinho",
    "guarda de filhos em Muzambinho",
    "inventário em Muzambinho",
    "aposentadoria em Muzambinho",
    "benefício do INSS em Muzambinho",
    "BPC LOAS em Muzambinho",
    "planejamento previdenciário",
    "planejamento patrimonial",
  ],

  authors: [
    {
      name: "Daísa Del Valle & Sabryna Fonseca Advocacia",
    },
  ],

  creator: "Daísa Del Valle & Sabryna Fonseca Advocacia",
  publisher: "Daísa Del Valle & Sabryna Fonseca Advocacia",

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

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Daísa Del Valle & Sabryna Fonseca Advocacia",
    title:
      "Daísa Del Valle & Sabryna Fonseca | Advocacia em Muzambinho MG",
    description:
      "Atuação em Direito de Família e Direito Previdenciário em Muzambinho/MG, com atendimento presencial e online.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Daísa Del Valle & Sabryna Fonseca | Advocacia em Muzambinho MG",
    description:
      "Advocacia em Direito de Família e Direito Previdenciário em Muzambinho/MG.",
  },

  category: "Legal",
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
        <Suspense fallback={null}>
          <TrackingScripts />
        </Suspense>

        {children}

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
