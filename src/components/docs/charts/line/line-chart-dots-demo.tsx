"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

const chartData = [
  { month: "Jan", revenue: 186, profit: 80 },
  { month: "Feb", revenue: 305, profit: 200 },
  { month: "Mar", revenue: 237, profit: 120 },
  { month: "Apr", revenue: 73, profit: 190 },
  { month: "May", revenue: 209, profit: 130 },
  { month: "Jun", revenue: 214, profit: 140 },
  { month: "Jul", revenue: 240, profit: 160 },
  { month: "Aug", revenue: 250, profit: 170 },
  { month: "Sep", revenue: 260, profit: 180 },
  { month: "Oct", revenue: 275, profit: 190 },
  { month: "Nov", revenue: 290, profit: 200 },
  { month: "Dec", revenue: 300, profit: 220 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  profit: {
    label: "Profit",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function LineChartDotsDemo() {
  return (
    <Card>
      <Card.Header title="Monthly Revenue and Profit" description="Jan - Dec 2024" />
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
              dot={{
                fill: "var(--color-revenue)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
