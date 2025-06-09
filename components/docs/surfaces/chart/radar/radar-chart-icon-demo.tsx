"use client"

import { IconArrowWall2Down, IconArrowWallUp, IconChartTrending } from "@intentui/icons"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const data = [
  { month: "January", sales: 186, profit: 80 },
  { month: "February", sales: 305, profit: 200 },
  { month: "March", sales: 237, profit: 120 },
  { month: "April", sales: 73, profit: 190 },
  { month: "May", sales: 209, profit: 130 },
  { month: "June", sales: 214, profit: 140 }
]

const config = {
  sales: {
    label: "Sales",
    color: "hsl(var(--primary-chart))",
    icon: IconArrowWallUp
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--secondary-chart))",
    icon: IconArrowWall2Down
  }
} satisfies ChartConfig

export default function RadarChartIconDemo() {
  return (
    <Card>
      <Card.Header className="items-center pb-4">
        <Card.Title>Radar Chart - Icons</Card.Title>
        <Card.Description>Showing total visitors for the last 6 months</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart className="min-h-[250px] max-h-[250px] w-full" config={config}>
          <RadarChart
            data={data}
            margin={{
              top: -40,
              bottom: -10
            }}
          >
            <Chart.Tooltip cursor={false} content={<Chart.TooltipContent indicator="line" />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar dataKey="sales" fill="var(--color-sales)" fillOpacity={0.6} />
            <Radar dataKey="profit" fill="var(--color-profit)" />
            <Chart.Legend className="mt-8" content={<Chart.LegendContent />} />
          </RadarChart>
        </Chart>
      </Card.Content>
      <Card.Footer className="flex-col gap-2 pt-4 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <IconChartTrending />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-fg">
          January - June 2024
        </div>
      </Card.Footer>
    </Card>
  )
}
