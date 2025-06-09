"use client"

import { Card } from "@/components/ui/card"
import { Chart, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import { PolarGrid, RadialBar, RadialBarChart } from "recharts"

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

export default function RadialBarChartGridDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-0 text-center"
        title="Category Sales Overview"
        description="Visualizing sales distribution across categories for Jan - Dec 2024"
      />
      <Card.Content>
        <Chart config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <RadialBarChart data={chartData} innerRadius={30} outerRadius={100}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="category" />}
            />
            <PolarGrid gridType="circle" />
            <RadialBar dataKey="sales" />
          </RadialBarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
