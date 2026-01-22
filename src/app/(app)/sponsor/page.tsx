import { SponsorPlan } from "@/app/(app)/sponsor/sponsor-plan"
import { Header, HeaderDescription, HeaderInner, HeaderTitle } from "@/components/header"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Sponsor",
  description:
    "Your support funds ongoing development, maintenance, and new components, helping Intent UI stay sustainable so I can keep building and supporting the community.",
  path: "/sponsor",
  keywords: [
    "sponsor",
    "support",
    "donate",
    "contribute",
    "open source",
    "intent ui sponsor",
    "intent ui",
    "intentui",
  ],
})
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
