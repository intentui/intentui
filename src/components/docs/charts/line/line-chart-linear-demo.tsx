"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

const chartData = [
  { month: "Jan", revenue: 186 },
  { month: "Feb", revenue: 305 },
  { month: "Mar", revenue: 237 },
  { month: "Apr", revenue: 73 },
  { month: "May", revenue: 209 },
  { month: "Jun", revenue: 214 },
  { month: "Jul", revenue: 250 },
  { month: "Aug", revenue: 320 },
  { month: "Sep", revenue: 280 },
  { month: "Oct", revenue: 350 },
  { month: "Nov", revenue: 400 },
  { month: "Dec", revenue: 450 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function LineChartLinearDemo() {
  return (
    <Card>
      <Card.Header title="Annual Revenue Overview" description="Jan - Dec 2024" />
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
              type="linear"
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
