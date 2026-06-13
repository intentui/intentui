"use client"

import { useState } from "react"

import { Description, Label } from "@/components/ui/field"
import { Radio, RadioField, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupControlledDemo() {
  const [selected, setSelected] = useState("")
  return (
    <>
      <RadioGroup name="features" value={selected} onChange={setSelected}>
        <Label>Features</Label>
        <RadioField value="theme">
          <Radio>Theme</Radio>
        </RadioField>
        <RadioField value="language">
          <Radio>Language</Radio>
        </RadioField>
        <RadioField value="timezone">
          <Radio>Timezone</Radio>
        </RadioField>
        <RadioField value="notifications">
          <Radio>Notifications</Radio>
        </RadioField>
        <RadioField value="privacy">
          <Radio>Privacy</Radio>
        </RadioField>
      </RadioGroup>
      <Description className="mt-2 block [&>strong]:text-fg">
        You have selected: <strong>{selected ?? "-"}</strong>
      </Description>
    </>
  )
}
