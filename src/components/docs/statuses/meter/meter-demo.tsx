"use client"

import React, { useState } from "react"

import { Meter } from "@/components/ui/meter"

export default function MeterDemo() {
  const [value, setValue] = useState(1)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev < 100 ? prev + 1 : 100))
    }, 50)

    return () => clearInterval(interval)
  }, [])
  return <Meter label="Storage space" value={value} />
}
