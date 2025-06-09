"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

const chartData = [
  { month: "Jan", revenue: 186, profit: 160 },
  { month: "Feb", revenue: 185, profit: 170 },
  { month: "Mar", revenue: 207, profit: 180 },
  { month: "Apr", revenue: 173, profit: 160 },
  { month: "May", revenue: 160, profit: 190 },
  { month: "Jun", revenue: 174, profit: 204 },
  { month: "Jul", revenue: 190, profit: 210 },
  { month: "Aug", revenue: 200, profit: 220 },
  { month: "Sep", revenue: 210, profit: 230 },
  { month: "Oct", revenue: 220, profit: 240 },
  { month: "Nov", revenue: 230, profit: 250 },
  { month: "Dec", revenue: 240, profit: 260 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  profit: {
    label: "Profit",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function RadarChartLinesOnlyDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-4"
        title="Annual Revenue vs Profit"
        description="Performance data for Jan - Dec 2024"
      />
      <Card.Content>
        <Chart config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid radialLines={false} />
            <Radar
              dataKey="revenue"
              fill="var(--color-revenue)"
              fillOpacity={0}
              stroke="var(--color-revenue)"
              strokeWidth={2}
            />
            <Radar
              dataKey="profit"
              fill="var(--color-profit)"
              fillOpacity={0}
              stroke="var(--color-profit)"
              strokeWidth={2}
            />
          </RadarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
