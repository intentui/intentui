"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

const chartData = [
  { month: "Jan", revenue: 186 },
  { month: "Feb", revenue: 305 },
  { month: "Mar", revenue: 237 },
  { month: "Apr", revenue: 273 },
  { month: "May", revenue: 209 },
  { month: "Jun", revenue: 214 },
  { month: "Jul", revenue: 220 },
  { month: "Aug", revenue: 230 },
  { month: "Sep", revenue: 240 },
  { month: "Oct", revenue: 250 },
  { month: "Nov", revenue: 260 },
  { month: "Dec", revenue: 270 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function RadarChartDotsDemo() {
  return (
    <Card>
      <Card.Header className="items-center">
        <Card.Title>Monthly Revenue Radar Chart</Card.Title>
        <Card.Description>Displaying revenue trends for Jan - Dec 2024</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="revenue"
              fill="var(--color-revenue)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
