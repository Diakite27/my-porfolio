"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, Clock, ArrowRight, Tag, TrendingUp, BookOpen, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", label: "Tous les articles", count: 12 },
    { id: "ai", label: "Intelligence Artificielle", count: 4 },
    { id: "tech", label: "Technologie", count: 3 },
    { id: "innovation", label: "Innovation", count: 2 },
    { id: "leadership", label: "Leadership", count: 2 },
    { id: "career", label: "Carrière", count: 1 },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "L'avenir de l'Intelligence Artificielle dans l'industrie française",
      slug: "avenir-ia-industrie-francaise",
      excerpt:
        "Analyse approfondie des tendances émergentes de l'IA et leur impact sur l'économie française. Comment les entreprises peuvent-elles s'adapter ?",
      content: `L'intelligence artificielle représente aujourd'hui l'un des défis majeurs pour l'industrie française. Dans cet article, nous explorons les opportunités et les défis qui attendent nos entreprises.

## Les secteurs en transformation

L'IA transforme déjà plusieurs secteurs clés :
- **Automobile** : Véhicules autonomes et optimisation de production
- **Santé** : Diagnostic assisté et médecine personnalisée  
- **Finance** : Détection de fraude et conseil automatisé
- **Industrie 4.0** : Maintenance prédictive et optimisation des chaînes

## Recommandations stratégiques

Pour rester compétitives, les entreprises françaises doivent :
1. Investir massivement dans la formation de leurs équipes
2. Développer des partenariats avec les centres de recherche
3. Adopter une approche éthique de l'IA
4. Créer des écosystèmes d'innovation collaboratifs

La France a tous les atouts pour devenir un leader mondial de l'IA responsable.`,
      category: "ai",
      tags: ["IA", "Innovation", "Industrie", "France"],
      author: "Votre Nom",
      date: "2024-03-15",
      readTime: 8,
      image: "/placeholder.svg?height=400&width=600&text=IA+Industrie+France",
      featured: true,
    },
    {
      id: 2,
      title: "Comment j'ai obtenu 15 prix internationaux avant 25 ans",
      slug: "15-prix-internationaux-avant-25-ans",
      excerpt:
        "Retour d'expérience sur mon parcours et les stratégies qui m'ont permis d'être reconnu internationalement dans le domaine technologique.",
      content: `Mon parcours vers la reconnaissance internationale n'a pas été un hasard. Voici les stratégies clés qui ont fait la différence.

## 1. L'excellence technique avant tout

La base de toute reconnaissance est la maîtrise technique. J'ai consacré des milliers d'heures à :
- Approfondir mes connaissances en informatique
- Contribuer à des projets open source
- Développer des solutions innovantes

## 2. Le networking stratégique

Participer aux bonnes conférences et rencontrer les bonnes personnes :
- Conférences internationales (Web Summit, CES, etc.)
- Meetups locaux et communautés tech
- Programmes de mentorat

## 3. La communication de ses réalisations

Il ne suffit pas de bien faire, il faut aussi savoir le communiquer :
- Articles techniques et blogs
- Présentations en conférence
- Présence sur les réseaux professionnels

## 4. L'impact social

Les prix récompensent souvent l'impact positif sur la société :
- Projets à vocation sociale
- Contribution à l'éducation
- Innovation responsable

La clé est la persévérance et l'authenticité dans sa démarche.`,
      category: "career",
      tags: ["Carrière", "Prix", "Stratégie", "Réussite"],
      author: "Votre Nom",
      date: "2024-03-10",
      readTime: 6,
      image: "/placeholder.svg?height=400&width=600&text=Prix+Internationaux",
      featured: true,
    },
    {
      id: 3,
      title: "Les frameworks JavaScript en 2024 : Guide complet",
      slug: "frameworks-javascript-2024-guide",
      excerpt:
        "Comparaison détaillée des principaux frameworks JavaScript : React, Vue, Angular, Svelte. Lequel choisir pour votre prochain projet ?",
      content: `Le paysage JavaScript évolue rapidement. Voici un guide pour choisir le bon framework en 2024.

## React : La référence

**Avantages :**
- Écosystème mature et riche
- Communauté active
- Flexibilité maximale
- Excellent pour les applications complexes

**Inconvénients :**
- Courbe d'apprentissage
- Beaucoup de choix à faire

## Vue.js : L'équilibre parfait

**Avantages :**
- Syntaxe intuitive
- Documentation excellente
- Performance optimale
- Écosystème cohérent

**Inconvénients :**
- Communauté plus petite
- Moins d'offres d'emploi

## Angular : L'entreprise

**Avantages :**
- Framework complet
- TypeScript natif
- Excellent pour les grandes applications
- Support Google

**Inconvénients :**
- Complexité élevée
- Courbe d'apprentissage raide

## Svelte : L'innovation

**Avantages :**
- Performance exceptionnelle
- Bundle size réduit
- Syntaxe moderne
- Pas de Virtual DOM

**Inconvénients :**
- Écosystème jeune
- Moins de ressources

## Recommandations

- **Débutants** : Vue.js
- **Applications complexes** : React
- **Entreprise** : Angular
- **Performance critique** : Svelte`,
      category: "tech",
      tags: ["JavaScript", "React", "Vue", "Angular", "Svelte"],
      author: "Votre Nom",
      date: "2024-03-05",
      readTime: 12,
      image: "/placeholder.svg?height=400&width=600&text=JavaScript+Frameworks+2024",
      featured: false,
    },
    {
      id: 4,
      title: "Leadership technique : Gérer une équipe de développeurs",
      slug: "leadership-technique-equipe-developpeurs",
      excerpt:
        "Conseils pratiques pour devenir un leader technique efficace et gérer une équipe de développeurs avec succès.",
      content: `Passer de développeur à leader technique est un défi majeur. Voici mes conseils après avoir managé plus de 50 développeurs.

## Les qualités essentielles

### 1. Vision technique
- Définir l'architecture globale
- Anticiper les évolutions technologiques
- Prendre des décisions techniques éclairées

### 2. Communication
- Expliquer les concepts complexes simplement
- Écouter les préoccupations de l'équipe
- Faire le lien avec le business

### 3. Mentorat
- Accompagner la montée en compétences
- Donner du feedback constructif
- Créer un environnement d'apprentissage

## Défis courants et solutions

### Résistance au changement
- Impliquer l'équipe dans les décisions
- Expliquer le "pourquoi"
- Montrer l'exemple

### Gestion des conflits
- Écouter toutes les parties
- Chercher des solutions win-win
- Rester objectif et factuel

### Équilibre technique/management
- Garder du temps pour coder
- Déléguer intelligemment
- Rester à jour techniquement

## Outils et méthodes

- **Code reviews** : Maintenir la qualité
- **1-on-1** : Suivi individuel
- **Retrospectives** : Amélioration continue
- **Documentation** : Partage de connaissance

Le leadership technique est un art qui s'apprend avec l'expérience.`,
      category: "leadership",
      tags: ["Leadership", "Management", "Équipe", "Développement"],
      author: "Votre Nom",
      date: "2024-02-28",
      readTime: 10,
      image: "/placeholder.svg?height=400&width=600&text=Leadership+Technique",
      featured: false,
    },
    {
      id: 5,
      title: "Sécurité des applications web : Guide 2024",
      slug: "securite-applications-web-guide-2024",
      excerpt: "Les meilleures pratiques de sécurité pour protéger vos applications web contre les menaces modernes.",
      content: `La sécurité web est plus critique que jamais. Voici un guide complet des bonnes pratiques en 2024.

## Les menaces principales

### 1. Injection SQL
- **Risque** : Accès non autorisé aux données
- **Protection** : Requêtes préparées, ORM, validation

### 2. XSS (Cross-Site Scripting)
- **Risque** : Exécution de code malveillant
- **Protection** : Échappement, CSP, validation

### 3. CSRF (Cross-Site Request Forgery)
- **Risque** : Actions non autorisées
- **Protection** : Tokens CSRF, SameSite cookies

### 4. Authentification faible
- **Risque** : Comptes compromis
- **Protection** : 2FA, mots de passe forts, rate limiting

## Bonnes pratiques

### Côté serveur
- Validation stricte des entrées
- Principe du moindre privilège
- Logs et monitoring
- Mise à jour régulière

### Côté client
- HTTPS obligatoire
- Headers de sécurité
- Validation côté client ET serveur
- Gestion sécurisée des tokens

### DevSecOps
- Tests de sécurité automatisés
- Analyse statique du code
- Scans de vulnérabilités
- Formation des équipes

## Outils recommandés

- **SAST** : SonarQube, Checkmarx
- **DAST** : OWASP ZAP, Burp Suite
- **Monitoring** : Sentry, LogRocket
- **WAF** : Cloudflare, AWS WAF

La sécurité est un processus continu, pas un état final.`,
      category: "tech",
      tags: ["Sécurité", "Web", "OWASP", "DevSecOps"],
      author: "Votre Nom",
      date: "2024-02-20",
      readTime: 15,
      image: "/placeholder.svg?height=400&width=600&text=Sécurité+Web+2024",
      featured: false,
    },
    {
      id: 6,
      title: "Innovation ouverte : Collaborer avec les startups",
      slug: "innovation-ouverte-collaborer-startups",
      excerpt:
        "Comment les grandes entreprises peuvent tirer parti de l'écosystème startup pour accélérer leur innovation.",
      content: `L'innovation ouverte transforme la façon dont les entreprises innovent. Retour d'expérience sur mes collaborations.

## Pourquoi l'innovation ouverte ?

### Avantages pour les grandes entreprises
- Accès à des technologies de pointe
- Réduction des cycles d'innovation
- Diversification des approches
- Détection de talents

### Avantages pour les startups
- Accès au marché
- Ressources et expertise
- Validation du produit
- Financement potentiel

## Modèles de collaboration

### 1. Partenariats technologiques
- Intégration de solutions
- Co-développement
- Licence de technologie

### 2. Investissement stratégique
- Corporate venture capital
- Prise de participation
- Acquisition

### 3. Programmes d'accélération
- Incubateurs corporate
- Challenges d'innovation
- Proof of concept

## Facteurs de succès

### Côté entreprise
- Sponsor exécutif engagé
- Processus décisionnel rapide
- Culture d'expérimentation
- Métriques adaptées

### Côté startup
- Solution mature
- Équipe expérimentée
- Capacité d'adaptation
- Vision long terme

## Écueils à éviter

- Processus trop lourds
- Attentes irréalistes
- Manque d'alignement stratégique
- Protection IP insuffisante

## Cas d'usage réussis

J'ai accompagné plusieurs collaborations fructueuses :
- Fintech × Banque traditionnelle
- IA startup × Industrie automobile
- Cleantech × Énergéticien

L'innovation ouverte est l'avenir de l'innovation d'entreprise.`,
      category: "innovation",
      tags: ["Innovation", "Startups", "Partenariats", "Corporate"],
      author: "Votre Nom",
      date: "2024-02-15",
      readTime: 9,
      image: "/placeholder.svg?height=400&width=600&text=Innovation+Ouverte",
      featured: false,
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.slice(0, 3)

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      ai: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      tech: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      innovation: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      leadership: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      career: "bg-red-500/10 text-red-400 border-red-500/30",
    }
    return colors[category as keyof typeof colors] || "bg-gray-500/10 text-gray-600 border-gray-200"
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Blog & Insights</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Réflexions sur la technologie, l'innovation et le leadership
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{blogPosts.length}</div>
                <div className="text-sm text-muted-foreground">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50k+</div>
                <div className="text-sm text-muted-foreground">Lecteurs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Catégories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {Math.round(blogPosts.reduce((acc, post) => acc + post.readTime, 0) / blogPosts.length)}
                </div>
                <div className="text-sm text-muted-foreground">Min lecture</div>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher des articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center space-x-1"
                >
                  <span>{category.label}</span>
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Posts */}
          {selectedCategory === "all" && !searchTerm && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <TrendingUp className="mr-2 h-6 w-6 text-primary" />
                Articles en vedette
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getCategoryColor(post.category)}>
                          {categories.find((c) => c.id === post.category)?.label}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime} min</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3 leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Lire l'article
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <BookOpen className="mr-2 h-6 w-6 text-primary" />
              {searchTerm
                ? `Résultats pour "${searchTerm}"`
                : selectedCategory === "all"
                  ? "Tous les articles"
                  : `Articles - ${categories.find((c) => c.id === selectedCategory)?.label}`}
              <Badge variant="secondary" className="ml-2">
                {filteredPosts.length}
              </Badge>
            </h2>

            {filteredPosts.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Aucun article trouvé</h3>
                  <p className="text-muted-foreground">
                    Essayez de modifier vos critères de recherche ou explorez d'autres catégories.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getCategoryColor(post.category)}>
                          {categories.find((c) => c.id === post.category)?.label}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime} min</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto text-primary hover:text-primary/80"
                        asChild
                      >
                        <Link href={`/blog/${post.slug}`}>
                          Lire la suite
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Newsletter CTA */}
          <div className="text-center mt-16">
            <Card className="bg-secondary/50 max-w-2xl mx-auto">
              <CardContent className="py-8">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Restez informé</h3>
                <p className="text-muted-foreground mb-6">
                  Recevez mes derniers articles et insights directement dans votre boîte mail.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input placeholder="Votre email" className="flex-1" />
                  <Button className="bg-primary hover:bg-primary/90">S'abonner</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
