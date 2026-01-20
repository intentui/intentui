import { SponsorPlan } from "@/app/(app)/sponsor/sponsor-plan"
import { PageContainer } from "@/components/page-container"
import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"

export default function Page() {
  return (
    <div>
      <div className="pt-12 pb-6 sm:pt-24 sm:pb-8">
        <PageContainer>
          <div className="mx-auto max-w-lg text-center">
            <span className="mb-2 block text-muted-fg text-sm/6">Sponsor</span>
            <Heading className="mb-2 text-3xl sm:text-4xl">Back what’s next</Heading>
            <Text className="sm:text-base/7">
              Your support helps fund ongoing development, maintenance, and new components.
            </Text>
          </div>
        </PageContainer>
      </div>
      <SponsorPlan />
    </div>
  )
}
