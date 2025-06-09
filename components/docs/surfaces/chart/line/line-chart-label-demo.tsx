"use client"

import { IconChartTrending } from "@intentui/icons"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const data = [
  { month: "January", revenue: 400 },
  { month: "February", revenue: 700 },
  { month: "March", revenue: 500 },
  { month: "April", revenue: 850 },
  { month: "May", revenue: 200 },
  { month: "June", revenue: 500 },
  { month: "July", revenue: 600 },
  { month: "August", revenue: 500 },
  { month: "September", revenue: 800 },
  { month: "October", revenue: 900 }
]

const config = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--primary-chart))"
  }
} satisfies ChartConfig

export default function LineChartLabelDemo() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Line Chart - Label</Card.Title>
        <Card.Description>January - October 2024</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart className="min-h-[250px] max-h-[250px] w-full" config={config}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              top: 20,
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
            <Line
              dataKey="revenue"
              type="natural"
              stroke="var(--color-revenue)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-revenue)"
              }}
              activeDot={{
                r: 6
              }}
            >
              <LabelList position="top" offset={12} className="fill-fg" fontSize={12} />
            </Line>
          </LineChart>
        </Chart>
      </Card.Content>
      <Card.Footer className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Revenue increased by 5.2% this year <IconChartTrending />
        </div>
        <div className="leading-none text-muted-fg">
          Showing total revenue for the last 10 months
        </div>
      </Card.Footer>
    </Card>
  )
}
