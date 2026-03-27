"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Award, ArrowRight, FileText, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "@/components/navigation"

// Traductions spécifiques au Hero
const heroTranslations = {
  fr: {
    championBadge: "Double Champion du Monde d'Informatique en Chine",
    titleExcellence: "Excellence et",
    titleInnovation: " Innovation",
    description: "Ingénieur en Data Science & Intelligence Artificielle, passionné par la Data et le Cloud, avec une expertise reconnue en Machine Learning et en Cloud. Double champion du monde Huawei ICT en Chine et Lauréat du Prix National d'Excellence 2025 du Meilleur Talent Numérique, je cherche à relever de nouveaux défis techniques et scientifiques.",
    viewCV: "Voir mon CV",
    myAchievements: "Mes Distinctions",
    internationalAwards: "Prix Internationaux",
    certifications: "Certifications IT",
    majorEvents: "Événements Majeurs",
    jobTitle: "Ingénieur Data & IA",
    name: "Yacouba DIAKITE",
  },
  en: {
    championBadge: "Double World Champion in Computer Science in China",
    titleExcellence: "Excellence and",
    titleInnovation: " Innovation",
    description: "Data Science & Artificial Intelligence Engineer, passionate about Data and Cloud, with recognized expertise in Machine Learning and Cloud. Double world champion Huawei ICT in China and Winner of the 2025 National Excellence Award for Best Digital Talent, I seek to take on new technical and scientific challenges.",
    viewCV: "View my Resume",
    myAchievements: "My Achievements",
    internationalAwards: "International Awards",
    certifications: "IT Certifications",
    majorEvents: "Major Events",
    jobTitle: "Data & AI Engineer",
    name: "Yacouba DIAKITE",
  },
}

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const { language } = useLanguage()

  // Fonction de traduction pour ce composant
  const t = (key: string) => {
    return heroTranslations[language][key as keyof typeof heroTranslations.fr] || key
  }

  return (
    <>
      {/* Section 1: Vidéo plein écran RESPONSIVE avec effets brillants */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen w-full overflow-hidden">
        {/* Video seule */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/plateau-tv.mp4" type="video/mp4" />
          {/* Image de secours */}
          <img 
            src="/prof.jpeg" 
            alt="Background" 
            className="absolute w-full h-full object-cover" 
          />
        </video>

        {/* Overlay avec gradient animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-gradient" />
        
        {/* Effet de brillance qui traverse l'écran */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine" />
        </div>

        {/* Particules brillantes flottantes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Effet de grille holographique subtil */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

        {/* Overlay léger pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Indicateur de scroll discret */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
      </section>

      {/* Section 2: Votre bloc de présentation original */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="line-clamp-2 sm:line-clamp-1">{t("championBadge")}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  {t("titleExcellence")}
                  <span className="text-primary">{t("titleInnovation")}</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty text-justify">
                  {t("description")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto" asChild>
                  <Link href="/cv">
                    <FileText className="mr-2 h-5 w-5" />
                    {t("viewCV")}
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/distinctions">
                    {t("myAchievements")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{t("internationalAwards")}</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">10+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{t("certifications")}</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{t("majorEvents")}</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative mt-8 lg:mt-0">
              <Card className="p-6 sm:p-8 bg-card/50 backdrop-blur">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <Image
                    src="/prof.jpeg"
                    alt={t("name")}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="mt-4 sm:mt-6 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">{t("name")}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{t("jobTitle")}</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}