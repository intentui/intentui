"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

const chartData = [
  { month: "Jan", sales: 186 },
  { month: "Feb", sales: 285 },
  { month: "Mar", sales: 237 },
  { month: "Apr", sales: 203 },
  { month: "May", sales: 209 },
  { month: "Jun", sales: 264 },
  { month: "Jul", sales: 290 },
  { month: "Aug", sales: 310 },
  { month: "Sep", sales: 320 },
  { month: "Oct", sales: 330 },
  { month: "Nov", sales: 350 },
  { month: "Dec", sales: 370 },
]

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function RadarChartGridCircleFilledDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-4"
        title="Monthly Sales Overview"
        description="Displaying sales data for Jan - Dec 2024"
      />
      <Card.Content>
        <Chart config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarGrid className="fill-[--color-sales] opacity-20" gridType="circle" />
            <PolarAngleAxis dataKey="month" />
            <Radar dataKey="sales" fill="var(--color-sales)" fillOpacity={0.5} />
          </RadarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
