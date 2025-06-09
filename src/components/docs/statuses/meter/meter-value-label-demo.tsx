"use client"

import { Meter } from "@/components/ui/meter"

export default function MeterValueLabelDemo() {
  return (
    <Meter
      formatOptions={{
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }}
      valueLabel="25GB of 100GB"
      label="Progress"
      value={25}
    />
  )
}
