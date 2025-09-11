"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Award,
  Calendar,
  ExternalLink,
  Shield,
  Cloud,
  Code,
  Database,
  Smartphone,
  Globe,
  CheckCircle,
  Star,
  Trophy,
  Target,
} from "lucide-react"

export default function CertificationsPage() {
  const [selectedDomain, setSelectedDomain] = useState("all")

  const domains = [
    { id: "all", label: "Toutes", icon: Award },
    { id: "cloud", label: "Cloud", icon: Cloud },
    { id: "development", label: "Développement", icon: Code },
    { id: "database", label: "Base de Données", icon: Database },
    { id: "ia", label: "IA", icon: Star },
    { id: "python", label: "Python", icon: Code },
  ]

  const certifications = [
    {
      id: 1,
      title: "Python Certified Associate Programmer (PCAP)",
      provider: "Python Institute",
      domain: "python",
      level: "Intermédiaire",
      date: "2022-10-14",
      validUntil: "",
      credentialId: "PCAP-31-03",
      description: "Certification officielle de programmation Python.",
      details: "Maîtrise des concepts fondamentaux de Python, programmation orientée objet, gestion des exceptions, modules et bonnes pratiques.",
      logo: "/certif/pcap.png",
      skills: ["Python", "OOP", "Exceptions", "Modules", "etc"],
      projects: ["Développement d'applications Python", "Automatisation de scripts"],
      verificationUrl: "https://www.credly.com/badges/ed23979f-b8df-43ad-a8a0-7e2d1d3ffbd5/linked_in_profile",
      score: 92,
      difficulty: "Intermédiaire",
    },
    {
      id: 2,
      title: "Oracle Certified Associate SQL Database",
      provider: "Oracle",
      domain: "database",
      level: "Intermédiaire",
      date: "2023-07-06",
      validUntil: "",
      credentialId: "OCA-SQL-2023",
      description: "Certification officielle Oracle SQL Database.",
      details: "Compétences en conception, requêtage et gestion de bases de données relationnelles avec SQL Oracle.",
      logo: "/certif/oca.png",
      skills: ["SQL", "Oracle", "Database Design", "Query Optimization"],
      projects: ["Optimisation de requêtes SQL", "Gestion de bases de données Oracle"],
      verificationUrl: "https://drive.google.com/file/d/1_BlebsDJfJDNh-LON6AQX5HJkclrNidz/view",
      score:80,
      difficulty: "Intermédiaire",
    },
    {
      id: 3,
      title: "Oracle Certified Associate Java SE Programmer",
      provider: "Oracle",
      domain: "development",
      level: "Intermédiaire",
      date: "2023-03-01",
      validUntil: "",
      credentialId: "OCA-JAVA-2023",
      description: "Certification officielle Oracle Java SE Programmer.",
      details: "Maîtrise des bases du langage Java, POO, gestion des exceptions, collections et bonnes pratiques de développement.",
      logo: "/certif/oca.png",
      skills: ["Java", "OOP", "Collections", "Exceptions"],
      projects: ["Développement d'applications Java", "POO avancée"],
      verificationUrl: "https://drive.google.com/file/d/1kWuumTgi2vMG6eMiet9xuZObOJKHWkHT/view?usp=sharing",
      score: 88,
      difficulty: "Intermédiaire",
    },
    {
      id: 4,
      title: "AWS Certified Data Engineer Associate",
      provider: "Amazon Web Services",
      domain: "cloud",
      level: "Professionnel",
      date: "2024-05-01",
      validUntil: "2027-05-01",
      credentialId: "AWS-DEA-2024",
      description: "Certification AWS Data Engineer Associate.",
      details: "Expertise en conception, déploiement et gestion de solutions data sur AWS (ETL, Data Lake, Redshift, Glue, etc).",
      logo: "/certif/aws.png",
      skills: ["AWS", "ETL", "Data Lake", "Redshift", "Glue"],
      projects: ["Pipeline de données AWS", "Optimisation de stockage S3"],
      verificationUrl: "https://www.credly.com/badges/a2aef3e6-2b51-4d14-b396-843e1b7b82d2/linked_in_profile",
      score: 93,
      difficulty: "Avancé",
    },
    {
      id: 5,
      title: "AWS Certified Developer Associate",
      provider: "Amazon Web Services",
      domain: "cloud",
      level: "Professionnel",
      date: "2023-09-01",
      validUntil: "2026-09-01",
      credentialId: "AWS-DVA-2023",
      description: "Certification AWS Developer Associate.",
      details: "Développement et déploiement d'applications cloud natives sur AWS, gestion Lambda, API Gateway, DynamoDB, CI/CD.",
      logo: "/certif/aws.png",
      skills: ["AWS", "Lambda", "API Gateway", "DynamoDB", "CI/CD"],
      projects: ["Déploiement d'API serverless", "Automatisation CI/CD AWS"],
      verificationUrl: "https://www.credly.com/badges/1987a5f7-fbdf-43d2-b26b-c47629efc50e/linked_in_profile",
      score: 90,
      difficulty: "Avancé",
    },
    {
      id: 6,
      title: "AWS Certified Solution Architect Associate",
      provider: "Amazon Web Services",
      domain: "cloud",
      level: "Professionnel",
      date: "2023-06-01",
      validUntil: "2026-06-01",
      credentialId: "AWS-SAA-2023",
      description: "Certification AWS Solution Architect Associate.",
      details: "Conception d'architectures cloud sécurisées, hautement disponibles et optimisées sur AWS.",
      logo: "/certif/aws.png",
      skills: ["AWS", "Architecture", "Security", "High Availability"],
      projects: ["Architecture multi-AZ", "Sécurisation d'infrastructure AWS"],
      verificationUrl: "https://www.credly.com/badges/436c5fa4-f9c5-4881-91ab-770f4cd10b08/public_url",
      score: 91,
      difficulty: "Avancé",
    },
    {
      id: 7,
      title: "AWS Certified Cloud Practitioner",
      provider: "Amazon Web Services",
      domain: "cloud",
      level: "Intermédiaire",
      date: "2022-12-14",
      validUntil: "2025-12-01",
      credentialId: "AWS-CCP-2022-XXXXXX",
      description: "Certification AWS Cloud Practitioner.",
      details: "Connaissances fondamentales du cloud AWS, services principaux, sécurité, facturation et support.",
      logo: "/certif/aws.png",
      skills: ["AWS", "Cloud Fundamentals", "Security", "Billing"],
      projects: ["Déploiement de services AWS", "Gestion des coûts cloud"],
      verificationUrl: "https://www.credly.com/badges/53204d3d-e2e4-4b8f-8176-d9b7f38ac4a8/linked_in_profile",
      score: 89,
      difficulty: "Intermédiaire",
    },
    {
      id: 8,
      title: "HCIA IA",
      provider: "Huawei",
      domain: "ia",
      level: "Intermédiaire",
      date: "2024-12-02",
      validUntil: "",
      credentialId: "HCIA-IA-2023",
      description: "Certification Huawei Certified ICT Associate - Intelligence Artificielle.",
      details: "Fondamentaux de l'IA, machine learning, deep learning, NLP, vision par ordinateur sur Huawei Cloud.",
      logo: "/certif/hcia.png",
      skills: ["AI", "Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
      projects: ["Déploiement de modèles IA sur Huawei Cloud"],
      verificationUrl: "https://drive.google.com/file/d/19OtlWAeR7sGLk_7c52Hc-jOwxYwspA5K/view?usp=sharing",
      score: 87,
      difficulty: "Intermédiaire",
    },
    {
      id: 9,
      title: "HCIA Cloud Service",
      provider: "Huawei",
      domain: "cloud",
      level: "Intermédiaire",
      date: "2023-07-12",
      validUntil: "",
      credentialId: "HCIA-Cloud-2023",
      description: "Certification Huawei Certified ICT Associate - Cloud Service.",
      details: "Maîtrise des concepts de base du cloud Huawei, déploiement de services cloud, sécurité et gestion des ressources.",
      logo: "/certif/hcia.png",
      skills: ["Huawei Cloud", "Cloud Services", "Security", "Resource Management"],
      projects: ["Déploiement de solutions cloud Huawei"],
      verificationUrl: "https://drive.google.com/file/d/1uk8t5Izal5H3L0dWtszSUrXtfI7fGk93/view?usp=drivesdk",
      score: 88,
      difficulty: "Intermédiaire",
    },
  ]

  const filteredCertifications =
    selectedDomain === "all" ? certifications : certifications.filter((cert) => cert.domain === selectedDomain)

  const getDomainColor = (domain: string) => {
    const colors = {
      cloud: "bg-blue-500/10 text-blue-600 border-blue-200",
      development: "bg-green-500/10 text-green-600 border-green-200",
      security: "bg-red-500/10 text-red-600 border-red-200",
      database: "bg-purple-500/10 text-purple-600 border-purple-200",
      mobile: "bg-orange-500/10 text-orange-600 border-orange-200",
      web: "bg-cyan-500/10 text-cyan-600 border-cyan-200",
    }
    return colors[domain as keyof typeof colors] || "bg-gray-500/10 text-gray-600 border-gray-200"
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-amber-500/10 text-amber-600 border-amber-200"
      case "Professionnel":
        return "bg-green-500/10 text-green-600 border-green-200"
      case "Intermédiaire":
        return "bg-blue-500/10 text-blue-600 border-blue-200"
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-200"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Expert":
        return "text-red-600"
      case "Avancé":
        return "text-orange-600"
      case "Intermédiaire":
        return "text-blue-600"
      default:
        return "text-gray-600"
    }
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const isExpiringSoon = (validUntil: string) => {
    const expiryDate = new Date(validUntil)
    const sixMonthsFromNow = new Date()
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6)
    return expiryDate < sixMonthsFromNow
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Certifications IT</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Expertise technique validée par les leaders de l'industrie
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{certifications.length}</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Domaines</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {Math.round(certifications.reduce((acc, cert) => acc + cert.score, 0) / certifications.length)}%
                </div>
                <div className="text-sm text-muted-foreground">Score Moyen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {certifications.filter((cert) => cert.level === "Expert").length}
                </div>
                <div className="text-sm text-muted-foreground">Niveau Expert</div>
              </div>
            </div>
          </div>

          {/* Domain Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {domains.map((domain) => {
              const Icon = domain.icon
              return (
                <Button
                  key={domain.id}
                  variant={selectedDomain === domain.id ? "default" : "outline"}
                  onClick={() => setSelectedDomain(domain.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="h-4 w-4" />
                  <span>{domain.label}</span>
                </Button>
              )
            })}
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert) => (
              <Dialog key={cert.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 relative">
                    {isExpiringSoon(cert.validUntil) && (
                      <div className="absolute top-2 right-2 z-10">
                        <Badge variant="destructive" className="text-xs">
                          Expire bientôt
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="pb-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            src={cert.logo || "/placeholder.svg"}
                            alt={`${cert.provider} logo`}
                            className="w-16 h-16 object-contain rounded-lg bg-white p-2 border"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                            {cert.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{cert.provider}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge className={getDomainColor(cert.domain)}>
                          {domains.find((d) => d.id === cert.domain)?.label}
                        </Badge>
                        <Badge className={getLevelColor(cert.level)}>{cert.level}</Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">{cert.description}</p>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Score</span>
                          <span className="font-medium">{cert.score}%</span>
                        </div>
                        <Progress value={cert.score} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">Obtenu:</span>
                        </div>
                        <span>{formatDate(cert.date)}</span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-muted-foreground">Valide jusqu'au:</span>
                        </div>
                        <span className={isExpiringSoon(cert.validUntil) ? "text-red-600" : ""}>
                          {formatDate(cert.validUntil)}
                        </span>
                      </div>

                      <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary/80">
                        Voir les détails
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-balance flex items-center space-x-3">
                      <img
                        src={cert.logo || "/placeholder.svg"}
                        alt={`${cert.provider} logo`}
                        className="w-12 h-12 object-contain rounded-lg bg-white p-2 border"
                      />
                      <span>{cert.title}</span>
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Informations Générales</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Organisme:</span>
                              <span>{cert.provider}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Niveau:</span>
                              <Badge className={getLevelColor(cert.level)}>{cert.level}</Badge>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Difficulté:</span>
                              <span className={getDifficultyColor(cert.difficulty)}>{cert.difficulty}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">ID Certification:</span>
                              <span className="font-mono text-xs">{cert.credentialId}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Dates</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Obtenue le:</span>
                              <span>{formatDate(cert.date)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Valide jusqu'au:</span>
                              <span className={isExpiringSoon(cert.validUntil) ? "text-red-600" : ""}>
                                {formatDate(cert.validUntil)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Performance</h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">Score obtenu</span>
                              <span className="font-bold text-lg">{cert.score}%</span>
                            </div>
                            <Progress value={cert.score} className="h-3" />
                            <div className="flex items-center space-x-2">
                              <Star className="h-4 w-4 text-amber-500" />
                              <span className="text-sm text-muted-foreground">
                                {cert.score >= 90 ? "Excellence" : cert.score >= 80 ? "Très bien" : "Bien"}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <Button className="w-full" asChild>
                            <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Vérifier la certification
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Description</h4>
                      <p className="text-muted-foreground leading-relaxed">{cert.details}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Compétences Techniques</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="border-primary/20 text-primary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Projets Associés</h4>
                      <ul className="space-y-2">
                        {cert.projects.map((project, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Target className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-secondary/50 max-w-2xl mx-auto">
              <CardContent className="py-8">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Formation Continue</h3>
                <p className="text-muted-foreground mb-6">
                  Toujours en quête d'excellence, je continue à me former aux dernières technologies et méthodologies.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-primary hover:bg-primary/90">Voir mes projets techniques</Button>
                  <Button variant="outline">Discuter d'une collaboration</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
