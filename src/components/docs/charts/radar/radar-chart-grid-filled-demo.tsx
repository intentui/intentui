"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

const chartData = [
  { month: "Jan", revenue: 186 },
  { month: "Feb", revenue: 285 },
  { month: "Mar", revenue: 237 },
  { month: "Apr", revenue: 203 },
  { month: "May", revenue: 209 },
  { month: "Jun", revenue: 264 },
  { month: "Jul", revenue: 290 },
  { month: "Aug", revenue: 310 },
  { month: "Sep", revenue: 330 },
  { month: "Oct", revenue: 350 },
  { month: "Nov", revenue: 370 },
  { month: "Dec", revenue: 390 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function RadarChartGridFilledDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-4"
        title="Annual Revenue Radar Chart"
        description="Revenue data for Jan - Dec 2024"
      />
      <Card.Content>
        <Chart config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <PolarGrid className="fill-[--color-revenue] opacity-20" />
            <PolarAngleAxis dataKey="month" />
            <Radar dataKey="revenue" fill="var(--color-revenue)" fillOpacity={0.5} />
          </RadarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
