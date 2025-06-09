"use client"

import { IconChartTrending } from "@intentui/icons"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const data = [
  { month: "January", sales: 186 },
  { month: "February", sales: 305 },
  { month: "March", sales: 237 },
  { month: "April", sales: 73 },
  { month: "May", sales: 209 },
  { month: "June", sales: 214 },
  { month: "July", sales: 186 },
  { month: "August", sales: 305 },
  { month: "September", sales: 237 },
  { month: "October", sales: 73 },
  { month: "November", sales: 209 },
  { month: "December", sales: 214 },
  { month: "January", sales: 186 },
  { month: "February", sales: 305 },
  { month: "March", sales: 237 },
  { month: "April", sales: 73 },
  { month: "May", sales: 209 },
  { month: "June", sales: 214 },
  { month: "July", sales: 186 },
  { month: "August", sales: 305 },
  { month: "September", sales: 237 },
  { month: "October", sales: 373 }
]

const config = {
  sales: {
    label: "Sales",
    color: "hsl(var(--primary-chart))"
  }
} satisfies ChartConfig

export default function LineChartLinearDemo() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Line Chart - Linear</Card.Title>
        <Card.Description>January - December 2024</Card.Description>
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
              type="linear"
              stroke="var(--color-sales)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </Chart>
      </Card.Content>
      <Card.Footer className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Sales increased by 5.2% this year <IconChartTrending />
        </div>
        <div className="leading-none text-muted-fg">
          Showing sales for january 2023 to october 2024
        </div>
      </Card.Footer>
    </Card>
  )
}
