"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, XAxis } from "recharts"

const chartData = Array.from({ length: 24 }, (_, index) => {
  const date = new Date(new Date().getFullYear() - 1, index).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  })
  return {
    date,
    revenue: Math.floor(Math.random() * 500 + 300),
    cost: Math.floor(Math.random() * 300 + 150),
  }
})

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  cost: {
    label: "Cost",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function TooltipChartNoIndicatorDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-0"
        title="Monthly Revenue and Costs"
        description="Tracking revenue and costs over the last 24 months"
      />
      <Card.Content>
        <Chart config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <Bar dataKey="revenue" stackId="a" fill="var(--color-revenue)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="cost" stackId="a" fill="var(--color-cost)" radius={[4, 4, 0, 0]} />
            <ChartTooltip
              content={<ChartTooltipContent hideIndicator />}
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
