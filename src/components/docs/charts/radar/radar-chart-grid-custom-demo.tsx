"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts"

const chartData = [
  { month: "Jan", sales: 186, expenses: 80 },
  { month: "Feb", sales: 305, expenses: 200 },
  { month: "Mar", sales: 237, expenses: 120 },
  { month: "Apr", sales: 73, expenses: 190 },
  { month: "May", sales: 209, expenses: 130 },
  { month: "Jun", sales: 214, expenses: 140 },
  { month: "Jul", sales: 230, expenses: 150 },
  { month: "Aug", sales: 250, expenses: 170 },
  { month: "Sep", sales: 270, expenses: 180 },
  { month: "Oct", sales: 290, expenses: 200 },
  { month: "Nov", sales: 310, expenses: 220 },
  { month: "Dec", sales: 330, expenses: 250 },
]

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-1)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function Component() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-4"
        title="Annual Sales vs Expenses"
        description="Comparing sales and expenses for Jan - Dec 2024"
      />
      <Card.Content>
        <Chart config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" labelKey="month" />}
            />
            <PolarGrid />
            <Radar dataKey="sales" fill="var(--color-sales)" fillOpacity={0.6} />
            <Radar dataKey="expenses" fill="var(--color-expenses)" />
            <PolarRadiusAxis angle={60} stroke="var(--fg)" orientation="middle" axisLine={false} />
          </RadarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
