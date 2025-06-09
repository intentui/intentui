"use client"

import { Card } from "@/components/ui/card"
import {
  Chart,
  type ChartConfig,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const chartData = [
  { month: "Jan", revenue: 3200, expenses: 2400 },
  { month: "Feb", revenue: 2800, expenses: 2000 },
  { month: "Mar", revenue: 3500, expenses: 2700 },
  { month: "Apr", revenue: 3000, expenses: 2200 },
  { month: "May", revenue: 3600, expenses: 2800 },
  { month: "Jun", revenue: 3400, expenses: 2600 },
  { month: "Jul", revenue: 3900, expenses: 3100 },
  { month: "Aug", revenue: 4100, expenses: 3300 },
  { month: "Sep", revenue: 3700, expenses: 2900 },
  { month: "Oct", revenue: 4200, expenses: 3400 },
  { month: "Nov", revenue: 4000, expenses: 3100 },
  { month: "Dec", revenue: 4300, expenses: 3500 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function BarChartStackedLegendDemo() {
  return (
    <Card>
      <Card.Header
        title="Biweekly Revenue"
        description="Revenue breakdown every 2 weeks (Jan - Dec 2024)"
      />
      <Card.Content>
        <Chart className="aspect-[20/15] sm:aspect-[17/7]" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="revenue" stackId="a" fill="var(--chart-1)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="expenses" stackId="a" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
