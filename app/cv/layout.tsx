import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CV - Yacouba DIAKITE | Ingénieur Data & IA",
  description: "Curriculum Vitae de Yacouba DIAKITE, Ingénieur Data Science & Intelligence Artificielle. Double champion du monde Huawei ICT.",
}

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return children
}
