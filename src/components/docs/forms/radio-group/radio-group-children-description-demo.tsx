"use client"

import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupChildrenDescriptionDemo() {
  return (
    <RadioGroup>
      <Radio value="basic" description="Basic plan with limited features">
        Basic
      </Radio>
      <Radio value="standard" description="Standard plan with more features">
        Standard
      </Radio>
      <Radio value="premium" description="Premium plan with all features">
        Premium
      </Radio>
      <Radio value="family" description="Family plan for multiple users">
        Family
      </Radio>
      <Radio value="student" description="Discounted plan for students">
        Student
      </Radio>
      <Radio value="custom">Custom</Radio>
    </RadioGroup>
  )
}
