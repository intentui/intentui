import type { Metadata } from "next"
import { Hero } from "@/app/(app)/blocks/hero"
import { DesignIntentui } from "@/app/(home)/partials/design-intentui"
import { PageContainer } from "@/components/page-container"
import { Sandbox } from "./sandbox"

export const metadata: Metadata = {
  title: "Blocks",
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

export default function Page() {
  return (
    <div>
      <Hero />
      <PageContainer className="space-y-12 py-6 sm:py-12">
        <Sandbox
          registries={[
            "sidebar-01",
            "sidebar-02",
            "sidebar-03",
            "sidebar-04",
            "navbar-01",
            "navbar-02",
            "navbar-03",
            "auth-01",
          ]}
        />
      </PageContainer>
      <DesignIntentui />
    </div>
  )
}
