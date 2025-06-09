"use client"

import React, { useState } from "react"

import { ProgressCircle } from "@/components/ui/progress-circle"

export default function ProgressCircleDemo() {
  const [value, setValue] = useState(1)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev < 100 ? prev + 1 : 100))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return <ProgressCircle aria-label="Loading…" value={value} />
}
