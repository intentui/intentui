"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

const chartData = [
  { month: "Jan", revenue: 1500 },
  { month: "Feb", revenue: 3200 },
  { month: "Mar", revenue: 2900 },
  { month: "Apr", revenue: 2100 },
  { month: "May", revenue: 4000 },
  { month: "Jun", revenue: 3700 },
  { month: "Jul", revenue: 4300 },
  { month: "Aug", revenue: 4900 },
  { month: "Sep", revenue: 4700 },
  { month: "Oct", revenue: 5200 },
  { month: "Nov", revenue: 6000 },
  { month: "Dec", revenue: 7200 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function LineChartBasicDemo() {
  return (
    <Card>
      <Card.Header title="Monthly Revenue Overview" description="Jan - Dec 2024" />
      <Card.Content>
        <Chart config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line
              dataKey="revenue"
              type="natural"
              stroke="var(--color-revenue)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
