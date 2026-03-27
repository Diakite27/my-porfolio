"use client"

import { Button } from "@/components/ui/button"
import { Award, ArrowRight, FileText, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/navigation"

const heroTranslations = {
  fr: {
    title1: "Yacouba",
    title2: "DIAKITE",
    subtitle: "Ingénieur Data & Intelligence Artificielle",
    description: "Double champion du monde Huawei ICT (2024 & 2025), face à plus de 200 000 candidats de 100 pays. Lauréat du Prix National d\u2019Excellence 2025, décerné par le Président de la République. Passionné par la Data Science, le Machine Learning et le Cloud.",
    viewCV: "Voir mon CV",
    achievements: "Mes Distinctions",
    stat1: "Prix Internationaux",
    stat2: "Certifications",
    stat3: "Pays visités",
    stat4: "Titre Mondial",
    marquee: "Double Champion du Monde · Data Science · Machine Learning · AWS · Huawei ICT · Deep Learning · Cloud Computing · Intelligence Artificielle · Big Data · Python · NLP · Computer Vision · Prix National d\u2019Excellence",
  },
  en: {
    title1: "Yacouba",
    title2: "DIAKITE",
    subtitle: "Data & Artificial Intelligence Engineer",
    description: "Double world champion Huawei ICT (2024 & 2025), competing against 200,000+ candidates from 100 countries. Winner of the 2025 National Excellence Award, presented by the President of the Republic. Passionate about Data Science, Machine Learning and Cloud.",
    viewCV: "View my Resume",
    achievements: "My Achievements",
    stat1: "International Awards",
    stat2: "Certifications",
    stat3: "Countries visited",
    stat4: "World Title",
    marquee: "Double World Champion · Data Science · Machine Learning · AWS · Huawei ICT · Deep Learning · Cloud Computing · Artificial Intelligence · Big Data · Python · NLP · Computer Vision · National Excellence Award",
  },
}

export function HeroSection() {
  const { language } = useLanguage()
  const t = heroTranslations[language]

  const stats = [
    { value: "5+", label: t.stat1 },
    { value: "10+", label: t.stat2 },
    { value: "10+", label: t.stat3 },
    { value: "2x", label: t.stat4 },
  ]

  return (
    <>
      {/* ===== SECTION 1 — Vidéo cinématique plein écran ===== */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain sm:object-cover bg-[#050507]"
        >
          <source src="/plateau-tv.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-[#050507]/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/8 via-transparent to-[#00D4FF]/8" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(201,168,76,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Shimmer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-48 bg-gradient-to-t from-[#050507] to-transparent" />

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 animate-bounce z-10">
          <ChevronDown className="h-6 w-6" />
        </div>
      </section>

      {/* ===== SECTION 2 — Profil centré premium ===== */}
      <section className="relative py-10 sm:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A84C]/4 rounded-full blur-[180px]" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Photo carrée avec bordure dorée */}
            <div className="relative mb-8 animate-fade-up">
              {/* Glow derrière */}
              <div className="absolute -inset-3 bg-gradient-to-br from-[#C9A84C]/20 via-transparent to-[#00D4FF]/20 rounded-2xl blur-xl" />

              {/* Bordure dorée */}
              <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-[#C9A84C] to-[#E2C97E] opacity-80" />

              {/* Photo */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-[#050507]">
                <Image
                  src="/prof.jpeg"
                  alt="Yacouba DIAKITE"
                  fill
                  className="object-cover"
                  sizes="320px"
                  priority
                />
              </div>

              {/* Badge champion flottant */}
              <div className="absolute -bottom-2 -right-2 bg-[#0C0C10] border border-[#C9A84C]/40 rounded-xl px-3 py-1.5 shadow-xl">
                <span className="text-lg">🏆</span>
              </div>
            </div>

            {/* Nom */}
            <div className="mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="text-foreground">{t.title1} </span>
                <span className="text-gradient-gold">{t.title2}</span>
              </h2>
              <p className="mt-3 text-lg sm:text-xl text-[#00D4FF] font-medium" style={{ fontFamily: 'var(--font-display)' }}>
                {t.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {t.description}
            </p>

            {/* Stats en ligne */}
            <div className="flex items-center justify-center gap-6 sm:gap-10 mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-bold text-gradient-gold" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground mt-1 whitespace-nowrap">{stat.label}</span>
                  {i < stats.length - 1 && (
                    <div className="hidden" />
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C9A84C] to-[#E2C97E] text-[#050507] hover:opacity-90 font-semibold shadow-lg shadow-[#C9A84C]/20 hover:shadow-[#C9A84C]/40"
                asChild
              >
                <Link href="/cv">
                  <FileText className="mr-2 h-5 w-5" />
                  {t.viewCV}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#1E1E24] hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/5 text-foreground"
                asChild
              >
                <Link href="/distinctions">
                  {t.achievements}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3 — Marquee défilant ===== */}
      <div className="relative py-5 overflow-hidden border-y border-[#C9A84C]/10 bg-[#0C0C10]/50">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="mx-4 text-sm font-medium tracking-widest uppercase" style={{ fontFamily: 'var(--font-display)' }}>
              {t.marquee.split(' · ').map((word, j) => (
                <span key={j}>
                  <span className="text-[#C9A84C]/70">{word}</span>
                  <span className="text-[#C9A84C]/30 mx-4">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
