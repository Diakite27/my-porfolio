"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, Mic, Award, Briefcase, Globe, ExternalLink, Video, FileText } from "lucide-react"

export default function EvenementsPage() {
  const [selectedType, setSelectedType] = useState("all")

  const eventTypes = [
    { id: "all", label: "Tous", icon: Calendar },
    { id: "conference", label: "Conférences", icon: Mic },
    { id: "award", label: "Cérémonies", icon: Award },
    { id: "meeting", label: "Rencontres", icon: Briefcase },
    { id: "summit", label: "Sommets", icon: Globe },
  ]

  const events = [
    {
      id: 1,
      title: "World Economic Forum 2024",
      type: "summit",
      date: "2024-01-15",
      endDate: "2024-01-19",
      location: "Davos, Suisse",
      role: "Panéliste Principal",
      description: "Participation au panel 'Future of AI in Society' devant les leaders mondiaux",
      details:
        "Présentation des enjeux éthiques de l'IA et proposition de frameworks de gouvernance internationale. Discussion avec des PDG de Fortune 500 et des dirigeants politiques sur l'avenir technologique.",
      attendees: "3000+ leaders mondiaux",
      image: "/placeholder.svg?height=300&width=500&text=WEF+Davos+2024",
      highlights: [
        "Keynote devant 500+ dirigeants",
        "Rencontre avec 15 ministres",
        "Signature d'accords de coopération",
        "Interview CNN International",
      ],
      media: [
        { type: "video", title: "Keynote WEF 2024", url: "#" },
        { type: "article", title: "Article Forbes", url: "#" },
      ],
    },
    {
      id: 2,
      title: "Tech Innovation Summit Paris",
      type: "conference",
      date: "2024-03-10",
      endDate: "2024-03-12",
      location: "Paris, France",
      role: "Keynote Speaker",
      description: "Conférence principale sur 'L'avenir de l'Intelligence Artificielle en Europe'",
      details:
        "Présentation des dernières avancées en IA responsable et démonstration de technologies révolutionnaires. Plus de 2000 participants de 40 pays.",
      attendees: "2000+ professionnels tech",
      image: "/placeholder.svg?height=300&width=500&text=Tech+Summit+Paris",
      highlights: [
        "Keynote de 45 minutes",
        "Q&A avec 500+ questions",
        "Démonstration technologique live",
        "Prix du meilleur speaker",
      ],
      media: [
        { type: "video", title: "Keynote complète", url: "#" },
        { type: "presentation", title: "Slides de présentation", url: "#" },
      ],
    },
    {
      id: 3,
      title: "Rencontre Présidentielle Élysée",
      type: "meeting",
      date: "2023-11-20",
      location: "Palais de l'Élysée, Paris",
      role: "Conseiller Innovation",
      description: "Consultation privée avec le Président sur la stratégie nationale d'IA",
      details:
        "Réunion de travail de 2 heures pour définir la politique française en matière d'intelligence artificielle et d'innovation technologique. Présentation de recommandations stratégiques.",
      attendees: "Réunion privée",
      image: "/placeholder.svg?height=300&width=500&text=Élysée+Meeting",
      highlights: [
        "Présentation stratégie IA France",
        "Recommandations politiques",
        "Nomination au conseil consultatif",
        "Communiqué de presse officiel",
      ],
      media: [{ type: "article", title: "Communiqué Élysée", url: "#" }],
    },
    {
      id: 4,
      title: "Global AI Ethics Conference",
      type: "conference",
      date: "2023-09-15",
      endDate: "2023-09-17",
      location: "Stanford, USA",
      role: "Modérateur Principal",
      description: "Modération des débats sur l'éthique de l'IA avec les plus grands experts mondiaux",
      details:
        "Animation de 6 panels sur l'éthique de l'IA, la gouvernance algorithmique et l'impact social des technologies émergentes. Coordination avec Stanford, MIT et Oxford.",
      attendees: "800+ chercheurs et experts",
      image: "/placeholder.svg?height=300&width=500&text=AI+Ethics+Stanford",
      highlights: [
        "Modération de 6 panels",
        "Collaboration Stanford-MIT-Oxford",
        "Publication rapport final",
        "Création groupe de travail international",
      ],
      media: [
        { type: "video", title: "Panels complets", url: "#" },
        { type: "document", title: "Rapport final", url: "#" },
      ],
    },
    {
      id: 5,
      title: "Cérémonie Prix Innovation UNESCO",
      type: "award",
      date: "2023-06-25",
      location: "Siège UNESCO, Paris",
      role: "Lauréat",
      description: "Réception du Prix UNESCO pour l'Innovation Technologique au Service de l'Humanité",
      details:
        "Reconnaissance internationale pour le développement de technologies d'IA au service de l'éducation dans les pays en développement. Cérémonie en présence de 50 ambassadeurs.",
      attendees: "300+ diplomates et experts",
      image: "/placeholder.svg?height=300&width=500&text=UNESCO+Award",
      highlights: [
        "Discours de remerciement",
        "Rencontre avec 50 ambassadeurs",
        "Signature partenariats internationaux",
        "Couverture médiatique mondiale",
      ],
      media: [
        { type: "video", title: "Cérémonie complète", url: "#" },
        { type: "article", title: "Communiqué UNESCO", url: "#" },
      ],
    },
    {
      id: 6,
      title: "European Tech Leaders Summit",
      type: "summit",
      date: "2023-04-08",
      endDate: "2023-04-10",
      location: "Berlin, Allemagne",
      role: "Co-organisateur",
      description: "Co-organisation du sommet réunissant les 100 plus jeunes leaders tech d'Europe",
      details:
        "Coordination de l'événement avec la Commission Européenne pour définir l'avenir technologique de l'Europe. Création d'un manifeste pour l'innovation européenne.",
      attendees: "100 leaders tech européens",
      image: "/placeholder.svg?height=300&width=500&text=EU+Tech+Summit",
      highlights: [
        "Co-organisation complète",
        "Création manifeste européen",
        "Partenariat Commission UE",
        "Lancement initiatives communes",
      ],
      media: [
        { type: "document", title: "Manifeste Tech Europe", url: "#" },
        { type: "video", title: "Highlights du sommet", url: "#" },
      ],
    },
  ]

  const filteredEvents = selectedType === "all" ? events : events.filter((event) => event.type === selectedType)

  const getTypeColor = (type: string) => {
    const colors = {
      conference: "bg-blue-500/10 text-blue-600 border-blue-200",
      award: "bg-amber-500/10 text-amber-600 border-amber-200",
      meeting: "bg-green-500/10 text-green-600 border-green-200",
      summit: "bg-purple-500/10 text-purple-600 border-purple-200",
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

    if (endDate && endDate.getTime() !== date.getTime()) {
      return `${date.toLocaleDateString("fr-FR", options)} - ${endDate.toLocaleDateString("fr-FR", options)}`
    }
    return date.toLocaleDateString("fr-FR", options)
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
      <Navigation />

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Événements & Participations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Conférences internationales, rencontres officielles et sommets technologiques
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Événements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15</div>
                <div className="text-sm text-muted-foreground">Pays</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50k+</div>
                <div className="text-sm text-muted-foreground">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Médias</div>
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
                <TabsTrigger value="grid">Grille</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
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
                            <img
                              src={event.image || "/placeholder.svg"}
                              alt={event.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                                Voir les détails
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
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full aspect-video object-cover rounded-lg"
                          />

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-5 w-5 text-primary" />
                                <div>
                                  <span className="font-medium">Date:</span>
                                  <div className="text-muted-foreground">{formatDate(event.date, event.endDate)}</div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-5 w-5 text-primary" />
                                <div>
                                  <span className="font-medium">Lieu:</span>
                                  <div className="text-muted-foreground">{event.location}</div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Briefcase className="h-5 w-5 text-primary" />
                                <div>
                                  <span className="font-medium">Rôle:</span>
                                  <div className="text-muted-foreground">{event.role}</div>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <div className="flex items-center space-x-2">
                                <Users className="h-5 w-5 text-primary" />
                                <div>
                                  <span className="font-medium">Participants:</span>
                                  <div className="text-muted-foreground">{event.attendees}</div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <TypeIcon className="h-5 w-5 text-primary" />
                                <div>
                                  <span className="font-medium">Type:</span>
                                  <div className="text-muted-foreground">
                                    {eventTypes.find((t) => t.id === event.type)?.label}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Description</h4>
                              <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Détails</h4>
                              <p className="text-muted-foreground leading-relaxed">{event.details}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold text-foreground mb-3">Points Forts</h4>
                              <ul className="space-y-2">
                                {event.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start space-x-2">
                                    <span className="text-accent mt-1">•</span>
                                    <span className="text-muted-foreground">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {event.media && event.media.length > 0 && (
                              <div>
                                <h4 className="font-semibold text-foreground mb-3">Médias & Ressources</h4>
                                <div className="grid md:grid-cols-2 gap-3">
                                  {event.media.map((media, index) => {
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
