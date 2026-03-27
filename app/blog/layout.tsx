import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Yacouba DIAKITE | Tech, IA & Innovation",
  description: "Articles et réflexions sur l'intelligence artificielle, la data science, le cloud computing et l'innovation technologique.",
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
