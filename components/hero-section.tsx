"use client"

import { Button } from "@/components/ui/button"
import { Award, ArrowRight, FileText, Trophy, Sparkles, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/navigation"

const heroTranslations = {
  fr: {
    badge: "Double Champion du Monde",
    title1: "Yacouba",
    title2: "DIAKITE",
    subtitle: "Ingénieur Data & Intelligence Artificielle",
    description: "Double champion du monde Huawei ICT en Chine. Lauréat du Prix National d'Excellence 2025 du Meilleur Talent Numérique. Passionné par la Data Science, le Machine Learning et le Cloud Computing.",
    viewCV: "Voir mon CV",
    achievements: "Mes Distinctions",
    stat1Label: "Prix Internationaux",
    stat2Label: "Certifications",
    stat3Label: "Pays visités",
    stat4Label: "Titre Mondial",
  },
  en: {
    badge: "Double World Champion",
    title1: "Yacouba",
    title2: "DIAKITE",
    subtitle: "Data & Artificial Intelligence Engineer",
    description: "Double world champion Huawei ICT in China. Winner of the 2025 National Excellence Award for Best Digital Talent. Passionate about Data Science, Machine Learning and Cloud Computing.",
    viewCV: "View my Resume",
    achievements: "My Achievements",
    stat1Label: "International Awards",
    stat2Label: "Certifications",
    stat3Label: "Countries visited",
    stat4Label: "World Title",
  },
}

export function HeroSection() {
  const { language } = useLanguage()
  const t = heroTranslations[language]

  return (
    <>
      {/* Section vidéo plein écran */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen w-full overflow-hidden">
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/plateau-tv.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#050507]/40" />

        {/* Gold/Cyan gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/10 via-transparent to-[#00D4FF]/10" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(201,168,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Shimmer effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        </div>

        {/* Bottom gradient fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050507] to-transparent" />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <ChevronDown className="h-5 w-5" />
        </div>
      </section>

      {/* Section présentation */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-grid">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/3 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="space-y-8 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/5">
              <Trophy className="h-4 w-4 text-[#C9A84C]" />
              <span className="text-sm font-medium text-[#C9A84C]">{t.badge}</span>
              <Sparkles className="h-3 w-3 text-[#C9A84C]" />
            </div>

            {/* Name */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="text-foreground">{t.title1}</span>
                <br />
                <span className="text-gradient-gold">{t.title2}</span>
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-[#00D4FF] font-medium" style={{ fontFamily: 'var(--font-display)' }}>
                {t.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
              {t.description}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
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

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-4">
              {[
                { value: "5+", label: t.stat1Label },
                { value: "10+", label: t.stat2Label },
                { value: "15+", label: t.stat3Label },
                { value: "2x", label: t.stat4Label },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gradient-gold" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Photo */}
          <div className="relative flex justify-center lg:justify-end" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A84C]/20 via-transparent to-[#00D4FF]/20 rounded-3xl blur-2xl" />

              {/* Photo container */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden border border-[#C9A84C]/20 shadow-2xl shadow-[#C9A84C]/10">
                <Image
                  src="/prof.jpeg"
                  alt="Yacouba DIAKITE"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 420px"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/60 via-transparent to-transparent" />

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-[#C9A84C]" />
                    <span className="text-sm font-medium text-white/90">Huawei ICT Competition</span>
                  </div>
                  <p className="text-xs text-white/60 mt-1">Shenzhen, China — 2024 & 2025</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-[#0C0C10] border border-[#C9A84C]/30 rounded-2xl px-4 py-2 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <div className="text-xs font-bold text-[#C9A84C]">2x World</div>
                    <div className="text-xs text-muted-foreground">Champion</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050507] to-transparent" />
    </section>
    </>
  )
}
