"use client"

import { useState } from "react"

import { Choicebox } from "@/components/ui/choicebox"
import { Description } from "@/components/ui/field"
import type { Selection } from "react-aria-components"

export default function ChoiceboxControlledDemo() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([packages[0].id]))
  return (
    <>
      <Choicebox
        aria-label="Select packages"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        items={packages}
      >
        {(item) => <Choicebox.Item {...item} />}
      </Choicebox>

      <Description className="mt-2 block text-muted-fg [&>strong]:text-fg">
        You have selected: <strong>{Array.from(selectedKeys).join(", ")}</strong>
      </Description>
    </>
  )
}

const packages = [
  {
    id: "sm",
    label: "Small",
    description: "Perfect for beginners. Basic resources for light projects.",
  },
  {
    id: "md",
    label: "Medium",
    description: "Great for growing sites. More power and storage.",
  },
  {
    id: "lg",
    label: "Large",
    description: "Ideal for busy sites. Lots of resources and support.",
  },
  {
    id: "xl",
    label: "Extra Large",
    description: "Max power for demanding applications. Top-tier performance.",
  },
] as const
