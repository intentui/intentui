"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { IconShippingBag, IconStrikeThrough } from "@intentui/icons"
import { Bar, BarChart, XAxis } from "recharts"

const chartData = Array.from({ length: 24 }, (_, index) => {
  const date = new Date(new Date().getFullYear() - 1, index).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  })
  return {
    date,
    sales: Math.floor(Math.random() * 500 + 100),
    expenses: Math.floor(Math.random() * 300 + 50),
  }
})

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-1)",
    icon: IconShippingBag,
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-2)",
    icon: IconStrikeThrough,
  },
} satisfies ChartConfig

export default function TooltipChartIconsDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-0"
        title="Monthly Financial Overview"
        description="Sales and expenses for the past 24 months"
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
            <Bar dataKey="sales" stackId="a" fill="var(--color-sales)" radius={[0, 0, 4, 4]} />
            <Bar
              dataKey="expenses"
              stackId="a"
              fill="var(--color-expenses)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={<ChartTooltipContent hideLabel />}
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
