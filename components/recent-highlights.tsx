"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Calendar, BookOpen, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/navigation"

// Traductions pour le composant
const translations = {
  fr: {
    sectionTitle: "Actualités Récentes",
    sectionSubtitle: "Découvrez mes dernières réalisations et contributions",
    learnMore: "En savoir plus",
    viewAll: "Voir toutes mes réalisations",
    highlights: [
      {
        title: "Prix National d'Excellence du Meilleur Talent Numérique 2025",
        description: "Reconnu par le Président de la République comme le Meilleur Talent Numérique et Technologique de Côte d'Ivoire 2025, lors de la cérémonie de la journée de l'Excellence tenue au Palais de la Présidence.",
        date: "Août 2025 à Abidjan, CÔTE D'IVOIRE",
      },
      {
        title: "Ivoire Tech Forum 2025",
        description: "Le jeudi 10 juillet 2025, j'ai été invité à la cérémonie d'ouverture officielle de l'Ivoire Tech Forum 2025 qui s'est tenue au Sofitel Abidjan Hôtel Ivoire, lançant trois jours d'échanges et d'initiatives visant à positionner le pays comme un hub digital régional.",
        date: "Juillet 2025 à Abidjan, CÔTE D'IVOIRE",
      },
      {
        title: "Lauréat de Premier Prix Mondial en IA, Big Data & Cloud 2025",
        description: "Coach de l'équipe nationale de la Côte d'Ivoire, lauréate du Premier Prix Mondial lors de la Huawei ICT Competition 2025, une édition réunissant plus de 200 000 étudiants issus de 100 pays.",
        date: "Mai 2025 à Shenzhen, CHINE",
      },
      {
        title: "Audience avec le Premier Ministre de la République de Côte d'Ivoire",
        description: "Suite à ma victoire à la Huawei ICT Competition 2024, j'ai eu l'honneur d'être reçu en audience par le Premier Ministre ivoirien, Dr. Beugré Mambé, accompagné du Ministre de la Transition Numérique, M. Kalil Konaté et du Directeur Général de l'ESATIC, prof. Adama Konaté pour me féliciter du grand travail accompli.",
        date: "Juin 2024 à Abidjan, CÔTE D'IVOIRE",
      },
      {
        title: "Viva Technology 2025 à Paris",
        description: "Participation à Viva Technology 2025, le plus grand salon européen dédié à l'innovation technologique et aux startups, où j'ai pu découvrir les dernières tendances en matière de technologie et d'innovation, et échanger avec des leaders du secteur.",
        date: "Juin 2025 à Paris, FRANCE",
      },
      {
        title: "Ambassadeur de la Huawei ICT Competition 2025",
        description: "Nommé ambassadeur de la Huawei ICT Competition 2025 en présence du Vice-Président de la République de Côte d'Ivoire, avec pour mission de promouvoir la compétition au niveau national et d'accompagner l'émergence des jeunes talents ivoiriens dans le domaine des Technologies de l'Information et de la Communication (TIC)",
        date: "Septembre 2024 à Beijing, CHINE",
      },
    ],
  },
  en: {
    sectionTitle: "Recent News",
    sectionSubtitle: "Discover my latest achievements and contributions",
    learnMore: "Learn more",
    viewAll: "View all my achievements",
    highlights: [
      {
        title: "2025 National Excellence Award for Best Digital Talent",
        description: "Recognized by the President of the Republic as the Best Digital and Technological Talent of Côte d'Ivoire 2025, during the Excellence Day ceremony held at the Presidential Palace.",
        date: "August 2025 in Abidjan, IVORY COAST",
      },
      {
        title: "Ivoire Tech Forum 2025",
        description: "On Thursday, July 10, 2025, I was invited to the official opening ceremony of Ivoire Tech Forum 2025 held at Sofitel Abidjan Hotel Ivoire, launching three days of exchanges and initiatives aimed at positioning the country as a regional digital hub.",
        date: "July 2025 in Abidjan, IVORY COAST",
      },
      {
        title: "Winner of First World Prize in AI, Big Data & Cloud 2025",
        description: "Coach of the national team of Côte d'Ivoire, winner of the First World Prize at the Huawei ICT Competition 2025, an edition bringing together more than 200,000 students from 100 countries.",
        date: "May 2025 in Shenzhen, CHINA",
      },
      {
        title: "Audience with the Prime Minister of the Republic of Côte d'Ivoire",
        description: "Following my victory at the Huawei ICT Competition 2024, I had the honor of being received in audience by the Ivorian Prime Minister, Dr. Beugré Mambé, accompanied by the Minister of Digital Transition, Mr. Kalil Konaté and the Director General of ESATIC, Prof. Adama Konaté to congratulate me on the great work accomplished.",
        date: "June 2024 in Abidjan, IVORY COAST",
      },
      {
        title: "Viva Technology 2025 in Paris",
        description: "Participation in Viva Technology 2025, the largest European trade fair dedicated to technological innovation and startups, where I was able to discover the latest trends in technology and innovation, and exchange with industry leaders.",
        date: "June 2025 in Paris, FRANCE",
      },
      {
        title: "Ambassador of Huawei ICT Competition 2025",
        description: "Appointed ambassador of the Huawei ICT Competition 2025 in the presence of the Vice President of the Republic of Côte d'Ivoire, with the mission to promote the competition at national level and support the emergence of young Ivorian talents in the field of Information and Communication Technologies (ICT)",
        date: "September 2024 in Beijing, CHINA",
      },
    ],
  },
}

export function RecentHighlights() {
  const { language } = useLanguage()
  
  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.fr] || key
  }

  const highlightsData = [
    {
      type: "distinction",
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
      icon: Award,
      href: "https://vivatechnology.com/",
      images: [
        "/event/viva.jpeg",
      ],
    },
    {
      type: "event",
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

  // Merge translations with data
  const highlights = highlightsData.map((data, idx) => ({
    ...data,
    title: t(`highlights`)[idx]?.title || "",
    description: t(`highlights`)[idx]?.description || "",
    date: t(`highlights`)[idx]?.date || "",
  }))

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
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("sectionTitle")}
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            {t("sectionSubtitle")}
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
                  <p className="text-muted-foreground mb-4 leading-relaxed text-justify">
                    {highlight.description}
                  </p>
                  {highlight.href && (
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80" asChild>
                      <Link href={highlight.href}>
                        {t("learnMore")}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/distinctions">
              {t("viewAll")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}