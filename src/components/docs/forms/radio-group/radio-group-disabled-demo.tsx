"use client"

import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupDisabledDemo() {
  return (
    <RadioGroup isDisabled label="Features">
      <Radio value="fs">Font size: Small, Medium, Large</Radio>
      <Radio value="dr">Display resolution: 1080p, 1440p, 4K</Radio>
      <Radio value="ss">Sound settings: Mute, Low, Medium, High</Radio>
      <Radio value="bi">Background image: Default, Custom</Radio>
      <Radio value="ks">Keyboard shortcuts: Enabled, Disabled</Radio>
    </RadioGroup>
  )
}
