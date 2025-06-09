"use client"

import { useState } from "react"

import { Description } from "@/components/ui/field"
import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupControlledDemo() {
  const [selected, setSelected] = useState("")
  return (
    <>
      <RadioGroup label="Features" value={selected} onChange={setSelected}>
        <Radio value="theme">Theme</Radio>
        <Radio value="language">Language</Radio>
        <Radio value="timezone">Timezone</Radio>
        <Radio value="notifications">Notifications</Radio>
        <Radio value="privacy">Privacy</Radio>
      </RadioGroup>
      <Description className="mt-2 block [&>strong]:text-fg">
        You have selected: <strong>{selected ?? "-"}</strong>
      </Description>
    </>
  )
}
