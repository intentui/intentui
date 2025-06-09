"use client"

import { Card } from "@/components/ui/card"
import { Chart, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

const salesData = Array.from({ length: 24 }, (_, index) => {
  const date = new Date(new Date().getFullYear() - 1, index)
  const month = date.toLocaleDateString("en-US", { month: "long" })
  return {
    month,
    online: Math.floor(Math.random() * 2000 + 3000),
    inStore: Math.floor(Math.random() * 1000 + 1500),
  }
})

const chartConfig = {
  online: {
    label: "Online Sales",
    color: "var(--chart-1)",
  },
  inStore: {
    label: "In-Store Sales",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function AreaChartGradientDemo() {
  return (
    <Card>
      <Card.Header
        title="Sales Channel Analysis"
        description="Monthly comparison of online and in-store sales over the last 24 months"
        className="items-center pb-4"
      />
      <Card.Content>
        <Chart config={chartConfig} className="max-h-[300px] w-full">
          <AreaChart
            accessibilityLayer
            data={salesData}
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
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillOnline" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-online)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-online)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillInStore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-inStore)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-inStore)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="inStore"
              type="natural"
              fill="url(#fillInStore)"
              fillOpacity={0.4}
              stroke="var(--color-inStore)"
              stackId="a"
            />
            <Area
              dataKey="online"
              type="natural"
              fill="url(#fillOnline)"
              fillOpacity={0.4}
              stroke="var(--color-online)"
              stackId="a"
            />
          </AreaChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
