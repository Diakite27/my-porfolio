"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Calendar, BookOpen, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export function RecentHighlights() {
  const highlights = [
    {
      type: "distinction",
      title: "Prix National d'Excellence du Meilleur Talent Numérique 2025",
      description: "Reconnu par le Président de la République comme le Meilleur Talent Numérique et Technologique de Côte d’Ivoire 2025, lors de la cérémonie de la journée de l'Excellence tenue au Palais de la Présidence.",
      date: "Août 2025 à Abidjan, CÔTE D'IVOIRE",
      icon: Award,
      href: "https://www.lemandatexpress.net/2025/08/06/laureats-du-prix-national-dexcellence-2025-le-ministre-kalil-konate-salue-lemergence-de-talents-formes-localement/",
      images: [
        "/pne5.jpeg",
        "/pne1.jpeg",
        "/pne3.jpeg",
        "/pne4.jpeg",
      ],
    },
    {
      type: "event",
      title: "Ivoire Tech Forum 2025",
      description: "Le jeudi 10 juillet 2025, j'ai été invité à la cérémonie d’ouverture officielle de l’Ivoire Tech Forum 2025 qui s’est tenue au Sofitel Abidjan Hôtel Ivoire, lançant trois jours d’échanges et d’initiatives visant à positionner le payscomme un hub digital régional.",
      date: "Juillet 2025 à Abidjan, CÔTE D'IVOIRE",
      icon: Calendar,
      href: "https://www.ivoiretechforum.com/",
      images: [
        "/itf5.jpeg",
        "/itf3.jpeg",
        "/itf1.jpeg",
      ],
    },
    {
      type: "distinction",
      title: "Lauréat de Premier Prix Mondial en IA, Big Data & Cloud 2025",
      description: "Coach de l’équipe nationale de la Côte d’Ivoire, lauréate du Premier Prix Mondial lors de la Huawei ICT Competition 2025, une édition réunissant plus de 200 000 étudiants issus de 100 pays.",
      date: "Mai 2025 à Shenzhen, CHINE",
      icon: Award,
      href: "https://infodirecte.net/huawei-ict-competition-la-cote-divoire-doublement-sacree-championne-en-informatique",
      images: [
        "/ic1.jpeg",
        "/ic2.jpeg",
        "/ic3.jpeg",
      ],
    },
    {
      type: "distinction",
      title: "Audience avec le Premier Ministre de la République de Côte d'Ivoire",
      description: "Suite à ma victoire à la Huawei ICT Competition 2024, j'ai eu l'honneur d'être reçu en audience par le Premier Ministre ivoirien, Dr. Beugré Mambé, accompagné du Ministre de la Transition Numérique, M. Kalil Konaté et du Directeur Général de l'ESATIC, prof. Adama Konaté pour me féliciter du grand travail accompli.",
      date: "Juin 2024 à Abidjan, CÔTE D'IVOIRE",
      icon: Award,
      href: "",
      images: [
        "/prize/pm3.jpeg",
        "/prize/pm4.jpeg",
        "/prize/pm1.jpeg",
      ],
    },
    {
      type: "evenement",
      title: "Viva Technology 2025 à Paris",
      description: "Participation à Viva Technology 2025, le plus grand salon européen dédié à l'innovation technologique et aux startups, où j'ai pu découvrir les dernières tendances en matière de technologie et d'innovation, et échanger avec des leaders du secteur.",
      date: "Juin 2025 à Paris, FRANCE",
      icon: Award,
      href: "https://vivatechnology.com/",
      images: [
        "/event/viva.jpeg",
      ],
    },
    {
      type: "event",
      title: "Ambassadeur de la Huawei ICT Competition 2025",
      description: `Nommé ambassadeur de la Huawei ICT Competition 2025 en présence du Vice-Président
        de la République de Côte d’Ivoire, avec pour mission de promouvoir la compétition au niveau
        national et d’accompagner l’émergence des jeunes talents ivoiriens dans le domaine des
        Technologies de l’Information et de la Communication (TIC)`,
      date: "Septembre 2024 à Beijing, CHINE",
      icon: Calendar,
      href: "",
      images: [
        "/prize/amb1.jpeg",
        "/prize/amb2.jpeg",
        "/prize/amb3.jpeg",
        "/prize/amb4.jpeg",
      ],
    },
  ]

  // State to track current image index for each highlight
  const [imageIndexes, setImageIndexes] = useState<number[]>(highlights.map(() => 0))

  const handlePrev = (idx: number) => {
    setImageIndexes((prev) =>
      prev.map((val, i) =>
        i === idx
          ? val === 0
            ? highlights[idx].images.length - 1
            : val - 1
          : val
      )
    )
  }

  const handleNext = (idx: number) => {
    setImageIndexes((prev) =>
      prev.map((val, i) =>
        i === idx
          ? val === highlights[idx].images.length - 1
            ? 0
            : val + 1
          : val
      )
    )
  }

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Actualités Récentes</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Découvrez mes dernières réalisations et contributions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            const currentImage = highlight.images?.[imageIndexes[index]] || "/placeholder.svg"
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{highlight.date}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Show image carousel if available */}
                  {highlight.images && highlight.images.length > 0 && (
                    <div className="aspect-video rounded-lg bg-muted mb-4 overflow-hidden flex items-center justify-center relative">
                      <img
                        src={currentImage}
                        alt={highlight.title}
                        className="w-full h-full object-cover"
                      />
                      {highlight.images.length > 1 && (
                        <>
                          <Button
                            variant="outline"
                            size="icon"
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                            onClick={() => handlePrev(index)}
                            tabIndex={-1}
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                            onClick={() => handleNext(index)}
                            tabIndex={-1}
                          >
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                            {highlight.images.map((_, imgIdx) => (
                              <button
                                key={imgIdx}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  imgIdx === imageIndexes[index] ? "bg-primary" : "bg-white/50"
                                }`}
                                onClick={() =>
                                  setImageIndexes((prev) =>
                                    prev.map((val, i) => (i === index ? imgIdx : val))
                                  )
                                }
                                tabIndex={-1}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                  <p className="text-muted-foreground mb-4 leading-relaxed text-justify">{highlight.description}</p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80" asChild>
                    <Link href={highlight.href}>
                      En savoir plus
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/distinctions">
              Voir toutes mes réalisations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}