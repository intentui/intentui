"use client"

import { useState } from "react"

import { Time } from "@internationalized/date"

import { TimeField } from "@/components/ui/time-field"

export default function TimeFieldControlledDemo() {
  const [value, setValue] = useState(new Time(11, 45))
  return (
    <div className="space-y-3">
      <div className="[&_p]:py-2">
        <p>{value ? value.toString() : "--"}</p>
      </div>
      <TimeField label="Event time" value={value} onChange={(newValue) => setValue(newValue!)} />
    </div>
  )
}
