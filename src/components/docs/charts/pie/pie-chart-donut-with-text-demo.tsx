"use client"

import { useMemo } from "react"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Label, Pie, PieChart } from "recharts"

const chartData = [
  { category: "Electronics", sales: 275, fill: "var(--color-electronics)" },
  { category: "Clothing", sales: 200, fill: "var(--color-clothing)" },
  { category: "Groceries", sales: 287, fill: "var(--color-groceries)" },
  { category: "Furniture", sales: 173, fill: "var(--color-furniture)" },
  { category: "Books", sales: 190, fill: "var(--color-books)" },
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

export default function PieChartDonutWithTextDemo() {
  const totalSales = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.sales, 0)
  }, [])

  return (
    <Card>
      <Card.Header className="text-center">
        <Card.Title>Sales Allocation by Category</Card.Title>
        <Card.Description>Jan - Jun 2024</Card.Description>
      </Card.Header>
      <Card.Content className="flex-1 pb-0">
        <Chart config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="sales"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-fg font-bold text-3xl">
                          {totalSales.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-fg">
                          Sales
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
