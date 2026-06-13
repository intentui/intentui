"use client"

import { Checkbox, CheckboxField } from "@/components/ui/checkbox"

export default function CheckboxUncontrolledDemo() {
  return (
    <CheckboxField defaultSelected value="updates" name="ru">
      <Checkbox>Receive Updates</Checkbox>
    </CheckboxField>
  )
}
