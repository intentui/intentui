"use client"

import { Card } from "@/components/ui/card"
import { Chart, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

const engagementData = Array.from({ length: 24 }, (_, index) => {
  const date = new Date(new Date().getFullYear() - 1, index)
  const month = date.toLocaleDateString("en-US", { month: "long" })
  return {
    month,
    likes: Math.floor(Math.random() * 50 + 100),
    comments: Math.floor(Math.random() * 30 + 40),
  }
})

const engagementConfig = {
  likes: {
    label: "Likes",
    color: "var(--chart-1)",
  },
  comments: {
    label: "Comments",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function AreaChartStackedDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-0"
        title="Audience Engagement Analysis"
        description="Tracking monthly likes and comments over the last 24 months"
      />
      <Card.Content>
        <Chart config={engagementConfig}>
          <AreaChart
            accessibilityLayer
            data={engagementData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
            <Area
              dataKey="comments"
              type="natural"
              fill="var(--color-comments)"
              fillOpacity={0.4}
              stroke="var(--color-comments)"
              stackId="a"
            />
            <Area
              dataKey="likes"
              type="natural"
              fill="var(--color-likes)"
              fillOpacity={0.4}
              stroke="var(--color-likes)"
              stackId="a"
            />
          </AreaChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
