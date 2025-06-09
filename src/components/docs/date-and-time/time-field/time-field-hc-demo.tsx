"use client"

import { useState } from "react"

import { OptionPreview } from "@/components/docs/outside/option-preview"
import { Switch } from "@/components/ui/switch"
import { TimeField } from "@/components/ui/time-field"
import { Time } from "@internationalized/date"

export default function TimeFieldHcDemo() {
  const [hc, setHc] = useState<12 | 24>(24)
  const [value, setValue] = useState(new Time(13, 45))
  return (
    <>
      <OptionPreview>
        <Switch
          isSelected={hc === 24}
          onChange={() => setHc((prevHc) => (prevHc === 24 ? 12 : 24))}
        >
          {hc} hour
        </Switch>
      </OptionPreview>
      <TimeField
        value={value}
        onChange={(newValue) => setValue(newValue!)}
        hourCycle={hc}
        label="Event time"
      />
    </>
  )
}
