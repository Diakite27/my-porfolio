import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, MapPin, Mail, Phone, Globe, Calendar, Award, Briefcase, GraduationCap, Code, Linkedin } from "lucide-react"

export default function CVPage() {
  const experiences = [
    {
      title: "Data Scientist",
      company: "Saint-Gobain Conceptions Verrières",
      period: "02/2025 – 08/2025",
      location: "Aubervilliers, France",
      description: "Extraction et analyse des données, mise en place dashboards intéractifs et développement de modèles d'IA.",
      achievements: [
        "Développement de modèles IA réduisant le temps de calcul des simulations de plusieurs semaines à 5 secondes",
        "Création d’une base de données optimisée et analyse avancée des données",
        "Collaboration inter-équipes pour l’intégration des solutions IA en production",
      ],
    },
    {
      title: "Formateur IA & Cloud",
      company: "Huawei",
      period: "01/2025 - 05/2025",
      location: "À distance",
      description: "Développement d'applications web et mobiles, architecture système et mentorat.",
      achievements: [
        "Encadrement de 3 étudiants en Master pour représenter la Côte d’Ivoire à la Huawei ICT Competition",
        "Formation intensive en Cloud (IaaS, PaaS, DevOps) et IA (Machine Learning & Deep Learning)",
        "Résultat : équipe championne du monde 2025 à Shenzhen, Chine",
      ],
    },
    {
      title: "Analyste-programmeur",
      company: "NGSER",
      period: "02/2022 - 08/2022 ",
      location: "Abidjan, Côte d’Ivoire",
      description: "Développement de progiciel de gestion intégré de NGSER.",
      achievements: [
        "Conception de la base de données du progiciel avec UML",
        "Développement back-end du module RH avec JavaScript et Php",
        "Résultat : livraison du progiciel en 6 mois",
      ],
    },
  ]

  const education = [
    {
      degree: "Ingénieur Informatique",
      school: "CESI École d'Ingénieurs",
      period: "2024 - 2025",
      location: "Rouen, France",
      mention: "Très Bien",
      details: "Spécialisation en Machine Learning et Deep Learning, projets en IA.",
    },
    {
      degree: "Diplôme d’ingénieur en Data Science & Intelligence Artificielle",
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
      location: "Abidjan, Côte d’Ivoire",
      mention: "Très Bien",
      details: "Major de promotion, Projets en développement web et analyse de données.",
    },
  ]

  const skills = {
    "Langages & Librairies": ["Python", "Java", "C++", "SQL", "Pandas", "Numpy", "Scikit-learn", "Matplotlib", "Plotly", "Seaborn", "XGBoost", "TensorFlow", "Pytorch", "Streamlit", "Jupyter", "Spark", "pySpark"],
    "Data & IA": ["Deep Learning", "Machine Learning", "MLOps", "NLP", "LLM", "Transfer Learning", "Computer Vision", "Data Visualization", "Data Engineering", "Data Analysis"],
    "Cloud & DevOps": ["AWS", "Huawei", "Docker", "Git", "CI/CD", "Django"],
    "Bases de Données": ["PostgreSQL", "Oracle", "MongoDB", "Neo4j"],
    "Soft Skills": ["Leadership", "Communication", "Gestion de projet", "Innovation", "Mentorat"],
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Curriculum Vitae</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Profil complet d'un Talent numérique reconnu internationalement
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Download className="mr-2 h-5 w-5" />
              Télécharger le CV (PDF)
            </Button>
          </div>

          {/* Personal Info */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">YD</span>
                </div>
                <span>Informations Personnelles</span>
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
              <CardTitle>Résumé Professionnel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Ingénieur Data & Intelligence Artificielle, passionné par la Data Science et le Cloud. Double champion du monde Huawei ICT (IA, Cloud & Big Data), lauréat du Prix National d’Excellence 2025 en Côte d’Ivoire, j’ai mené des projets innovants en prédiction par IA et en formation de talents. Je cherche à relever de nouveaux défis techniques et scientifiques en France et à l’international.
              </p>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <span>Expérience Professionnelle</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experiences.map((exp, index) => (
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
                      {exp.achievements.map((achievement, i) => (
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
                <span>Formation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
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
                <span>Compétences Techniques</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-foreground mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
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
              <CardTitle>Langues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="font-semibold text-foreground">Français</div>
                  <div className="text-sm text-muted-foreground">Langue maternelle</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-foreground">Anglais</div>
                  <div className="text-sm text-muted-foreground">Courant</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-foreground">Espagnol</div>
                  <div className="text-sm text-muted-foreground">Débutant</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download Section */}
          <div className="text-center">
            <Card className="bg-secondary/50">
              <CardContent className="py-8">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Version PDF Complète</h3>
                <p className="text-muted-foreground mb-6">
                  Téléchargez la version PDF complète avec toutes les références et recommandations
                </p>
                <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a
                  href="https://drive.google.com/file/d/1yqM1Ssf8dJwe_LShZbOZ3cp3uIZRGpny/view?usp=drive_link"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger le CV (PDF)
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
