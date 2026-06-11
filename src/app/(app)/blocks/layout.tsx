import type { Metadata } from "next"
import { BlocksHeader } from "@/app/(app)/blocks/blocks-header"
import { DesignIntentui } from "@/app/(home)/partials/design-intentui"
import { PageContainer } from "@/components/page-container"
import { app } from "@/config/app"
import { ogImage } from "@/lib/og"

const meta = {
  images: [
    {
      url: ogImage({
        title: "Blocks",
        description: "Ready-to-use chart blocks you can copy and customize",
      }),
    },
  ],
}

export const metadata: Metadata = {
  title: {
    default: "Blocks",
    template: `%s / ${app.name}`,
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
    "intent ui laravel",
    "Intent UI Inertia",
  ],
  openGraph: {
    ...meta,
    url: `${app.url}/blocks`,
  },
  twitter: {
    card: "summary_large_image",
    ...meta,
    creator: `@${app.author.username}`,
  },
  authors: [
    {
      name: app.author.name,
      url: app.author.url,
    },
  ],
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <BlocksHeader />
      <PageContainer>
        <div className="space-y-12 border-page py-6 sm:border-x sm:px-6">{children}</div>
      </PageContainer>

      <DesignIntentui />
    </div>
  )
}
