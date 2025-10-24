"use client"

import { useState } from "react"

import { Description, Label } from "@/components/ui/field"
import { NumberField, NumberInput } from "@/components/ui/number-field"

export default function NumberFieldControlledDemo() {
  const [number, setNumber] = useState(1280)
  return (
    <div>
      <NumberField value={number} onChange={setNumber}>
        <Label>Width</Label>
        <NumberInput />
      </NumberField>

      <Description className="mt-2 block [&>strong]:text-fg">
        You have typed: <strong>{number ?? "-"}</strong>
      </Description>
    </div>
  )
}
