"use client"

import { IconChartTrending } from "@intentui/icons"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const data = [
  { month: "January", sales: 186, profit: 80 },
  { month: "February", sales: 305, profit: 200 },
  { month: "March", sales: 237, profit: 120 },
  { month: "April", sales: 73, profit: 190 },
  { month: "May", sales: 209, profit: 130 },
  { month: "June", sales: 214, profit: 140 },
  { month: "July", sales: 186, profit: 80 },
  { month: "August", sales: 305, profit: 200 },
  { month: "September", sales: 237, profit: 120 },
  { month: "October", sales: 73, profit: 190 },
  { month: "November", sales: 209, profit: 130 },
  { month: "December", sales: 214, profit: 140 }
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

export default function BasicChartDemo() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Sales</Card.Title>
        <Card.Description>Showing sales for the last year</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart className="min-h-[250px] max-h-[250px] w-full" config={config}>
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 10,
              right: 10
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
            <Chart.Tooltip cursor={false} content={<Chart.TooltipContent />} />
            <defs>
              <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-sales)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-sales)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-profit)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-profit)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="profit"
              type="natural"
              fill="url(#fillProfit)"
              fillOpacity={0.4}
              stroke="var(--color-profit)"
              stackId="a"
            />
            <Area
              dataKey="sales"
              type="natural"
              fill="url(#fillSales)"
              fillOpacity={0.4}
              stroke="var(--color-sales)"
              stackId="a"
            />
            <Chart.Legend content={<Chart.LegendContent />} className="mt-6" />
          </AreaChart>
        </Chart>
      </Card.Content>
      <Card.Footer>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Profit increased by 10.2% this year <IconChartTrending />
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
