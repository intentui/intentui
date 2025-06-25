"use client"

import { BarChart } from "@/components/ui/bar-chart"
import { Card } from "@/components/ui/card"
import { useMemo } from "react"

type EngagementPoint = {
  day: string
  likes: number
  comments: number
  shares: number
}

export default function BarChartCustomColorsDemo() {
  const engagementData: EngagementPoint[] = useMemo(
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
      <Card.Header>
        <Card.Title>Engagement last 7d</Card.Title>
        <Card.Description>
          Tracks likes, comments, and shares during the most recent 7-day period.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <BarChart
          className="aspect-video h-56 sm:h-72"
          data={engagementData}
          dataKey="day"
          xAxisProps={{ interval: 0 }}
          config={{
            likes: { label: "Likes", color: "var(--color-pink-500)" },
            comments: { label: "Comments", color: "var(--color-blue-500)" },
            shares: { label: "Shares", color: "var(--color-emerald-500)" },
          }}
        />
      </Card.Content>
    </Card>
  )
}
