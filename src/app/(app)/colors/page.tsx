import { ColorPalette } from "@/app/(app)/colors/(colors)/color-palette"
import { DesignIntentui } from "@/app/(home)/partials/design-intentui"
import { Header, HeaderDescription, HeaderInner, HeaderTitle } from "@/components/header"
import { JsonLd } from "@/components/json-ld"
import { app } from "@/config/app"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Colors",
  description:
    "Pick and generate Tailwind-style color scales from 50 to 950. Browse palettes, choose a base color, then instantly create a full ramp with copy-ready output.",
  path: "/colors",
  image: null,
  keywords: [
    "color palette generator",
    "tailwind colors",
    "color scales",
    "ui color picker",
    "design system colors",
    "intent ui",
    "intentui",
  ],
})

export default async function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: app.url },
      { "@type": "ListItem", position: 2, name: "Colors", item: `${app.url}/colors` },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header className="border-b">
        <HeaderInner>
          <HeaderTitle>Colors</HeaderTitle>
          <HeaderDescription>
            Browse palettes, choose a base color, then instantly create a full ramp with copy-ready
            output.
          </HeaderDescription>
        </HeaderInner>
      </Header>
      <ColorPalette />
      <DesignIntentui />
    </>
  )
}
