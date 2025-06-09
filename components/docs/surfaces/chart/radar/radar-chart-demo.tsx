"use client"

import { IconChartTrending } from "@intentui/icons"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const data = [
  { month: "Jan", sales: 186 },
  { month: "Feb", sales: 305 },
  { month: "Mar", sales: 237 },
  { month: "Apr", sales: 273 },
  { month: "May", sales: 209 },
  { month: "Jun", sales: 214 },
  { month: "Jul", sales: 186 },
  { month: "Aug", sales: 305 },
  { month: "Sep", sales: 237 },
  { month: "Oct", sales: 73 },
  { month: "Nov", sales: 209 },
  { month: "Dec", sales: 214 }
]

const config = {
  sales: {
    label: "Sales",
    color: "hsl(var(--primary-chart))"
  }
} satisfies ChartConfig

export default function RadarChartDemo() {
  return (
    <Card>
      <Card.Header className="items-center pb-4">
        <Card.Title>Radar Chart</Card.Title>
        <Card.Description>Showing total visitors for last year</Card.Description>
      </Card.Header>
      <Card.Content className="pb-0">
        <Chart className="min-h-[250px] max-h-[250px] w-full" config={config}>
          <RadarChart data={data}>
            <Chart.Tooltip cursor={false} content={<Chart.TooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar dataKey="sales" fill="var(--color-sales)" fillOpacity={0.6} />
          </RadarChart>
        </Chart>
      </Card.Content>
      <Card.Footer className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Sales increased by 5.2% this year <IconChartTrending />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-fg">
          January - December 2023
        </div>
      </Card.Footer>
    </Card>
  )
}
