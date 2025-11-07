"use client"

import { useState, createContext, useContext, ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Award, FileText, Briefcase as Certificate, BookOpen, User, Instagram, Linkedin, MessageCircle } from "lucide-react"

interface LanguageContextType {
  language: 'fr' | 'en'
  setLanguage: (lang: 'fr' | 'en') => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
  t: (key) => key,
})

const translations = {
  fr: {
    home: "Accueil",
    cv: "CV",
    achievements: "Réalisations",
    certifications: "Certifications",
    blog: "Blog",
    contact: "Contact",
    name: "Yacouba DIAKITE",
    whatsappText: "Discutez avec moi sur WhatsApp",
  },
  en: {
    home: "Home",
    cv: "Resume",
    achievements: "Achievements",
    certifications: "Certifications",
    blog: "Blog",
    contact: "Contact",
    name: "Yacouba DIAKITE",
    whatsappText: "Chat with me on WhatsApp",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr')

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.fr] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook personnalisé pour utiliser le contexte de langue dans d'autres composants
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useContext(LanguageContext)

  const getNavItems = () => [
    { href: "/", label: t("home"), icon: User },
    { href: "/cv", label: t("cv"), icon: FileText },
    { href: "/distinctions", label: t("achievements"), icon: Award },
    { href: "/certifications", label: t("certifications"), icon: Certificate },
    //{ href: "/", label: t("blog"), icon: BookOpen },
  ]

  const navItems = getNavItems()

  return (
    <div>
      <div className="bg-primary/10 border-b border-border backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setLanguage('fr')}
                className={`flex items-center gap-2 transition-colors ${
                  language === 'fr' 
                    ? 'text-primary font-semibold' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="text-lg">🇫🇷</span>
                <span>Français</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-2 transition-colors ${
                  language === 'en' 
                    ? 'text-primary font-semibold' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="text-lg">🇬🇧</span>
                <span>English</span>
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-4">
              <a
                href="https://instagram.com/votrecompte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/votrecompte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="X"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/votrecompte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">YD</span>
              </div>
              <span className="font-bold text-xl text-foreground">{t("name")}</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                {t("contact")}
              </Button>
            </div>

            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}

                <div className="flex items-center gap-4 py-2 justify-center border-t border-border mt-2 pt-4">
                  <a
                    href="https://instagram.com/votrecompte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://twitter.com/votrecompte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="X"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/votrecompte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>

                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                  {t("contact")}
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Bouton WhatsApp flottant */}
      <a
        href={`https://wa.me/33753895741`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        {/* Icône WhatsApp */}
        <div className="relative">
          <MessageCircle className="w-6 h-6" fill="currentColor" />
          {/* Point d'animation */}
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
        </div>

        {/* Texte - caché sur mobile, visible sur desktop */}
        <span className="hidden sm:block font-medium text-sm whitespace-nowrap">
          {t("whatsappText")}
        </span>
      </a>
    </div>
  )
}