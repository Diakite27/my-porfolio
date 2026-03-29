"use client"

import { useLanguage } from "@/components/navigation"

const translations = {
  fr: {
    tagline: "Double Champion du Monde en Informatique",
    copyright: "© 2026 Yacouba DIAKITE. Tous droits réservés.",
  },
  en: {
    tagline: "Double World Champion in Computer Science",
    copyright: "© 2026 Yacouba DIAKITE. All rights reserved.",
  },
}

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="border-t border-[#1E1E24] py-8 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg overflow-hidden border border-[#C9A84C]/30">
            <img src="/prof.jpeg" alt="YD" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-sm text-foreground font-medium">Yacouba DIAKITE</p>
            <p className="text-xs text-muted-foreground">{t.tagline}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">{t.copyright}</p>
      </div>
    </footer>
  )
}
