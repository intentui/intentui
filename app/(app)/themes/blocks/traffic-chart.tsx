"use client"

import { IconChartTrending } from "@intentui/icons"
import { Bar, BarChart, Rectangle, XAxis, YAxis } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const chartData = [
  {
    country: "Canada",
    count: 4276,
    percentage: 22.0
  },
  {
    country: "Germany",
    count: 3689,
    percentage: 16.6
  },
  {
    country: "France",
    count: 2134,
    percentage: 9.6
  },
  {
    country: "Indonesia",
    count: 3567,
    percentage: 16.2
  },
  {
    country: "United Kingdom",
    count: 2234,
    percentage: 4.5
  }
]

const chartConfig = {
  count: {
    label: "Count",
    color: "hsl(var(--primary-chart))"
  }
} satisfies ChartConfig

export function TrafficChart() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Traffic by Country</Card.Title>
        <Card.Description>Since Aug 17, 2014</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            barSize={30}
            margin={{ left: 0, right: 0 }}
          >
            <YAxis dataKey="name" type="category" hide />
            <XAxis dataKey="count" type="number" hide />
            <Bar
              dataKey="count"
              layout="vertical"
              fill="var(--color-count)"
              background={{ radius: 6, fill: "hsl(var(--primary-chart)/20%)" }}
              radius={6}
              shape={(props: any) => (
                <>
                  <Rectangle {...props} />
                  <text x={props.x + 10} y={props.y + 20} fill="hsl(var(--light))">
                    {props.country}
                  </text>
                  <text
                    x={props.background.width - 10}
                    y={props.y + 20}
                    textAnchor="end"
                    fill="hsl(var(--fg))"
                  >
                    {props.count.toLocaleString()} ({props.percentage.toFixed(1)}%)
                  </text>
                </>
              )}
            />
            <Chart.Tooltip cursor={false} content={<Chart.TooltipContent indicator="dot" />} />
          </BarChart>
        </Chart>
      </Card.Content>
      <Card.Footer>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <IconChartTrending />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-fg">
              August - October 2024
            </div>
          </div>
        </div>
      </Card.Footer>
    </Card>
  )
}
