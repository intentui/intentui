import { SponsorPlan } from "@/app/(app)/sponsor/sponsor-plan"
import { DesignIntentui } from "@/app/(home)/partials/design-intentui"
import { JsonLd } from "@/components/json-ld"
import { PageContainer } from "@/components/page-container"
import { app } from "@/config/app"
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: app.url },
      { "@type": "ListItem", position: 2, name: "Sponsor", item: `${app.url}/sponsor` },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="pt-14 pb-6 sm:pt-32 sm:pb-16">
        <PageContainer>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-primary-subtle">
              <svg
                className="size-7 text-primary-subtle-fg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </div>
            <h1 className="mb-4 font-medium text-3xl tracking-tight sm:text-4xl">
              Help keep Intent UI alive
            </h1>
            <p className="mx-auto max-w-xl text-pretty text-base/7 text-muted-fg sm:text-lg/8">
              Intent UI is free and open source. Your sponsorship funds development, new components,
              and long-term maintenance so I can keep building for the community.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-8 text-center sm:gap-x-12">
              <div>
                <div className="font-semibold text-2xl text-fg tabular-nums sm:text-3xl">87+</div>
                <div className="mt-1 text-muted-fg text-sm">Components</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="font-semibold text-2xl text-fg tabular-nums sm:text-3xl">100%</div>
                <div className="mt-1 text-muted-fg text-sm">Accessible</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="font-semibold text-2xl text-fg tabular-nums sm:text-3xl">Free</div>
                <div className="mt-1 text-muted-fg text-sm">Open Source</div>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
      <SponsorPlan />
      <DesignIntentui />
    </>
  )
}
