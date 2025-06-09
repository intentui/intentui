"use client"

import { IconChartTrending } from "@intentui/icons"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const data = [
  { month: "January", sales: 186, profit: 80 },
  { month: "February", sales: 305, profit: 200 },
  { month: "March", sales: 237, profit: 120 },
  { month: "April", sales: 73, profit: 190 },
  { month: "May", sales: 209, profit: 130 },
  { month: "June", sales: 214, profit: 140 },
  { month: "July", sales: 186, profit: 80 }
]

const config = {
  sales: {
    label: "Sales",
    color: "hsl(var(--primary-chart))"
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--secondary-chart))"
  },
  label: {
    color: "hsl(var(--bg))"
  }
} satisfies ChartConfig

export default function BarChartHorizontalDemo() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Bar Chart - Horizontal</Card.Title>
        <Card.Description>January - July 2024</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart className="min-h-[250px] max-h-[250px] w-full" config={config}>
          <BarChart
            accessibilityLayer
            data={data}
            layout="vertical"
            margin={{
              right: 16
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="sales" type="number" hide />
            <Chart.Tooltip cursor={false} content={<Chart.TooltipContent indicator="line" />} />
            <Bar dataKey="sales" layout="vertical" fill="var(--color-sales)" radius={4}>
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-light"
                fontSize={12}
              />
              <LabelList
                dataKey="sales"
                position="right"
                offset={8}
                className="fill-fg"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </Chart>
      </Card.Content>
      <Card.Footer className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Sales increased by 5.2% this year <IconChartTrending />
        </div>
        <div className="leading-none text-muted-fg">
          Showing total visitors for the last 7 months
        </div>
      </Card.Footer>
    </Card>
  )
}
