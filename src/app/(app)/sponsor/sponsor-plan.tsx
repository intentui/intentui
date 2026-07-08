'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import { PageContainer } from '@/components/page-container'
import { buttonStyles } from '@/components/ui/button'
import { Strong, Text } from '@/components/ui/text'
import json from '@/json/sponsors.json'

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
  type: 'individual' | 'company'
}

const plans = json as SponsorPlanItem[]
const individualPlans = plans.filter((i) => i.type === 'individual')
const companyPlans = plans.filter((i) => i.type !== 'individual')
const sponsorButton = buttonStyles({
  intent: 'primary',
  size: 'lg',
  className: 'bg-fg hover:bg-fg/90 text-bg',
})

export function SponsorPlan() {
  return (
    <div className="-mb-px [--border:var(--color-muted-fg)]/18 [--gutter:--spacing(6)] sm:[--gutter:--spacing(6)]">
      <div className="border-y border-page bg-muted">
        <div className="border-b border-page">
          <PageContainer>
            <div className="border-x border-muted-fg/30 bg-bg p-(--gutter)">
              <div className="max-w-xl">
                <h3 className="my-2 font-semibold text-2xl text-fg tracking-tight">Individual</h3>
                <Text className="text-pretty">
                  Your sponsorship directly funds development time. Every new component, every bug
                  fix, every release.
                </Text>
              </div>
            </div>
          </PageContainer>
        </div>
        <PageContainer>
          <div className="grid grid-cols-1 divide-y border-x border-page divide-page sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {individualPlans.map((plan) => (
              <div key={plan.id} className="flex flex-col bg-bg p-(--gutter)">
                <div className="mb-6 flex flex-1 flex-col gap-y-4">
                  <div>
                    <span className="font-medium text-fg px-2.5 py-1.5 bg-secondary text-sm/6 rounded-full">
                      {plan.name}
                    </span>
                  </div>

                  <div className="text-3xl tabular-nums tracking-tight">
                    ${plan.price.amount}
                    <span className="ml-1 font-normal text-base text-muted-fg">
                      {plan.id === 'o-sponsor' ? 'one time' : '/ month'}
                    </span>
                  </div>

                  <Text className="text-pretty">{plan.description}</Text>
                  <a href={plan.checkout_url} className={sponsorButton}>
                    Become {plan.name === 'Ambassador' ? 'an' : 'a'} {plan.name.toLowerCase()}
                  </a>
                  {plan.benefits.length ? (
                    <ul className="space-y-4 text-sm/6">
                      {plan.benefits.map((benefit) => (
                        <li key={benefit.title} className="flex gap-x-3">
                          <CheckIcon className="h-lh w-4 shrink-0 text-primary-subtle-fg" />
                          <p className="text-pretty">
                            <Strong>{benefit.title}</Strong>{' '}
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
          <div className="border-x border-muted-fg/30 bg-bg p-(--gutter)">
            <div className="max-w-xl">
              <h3 className="my-2 font-semibold text-2xl text-fg tracking-tight">Company</h3>
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
                <div className="mb-6 flex flex-1 flex-col gap-y-4">
                  <div>
                    <span className="font-medium text-fg px-2.5 py-1.5 bg-secondary text-sm/6 rounded-full">
                      {plan.name}
                    </span>
                  </div>
                  <div className="text-3xl tabular-nums tracking-tight">
                    ${plan.price.amount}
                    <span className="ml-1 font-normal text-base text-muted-fg">/ month</span>
                  </div>
                  <Text className="text-pretty">{plan.description}</Text>

                  <a href={plan.checkout_url} className={sponsorButton}>
                    Become {plan.name === 'Ambassador' ? 'an' : 'a'} {plan.name.toLowerCase()}
                  </a>
                  {plan.benefits.length ? (
                    <ul className="space-y-4 text-sm/6">
                      {plan.benefits.map((benefit) => (
                        <li key={benefit.title} className="flex gap-x-3">
                          <CheckIcon className="h-lh w-4 shrink-0 text-primary-subtle-fg" />
                          <p className="text-pretty">
                            <Strong>{benefit.title}</Strong>{' '}
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
              Looking for a one-time sponsorship instead?{' '}
              <a
                href="https://x.com/irsyad"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary-subtle-fg underline decoration-primary-subtle-fg/50 hover:decoration-primary-subtle-fg"
              >
                Reach out on X
              </a>{' '}
              and we&apos;ll work something out.
            </div>
          </PageContainer>
        </div>
      </div>
    </div>
  )
}
