"use client"

import { Time } from "@internationalized/date"
import { useState } from "react"
import { DateInput } from "@/components/ui/date-field"
import { Label } from "@/components/ui/field"
import { TimeField } from "@/components/ui/time-field"

export default function TimeFieldControlledDemo() {
  const [value, setValue] = useState(new Time(11, 45))
  return (
    <div className="space-y-3">
      <div className="[&_p]:py-2">
        <p>{value ? value.toString() : "--"}</p>
      </div>
      <TimeField value={value} onChange={(newValue) => setValue(newValue!)}>
        <Label>Event time</Label>
        <DateInput />
      </TimeField>
    </div>
  )
}
