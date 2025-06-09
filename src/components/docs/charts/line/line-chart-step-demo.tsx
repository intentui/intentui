"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

const chartData = Array.from({ length: 12 }, (_, index) => {
  const date = new Date(2024, index)
  const month = date.toLocaleDateString("en-US", { month: "short" })
  return {
    month,
    sales: Math.floor(Math.random() * 300 + 150),
  }
})

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function LineChartStepDemo() {
  return (
    <Card>
      <Card.Header title="Monthly Sales Overview" description="Jan - Dec 2024" />
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
              dataKey="sales"
              type="step"
              stroke="var(--color-sales)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
