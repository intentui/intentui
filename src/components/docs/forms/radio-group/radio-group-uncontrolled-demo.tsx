"use client"

import { Label } from "@/components/ui/field"
import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupUncontrolledDemo() {
  return (
    <RadioGroup defaultValue="theme">
      <Label>Features</Label>
      <Radio value="language">Language</Radio>
      <Radio value="timezone">Timezone</Radio>
      <Radio value="notifications">Notifications</Radio>
      <Radio value="privacy">Privacy</Radio>
    </RadioGroup>
  )
}
