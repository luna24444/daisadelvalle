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

const siteUrl = "https://daisaesabryna.adv.br"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Daísa Del Valle & Sabryna Fonseca | Advocacia em Muzambinho MG",
  description:
    "Escritório de advocacia em Muzambinho/MG com atuação em Direito de Família, Divórcio, Guarda, Pensão, Inventário, Sucessões e Planejamento Patrimonial.",
  keywords: [
    "advogada em Muzambinho",
    "advocacia em Muzambinho",
    "direito de família em Muzambinho",
    "advogada de família em Muzambinho",
    "divórcio em Muzambinho",
    "pensão alimentícia em Muzambinho",
    "guarda de filhos",
    "inventário em Muzambinho",
    "direito de sucessões",
  ],
  generator: "v0.app",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Daísa Del Valle & Sabryna Fonseca Advocacia",
    title: "Daísa Del Valle & Sabryna Fonseca | Advocacia em Muzambinho MG",
    description:
      "Advocacia próxima, estratégica e humanizada em Direito de Família, Patrimônio e Sucessões. Muzambinho/MG — atendimento presencial e online.",
  },
  robots: { index: true, follow: true },
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
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable} bg-background`}>
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
