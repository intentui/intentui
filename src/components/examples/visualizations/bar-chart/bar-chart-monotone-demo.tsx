"use client"

import { useMemo } from "react"
import { BarChart } from "@/components/ui/bar-chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useIsMobile } from "@/hooks/use-mobile"

export default function BarChartMonotoneDemo() {
  const isMobile = useIsMobile()
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
          containerHeight={isMobile ? 200 : 300}
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
