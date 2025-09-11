import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock data - in a real app, this would come from a CMS or database
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
    image: "/placeholder.svg?height=400&width=800&text=IA+Industrie+France",
  },
  // Add other posts here...
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      ai: "bg-purple-500/10 text-purple-600 border-purple-200",
      tech: "bg-blue-500/10 text-blue-600 border-blue-200",
      innovation: "bg-green-500/10 text-green-600 border-green-200",
      leadership: "bg-amber-500/10 text-amber-600 border-amber-200",
      career: "bg-red-500/10 text-red-600 border-red-200",
    }
    return colors[category as keyof typeof colors] || "bg-gray-500/10 text-gray-600 border-gray-200"
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au blog
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <article className="space-y-8">
            <header className="space-y-6">
              <div className="space-y-4">
                <Badge className={getCategoryColor(post.category)}>{post.category.toUpperCase()}</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                  {post.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">{post.excerpt}</p>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min de lecture</span>
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Partager
                </Button>
              </div>

              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-foreground leading-relaxed space-y-6">
                {post.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                        {paragraph.replace("## ", "")}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
                        {paragraph.replace("### ", "")}
                      </h3>
                    )
                  }
                  if (paragraph.startsWith("- ")) {
                    const items = paragraph.split("\n").filter((item) => item.startsWith("- "))
                    return (
                      <ul key={index} className="space-y-2 ml-6">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-muted-foreground">
                            <span className="text-accent mr-2">•</span>
                            {item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}
                          </li>
                        ))}
                      </ul>
                    )
                  }
                  if (paragraph.match(/^\d+\./)) {
                    const items = paragraph.split("\n").filter((item) => item.match(/^\d+\./))
                    return (
                      <ol key={index} className="space-y-2 ml-6">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-muted-foreground">
                            {item.replace(/^\d+\.\s/, "")}
                          </li>
                        ))}
                      </ol>
                    )
                  }
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </div>

            {/* Tags */}
            <div className="border-t border-border pt-6">
              <div className="flex items-center space-x-2 mb-4">
                <Tag className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-primary/20 text-primary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <Card className="bg-secondary/50">
              <CardContent className="py-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">MP</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{post.author}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Innovateur technologique passionné, reconnu internationalement pour ses contributions à l'IA et au
                      développement logiciel. Lauréat de 15+ prix internationaux et speaker dans les plus grandes
                      conférences tech mondiales.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <div className="border-t border-border pt-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <BookOpen className="mr-2 h-6 w-6 text-primary" />
                Articles similaires
              </h3>
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">Découvrez d'autres articles sur des sujets similaires</p>
                <Button asChild>
                  <Link href="/blog">Voir tous les articles</Link>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}
