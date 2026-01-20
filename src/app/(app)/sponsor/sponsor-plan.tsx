"use client"

import { CheckIcon } from "@heroicons/react/24/outline"
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
    <div className="-mb-px [--border:var(--color-muted-fg)]/18 [--gutter:--spacing(6)] sm:[--gutter:--spacing(8)] lg:[--gutter:--spacing(12)]">
      <div className="border-y bg-muted">
        <PageContainer>
          <div className="flex flex-col items-center gap-6 border-x bg-bg p-(--gutter) sm:flex-row">
            <div className="w-full sm:w-2/3">
              <div className="max-w-xl">
                <svg
                  className="size-6 shrink-0 fill-primary-subtle text-primary-subtle-fg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 6.5C16 8.70914 14.2091 10.5 12 10.5C9.79086 10.5 8 8.70914 8 6.5C8 4.29086 9.79086 2.5 12 2.5C14.2091 2.5 16 4.29086 16 6.5Z"
                    stroke="currentColor"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0009 12.5C8.27245 12.5 5.47137 14.9458 4.4165 18.3604C4.0701 19.4817 5.01046 20.5 6.18402 20.5H17.8177C18.9912 20.5 19.9316 19.4817 19.5852 18.3604C18.5303 14.9458 15.7292 12.5 12.0009 12.5Z"
                    stroke="currentColor"
                    strokeLinejoin="round"
                  />
                </svg>

                <h3 className="mt-4 mb-2 font-medium text-fg text-xl tracking-tight">
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
              <svg
                className="size-6 shrink-0 fill-primary-subtle text-primary-subtle-fg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx={12}
                  cy="7.25"
                  r={3}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx={5}
                  cy="9.25"
                  r={2}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx={19}
                  cy="9.25"
                  r={2}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.50128 19.5H16.5013C17.6059 19.5 18.4903 18.5988 18.2528 17.52C17.7636 15.298 16.3116 12 12.0013 12C7.69099 12 6.23894 15.298 5.74978 17.52C5.51231 18.5988 6.39671 19.5 7.50128 19.5Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.50038 18.5H2.25069C1.146 18.5 0.271276 17.5874 0.640565 16.5462C1.21292 14.9326 2.55137 13 5.50038 13"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.5 18.5H21.7497C22.8544 18.5 23.7291 17.5874 23.3598 16.5462C22.7875 14.9326 21.449 13 18.5 13"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h3 className="mt-4 mb-2 font-medium text-fg text-xl tracking-tight">
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
