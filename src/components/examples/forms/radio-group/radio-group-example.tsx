"use client"

import { Description, Label } from "@/components/ui/field"
import { Radio, RadioGroup, RadioLabel } from "@/components/ui/radio"

export default function RadioGroupDemo() {
  return (
    <RadioGroup name="billing">
      <Label>Billing Cycle</Label>
      <Description>Select how often you'd like to be billed</Description>

      <Radio value="monthly">
        <RadioLabel>Monthly</RadioLabel>
        <Description>Billed every month</Description>
      </Radio>
      <Radio value="quarterly">
        <RadioLabel>Quarterly</RadioLabel>
        <Description>Billed every 3 months</Description>
      </Radio>
      <Radio value="yearly">
        <RadioLabel>Yearly</RadioLabel>
        <Description>Billed once per year with a discount</Description>
      </Radio>
    </RadioGroup>
  )
}
