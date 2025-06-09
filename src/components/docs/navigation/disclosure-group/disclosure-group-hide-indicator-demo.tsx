"use client"

import {
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  DisclosureTrigger,
} from "@/components/ui/disclosure"

export default function DisclosureGroupHideIndicatorDemo() {
  return (
    <DisclosureGroup className="**:data-[slot=disclosure-chevron]:hidden">
      {faqs.map((item, index) => (
        <Disclosure key={index} id={index}>
          <DisclosureTrigger>{item.q}</DisclosureTrigger>
          <DisclosurePanel>{item.a}</DisclosurePanel>
        </Disclosure>
      ))}
    </DisclosureGroup>
  )
}

const faqs = [
  {
    q: "What payment methods are accepted?",
    a: "We accept all major credit cards, PayPal, and Apple Pay.",
  },
  {
    q: "How long does shipping take?",
    a: "Shipping times vary by location but typically take between 3-7 business days.",
  },
  {
    q: "Can I track my order?",
    a: "Yes, you can track your order using the tracking link provided in your shipping confirmation email.",
  },
]
