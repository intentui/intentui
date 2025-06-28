"use client"

import { useMemo } from "react"
import { AreaChart } from "@/components/ui/area-chart"
import { Card } from "@/components/ui/card"

export default function AreaChartMonotoneDemo() {
  const data = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        day: `Day ${i + 1}`,
        visits: Math.floor(500 + Math.random() * 400),
        signups: Math.floor(50 + Math.random() * 80),
      })),
    [],
  )

  return (
    <Card>
      <Card.Header>
        <Card.Title>Traffic last 14d</Card.Title>
        <Card.Description>Daily visits versus sign-ups trend.</Card.Description>
      </Card.Header>
      <Card.Content>
        <AreaChart
          className="aspect-video h-56 sm:h-72"
          data={data}
          dataKey="day"
          lineType="monotone"
          fillType="solid"
          xAxisProps={{ interval: 0 }}
          config={{
            visits: { label: "Visits" },
            signups: { label: "Sign-ups" },
          }}
        />
      </Card.Content>
    </Card>
  )
}
