import type { Metadata } from "next"
import { ListSites } from "@/app/(app)/showcase/partials/list-sites"
import { Header } from "@/components/header"
import { Container } from "@/components/ui/container"
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
      <Header>
        <span className="tracking-tight">Show</span>
        <span className="text-muted-fg tracking-tight">case</span>
      </Header>
      <Container className="py-4 sm:py-16">
        <ListSites sites={sites} />
      </Container>
    </>
  )
}
