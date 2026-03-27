import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/components/navigation"
import "./globals.css"

export const metadata: Metadata = {
  title: "Yacouba DIAKITE — Double Champion du Monde | Ingénieur Data & IA",
  description: "Ingénieur Data & IA, double champion du monde Huawei ICT, lauréat du Prix National d'Excellence 2025. Portfolio personnel.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Yacouba DIAKITE — Double Champion du Monde | Ingénieur Data & IA",
    description: "Double champion du monde Huawei ICT (2024 & 2025). Lauréat du Prix National d'Excellence 2025. Ingénieur Data Science & Intelligence Artificielle.",
    url: "https://yacouba-diakite.com",
    siteName: "Yacouba DIAKITE",
    images: [
      {
        url: "/prof.jpeg",
        width: 800,
        height: 800,
        alt: "Yacouba DIAKITE",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yacouba DIAKITE — Double Champion du Monde",
    description: "Double champion du monde Huawei ICT. Ingénieur Data & IA.",
    images: ["/prof.jpeg"],
  },
  metadataBase: new URL("https://yacouba-diakite.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
