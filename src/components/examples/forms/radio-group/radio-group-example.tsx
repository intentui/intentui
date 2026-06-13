"use client"

import { Description, Label } from "@/components/ui/field"
import { Radio, RadioField, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupDemo() {
  return (
    <RadioGroup name="billing">
      <Label>Billing Cycle</Label>
      <Description>Select how often you'd like to be billed</Description>

      <RadioField value="monthly">
        <Radio>Monthly</Radio>
        <Description>Billed every month</Description>
      </RadioField>
      <RadioField value="quarterly">
        <Radio>Quarterly</Radio>
        <Description>Billed every 3 months</Description>
      </RadioField>
      <RadioField value="yearly">
        <Radio>Yearly</Radio>
        <Description>Billed once per year with a discount</Description>
      </RadioField>
    </RadioGroup>
  )
}
