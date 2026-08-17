// Configurações centrais do site. Substitua os valores marcados com [INSERIR ...].

export const site = {
  name: "Del Valle & Fonseca Advocacia",
  fullName: "Del Valle & Fonseca Advocacia",
  logo: "/images/logo.png",
  city: "Muzambinho/MG",
  // Número no formato internacional, apenas dígitos (55 + DDD + número).
  whatsappNumber: "5535999999999", // [INSERIR NÚMERO DE WHATSAPP]
  whatsappMessage: "Olá! Gostaria de informações sobre o atendimento jurídico.",
  email: "contato@daisaesabryna.adv.br", // [INSERIR E-MAIL]
  instagram: "https://instagram.com/", // [INSERIR INSTAGRAM]
  oab: {
    daisa: "OAB/MG [INSERIR NÚMERO]",
    sabryna: "OAB/MG [INSERIR NÚMERO]",
  },
} as const

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "O Escritório", href: "#escritorio" },
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
