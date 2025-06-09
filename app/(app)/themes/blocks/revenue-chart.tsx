"use client"

import { IconChartTrending } from "@intentui/icons"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

export const description = "An area chart with gradient fill"

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

const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--primary-chart))"
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--secondary-chart))"
  }
} satisfies ChartConfig

export function RevenueChart() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Revenue</Card.Title>
        <Card.Description>Showing total revenue for last year</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
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
          </AreaChart>
        </Chart>
      </Card.Content>
      <Card.Footer>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Profit increased by 5.2% this year <IconChartTrending />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-fg">
              January - December {new Date().getFullYear() - 1}
            </div>
          </div>
        </div>
      </Card.Footer>
    </Card>
  )
}
