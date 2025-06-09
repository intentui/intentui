"use client"

import { useState } from "react"

import { Disclosure, DisclosurePanel, DisclosureTrigger } from "@/components/ui/disclosure"

export default function DisclosureControlledDemo() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      The disclosure is <strong className="text-info">{expanded ? "expanded" : "collapsed"}</strong>
      .
      <Disclosure isExpanded={expanded} onExpandedChange={setExpanded}>
        <DisclosureTrigger>What is your return policy?</DisclosureTrigger>
        <DisclosurePanel>
          <p>
            You can return any item within 30 days of purchase, provided it is in its original
            condition with proof of purchase.
          </p>
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}
