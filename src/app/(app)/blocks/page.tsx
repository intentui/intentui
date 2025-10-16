import { Hero } from "@/app/(app)/blocks/hero"
import { DesignIntentui } from "@/app/(home)/partials/design-intentui"
import { PageContainer } from "@/components/page-container"
import { Sandbox } from "./sandbox"

export const metadata = {
  title: "Blocks",
  description:
    "Blocks offers a comprehensive collection of example guides demonstrating how to effectively use components in their entirety.",
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
