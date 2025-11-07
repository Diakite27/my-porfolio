"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { RecentHighlights } from "@/components/recent-highlights"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Globe, Linkedin, Phone, ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/navigation"
import Link from "next/link"

// Traductions
const translations = {
  fr: {
    contact: "Contact",
    contactTitle: "Restons en contact",
    contactSubtitle: "Vous avez un projet innovant ? Une collaboration à proposer ? N'hésitez pas à me contacter pour discuter de vos idées.",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    locationValue: "Paris, France",
    availability: "Disponibilité",
    availabilityValue: "Ouvert aux collaborations internationales",
    expertise: "Domaines d'expertise",
    expertiseAreas: [
      "Intelligence Artificielle",
      "Machine Learning",
      "Data Science",
      "Cloud Computing",
      "Big Data",
      "Deep Learning",
      "DevOps",
      "Innovation",
    ],
    socialMedia: "Réseaux sociaux",
    connectLinkedIn: "Se connecter sur LinkedIn",
    sendEmail: "Envoyer un email",
    footer: "© 2025 Yacouba DIAKITE. Tous droits réservés.",
  },
  en: {
    contact: "Contact",
    contactTitle: "Let's stay in touch",
    contactSubtitle: "Have an innovative project? A collaboration to propose? Feel free to contact me to discuss your ideas.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    locationValue: "Paris, France",
    availability: "Availability",
    availabilityValue: "Open to international collaborations",
    expertise: "Areas of expertise",
    expertiseAreas: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Cloud Computing",
      "Big Data",
      "Deep Learning",
      "DevOps",
      "Innovation",
    ],
    socialMedia: "Social media",
    connectLinkedIn: "Connect on LinkedIn",
    sendEmail: "Send an email",
    footer: "© 2025 Yacouba DIAKITE. All rights reserved.",
  },
}

function ContactSection() {
  const { language } = useLanguage()

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{t('contactTitle')}</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>

          {/* Informations de contact - Simple Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">{t('email')}</h3>
              <a 
                href="mailto:yacoubadia4@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                yacoubadia4@gmail.com
              </a>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">{t('phone')}</h3>
              <a 
                href="tel:+33753895741" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                +33 7 53 89 57 41
              </a>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">{t('location')}</h3>
              <p className="text-muted-foreground text-sm">{t('locationValue')}</p>
            </div>
          </div>

          {/* Bouton LinkedIn */}
          <div className="flex justify-center gap-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/yacouba-diakite-9b0b061a9/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                {t('connectLinkedIn')}
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              asChild
            >
              <a href="mailto:yacoubadia4@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                {t('sendEmail')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <RecentHighlights />
        <ContactSection />
      </main>

      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            {translations[language].footer}
          </p>
        </div>
      </footer>
    </div>
  )
}