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
        title: "Prix National d'Excellence du Meilleur Talent Numérique 2025",
        category: "Présidence de la République de Côte d'Ivoire",
        description: "Reconnaissance officielle du Président de la République pour mes contributions exceptionnelles à la promotion et à l'innovation technologique et à l'impact social positif.",
        details: "En 2024, Monsieur Yacouba DIAKITE, ingénieur en Data Science et Intelligence Artificielle (IA), diplômé de l'ESATIC, a remporté le Premier Prix mondial dans la catégorie Cloud Computing, parmi plus de 170 000 candidats issus de 80 pays, dont la Chine, le Brésil, la Turquie, la Colombie et l'Égypte. Fort de cette performance remarquable, il a été nommé Ambassadeur de la Huawei ICT Competition 2025 et désigné coach de l'équipe ivoirienne. Sous sa direction, une équipe composée de Othniel Kouamé N'DRI, Lewis BALOGOU, tous deux diplômés de l'ESATIC et Ismaël Aziz BAKAYOKO diplômé de l'Université Polytechnique de Bingerville, a représenté la Côte d'Ivoire dans la spécialité Cloud Computing, couvrant les domaines du Cloud Services (45%), de l'IA (40%) et du Big Data (15%). Cette édition 2025 a réuni plus de 210 000 participants, issus de 2 000 universités réparties dans plus de 100 pays. L'équipe ivoirienne a remporté encore une fois le Premier Prix mondial, en hissant la Côte d'Ivoire au rang des six nations championnes du monde dans cette spécialité. Ce prix consacre le génie de la jeunesse ivoirienne dans le domaine des technologies numériques, ainsi que sa contribution au rayonnement international de la Côte d'Ivoire.",
      },
      {
        title: "Rencontre avec prof. Adama DIAWARA, Ministre de l'Enseignement Supérieur",
        category: "Ministère de l'Enseignement Supérieur",
        description: "Félicité par le ministre pour mes performances académiques exceptionnelles. Il m'a encouragé à poursuivre sur la voie de l'excellence.",
        details: "Félicité par le ministre pour mes performances académiques exceptionnelles. Il m'a encouragé à poursuivre sur la voie de l'excellence.",
      },
      {
        title: "Invité spécial à l'Ivoire Tech Forum 2025",
        category: "Ministère de la Transition Numérique",
        description: "Le jeudi 10 juillet 2025, j'ai été invité à la cérémonie d'ouverture officielle de l'Ivoire Tech Forum 2025 qui s'est tenue au Sofitel Abidjan Hôtel Ivoire, lançant trois jours d'échanges et d'initiatives visant à positionner le pays comme un hub digital régional.",
        details: "Le jeudi 10 juillet 2025, la cérémonie d'ouverture officielle de l'Ivoire Tech Forum 2025 s'est tenue au Sofitel Abidjan Hôtel Ivoire, lançant trois jours d'échanges et d'initiatives visant à positionner le pays comme un hub digital régional. Placée sous le parrainage du Premier ministre, Chef du gouvernement, ministre des Sports et du Cadre de Vie, Dr Robert Beugré Mambé, la rencontre bénéficie également du co-parrainage de Mme Françoise Remarck, ministre de la Culture et de la Francophonie, et de M. Mamadou Touré, ministre de la Promotion de la Jeunesse, de l'Insertion Professionnelle et du Service Civique. Organisé par le ministère de la Transition Numérique et de la Digitalisation, sous le leadership du ministre Kalil Konaté, l'Ivoire Tech Forum ambitionne de placer le numérique au cœur du développement, en promouvant l'innovation, l'inclusion et la souveraineté digitale.",
      },
      {
        title: "Rencontre avec M. Amadou Coulibaly, Ministre de la Communication et Porte-parole du Gouvernement",
        category: "Ministère de la Communication",
        description: "Echange fructueux avec le ministre sur l'insertion professionnelle des jeunes diplômés en TIC et les opportunités dans le secteur du numériques.",
        details: "Echange fructueux avec le ministre sur l'insertion professionnelle des jeunes diplômés en TIC et les opportunités dans le secteur du numériques. Je lui ai présenté mes prix internationaux et mes projets d'innovation technologique.",
      },
      {
        title: "Invité spécial à la fête de l'Indépendance de la Côte d'Ivoire 2025",
        category: "Gouvernement de Côte d'Ivoire",
        description: "Le 07 août 2025, j'ai été invité à la cérémonie officielle de la fête de l'Indépendance de la Côte d'Ivoire, en reconnaissance de mes contributions exceptionnelles dans le domaine du numérique et de la technologie.",
        details: "Le 07 août 2025, j'ai été invité à la cérémonie officielle de la fête de l'Indépendance de la Côte d'Ivoire, en reconnaissance de mes contributions exceptionnelles dans le domaine du numérique et de la technologie. Cet honneur souligne l'importance de l'innovation technologique pour le développement national.",
      },
      {
        title: "Visite de Courtoisie au Vitib à Grand-Bassam",
        category: "VITIB S.A.",
        description: "Visite de courtoisie au Village des Technologies de l'Information et de la Biotechnologie (VITIB S.A.) à Grand-Bassam pour exprimer ma gratitude envers leur soutien dans mon parcours académique et professionnel.",
        details: "Dans le cadre de mon parcours académique cette année, j'ai eu l'honneur de bénéficier du soutien du Village des Technologies de l'Information et de la Biotechnologie (VITIB S.A.). C'est donc animé d'un profond sentiment de reconnaissance que je me suis rendu à Grand-Bassam pour une visite de courtoisie, dans le but d'exprimer mes sincères remerciements à M. Mebeti Dosso, Directeur Général du VITIB, représenté ce jour par Yann-Gabriel N'Zi, ainsi qu'à toute l'équipe de direction. Cette rencontre fut également l'occasion de leur présenter les différents prix et distinctions obtenus au cours de l'année, reflets des efforts conjoints et de l'impact de leur appui bienveillant.",
      },
      {
        title: "Rencontre avec le Ministre Danho Paulin Claude, Député-Maire de la Commune d'Attecoubé",
        category: "Mairie d'Attecoubé",
        description: "Présentation de mes distinctions au maire et discussion sur les opportunités de collaboration pour le développement technologique local.",
        details: "Présentation de mes distinctions au maire et discussion sur les opportunités de collaboration pour le développement technologique local.",
      },
      {
        title: "Viva Technology 2025 à Paris",
        category: "Viva Technology",
        description: "Participation à Viva Technology 2025, le plus grand salon européen dédié à l'innovation technologique et aux startups, où j'ai pu découvrir les dernières tendances en matière de technologie et d'innovation, et échanger avec des leaders du secteur.",
        details: "Participation à Viva Technology 2025, le plus grand salon européen dédié à l'innovation technologique et aux startups, où j'ai pu découvrir les dernières tendances en matière de technologie et d'innovation, et échanger avec des leaders du secteur.",
      },
      {
        title: "Lauréat de Premier Prix Mondial en IA, Big Data & Cloud 2025 à Shenzhen, CHINE",
        category: "Huawei",
        description: "Coach de l'équipe nationale de la Côte d'Ivoire, lauréate du Premier Prix Mondial lors de la Huawei ICT Competition 2025, une édition réunissant plus de 200 000 étudiants issus de 100 pays.",
        details: "Coach de l'équipe nationale de la Côte d'Ivoire, lauréate du Premier Prix Mondial lors de la Huawei ICT Competition 2025, une édition réunissant plus de 200 000 étudiants issus de 100 pays.",
      },
      {
        title: "Ambassadeur de la Huawei ICT Competition 2025 à Beijing, CHINE",
        category: "Huawei",
        description: "Coach de l'équipe nationale de la Côte d'Ivoire, lauréate du Premier Prix Mondial lors de la Huawei ICT Competition 2025, une édition réunissant plus de 200 000 étudiants issus de 100 pays.",
        details: "Nommé ambassadeur de la Huawei ICT Competition 2025 en présence du Vice-Président de la République de Côte d'Ivoire, avec pour mission de promouvoir la compétition au niveau national et d'accompagner l'émergence des jeunes talents ivoiriens dans le domaine des Technologies de l'Information et de la Communication (TIC)",
      },
      {
        title: "Forum Economique Sino-Ivoirien 2024 à Pékin, CHINE",
        category: "Gouvernement de Côte d'Ivoire",
        description: "Participation au Forum Economique Sino-Ivoirien 2024 à Pékin, Chine, en tant que représentant des jeunes talents ivoiriens dans le domaine des TIC.",
        details: "Participation au Forum Economique Sino-Ivoirien 2024 à Pékin, Chine, en tant que représentant des jeunes talents ivoiriens dans le domaine des TIC.",
      },
      {
        title: "Audience avec le Ministre de la Communication et Porte-parole du Gouvernement",
        category: "Ministère de la Communication",
        description: "Suite à ma victoire à la Huawei ICT Competition 2024, j'ai eu l'honneur d'être reçu en audience par le Ministre de la Communication, M. Amadou Coulibaly, pour me féliciter très chaleureusement du grand travail accompli.",
        details: "Suite à ma victoire à la Huawei ICT Competition 2024, j'ai eu l'honneur d'être reçu en audience par le Ministre de la Communication, M. Amadou Coulibaly, pour me féliciter très chaleureusement du grand travail accompli.",
      },
      {
        title: "Audience avec le Ministre de l'Enseignement Supérieur et de la Recherche Scientifique",
        category: "Ministère de l'Enseignement Supérieur",
        description: "Recognition officielle du Ministre de l'Enseignement Supérieur, Prof. Adama DIAWARA, pour mon excellence académique à travers mes moyennes et mes victoires internationales.",
        details: "Recognition officielle du Ministre de l'Enseignement Supérieur, Prof. Adama DIAWARA, pour mes contributions exceptionnelles à la promotion et à l'innovation technologique à travers mes victoires internationales.",
      },
      {
        title: "Reçu et célébré par le Ministère de la Transition Numérique et de la Digitalisation pour ma victoire mondiale à la Huawei ICT Competition 2024",
        category: "Ministère de la Transition Numérique",
        description: "J'ai eu l'honneur d'être reçu et célébré par le Ministère de la Transition Numérique et de la Digitalisation pour ma victoire mondiale à la Huawei ICT Competition 2024.",
        details: "J'ai eu l'honneur d'être reçu et célébré par le Ministère de la Transition Numérique et de la Digitalisation pour ma victoire mondiale à la Huawei ICT Competition 2024.",
      },
      {
        title: "Accueilli en heros à l'aéroport FHB d'Abidjan après ma victoire mondiale à la Huawei ICT Competition 2024",
        category: "ESATIC",
        description: "J'ai été accueilli en héros à l'aéroport FHB d'Abidjan après ma victoire mondiale à la Huawei ICT Competition 2024, en présence de mes professeurs, parents, camarades et médias.",
        details: "J'ai été accueilli en héros à l'aéroport FHB d'Abidjan après ma victoire mondiale à la Huawei ICT Competition 2024, en présence de mes professeurs, parents, camarades et médias.",
      },
      {
        title: "Lauréat de Premier Prix Mondial 2024 en Computing à Shenzhen, CHINE",
        category: "ESATIC",
        description: "J'ai remporté le Premier Prix Mondial en Computing lors de la Huawei ICT Competition 2024 à Shenzhen, Chine, parmi plus de 170 000 candidats issus de 80 pays.",
        details: "J'ai remporté le Premier Prix Mondial en Computing lors de la Huawei ICT Competition 2024 à Shenzhen, Chine, parmi plus de 170 000 candidats issus de 80 pays.",
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
        title: "2025 National Excellence Award for Best Digital Talent",
        category: "Presidency of the Republic of Ivory Coast",
        description: "Official recognition from the President of the Republic for my exceptional contributions to technological innovation promotion and positive social impact.",
        details: "In 2024, Mr. Yacouba DIAKITE, Data Science and Artificial Intelligence (AI) engineer, graduated from ESATIC, won the First World Prize in Cloud Computing category, among more than 170,000 candidates from 80 countries, including China, Brazil, Turkey, Colombia and Egypt. Following this remarkable performance, he was appointed Ambassador of the Huawei ICT Competition 2025 and designated coach of the Ivorian team. Under his leadership, a team composed of Othniel Kouamé N'DRI, Lewis BALOGOU, both graduates of ESATIC and Ismaël Aziz BAKAYOKO graduate of Bingerville Polytechnic University, represented Ivory Coast in Cloud Computing specialty, covering Cloud Services (45%), AI (40%) and Big Data (15%). This 2025 edition brought together more than 210,000 participants from 2,000 universities in over 100 countries. The Ivorian team won the First World Prize again, elevating Ivory Coast to the rank of six world champion nations in this specialty. This award celebrates the genius of Ivorian youth in digital technologies and their contribution to Ivory Coast's international reputation.",
      },
      {
        title: "Meeting with Prof. Adama DIAWARA, Minister of Higher Education",
        category: "Ministry of Higher Education",
        description: "Congratulated by the minister for my exceptional academic performance. He encouraged me to continue on the path of excellence.",
        details: "Congratulated by the minister for my exceptional academic performance. He encouraged me to continue on the path of excellence.",
      },
      {
        title: "Special Guest at Ivoire Tech Forum 2025",
        category: "Ministry of Digital Transition",
        description: "On Thursday, July 10, 2025, I was invited to the official opening ceremony of Ivoire Tech Forum 2025 held at Sofitel Abidjan Hotel Ivoire, launching three days of exchanges and initiatives aimed at positioning the country as a regional digital hub.",
        details: "On Thursday, July 10, 2025, the official opening ceremony of Ivoire Tech Forum 2025 was held at Sofitel Abidjan Hotel Ivoire, launching three days of exchanges and initiatives aimed at positioning the country as a regional digital hub. Under the patronage of the Prime Minister, Head of Government, Minister of Sports and Living Environment, Dr. Robert Beugré Mambé, the event also benefits from the co-patronage of Mrs. Françoise Remarck, Minister of Culture and Francophonie, and Mr. Mamadou Touré, Minister of Youth Promotion, Professional Integration and Civic Service. Organized by the Ministry of Digital Transition and Digitalization, under the leadership of Minister Kalil Konaté, Ivoire Tech Forum aims to place digital at the heart of development, promoting innovation, inclusion and digital sovereignty.",
      },
      {
        title: "Meeting with Mr. Amadou Coulibaly, Minister of Communication and Government Spokesman",
        category: "Ministry of Communication",
        description: "Fruitful exchange with the minister on professional integration of young ICT graduates and opportunities in the digital sector.",
        details: "Fruitful exchange with the minister on professional integration of young ICT graduates and opportunities in the digital sector. I presented my international awards and technological innovation projects to him.",
      },
      {
        title: "Special Guest at Ivory Coast Independence Day 2025",
        category: "Government of Ivory Coast",
        description: "On August 7, 2025, I was invited to the official ceremony of Ivory Coast's Independence Day, in recognition of my exceptional contributions in digital and technology.",
        details: "On August 7, 2025, I was invited to the official ceremony of Ivory Coast's Independence Day, in recognition of my exceptional contributions in digital and technology. This honor underlines the importance of technological innovation for national development.",
      },
      {
        title: "Courtesy Visit to Vitib in Grand-Bassam",
        category: "VITIB S.A.",
        description: "Courtesy visit to the Village of Information Technology and Biotechnology (VITIB S.A.) in Grand-Bassam to express my gratitude for their support in my academic and professional journey.",
        details: "As part of my academic journey this year, I had the honor of benefiting from the support of the Village of Information Technology and Biotechnology (VITIB S.A.). It was with a deep sense of gratitude that I went to Grand-Bassam for a courtesy visit, to express my sincere thanks to Mr. Mebeti Dosso, General Director of VITIB, represented that day by Yann-Gabriel N'Zi, as well as the entire management team. This meeting was also an opportunity to present them with the various awards and distinctions obtained during the year, reflecting joint efforts and the impact of their benevolent support.",
      },
      {
        title: "Meeting with Minister Danho Paulin Claude, Deputy Mayor of Attecoubé",
        category: "Attecoubé Town Hall",
        description: "Presentation of my distinctions to the mayor and discussion on collaboration opportunities for local technological development.",
        details: "Presentation of my distinctions to the mayor and discussion on collaboration opportunities for local technological development.",
      },
      {
        title: "Viva Technology 2025 in Paris",
        category: "Viva Technology",
        description: "Participation in Viva Technology 2025, the largest European trade fair dedicated to technological innovation and startups, where I was able to discover the latest technology and innovation trends, and exchange with industry leaders.",
        details: "Participation in Viva Technology 2025, the largest European trade fair dedicated to technological innovation and startups, where I was able to discover the latest technology and innovation trends, and exchange with industry leaders.",
      },
      {
        title: "Winner of First World Prize in AI, Big Data & Cloud 2025 in Shenzhen, CHINA",
        category: "Huawei",
        description: "Coach of the national team of Ivory Coast, winner of the First World Prize at the Huawei ICT Competition 2025, an edition bringing together more than 200,000 students from 100 countries.",
        details: "Coach of the national team of Ivory Coast, winner of the First World Prize at the Huawei ICT Competition 2025, an edition bringing together more than 200,000 students from 100 countries.",
      },
      {
        title: "Ambassador of Huawei ICT Competition 2025 in Beijing, CHINA",
        category: "Huawei",
        description: "Coach of the national team of Ivory Coast, winner of the First World Prize at the Huawei ICT Competition 2025, an edition bringing together more than 200,000 students from 100 countries.",
        details: "Appointed ambassador of the Huawei ICT Competition 2025 in the presence of the Vice President of the Republic of Ivory Coast, with the mission to promote the competition at national level and support the emergence of young Ivorian talents in the field of Information and Communication Technologies (ICT)",
      },
      {
        title: "Sino-Ivorian Economic Forum 2024 in Beijing, CHINA",
        category: "Government of Ivory Coast",
        description: "Participation in the Sino-Ivorian Economic Forum 2024 in Beijing, China, as representative of young Ivorian talents in ICT.",
        details: "Participation in the Sino-Ivorian Economic Forum 2024 in Beijing, China, as representative of young Ivorian talents in ICT.",
      },
      {
        title: "Audience with Minister of Communication and Government Spokesman",
        category: "Ministry of Communication",
        description: "Following my victory at the Huawei ICT Competition 2024, I had the honor of being received in audience by the Minister of Communication, Mr. Amadou Coulibaly, to warmly congratulate me on the great work accomplished.",
        details: "Following my victory at the Huawei ICT Competition 2024, I had the honor of being received in audience by the Minister of Communication, Mr. Amadou Coulibaly, to warmly congratulate me on the great work accomplished.",
      },
      {
        title: "Audience with Minister of Higher Education and Scientific Research",
        category: "Ministry of Higher Education",
        description: "Official recognition from the Minister of Higher Education, Prof. Adama DIAWARA, for my academic excellence through my grades and international victories.",
        details: "Official recognition from the Minister of Higher Education, Prof. Adama DIAWARA, for my exceptional contributions to technological innovation promotion through my international victories.",
      },
      {
        title: "Received and Celebrated by Ministry of Digital Transition and Digitalization for my World Victory at Huawei ICT Competition 2024",
        category: "Ministry of Digital Transition",
        description: "I had the honor of being received and celebrated by the Ministry of Digital Transition and Digitalization for my world victory at the Huawei ICT Competition 2024.",
        details: "I had the honor of being received and celebrated by the Ministry of Digital Transition and Digitalization for my world victory at the Huawei ICT Competition 2024.",
      },
      {
        title: "Welcomed as Hero at FHB Airport Abidjan After My World Victory at Huawei ICT Competition 2024",
        category: "ESATIC",
        description: "I was welcomed as a hero at FHB Airport Abidjan after my world victory at the Huawei ICT Competition 2024, in the presence of my professors, parents, classmates and media.",
        details: "I was welcomed as a hero at FHB Airport Abidjan after my world victory at the Huawei ICT Competition 2024, in the presence of my professors, parents, classmates and media.",
      },
      {
        title: "Winner of First World Prize 2024 in Computing in Shenzhen, CHINA",
        category: "ESATIC",
        description: "I won the First World Prize in Computing at the Huawei ICT Competition 2024 in Shenzhen, China, among more than 170,000 candidates from 80 countries.",
        details: "I won the First World Prize in Computing at the Huawei ICT Competition 2024 in Shenzhen, China, among more than 170,000 candidates from 80 countries.",
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

  // Données statiques (images, types, années, icônes)
  const realisationsStaticData = [
    {
      id: 1,
      type: "prix",
      year: "08/2025",
      images: ["/pne5.jpeg", "/pne1.jpeg", "/pne3.jpeg", "/pne4.jpeg"],
      icon: Trophy,
      color: "primary",
    },
    {
      id: 2,
      type: "prix",
      year: "08/2025",
      images: ["/prize/es2.jpeg", "/prize/es1.jpeg", "/prize/es3.jpeg"],
      icon: Trophy,
      color: "accent",
    },
    {
      id: 3,
      type: "evenement",
      year: "07/2025",
      images: ["/itf5.jpeg", "/itf3.jpeg", "/itf1.jpeg"],
      icon: Calendar,
      color: "primary",
    },
    {
      id: 4,
      type: "prix",
      year: "08/2025",
      images: ["/prize/mc3.jpeg", "/prize/mc2.jpeg", "/prize/mc1.jpeg"],
      icon: Trophy,
      color: "accent",
    },
    {
      id: 5,
      type: "evenement",
      year: "08/2025",
      images: ["/event/ind.jpeg"],
      icon: Calendar,
      color: "primary",
    },
    {
      id: 6,
      type: "evenement",
      year: "08/2025",
      images: ["/event/v1.jpeg", "/event/v2.jpeg", "/event/v3.jpeg", "/event/v4.jpeg"],
      icon: Calendar,
      color: "primary",
    },
    {
      id: 7,
      type: "prix",
      year: "08/2025",
      images: ["/prize/m1.jpeg", "/prize/m2.jpeg", "/prize/m3.jpeg"],
      icon: Trophy,
      color: "accent",
    },
    {
      id: 8,
      type: "evenement",
      year: "06/2025",
      images: ["/event/viva.jpeg"],
      icon: Calendar,
      color: "primary",
    },
    {
      id: 9,
      type: "prix",
      year: "05/2025",
      images: ["/ic1.jpeg", "/ic2.jpeg", "/ic3.jpeg"],
      icon: Trophy,
      color: "accent",
    },
    {
      id: 10,
      type: "prix",
      year: "09/2024",
      images: ["/prize/amb1.jpeg", "/prize/amb2.jpeg", "/prize/amb3.jpeg", "/prize/amb4.jpeg"],
      icon: Trophy,
      color: "accent",
    },
    {
      id: 11,
      type: "evenement",
      year: "09/2024",
      images: ["/event/cc1.jpeg", "/event/cc2.jpeg", "/event/cc3.jpeg", "/event/cc4.jpeg"],
      icon: Calendar,
      color: "primary",
    },
    {
      id: 12,
      type: "prix",
      year: "06/2024",
      images: ["/prize/mcp1.jpeg", "/prize/mcp2.jpeg", "/prize/mcp3.jpeg", "/prize/mcp4.jpeg"],
      icon: Trophy,
      color: "primary",
    },
    {
      id: 13,
      type: "prix",
      year: "06/2024",
      images: ["/prize/ms1.jpeg", "/prize/ms2.jpeg", "/prize/ms3.jpeg", "/prize/ms4.jpeg"],
      icon: Trophy,
      color: "primary",
    },
    {
      id: 14,
      type: "prix",
      year: "06/2024",
      images: ["/prize/mt1.jpeg", "/prize/mt2.jpeg", "/prize/mt3.jpeg", "/prize/mt4.jpeg"],
      icon: Trophy,
      color: "primary",
    },
    {
      id: 15,
      type: "evenement",
      year: "06/2024",
      images: ["/event/cm1.jpeg", "/event/cm2.jpeg", "/event/cm3.jpeg", "/event/cm4.jpeg"],
      icon: Calendar,
      color: "primary",
    },
    {
      id: 16,
      type: "prix",
      year: "05/2024",
      images: ["/prize/c2.jpeg", "/prize/c1.jpeg", "/prize/c3.jpeg", "/prize/c4.jpeg"],
      icon: Trophy,
      color: "primary",
    },
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
      <div className="bg-muted/30 py-16">
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