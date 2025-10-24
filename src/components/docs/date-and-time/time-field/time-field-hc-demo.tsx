"use client"

import { Time } from "@internationalized/date"
import { useState } from "react"
import { DateInput } from "@/components/ui/date-field"
import { Label } from "@/components/ui/field"
import { Switch, SwitchLabel } from "@/components/ui/switch"
import { TimeField } from "@/components/ui/time-field"

export default function TimeFieldHcDemo() {
  const [hc, setHc] = useState<12 | 24>(24)
  const [value, setValue] = useState(new Time(13, 45))
  return (
    <div className="flex flex-col gap-y-6">
      <Switch isSelected={hc === 24} onChange={() => setHc((prevHc) => (prevHc === 24 ? 12 : 24))}>
        <SwitchLabel>{hc} hour</SwitchLabel>
      </Switch>
      <TimeField value={value} onChange={(newValue) => setValue(newValue!)} hourCycle={hc}>
        <Label>Event time</Label>
        <DateInput />
      </TimeField>
    </div>
  )
}
