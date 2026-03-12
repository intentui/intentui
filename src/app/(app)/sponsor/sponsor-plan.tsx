"use client"

import { BuildingOffice2Icon, CheckIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import { HeartIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import { PageContainer } from "@/components/page-container"
import { Badge, badgeStyles } from "@/components/ui/badge"
import { buttonStyles } from "@/components/ui/button"
import { Note } from "@/components/ui/note"
import { Text } from "@/components/ui/text"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
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
  benefits: string[]
  checkout_url: string
  type: "individual" | "company"
}

const plans = json as SponsorPlanItem[]
const individualPlans = plans.filter((i) => i.type === "individual")
const companyPlans = plans.filter((i) => i.type !== "individual")

export function SponsorPlan() {
  const [individualInterval, setIndividualInterval] = useState<"monthly" | "one-time">("monthly")
  const individualPlan =
    individualInterval === "monthly"
      ? individualPlans.find((p) => p.id === "sponsor")!
      : individualPlans.find((p) => p.id === "o-sponsor")!

  return (
    <div className="-mb-px [--border:var(--color-muted-fg)]/18 [--gutter:--spacing(6)] sm:[--gutter:--spacing(8)] lg:[--gutter:--spacing(12)]">
      <div className="border-y bg-muted">
        <PageContainer>
          <div className="flex flex-col items-center gap-8 border-x bg-bg p-(--gutter) sm:flex-row">
            <div className="w-full sm:w-2/3">
              <div className="max-w-xl">
                <div className="mb-4">
                  <Badge intent="secondary">
                    <UserCircleIcon /> Individual
                  </Badge>
                </div>
                <ToggleGroup
                  size="sm"
                  selectedKeys={[individualInterval]}
                  onSelectionChange={(keys) => {
                    const selected = [...keys][0] as "monthly" | "one-time"
                    if (selected) setIndividualInterval(selected)
                  }}
                >
                  <ToggleGroupItem id="monthly">Monthly</ToggleGroupItem>
                  <ToggleGroupItem id="one-time">One time</ToggleGroupItem>
                </ToggleGroup>

                <h3 className="mt-5 mb-2 font-semibold text-2xl text-fg tracking-tight">
                  Back the project you rely on
                </h3>
                <Text className="text-pretty">
                  Your sponsorship directly funds development time. Every new component, every bug
                  fix, every release. Even a small contribution helps keep Intent UI free and
                  actively maintained for everyone.
                </Text>

                <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-2">
                    <CheckIcon className="size-4 text-primary-subtle-fg" />
                    <span className="text-muted-fg text-sm">Public shoutout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="size-4 text-primary-subtle-fg" />
                    <span className="text-muted-fg text-sm">Profile on sponsors page</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col sm:w-1/3">
              <div className="mb-6 flex flex-1 flex-col gap-y-4">
                <div className="font-semibold text-4xl tabular-nums tracking-tight">
                  ${individualPlan.price.amount}
                  <span className="ml-1 font-normal text-base text-muted-fg">
                    {individualInterval === "monthly" ? "/ month" : "one time"}
                  </span>
                </div>
                <Text className="text-pretty">{individualPlan.description}</Text>
              </div>

              <a
                href={individualPlan.checkout_url}
                className={buttonStyles({ intent: "primary", size: "lg" })}
              >
                <HeartIcon />
                Become a sponsor
              </a>
            </div>
          </div>
        </PageContainer>
      </div>

      <div className="bg-muted">
        <PageContainer>
          <div className="border-x bg-bg p-(--gutter)">
            <div className="max-w-xl">
              <Badge intent="secondary">
                <BuildingOffice2Icon /> Company
              </Badge>
              <h3 className="mt-4 mb-2 font-semibold text-2xl text-fg tracking-tight">
                Invest in the tools your team uses
              </h3>
              <Text className="text-pretty">
                A monthly sponsorship for companies who want to fund ongoing development, keep the
                project sustainable, and get public recognition across the Intent UI ecosystem.
              </Text>
              <Note className="mt-6">
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
              </Note>
            </div>
          </div>
        </PageContainer>
      </div>

      <div className="border-y bg-muted">
        <PageContainer>
          <div className="grid grid-cols-1 divide-y border-x sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {companyPlans.map((plan, index) => (
              <div key={plan.id} className="relative flex flex-col bg-bg p-(--gutter)">
                {index === 1 && (
                  <div className="absolute top-4 right-4">
                    <span className={badgeStyles({ intent: "info" })}>Popular</span>
                  </div>
                )}
                <div className="mb-6 flex flex-1 flex-col gap-y-5">
                  <div className="font-medium text-fg text-sm">{plan.name}</div>
                  <div className="font-semibold text-3xl tabular-nums tracking-tight">
                    ${plan.price.amount}
                    <span className="ml-1 font-normal text-base text-muted-fg">/ month</span>
                  </div>
                  <Text className="text-pretty">{plan.description}</Text>
                  {plan.benefits.length ? (
                    <ul className="space-y-3 text-sm/6">
                      {plan.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-x-3">
                          <CheckIcon className="h-lh w-4 shrink-0 text-primary-subtle-fg" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                <a
                  href={plan.checkout_url}
                  className={buttonStyles({
                    intent: index === 1 ? "primary" : "outline",
                    size: "lg",
                  })}
                >
                  Become {plan.name === "Ambassador" ? "an" : "a"} {plan.name.toLowerCase()}
                </a>
              </div>
            ))}
          </div>
        </PageContainer>
      </div>
    </div>
  )
}
