"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github, Globe, Bot, ShoppingCart, Database, Cloud, Shield, Smartphone, Users, Zap, Newspaper, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/navigation"

const translations = {
  fr: {
    back: "Retour",
    pageTag: "Réalisations techniques",
    pageTitle: "Projets",
    pageSubtitle: "Des solutions concrètes, de l'idée au déploiement en production",
    projects: [
      {
        title: "MonDjassa — Plateforme E-Commerce Multi-Boutiques",
        tagline: "La plateforme e-commerce pensée pour les commerçants et acheteurs d'Afrique de l'Ouest",
        description: "Plateforme SaaS complète déployée en production (test.mondjassa.net) connectant commerçants et clients. Les commerçants gèrent boutiques, produits, stocks, commandes et fournisseurs. Les clients achètent en ligne, marchandent, épargnent vers un produit, paient en plusieurs fois et profitent de deals flash communautaires. Plus de 40 fonctionnalités métier, 10 services IA intégrés, mode offline complet et un assistant conversationnel intelligent.",
        highlights: [
          "40+ fonctionnalités métier : marchandage, cotisation (tontine), paiement échelonné, deals flash, fidélité, coupons, réservation",
          "Assistant IA conversationnel (Groq/Llama 3.3) : analyse business en langage naturel, streaming, voix, 8 langues ouest-africaines",
          "PWA offline complète : ventes POS, stock et prix fonctionnent sans connexion avec sync automatique (IndexedDB)",
          "10 services IA : recherche par photo (Vision), produits similaires, benchmark prix, génération de posts, résumé dashboard",
          "Sécurité avancée : détection de fraude (4 patterns), score de confiance boutique, 29 permissions par rôle, rate limiting",
          "Multi-boutiques, 4 plans d'abonnement, 7 devises, feed social style Instagram, QR codes, partage WhatsApp, exports PDF/Excel",
        ],
        tech: ["Django 5", "Python 3.12", "PostgreSQL", "Groq API", "Llama 3.3", "Llama 4 Scout Vision", "PWA", "IndexedDB", "Bootstrap 5"],
        links: {
          live: "https://test.mondjassa.net/connexion",
          github: "https://github.com/Diakite27/my-shop",
        },
        icon: ShoppingCart,
        color: "#6366f1",
      },
      {
        title: "SIRH — Système d\u2019Information de Ressources Humaines",
        tagline: "ERP RH complet avec 8 modules IA, déployé en production pour un client",
        description: "Plateforme SIRH multi-tenant développée et mise en production pour le marché ivoirien et ouest-africain. 13 modules fonctionnels couvrant l\u2019ensemble du cycle de vie de l\u2019employé, de l\u2019embauche au départ, plus 8 axes d\u2019intelligence artificielle intégrés. Architecture full-stack moderne avec API REST complète (~70 endpoints), ~55 modèles Django et système RBAC à 4 niveaux.",
        highlights: [
          "13 modules RH : employés, contrats, paie, congés, pointage géolocalisé avec détection de fraude GPS et selfie, évaluations, compétences, communication interne",
          "8 axes IA intégrés (GPT-4o) : prédiction turnover, assistant évaluations, détection anomalies pointage, planification congés, chatbot RH, matching poste/compétences",
          "Communication temps réel : messagerie 1-à-1 et groupes, messages audio, appels audio/vidéo WebRTC, notifications in-app",
          "Pointage avancé : géolocalisation, vérification de zone et IP, selfie obligatoire, détection de fraude GPS, feuilles de temps automatiques",
          "Notes de service avec workflow complet : éditeur riche, niveaux d\u2019urgence, ciblage par rôle/service, accusés de réception, relances automatiques",
          "Architecture multi-tenant, RBAC (Admin/RH/Manager/Employé), audit log complet, Docker, CI/CD GitLab, internationalisation",
        ],
        tech: ["Django 5", "Django REST Framework", "Next.js 14", "React 19", "TypeScript", "PostgreSQL", "Celery", "Redis", "WebRTC", "Docker", "GPT-4o"],
        links: {
          live: "https://sirh-etc.com",
          github: "",
        },
        icon: Users,
        color: "#10B981",
      },
      {
        title: "AxInfos — Plateforme de News Multilingue",
        tagline: "Média en ligne avec chatbot IA, abonnements Stripe et traduction automatique",
        description: "Plateforme de news moderne et multilingue (FR/EN/ES) développée et déployée en production pour le média AxInfos. Articles, éditos, tribunes, décryptages, vidéos, kiosque magazine PDF, abonnements Stripe, chatbot IA (Claude AI) et newsletter RGPD. Traduction automatique des contenus via Deep Translator.",
        highlights: [
          "6 formats éditoriaux : articles, éditos thématiques (Politique, Économie, Juridique, Finance, Afrique), tribunes, décryptages, tendances, incontournables",
          "Chatbot IA (Claude 3.5 Sonnet) avec RAG sur les articles, recherche web DuckDuckGo, envoi de messages à la rédaction",
          "Abonnements Stripe (mensuel/annuel/entreprise) avec webhooks, gestion des échecs de paiement et résiliation automatique",
          "Multilingue complet (FR/EN/ES) : traduction automatique des contenus à la sauvegarde, URLs localisées, cookie de langue",
          "Kiosque magazine (PDF), affiches Instagram/TikTok, vidéos (YouTube/Vimeo/upload), newsletter RGPD avec consentement et rétention",
          "Sécurité : rate limiting, protection XSS (bleach), validation webhooks Stripe, headers HTTP, logging avec rotation",
        ],
        tech: ["Django 5", "Python 3.11", "PostgreSQL", "Claude AI", "Stripe", "Deep Translator", "Jazzmin", "WhiteNoise"],
        links: {
          live: "https://axinfos.com",
          github: "",
        },
        icon: Newspaper,
        color: "#F59E0B",
      },
      {
        title: "BAABA TISANE — E-Commerce de Tisanes Naturelles",
        tagline: "Boutique en ligne de tisanes Kinkéliba avec API backend et commande WhatsApp",
        description: "Site e-commerce développé et déployé en production pour la marque BAABA TISANE, spécialisée dans les tisanes naturelles à base de Kinkéliba en Côte d\u2019Ivoire. Boutique en ligne avec catalogue produits, panier, favoris, espace professionnel, blog conseils santé et intégration WhatsApp pour les commandes. Backend API séparé (api.baabatisane.com).",
        highlights: [
          "Boutique en ligne complète : catalogue par catégories (Nature, Équilibre, Ligne & Détox, Tonus, Accessoires, Offres spéciales), fiches produits, promotions",
          "Panier et commandes : ajout au panier, favoris, commande via WhatsApp avec message pré-rempli, prix en FCFA",
          "Espace professionnel dédié et carte des points de vente physiques",
          "Blog \u00AB Les conseils de BAABA \u00BB : articles santé et bien-être liés aux produits",
          "Architecture découplée : frontend + API backend séparée (api.baabatisane.com), gestion média centralisée",
          "Présence sociale intégrée : Facebook, Instagram, LinkedIn, TikTok, contact WhatsApp",
        ],
        tech: ["Next.js", "React", "Django REST Framework", "PostgreSQL", "WhatsApp API", "Tailwind CSS"],
        links: {
          live: "https://baabatisane.com",
          github: "",
        },
        icon: ShoppingCart,
        color: "#22C55E",
      },
    ],
  },
  en: {
    back: "Back",
    pageTag: "Technical achievements",
    pageTitle: "Projects",
    pageSubtitle: "Concrete solutions, from idea to production deployment",
    projects: [
      {
        title: "MonDjassa — Multi-Store E-Commerce Platform",
        tagline: "The e-commerce platform built for West African merchants and shoppers",
        description: "Complete SaaS platform deployed in production (test.mondjassa.net) connecting merchants and customers. Merchants manage stores, products, inventory, orders and suppliers. Customers shop online, bargain, save towards a product, pay in installments and enjoy community flash deals. Over 40 business features, 10 integrated AI services, full offline mode and an intelligent conversational assistant.",
        highlights: [
          "40+ business features: bargaining, savings groups (tontine), installment payments, flash deals, loyalty, coupons, reservations",
          "Conversational AI assistant (Groq/Llama 3.3): natural language business analysis, streaming, voice, 8 West African languages",
          "Full offline PWA: POS sales, stock and pricing work without connection with auto sync (IndexedDB)",
          "10 AI services: photo search (Vision), similar products, price benchmark, post generation, dashboard summary",
          "Advanced security: fraud detection (4 patterns), store trust score, 29 permissions per role, rate limiting",
          "Multi-store, 4 subscription plans, 7 currencies, Instagram-style social feed, QR codes, WhatsApp sharing, PDF/Excel exports",
        ],
        tech: ["Django 5", "Python 3.12", "PostgreSQL", "Groq API", "Llama 3.3", "Llama 4 Scout Vision", "PWA", "IndexedDB", "Bootstrap 5"],
        links: {
          live: "https://test.mondjassa.net/connexion",
          github: "https://github.com/Diakite27/my-shop",
        },
        icon: ShoppingCart,
        color: "#6366f1",
      },
      {
        title: "SIRH — Human Resources Information System",
        tagline: "Complete HR ERP with 8 AI modules, deployed in production for a client",
        description: "Multi-tenant SIRH platform developed and deployed in production for the Ivorian and West African market. 13 functional modules covering the entire employee lifecycle, from hiring to departure, plus 8 integrated artificial intelligence axes. Modern full-stack architecture with complete REST API (~70 endpoints), ~55 Django models and 4-level RBAC system.",
        highlights: [
          "13 HR modules: employees, contracts, payroll, leave, geolocated attendance with GPS fraud detection and selfie, evaluations, skills, internal communication",
          "8 integrated AI axes (GPT-4o): turnover prediction, evaluation assistant, attendance anomaly detection, leave planning, HR chatbot, job/skills matching",
          "Real-time communication: 1-to-1 and group messaging, audio messages, WebRTC audio/video calls, in-app notifications",
          "Advanced attendance: geolocation, zone and IP verification, mandatory selfie, GPS fraud detection, automatic timesheets",
          "Service notes with full workflow: rich editor, urgency levels, role/department targeting, read receipts, automatic reminders",
          "Multi-tenant architecture, RBAC (Admin/HR/Manager/Employee), complete audit log, Docker, GitLab CI/CD, internationalization",
        ],
        tech: ["Django 5", "Django REST Framework", "Next.js 14", "React 19", "TypeScript", "PostgreSQL", "Celery", "Redis", "WebRTC", "Docker", "GPT-4o"],
        links: {
          live: "https://sirh-etc.com",
          github: "",
        },
        icon: Users,
        color: "#10B981",
      },
      {
        title: "AxInfos — Multilingual News Platform",
        tagline: "Online media with AI chatbot, Stripe subscriptions and automatic translation",
        description: "Modern multilingual news platform (FR/EN/ES) developed and deployed in production for AxInfos media. Articles, editorials, opinion columns, investigations, videos, PDF magazine kiosk, Stripe subscriptions, AI chatbot (Claude AI) and GDPR-compliant newsletter. Automatic content translation via Deep Translator.",
        highlights: [
          "6 editorial formats: articles, thematic editorials (Politics, Economy, Legal, Finance, Africa), opinion columns, investigations, trends, essentials",
          "AI chatbot (Claude 3.5 Sonnet) with RAG on articles, DuckDuckGo web search, message sending to editorial team",
          "Stripe subscriptions (monthly/annual/enterprise) with webhooks, payment failure handling and automatic cancellation",
          "Full multilingual (FR/EN/ES): automatic content translation on save, localized URLs, language cookie",
          "Magazine kiosk (PDF), Instagram/TikTok posters, videos (YouTube/Vimeo/upload), GDPR newsletter with consent and retention",
          "Security: rate limiting, XSS protection (bleach), Stripe webhook validation, HTTP headers, logging with rotation",
        ],
        tech: ["Django 5", "Python 3.11", "PostgreSQL", "Claude AI", "Stripe", "Deep Translator", "Jazzmin", "WhiteNoise"],
        links: {
          live: "https://axinfos.com",
          github: "",
        },
        icon: Newspaper,
        color: "#F59E0B",
      },
      {
        title: "BAABA TISANE — Natural Herbal Tea E-Commerce",
        tagline: "Online store for Kinkéliba herbal teas with backend API and WhatsApp ordering",
        description: "E-commerce website developed and deployed in production for the BAABA TISANE brand, specializing in natural Kinkéliba herbal teas in Ivory Coast. Online store with product catalog, cart, favorites, professional space, health tips blog and WhatsApp integration for orders. Separate backend API (api.baabatisane.com).",
        highlights: [
          "Complete online store: catalog by categories (Nature, Balance, Detox, Vitality, Accessories, Special offers), product pages, promotions",
          "Cart and orders: add to cart, favorites, WhatsApp ordering with pre-filled messages, FCFA pricing",
          "Dedicated professional space and physical point-of-sale map",
          "Blog \u00AB BAABA\u2019s tips \u00BB: health and wellness articles related to products",
          "Decoupled architecture: frontend + separate backend API (api.baabatisane.com), centralized media management",
          "Integrated social presence: Facebook, Instagram, LinkedIn, TikTok, WhatsApp contact",
        ],
        tech: ["Next.js", "React", "Django REST Framework", "PostgreSQL", "WhatsApp API", "Tailwind CSS"],
        links: {
          live: "https://baabatisane.com",
          github: "",
        },
        icon: ShoppingCart,
        color: "#22C55E",
      },
    ],
  },
}

const featureIcons = [ShoppingCart, Bot, Smartphone, Zap, Shield, Users]

export default function ProjetsPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-background">


      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#C9A84C] transition-colors mb-6 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.back}
            </Link>
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-[#00D4FF] border border-[#00D4FF]/20 bg-[#00D4FF]/5 mb-4">
                {t.pageTag}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                {t.pageTitle}
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                {t.pageSubtitle}
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-12">
            {t.projects.map((project, idx) => {
              const Icon = translations.fr.projects[idx].icon
              const projectData = translations.fr.projects[idx]
              return (
                <Card key={idx} className="bg-[#0C0C10] border-[#1E1E24] overflow-hidden">
                  {/* Header */}
                  <div className="p-6 sm:p-8 border-b border-[#1E1E24]">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${projectData.color}15` }}
                      >
                        <Icon className="h-6 w-6" style={{ color: projectData.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                          {project.title}
                        </h2>
                        <p className="text-[#00D4FF] text-sm font-medium">{project.tagline}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <CardContent className="p-6 sm:p-8 space-y-6">
                    {/* Highlights */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {project.highlights.map((highlight, i) => {
                        const FeatureIcon = featureIcons[i % featureIcons.length]
                        return (
                          <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#111118] border border-[#1E1E24]">
                            <FeatureIcon className="h-4 w-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground leading-snug">{highlight}</span>
                          </div>
                        )
                      })}
                    </div>

                    {/* Tech stack */}
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="outline" className="border-[#1E1E24] text-foreground text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {projectData.links.live && (
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-[#C9A84C] to-[#E2C97E] text-[#050507] hover:opacity-90 font-medium"
                          asChild
                        >
                          <a href={projectData.links.live} target="_blank" rel="noopener noreferrer">
                            <Globe className="mr-2 h-4 w-4" />
                            {language === 'fr' ? 'Voir en production' : 'View live'}
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      )}
                      {projectData.links.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#1E1E24] hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/5 text-foreground"
                          asChild
                        >
                          <a href={projectData.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* ===== Projets en entreprise ===== */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-[#C9A84C] border border-[#C9A84C]/20 bg-[#C9A84C]/5 mb-4">
                {language === 'fr' ? 'Expérience professionnelle' : 'Professional experience'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                {language === 'fr' ? 'Projets réalisés en entreprise' : 'Enterprise projects'}
              </h2>
            </div>

            <div className="space-y-6">
              {[
                language === 'fr' ? {
                  role: "Data & Software Engineer",
                  company: "Koaloo-fi",
                  period: "10/2025 – Présent",
                  location: "Paris, France",
                  summary: "Développement full-stack d\u2019une plateforme SaaS ESG avec architecture serverless AWS. Intégration d\u2019IA générative (AWS Bedrock/Claude) pour l\u2019analyse ESG et recommandations automatisées.",
                  impact: "Réduction de 70% du temps d\u2019évaluation ESG · Monitoring de centaines de fournisseurs simultanément",
                  tech: ["AWS Lambda", "DynamoDB", "AWS Bedrock", "Claude", "Python", "TypeScript"],
                } : {
                  role: "Data & Software Engineer",
                  company: "Koaloo-fi",
                  period: "10/2025 – Present",
                  location: "Paris, France",
                  summary: "Full-stack development of an ESG SaaS platform with AWS serverless architecture. Generative AI integration (AWS Bedrock/Claude) for ESG analysis and automated recommendations.",
                  impact: "70% reduction in ESG assessment time · Monitoring hundreds of suppliers simultaneously",
                  tech: ["AWS Lambda", "DynamoDB", "AWS Bedrock", "Claude", "Python", "TypeScript"],
                },
                language === 'fr' ? {
                  role: "Data Scientist",
                  company: "Saint-Gobain Conceptions Verrières",
                  period: "02/2025 – 08/2025",
                  location: "Aubervilliers, France",
                  summary: "Mise en place de modèles d\u2019IA pour prédire les résultats de simulations numériques, avec une base de données performante et une collaboration étroite avec les équipes métier.",
                  impact: "Temps de calcul réduit de plusieurs semaines à 5 secondes",
                  tech: ["Python", "Scikit-learn", "TensorFlow", "PostgreSQL", "Pandas"],
                } : {
                  role: "Data Scientist",
                  company: "Saint-Gobain Conceptions Verrières",
                  period: "02/2025 – 08/2025",
                  location: "Aubervilliers, France",
                  summary: "Development of AI models to predict numerical simulation results, with an optimized database and close collaboration with business teams.",
                  impact: "Calculation time reduced from several weeks to 5 seconds",
                  tech: ["Python", "Scikit-learn", "TensorFlow", "PostgreSQL", "Pandas"],
                },
                language === 'fr' ? {
                  role: "Analyste-Programmeur",
                  company: "NGSER",
                  period: "02/2022 – 08/2022",
                  location: "Abidjan, Côte d\u2019Ivoire",
                  summary: "Membre d\u2019une équipe de 6, contribuant à la conception et au développement d\u2019un Progiciel de Gestion Intégré (PGI) pour l\u2019entreprise.",
                  impact: "Livraison du progiciel en 6 mois",
                  tech: ["JavaScript", "PHP", "UML", "SQL", "HTML/CSS"],
                } : {
                  role: "Analyst-Programmer",
                  company: "NGSER",
                  period: "02/2022 – 08/2022",
                  location: "Abidjan, Ivory Coast",
                  summary: "Member of a 6-person team, contributing to the design and development of an Enterprise Resource Planning (ERP) system for the company.",
                  impact: "Software delivered in 6 months",
                  tech: ["JavaScript", "PHP", "UML", "SQL", "HTML/CSS"],
                },
              ].map((exp, i) => (
                <div key={i} className="relative pl-8 border-l-2 border-[#C9A84C]/20">
                  <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-[#C9A84C]" />
                  <div className="p-5 rounded-xl bg-[#0C0C10] border border-[#1E1E24] hover:border-[#C9A84C]/20 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <div>
                        <span className="text-foreground font-semibold" style={{ fontFamily: 'var(--font-display)' }}>{exp.role}</span>
                        <span className="text-[#C9A84C] mx-2">·</span>
                        <span className="text-[#00D4FF] font-medium">{exp.company}</span>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{exp.period} · {exp.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{exp.summary}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="h-3.5 w-3.5 text-[#C9A84C] flex-shrink-0" />
                      <span className="text-xs text-[#C9A84C] font-medium">{exp.impact}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t, j) => (
                        <span key={j} className="px-2 py-0.5 rounded-md bg-[#111118] border border-[#1E1E24] text-[10px] text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Contact */}
          <div className="mt-20 text-center p-8 rounded-2xl bg-[#0C0C10] border border-[#C9A84C]/20">
            <p className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              {language === 'fr' ? 'Un projet en tête ?' : 'Have a project in mind?'}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              {language === 'fr' ? 'Discutons de votre idée — je suis disponible pour des missions freelance et des collaborations techniques.' : "Let\u2019s discuss your idea — I\u2019m available for freelance missions and technical collaborations."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#C9A84C] to-[#E2C97E] text-[#050507] hover:opacity-90 font-medium"
                asChild
              >
                <a href="mailto:yacoubadia4@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  yacoubadia4@gmail.com
                </a>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-[#1E1E24] hover:border-[#00D4FF]/30 hover:bg-[#00D4FF]/5 text-foreground"
                asChild
              >
                <a href="https://www.linkedin.com/in/yacouba-diakite-9b0b061a9/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
