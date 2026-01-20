import type { Metadata } from "next"
import { BlocksHeader } from "@/app/(app)/blocks/blocks-header"
import { DesignIntentui } from "@/app/(home)/partials/design-intentui"
import { PageContainer } from "@/components/page-container"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: {
    default: "Blocks",
    template: `%s / ${siteConfig.name}`,
  },
  description:
    "Blocks provides a comprehensive library of example guides that show how to use each component end to end, from setup to real world implementation.",
  keywords: [
    "Intent UI Blocks",
    "Tailwind CSS",
    "UI Components",
    "UI Kit",
    "UI Library",
    "UI Framework",
    "Intent UI",
    "React Aria",
    "React Aria Components",
    "Server Components",
    "React Components",
    "Next UI Components",
    "UI Design System",
    "UI for Laravel Inertia",
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
  authors: [
    {
      name: "Irsyad",
      url: "https://x.com/irsyad",
    },
  ],
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <BlocksHeader />
      <PageContainer className="space-y-12 py-6 sm:py-12">{children}</PageContainer>

      <DesignIntentui />
    </div>
  )
}
