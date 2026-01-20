import type { Metadata } from "next"
import { ListComponents } from "@/app/(app)/components/(partials)/list-components"
import { app } from "@/config/app"

export default function Page() {
  return <ListComponents />
}

export const metadata: Metadata = {
  title: "Components",
  description:
    "Explore 80+ accessible UI components built on React Aria, fully customizable and production ready, with consistent patterns for fast, polished interfaces.",
  metadataBase: new URL("https://intentui.com"),
  applicationName: app.name,
  keywords: [
    "Components",
    "Intent Components",
    "Tailwind CSS",
    "UI Components",
    "UI Kit",
    "UI Library",
    "UI Framework",
    "Intent UI",
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
