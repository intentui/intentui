"use client"

import { IconChartTrending } from "@intentui/icons"
import { Bar, BarChart, Rectangle, XAxis, YAxis } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const data = [
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
  },
  {
    country: "Brazil",
    count: 1967,
    percentage: 4.2
  },
  {
    country: "Canada",
    count: 4276,
    percentage: 22.0
  }
]

const config = {
  count: {
    label: "Count",
    color: "hsl(var(--primary-chart))"
  }
} satisfies ChartConfig

export default function BarChartAnalyticDemo() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Bar Chart - Custom Label</Card.Title>
        <Card.Description>
          The number of visitors to the website has increased by 15.5% this year
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart className="min-h-[250px] max-h-[250px] w-full" config={config}>
          <BarChart
            accessibilityLayer
            data={data}
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
              Visitors increased by 5.2% this year <IconChartTrending />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-fg">
              Showing total visitors for last year
            </div>
          </div>
        </div>
      </Card.Footer>
    </Card>
  )
}
