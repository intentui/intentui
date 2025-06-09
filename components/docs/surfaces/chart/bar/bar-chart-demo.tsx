"use client"

import { IconChartTrending } from "@intentui/icons"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
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
  { month: "November", sales: 209, profit: 130 }
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

export default function BarChartDemo() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Bar Chart</Card.Title>
        <Card.Description>January - November 2024</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart className="min-h-[250px] max-h-[250px] w-full" config={config}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Chart.Tooltip cursor={false} content={<Chart.TooltipContent hideLabel />} />
            <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
            <Bar dataKey="profit" fill="var(--color-profit)" radius={4} />
          </BarChart>
        </Chart>
      </Card.Content>
      <Card.Footer className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 10.5% this month <IconChartTrending />
        </div>
        <div className="leading-none text-muted-fg">Showing total sales for the last 11 months</div>
      </Card.Footer>
    </Card>
  )
}
