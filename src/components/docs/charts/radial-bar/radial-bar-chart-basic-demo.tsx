"use client"

import { Card } from "@/components/ui/card"
import { Chart, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import { RadialBar, RadialBarChart } from "recharts"

const chartData = [
  { category: "Electronics", sales: 320, fill: "var(--color-electronics)" },
  { category: "Furniture", sales: 250, fill: "var(--color-furniture)" },
  { category: "Clothing", sales: 200, fill: "var(--color-clothing)" },
  { category: "Sports", sales: 180, fill: "var(--color-sports)" },
  { category: "Books", sales: 100, fill: "var(--color-books)" },
]

const chartConfig = {
  sales: {
    label: "Sales",
  },
  electronics: {
    label: "Electronics",
    color: "var(--chart-1)",
  },
  furniture: {
    label: "Furniture",
    color: "var(--chart-2)",
  },
  clothing: {
    label: "Clothing",
    color: "var(--chart-3)",
  },
  sports: {
    label: "Sports",
    color: "var(--chart-4)",
  },
  books: {
    label: "Books",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export default function RadialBarChartBasicDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-0 text-center"
        title="Category Sales Overview"
        description="Visualizing sales distribution across categories for the year 2024"
      />
      <Card.Content className="flex-1 pb-0">
        <Chart config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="category" />}
            />
            <RadialBar dataKey="sales" background />
          </RadialBarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
