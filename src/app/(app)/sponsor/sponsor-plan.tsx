"use client"

import { CheckIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/24/outline"
import { PageContainer } from "@/components/page-container"
import { buttonStyles } from "@/components/ui/button"
import { Text } from "@/components/ui/text"
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
}

const plans = json as SponsorPlanItem[]
const individualPlan = plans[0]

export function SponsorPlan() {
  return (
    <div className="-mb-px [--border:var(--color-muted-fg)]/15 [--gutter:--spacing(6)] sm:[--gutter:--spacing(8)] lg:[--gutter:--spacing(12)]">
      <div className="border-y bg-muted">
        <PageContainer>
          <div className="flex flex-col items-center gap-6 border-x bg-bg p-(--gutter) sm:flex-row">
            <div className="w-full sm:w-2/3">
              <div className="max-w-xl">
                <h3 className="mb-3 flex items-center gap-x-3 font-medium text-fg text-xl">
                  <UserCircleIcon className="size-5 fill-primary-subtle text-primary-subtle-fg" />
                  Support as an individual
                </h3>
                <Text>{individualPlan.description}</Text>
              </div>
            </div>
            <div className="flex w-full flex-col sm:w-1/3">
              <div className="mb-6 flex flex-1 flex-col gap-y-6">
                <div className="font-semibold text-3xl tabular-nums">
                  ${individualPlan.price.amount}{" "}
                  <span className="font-normal text-base/6 text-muted-fg">/ per month</span>
                </div>
                {individualPlan.benefits.length ? (
                  <ul className="space-y-3 text-sm/6 *:flex *:gap-x-3">
                    {individualPlan.benefits.map((benefit) => (
                      <li key={benefit}>
                        <CheckIcon className="h-lh w-4 text-primary-subtle-fg" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <a href={individualPlan.checkout_url} className={buttonStyles({ intent: "primary" })}>
                Become {individualPlan.id === "ambassador" ? "an" : "a"} {individualPlan.id}
              </a>
            </div>
          </div>
        </PageContainer>
      </div>
      <div className="bg-muted">
        <PageContainer>
          <div className="border-x bg-bg p-(--gutter)">
            <div className="max-w-xl">
              <h3 className="mb-3 flex items-center gap-x-3 font-medium text-fg text-xl">
                <UsersIcon className="size-5 fill-primary-subtle text-primary-subtle-fg" />
                Support as a company
              </h3>
              <Text>{individualPlan.description}</Text>
            </div>
          </div>
        </PageContainer>
      </div>
      <div className="border-y bg-muted">
        <PageContainer>
          <div className="grid grid-cols-1 divide-y border-x sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {plans
              .filter((i) => i.id !== "sponsor")
              .map((plan) => (
                <div key={plan.id} className="flex flex-col bg-bg p-(--gutter)">
                  <div className="mb-6 flex flex-1 flex-col gap-y-6">
                    <div className="text-muted-fg text-sm">{plan.name}</div>
                    <div className="font-semibold text-3xl tabular-nums">
                      ${plan.price.amount}{" "}
                      <span className="font-normal text-base/6 text-muted-fg">/ per month</span>
                    </div>
                    <Text>{plan.description}</Text>
                    {plan.benefits.length ? (
                      <ul className="space-y-3 text-sm/6 *:flex *:gap-x-3">
                        {plan.benefits.map((benefit) => (
                          <li key={benefit}>
                            <CheckIcon className="h-lh w-4 text-primary-subtle-fg" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  <a href={plan.checkout_url} className={buttonStyles({ intent: "primary" })}>
                    Become {plan.id === "ambassador" ? "an" : "a"} {plan.id}
                  </a>
                </div>
              ))}
          </div>
        </PageContainer>
      </div>
    </div>
  )
}
