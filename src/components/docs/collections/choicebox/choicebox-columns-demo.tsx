"use client"

import { Choicebox } from "@/components/ui/choicebox"

export default function ChoiceboxColumnsDemo() {
  return (
    <div className="p-1">
      <Choicebox
        aria-label="Select prices"
        gap={2}
        columns={3}
        selectionMode="multiple"
        items={prices}
      >
        {(item) => <Choicebox.Item {...item} />}
      </Choicebox>
    </div>
  )
}

const prices = [
  { id: 1, label: "Basic", description: "Essentials, get started" },
  { id: 2, label: "Standard", description: "More features, support" },
  { id: 3, label: "Premium", description: "Advanced, growing needs" },
  { id: 4, label: "Deluxe", description: "Top-tier, maximum performance" },
  { id: 5, label: "Ultimate", description: "All-inclusive, every feature" },
  { id: 6, label: "Enterprise", description: "Custom, large-scale operations" },
]
