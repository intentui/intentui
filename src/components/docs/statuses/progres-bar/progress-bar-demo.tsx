"use client"

import React, { useState } from "react"

import { ProgressBar } from "@/components/ui/progress-bar"

export default function ProgressBarDemo() {
  const [value, setValue] = useState(1)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev < 100 ? prev + 1 : 100))
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return <ProgressBar label="Loading…" value={value} />
}
