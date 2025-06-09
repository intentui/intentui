"use client"

import { useState } from "react"

import { Description } from "@/components/ui/field"
import { TextField } from "@/components/ui/text-field"

export default function TextFieldControlledDemo() {
  const [value, setValue] = useState("")
  return (
    <>
      <TextField value={value} onChange={setValue} label="Name" className="mb-2" />
      <Description className="mt-2 block [&>strong]:text-fg">
        You have typed: <strong>{value ?? "-"}</strong>
      </Description>
    </>
  )
}
