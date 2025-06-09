"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

const performanceData = [
  { dataCenter: "NY", uptime: 99.9 },
  { dataCenter: "SF", uptime: 97.5 },
  { dataCenter: "L", uptime: 95.3 },
  { dataCenter: "T", uptime: 94.8 },
  { dataCenter: "Syd", uptime: 99.9 },
  { dataCenter: "S", uptime: 97.5 },
]

const chartConfig = {
  uptime: {
    label: "Uptime (%)",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function BarChartHorizontalDemo() {
  return (
    <Card>
      <Card.Header
        title="Data Center Uptime"
        description="Uptime percentage by region for Q1 2024"
      />
      <Card.Content>
        <Chart className="aspect-[20/12] sm:aspect-[17/5]" config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={performanceData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="uptime" hide />
            <YAxis
              dataKey="dataCenter"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="uptime" fill="var(--color-uptime)" radius={5} />
          </BarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
