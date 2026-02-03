import { SponsorPlan } from "@/app/(app)/sponsor/sponsor-plan"
import { DesignIntentui } from "@/app/(home)/partials/design-intentui"
import { Header, HeaderDescription, HeaderInner, HeaderTitle } from "@/components/header"
import { JsonLd } from "@/components/json-ld"
import { app } from "@/config/app"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Sponsor",
  description:
    "Your support funds ongoing development, maintenance, and new components, helping Intent UI stay sustainable so I can keep building and supporting the community.",
  path: "/sponsor",
  keywords: [
    "sponsor",
    "support",
    "donate",
    "contribute",
    "open source",
    "intent ui sponsor",
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
      { "@type": "ListItem", position: 2, name: "Sponsor", item: `${app.url}/sponsor` },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header>
        <HeaderInner>
          <HeaderTitle>Sponsor</HeaderTitle>
          <HeaderDescription>
            Your support helps fund ongoing development, maintenance, and new components.
          </HeaderDescription>
        </HeaderInner>
      </Header>
      <SponsorPlan />
      <DesignIntentui />
    </>
  )
}
