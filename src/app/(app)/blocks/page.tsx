import { JsonLd } from "@/components/json-ld"
import { app } from "@/config/app"
import { createMetadata } from "@/lib/metadata"
import { Sandbox } from "./sandbox"

export const metadata = createMetadata({
  title: "Blocks",
  description:
    "Pre-built application blocks with sidebars, navigation, and authentication layouts. Copy and customize production-ready templates built with React Aria and Tailwind CSS.",
  path: "/blocks",
  keywords: [
    "blocks",
    "templates",
    "ui blocks",
    "react blocks",
    "sidebar templates",
    "navigation templates",
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
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <Sandbox registries={["sidebar-02", "navbar-01", "auth-01"]} />
    </>
  )
}
