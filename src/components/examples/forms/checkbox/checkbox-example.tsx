'use client'

import { Checkbox, CheckboxField } from '@/components/ui/checkbox'

export default function CheckboxExample() {
  return (
    <CheckboxField name="n">
      <Checkbox>Enable notifications</Checkbox>
    </CheckboxField>
  )
}
