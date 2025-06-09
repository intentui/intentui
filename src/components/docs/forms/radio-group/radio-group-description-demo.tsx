"use client"

import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupDescriptionDemo() {
  return (
    <RadioGroup
      description="Select your preferred shipping method for the delivery of your items."
      label="Shipping Method"
    >
      <Radio value="standard">Standard</Radio>
      <Radio value="express">Express</Radio>
      <Radio value="overnight">Overnight</Radio>
      <Radio value="international">International</Radio>
      <Radio value="pickup">Pickup</Radio>
    </RadioGroup>
  )
}
