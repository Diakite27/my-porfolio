"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Calendar, ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/navigation"

const translations = {
  fr: {
    sectionTag: "Actualités",
    sectionTitle: "Parcours d'Excellence",
    sectionSubtitle: "Les moments clés qui ont marqué mon parcours international",
    learnMore: "En savoir plus",
    viewAll: "Toutes mes distinctions",
    highlights: [
      {
        title: "Prix National d'Excellence 2025 — Meilleur Talent Numérique",
        description: "Reconnu par le Président de la République comme le Meilleur Talent Numérique et Technologique de Côte d'Ivoire 2025, lors de la cérémonie au Palais de la Présidence.",
        date: "Août 2025 · Abidjan",
      },
      {
        title: "Ivoire Tech Forum 2025",
        description: "Invité à la cérémonie d'ouverture officielle de l'Ivoire Tech Forum 2025 au Sofitel Abidjan Hôtel Ivoire, trois jours d'échanges pour positionner le pays comme hub digital régional.",
        date: "Juillet 2025 · Abidjan",
      },
      {
        title: "1er Prix Mondial en IA, Big Data & Cloud 2025",
        description: "Coach de l'équipe nationale de Côte d'Ivoire, lauréate du Premier Prix Mondial lors de la Huawei ICT Competition 2025, réunissant plus de 200 000 étudiants de 100 pays.",
        date: "Mai 2025 · Shenzhen, Chine",
      },
      {
        title: "Audience avec le Premier Ministre",
        description: "Reçu en audience par le Premier Ministre Dr. Beugré Mambé, accompagné du Ministre de la Transition Numérique et du DG de l'ESATIC, suite à ma victoire à la Huawei ICT Competition 2024.",
        date: "Juin 2024 · Abidjan",
      },
      {
        title: "Viva Technology 2025 — Paris",
        description: "Participation au plus grand salon européen dédié à l'innovation technologique et aux startups, échanges avec des leaders du secteur tech mondial.",
        date: "Juin 2025 · Paris",
      },
      {
        title: "Ambassadeur Huawei ICT Competition 2025",
        description: "Nommé ambassadeur en présence du Vice-Président de la République, avec pour mission de promouvoir la compétition et accompagner l'émergence des jeunes talents ivoiriens en TIC.",
        date: "Sept. 2024 · Beijing, Chine",
      },
    ],
  },
  en: {
    sectionTag: "News",
    sectionTitle: "Path of Excellence",
    sectionSubtitle: "Key moments that shaped my international journey",
    learnMore: "Learn more",
    viewAll: "All my achievements",
    highlights: [
      {
        title: "2025 National Excellence Award — Best Digital Talent",
        description: "Recognized by the President of the Republic as the Best Digital and Technological Talent of Côte d'Ivoire 2025, during the ceremony at the Presidential Palace.",
        date: "August 2025 · Abidjan",
      },
      {
        title: "Ivoire Tech Forum 2025",
        description: "Invited to the official opening ceremony of Ivoire Tech Forum 2025 at Sofitel Abidjan Hotel Ivoire, three days of exchanges to position the country as a regional digital hub.",
        date: "July 2025 · Abidjan",
      },
      {
        title: "1st World Prize in AI, Big Data & Cloud 2025",
        description: "Coach of the national team of Côte d'Ivoire, winner of the First World Prize at Huawei ICT Competition 2025, bringing together over 200,000 students from 100 countries.",
        date: "May 2025 · Shenzhen, China",
      },
      {
        title: "Audience with the Prime Minister",
        description: "Received in audience by Prime Minister Dr. Beugré Mambé, accompanied by the Minister of Digital Transition and the DG of ESATIC, following my victory at Huawei ICT Competition 2024.",
        date: "June 2024 · Abidjan",
      },
      {
        title: "Viva Technology 2025 — Paris",
        description: "Participation in Europe's largest trade fair dedicated to technological innovation and startups, exchanges with global tech sector leaders.",
        date: "June 2025 · Paris",
      },
      {
        title: "Huawei ICT Competition 2025 Ambassador",
        description: "Appointed ambassador in the presence of the Vice President of the Republic, with the mission to promote the competition and support the emergence of young Ivorian ICT talents.",
        date: "Sept. 2024 · Beijing, China",
      },
    ],
  },
}

const highlightsData = [
  {
    href: "https://www.lemandatexpress.net/2025/08/06/laureats-du-prix-national-dexcellence-2025-le-ministre-kalil-konate-salue-lemergence-de-talents-formes-localement/",
    images: ["/pne5.jpeg", "/pne1.jpeg", "/pne3.jpeg", "/pne4.jpeg"],
    icon: "🏅",
  },
  {
    href: "https://www.ivoiretechforum.com/",
    images: ["/itf5.jpeg", "/itf3.jpeg", "/itf1.jpeg"],
    icon: "🎤",
  },
  {
    href: "https://infodirecte.net/huawei-ict-competition-la-cote-divoire-doublement-sacree-championne-en-informatique",
    images: ["/ic1.jpeg", "/ic2.jpeg", "/ic3.jpeg"],
    icon: "🏆",
  },
  {
    href: "",
    images: ["/prize/pm3.jpeg", "/prize/pm4.jpeg", "/prize/pm1.jpeg"],
    icon: "🤝",
  },
  {
    href: "https://vivatechnology.com/",
    images: ["/event/viva.jpeg"],
    icon: "🚀",
  },
  {
    href: "",
    images: ["/prize/amb1.jpeg", "/prize/amb2.jpeg", "/prize/amb3.jpeg", "/prize/amb4.jpeg"],
    icon: "🌍",
  },
]

export function RecentHighlights() {
  const { language } = useLanguage()
  const t = translations[language]
  const highlights = highlightsData.map((data, idx) => ({
    ...data,
    ...t.highlights[idx],
  }))

  const [imageIndexes, setImageIndexes] = useState<number[]>(highlights.map(() => 0))

  const handlePrev = (idx: number) => {
    setImageIndexes((prev) =>
      prev.map((val, i) =>
        i === idx ? (val === 0 ? highlights[idx].images.length - 1 : val - 1) : val
      )
    )
  }

  const handleNext = (idx: number) => {
    setImageIndexes((prev) =>
      prev.map((val, i) =>
        i === idx ? (val === highlights[idx].images.length - 1 ? 0 : val + 1) : val
      )
    )
  }

  return (
    <section className="py-24 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-[#00D4FF] border border-[#00D4FF]/20 bg-[#00D4FF]/5 mb-4">
            {t.sectionTag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            {t.sectionTitle}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => {
            const currentImage = item.images[imageIndexes[index]]
            return (
              <Card
                key={index}
                className="group bg-[#0C0C10] border-[#1E1E24] hover:border-[#C9A84C]/30 transition-all duration-500 overflow-hidden card-glow"
              >
                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={currentImage}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C10] via-transparent to-transparent" />

                  {/* Carousel controls */}
                  {item.images.length > 1 && (
                    <>
                      <button
                        onClick={() => handlePrev(index)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleNext(index)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {item.images.map((_: string, imgIdx: number) => (
                          <button
                            key={imgIdx}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                              imgIdx === imageIndexes[index]
                                ? "bg-[#C9A84C] w-4"
                                : "bg-white/40 hover:bg-white/60"
                            }`}
                            onClick={() =>
                              setImageIndexes((prev) =>
                                prev.map((val, i) => (i === index ? imgIdx : val))
                              )
                            }
                            aria-label={`Image ${imgIdx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Icon badge */}
                  <div className="absolute top-3 left-3 text-2xl">{item.icon}</div>
                </div>

                <CardContent className="p-5 space-y-3">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 text-[#C9A84C]" />
                    <span>{item.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-foreground leading-snug group-hover:text-[#C9A84C] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Link */}
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[#00D4FF] hover:text-[#00D4FF]/80 transition-colors pt-1"
                    >
                      {t.learnMore}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-[#C9A84C]/30 hover:border-[#C9A84C]/60 hover:bg-[#C9A84C]/5 text-foreground"
            asChild
          >
            <Link href="/distinctions">
              {t.viewAll}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
