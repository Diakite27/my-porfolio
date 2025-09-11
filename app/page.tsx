import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { RecentHighlights } from "@/components/recent-highlights"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, Globe } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <RecentHighlights />
      </main>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-balance">Restons en contact</h2>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
                Vous avez un projet innovant ? Une collaboration à proposer ? N'hésitez pas à me contacter pour discuter
                de vos idées.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">yacoubadia4@gmaill.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Localisation</h3>
                      <p className="text-muted-foreground">Paris, France</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Disponibilité</h3>
                      <p className="text-muted-foreground">Ouvert aux collaborations internationales</p>
                    </div>
                  </div>
                </Card>

                <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                  <h3 className="font-semibold mb-3 text-primary">Domaines d'expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Intelligence Artificielle</Badge>
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">Data Science</Badge>
                    <Badge variant="secondary">Développement Web</Badge>
                    <Badge variant="secondary">Cloud Computing</Badge>
                    <Badge variant="secondary">Innovation</Badge>
                    <Badge variant="secondary">Leadership Tech</Badge>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Sujet</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
                      placeholder="Décrivez votre projet ou votre demande..."
                    ></textarea>
                  </div>

                  <Button className="w-full" size="lg" type="submit">
                    <Mail className="w-4 h-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">© 2025 Portfolio Yacouba. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}