"use client"

import { Checkbox } from "@/components/ui/checkbox"

export default function CheckboxDisabledDemo() {
  return (
    <Checkbox name="n" isDisabled>
      Enable notifications
    </Checkbox>
  )
}
