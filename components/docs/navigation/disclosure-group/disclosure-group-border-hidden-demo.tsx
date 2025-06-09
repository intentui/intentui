"use client"

import React from "react"

import {
  IconBell,
  IconCreditCard,
  IconDownload,
  IconSettings,
  IconShield,
  IconSupport
} from "@intentui/icons"
import { Disclosure, DisclosureGroup } from "ui"

export default function DisclosureGroupBorderHiddenDemo() {
  return (
    <DisclosureGroup hideBorder>
      {items.map((item, index) => (
        <Disclosure key={index} id={index}>
          <Disclosure.Trigger>{item.title}</Disclosure.Trigger>
          <Disclosure.Panel>{item.description}</Disclosure.Panel>
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
      "You can update your profile, change your password, and manage your account settings here."
  },
  {
    icon: <IconBell />,
    title: "Notifications",
    description:
      "Manage your notifications preferences, including alerts, emails, and push notifications."
  },
  {
    icon: <IconShield />,
    title: "Privacy Options",
    description:
      "Adjust your privacy settings to control who can see your information and contact you."
  },
  {
    icon: <IconCreditCard />,
    title: "Payment Methods",
    description:
      "Add, remove, or update your payment methods including credit cards and digital wallets."
  },
  {
    icon: <IconSupport />,
    title: "Support Center",
    description: "Find help with common issues, or contact support for further assistance."
  },
  {
    icon: <IconDownload />,
    title: "Download Data",
    description:
      "Request a download of all your data we have stored, including account activity and user data."
  }
]
