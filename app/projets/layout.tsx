import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projets — Yacouba DIAKITE | Développement & Innovation",
  description: "Projets techniques développés par Yacouba DIAKITE : plateformes SaaS, IA, e-commerce, cloud computing.",
}

export default function ProjetsLayout({ children }: { children: React.ReactNode }) {
  return children
}
