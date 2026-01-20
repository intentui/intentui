import type { Metadata } from "next"
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
  return (
    <>
      <div className="border-b bg-muted/50 py-6 sm:py-12">
        <PageContainer>
          <div className="flex items-center justify-between">
            <Heading>Showcase</Heading>
          </div>
        </PageContainer>
      </div>

      <PageContainer className="py-4 sm:py-16">Coming soon</PageContainer>
    </>
  )
}
