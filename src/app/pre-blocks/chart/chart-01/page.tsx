"use client"

import { useMemo } from "react"
import { AreaChart } from "@/components/ui/area-chart"
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useIsMobile } from "@/hooks/use-mobile"

type EngagementPoint = {
  day: string
  likes: number
  comments: number
  shares: number
}

export default function Page() {
  const isMobile = useIsMobile()
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
    <div className="p-4 sm:p-16">
      <CardHeader className="mb-6">
        <CardTitle>Engagement last 7d</CardTitle>
        <CardDescription>
          Tracks likes, comments, and shares during the most recent 7-day period.
        </CardDescription>
      </CardHeader>
      <AreaChart
        containerHeight={isMobile ? 200 : 500}
        data={engagementData}
        dataKey="day"
        xAxisProps={{ interval: 0 }}
        config={{
          likes: { label: "Likes" },
          comments: { label: "Comments" },
          shares: { label: "Shares" },
        }}
      />
    </div>
  )
}
