"use client"

import {
  ArrowDownTrayIcon,
  BellIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline"
import {
  DisclosureItem as Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  DisclosureTrigger,
} from "@/components/ui/disclosure-group"

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
    icon: <Cog6ToothIcon />,
    title: "Personal Settings",
    description:
      "You can update your profile, change your password, and manage your account settings here.",
  },
  {
    icon: <BellIcon />,
    title: "Notifications",
    description:
      "Manage your notifications preferences, including alerts, emails, and push notifications.",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Privacy Options",
    description:
      "Adjust your privacy settings to control who can see your information and contact you.",
  },
  {
    icon: <CreditCardIcon />,
    title: "Payment Methods",
    description:
      "Add, remove, or update your payment methods including credit cards and digital wallets.",
  },
  {
    icon: <LifebuoyIcon />,
    title: "Support Center",
    description: "Find help with common issues, or contact support for further assistance.",
  },
  {
    icon: <ArrowDownTrayIcon />,
    title: "Download Data",
    description:
      "Request a download of all your data we have stored, including account activity and user data.",
  },
]
