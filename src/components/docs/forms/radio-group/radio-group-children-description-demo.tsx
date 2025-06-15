"use client"

import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupChildrenDescriptionDemo() {
  return (
    <RadioGroup>
      <Radio value="basic" label="Basic" description="Basic plan with limited features" />
      <Radio value="standard" label="Standard" description="Standard plan with more features" />
      <Radio value="premium" label="Premium" description="Premium plan with all features" />
      <Radio value="family" label="Family" description="Family plan for multiple users" />
      <Radio value="student" label="Student" description="Discounted plan for students" />
    </RadioGroup>
  )
}
