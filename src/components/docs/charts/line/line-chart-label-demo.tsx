"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

const chartData = [
  { month: "Jan", revenue: 186, expenses: 80 },
  { month: "Feb", revenue: 305, expenses: 200 },
  { month: "Mar", revenue: 237, expenses: 120 },
  { month: "Apr", revenue: 73, expenses: 190 },
  { month: "May", revenue: 209, expenses: 130 },
  { month: "Jun", revenue: 214, expenses: 140 },
  { month: "Jul", revenue: 260, expenses: 160 },
  { month: "Aug", revenue: 320, expenses: 180 },
  { month: "Sep", revenue: 280, expenses: 150 },
  { month: "Oct", revenue: 350, expenses: 200 },
  { month: "Nov", revenue: 400, expenses: 210 },
  { month: "Dec", revenue: 450, expenses: 230 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function LineChartLabelDemo() {
  return (
    <Card>
      <Card.Header title="Annual Revenue & Expenses Overview" description="Jan - Dec 2024" />
      <Card.Content>
        <Chart config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
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
            >
              <LabelList position="top" offset={12} className="fill-fg" fontSize={12} />
            </Line>
            <Line
              dataKey="expenses"
              type="natural"
              stroke="var(--color-expenses)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-expenses)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList position="top" offset={12} className="fill-fg" fontSize={12} />
            </Line>
          </LineChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
