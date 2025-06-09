"use client"

import { Card } from "@/components/ui/card"
import { Chart, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

const trafficData = Array.from({ length: 24 }, (_, index) => {
  const date = new Date(new Date().getFullYear() - 1, index)
  const month = date.toLocaleDateString("en-US", { month: "long" })
  return {
    month,
    organic: Math.floor(Math.random() * 100 + 150),
    paid: Math.floor(Math.random() * 50 + 100),
    referral: Math.floor(Math.random() * 50 + 50),
  }
})

const trafficConfig = {
  organic: {
    label: "Organic",
    color: "var(--chart-1)",
  },
  paid: {
    label: "Paid",
    color: "var(--chart-2)",
  },
  referral: {
    label: "Referral",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export default function AreaChartStackedExpandedDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-0"
        title="Traffic Analysis"
        description="Distribution of traffic sources over the last 24 months"
      />
      <Card.Content>
        <Chart config={trafficConfig}>
          <AreaChart
            accessibilityLayer
            data={trafficData}
            margin={{
              left: 20,
              right: 20,
              top: 20,
            }}
            stackOffset="expand"
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor content={<ChartTooltipContent indicator="line" />} />
            <Area
              dataKey="referral"
              type="monotone"
              fill="var(--chart-3)"
              fillOpacity={0.1}
              stroke="var(--chart-3)"
              stackId="a"
            />
            <Area
              dataKey="paid"
              type="monotone"
              fill="var(--chart-2)"
              fillOpacity={0.4}
              stroke="var(--chart-2)"
              stackId="a"
            />
            <Area
              dataKey="organic"
              type="monotone"
              fill="var(--chart-1)"
              fillOpacity={0.4}
              stroke="var(--chart-1)"
              stackId="a"
            />
          </AreaChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
