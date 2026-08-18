// Configurações centrais do site. Substitua os valores marcados com [INSERIR ...].

export const site = {
  name: "Del Valle & Fonseca Advocacia",
  fullName: "Del Valle & Fonseca Advocacia",
  logo: "/images/logo.png",
  city: "Muzambinho/MG",
  whatsappNumber: "553591161349", 
  whatsappMessage: "Olá!Vim pelo site e gostaria de informações saber mais,por favor.",
  email: "contato@daisaesabryna.adv.br", // [INSERIR E-MAIL]
  instagram: "https://www.instagram.com/delvalleefonseca/",
  oab: {
    daisa: "OAB/MG [INSERIR NÚMERO]",
    sabryna: "OAB/MG [INSERIR NÚMERO]",
  },
} as const

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Escritório", href: "#escritorio" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Advogadas", href: "#advogadas" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Dúvidas", href: "#duvidas" },
] as const

/**
 * Monta o link do WhatsApp preservando os parâmetros UTM presentes na URL atual.
 */
export function buildWhatsAppUrl(customMessage?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`
  let message = customMessage ?? site.whatsappMessage

  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search)
    const utms = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ]
      .map((k) => (params.get(k) ? `${k}=${params.get(k)}` : null))
      .filter(Boolean)

    if (utms.length) {
      message += `\n\n(Origem: ${utms.join(" | ")})`
    }
  }

  return `${base}?text=${encodeURIComponent(message)}`
}
