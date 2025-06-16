"use client"

import { Choicebox } from "@/components/ui/choicebox"

export default function ChoiceboxDemo() {
  return (
    <Choicebox aria-label="Select items" selectionMode="multiple">
      <Choicebox.Item
        textValue="premium"
        label="Premium"
        description="Advanced options for growing needs."
      />
      <Choicebox.Item
        textValue="deluxe"
        label="Deluxe"
        description="Top-tier features for maximum performance."
      />
      <Choicebox.Item
        textValue="ultimate"
        label="Ultimate"
        description="All-inclusive plan with every feature available."
      />
      <Choicebox.Item
        textValue="enterprise"
        label="Enterprise"
        description="Custom solutions for large-scale operations."
      />
    </Choicebox>
  )
}
