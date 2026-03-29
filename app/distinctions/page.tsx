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
import { useLanguage } from "@/components/navigation"

// Traductions
const translations = {
  fr: {
    backToHome: "Retour à l'accueil",
    achievements: "Réalisations",
    pageTitle: "Prix & Événements",
    pageSubtitle: "Découvrez mes distinctions internationales et ma participation aux plus grands événements mondiaux",
    filters: {
      all: "Toutes",
      awards: "Prix",
      events: "Événements",
    },
    items: [
      {
        title: "Prix National d'Excellence 2025 — Meilleur Talent Numérique",
        category: "🏅 Distinction Présidentielle · Abidjan",
        description: "Reconnu par le Président de la République comme le Meilleur Talent Numérique et Technologique de Côte d'Ivoire, lors de la Journée Nationale de l'Excellence au Palais de la Présidence.",
        details: "Lors de la cérémonie de la Journée Nationale de l'Excellence 2025, tenue au Palais de la Présidence de la République, j'ai reçu le Prix National d'Excellence du Meilleur Talent Numérique et Technologique de Côte d'Ivoire. Cette distinction présidentielle consacre l'ensemble de mon parcours : double champion du monde Huawei ICT, ambassadeur de la compétition, et acteur engagé dans la promotion des talents numériques ivoiriens à l'international.",
      },
      {
        title: "1er Prix Mondial en Cloud Computing — Huawei ICT Competition 2024",
        category: "🥇 Champion du Monde · Shenzhen, Chine",
        description: "Premier Prix Mondial en Computing parmi plus de 170 000 candidats issus de 80 pays. La Tunisie se hisse au rang des nations championnes du monde en informatique.",
        details: "Lors de la finale mondiale de la Huawei ICT Competition 2024 à Shenzhen, j'ai décroché le Premier Prix Mondial dans la catégorie Cloud Computing, face à plus de 170 000 candidats venus de 80 pays — dont la Chine, le Brésil, la Turquie, la Colombie et l'Égypte. Cette victoire historique a placé la Tunisie parmi les nations championnes du monde dans cette discipline.",
      },
      {
        title: "1er Prix Mondial en IA, Big Data & Cloud — Huawei ICT Competition 2025",
        category: "🥇 Double Champion du Monde · Shenzhen, Chine",
        description: "En tant que coach de l'équipe nationale ivoirienne, nous avons remporté le Premier Prix Mondial face à plus de 210 000 étudiants de 2 000 universités dans 100+ pays.",
        details: "Nommé coach de l'équipe nationale de Côte d'Ivoire pour l'édition 2025, j'ai encadré trois étudiants — Othniel Kouamé N'DRI, Lewis BALOGOU (diplômés de l'ESATIC) et Ismaël Aziz BAKAYOKO (Université Polytechnique de Bingerville) — dans la spécialité Cloud Computing couvrant Cloud Services (45%), IA (40%) et Big Data (15%). Face à plus de 210 000 participants issus de 2 000 universités dans plus de 100 pays, l'équipe a décroché le Premier Prix Mondial, confirmant le doublé historique de la Côte d'Ivoire.",
      },
      {
        title: "Ambassadeur Huawei ICT Competition 2025 — Cérémonie officielle à Beijing",
        category: "🌍 Nomination Internationale · Beijing, Chine",
        description: "Nommé ambassadeur mondial de la compétition en présence du Vice-Président de la République de Côte d'Ivoire, avec pour mission de promouvoir l'excellence numérique ivoirienne.",
        details: "Suite à ma victoire mondiale en 2024, j'ai été officiellement nommé Ambassadeur de la Huawei ICT Competition 2025 lors d'une cérémonie à Beijing, en présence du Vice-Président de la République de Côte d'Ivoire. Ma mission : promouvoir la compétition au niveau national, identifier et accompagner les jeunes talents ivoiriens dans les Technologies de l'Information et de la Communication, et porter le drapeau de la Côte d'Ivoire sur la scène tech mondiale.",
      },
      {
        title: "Accueil triomphal à l'aéroport FHB d'Abidjan",
        category: "🎉 Retour du Champion · Abidjan",
        description: "Accueilli en héros à l'aéroport Félix Houphouët-Boigny par mes professeurs, ma famille, mes camarades et les médias nationaux après ma victoire mondiale 2024.",
        details: "À mon retour de Shenzhen après la victoire mondiale à la Huawei ICT Competition 2024, j'ai été accueilli en héros à l'aéroport international Félix Houphouët-Boigny d'Abidjan. Professeurs de l'ESATIC, famille, camarades de promotion et journalistes étaient présents pour célébrer cette victoire historique pour la Côte d'Ivoire.",
      },
      {
        title: "Célébration officielle au Ministère de la Transition Numérique",
        category: "🏛️ Reconnaissance Gouvernementale · Abidjan",
        description: "Reçu et célébré par le Ministre Kalil Konaté et l'ensemble du cabinet pour ma victoire mondiale, symbole de l'excellence numérique ivoirienne.",
        details: "Le Ministère de la Transition Numérique et de la Digitalisation, sous la direction du Ministre Kalil Konaté, m'a officiellement reçu et célébré suite à ma victoire mondiale à la Huawei ICT Competition 2024. Cette reconnaissance gouvernementale souligne l'importance stratégique du numérique pour le développement de la Côte d'Ivoire.",
      },
      {
        title: "Audience avec le Ministre de la Communication, Porte-parole du Gouvernement",
        category: "🏛️ Audience Ministérielle · Abidjan",
        description: "Reçu en audience par le Ministre Amadou Coulibaly qui m'a chaleureusement félicité pour cette victoire mondiale historique.",
        details: "Suite à ma victoire à la Huawei ICT Competition 2024, j'ai eu l'honneur d'être reçu en audience par le Ministre de la Communication et Porte-parole du Gouvernement, M. Amadou Coulibaly. Il m'a chaleureusement félicité pour le travail accompli et l'image positive projetée de la Côte d'Ivoire à l'international.",
      },
      {
        title: "Audience avec le Ministre de l'Enseignement Supérieur et de la Recherche Scientifique",
        category: "🏛️ Audience Ministérielle · Abidjan",
        description: "Reconnaissance officielle du Prof. Adama DIAWARA pour mon excellence académique et mes victoires internationales qui honorent le système éducatif ivoirien.",
        details: "Le Ministre de l'Enseignement Supérieur et de la Recherche Scientifique, Prof. Adama DIAWARA, m'a reçu pour saluer mon parcours d'excellence — major de promotion et double champion du monde — qui illustre la qualité de la formation dispensée dans les grandes écoles ivoiriennes comme l'ESATIC.",
      },
      {
        title: "Forum Économique Sino-Ivoirien 2024 — Beijing",
        category: "🤝 Diplomatie Économique · Beijing, Chine",
        description: "Représentant des jeunes talents numériques ivoiriens lors de ce forum stratégique renforçant les liens économiques entre la Chine et la Côte d'Ivoire.",
        details: "J'ai participé au Forum Économique Sino-Ivoirien 2024 à Beijing en tant que représentant des jeunes talents ivoiriens dans le domaine des TIC. Ce forum stratégique vise à renforcer la coopération économique et technologique entre la Chine et la Côte d'Ivoire.",
      },
      {
        title: "Rencontre avec le Prof. Adama DIAWARA, Ministre de l'Enseignement Supérieur",
        category: "🏛️ Rencontre Ministérielle · Abidjan",
        description: "Félicité par le Ministre pour mes performances académiques exceptionnelles et encouragé à poursuivre sur la voie de l'excellence.",
        details: "Le Ministre de l'Enseignement Supérieur, Prof. Adama DIAWARA, m'a personnellement félicité pour mes performances académiques exceptionnelles et m'a encouragé à poursuivre sur la voie de l'excellence, en tant que modèle pour la jeunesse ivoirienne.",
      },
      {
        title: "Rencontre avec le Ministre Amadou Coulibaly, Porte-parole du Gouvernement",
        category: "🏛️ Rencontre Ministérielle · Abidjan",
        description: "Échange sur l'insertion professionnelle des jeunes diplômés en TIC et présentation de mes prix internationaux et projets d'innovation.",
        details: "Échange fructueux avec le Ministre de la Communication et Porte-parole du Gouvernement, M. Amadou Coulibaly, sur l'insertion professionnelle des jeunes diplômés en TIC et les opportunités dans le secteur numérique. Je lui ai présenté mes prix internationaux et mes projets d'innovation technologique.",
      },
      {
        title: "Invité d'honneur à la Fête de l'Indépendance 2025",
        category: "🇨🇮 Cérémonie Nationale · Abidjan",
        description: "Invité à la cérémonie officielle du 7 août 2025 en reconnaissance de mes contributions exceptionnelles au rayonnement numérique de la Côte d'Ivoire.",
        details: "Le 7 août 2025, j'ai eu l'honneur d'être invité à la cérémonie officielle de la Fête de l'Indépendance de la Côte d'Ivoire, en reconnaissance de mes contributions exceptionnelles dans le domaine du numérique et de la technologie. Cet honneur souligne la place croissante de l'innovation technologique dans le développement national.",
      },
      {
        title: "Invité spécial à l'Ivoire Tech Forum 2025",
        category: "🎤 Forum Technologique · Abidjan",
        description: "Invité à la cérémonie d'ouverture officielle au Sofitel Abidjan Hôtel Ivoire, trois jours d'échanges pour positionner la Côte d'Ivoire comme hub digital régional.",
        details: "Le 10 juillet 2025, j'ai été invité à la cérémonie d'ouverture officielle de l'Ivoire Tech Forum 2025 au Sofitel Abidjan Hôtel Ivoire. Placé sous le parrainage du Premier Ministre Dr Robert Beugré Mambé, co-parrainé par Mme Françoise Remarck (Ministre de la Culture) et M. Mamadou Touré (Ministre de la Promotion de la Jeunesse), et organisé par le Ministère de la Transition Numérique sous le leadership du Ministre Kalil Konaté, ce forum ambitionne de placer le numérique au cœur du développement ivoirien.",
      },
      {
        title: "Viva Technology 2025 — Paris",
        category: "🚀 Salon International · Paris, France",
        description: "Participation au plus grand salon européen de l'innovation technologique et des startups, échanges avec les leaders mondiaux du secteur tech.",
        details: "Participation à Viva Technology 2025 à Paris, le plus grand salon européen dédié à l'innovation technologique et aux startups. J'ai pu découvrir les dernières tendances en IA, cloud computing et innovation, et échanger avec des leaders du secteur tech mondial.",
      },
      {
        title: "Rencontre avec le Ministre Danho Paulin Claude, Député-Maire d'Attecoubé",
        category: "🏛️ Rencontre Officielle · Abidjan",
        description: "Présentation de mes distinctions internationales et discussion sur les opportunités de collaboration pour le développement technologique local.",
        details: "J'ai eu l'honneur de rencontrer le Ministre Danho Paulin Claude, Député-Maire de la Commune d'Attecoubé, pour lui présenter mes distinctions internationales et discuter des opportunités de collaboration pour le développement technologique local.",
      },
      {
        title: "Visite de courtoisie au VITIB — Grand-Bassam",
        category: "🙏 Reconnaissance · Grand-Bassam",
        description: "Visite au Village des Technologies de l'Information et de la Biotechnologie pour exprimer ma gratitude envers leur soutien déterminant dans mon parcours.",
        details: "Animé d'un profond sentiment de reconnaissance, je me suis rendu au Village des Technologies de l'Information et de la Biotechnologie (VITIB S.A.) à Grand-Bassam pour remercier M. Mebeti Dosso, Directeur Général, représenté par Yann-Gabriel N'Zi, ainsi que toute l'équipe de direction. Cette rencontre fut l'occasion de leur présenter les différents prix et distinctions obtenus, reflets de l'impact de leur soutien bienveillant dans mon parcours académique et professionnel.",
      },
    ],
  },
  en: {
    backToHome: "Back to home",
    achievements: "Achievements",
    pageTitle: "Awards & Events",
    pageSubtitle: "Discover my international distinctions and participation in the world's largest events",
    filters: {
      all: "All",
      awards: "Awards",
      events: "Events",
    },
    items: [
      {
        title: "2025 National Excellence Award — Best Digital Talent",
        category: "🏅 Presidential Distinction · Abidjan",
        description: "Recognized by the President of the Republic as the Best Digital and Technological Talent of Ivory Coast, during the National Excellence Day at the Presidential Palace.",
        details: "During the 2025 National Excellence Day ceremony held at the Presidential Palace, I received the National Excellence Award for Best Digital and Technological Talent of Ivory Coast. This presidential distinction honors my entire journey: double Huawei ICT world champion, competition ambassador, and committed advocate for Ivorian digital talent on the international stage.",
      },
      {
        title: "1st World Prize in Cloud Computing — Huawei ICT Competition 2024",
        category: "🥇 World Champion · Shenzhen, China",
        description: "First World Prize in Computing among 170,000+ candidates from 80 countries. Tunisia rises to the rank of world champion nations in computer science.",
        details: "At the Huawei ICT Competition 2024 global finals in Shenzhen, I won the First World Prize in Cloud Computing, competing against over 170,000 candidates from 80 countries — including China, Brazil, Turkey, Colombia and Egypt. This historic victory placed Tunisia among the world champion nations in this discipline.",
      },
      {
        title: "1st World Prize in AI, Big Data & Cloud — Huawei ICT Competition 2025",
        category: "🥇 Double World Champion · Shenzhen, China",
        description: "As coach of the Ivorian national team, we won the First World Prize against 210,000+ students from 2,000 universities across 100+ countries.",
        details: "Appointed coach of the Ivory Coast national team for the 2025 edition, I mentored three students — Othniel Kouamé N'DRI, Lewis BALOGOU (ESATIC graduates) and Ismaël Aziz BAKAYOKO (Bingerville Polytechnic University) — in Cloud Computing covering Cloud Services (45%), AI (40%) and Big Data (15%). Against 210,000+ participants from 2,000 universities in 100+ countries, the team won the First World Prize, confirming Ivory Coast's historic back-to-back world championship.",
      },
      {
        title: "Huawei ICT Competition 2025 Ambassador — Official ceremony in Beijing",
        category: "🌍 International Appointment · Beijing, China",
        description: "Appointed global competition ambassador in the presence of the Vice President of the Republic of Ivory Coast, tasked with promoting Ivorian digital excellence.",
        details: "Following my 2024 world victory, I was officially appointed Ambassador of the Huawei ICT Competition 2025 during a ceremony in Beijing, in the presence of the Vice President of the Republic of Ivory Coast. My mission: promote the competition nationally, identify and mentor young Ivorian ICT talents, and carry Ivory Coast's flag on the global tech stage.",
      },
      {
        title: "Triumphant welcome at FHB Airport, Abidjan",
        category: "🎉 Champion's Return · Abidjan",
        description: "Welcomed as a hero at Félix Houphouët-Boigny Airport by professors, family, classmates and national media after my 2024 world victory.",
        details: "Upon my return from Shenzhen after winning the Huawei ICT Competition 2024, I was welcomed as a hero at Félix Houphouët-Boigny International Airport in Abidjan. ESATIC professors, family, classmates and journalists were present to celebrate this historic victory for Ivory Coast.",
      },
      {
        title: "Official celebration at the Ministry of Digital Transition",
        category: "🏛️ Government Recognition · Abidjan",
        description: "Received and celebrated by Minister Kalil Konaté and the entire cabinet for my world victory, a symbol of Ivorian digital excellence.",
        details: "The Ministry of Digital Transition and Digitalization, under the leadership of Minister Kalil Konaté, officially received and celebrated me following my world victory at the Huawei ICT Competition 2024. This government recognition underscores the strategic importance of digital technology for Ivory Coast's development.",
      },
      {
        title: "Audience with the Minister of Communication, Government Spokesman",
        category: "🏛️ Ministerial Audience · Abidjan",
        description: "Received in audience by Minister Amadou Coulibaly who warmly congratulated me for this historic world victory.",
        details: "Following my victory at the Huawei ICT Competition 2024, I had the honor of being received in audience by the Minister of Communication and Government Spokesman, Mr. Amadou Coulibaly. He warmly congratulated me for the work accomplished and the positive image projected of Ivory Coast internationally.",
      },
      {
        title: "Audience with the Minister of Higher Education and Scientific Research",
        category: "🏛️ Ministerial Audience · Abidjan",
        description: "Official recognition from Prof. Adama DIAWARA for my academic excellence and international victories that honor the Ivorian education system.",
        details: "The Minister of Higher Education and Scientific Research, Prof. Adama DIAWARA, received me to acknowledge my path of excellence — top of class and double world champion — which illustrates the quality of education provided by Ivory Coast's top institutions like ESATIC.",
      },
      {
        title: "Sino-Ivorian Economic Forum 2024 — Beijing",
        category: "🤝 Economic Diplomacy · Beijing, China",
        description: "Representative of young Ivorian digital talents at this strategic forum strengthening economic ties between China and Ivory Coast.",
        details: "I participated in the Sino-Ivorian Economic Forum 2024 in Beijing as a representative of young Ivorian ICT talents. This strategic forum aims to strengthen economic and technological cooperation between China and Ivory Coast.",
      },
      {
        title: "Meeting with Prof. Adama DIAWARA, Minister of Higher Education",
        category: "🏛️ Ministerial Meeting · Abidjan",
        description: "Congratulated by the Minister for my exceptional academic performance and encouraged to continue on the path of excellence.",
        details: "The Minister of Higher Education, Prof. Adama DIAWARA, personally congratulated me for my exceptional academic performance and encouraged me to continue on the path of excellence, as a role model for Ivorian youth.",
      },
      {
        title: "Meeting with Minister Amadou Coulibaly, Government Spokesman",
        category: "🏛️ Ministerial Meeting · Abidjan",
        description: "Discussion on professional integration of young ICT graduates and presentation of my international awards and innovation projects.",
        details: "Fruitful exchange with the Minister of Communication and Government Spokesman, Mr. Amadou Coulibaly, on professional integration of young ICT graduates and opportunities in the digital sector. I presented my international awards and technological innovation projects.",
      },
      {
        title: "Guest of honor at Independence Day 2025",
        category: "🇨🇮 National Ceremony · Abidjan",
        description: "Invited to the official ceremony of August 7, 2025 in recognition of my exceptional contributions to Ivory Coast's digital influence.",
        details: "On August 7, 2025, I had the honor of being invited to the official ceremony of Ivory Coast's Independence Day, in recognition of my exceptional contributions in digital and technology. This honor underscores the growing importance of technological innovation in national development.",
      },
      {
        title: "Special guest at Ivoire Tech Forum 2025",
        category: "🎤 Technology Forum · Abidjan",
        description: "Invited to the official opening ceremony at Sofitel Abidjan Hotel Ivoire, three days of exchanges to position Ivory Coast as a regional digital hub.",
        details: "On July 10, 2025, I was invited to the official opening ceremony of Ivoire Tech Forum 2025 at Sofitel Abidjan Hotel Ivoire. Under the patronage of Prime Minister Dr. Robert Beugré Mambé, co-sponsored by Mrs. Françoise Remarck (Minister of Culture) and Mr. Mamadou Touré (Minister of Youth Promotion), and organized by the Ministry of Digital Transition under Minister Kalil Konaté, this forum aims to place digital at the heart of Ivorian development.",
      },
      {
        title: "Viva Technology 2025 — Paris",
        category: "🚀 International Exhibition · Paris, France",
        description: "Participation in Europe's largest tech innovation and startup exhibition, exchanges with global tech sector leaders.",
        details: "Participation in Viva Technology 2025 in Paris, Europe's largest exhibition dedicated to technological innovation and startups. I discovered the latest trends in AI, cloud computing and innovation, and exchanged with global tech sector leaders.",
      },
      {
        title: "Meeting with Minister Danho Paulin Claude, Deputy Mayor of Attecoubé",
        category: "🏛️ Official Meeting · Abidjan",
        description: "Presentation of my international distinctions and discussion on collaboration opportunities for local technological development.",
        details: "I had the honor of meeting Minister Danho Paulin Claude, Deputy Mayor of Attecoubé, to present my international distinctions and discuss collaboration opportunities for local technological development.",
      },
      {
        title: "Courtesy visit to VITIB — Grand-Bassam",
        category: "🙏 Gratitude · Grand-Bassam",
        description: "Visit to the Village of Information Technology and Biotechnology to express gratitude for their decisive support in my journey.",
        details: "Driven by deep gratitude, I visited the Village of Information Technology and Biotechnology (VITIB S.A.) in Grand-Bassam to thank Mr. Mebeti Dosso, General Director, represented by Yann-Gabriel N'Zi, and the entire management team. This meeting was an opportunity to present the various awards and distinctions obtained, reflecting the impact of their benevolent support in my academic and professional journey.",
      },
    ],
  },
}

export default function DistinctionsPage() {
  const [filter, setFilter] = useState("toutes")
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { language } = useLanguage()

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  // Données statiques (images, types, années, icônes) — ordonnées par impact
  const realisationsStaticData = [
    { id: 1, type: "prix", year: "08/2025", images: ["/pne2.jpeg", "/pne1.jpeg", "/pne3.jpeg", "/pne4.jpeg"], icon: Trophy, color: "primary" },
    { id: 2, type: "prix", year: "05/2024", images: ["/prize/c2.jpeg", "/prize/c1.jpeg", "/prize/c3.jpeg", "/prize/c4.jpeg"], icon: Trophy, color: "primary" },
    { id: 3, type: "prix", year: "05/2025", images: ["/ic1.jpeg", "/ic2.jpeg", "/ic3.jpeg"], icon: Trophy, color: "accent" },
    { id: 4, type: "prix", year: "09/2024", images: ["/prize/amb1.jpeg", "/prize/amb2.jpeg", "/prize/amb3.jpeg", "/prize/amb4.jpeg"], icon: Trophy, color: "accent" },
    { id: 5, type: "evenement", year: "06/2024", images: ["/event/cm1.jpeg", "/event/cm2.jpeg", "/event/cm3.jpeg", "/event/cm4.jpeg"], icon: Calendar, color: "primary" },
    { id: 6, type: "prix", year: "06/2024", images: ["/prize/mt1.jpeg", "/prize/mt2.jpeg", "/prize/mt3.jpeg", "/prize/mt4.jpeg"], icon: Trophy, color: "primary" },
    { id: 7, type: "prix", year: "06/2024", images: ["/prize/mcp1.jpeg", "/prize/mcp2.jpeg", "/prize/mcp3.jpeg", "/prize/mcp4.jpeg"], icon: Trophy, color: "primary" },
    { id: 8, type: "prix", year: "06/2024", images: ["/prize/ms1.jpeg", "/prize/ms2.jpeg", "/prize/ms3.jpeg", "/prize/ms4.jpeg"], icon: Trophy, color: "primary" },
    { id: 9, type: "evenement", year: "09/2024", images: ["/event/cc1.jpeg", "/event/cc2.jpeg", "/event/cc3.jpeg", "/event/cc4.jpeg"], icon: Calendar, color: "primary" },
    { id: 10, type: "prix", year: "08/2025", images: ["/prize/es2.jpeg", "/prize/es1.jpeg", "/prize/es3.jpeg"], icon: Trophy, color: "accent" },
    { id: 11, type: "prix", year: "08/2025", images: ["/prize/mc3.jpeg", "/prize/mc2.jpeg", "/prize/mc1.jpeg"], icon: Trophy, color: "accent" },
    { id: 12, type: "evenement", year: "08/2025", images: ["/event/ind.jpeg"], icon: Calendar, color: "primary" },
    { id: 13, type: "evenement", year: "07/2025", images: ["/itf5.jpeg", "/itf3.jpeg", "/itf1.jpeg"], icon: Calendar, color: "primary" },
    { id: 14, type: "evenement", year: "06/2025", images: ["/event/viva.jpeg"], icon: Calendar, color: "primary" },
    { id: 15, type: "prix", year: "08/2025", images: ["/prize/m1.jpeg", "/prize/m2.jpeg", "/prize/m3.jpeg"], icon: Trophy, color: "accent" },
    { id: 16, type: "evenement", year: "08/2025", images: ["/event/v1.jpeg", "/event/v2.jpeg", "/event/v3.jpeg", "/event/v4.jpeg"], icon: Calendar, color: "primary" },
  ]

  // Fusion des données
  const realisationsData = realisationsStaticData.map((staticData, idx) => ({
    ...staticData,
    ...t('items')[idx],
  }))

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
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('backToHome')}
            </Link>
            <Badge variant="secondary" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              {t('achievements')}
            </Badge>
            <h1 className="text-4xl font-bold mb-6 text-balance">{t('pageTitle')}</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              {t('pageSubtitle')}
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
                  {t('filters.all')}
                </Button>
                <Button variant={filter === "prix" ? "default" : "outline"} onClick={() => setFilter("prix")} size="sm">
                  <Trophy className="w-4 h-4 mr-2" />
                  {t('filters.awards')}
                </Button>
                <Button
                  variant={filter === "evenements" ? "default" : "outline"}
                  onClick={() => setFilter("evenements")}
                  size="sm"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {t('filters.events')}
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

                          <div className="aspect-video rounded-lg bg-[#0C0C10] flex items-center justify-center overflow-hidden">
                            <img
                              src={item.images[0] || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-full object-contain"
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
                          <div className="aspect-video rounded-xl overflow-hidden bg-[#0C0C10]">
                            <img
                              src={selectedItem?.images[currentImageIndex] || "/placeholder.svg"}
                              alt={`${selectedItem?.title} - Image ${currentImageIndex + 1}`}
                              className="w-full h-full object-contain"
                            />
                          </div>

                          {selectedItem?.images.length > 1 && (
                            <>
                              <Button
                                variant="outline"
                                size="icon"
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#0C0C10]/80 border border-[#C9A84C]/30 text-[#C9A84C] hover:bg-[#C9A84C]/20"
                                onClick={prevImage}
                              >
                                <ChevronLeft className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="icon"
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0C0C10]/80 border border-[#C9A84C]/30 text-[#C9A84C] hover:bg-[#C9A84C]/20"
                                onClick={nextImage}
                              >
                                <ChevronRight className="w-4 h-4" />
                              </Button>

                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {selectedItem.images.map((_: string, index: number) => (
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