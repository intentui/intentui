"use client"

import { useState } from "react"

import { Description } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaControlledDemo() {
  const [value, setValue] = useState("")
  return (
    <div>
      <Textarea value={value} onChange={setValue} label="Address" />
      <Description className="mt-2 block">
        You have typed: <strong className="text-fg">{value ?? "-"}</strong>
      </Description>
    </div>
  )
}
