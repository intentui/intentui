'use client'

import { Disclosure, DisclosurePanel, DisclosureTrigger } from '@/components/ui/disclosure-group'

export default function DisclosureDisabledDemo() {
  return (
    <Disclosure isDisabled>
      <DisclosureTrigger>Add tax details</DisclosureTrigger>
      <DisclosurePanel>
        You can add your tax information to your invoices, including your company name, tax ID, and
        billing address.
      </DisclosurePanel>
    </Disclosure>
  )
}
