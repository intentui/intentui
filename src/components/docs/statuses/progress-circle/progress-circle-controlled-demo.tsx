"use client"

import { useState } from "react"

import { ProgressCircle } from "@/components/ui/progress-circle"
import { Slider } from "@/components/ui/slider"

export default function ProgressCircleControlledDemo() {
  const [value, setValue] = useState(10)

  return (
    <div className="flex min-w-56 flex-col items-center gap-y-6">
      <ProgressCircle className="size-10" value={value} />
      <Slider label="Track" value={value} onChange={(v) => setValue(v as number)} />
    </div>
  )
}
