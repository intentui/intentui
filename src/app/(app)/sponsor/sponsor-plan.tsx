"use client"

import { CheckIcon } from "@heroicons/react/20/solid"
import { BuildingOffice2Icon, UserCircleIcon } from "@heroicons/react/24/outline"
import { PageContainer } from "@/components/page-container"
import { buttonStyles } from "@/components/ui/button"
import { Strong, Text } from "@/components/ui/text"
import json from "@/json/sponsors.json"

interface SponsorPlanPrice {
  amount: number
  currency: string
  interval: string
}

interface SponsorPlanItem {
  id: string
  name: string
  price: SponsorPlanPrice
  description: string
  benefits: {
    title: string
    description: string
  }[]
  checkout_url: string
  type: "individual" | "company"
}

const plans = json as SponsorPlanItem[]
const individualPlans = plans.filter((i) => i.type === "individual")
const companyPlans = plans.filter((i) => i.type !== "individual")
const sponsorButton = buttonStyles({
  intent: "primary",
  size: "lg",
  className: "bg-fg hover:bg-fg/90 text-bg",
})

const Badge = (props: React.ComponentProps<"span">) => (
  <span
    className="inline-flex items-center gap-x-2 font-medium text-primary-subtle-fg text-sm/6 *:[svg]:size-4"
    {...props}
  />
)

export function SponsorPlan() {
  return (
    <div className="-mb-px [--border:var(--color-muted-fg)]/18 [--gutter:--spacing(6)] sm:[--gutter:--spacing(8)] lg:[--gutter:--spacing(12)]">
      <div className="border-y bg-muted">
        <PageContainer>
          <div className="border-x bg-bg p-(--gutter)">
            <div className="max-w-xl">
              <Badge>
                <UserCircleIcon /> Individual
              </Badge>
              <h3 className="mt-4 mb-2 font-semibold text-2xl text-fg tracking-tight">
                Fund Intent UI
              </h3>
              <Text className="text-pretty">
                Your sponsorship directly funds development time. Every new component, every bug
                fix, every release. Even a small contribution helps keep Intent UI free and actively
                maintained for everyone.
              </Text>
            </div>
          </div>
          <div className="grid grid-cols-1 divide-y border-x border-t sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {individualPlans.map((plan) => (
              <div key={plan.id} className="flex flex-col bg-bg p-(--gutter)">
                <div className="mb-6 flex flex-1 flex-col gap-y-5">
                  <div className="font-medium text-fg text-sm">{plan.name}</div>

                  <div className="font-semibold text-3xl tabular-nums tracking-tight">
                    ${plan.price.amount}
                    <span className="ml-1 font-normal text-base text-muted-fg">
                      {plan.id === "o-sponsor" ? "one time" : "/ month"}
                    </span>
                  </div>

                  <Text className="text-pretty">{plan.description}</Text>
                  <a href={plan.checkout_url} className={sponsorButton}>
                    Become {plan.name === "Ambassador" ? "an" : "a"} {plan.name.toLowerCase()}
                  </a>
                  {plan.benefits.length ? (
                    <ul className="space-y-4 text-sm/6">
                      {plan.benefits.map((benefit) => (
                        <li key={benefit.title} className="flex gap-x-3">
                          <CheckIcon className="h-lh w-4 shrink-0 text-primary-subtle-fg" />
                          <p className="text-pretty">
                            <Strong>{benefit.title}</Strong>{" "}
                            <span className="text-muted-fg">{benefit.description}</span>
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </div>

      <div className="bg-muted">
        <PageContainer>
          <div className="border-x bg-bg p-(--gutter)">
            <div className="max-w-xl">
              <Badge>
                <BuildingOffice2Icon /> Company
              </Badge>
              <h3 className="mt-4 mb-2 font-semibold text-2xl text-fg tracking-tight">
                Invest in the tools your team uses
              </h3>
              <Text className="text-pretty">
                A monthly sponsorship for companies who want to fund ongoing development, keep the
                project sustainable, and get public recognition across the Intent UI ecosystem.
              </Text>
            </div>
          </div>
        </PageContainer>
      </div>

      <div className="border-y bg-muted">
        <PageContainer>
          <div className="grid grid-cols-1 divide-y border-x sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {companyPlans.map((plan) => (
              <div key={plan.id} className="flex flex-col bg-bg p-(--gutter)">
                <div className="mb-6 flex flex-1 flex-col gap-y-5">
                  <div className="font-medium text-fg text-sm">{plan.name}</div>
                  <div className="font-semibold text-3xl tabular-nums tracking-tight">
                    ${plan.price.amount}
                    <span className="ml-1 font-normal text-base text-muted-fg">/ month</span>
                  </div>
                  <Text className="text-pretty">{plan.description}</Text>

                  <a href={plan.checkout_url} className={sponsorButton}>
                    Become {plan.name === "Ambassador" ? "an" : "a"} {plan.name.toLowerCase()}
                  </a>
                  {plan.benefits.length ? (
                    <ul className="space-y-4 text-sm/6">
                      {plan.benefits.map((benefit) => (
                        <li key={benefit.title} className="flex gap-x-3">
                          <CheckIcon className="h-lh w-4 shrink-0 text-primary-subtle-fg" />
                          <p className="text-pretty">
                            <Strong>{benefit.title}</Strong>{" "}
                            <span className="text-muted-fg">{benefit.description}</span>
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
        <div className="border-t">
          <PageContainer>
            <div className="border-x p-4 text-center text-sm/6">
              Looking for a one-time sponsorship instead?{" "}
              <a
                href="https://x.com/irsyad"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary-subtle-fg underline decoration-primary-subtle-fg/50 hover:decoration-primary-subtle-fg"
              >
                Reach out on X
              </a>{" "}
              and we&apos;ll work something out.
            </div>
          </PageContainer>
        </div>
      </div>
    </div>
  )
}
