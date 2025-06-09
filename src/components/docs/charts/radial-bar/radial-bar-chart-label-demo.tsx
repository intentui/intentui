"use client"

import { Card } from "@/components/ui/card"
import { Chart, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import { LabelList, RadialBar, RadialBarChart } from "recharts"

const chartData = [
  { category: "Apples", quantity: 320, fill: "var(--color-apples)" },
  { category: "Oranges", quantity: 250, fill: "var(--color-oranges)" },
  { category: "Bananas", quantity: 200, fill: "var(--color-bananas)" },
  { category: "Grapes", quantity: 180, fill: "var(--color-grapes)" },
  { category: "Berries", quantity: 100, fill: "var(--color-berries)" },
]

const chartConfig = {
  quantity: {
    label: "Quantity",
  },
  apples: {
    label: "Apples",
    color: "var(--chart-1)",
  },
  oranges: {
    label: "Oranges",
    color: "var(--chart-2)",
  },
  bananas: {
    label: "Bananas",
    color: "var(--chart-3)",
  },
  grapes: {
    label: "Grapes",
    color: "var(--chart-4)",
  },
  berries: {
    label: "Berries",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export default function SalesDistribution() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-0 text-center"
        title="Fruit Sales Distribution"
        description="Sales data of various fruit categories for Jan - Dec 2024"
      />
      <Card.Content>
        <Chart config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <RadialBarChart
            data={chartData}
            startAngle={-90}
            endAngle={380}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="category" />}
            />
            <RadialBar dataKey="quantity" background>
              <LabelList
                position="insideStart"
                dataKey="category"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
