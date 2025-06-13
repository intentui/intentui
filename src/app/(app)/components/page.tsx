import { ListComponents } from "@/app/(app)/components/(partials)/list-components"
import { Header } from "@/components/header"
import { PageContainer } from "@/components/page-container"
import { siteConfig } from "@/config/site"
import type { Metadata } from "next"

export default function Page() {
  return (
    <>
      <Header>
        <span className="text-fg tracking-tight">Comp</span>
        <span className="text-muted-fg tracking-tight">onents</span>
      </Header>
      <PageContainer className="py-6 sm:py-12">
        <ListComponents />
      </PageContainer>
    </>
  )
}

export const metadata: Metadata = {
  title: "Components",
  description:
    "Over 50 accessible components, neatly grouped into sections. Guaranteed usability for all!",
  metadataBase: new URL("https://intentui.com"),
  applicationName: siteConfig.name,
  keywords: [
    "Components",
    "Intent Components",
    "Tailwind CSS",
    "UI Components",
    "UI Kit",
    "UI Library",
    "UI Framework",
    "Intent",
    "Next.js 15",
    "React Aria",
    "React Aria Components",
    "Server Components",
    "React Components",
    "Next UI Components",
    "UI Design System",
    "UI for Laravel Inertia",
    "Laravel Inertia UI",
    "Laravel Inertia Components",
    "Laravel Inertia UI Components",
    "Laravel Inertia UI Kit",
    "Laravel Inertia UI Library",
    "Laravel Inertia UI Framework",
    "Laravel Inertia Intent",
    "Laravel Intent",
    "Intent Components",
    "Intent UI Components",
    "Intent UI Kit",
    "Intent UI Library",
    "Intent UI Framework",
    "Intent Laravel Inertia",
    "Intent Laravel",
    "Intent Inertia",
  ],
}
