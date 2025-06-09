"use client"

import { Card } from "@/components/ui/card"
import {
  Chart,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import { IconShoppingBag, IconStore } from "@intentui/icons"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

const revenueData = Array.from({ length: 24 }, (_, index) => {
  const date = new Date(new Date().getFullYear() - 1, index)
  const month = date.toLocaleDateString("en-US", { month: "long" })
  return {
    month,
    ecommerce: Math.floor(Math.random() * 5000 + 10000),
    retail: Math.floor(Math.random() * 3000 + 7000),
  }
})

const revenueConfig = {
  ecommerce: {
    label: "E-Commerce",
    color: "var(--chart-1)",
    icon: IconShoppingBag,
  },
  retail: {
    label: "Retail",
    color: "var(--chart-2)",
    icon: IconStore,
  },
} satisfies ChartConfig

export default function AreaChartIconDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-0"
        title="Revenue Overview"
        description="Monthly revenue comparison between E-Commerce and Retail over the last 24 months"
      />
      <Card.Content>
        <Chart config={revenueConfig}>
          <AreaChart
            accessibilityLayer
            data={revenueData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Area
              dataKey="retail"
              type="natural"
              fill="var(--color-retail)"
              fillOpacity={0.4}
              stroke="var(--color-retail)"
              stackId="a"
            />
            <Area
              dataKey="ecommerce"
              type="natural"
              fill="var(--color-ecommerce)"
              fillOpacity={0.4}
              stroke="var(--color-ecommerce)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
