'use client'

import { Label } from '@/components/ui/field'
import { Radio, RadioField, RadioGroup } from '@/components/ui/radio'

export default function RadioGroupDisabledDemo() {
  return (
    <RadioGroup name="features" isDisabled>
      <Label>Features</Label>
      <RadioField value="fs">
        <Radio>Font size: Small, Medium, Large</Radio>
      </RadioField>
      <RadioField value="dr">
        <Radio>Display resolution: 1080p, 1440p, 4K</Radio>
      </RadioField>
      <RadioField value="ss">
        <Radio>Sound settings: Mute, Low, Medium, High</Radio>
      </RadioField>
      <RadioField value="bi">
        <Radio>Background image: Default, Custom</Radio>
      </RadioField>
      <RadioField value="ks">
        <Radio>Keyboard shortcuts: Enabled, Disabled</Radio>
      </RadioField>
    </RadioGroup>
  )
}
