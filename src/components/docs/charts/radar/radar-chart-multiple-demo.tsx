"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

const chartData = [
  { month: "Jan", sales: 186, profit: 80 },
  { month: "Feb", sales: 305, profit: 200 },
  { month: "Mar", sales: 237, profit: 120 },
  { month: "Apr", sales: 73, profit: 190 },
  { month: "May", sales: 209, profit: 130 },
  { month: "Jun", sales: 214, profit: 140 },
  { month: "Jul", sales: 230, profit: 150 },
  { month: "Aug", sales: 250, profit: 160 },
  { month: "Sep", sales: 270, profit: 170 },
  { month: "Oct", sales: 290, profit: 180 },
  { month: "Nov", sales: 310, profit: 190 },
  { month: "Dec", sales: 330, profit: 200 },
]

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-1)",
  },
  profit: {
    label: "Profit",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function RadarChartMultipleDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-4"
        title="Annual Sales and Profit Comparison"
        description="Performance data for Jan - Dec 2024"
      />
      <Card.Content>
        <Chart config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar dataKey="sales" fill="var(--color-sales)" fillOpacity={0.6} />
            <Radar dataKey="profit" fill="var(--color-profit)" />
          </RadarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
