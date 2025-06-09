"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const salesData = Array.from({ length: 48 }, (_, index) => {
  const month = new Date(new Date().getFullYear() - 4, Math.floor(index / 2)).toLocaleDateString(
    "en-US",
    {
      month: "short",
    },
  )
  const startDay = index % 2 === 0 ? 1 : 15
  const endDay = index % 2 === 0 ? 14 : 28
  return {
    period: `${month} ${startDay} - ${month} ${endDay}`,
    revenue: Math.floor(Math.random() * 5000 + 2000),
  }
})

const salesConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function BarChartBasicDemo() {
  return (
    <Card>
      <Card.Header
        title="Biweekly Revenue"
        description="Revenue breakdown every 2 weeks (Jan - Dec 2024)"
        className="items-center pb-0"
      />
      <Card.Content>
        <Chart className="aspect-[20/15] sm:aspect-[17/7]" config={salesConfig}>
          <BarChart accessibilityLayer data={salesData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="period" tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="revenue" fill="var(--color-revenue)" radius={0} />
          </BarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
