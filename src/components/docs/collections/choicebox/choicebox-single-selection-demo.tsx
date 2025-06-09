"use client"

import { Choicebox } from "@/components/ui/choicebox"

export default function ChoiceboxSingleSelectionDemo() {
  return (
    <Choicebox aria-label="Select packages" selectionMode="single" items={packages}>
      {(item) => <Choicebox.Item {...item} />}
    </Choicebox>
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
