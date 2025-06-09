"use client"

import {
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  DisclosureTrigger,
} from "@/components/ui/disclosure"
import {
  IconBell,
  IconCreditCard,
  IconDownload,
  IconSettings,
  IconShield,
  IconSupport,
} from "@intentui/icons"

export default function DisclosureGroupBorderHiddenDemo() {
  return (
    <DisclosureGroup>
      {items.map((item, index) => (
        <Disclosure className="border-b-0" key={index} id={index}>
          <DisclosureTrigger className="py-1.5">{item.title}</DisclosureTrigger>
          <DisclosurePanel>{item.description}</DisclosurePanel>
        </Disclosure>
      ))}
    </DisclosureGroup>
  )
}

const items = [
  {
    icon: <IconSettings />,
    title: "Personal Settings",
    description:
      "You can update your profile, change your password, and manage your account settings here.",
  },
  {
    icon: <IconBell />,
    title: "Notifications",
    description:
      "Manage your notifications preferences, including alerts, emails, and push notifications.",
  },
  {
    icon: <IconShield />,
    title: "Privacy Options",
    description:
      "Adjust your privacy settings to control who can see your information and contact you.",
  },
  {
    icon: <IconCreditCard />,
    title: "Payment Methods",
    description:
      "Add, remove, or update your payment methods including credit cards and digital wallets.",
  },
  {
    icon: <IconSupport />,
    title: "Support Center",
    description: "Find help with common issues, or contact support for further assistance.",
  },
  {
    icon: <IconDownload />,
    title: "Download Data",
    description:
      "Request a download of all your data we have stored, including account activity and user data.",
  },
]
