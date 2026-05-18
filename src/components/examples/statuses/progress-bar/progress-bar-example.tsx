"use client"

import { useEffect, useState } from "react"
import { Description, Label } from "@/components/ui/field"
import {
  ProgressBar,
  ProgressBarHeader,
  ProgressBarTrack,
  ProgressBarValue,
} from "@/components/ui/progress-bar"

export default function ProgressBarDemo() {
  const [value, setValue] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev < 100 ? prev + 1 : 100))
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <ProgressBar value={value}>
      <ProgressBarHeader>
        <Label>Loading…</Label>
        <ProgressBarValue />
      </ProgressBarHeader>
      <ProgressBarTrack />
      <Description>This is an example of a progress bar indicating 50% completion.</Description>
    </ProgressBar>
  )
}
