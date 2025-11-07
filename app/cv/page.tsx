"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, MapPin, Mail, Phone, Globe, Calendar, Award, Briefcase, GraduationCap, Code, Linkedin } from "lucide-react"
import { useLanguage } from "@/components/navigation"

// Traductions
const translations = {
  fr: {
    pageTitle: "Curriculum Vitae",
    pageSubtitle: "Profil complet d'un Talent numérique reconnu internationalement",
    downloadCV: "Télécharger le CV (PDF)",
    personalInfo: "Informations Personnelles",
    professionalSummary: "Résumé Professionnel",
    summaryText: "Ingénieur Data & Intelligence Artificielle, passionné par la Data Science et le Cloud. Double champion du monde Huawei ICT (IA, Cloud & Big Data), lauréat du Prix National d'Excellence 2025 en Côte d'Ivoire, j'ai mené des projets innovants en prédiction par IA et en formation de talents. Je cherche à relever de nouveaux défis techniques et scientifiques en France et à l'international.",
    professionalExperience: "Expérience Professionnelle",
    education: "Formation",
    technicalSkills: "Compétences Techniques",
    languages: "Langues",
    languageLevels: {
      french: "Français",
      frenchLevel: "Langue maternelle",
      english: "Anglais",
      englishLevel: "Courant",
      spanish: "Espagnol",
      spanishLevel: "Débutant",
    },
    downloadSection: {
      title: "Version PDF Complète",
      description: "Téléchargez la version PDF complète avec toutes les références et recommandations",
    },
    experiences: [
      {
        title: "Data Scientist",
        company: "Saint-Gobain Conceptions Verrières",
        period: "02/2025 – 08/2025",
        location: "Aubervilliers, France",
        description: "Extraction et analyse des données, mise en place dashboards intéractifs et développement de modèles d'IA.",
        achievements: [
          "Développement de modèles IA réduisant le temps de calcul des simulations de plusieurs semaines à 5 secondes",
          "Création d'une base de données optimisée et analyse avancée des données",
          "Collaboration inter-équipes pour l'intégration des solutions IA en production",
        ],
      },
      {
        title: "Formateur IA & Cloud",
        company: "Huawei",
        period: "01/2025 - 05/2025",
        location: "À distance",
        description: "Développement d'applications web et mobiles, architecture système et mentorat.",
        achievements: [
          "Encadrement de 3 étudiants en Master pour représenter la Côte d'Ivoire à la Huawei ICT Competition",
          "Formation intensive en Cloud (IaaS, PaaS, DevOps) et IA (Machine Learning & Deep Learning)",
          "Résultat : équipe championne du monde 2025 à Shenzhen, Chine",
        ],
      },
      {
        title: "Analyste-programmeur",
        company: "NGSER",
        period: "02/2022 - 08/2022",
        location: "Abidjan, Côte d'Ivoire",
        description: "Développement de progiciel de gestion intégré de NGSER.",
        achievements: [
          "Conception de la base de données du progiciel avec UML",
          "Développement back-end du module RH avec JavaScript et Php",
          "Résultat : livraison du progiciel en 6 mois",
        ],
      },
    ],
    educationList: [
      {
        degree: "Ingénieur Informatique",
        school: "CESI École d'Ingénieurs",
        period: "2024 - 2025",
        location: "Rouen, France",
        mention: "Très Bien",
        details: "Spécialisation en Machine Learning et Deep Learning, projets en IA.",
      },
      {
        degree: "Diplôme d'ingénieur en Data Science & Intelligence Artificielle",
        school: "TEK-UP",
        period: "2022 - 2025",
        location: "Tunis, Tunisie",
        mention: "Très Bien",
        details: "Major de promotion, Double champion du monde Huawei ICT 2024 & 2025.",
      },
      {
        degree: "Licence en Systèmes Informatiques & Génie Logiciel",
        school: "ESATIC",
        period: "2019 - 2022",
        location: "Abidjan, Côte d'Ivoire",
        mention: "Très Bien",
        details: "Major de promotion, Projets en développement web et analyse de données.",
      },
    ],
    skillCategories: {
      languages: "Langages & Librairies",
      dataAI: "Data & IA",
      cloudDevOps: "Cloud & DevOps",
      databases: "Bases de Données",
      softSkills: "Soft Skills",
    },
  },
  en: {
    pageTitle: "Curriculum Vitae",
    pageSubtitle: "Complete profile of an internationally recognized digital talent",
    downloadCV: "Download CV (PDF)",
    personalInfo: "Personal Information",
    professionalSummary: "Professional Summary",
    summaryText: "Data & Artificial Intelligence Engineer, passionate about Data Science and Cloud. Double world champion Huawei ICT (AI, Cloud & Big Data), winner of the 2025 National Excellence Award in Ivory Coast, I have led innovative projects in AI prediction and talent training. I seek to take on new technical and scientific challenges in France and internationally.",
    professionalExperience: "Professional Experience",
    education: "Education",
    technicalSkills: "Technical Skills",
    languages: "Languages",
    languageLevels: {
      french: "French",
      frenchLevel: "Native",
      english: "English",
      englishLevel: "Fluent",
      spanish: "Spanish",
      spanishLevel: "Beginner",
    },
    downloadSection: {
      title: "Complete PDF Version",
      description: "Download the complete PDF version with all references and recommendations",
    },
    experiences: [
      {
        title: "Data Scientist",
        company: "Saint-Gobain Conceptions Verrières",
        period: "02/2025 – 08/2025",
        location: "Aubervilliers, France",
        description: "Data extraction and analysis, interactive dashboard setup and AI model development.",
        achievements: [
          "Development of AI models reducing simulation calculation time from several weeks to 5 seconds",
          "Creation of an optimized database and advanced data analysis",
          "Cross-team collaboration for production AI solutions integration",
        ],
      },
      {
        title: "AI & Cloud Trainer",
        company: "Huawei",
        period: "01/2025 - 05/2025",
        location: "Remote",
        description: "Web and mobile application development, system architecture and mentoring.",
        achievements: [
          "Supervision of 3 Master's students to represent Ivory Coast at Huawei ICT Competition",
          "Intensive training in Cloud (IaaS, PaaS, DevOps) and AI (Machine Learning & Deep Learning)",
          "Result: 2025 world champion team in Shenzhen, China",
        ],
      },
      {
        title: "Analyst-Programmer",
        company: "NGSER",
        period: "02/2022 - 08/2022",
        location: "Abidjan, Ivory Coast",
        description: "Development of NGSER's integrated management software.",
        achievements: [
          "Software database design with UML",
          "Back-end development of HR module with JavaScript and Php",
          "Result: software delivery in 6 months",
        ],
      },
    ],
    educationList: [
      {
        degree: "Computer Engineering Degree",
        school: "CESI Engineering School",
        period: "2024 - 2025",
        location: "Rouen, France",
        mention: "With High Honors",
        details: "Specialization in Machine Learning and Deep Learning, AI projects.",
      },
      {
        degree: "Engineering Degree in Data Science & Artificial Intelligence",
        school: "TEK-UP",
        period: "2022 - 2025",
        location: "Tunis, Tunisia",
        mention: "With High Honors",
        details: "Top of class, Double world champion Huawei ICT 2024 & 2025.",
      },
      {
        degree: "Bachelor's in Computer Systems & Software Engineering",
        school: "ESATIC",
        period: "2019 - 2022",
        location: "Abidjan, Ivory Coast",
        mention: "With High Honors",
        details: "Top of class, Web development and data analysis projects.",
      },
    ],
    skillCategories: {
      languages: "Languages & Libraries",
      dataAI: "Data & AI",
      cloudDevOps: "Cloud & DevOps",
      databases: "Databases",
      softSkills: "Soft Skills",
    },
  },
}

export default function CVPage() {
  const { language } = useLanguage()

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  const experiences = translations[language].experiences
  const education = translations[language].educationList

  const skills = {
    [t('skillCategories.languages')]: ["Python", "Java", "C++", "SQL", "Pandas", "Numpy", "Scikit-learn", "Matplotlib", "Plotly", "Seaborn", "XGBoost", "TensorFlow", "Pytorch", "Streamlit", "Jupyter", "Spark", "pySpark"],
    [t('skillCategories.dataAI')]: ["Deep Learning", "Machine Learning", "MLOps", "NLP", "LLM", "Transfer Learning", "Computer Vision", "Data Visualization", "Data Engineering", "Data Analysis"],
    [t('skillCategories.cloudDevOps')]: ["AWS", "Huawei", "Docker", "Git", "CI/CD", "Django"],
    [t('skillCategories.databases')]: ["PostgreSQL", "Oracle", "MongoDB", "Neo4j"],
    [t('skillCategories.softSkills')]: language === 'fr' 
      ? ["Leadership", "Communication", "Gestion de projet", "Innovation", "Mentorat"]
      : ["Leadership", "Communication", "Project Management", "Innovation", "Mentoring"],
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">{t('pageTitle')}</h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('pageSubtitle')}
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a
                href="https://drive.google.com/file/d/1yqM1Ssf8dJwe_LShZbOZ3cp3uIZRGpny/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                {t('downloadCV')}
              </a>
            </Button>
          </div>

          {/* Personal Info */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">YD</span>
                </div>
                <span>{t('personalInfo')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>yacoubadia4@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+33 7 53 89 57 41</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Paris, France</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a
                      href="https://www.linkedin.com/in/yacouba-diakite-9b0b061a9/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 hover:underline"
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                      <span className="text-primary">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{t('professionalSummary')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {t('summaryText')}
              </p>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <span>{t('professionalExperience')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experiences.map((exp: any, index: number) => (
                <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="font-medium text-primary">{exp.company}</span>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                    <ul className="space-y-1 mt-3">
                      {exp.achievements.map((achievement: string, i: number) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start space-x-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span>{t('education')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu: any, index: number) => (
                <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="font-medium text-primary">{edu.school}</span>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{edu.location}</span>
                      </div>
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        {edu.mention}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{edu.details}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-primary" />
                <span>{t('technicalSkills')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-foreground mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill: string, index: number) => (
                        <Badge key={index} variant="outline" className="border-primary/20 text-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{t('languages')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="font-semibold text-foreground">{t('languageLevels.french')}</div>
                  <div className="text-sm text-muted-foreground">{t('languageLevels.frenchLevel')}</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-foreground">{t('languageLevels.english')}</div>
                  <div className="text-sm text-muted-foreground">{t('languageLevels.englishLevel')}</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-foreground">{t('languageLevels.spanish')}</div>
                  <div className="text-sm text-muted-foreground">{t('languageLevels.spanishLevel')}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download Section */}
          <div className="text-center">
            <Card className="bg-secondary/50">
              <CardContent className="py-8">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{t('downloadSection.title')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('downloadSection.description')}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <a
                    href="https://drive.google.com/file/d/1yqM1Ssf8dJwe_LShZbOZ3cp3uIZRGpny/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    {t('downloadCV')}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}