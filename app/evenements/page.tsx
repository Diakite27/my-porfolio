"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Calendar, MapPin, Users, Mic, Award, Briefcase, Globe, ExternalLink, Video, FileText } from "lucide-react"
import { useLanguage } from "@/components/navigation"

// Traductions
const translations = {
  fr: {
    pageTitle: "Événements & Participations",
    pageSubtitle: "Conférences internationales, rencontres officielles et sommets technologiques",
    stats: {
      events: "Événements",
      countries: "Pays",
      participants: "Participants",
      media: "Médias",
    },
    filters: {
      all: "Tous",
      conference: "Conférences",
      award: "Cérémonies",
      meeting: "Rencontres",
      summit: "Sommets",
    },
    views: {
      grid: "Grille",
      timeline: "Timeline",
    },
    labels: {
      seeDetails: "Voir les détails",
      date: "Date",
      location: "Lieu",
      role: "Rôle",
      participants: "Participants",
      type: "Type",
      description: "Description",
      details: "Détails",
      highlights: "Points Forts",
      mediaResources: "Médias & Ressources",
    },
    events: [
      {
        title: "World Economic Forum 2024",
        role: "Panéliste Principal",
        description: "Participation au panel 'Future of AI in Society' devant les leaders mondiaux",
        details: "Présentation des enjeux éthiques de l'IA et proposition de frameworks de gouvernance internationale. Discussion avec des PDG de Fortune 500 et des dirigeants politiques sur l'avenir technologique.",
        attendees: "3000+ leaders mondiaux",
        highlights: [
          "Keynote devant 500+ dirigeants",
          "Rencontre avec 15 ministres",
          "Signature d'accords de coopération",
          "Interview CNN International",
        ],
        media: [
          { title: "Keynote WEF 2024" },
          { title: "Article Forbes" },
        ],
      },
      {
        title: "Tech Innovation Summit Paris",
        role: "Keynote Speaker",
        description: "Conférence principale sur 'L'avenir de l'Intelligence Artificielle en Europe'",
        details: "Présentation des dernières avancées en IA responsable et démonstration de technologies révolutionnaires. Plus de 2000 participants de 40 pays.",
        attendees: "2000+ professionnels tech",
        highlights: [
          "Keynote de 45 minutes",
          "Q&A avec 500+ questions",
          "Démonstration technologique live",
          "Prix du meilleur speaker",
        ],
        media: [
          { title: "Keynote complète" },
          { title: "Slides de présentation" },
        ],
      },
      {
        title: "Rencontre Présidentielle Élysée",
        role: "Conseiller Innovation",
        description: "Consultation privée avec le Président sur la stratégie nationale d'IA",
        details: "Réunion de travail de 2 heures pour définir la politique française en matière d'intelligence artificielle et d'innovation technologique. Présentation de recommandations stratégiques.",
        attendees: "Réunion privée",
        highlights: [
          "Présentation stratégie IA France",
          "Recommandations politiques",
          "Nomination au conseil consultatif",
          "Communiqué de presse officiel",
        ],
        media: [
          { title: "Communiqué Élysée" },
        ],
      },
      {
        title: "Global AI Ethics Conference",
        role: "Modérateur Principal",
        description: "Modération des débats sur l'éthique de l'IA avec les plus grands experts mondiaux",
        details: "Animation de 6 panels sur l'éthique de l'IA, la gouvernance algorithmique et l'impact social des technologies émergentes. Coordination avec Stanford, MIT et Oxford.",
        attendees: "800+ chercheurs et experts",
        highlights: [
          "Modération de 6 panels",
          "Collaboration Stanford-MIT-Oxford",
          "Publication rapport final",
          "Création groupe de travail international",
        ],
        media: [
          { title: "Panels complets" },
          { title: "Rapport final" },
        ],
      },
      {
        title: "Cérémonie Prix Innovation UNESCO",
        role: "Lauréat",
        description: "Réception du Prix UNESCO pour l'Innovation Technologique au Service de l'Humanité",
        details: "Reconnaissance internationale pour le développement de technologies d'IA au service de l'éducation dans les pays en développement. Cérémonie en présence de 50 ambassadeurs.",
        attendees: "300+ diplomates et experts",
        highlights: [
          "Discours de remerciement",
          "Rencontre avec 50 ambassadeurs",
          "Signature partenariats internationaux",
          "Couverture médiatique mondiale",
        ],
        media: [
          { title: "Cérémonie complète" },
          { title: "Communiqué UNESCO" },
        ],
      },
      {
        title: "European Tech Leaders Summit",
        role: "Co-organisateur",
        description: "Co-organisation du sommet réunissant les 100 plus jeunes leaders tech d'Europe",
        details: "Coordination de l'événement avec la Commission Européenne pour définir l'avenir technologique de l'Europe. Création d'un manifeste pour l'innovation européenne.",
        attendees: "100 leaders tech européens",
        highlights: [
          "Co-organisation complète",
          "Création manifeste européen",
          "Partenariat Commission UE",
          "Lancement initiatives communes",
        ],
        media: [
          { title: "Manifeste Tech Europe" },
          { title: "Highlights du sommet" },
        ],
      },
    ],
  },
  en: {
    pageTitle: "Events & Participations",
    pageSubtitle: "International conferences, official meetings and technology summits",
    stats: {
      events: "Events",
      countries: "Countries",
      participants: "Participants",
      media: "Media",
    },
    filters: {
      all: "All",
      conference: "Conferences",
      award: "Ceremonies",
      meeting: "Meetings",
      summit: "Summits",
    },
    views: {
      grid: "Grid",
      timeline: "Timeline",
    },
    labels: {
      seeDetails: "See details",
      date: "Date",
      location: "Location",
      role: "Role",
      participants: "Participants",
      type: "Type",
      description: "Description",
      details: "Details",
      highlights: "Highlights",
      mediaResources: "Media & Resources",
    },
    events: [
      {
        title: "World Economic Forum 2024",
        role: "Lead Panelist",
        description: "Participation in 'Future of AI in Society' panel before world leaders",
        details: "Presentation of AI ethical issues and proposal of international governance frameworks. Discussion with Fortune 500 CEOs and political leaders on technological future.",
        attendees: "3000+ world leaders",
        highlights: [
          "Keynote to 500+ executives",
          "Meeting with 15 ministers",
          "Cooperation agreements signed",
          "CNN International interview",
        ],
        media: [
          { title: "WEF 2024 Keynote" },
          { title: "Forbes Article" },
        ],
      },
      {
        title: "Tech Innovation Summit Paris",
        role: "Keynote Speaker",
        description: "Main conference on 'The Future of Artificial Intelligence in Europe'",
        details: "Presentation of latest advances in responsible AI and demonstration of revolutionary technologies. Over 2000 participants from 40 countries.",
        attendees: "2000+ tech professionals",
        highlights: [
          "45-minute keynote",
          "Q&A with 500+ questions",
          "Live technology demonstration",
          "Best speaker award",
        ],
        media: [
          { title: "Full keynote" },
          { title: "Presentation slides" },
        ],
      },
      {
        title: "Presidential Meeting at Élysée",
        role: "Innovation Advisor",
        description: "Private consultation with the President on national AI strategy",
        details: "2-hour working meeting to define French policy on artificial intelligence and technological innovation. Presentation of strategic recommendations.",
        attendees: "Private meeting",
        highlights: [
          "France AI strategy presentation",
          "Policy recommendations",
          "Advisory board appointment",
          "Official press release",
        ],
        media: [
          { title: "Élysée Press Release" },
        ],
      },
      {
        title: "Global AI Ethics Conference",
        role: "Lead Moderator",
        description: "Moderation of debates on AI ethics with world's leading experts",
        details: "Facilitation of 6 panels on AI ethics, algorithmic governance and social impact of emerging technologies. Coordination with Stanford, MIT and Oxford.",
        attendees: "800+ researchers and experts",
        highlights: [
          "Moderation of 6 panels",
          "Stanford-MIT-Oxford collaboration",
          "Final report publication",
          "International working group creation",
        ],
        media: [
          { title: "Complete panels" },
          { title: "Final report" },
        ],
      },
      {
        title: "UNESCO Innovation Award Ceremony",
        role: "Laureate",
        description: "Reception of UNESCO Award for Technological Innovation in Service of Humanity",
        details: "International recognition for developing AI technologies serving education in developing countries. Ceremony attended by 50 ambassadors.",
        attendees: "300+ diplomats and experts",
        highlights: [
          "Acceptance speech",
          "Meeting with 50 ambassadors",
          "International partnerships signed",
          "Worldwide media coverage",
        ],
        media: [
          { title: "Full ceremony" },
          { title: "UNESCO Press Release" },
        ],
      },
      {
        title: "European Tech Leaders Summit",
        role: "Co-organizer",
        description: "Co-organization of summit bringing together Europe's 100 youngest tech leaders",
        details: "Event coordination with European Commission to define Europe's technological future. Creation of manifesto for European innovation.",
        attendees: "100 European tech leaders",
        highlights: [
          "Full co-organization",
          "European manifesto creation",
          "EU Commission partnership",
          "Joint initiatives launch",
        ],
        media: [
          { title: "Tech Europe Manifesto" },
          { title: "Summit highlights" },
        ],
      },
    ],
  },
}

export default function EvenementsPage() {
  const [selectedType, setSelectedType] = useState("all")
  const { language } = useLanguage()

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  const eventTypes = [
    { id: "all", label: t("filters.all"), icon: Calendar },
    { id: "conference", label: t("filters.conference"), icon: Mic },
    { id: "award", label: t("filters.award"), icon: Award },
    { id: "meeting", label: t("filters.meeting"), icon: Briefcase },
    { id: "summit", label: t("filters.summit"), icon: Globe },
  ]

  const eventsData = [
    {
      id: 1,
      type: "summit",
      date: "2024-01-15",
      endDate: "2024-01-19",
      location: "Davos, Suisse",
      image: "/placeholder.svg?height=300&width=500&text=WEF+Davos+2024",
      mediaUrls: [
        { type: "video", url: "#" },
        { type: "article", url: "#" },
      ],
    },
    {
      id: 2,
      type: "conference",
      date: "2024-03-10",
      endDate: "2024-03-12",
      location: "Paris, France",
      image: "/placeholder.svg?height=300&width=500&text=Tech+Summit+Paris",
      mediaUrls: [
        { type: "video", url: "#" },
        { type: "presentation", url: "#" },
      ],
    },
    {
      id: 3,
      type: "meeting",
      date: "2023-11-20",
      location: "Palais de l'Élysée, Paris",
      image: "/placeholder.svg?height=300&width=500&text=Élysée+Meeting",
      mediaUrls: [
        { type: "article", url: "#" },
      ],
    },
    {
      id: 4,
      type: "conference",
      date: "2023-09-15",
      endDate: "2023-09-17",
      location: "Stanford, USA",
      image: "/placeholder.svg?height=300&width=500&text=AI+Ethics+Stanford",
      mediaUrls: [
        { type: "video", url: "#" },
        { type: "document", url: "#" },
      ],
    },
    {
      id: 5,
      type: "award",
      date: "2023-06-25",
      location: "Siège UNESCO, Paris",
      image: "/placeholder.svg?height=300&width=500&text=UNESCO+Award",
      mediaUrls: [
        { type: "video", url: "#" },
        { type: "article", url: "#" },
      ],
    },
    {
      id: 6,
      type: "summit",
      date: "2023-04-08",
      endDate: "2023-04-10",
      location: "Berlin, Allemagne",
      image: "/placeholder.svg?height=300&width=500&text=EU+Tech+Summit",
      mediaUrls: [
        { type: "document", url: "#" },
        { type: "video", url: "#" },
      ],
    },
  ]

  // Merge events data with translations
  const events = eventsData.map((data, idx) => ({
    ...data,
    ...t('events')[idx],
    media: data.mediaUrls.map((urlData, mediaIdx) => ({
      ...urlData,
      title: t('events')[idx].media[mediaIdx].title,
    })),
  }))

  const filteredEvents = selectedType === "all" ? events : events.filter((event) => event.type === selectedType)

  const getTypeColor = (type: string) => {
    const colors = {
      conference: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      award: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      meeting: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      summit: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    }
    return colors[type as keyof typeof colors] || "bg-gray-500/10 text-gray-600 border-gray-200"
  }

  const getTypeIcon = (type: string) => {
    const typeObj = eventTypes.find((t) => t.id === type)
    return typeObj ? typeObj.icon : Calendar
  }

  const formatDate = (dateStr: string, endDateStr?: string) => {
    const date = new Date(dateStr)
    const endDate = endDateStr ? new Date(endDateStr) : null

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }

    const locale = language === 'fr' ? 'fr-FR' : 'en-US'

    if (endDate && endDate.getTime() !== date.getTime()) {
      return `${date.toLocaleDateString(locale, options)} - ${endDate.toLocaleDateString(locale, options)}`
    }
    return date.toLocaleDateString(locale, options)
  }

  const getMediaIcon = (type: string) => {
    switch (type) {
      case "video":
        return Video
      case "document":
      case "presentation":
        return FileText
      default:
        return ExternalLink
    }
  }

  return (
    <div className="min-h-screen bg-background">


      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {t('pageTitle')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              {t('pageSubtitle')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">{t('stats.events')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15</div>
                <div className="text-sm text-muted-foreground">{t('stats.countries')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50k+</div>
                <div className="text-sm text-muted-foreground">{t('stats.participants')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">{t('stats.media')}</div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="grid" className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
              {/* Type Filter */}
              <div className="flex flex-wrap gap-2">
                {eventTypes.map((type) => {
                  const Icon = type.icon
                  return (
                    <Button
                      key={type.id}
                      variant={selectedType === type.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType(type.id)}
                      className="flex items-center space-x-2"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{type.label}</span>
                    </Button>
                  )
                })}
              </div>

              {/* View Toggle */}
              <TabsList className="grid w-full max-w-[200px] grid-cols-2">
                <TabsTrigger value="grid">{t('views.grid')}</TabsTrigger>
                <TabsTrigger value="timeline">{t('views.timeline')}</TabsTrigger>
              </TabsList>
            </div>

            {/* Grid View */}
            <TabsContent value="grid" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {filteredEvents.map((event) => {
                  const TypeIcon = getTypeIcon(event.type)
                  return (
                    <Dialog key={event.id}>
                      <DialogTrigger asChild>
                        <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                          <div className="aspect-video relative overflow-hidden rounded-t-lg">
                            <Image
                              src={event.image || "/placeholder.svg"}
                              alt={event.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className={getTypeColor(event.type)}>
                                <TypeIcon className="h-3 w-3 mr-1" />
                                {eventTypes.find((t) => t.id === event.type)?.label}
                              </Badge>
                            </div>
                          </div>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                              {event.title}
                            </CardTitle>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>{formatDate(event.date, event.endDate)}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2">
                                <Briefcase className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium text-primary">{event.role}</span>
                              </div>
                              <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                                {event.description}
                              </p>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-primary hover:text-primary/80 p-0 h-auto"
                              >
                                {t('labels.seeDetails')}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>

                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-balance">{event.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 80vw"
                          />

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-5 w-5 text-primary" />
                                <div>
                                  <span className="font-medium">{t('labels.date')}:</span>
                                  <div className="text-muted-foreground">{formatDate(event.date, event.endDate)}</div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-5 w-5 text-primary" />
                                <div>
                                  <span className="font-medium">{t('labels.location')}:</span>
                                  <div className="text-muted-foreground">{event.location}</div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Briefcase className="h-5 w-5 text-primary" />
                                <div>
                                  <span className="font-medium">{t('labels.role')}:</span>
                                  <div className="text-muted-foreground">{event.role}</div>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <div className="flex items-center space-x-2">
                                <Users className="h-5 w-5 text-primary" />
                                <div>
                                  <span className="font-medium">{t('labels.participants')}:</span>
                                  <div className="text-muted-foreground">{event.attendees}</div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <TypeIcon className="h-5 w-5 text-primary" />
                                <div>
                                  <span className="font-medium">{t('labels.type')}:</span>
                                  <div className="text-muted-foreground">
                                    {eventTypes.find((t) => t.id === event.type)?.label}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">{t('labels.description')}</h4>
                              <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold text-foreground mb-2">{t('labels.details')}</h4>
                              <p className="text-muted-foreground leading-relaxed">{event.details}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold text-foreground mb-3">{t('labels.highlights')}</h4>
                              <ul className="space-y-2">
                                {event.highlights.map((highlight: string, index: number) => (
                                  <li key={index} className="flex items-start space-x-2">
                                    <span className="text-accent mt-1">•</span>
                                    <span className="text-muted-foreground">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {event.media && event.media.length > 0 && (
                              <div>
                                <h4 className="font-semibold text-foreground mb-3">{t('labels.mediaResources')}</h4>
                                <div className="grid md:grid-cols-2 gap-3">
                                  {event.media.map((media: { type: string; url: string; title: string }, index: number) => {
                                    const MediaIcon = getMediaIcon(media.type)
                                    return (
                                      <Button
                                        key={index}
                                        variant="outline"
                                        className="justify-start h-auto p-3 bg-transparent"
                                        asChild
                                      >
                                        <a href={media.url} target="_blank" rel="noopener noreferrer">
                                          <MediaIcon className="h-4 w-4 mr-2" />
                                          <span>{media.title}</span>
                                          <ExternalLink className="h-3 w-3 ml-auto" />
                                        </a>
                                      </Button>
                                    )
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )
                })}
              </div>
            </TabsContent>

            {/* Timeline View */}
            <TabsContent value="timeline" className="space-y-6">
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2"></div>
                <div className="space-y-8">
                  {filteredEvents.map((event, index) => {
                    const TypeIcon = getTypeIcon(event.type)
                    return (
                      <div
                        key={event.id}
                        className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                      >
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:transform md:-translate-x-1/2 z-10"></div>
                        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                          <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader className="pb-3">
                              <div className="flex items-center justify-between mb-2">
                                <Badge className={getTypeColor(event.type)}>
                                  <TypeIcon className="h-3 w-3 mr-1" />
                                  {eventTypes.find((t) => t.id === event.type)?.label}
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                  {formatDate(event.date, event.endDate)}
                                </span>
                              </div>
                              <CardTitle className="text-lg">{event.title}</CardTitle>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <MapPin className="h-3 w-3" />
                                  <span>{event.location}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Briefcase className="h-3 w-3" />
                                  <span>{event.role}</span>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{event.description}</p>
                              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                                <Users className="h-3 w-3" />
                                <span>{event.attendees}</span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}