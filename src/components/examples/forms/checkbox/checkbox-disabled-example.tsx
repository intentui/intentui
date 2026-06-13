"use client"

import { Checkbox, CheckboxField } from "@/components/ui/checkbox"

export default function CheckboxDisabledDemo() {
  return (
    <CheckboxField name="n" isDisabled>
      <Checkbox>Enable notifications</Checkbox>
    </CheckboxField>
  )
}
