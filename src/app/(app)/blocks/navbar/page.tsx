import { Sandbox } from "@/app/(app)/blocks/sandbox"
import { JsonLd } from "@/components/json-ld"
import { app } from "@/config/app"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Blocks of Navbar",
  description:
    "Explore a curated gallery of responsive, accessible navbar design blocks. Copy, customize, and ship faster with ready-to-use layouts for modern websites.",
  path: "/blocks/navbar",
  type: "article",
  keywords: [
    "navbar blocks",
    "navigation components",
    "responsive navbar",
    "accessible navigation",
    "react navbar",
    "intent ui",
    "intentui",
  ],
})
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: app.url },
      { "@type": "ListItem", position: 2, name: "Blocks", item: `${app.url}/blocks` },
      { "@type": "ListItem", position: 3, name: "Navbar", item: `${app.url}/blocks/navbar` },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <Sandbox registries={["navbar-01", "navbar-02", "navbar-03", "navbar-04", "navbar-05"]} />
    </>
  )
}
