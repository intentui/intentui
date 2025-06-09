"use client"

import { useState } from "react"

import { Textarea } from "@/components/ui/textarea"

export default function TextareaControlledDemo() {
  const [value, setValue] = useState("")
  return (
    <>
      <Textarea value={value} onChange={setValue} label="Address" className="mb-2" />
      <p className="mt-2">You have typed: {value ?? "-"}</p>
    </>
  )
}
