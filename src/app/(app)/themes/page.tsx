import type { Metadata } from "next"
import { Header } from "@/components/header"
import { siteConfig } from "@/config/site"

import { ThemeContainer } from "./partials/theme-container"

export default function Page() {
  return (
    <div>
      <Header>Themes</Header>
      <ThemeContainer />
    </div>
  )
}

export const metadata: Metadata = {
  title: "Themes",
  description:
    "Curated themes picked for you, ready to copy, paste, and drop into your app for a polished custom look, consistent styling, and zero hassle from setup to launch.",
  metadataBase: new URL("https://intentui.com"),
  applicationName: siteConfig.name,
  category: "Themes",
  twitter: {
    card: "summary_large_image",
    title: "Themes",
    description:
      "Curated themes picked for you, ready to copy, paste, and drop into your app for a polished custom look, consistent styling, and zero hassle from setup to launch.",
  },
  keywords: [
    "Themes",
    "Intent Themes",
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
