"use client"

import { Label } from "@/components/ui/field"
import { Meter, MeterHeader, MeterTrack, MeterValue } from "@/components/ui/meter"

export default function MeterDecimalFormatDemo() {
  return (
    <Meter
      formatOptions={{
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }}
      value={75.25}
    >
      <MeterHeader>
        <Label>Progress</Label>
        <MeterValue />
      </MeterHeader>
      <MeterTrack />
    </Meter>
  )
}
