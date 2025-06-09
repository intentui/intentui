"use client"

import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupUncontrolledDemo() {
  return (
    <RadioGroup label="Features" defaultValue="theme">
      <Radio value="language">Language</Radio>
      <Radio value="timezone">Timezone</Radio>
      <Radio value="notifications">Notifications</Radio>
      <Radio value="privacy">Privacy</Radio>
    </RadioGroup>
  )
}
