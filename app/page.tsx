"use client"

import { useState, useRef } from "react"

import { HeroSection } from "@/components/hero-section"
import { RecentHighlights } from "@/components/recent-highlights"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Linkedin, Phone, ArrowUpRight, ArrowRight, Globe, ShoppingCart, Users, Newspaper, Volume2, VolumeX } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/navigation"

const translations = {
  fr: {
    contactTag: "Contact",
    contactTitle: "Travaillons ensemble",
    contactSubtitle: "Projet innovant, collaboration technique ou conférence — je suis ouvert aux opportunités en France et à l\u2019international.",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    locationValue: "Paris, France",
    connectLinkedIn: "LinkedIn",
    sendEmail: "Envoyer un email",
    footer: "© 2026 Yacouba DIAKITE. Tous droits réservés.",
    footerTagline: "Double Champion du Monde en Informatique",
  },
  en: {
    contactTag: "Contact",
    contactTitle: "Let's work together",
    contactSubtitle: "Innovative project, technical collaboration or conference — I'm open to opportunities in France and internationally.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    locationValue: "Paris, France",
    connectLinkedIn: "LinkedIn",
    sendEmail: "Send an email",
    footer: "© 2026 Yacouba DIAKITE. All rights reserved.",
    footerTagline: "Double World Champion in Computer Science",
  },
}

const pressLinks = [
  { name: "Info Directe", url: "https://infodirecte.net/huawei-ict-competition-la-cote-divoire-doublement-sacree-championne-en-informatique" },
  { name: "Le Mandat Express", url: "https://www.lemandatexpress.net/2025/08/06/laureats-du-prix-national-dexcellence-2025-le-ministre-kalil-konate-salue-lemergence-de-talents-formes-localement/" },
  { name: "Ivoire Tech Forum", url: "https://www.ivoiretechforum.com/" },
  { name: "Viva Technology", url: "https://vivatechnology.com/" },
  { name: "Huawei ICT Competition", url: "https://e.huawei.com/en/talent/ict-academy/#/ict-competition" },
]

function PressSection() {
  const { language } = useLanguage()
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          {language === 'fr' ? 'Vu dans la presse & événements' : 'Featured in press & events'}
        </p>

        {/* Vidéo interview */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="aspect-video rounded-2xl overflow-hidden border border-[#C9A84C]/20 shadow-2xl shadow-[#C9A84C]/10 relative">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/interv.mp4" type="video/mp4" />
            </video>
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-all"
              aria-label={isMuted ? "Activer le son" : "Couper le son"}
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Liens presse */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {pressLinks.map((press, i) => (
            <a
              key={i}
              href={press.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-[#C9A84C] transition-colors text-sm font-medium whitespace-nowrap"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {press.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

const projectsData = [
  {
    icon: ShoppingCart,
    color: "#6366f1",
    link: "https://test.mondjassa.net/connexion",
    fr: {
      title: "MonDjassa",
      desc: "Plateforme e-commerce multi-boutiques avec 40+ fonctionnalités, 10 services IA et mode offline PWA.",
      tags: ["Django", "Groq/Llama", "PWA"],
    },
    en: {
      title: "MonDjassa",
      desc: "Multi-store e-commerce platform with 40+ features, 10 AI services and offline PWA mode.",
      tags: ["Django", "Groq/Llama", "PWA"],
    },
  },
  {
    icon: Users,
    color: "#10B981",
    link: "https://sirh-etc.com",
    fr: {
      title: "SIRH",
      desc: "ERP RH complet avec 13 modules, 8 axes IA, pointage géolocalisé et communication WebRTC.",
      tags: ["Django", "Next.js", "GPT-4o", "WebRTC"],
    },
    en: {
      title: "SIRH",
      desc: "Complete HR ERP with 13 modules, 8 AI axes, geolocated attendance and WebRTC communication.",
      tags: ["Django", "Next.js", "GPT-4o", "WebRTC"],
    },
  },
  {
    icon: Newspaper,
    color: "#F59E0B",
    link: "https://axinfos.com",
    fr: {
      title: "AxInfos",
      desc: "Média en ligne multilingue avec chatbot IA Claude, abonnements Stripe et traduction automatique.",
      tags: ["Django", "Claude AI", "Stripe"],
    },
    en: {
      title: "AxInfos",
      desc: "Multilingual online media with Claude AI chatbot, Stripe subscriptions and automatic translation.",
      tags: ["Django", "Claude AI", "Stripe"],
    },
  },
]

function ProjectsPreview() {
  const { language } = useLanguage()

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-[#C9A84C] border border-[#C9A84C]/20 bg-[#C9A84C]/5 mb-4">
            {language === 'fr' ? 'Réalisations techniques' : 'Technical work'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            {language === 'fr' ? 'Projets' : 'Projects'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {language === 'fr' ? 'Des solutions concrètes déployées en production' : 'Concrete solutions deployed in production'}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {projectsData.map((project, i) => {
            const Icon = project.icon
            const t = project[language]
            return (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-[#0C0C10] border border-[#1E1E24] hover:border-[#C9A84C]/30 transition-all card-glow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${project.color}15` }}>
                    <Icon className="h-4 w-4" style={{ color: project.color }} />
                  </div>
                  <span className="font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>{t.title}</span>
                  <Globe className="h-3 w-3 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{t.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {t.tags.map((tag, j) => (
                    <span key={j} className="px-2 py-0.5 rounded-md bg-[#111118] border border-[#1E1E24] text-[10px] text-muted-foreground">{tag}</span>
                  ))}
                </div>
              </a>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-[#C9A84C]/30 hover:border-[#C9A84C]/60 hover:bg-[#C9A84C]/5 text-foreground"
            asChild
          >
            <Link href="/projets">
              {language === 'fr' ? 'Voir tous les projets' : 'View all projects'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
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

      <main>
        <HeroSection />
        <RecentHighlights />
        <PressSection />
        <ProjectsPreview />
        <ContactSection />
      </main>
    </div>
  )
}
