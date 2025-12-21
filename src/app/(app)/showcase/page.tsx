import type { Metadata } from "next"
import { AddMore } from "@/app/(app)/showcase/partials/add-more"
import { ListSites } from "@/app/(app)/showcase/partials/list-sites"
import { PageContainer } from "@/components/page-container"
import { Heading } from "@/components/ui/heading"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Showcase",
  description: "A showcase of Intent UI components, tools, and more.",
  metadataBase: new URL("https://intentui.com"),
  applicationName: siteConfig.name,
}

export default async function Page() {
  const res = await fetch(
    "https://raw.githubusercontent.com/intentui/showcase/refs/heads/main/sites.json",
    {
      next: { revalidate: 3600 },
    },
  )
  const sites = await res.json()
  return (
    <>
      <div className="border-b bg-muted/50 py-6 sm:py-12">
        <PageContainer>
          <div className="flex items-center justify-between">
            <Heading>Showcase</Heading>
            <AddMore />
          </div>
        </PageContainer>
      </div>

      <PageContainer className="py-4 sm:py-16">
        <ListSites sites={sites} />
      </PageContainer>
    </>
  )
}
