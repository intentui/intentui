"use client"

import {
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  DisclosureTrigger,
} from "@/components/ui/disclosure"

export default function DisclosureGroupAllowMultipleExpandDemo() {
  return (
    <DisclosureGroup allowsMultipleExpanded defaultExpandedKeys={[1, 2]}>
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
    q: "How do I reset my password?",
    a: "You can reset your password by going to the settings page and clicking on 'Reset Password'.",
  },
  {
    q: "Can I change my subscription plan?",
    a: "Yes, you can upgrade or downgrade your subscription plan at any time from your account settings.",
  },
  {
    q: "Where can I view my past orders?",
    a: "Your past orders can be viewed in the 'Orders' section of your account dashboard.",
  },
  {
    q: "What is the return policy?",
    a: "Our return policy allows you to return products within 30 days of purchase for a full refund or exchange.",
  },
  {
    q: "How do I contact customer support?",
    a: "You can contact customer support via email at support@example.com or through our online chat system.",
  },
]
