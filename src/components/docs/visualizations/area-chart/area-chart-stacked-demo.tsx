"use client"

import { useMemo } from "react"
import { AreaChart } from "@/components/ui/area-chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useIsMobile } from "@/hooks/use-mobile"

export default function AreaChartStackedDemo() {
  const isMobile = useIsMobile()
  const data = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        day: `Day ${i + 1}`,
        likes: Math.floor(100 + Math.random() * 300),
        comments: Math.floor(20 + Math.random() * 80),
        shares: Math.floor(10 + Math.random() * 50),
      })),
    [],
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Engagement last 7d</CardTitle>
        <CardDescription>
          Tracks likes, comments, and shares during the most recent 7-day period.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AreaChart
          containerHeight={isMobile ? 200 : 300}
          data={data}
          dataKey="day"
          type="stacked"
          areaProps={{
            type: "natural",
          }}
          xAxisProps={{ interval: 0 }}
          config={{
            likes: { label: "Likes" },
            comments: { label: "Comments" },
            shares: { label: "Shares" },
          }}
        />
      </CardContent>
    </Card>
  )
}
