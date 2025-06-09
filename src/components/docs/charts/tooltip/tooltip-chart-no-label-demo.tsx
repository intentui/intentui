"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, XAxis } from "recharts"

const chartData = Array.from({ length: 24 }, (_, index) => {
  const date = new Date(new Date().getFullYear() - 1, index).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  })
  return {
    date,
    products: Math.floor(Math.random() * 600 + 200),
    services: Math.floor(Math.random() * 400 + 100),
  }
})

const chartConfig = {
  products: {
    label: "Products",
    color: "var(--chart-1)",
  },
  services: {
    label: "Services",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function TooltipChartNoLabelDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-0"
        title="Monthly Products and Services Data"
        description="Displaying products and services data over the last 24 months"
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
            <Bar
              dataKey="products"
              stackId="a"
              fill="var(--color-products)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="services"
              stackId="a"
              fill="var(--color-services)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={<ChartTooltipContent hideIndicator hideLabel />}
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
