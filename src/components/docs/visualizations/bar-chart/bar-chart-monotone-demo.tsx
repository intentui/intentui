"use client"

import { useMemo } from "react"
import { BarChart } from "@/components/ui/bar-chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BarChartMonotoneDemo() {
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
      <CardHeader>
        <CardTitle>Traffic last 14d</CardTitle>
        <CardDescription>Daily visits versus sign-ups trend.</CardDescription>
      </CardHeader>
      <CardContent>
        <BarChart
          className="aspect-video h-56 min-h-[224px] sm:h-72 sm:min-h-[288px]"
          data={data}
          dataKey="day"
          barProps={{
            type: "monotone",
          }}
          xAxisProps={{ interval: 0 }}
          config={{
            visits: { label: "Visits" },
            signups: { label: "Sign-ups" },
          }}
        />
      </CardContent>
    </Card>
  )
}
