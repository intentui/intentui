"use client"

import { Checkbox } from "@/components/ui/checkbox"

export default function CheckboxIndeterminateDemo() {
  return (
    <Checkbox value="read" isIndeterminate name="read">
      Read
    </Checkbox>
  )
}
