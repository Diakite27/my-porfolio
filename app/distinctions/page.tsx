"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Award,
  Calendar,
  Trophy,
  Globe,
  Crown,
  Flag,
  Mic,
  Building,
  ChevronLeft,
  ChevronRight,
  Filter,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

const realisationsData = [
  {
    id: 1,
    type: "prix",
    title: "Prix National d'Excellence du Meilleur Talent Numérique 2025",
    category: "Présidence de la République de Côte d'Ivoire",
    year: "08/2025",
    description:
      "Reconnaissance officielle du Président de la République pour mes contributions exceptionnelles à la promotion et à l'innovation technologique et à l'impact social positif.",
    details:
      `En 2024, Monsieur Yacouba DIAKITE, ingénieur en Data Science et
Intelligence Artificielle (IA), diplômé de l’ESATIC, a remporté le Premier
Prix mondial dans la catégorie Cloud Computing, parmi plus de
170 000 candidats issus de 80 pays, dont la Chine, le Brésil, la Turquie,
la Colombie et l’Égypte. Fort de cette performance remarquable, il
a été nommé Ambassadeur de la Huawei ICT Competition 2025 et
désigné coach de l’équipe ivoirienne.
Sous sa direction, une équipe composée de Othniel Kouamé N’DRI,
Lewis BALOGOU, tous deux diplômés de l’ESATIC et Ismaël Aziz
BAKAYOKO diplômé de l’Université Polytechnique de Bingerville,
a représenté la Côte d’Ivoire dans la spécialité Cloud Computing,
couvrant les domaines du Cloud Services (45%), de l’IA (40%)
et du Big Data (15%). Cette édition 2025 a réuni plus de 210 000
participants, issus de 2 000 universités réparties dans plus de 100
pays.
L’équipe ivoirienne a remporté encore une fois le Premier Prix mondial,
en hissant la Côte d’Ivoire au rang des six nations championnes du
monde dans cette spécialité.
Ce prix consacre le génie de la jeunesse ivoirienne dans le domaine des
technologies numériques, ainsi que sa contribution au rayonnement
international de la Côte d’Ivoire.`,
    images: [
        "/pne5.jpeg",
        "/pne1.jpeg",
        "/pne3.jpeg",
        "/pne4.jpeg",
      ],
    icon: Trophy,
    color: "primary",
  },
  {
    id: 2,
    type: "prix",
    title: "Rencontre avec prof. 𝐀𝐝𝐚𝐦𝐚 𝐃𝐈𝐀𝐖𝐀𝐑𝐀, Ministre de l'Enseignement Supérieur",
    category: "Ministère de l'Enseignement Supérieur",
    year: "08/2025",
    description:
      "Félicité par le ministre pour mes performances académiques exceptionnelles. Il m'a encouragé à poursuivre sur la voie de l’excellence.",
    details:
      "Félicité par le ministre pour mes performances académiques exceptionnelles. Il m'a encouragé à poursuivre sur la voie de l’excellence.",
    images: [
      "/prize/es2.jpeg",
      "/prize/es1.jpeg",
      "/prize/es3.jpeg",
    ],
    icon: Trophy,
    color: "accent",
  },
  {
    id: 3,
    type: "evenement",
    title: "Invité spécial à l'Ivoire Tech Forum 2025",
    category: "Ministère de la Transition Numérique",
    year: "07/2025",
    description: "Le jeudi 10 juillet 2025, j'ai été invité à la cérémonie d’ouverture officielle de l’Ivoire Tech Forum 2025 qui s’est tenue au Sofitel Abidjan Hôtel Ivoire, lançant trois jours d’échanges et d’initiatives visant à positionner le payscomme un hub digital régional.",
    details:
      `
      Le jeudi 10 juillet 2025, la cérémonie d’ouverture officielle de l’Ivoire Tech Forum 2025 s’est tenue au
      Sofitel Abidjan Hôtel Ivoire, lançant trois jours d’échanges et d’initiatives visant à positionner le pays
      comme un hub digital régional.
      Placée sous le parrainage du Premier ministre, Chef du gouvernement, ministre des Sports et du Cadre
      de Vie, Dr Robert Beugré Mambé, la rencontre bénéficie également du co-parrainage de Mme Françoise
      Remarck, ministre de la Culture et de la Francophonie, et de M. Mamadou Touré, ministre de la
      Promotion de la Jeunesse, de l’Insertion Professionnelle et du Service Civique.
      Organisé par le ministère de la Transition Numérique et de la Digitalisation, sous le leadership du
      ministre Kalil Konaté, l’Ivoire Tech Forum ambitionne de placer le numérique au cœur du
      développement, en promouvant l’innovation, l’inclusion et la souveraineté digitale. Prévu du 9 au 11
      juillet, il se tient autour du thème : « Le numérique au service de tous : comment les nouvelles
      technologies transforment notre quotidien »
      .`,
    images: [
        "/itf5.jpeg",
        "/itf3.jpeg",
        "/itf1.jpeg",
      ],
    icon: Calendar,
    color: "primary",
  },
  {
    id: 4,
    type: "prix",
    title: "Rencontre avec M. Amadou Coulibaly, Ministre de la Communication et Porte-parole du Gouvernement",
    category: "Ministère de la Communication",
    year: "08/2025",
    description:
      "Echange fructueux avec le ministre sur l'insertion professionnelle des jeunes diplômés en TIC et les opportunités dans le secteur du numériques.",
    details:
      "Echange fructueux avec le ministre sur l'insertion professionnelle des jeunes diplômés en TIC et les opportunités dans le secteur du numériques. Je lui ai présenté mes prix internationaux et mes projets d'innovation technologique.",
    images: [
      "/prize/mc3.jpeg",
      "/prize/mc2.jpeg",
      "/prize/mc1.jpeg",
    ],
    icon: Trophy,
    color: "accent",
  },
  {
    id: 5,
    type: "evenement",
    title: "Invité spécial à la fête de l'Indépendance de la Côte d'Ivoire 2025",
    category: "Gouvernement de Côte d'Ivoire",
    year: "08/2025",
    description: "Le 07 août 2025, j'ai été invité à la cérémonie officielle de la fête de l'Indépendance de la Côte d'Ivoire, en reconnaissance de mes contributions exceptionnelles dans le domaine du numérique et de la technologie.",
    details:
      "Le 07 août 2025, j'ai été invité à la cérémonie officielle de la fête de l'Indépendance de la Côte d'Ivoire, en reconnaissance de mes contributions exceptionnelles dans le domaine du numérique et de la technologie. Cet honneur souligne l'importance de l'innovation technologique pour le développement national.",
    images: ["/event/ind.jpeg",],
    icon: Calendar,
    color: "primary",
  },
  {
    id: 6,
    type: "evenement",
    title: "Visite de Courtoisie au Vitib à Grand-Bassam",
    category: "VITIB S.A.",
    year: "08/2025",
    description:
      "Visite de courtoisie au Village des Technologies de l’Information et de la Biotechnologie (VITIB S.A.) à Grand-Bassam pour exprimer ma gratitude envers leur soutien dans mon parcours académique et professionnel.",
    details:
      `
      Dans le cadre de mon parcours académique cette année, j’ai eu l’honneur de bénéficier du soutien du 𝗩𝗶𝗹𝗹𝗮𝗴𝗲 𝗱𝗲𝘀 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝗶𝗲𝘀 𝗱𝗲 𝗹’𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 𝗲𝘁 𝗱𝗲 𝗹𝗮 𝗕𝗶𝗼𝘁𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝗶𝗲 (VITIB S.A.). 

      C’est donc animé d’un profond sentiment de reconnaissance que je me suis rendu à Grand-Bassam pour une visite de courtoisie, dans le but d’exprimer mes sincères remerciements à M. Mebeti Dosso, Directeur Général du VITIB, représenté ce jour par Yann-Gabriel N'Zi, ainsi qu’à toute l’équipe de direction. 

      Cette rencontre fut également l’occasion de leur 𝗽𝗿𝗲́𝘀𝗲𝗻𝘁𝗲𝗿 𝗹𝗲𝘀 𝗱𝗶𝗳𝗳𝗲́𝗿𝗲𝗻𝘁𝘀 𝗽𝗿𝗶𝘅 𝗲𝘁 𝗱𝗶𝘀𝘁𝗶𝗻𝗰𝘁𝗶𝗼𝗻𝘀 𝗼𝗯𝘁𝗲𝗻𝘂𝘀 𝗮𝘂 𝗰𝗼𝘂𝗿𝘀 𝗱𝗲 𝗹’𝗮𝗻𝗻𝗲́𝗲, 𝗿𝗲𝗳𝗹𝗲𝘁𝘀 𝗱𝗲𝘀 𝗲𝗳𝗳𝗼𝗿𝘁𝘀 𝗰𝗼𝗻𝗷𝗼𝗶𝗻𝘁𝘀 𝗲𝘁 𝗱𝗲 𝗹’𝗶𝗺𝗽𝗮𝗰𝘁 𝗱𝗲 𝗹𝗲𝘂𝗿 𝗮𝗽𝗽𝘂𝗶 𝗯𝗶𝗲𝗻𝘃𝗲𝗶𝗹𝗹𝗮𝗻𝘁.

      Au cours de cette visite enrichissante, j’ai eu l’opportunité de découvrir :
      - Les infrastructures modernes et les différents blocs opérationnels du VITIB ;
      - Les entreprises innovantes installées sur les sites ;
      - Les datacenters de dernière génération ;
      - Les espaces de formation et les salles de conférence ;
      - L’écosystème dynamique dédié à l’innovation et à l’entrepreneuriat numérique.

      𝗟𝗲 𝗩𝗜𝗧𝗜𝗕 𝘀’𝗶𝗺𝗽𝗼𝘀𝗲 𝗮𝘂𝗷𝗼𝘂𝗿𝗱’𝗵𝘂𝗶 𝗰𝗼𝗺𝗺𝗲 𝘂𝗻 𝘃𝗲́𝗿𝗶𝘁𝗮𝗯𝗹𝗲 𝗽𝗼̂𝗹𝗲 𝘁𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝗶𝗾𝘂𝗲 𝗲𝗻 𝗔𝗳𝗿𝗶𝗾𝘂𝗲 𝗱𝗲 𝗹’𝗢𝘂𝗲𝘀𝘁, 𝗺𝗼𝘁𝗲𝘂𝗿 𝗱𝗲 𝗹𝗮 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 𝗱𝗶𝗴𝗶𝘁𝗮𝗹𝗲, 𝗱𝗲 𝗹𝗮 𝗿𝗲𝗰𝗵𝗲𝗿𝗰𝗵𝗲 𝗲𝘁 𝗱𝘂 𝗱𝗲́𝘃𝗲𝗹𝗼𝗽𝗽𝗲𝗺𝗲𝗻𝘁 𝗱𝗲 𝗰𝗼𝗺𝗽𝗲́𝘁𝗲𝗻𝗰𝗲𝘀.

      Je suis honoré d’avoir pu visiter ce haut lieu d’innovation et d’avoir échangé avec ses acteurs clés.
      .`,
    images: [
      "/event/v1.jpeg",
      "/event/v2.jpeg",
      "/event/v3.jpeg",
      "/event/v4.jpeg"
    ],
    icon: Calendar,
    color: "primary",
  },

  {
    id: 7,
    type: "prix",
    title: "Rencontre avec le Ministre Danho Paulin Claude, Député-Maire de la Commune d'Attecoubé",
    category: "Mairie d'Attecoubé",
    year: "08/2025",
    description:
      "Présentation de mes distinctions au maire et discussion sur les opportunités de collaboration pour le développement technologique local.",
    details:
      "Présentation de mes distinctions au maire et discussion sur les opportunités de collaboration pour le développement technologique local.",
    images: [
      "/prize/m1.jpeg",
      "/prize/m2.jpeg",
      "/prize/m3.jpeg",
    ],
    icon: Trophy,
    color: "accent",
  },
  {
    id: 8,
    type: "evenement",
    title: "Viva Technology 2025 à Paris",
    category: "Viva Technology",
    year: "06/2025",
    description: "Participation à Viva Technology 2025, le plus grand salon européen dédié à l'innovation technologique et aux startups, où j'ai pu découvrir les dernières tendances en matière de technologie et d'innovation, et échanger avec des leaders du secteur.",
    details:
      "Participation à Viva Technology 2025, le plus grand salon européen dédié à l'innovation technologique et aux startups, où j'ai pu découvrir les dernières tendances en matière de technologie et d'innovation, et échanger avec des leaders du secteur.",
    images: ["/event/viva.jpeg",],
    icon: Calendar,
    color: "primary",
  },
  {
    id: 9,
    type: "prix",
    title: "Lauréat de Premier Prix Mondial en IA, Big Data & Cloud 2025 à Shenzhen, CHINE",
    category: "Huawei",
    year: "05/2025",
    description:
      "Coach de l’équipe nationale de la Côte d’Ivoire, lauréate du Premier Prix Mondial lors de la Huawei ICT Competition 2025, une édition réunissant plus de 200 000 étudiants issus de 100 pays.",
    details:
      "Coach de l’équipe nationale de la Côte d’Ivoire, lauréate du Premier Prix Mondial lors de la Huawei ICT Competition 2025, une édition réunissant plus de 200 000 étudiants issus de 100 pays.",
    images: [
      "/ic1.jpeg",
      "/ic2.jpeg",
      "/ic3.jpeg",
    ],
    icon: Trophy,
    color: "accent",
  },
  {
    id: 10,
    type: "prix",
    title: "Ambassadeur de la Huawei ICT Competition 2025 à Beijing, CHINE",
    category: "Huawei",
    year: "09/2024",
    description:
      "Coach de l’équipe nationale de la Côte d’Ivoire, lauréate du Premier Prix Mondial lors de la Huawei ICT Competition 2025, une édition réunissant plus de 200 000 étudiants issus de 100 pays.",
    details:
      `Nommé ambassadeur de la Huawei ICT Competition 2025 en présence du Vice-Président
        de la République de Côte d’Ivoire, avec pour mission de promouvoir la compétition au niveau
        national et d’accompagner l’émergence des jeunes talents ivoiriens dans le domaine des
        Technologies de l’Information et de la Communication (TIC)`,
    images: [
      "/prize/amb1.jpeg",
      "/prize/amb2.jpeg",
      "/prize/amb3.jpeg",
      "/prize/amb4.jpeg"
    ],
    icon: Trophy,
    color: "accent",
  },
  {
    id: 11,
    type: "evenement",
    title: "Forum Economique Sino-Ivoirien 2024 à Pékin, CHINE",
    category: "Gouvernement de Côte d'Ivoire",
    year: "09/2024",
    description: "Participation au Forum Economique Sino-Ivoirien 2024 à Pékin, Chine, en tant que représentant des jeunes talents ivoiriens dans le domaine des TIC.",
    details:
      "Participation au Forum Economique Sino-Ivoirien 2024 à Pékin, Chine, en tant que représentant des jeunes talents ivoiriens dans le domaine des TIC.",
    images: [
      "/event/cc1.jpeg",
      "/event/cc2.jpeg",
      "/event/cc3.jpeg",
      "/event/cc4.jpeg"
    ],
    icon: Calendar,
    color: "primary",
  },
  {
    id: 12,
    type: "prix",
    title: "Audience avec le Ministre de la Communication et Porte-parole du Gouvernement",
    category: "Ministère de la Communication",
    year: "06/2024",
    description: "Suite à ma victoire à la Huawei ICT Competition 2024, j'ai eu l'honneur d'être reçu en audience par le Ministre de la Communication, M. Amadou Coulibaly, pour me féliciter très chaleureusement du grand travail accompli.",
    details:
      "Suite à ma victoire à la Huawei ICT Competition 2024, j'ai eu l'honneur d'être reçu en audience par le Ministre de la Communication, M. Amadou Coulibaly, pour me féliciter très chaleureusement du grand travail accompli.",
    images: [
      "/prize/mcp1.jpeg",
      "/prize/mcp2.jpeg",
      "/prize/mcp3.jpeg",
      "/prize/mcp4.jpeg"
    ],
    icon: Trophy,
    color: "primary",
  },
  {
    id: 13,
    type: "prix",
    title: "Audience avec le Ministre de l'Enseignement Supérieur et de la Recherche Scientifique",
    category: "Ministère de l'Enseignement Supérieur",
    year: "06/2024",
    description: "Recognition officielle du Ministre de l'Enseignement Supérieur, Prof. Adama DIAWARA, pour mon excellence académique à travers mes moyennes et mes victoires internationales.",
    details:
      "Recognition officielle du Ministre de l'Enseignement Supérieur, Prof. Adama DIAWARA, pour mes contributions exceptionnelles à la promotion et à l'innovation technologique à travers mes victoires internationales.",
    images: [
      "/prize/ms1.jpeg",
      "/prize/ms2.jpeg",
      "/prize/ms3.jpeg",
      "/prize/ms4.jpeg"
    ],
    icon: Trophy,
    color: "primary",
  },
  
  {
    id: 14,
    type: "prix",
    title: "Reçu et célébré par le Ministère de la Transition Numérique et de la Digitalisation pour ma victoire mondiale à la Huawei ICT Competition 2024",
    category: "Ministère de la Transition Numérique",
    year: "06/2024",
    description: "J'ai eu l'honneur d'être reçu et célébré par le Ministère de la Transition Numérique et de la Digitalisation pour ma victoire mondiale à la Huawei ICT Competition 2024.",
    details:
      "J'ai eu l'honneur d'être reçu et célébré par le Ministère de la Transition Numérique et de la Digitalisation pour ma victoire mondiale à la Huawei ICT Competition 2024.",
    images: [
      "/prize/mt1.jpeg",
      "/prize/mt2.jpeg",
      "/prize/mt3.jpeg",
      "/prize/mt4.jpeg"
    ],
    icon: Trophy,
    color: "primary",
  },
  {
    id: 15,
    type: "evenement",
    title: "Accueilli en heros à l'aéroport FHB d'Abidjan après ma victoire mondiale à la Huawei ICT Competition 2024",
    category: "ESATIC",
    year: "06/2024",
    description: "J'ai été accueilli en héros à l'aéroport FHB d'Abidjan après ma victoire mondiale à la Huawei ICT Competition 2024, en présence de mes professeurs, parents, camarades et médias.",
    details:
      "J'ai été accueilli en héros à l'aéroport FHB d'Abidjan après ma victoire mondiale à la Huawei ICT Competition 2024, en présence de mes professeurs, parents, camarades et médias.",
    images: [
      "/event/cm1.jpeg",
      "/event/cm2.jpeg",
      "/event/cm3.jpeg",
      "/event/cm4.jpeg"
    ],
    icon: Calendar,
    color: "primary",
  },
  {
    id: 16,
    type: "prix",
    title: "Lauréat de Premier Prix Mondial 2024 en Computing à Shenzhen, CHINE",
    category: "ESATIC",
    year: "05/2024",
    description: "J'ai remporté le Premier Prix Mondial en Computing lors de la Huawei ICT Competition 2024 à Shenzhen, Chine, parmi plus de 170 000 candidats issus de 80 pays.",
    details:
      "J'ai remporté le Premier Prix Mondial en Computing lors de la Huawei ICT Competition 2024 à Shenzhen, Chine, parmi plus de 170 000 candidats issus de 80 pays.",
    images: [
      "/prize/c2.jpeg",
      "/prize/c1.jpeg",
      "/prize/c3.jpeg",
      "/prize/c4.jpeg"
    ],
    icon: Trophy,
    color: "primary",
  },
]

export default function DistinctionsPage() {
  const [filter, setFilter] = useState("toutes")
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredData = realisationsData.filter((item) => {
    if (filter === "toutes") return true
    if (filter === "prix") return item.type === "prix"
    if (filter === "evenements") return item.type === "evenement"
    return true
  })

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => (prev === selectedItem.images.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedItem.images.length - 1 : prev - 1))
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <Badge variant="secondary" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Réalisations
            </Badge>
            <h1 className="text-4xl font-bold mb-6 text-balance">Prix & Événements</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Découvrez mes distinctions internationales et ma participation aux plus grands événements mondiaux
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-4">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <div className="flex gap-2">
                <Button
                  variant={filter === "toutes" ? "default" : "outline"}
                  onClick={() => setFilter("toutes")}
                  size="sm"
                >
                  Toutes
                </Button>
                <Button variant={filter === "prix" ? "default" : "outline"} onClick={() => setFilter("prix")} size="sm">
                  <Trophy className="w-4 h-4 mr-2" />
                  Prix
                </Button>
                <Button
                  variant={filter === "evenements" ? "default" : "outline"}
                  onClick={() => setFilter("evenements")}
                  size="sm"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Événements
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredData.map((item) => {
                const IconComponent = item.icon
                return (
                  <Dialog
                    key={item.id}
                    onOpenChange={(open) => {
                      if (open) {
                        setSelectedItem(item)
                        setCurrentImageIndex(0)
                      }
                    }}
                  >
                    <DialogTrigger asChild>
                      <Card className="group hover:shadow-xl transition-all duration-500 cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div
                              className={`w-12 h-12 bg-${item.color}/10 rounded-full flex items-center justify-center group-hover:bg-${item.color}/20 transition-colors`}
                            >
                              <IconComponent className={`w-6 h-6 text-${item.color}`} />
                            </div>
                            <div>
                              <Badge variant="secondary" className="text-xs">
                                {item.year}
                              </Badge>
                            </div>
                          </div>

                          <div className="mb-3">
                            <Badge
                              variant={item.type === "prix" ? "default" : "outline"}
                              className={item.type === "prix" ? `bg-${item.color}` : ""}
                            >
                              {item.category}
                            </Badge>
                          </div>

                          <h3 className="font-semibold mb-3 text-balance">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-justify">{item.description}</p>

                          <div className="aspect-video rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                            <img
                              src={item.images[0] || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>

                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{item.title}</DialogTitle>
                      </DialogHeader>

                      <div className="space-y-6">
                        {/* Image Carousel */}
                        <div className="relative">
                          <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                            <img
                              src={selectedItem?.images[currentImageIndex] || "/placeholder.svg"}
                              alt={`${selectedItem?.title} - Image ${currentImageIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {selectedItem?.images.length > 1 && (
                            <>
                              <Button
                                variant="outline"
                                size="icon"
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                                onClick={prevImage}
                              >
                                <ChevronLeft className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="icon"
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                                onClick={nextImage}
                              >
                                <ChevronRight className="w-4 h-4" />
                              </Button>

                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {selectedItem.images.map((_, index) => (
                                  <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                      index === currentImageIndex ? "bg-primary" : "bg-white/50"
                                    }`}
                                    onClick={() => setCurrentImageIndex(index)}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </div>

                        {/* Details */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <Badge variant={selectedItem?.type === "prix" ? "default" : "outline"}>
                              {selectedItem?.category}
                            </Badge>
                            <Badge variant="secondary">{selectedItem?.year}</Badge>
                          </div>

                          <p className="text-muted-foreground leading-relaxed text-justify">{selectedItem?.details}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}