"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, XAxis } from "recharts"

const chartData = [
  { date: "2024-07-15", sales: 450, profit: 300 },
  { date: "2024-07-16", sales: 380, profit: 420 },
  { date: "2024-07-17", sales: 520, profit: 120 },
  { date: "2024-07-18", sales: 140, profit: 550 },
  { date: "2024-07-19", sales: 600, profit: 350 },
  { date: "2024-07-20", sales: 480, profit: 400 },
]

const chartConfig = {
  metrics: {
    label: "Metrics",
  },
  sales: {
    label: "Sales",
    color: "var(--chart-1)",
  },
  profit: {
    label: "Profit",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function TooltipChartCustomLabelDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-0"
        title="Weekly Performance Metrics"
        description="Analyzing sales and profit trends for Jul 2024"
      />
      <Card.Content>
        <Chart config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  weekday: "short",
                })
              }}
            />
            <Bar dataKey="sales" stackId="a" fill="var(--color-sales)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="profit" stackId="a" fill="var(--color-profit)" radius={[4, 4, 0, 0]} />
            <ChartTooltip
              content={<ChartTooltipContent labelKey="metrics" indicator="line" />}
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
