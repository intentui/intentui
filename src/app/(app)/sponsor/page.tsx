import { SponsorPlan } from "@/app/(app)/sponsor/sponsor-plan"
import { Header, HeaderDescription, HeaderInner, HeaderTitle } from "@/components/header"

export default function Page() {
  return (
    <>
      <Header>
        <HeaderInner>
          <HeaderTitle>Sponsor</HeaderTitle>
          <HeaderDescription>
            Your support helps fund ongoing development, maintenance, and new components.
          </HeaderDescription>
        </HeaderInner>
      </Header>
      <SponsorPlan />
    </>
  )
}
