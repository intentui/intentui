"use client"

import { Meter } from "@/components/ui/meter"

export default function MeterDecimalFormatDemo() {
  return (
    <Meter
      formatOptions={{
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }}
      label="Progress"
      value={75.25}
    />
  )
}
