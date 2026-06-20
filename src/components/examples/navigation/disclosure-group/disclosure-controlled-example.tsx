'use client'

import { useState } from 'react'
import { Disclosure, DisclosurePanel, DisclosureTrigger } from '@/components/ui/disclosure-group'

export default function DisclosureControlledDemo() {
  const [expanded, setExpanded] = useState(false)

  return (
    <Disclosure isExpanded={expanded} onExpandedChange={setExpanded}>
      <DisclosureTrigger>Add tax details</DisclosureTrigger>
      <DisclosurePanel>
        You can add your tax information to your invoices, including your company name, tax ID, and
        billing address.
      </DisclosurePanel>
    </Disclosure>
  )
}
