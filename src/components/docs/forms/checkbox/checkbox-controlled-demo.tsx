"use client"

import { useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { Description } from "@/components/ui/field"

export default function CheckboxControlledDemo() {
  const [selected, setSelection] = useState(false)
  return (
    <>
      <Checkbox isSelected={selected} onChange={setSelection} value="updates">
        Receive Updates
      </Checkbox>
      <Description className="mt-2 block [&>strong]:text-fg">
        You have <strong>{selected ? "enabled" : "disabled"}</strong> the option.
      </Description>
    </>
  )
}
