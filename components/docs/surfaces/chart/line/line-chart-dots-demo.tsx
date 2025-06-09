"use client"

import { IconChartTrending } from "@intentui/icons"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
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

export default function LineChartDotsDemo() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Line Chart - Dots</Card.Title>
        <Card.Description>January - June 2024</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart className="min-h-[250px] max-h-[250px] w-full" config={config}>
          <LineChart
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
            <Chart.Tooltip cursor={false} content={<Chart.TooltipContent hideLabel />} />
            <Line
              dataKey="sales"
              type="natural"
              stroke="var(--color-sales)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-sales)"
              }}
              activeDot={{
                r: 6
              }}
            />
          </LineChart>
        </Chart>
      </Card.Content>
      <Card.Footer className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Profit increased by 5.2% this year <IconChartTrending />
        </div>
        <div className="leading-none text-muted-fg">
          Showing total profit for the last 10 months
        </div>
      </Card.Footer>
    </Card>
  )
}
