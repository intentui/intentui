"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Pie, PieChart } from "recharts"

const chartData = [
  { category: "Electronics", sales: 275, fill: "var(--color-electronics)" },
  { category: "Clothing", sales: 200, fill: "var(--color-clothing)" },
  { category: "Groceries", sales: 187, fill: "var(--color-groceries)" },
  { category: "Furniture", sales: 173, fill: "var(--color-furniture)" },
  { category: "Books", sales: 90, fill: "var(--color-books)" },
]

const chartConfig = {
  sales: {
    label: "Sales",
  },
  electronics: {
    label: "Electronics",
    color: "var(--chart-1)",
  },
  clothing: {
    label: "Clothing",
    color: "var(--chart-2)",
  },
  groceries: {
    label: "Groceries",
    color: "var(--chart-3)",
  },
  furniture: {
    label: "Furniture",
    color: "var(--chart-4)",
  },
  books: {
    label: "Books",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export default function PieChartLabelDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-0"
        title="Sales Allocation by Category"
        description="Jan - Jun 2024"
      />
      <Card.Content className="flex-1 pb-0">
        <Chart
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-fg"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="sales" label nameKey="category" />
          </PieChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
