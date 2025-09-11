import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Award, ArrowRight, FileText } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                <Award className="h-4 w-4" />
                <span>Double Champion du Monde en Informatique en Chine</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Excellence et
                <span className="text-primary"> Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty text-justify">
                Ingénieur en Data Science & Intelligence Artificielle, passionné par la Data et le Cloud, avec une expertise reconnue en Machine Learning et en Cloud.
                Double champion du monde Huawei ICT en Chine et Lauréat du Prix National d’Excellence 2025 du Meilleur Talent Numérique, je cherche à relever de nouveaux défis techniques et scientifiques.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/cv">
                  <FileText className="mr-2 h-5 w-5" />
                  Voir mon CV
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/distinctions">
                  Mes Distinctions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Prix Internationaux</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Certifications IT</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Événements Majeurs</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <Card className="p-8 bg-card/50 backdrop-blur">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img
                  src="/prof.jpeg"
                  alt="Photo professionnelle"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-foreground">Yacouba DIAKITE</h3>
                <p className="text-muted-foreground">Ingénieur Data & IA</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
