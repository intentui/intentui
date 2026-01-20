import type { Metadata } from "next"
import { ColorPalette } from "@/app/(app)/colors/(colors)/color-palette"
import { Header, HeaderDescription, HeaderInner, HeaderTitle } from "@/components/header"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Colors",
  description:
    "Pick and generate Tailwind-style color scales from 50 to 950. Browse palettes, choose a base color, then instantly create a full ramp with copy-ready output.",
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
    "Intent UI",
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
      name: "Irsyad",
      url: "https://x.com/irsyad",
    },
  ],
}

export default async function Page() {
  return (
    <>
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
    </>
  )
}
