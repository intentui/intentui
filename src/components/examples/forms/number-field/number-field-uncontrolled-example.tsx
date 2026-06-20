'use client'

import { Label } from '@/components/ui/field'
import { NumberField, NumberInput } from '@/components/ui/number-field'

export default function NumberFieldUncontrolledDemo() {
  return (
    <NumberField defaultValue={302} name="width">
      <Label>Width</Label>
      <NumberInput />
    </NumberField>
  )
}
