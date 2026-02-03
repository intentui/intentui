import { ListComponents } from "@/app/(app)/components/(partials)/list-components"
import { DesignIntentui } from "@/app/(home)/partials/design-intentui"
import { JsonLd } from "@/components/json-ld"
import menus from "@/components-search.json"
import { app } from "@/config/app"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Components",
  description:
    "Explore 80+ accessible UI components built on React Aria, fully customizable and production ready, with consistent patterns for fast, polished interfaces.",
  path: "/components",
  keywords: [
    "react components",
    "ui components",
    "react aria components",
    "tailwind css components",
    "accessible components",
    "next.js components",
    "intent ui",
    "intentui",
  ],
})

const components = menus[3]
const allChildren = (components?.children ?? []).flatMap((s: any) => s?.children ?? [])

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Intent UI Components",
        description:
          "Explore 80+ accessible UI components built on React Aria, fully customizable and production ready.",
        url: `${app.url}/components`,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: allChildren.length,
          itemListElement: allChildren.map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.title,
            url: `${app.url}${item.slug}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: app.url },
          { "@type": "ListItem", position: 2, name: "Components", item: `${app.url}/components` },
        ],
      },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <ListComponents />
      <DesignIntentui />
    </>
  )
}
