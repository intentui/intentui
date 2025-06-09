import { ColorPalette } from "@/app/(app)/colors/(colors)/color-palette"
import { Header } from "@/components/header"
import { siteConfig } from "@/config/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Colors",
  description:
    "A stash of over 154 colors blending TailwindCSS vibes with HTML color names, served up in 4 slick formats.",
  metadataBase: new URL("https://intentui.com"),
  applicationName: siteConfig.name,
  category: "Colors",
  keywords: [
    "Intent Colors",
    "Tailwind CSS",
    "UI Components",
    "UI Kit",
    "UI Library",
    "UI Framework",
    "Intent",
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
  authors: [
    {
      name: "irsyadadl",
      url: "https://x.com/irsyadadl",
    },
  ],
}

export default async function Page() {
  return (
    <>
      <Header>
        <span className="tracking-tight">Col</span>
        <span className="text-muted-fg tracking-tight">ors</span>
      </Header>
      <ColorPalette />
    </>
  )
}
