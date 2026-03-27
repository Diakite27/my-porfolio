"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, MapPin, Mail, Phone, Calendar, Award, Briefcase, GraduationCap, Code, Linkedin, ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/navigation"

const translations = {
  fr: {
    pageTitle: "Curriculum Vitae",
    pageSubtitle: "Ingénieur Data & IA — Double Champion du Monde",
    downloadCV: "Télécharger le CV",
    summary: "Ingénieur Data & Intelligence Artificielle, passionné par la Data Science et le Cloud. Double champion du monde Huawei ICT (IA, Cloud & Big Data), lauréat du Prix National d'Excellence 2025 en Côte d'Ivoire, j'ai mené des projets innovants en prédiction par IA et en formation de talents. Je cherche à relever de nouveaux défis techniques et scientifiques en France et à l'international.",
    experience: "Expérience",
    education: "Formation",
    skills: "Compétences",
    languages: "Langues",
    experiences: [
      {
        title: "Data & Software Engineer",
        company: "Koaloo-fi",
        period: "10/2025 – Présent",
        location: "Paris, France",
        achievements: [
          "Développement full-stack d'une plateforme SaaS ESG avec architecture serverless AWS (Lambda, DynamoDB)",
          "Intégration d'IA générative (AWS Bedrock/Claude) pour l'analyse ESG et recommandations automatisées",
          "Pipelines de données pour scoring, analytics temps réel et gestion multi-tenant",
          "Automatisation réduisant de 70% le temps d'évaluation ESG et monitoring de centaines de fournisseurs simultanément",
        ],
      },
      {
        title: "Data Scientist",
        company: "Saint-Gobain Conceptions Verrières",
        period: "02/2025 – 08/2025",
        location: "Aubervilliers, France",
        achievements: [
          "Développement de modèles IA réduisant le temps de calcul des simulations de plusieurs semaines à 5 secondes",
          "Création d'une base de données optimisée et analyse avancée des données",
          "Collaboration inter-équipes pour l'intégration des solutions IA en production",
        ],
      },
      {
        title: "Formateur IA & Cloud",
        company: "Huawei",
        period: "01/2025 – 05/2025",
        location: "À distance",
        achievements: [
          "Encadrement de 3 étudiants en Master pour représenter la Côte d'Ivoire à la Huawei ICT Competition",
          "Formation intensive en Cloud (IaaS, PaaS, DevOps) et IA (Machine Learning & Deep Learning)",
          "Résultat : équipe championne du monde 2025 à Shenzhen, Chine",
        ],
      },
      {
        title: "Analyste-programmeur",
        company: "NGSER",
        period: "02/2022 – 08/2022",
        location: "Abidjan, Côte d'Ivoire",
        achievements: [
          "Conception de la base de données du progiciel avec UML",
          "Développement back-end du module RH avec JavaScript et PHP",
          "Livraison du progiciel en 6 mois",
        ],
      },
    ],
    educationList: [
      {
        degree: "Manager de Portefeuille de Projets - Transition Numérique (BAC +6)",
        school: "CESI",
        period: "2025 – Présent",
        location: "Rouen, France",
        details: "Management de projets numériques, transformation digitale et stratégie IT",
      },
      {
        degree: "Ingénieur Informatique",
        school: "CESI École d'Ingénieurs",
        period: "2024 – 2025",
        location: "Rouen, France",
        details: "Spécialisation en Machine Learning et Deep Learning",
      },
      {
        degree: "Ingénieur Data Science & IA",
        school: "TEK-UP",
        period: "2022 – 2025",
        location: "Tunis, Tunisie",
        details: "Major de promotion · Double champion du monde Huawei ICT 2024 & 2025",
      },
      {
        degree: "Licence Systèmes Informatiques & Génie Logiciel",
        school: "ESATIC",
        period: "2019 – 2022",
        location: "Abidjan, Côte d'Ivoire",
        details: "Major de promotion · Projets en développement web et analyse de données",
      },
    ],
    skillCategories: {
      langages: "Langages & Librairies",
      dataIA: "Data & IA",
      cloud: "Cloud & DevOps",
      bdd: "Bases de Données",
      soft: "Soft Skills",
    },
    langList: [
      { name: "Français", level: "Langue maternelle" },
      { name: "Anglais", level: "Courant" },
      { name: "Espagnol", level: "Débutant" },
    ],
  },
  en: {
    pageTitle: "Curriculum Vitae",
    pageSubtitle: "Data & AI Engineer — Double World Champion",
    downloadCV: "Download CV",
    summary: "Data & Artificial Intelligence Engineer, passionate about Data Science and Cloud. Double world champion Huawei ICT (AI, Cloud & Big Data), winner of the 2025 National Excellence Award in Ivory Coast, I have led innovative projects in AI prediction and talent training. I seek to take on new technical and scientific challenges in France and internationally.",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    languages: "Languages",
    experiences: [
      {
        title: "Data & Software Engineer",
        company: "Koaloo-fi",
        period: "10/2025 – Present",
        location: "Paris, France",
        achievements: [
          "Full-stack development of an ESG SaaS platform with AWS serverless architecture (Lambda, DynamoDB)",
          "Generative AI integration (AWS Bedrock/Claude) for ESG analysis and automated recommendations",
          "Data pipelines for scoring, real-time analytics and multi-tenant management",
          "Automation reducing ESG assessment time by 70% and enabling monitoring of hundreds of suppliers simultaneously",
        ],
      },
      {
        title: "Data Scientist",
        company: "Saint-Gobain Conceptions Verrières",
        period: "02/2025 – 08/2025",
        location: "Aubervilliers, France",
        achievements: [
          "Development of AI models reducing simulation calculation time from several weeks to 5 seconds",
          "Creation of an optimized database and advanced data analysis",
          "Cross-team collaboration for production AI solutions integration",
        ],
      },
      {
        title: "AI & Cloud Trainer",
        company: "Huawei",
        period: "01/2025 – 05/2025",
        location: "Remote",
        achievements: [
          "Supervision of 3 Master's students to represent Ivory Coast at Huawei ICT Competition",
          "Intensive training in Cloud (IaaS, PaaS, DevOps) and AI (Machine Learning & Deep Learning)",
          "Result: 2025 world champion team in Shenzhen, China",
        ],
      },
      {
        title: "Analyst-Programmer",
        company: "NGSER",
        period: "02/2022 – 08/2022",
        location: "Abidjan, Ivory Coast",
        achievements: [
          "Software database design with UML",
          "Back-end development of HR module with JavaScript and PHP",
          "Software delivery in 6 months",
        ],
      },
    ],
    educationList: [
      {
        degree: "Project Portfolio Manager - Digital Transition (MSc+1)",
        school: "CESI",
        period: "2025 – Present",
        location: "Rouen, France",
        details: "Digital project management, digital transformation and IT strategy",
      },
      {
        degree: "Computer Engineering",
        school: "CESI Engineering School",
        period: "2024 – 2025",
        location: "Rouen, France",
        details: "Specialization in Machine Learning and Deep Learning",
      },
      {
        degree: "Data Science & AI Engineering",
        school: "TEK-UP",
        period: "2022 – 2025",
        location: "Tunis, Tunisia",
        details: "Top of class · Double world champion Huawei ICT 2024 & 2025",
      },
      {
        degree: "BSc Computer Systems & Software Engineering",
        school: "ESATIC",
        period: "2019 – 2022",
        location: "Abidjan, Ivory Coast",
        details: "Top of class · Web development and data analysis projects",
      },
    ],
    skillCategories: {
      langages: "Languages & Libraries",
      dataIA: "Data & AI",
      cloud: "Cloud & DevOps",
      bdd: "Databases",
      soft: "Soft Skills",
    },
    langList: [
      { name: "French", level: "Native" },
      { name: "English", level: "Fluent" },
      { name: "Spanish", level: "Beginner" },
    ],
  },
}

const skillsData = {
  langages: ["Python", "Java", "C++", "SQL", "Pandas", "Numpy", "Scikit-learn", "Matplotlib", "Plotly", "Seaborn", "XGBoost", "TensorFlow", "Pytorch", "Streamlit", "Spark", "pySpark"],
  dataIA: ["Deep Learning", "Machine Learning", "MLOps", "NLP", "LLM", "Transfer Learning", "Computer Vision", "Data Visualization", "Data Engineering"],
  cloud: ["AWS", "Huawei Cloud", "Docker", "Git", "CI/CD", "Django"],
  bdd: ["PostgreSQL", "Oracle", "MongoDB", "Neo4j"],
}

export default function CVPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const softSkills = language === 'fr'
    ? ["Leadership", "Communication", "Gestion de projet", "Innovation", "Mentorat"]
    : ["Leadership", "Communication", "Project Management", "Innovation", "Mentoring"]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              {t.pageTitle}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">{t.pageSubtitle}</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#C9A84C] to-[#E2C97E] text-[#050507] hover:opacity-90 font-semibold shadow-lg shadow-[#C9A84C]/20"
              asChild
            >
              <a href="https://drive.google.com/file/d/1yqM1Ssf8dJwe_LShZbOZ3cp3uIZRGpny/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                {t.downloadCV}
              </a>
            </Button>
          </div>

          {/* Contact bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm text-muted-foreground">
            <a href="mailto:yacoubadia4@gmail.com" className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors">
              <Mail className="h-4 w-4" /> yacoubadia4@gmail.com
            </a>
            <a href="tel:+33753895741" className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors">
              <Phone className="h-4 w-4" /> +33 7 53 89 57 41
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> Paris, France
            </span>
            <a href="https://www.linkedin.com/in/yacouba-diakite-9b0b061a9/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#00D4FF] transition-colors">
              <Linkedin className="h-4 w-4" /> LinkedIn <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Summary */}
          <div className="mb-12 p-6 rounded-2xl bg-[#0C0C10] border border-[#1E1E24] border-glow-gold">
            <p className="text-muted-foreground leading-relaxed">{t.summary}</p>
          </div>

          {/* Experience */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-[#C9A84C]" />
              </div>
              <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>{t.experience}</h2>
            </div>

            <div className="space-y-8">
              {t.experiences.map((exp, i) => (
                <div key={i} className="relative pl-8 border-l border-[#1E1E24]">
                  <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[#C9A84C]" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {exp.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm mb-3">
                    <span className="text-[#C9A84C] font-medium">{exp.company}</span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {exp.location}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-[#00D4FF] mt-1.5 h-1 w-1 rounded-full bg-[#00D4FF] flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-[#00D4FF]" />
              </div>
              <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>{t.education}</h2>
            </div>

            <div className="space-y-6">
              {t.educationList.map((edu, i) => (
                <div key={i} className="relative pl-8 border-l border-[#1E1E24]">
                  <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[#00D4FF]" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm mb-1">
                    <span className="text-[#00D4FF] font-medium">{edu.school}</span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {edu.location}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.details}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center">
                <Code className="h-5 w-5 text-[#C9A84C]" />
              </div>
              <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>{t.skills}</h2>
            </div>

            <div className="space-y-6">
              {Object.entries({
                [t.skillCategories.langages]: skillsData.langages,
                [t.skillCategories.dataIA]: skillsData.dataIA,
                [t.skillCategories.cloud]: skillsData.cloud,
                [t.skillCategories.bdd]: skillsData.bdd,
                [t.skillCategories.soft]: softSkills,
              }).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="border-[#1E1E24] text-foreground hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/5 transition-all">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center">
                <Award className="h-5 w-5 text-[#00D4FF]" />
              </div>
              <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>{t.languages}</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {t.langList.map((lang, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#0C0C10] border border-[#1E1E24] text-center">
                  <div className="font-semibold text-foreground">{lang.name}</div>
                  <div className="text-sm text-muted-foreground">{lang.level}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Download CTA */}
          <div className="text-center p-8 rounded-2xl bg-[#0C0C10] border border-[#C9A84C]/20 animate-pulse-glow">
            <Award className="h-10 w-10 text-[#C9A84C] mx-auto mb-4" />
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#C9A84C] to-[#E2C97E] text-[#050507] hover:opacity-90 font-semibold"
              asChild
            >
              <a href="https://drive.google.com/file/d/1yqM1Ssf8dJwe_LShZbOZ3cp3uIZRGpny/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                {t.downloadCV}
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
