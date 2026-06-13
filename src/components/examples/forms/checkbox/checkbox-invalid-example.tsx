"use client"

import { Checkbox, CheckboxField } from "@/components/ui/checkbox"

export default function CheckboxInvalidDemo() {
  return (
    <CheckboxField isInvalid name="n">
      <Checkbox>
        Enable notifications
      </Checkbox>
    </CheckboxField>
  )
}
