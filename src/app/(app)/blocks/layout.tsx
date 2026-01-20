import { BlocksHeader } from "@/app/(app)/blocks/blocks-header"
import { DesignIntentui } from "@/app/(home)/partials/design-intentui"
import { PageContainer } from "@/components/page-container"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <BlocksHeader />
      <PageContainer className="space-y-12 py-6 sm:py-12">{children}</PageContainer>

      <DesignIntentui />
    </div>
  )
}
