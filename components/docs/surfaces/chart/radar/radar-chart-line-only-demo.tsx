"use client"

import { IconChartTrending } from "@intentui/icons"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const data = [
  { month: "Jan", sales: 186, profit: 160 },
  { month: "Feb", sales: 185, profit: 170 },
  { month: "Mar", sales: 207, profit: 180 },
  { month: "Apr", sales: 173, profit: 160 },
  { month: "May", sales: 160, profit: 190 },
  { month: "Jun", sales: 174, profit: 204 },
  { month: "Jul", sales: 186, profit: 80 },
  { month: "Aug", sales: 305, profit: 200 },
  { month: "Sep", sales: 237, profit: 120 },
  { month: "Oct", sales: 73, profit: 190 },
  { month: "Nov", sales: 209, profit: 130 },
  { month: "Dec", sales: 214, profit: 140 }
]

const config = {
  sales: {
    label: "Sales",
    color: "hsl(var(--primary-chart))"
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--secondary-chart))"
  }
} satisfies ChartConfig

export default function RadarChartLineOnlyDemo() {
  return (
    <Card>
      <Card.Header className="items-center pb-4">
        <Card.Title>Radar Chart - Lines Only</Card.Title>
        <Card.Description>Showing total visitors for last year</Card.Description>
      </Card.Header>
      <Card.Content className="pb-0">
        <Chart className="min-h-[250px] max-h-[250px] w-full mx-auto aspect-square" config={config}>
          <RadarChart data={data}>
            <Chart.Tooltip cursor={false} content={<Chart.TooltipContent indicator="line" />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid radialLines={false} />
            <Radar
              dataKey="sales"
              fill="var(--color-sales)"
              fillOpacity={0}
              stroke="var(--color-sales)"
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
      <Card.Footer className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Profit increased by 5.2% this year <IconChartTrending />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-fg">
          January - December 2023
        </div>
      </Card.Footer>
    </Card>
  )
}
