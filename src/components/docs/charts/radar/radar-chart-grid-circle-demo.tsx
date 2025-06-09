"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

const chartData = [
  { month: "Jan", profit: 186 },
  { month: "Feb", profit: 305 },
  { month: "Mar", profit: 237 },
  { month: "Apr", profit: 273 },
  { month: "May", profit: 209 },
  { month: "Jun", profit: 214 },
  { month: "Jul", profit: 220 },
  { month: "Aug", profit: 230 },
  { month: "Sep", profit: 240 },
  { month: "Oct", profit: 250 },
  { month: "Nov", profit: 260 },
  { month: "Dec", profit: 270 },
]

const chartConfig = {
  profit: {
    label: "Profit",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function Component() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-4"
        title="Annual Profit Distribution"
        description="Profit trends displayed for Jan - Dec 2024"
      />
      <Card.Content>
        <Chart config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <PolarGrid gridType="circle" />
            <PolarAngleAxis dataKey="month" />
            <Radar
              dataKey="profit"
              fill="var(--color-profit)"
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
