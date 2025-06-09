"use client"

import { IconChartTrending } from "@intentui/icons"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const data = [
  { month: "January", sales: 900 },
  { month: "February", sales: 1200 },
  { month: "March", sales: 700 },
  { month: "April", sales: 900 },
  { month: "May", sales: 2100 },
  { month: "June", sales: 800 },
  { month: "July", sales: 1000 },
  { month: "August", sales: 2400 },
  { month: "September", sales: 1237 },
  { month: "October", sales: 2173 },
  { month: "November", sales: 1209 },
  { month: "December", sales: 2214 }
]

const config = {
  sales: {
    label: "Sales",
    color: "hsl(var(--primary-chart))"
  }
} satisfies ChartConfig

export default function AreaChartDemo() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Area Chart</Card.Title>
        <Card.Description>Showing total sales for last year</Card.Description>
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
            <Chart.Tooltip cursor={false} content={<Chart.TooltipContent indicator="line" />} />
            <Area
              dataKey="sales"
              type="natural"
              fill="var(--color-sales)"
              fillOpacity={0.4}
              stroke="var(--color-sales)"
            />
          </AreaChart>
        </Chart>
      </Card.Content>
      <Card.Footer>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Sales increased by 8.4% this year <IconChartTrending />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-fg">
              January - December 2023
            </div>
          </div>
        </div>
      </Card.Footer>
    </Card>
  )
}
