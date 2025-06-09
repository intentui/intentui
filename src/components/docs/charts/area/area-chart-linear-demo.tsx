"use client"

import { Card } from "@/components/ui/card"
import { Chart, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

const visitorData = Array.from({ length: 24 }, (_, index) => {
  const date = new Date(new Date().getFullYear() - 1, index)
  const month = date.toLocaleDateString("en-US", { month: "long" })
  return {
    month,
    uniqueVisitors: Math.floor(Math.random() * 500 + 1000),
  }
})

const visitorConfig = {
  uniqueVisitors: {
    label: "Unique Visitors",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function AreaChartLinearDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-0"
        title="Visitor Insights"
        description="Monthly unique visitors over the last 24 months"
      />
      <Card.Content>
        <Chart config={visitorConfig}>
          <AreaChart
            accessibilityLayer
            data={visitorData}
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
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="uniqueVisitors"
              type="linear"
              fill="var(--color-uniqueVisitors)"
              fillOpacity={0.4}
              stroke="var(--color-uniqueVisitors)"
            />
          </AreaChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
