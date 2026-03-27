"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
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
import { useLanguage } from "@/components/navigation"

// Traductions
const translations = {
  fr: {
    pageTitle: "Certifications IT",
    pageSubtitle: "Expertise technique validée par les leaders de l'industrie",
    stats: {
      certifications: "Certifications",
      domains: "Domaines",
      averageScore: "Score Moyen",
      expertLevel: "Niveau Expert",
    },
    filters: {
      all: "Toutes",
      cloud: "Cloud",
      development: "Développement",
      database: "Base de Données",
      ia: "IA",
      python: "Python",
    },
    labels: {
      expiringSoon: "Expire bientôt",
      score: "Score",
      obtained: "Obtenu:",
      validUntil: "Valide jusqu'au:",
      seeDetails: "Voir les détails",
      generalInfo: "Informations Générales",
      organization: "Organisme:",
      level: "Niveau:",
      difficulty: "Difficulté:",
      certificationId: "ID Certification:",
      dates: "Dates",
      obtainedOn: "Obtenue le:",
      validUntilDate: "Valide jusqu'au:",
      performance: "Performance",
      scoreObtained: "Score obtenu",
      excellence: "Excellence",
      veryGood: "Très bien",
      good: "Bien",
      verifyCertification: "Vérifier la certification",
      description: "Description",
      technicalSkills: "Compétences Techniques",
      associatedProjects: "Projets Associés",
      continuousTraining: "Formation Continue",
      continuousTrainingText: "Toujours en quête d'excellence, je continue à me former aux dernières technologies et méthodologies.",
      viewTechnicalProjects: "Voir mes projets techniques",
      discussCollaboration: "Discuter d'une collaboration",
    },
    levels: {
      expert: "Expert",
      professional: "Professionnel",
      intermediate: "Intermédiaire",
    },
    difficulties: {
      expert: "Expert",
      advanced: "Avancé",
      intermediate: "Intermédiaire",
    },
    certifications: [
      {
        title: "Python Certified Associate Programmer (PCAP)",
        description: "Certification officielle de programmation Python.",
        details: "Maîtrise des concepts fondamentaux de Python, programmation orientée objet, gestion des exceptions, modules et bonnes pratiques.",
        projects: ["Développement d'applications Python", "Automatisation de scripts"],
      },
      {
        title: "Oracle Certified Associate SQL Database",
        description: "Certification officielle Oracle SQL Database.",
        details: "Compétences en conception, requêtage et gestion de bases de données relationnelles avec SQL Oracle.",
        projects: ["Optimisation de requêtes SQL", "Gestion de bases de données Oracle"],
      },
      {
        title: "Oracle Certified Associate Java SE Programmer",
        description: "Certification officielle Oracle Java SE Programmer.",
        details: "Maîtrise des bases du langage Java, POO, gestion des exceptions, collections et bonnes pratiques de développement.",
        projects: ["Développement d'applications Java", "POO avancée"],
      },
      {
        title: "AWS Certified Data Engineer Associate",
        description: "Certification AWS Data Engineer Associate.",
        details: "Expertise en conception, déploiement et gestion de solutions data sur AWS (ETL, Data Lake, Redshift, Glue, etc).",
        projects: ["Pipeline de données AWS", "Optimisation de stockage S3"],
      },
      {
        title: "AWS Certified Developer Associate",
        description: "Certification AWS Developer Associate.",
        details: "Développement et déploiement d'applications cloud natives sur AWS, gestion Lambda, API Gateway, DynamoDB, CI/CD.",
        projects: ["Déploiement d'API serverless", "Automatisation CI/CD AWS"],
      },
      {
        title: "AWS Certified Solution Architect Associate",
        description: "Certification AWS Solution Architect Associate.",
        details: "Conception d'architectures cloud sécurisées, hautement disponibles et optimisées sur AWS.",
        projects: ["Architecture multi-AZ", "Sécurisation d'infrastructure AWS"],
      },
      {
        title: "AWS Certified Cloud Practitioner",
        description: "Certification AWS Cloud Practitioner.",
        details: "Connaissances fondamentales du cloud AWS, services principaux, sécurité, facturation et support.",
        projects: ["Déploiement de services AWS", "Gestion des coûts cloud"],
      },
      {
        title: "HCIA IA",
        description: "Certification Huawei Certified ICT Associate - Intelligence Artificielle.",
        details: "Fondamentaux de l'IA, machine learning, deep learning, NLP, vision par ordinateur sur Huawei Cloud.",
        projects: ["Déploiement de modèles IA sur Huawei Cloud"],
      },
      {
        title: "HCIA Cloud Service",
        description: "Certification Huawei Certified ICT Associate - Cloud Service.",
        details: "Maîtrise des concepts de base du cloud Huawei, déploiement de services cloud, sécurité et gestion des ressources.",
        projects: ["Déploiement de solutions cloud Huawei"],
      },
    ],
  },
  en: {
    pageTitle: "IT Certifications",
    pageSubtitle: "Technical expertise validated by industry leaders",
    stats: {
      certifications: "Certifications",
      domains: "Domains",
      averageScore: "Average Score",
      expertLevel: "Expert Level",
    },
    filters: {
      all: "All",
      cloud: "Cloud",
      development: "Development",
      database: "Database",
      ia: "AI",
      python: "Python",
    },
    labels: {
      expiringSoon: "Expiring soon",
      score: "Score",
      obtained: "Obtained:",
      validUntil: "Valid until:",
      seeDetails: "See details",
      generalInfo: "General Information",
      organization: "Organization:",
      level: "Level:",
      difficulty: "Difficulty:",
      certificationId: "Certification ID:",
      dates: "Dates",
      obtainedOn: "Obtained on:",
      validUntilDate: "Valid until:",
      performance: "Performance",
      scoreObtained: "Score obtained",
      excellence: "Excellence",
      veryGood: "Very good",
      good: "Good",
      verifyCertification: "Verify certification",
      description: "Description",
      technicalSkills: "Technical Skills",
      associatedProjects: "Associated Projects",
      continuousTraining: "Continuous Training",
      continuousTrainingText: "Always seeking excellence, I continue to train on the latest technologies and methodologies.",
      viewTechnicalProjects: "View my technical projects",
      discussCollaboration: "Discuss collaboration",
    },
    levels: {
      expert: "Expert",
      professional: "Professional",
      intermediate: "Intermediate",
    },
    difficulties: {
      expert: "Expert",
      advanced: "Advanced",
      intermediate: "Intermediate",
    },
    certifications: [
      {
        title: "Python Certified Associate Programmer (PCAP)",
        description: "Official Python programming certification.",
        details: "Mastery of Python fundamentals, object-oriented programming, exception handling, modules and best practices.",
        projects: ["Python application development", "Script automation"],
      },
      {
        title: "Oracle Certified Associate SQL Database",
        description: "Official Oracle SQL Database certification.",
        details: "Skills in design, querying and management of relational databases with Oracle SQL.",
        projects: ["SQL query optimization", "Oracle database management"],
      },
      {
        title: "Oracle Certified Associate Java SE Programmer",
        description: "Official Oracle Java SE Programmer certification.",
        details: "Mastery of Java language basics, OOP, exception handling, collections and development best practices.",
        projects: ["Java application development", "Advanced OOP"],
      },
      {
        title: "AWS Certified Data Engineer Associate",
        description: "AWS Data Engineer Associate certification.",
        details: "Expertise in designing, deploying and managing data solutions on AWS (ETL, Data Lake, Redshift, Glue, etc).",
        projects: ["AWS data pipeline", "S3 storage optimization"],
      },
      {
        title: "AWS Certified Developer Associate",
        description: "AWS Developer Associate certification.",
        details: "Development and deployment of cloud native applications on AWS, Lambda management, API Gateway, DynamoDB, CI/CD.",
        projects: ["Serverless API deployment", "AWS CI/CD automation"],
      },
      {
        title: "AWS Certified Solution Architect Associate",
        description: "AWS Solution Architect Associate certification.",
        details: "Design of secure, highly available and optimized cloud architectures on AWS.",
        projects: ["Multi-AZ architecture", "AWS infrastructure security"],
      },
      {
        title: "AWS Certified Cloud Practitioner",
        description: "AWS Cloud Practitioner certification.",
        details: "AWS cloud fundamentals, main services, security, billing and support.",
        projects: ["AWS services deployment", "Cloud cost management"],
      },
      {
        title: "HCIA AI",
        description: "Huawei Certified ICT Associate - Artificial Intelligence certification.",
        details: "AI fundamentals, machine learning, deep learning, NLP, computer vision on Huawei Cloud.",
        projects: ["AI model deployment on Huawei Cloud"],
      },
      {
        title: "HCIA Cloud Service",
        description: "Huawei Certified ICT Associate - Cloud Service certification.",
        details: "Mastery of Huawei cloud basics, cloud services deployment, security and resource management.",
        projects: ["Huawei cloud solutions deployment"],
      },
    ],
  },
}

export default function CertificationsPage() {
  const [selectedDomain, setSelectedDomain] = useState("all")
  const { language } = useLanguage()

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  const domains = [
    { id: "all", label: t('filters.all'), icon: Award },
    { id: "cloud", label: t('filters.cloud'), icon: Cloud },
    { id: "development", label: t('filters.development'), icon: Code },
    { id: "database", label: t('filters.database'), icon: Database },
    { id: "ia", label: t('filters.ia'), icon: Star },
    { id: "python", label: t('filters.python'), icon: Code },
  ]

  const certificationsData = [
    {
      id: 1,
      provider: "Python Institute",
      domain: "python",
      level: t('levels.intermediate'),
      date: "2022-10-14",
      validUntil: "",
      credentialId: "PCAP-31-03",
      logo: "/certif/pcap.png",
      skills: ["Python", "OOP", "Exceptions", "Modules", "etc"],
      verificationUrl: "https://www.credly.com/badges/ed23979f-b8df-43ad-a8a0-7e2d1d3ffbd5/linked_in_profile",
      score: 92,
      difficulty: t('difficulties.intermediate'),
    },
    {
      id: 2,
      provider: "Oracle",
      domain: "database",
      level: t('levels.intermediate'),
      date: "2023-07-06",
      validUntil: "",
      credentialId: "OCA-SQL-2023",
      logo: "/certif/oca.png",
      skills: ["SQL", "Oracle", "Database Design", "Query Optimization"],
      verificationUrl: "https://drive.google.com/file/d/1_BlebsDJfJDNh-LON6AQX5HJkclrNidz/view",
      score: 80,
      difficulty: t('difficulties.intermediate'),
    },
    {
      id: 3,
      provider: "Oracle",
      domain: "development",
      level: t('levels.intermediate'),
      date: "2023-03-01",
      validUntil: "",
      credentialId: "OCA-JAVA-2023",
      logo: "/certif/oca.png",
      skills: ["Java", "OOP", "Collections", "Exceptions"],
      verificationUrl: "https://drive.google.com/file/d/1kWuumTgi2vMG6eMiet9xuZObOJKHWkHT/view?usp=sharing",
      score: 88,
      difficulty: t('difficulties.intermediate'),
    },
    {
      id: 4,
      provider: "Amazon Web Services",
      domain: "cloud",
      level: t('levels.professional'),
      date: "2024-05-01",
      validUntil: "2027-05-01",
      credentialId: "AWS-DEA-2024",
      logo: "/certif/aws.png",
      skills: ["AWS", "ETL", "Data Lake", "Redshift", "Glue"],
      verificationUrl: "https://www.credly.com/badges/a2aef3e6-2b51-4d14-b396-843e1b7b82d2/linked_in_profile",
      score: 93,
      difficulty: t('difficulties.advanced'),
    },
    {
      id: 5,
      provider: "Amazon Web Services",
      domain: "cloud",
      level: t('levels.professional'),
      date: "2023-09-01",
      validUntil: "2026-09-01",
      credentialId: "AWS-DVA-2023",
      logo: "/certif/aws.png",
      skills: ["AWS", "Lambda", "API Gateway", "DynamoDB", "CI/CD"],
      verificationUrl: "https://www.credly.com/badges/1987a5f7-fbdf-43d2-b26b-c47629efc50e/linked_in_profile",
      score: 90,
      difficulty: t('difficulties.advanced'),
    },
    {
      id: 6,
      provider: "Amazon Web Services",
      domain: "cloud",
      level: t('levels.professional'),
      date: "2023-06-01",
      validUntil: "2026-06-01",
      credentialId: "AWS-SAA-2023",
      logo: "/certif/aws.png",
      skills: ["AWS", "Architecture", "Security", "High Availability"],
      verificationUrl: "https://www.credly.com/badges/436c5fa4-f9c5-4881-91ab-770f4cd10b08/public_url",
      score: 91,
      difficulty: t('difficulties.advanced'),
    },
    {
      id: 7,
      provider: "Amazon Web Services",
      domain: "cloud",
      level: t('levels.intermediate'),
      date: "2022-12-14",
      validUntil: "2025-12-01",
      credentialId: "AWS-CCP-2022-XXXXXX",
      logo: "/certif/aws.png",
      skills: ["AWS", "Cloud Fundamentals", "Security", "Billing"],
      verificationUrl: "https://www.credly.com/badges/53204d3d-e2e4-4b8f-8176-d9b7f38ac4a8/linked_in_profile",
      score: 89,
      difficulty: t('difficulties.intermediate'),
    },
    {
      id: 8,
      provider: "Huawei",
      domain: "ia",
      level: t('levels.intermediate'),
      date: "2024-12-02",
      validUntil: "",
      credentialId: "HCIA-IA-2023",
      logo: "/certif/hcia.png",
      skills: ["AI", "Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
      verificationUrl: "https://drive.google.com/file/d/19OtlWAeR7sGLk_7c52Hc-jOwxYwspA5K/view?usp=sharing",
      score: 87,
      difficulty: t('difficulties.intermediate'),
    },
    {
      id: 9,
      provider: "Huawei",
      domain: "cloud",
      level: t('levels.intermediate'),
      date: "2023-07-12",
      validUntil: "",
      credentialId: "HCIA-Cloud-2023",
      logo: "/certif/hcia.png",
      skills: ["Huawei Cloud", "Cloud Services", "Security", "Resource Management"],
      verificationUrl: "https://drive.google.com/file/d/1uk8t5Izal5H3L0dWtszSUrXtfI7fGk93/view?usp=drivesdk",
      score: 88,
      difficulty: t('difficulties.intermediate'),
    },
  ]

  const certifications = certificationsData.map((cert, idx) => ({
    ...cert,
    title: translations[language].certifications[idx].title,
    description: translations[language].certifications[idx].description,
    details: translations[language].certifications[idx].details,
    projects: translations[language].certifications[idx].projects,
  }))

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
    if (level.includes("Expert") || level.includes("expert")) {
      return "bg-amber-500/10 text-amber-600 border-amber-200"
    }
    if (level.includes("Professionnel") || level.includes("Professional") || level.includes("professional")) {
      return "bg-green-500/10 text-green-600 border-green-200"
    }
    if (level.includes("Intermédiaire") || level.includes("Intermediate") || level.includes("intermediate")) {
      return "bg-blue-500/10 text-blue-600 border-blue-200"
    }
    return "bg-gray-500/10 text-gray-600 border-gray-200"
  }

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty.includes("Expert") || difficulty.includes("expert")) {
      return "text-red-600"
    }
    if (difficulty.includes("Avancé") || difficulty.includes("Advanced") || difficulty.includes("advanced")) {
      return "text-orange-600"
    }
    if (difficulty.includes("Intermédiaire") || difficulty.includes("Intermediate") || difficulty.includes("intermediate")) {
      return "text-blue-600"
    }
    return "text-gray-600"
  }

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "N/A"
    const locale = language === 'fr' ? 'fr-FR' : 'en-US'
    return new Date(dateStr).toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const isExpiringSoon = (validUntil: string) => {
    if (!validUntil) return false
    const expiryDate = new Date(validUntil)
    const sixMonthsFromNow = new Date()
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6)
    return expiryDate < sixMonthsFromNow
  }

  const getScoreLabel = (score: number) => {
    if (score >= 90) return t('labels.excellence')
    if (score >= 80) return t('labels.veryGood')
    return t('labels.good')
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">{t('pageTitle')}</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              {t('pageSubtitle')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{certifications.length}</div>
                <div className="text-sm text-muted-foreground">{t('stats.certifications')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">{t('stats.domains')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {Math.round(certifications.reduce((acc, cert) => acc + cert.score, 0) / certifications.length)}%
                </div>
                <div className="text-sm text-muted-foreground">{t('stats.averageScore')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {certifications.filter((cert) => cert.level.includes("Expert") || cert.level.includes("expert")).length}
                </div>
                <div className="text-sm text-muted-foreground">{t('stats.expertLevel')}</div>
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
                          {t('labels.expiringSoon')}
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="pb-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <Image
                            src={cert.logo || "/placeholder.svg"}
                            alt={`${cert.provider} logo`}
                            width={64}
                            height={64}
                            className="object-contain rounded-lg bg-white p-2 border"
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
                          <span className="text-muted-foreground">{t('labels.score')}</span>
                          <span className="font-medium">{cert.score}%</span>
                        </div>
                        <Progress value={cert.score} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{t('labels.obtained')}</span>
                        </div>
                        <span>{formatDate(cert.date)}</span>
                      </div>

                      {cert.validUntil && (
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-muted-foreground">{t('labels.validUntil')}</span>
                          </div>
                          <span className={isExpiringSoon(cert.validUntil) ? "text-red-600" : ""}>
                            {formatDate(cert.validUntil)}
                          </span>
                        </div>
                      )}

                      <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary/80">
                        {t('labels.seeDetails')}
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-balance flex items-center space-x-3">
                      <Image
                        src={cert.logo || "/placeholder.svg"}
                        alt={`${cert.provider} logo`}
                        width={48}
                        height={48}
                        className="object-contain rounded-lg bg-white p-2 border"
                      />
                      <span>{cert.title}</span>
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{t('labels.generalInfo')}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">{t('labels.organization')}</span>
                              <span>{cert.provider}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">{t('labels.level')}</span>
                              <Badge className={getLevelColor(cert.level)}>{cert.level}</Badge>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">{t('labels.difficulty')}</span>
                              <span className={getDifficultyColor(cert.difficulty)}>{cert.difficulty}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">{t('labels.certificationId')}</span>
                              <span className="font-mono text-xs">{cert.credentialId}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{t('labels.dates')}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">{t('labels.obtainedOn')}</span>
                              <span>{formatDate(cert.date)}</span>
                            </div>
                            {cert.validUntil && (
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">{t('labels.validUntilDate')}</span>
                                <span className={isExpiringSoon(cert.validUntil) ? "text-red-600" : ""}>
                                  {formatDate(cert.validUntil)}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{t('labels.performance')}</h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">{t('labels.scoreObtained')}</span>
                              <span className="font-bold text-lg">{cert.score}%</span>
                            </div>
                            <Progress value={cert.score} className="h-3" />
                            <div className="flex items-center space-x-2">
                              <Star className="h-4 w-4 text-amber-500" />
                              <span className="text-sm text-muted-foreground">
                                {getScoreLabel(cert.score)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <Button className="w-full" asChild>
                            <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              {t('labels.verifyCertification')}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t('labels.description')}</h4>
                      <p className="text-muted-foreground leading-relaxed">{cert.details}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">{t('labels.technicalSkills')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="border-primary/20 text-primary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">{t('labels.associatedProjects')}</h4>
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
                <h3 className="text-xl font-semibold text-foreground mb-2">{t('labels.continuousTraining')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('labels.continuousTrainingText')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-primary hover:bg-primary/90">{t('labels.viewTechnicalProjects')}</Button>
                  <Button variant="outline">{t('labels.discussCollaboration')}</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}