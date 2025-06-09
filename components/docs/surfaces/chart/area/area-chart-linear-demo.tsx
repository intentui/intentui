"use client"

import { IconChartTrending } from "@intentui/icons"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const data = [
  { month: "January", revenue: 5000 },
  { month: "February", revenue: 2000 },
  { month: "March", revenue: 3500 },
  { month: "April", revenue: 4000 },
  { month: "May", revenue: 3300 },
  { month: "June", revenue: 5000 },
  { month: "July", revenue: 1900 },
  { month: "August", revenue: 4000 },
  { month: "September", revenue: 2000 },
  { month: "October", revenue: 7000 },
  { month: "November", revenue: 3000 },
  { month: "December", revenue: 9500 }
]

const config = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--primary-chart))"
  }
} satisfies ChartConfig

export default function AreaChartLinearDemo() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Area Chart - Linear</Card.Title>
        <Card.Description>Showing total revenue for this year</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart className="min-h-[250px] max-h-[250px] w-full" config={config}>
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Chart.Tooltip
              cursor={false}
              content={<Chart.TooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="revenue"
              type="linear"
              fill="var(--color-revenue)"
              fillOpacity={0.4}
              stroke="var(--color-revenue)"
            />
          </AreaChart>
        </Chart>
      </Card.Content>
      <Card.Footer>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Revenue increased by 12.5% this year <IconChartTrending />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-fg">
              January - December 2024
            </div>
          </div>
        </div>
      </Card.Footer>
    </Card>
  )
}
