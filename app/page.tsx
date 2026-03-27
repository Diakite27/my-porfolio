"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { RecentHighlights } from "@/components/recent-highlights"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Linkedin, Phone, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/navigation"

const translations = {
  fr: {
    contactTag: "Contact",
    contactTitle: "Travaillons ensemble",
    contactSubtitle: "Un projet innovant ? Une collaboration à proposer ? Je suis ouvert aux opportunités internationales.",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    locationValue: "Paris, France",
    connectLinkedIn: "LinkedIn",
    sendEmail: "Envoyer un email",
    footer: "© 2025 Yacouba DIAKITE. Tous droits réservés.",
    footerTagline: "Double Champion du Monde en Informatique",
  },
  en: {
    contactTag: "Contact",
    contactTitle: "Let's work together",
    contactSubtitle: "An innovative project? A collaboration to propose? I'm open to international opportunities.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    locationValue: "Paris, France",
    connectLinkedIn: "LinkedIn",
    sendEmail: "Send an email",
    footer: "© 2025 Yacouba DIAKITE. All rights reserved.",
    footerTagline: "Double World Champion in Computer Science",
  },
}

function ContactSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-[#00D4FF] border border-[#00D4FF]/20 bg-[#00D4FF]/5 mb-4">
            {t.contactTag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            {t.contactTitle}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t.contactSubtitle}
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <a
            href="mailto:yacoubadia4@gmail.com"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#0C0C10] border border-[#1E1E24] hover:border-[#C9A84C]/30 transition-all card-glow"
          >
            <div className="h-12 w-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors">
              <Mail className="h-5 w-5 text-[#C9A84C]" />
            </div>
            <span className="text-sm font-medium text-foreground">{t.email}</span>
            <span className="text-xs text-muted-foreground">yacoubadia4@gmail.com</span>
          </a>

          <a
            href="tel:+33753895741"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#0C0C10] border border-[#1E1E24] hover:border-[#C9A84C]/30 transition-all card-glow"
          >
            <div className="h-12 w-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors">
              <Phone className="h-5 w-5 text-[#C9A84C]" />
            </div>
            <span className="text-sm font-medium text-foreground">{t.phone}</span>
            <span className="text-xs text-muted-foreground">+33 7 53 89 57 41</span>
          </a>

          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#0C0C10] border border-[#1E1E24]">
            <div className="h-12 w-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-[#00D4FF]" />
            </div>
            <span className="text-sm font-medium text-foreground">{t.location}</span>
            <span className="text-xs text-muted-foreground">{t.locationValue}</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#C9A84C] to-[#E2C97E] text-[#050507] hover:opacity-90 font-semibold shadow-lg shadow-[#C9A84C]/20"
            asChild
          >
            <a href="mailto:yacoubadia4@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              {t.sendEmail}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#1E1E24] hover:border-[#00D4FF]/30 hover:bg-[#00D4FF]/5 text-foreground"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/yacouba-diakite-9b0b061a9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              {t.connectLinkedIn}
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <RecentHighlights />
        <ContactSection />
      </main>

      <footer className="border-t border-[#1E1E24] py-8 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#C9A84C] to-[#E2C97E] flex items-center justify-center">
              <span className="text-[#050507] font-bold text-xs">YD</span>
            </div>
            <div>
              <p className="text-sm text-foreground font-medium">Yacouba DIAKITE</p>
              <p className="text-xs text-muted-foreground">{t.footerTagline}</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">{t.footer}</p>
        </div>
      </footer>
    </div>
  )
}
