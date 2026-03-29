"use client"

import { useState, useEffect, createContext, useContext, useCallback, ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Award, FileText, Briefcase as Certificate, User, Linkedin, MessageCircle, Code2, Instagram } from "lucide-react"

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
    achievements: "Distinctions",
    certifications: "Certifications",
    projects: "Projets",
    contact: "Contact",
    name: "Yacouba DIAKITE",
    whatsappText: "WhatsApp",
  },
  en: {
    home: "Home",
    cv: "Resume",
    achievements: "Achievements",
    certifications: "Certifications",
    projects: "Projects",
    contact: "Contact",
    name: "Yacouba DIAKITE",
    whatsappText: "WhatsApp",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<'fr' | 'en'>('fr')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('lang') as 'fr' | 'en' | null
    if (saved === 'fr' || saved === 'en') {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = useCallback((lang: 'fr' | 'en') => {
    setLanguageState(lang)
    localStorage.setItem('lang', lang)
  }, [])

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.fr] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {mounted ? children : <div style={{ visibility: 'hidden' }}>{children}</div>}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useContext(LanguageContext)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: t("home"), icon: User },
    { href: "/cv", label: t("cv"), icon: FileText },
    { href: "/distinctions", label: t("achievements"), icon: Award },
    { href: "/certifications", label: t("certifications"), icon: Certificate },
    { href: "/projets", label: t("projects"), icon: Code2 },
  ]

  return (
    <>
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#050507] backdrop-blur-xl border-b border-[#C9A84C]/10"
          : "bg-[#050507]/95 backdrop-blur-md"
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="h-9 w-9 rounded-lg overflow-hidden shadow-lg shadow-[#C9A84C]/20 group-hover:shadow-[#C9A84C]/40 transition-shadow border border-[#C9A84C]/30">
                <img src="/prof.jpeg" alt="YD" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-lg text-foreground hidden sm:block" style={{ fontFamily: 'var(--font-display)' }}>
                {t("name")}
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "text-[#C9A84C] bg-[#C9A84C]/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-3">
              {/* Language toggle */}
              <div className="flex items-center bg-[#111118] rounded-lg p-0.5 border border-[#1E1E24]">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                    language === 'fr'
                      ? 'bg-[#C9A84C] text-[#050507]'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                    language === 'en'
                      ? 'bg-[#C9A84C] text-[#050507]'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yacouba-diakite-9b0b061a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1E1E24] text-muted-foreground hover:text-[#00D4FF] hover:border-[#00D4FF]/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/diakiteyachte/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1E1E24] text-muted-foreground hover:text-[#E1306C] hover:border-[#E1306C]/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>

              {/* Mobile menu */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-foreground"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-[#1E1E24] bg-[#050507]">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? "text-[#C9A84C] bg-[#C9A84C]/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
                {/* Social links mobile */}
                <div className="flex items-center gap-3 px-4 pt-3 mt-2 border-t border-[#1E1E24]">
                  <a
                    href="https://www.linkedin.com/in/yacouba-diakite-9b0b061a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 flex items-center justify-center rounded-lg border border-[#1E1E24] text-muted-foreground hover:text-[#00D4FF] hover:border-[#00D4FF]/30 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/diakiteyachte/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 flex items-center justify-center rounded-lg border border-[#1E1E24] text-muted-foreground hover:text-[#E1306C] hover:border-[#E1306C]/30 transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/33753895741"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 rounded-full shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all hover:scale-105"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5" fill="currentColor" />
        <span className="hidden sm:block text-sm font-medium">{t("whatsappText")}</span>
      </a>
    </>
  )
}
