"use client"

import { ChoiceBox, ChoiceBoxItem } from "@/components/ui/choice-box"

export default function ChoiceboxMultipleSelectionDemo() {
  return (
    <ChoiceBox aria-label="Select packages" selectionMode="multiple" items={packages}>
      {(item) => <ChoiceBoxItem textValue={item.label} {...item} />}
    </ChoiceBox>
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
]
