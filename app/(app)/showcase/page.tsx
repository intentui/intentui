import React from "react"

import { ListSites } from "@/app/(app)/showcase/partials/list-sites"
import { Header } from "@/components/header"
import { siteConfig } from "@/resources/config/site"
import type { Metadata } from "next"
import { Container } from "ui"

export const metadata: Metadata = {
  title: "Showcase",
  description: "A showcase of justd components, tools, and more.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  applicationName: siteConfig.name
}

export default async function Page() {
  const res = await fetch(
    "https://raw.githubusercontent.com/intentuilabs/showcase/refs/heads/main/sites.json",
    { next: { revalidate: 3600 } }
  )
  const sites = await res.json()
  return (
    <>
      <Header>
        Show
        <span className="text-muted-fg">case</span>
      </Header>
      <Container className="py-4 sm:py-16">
        <ListSites sites={sites} />
      </Container>
    </>
  )
}
