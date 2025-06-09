"use client"

import { Choicebox } from "@/components/ui/choicebox"

export default function ChoiceboxDemo() {
  return (
    <Choicebox aria-label="Select items" selectionMode="multiple">
      <Choicebox.Item label="Basic" description="Just the essentials to get started." />
      <Choicebox.Item label="Standard" description="A step up with more features and support." />
      <Choicebox.Item label="Premium" description="Advanced options for growing needs." />
      <Choicebox.Item label="Deluxe" description="Top-tier features for maximum performance." />
      <Choicebox.Item
        label="Ultimate"
        description="All-inclusive plan with every feature available."
      />
      <Choicebox.Item
        label="Enterprise"
        description="Custom solutions for large-scale operations."
      />
    </Choicebox>
  )
}
