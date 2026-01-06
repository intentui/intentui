import type { Metadata } from "next"
import { Hero } from "@/app/(app)/blocks/hero"
import { DesignIntentui } from "@/app/(home)/partials/design-intentui"
import { PageContainer } from "@/components/page-container"
import { Sandbox } from "./sandbox"

export const metadata: Metadata = {
  title: "Blocks",
  description:
    "Blocks provides a comprehensive library of example guides that show how to use each component end to end, from setup to real world implementation.",
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
          ]}
        />
      </PageContainer>
      <DesignIntentui />
    </div>
  )
}
