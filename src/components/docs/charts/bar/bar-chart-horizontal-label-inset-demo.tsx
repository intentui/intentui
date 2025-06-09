"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, Rectangle, XAxis, YAxis } from "recharts"

const chartData = [
  {
    country: "United States",
    count: 45000,
    percentage: 45.0,
  },
  {
    country: "Canada",
    count: 34000,
    percentage: 18.0,
  },
  {
    country: "United Kingdom",
    count: 30000,
    percentage: 12.0,
  },
  {
    country: "Germany",
    count: 25000,
    percentage: 9.0,
  },
  {
    country: "Australia",
    count: 22000,
    percentage: 7.5,
  },
  {
    country: "France",
    count: 18000,
    percentage: 6.0,
  },
  {
    country: "Japan",
    count: 15000,
    percentage: 4.5,
  },
  {
    country: "Brazil",
    count: 13000,
    percentage: 5.0,
  },
  {
    country: "Indonesia",
    count: 10030,
    percentage: 6.0,
  },
]

const chartConfig = {
  count: {
    label: "Count",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function BarChartHorizontalLabelInsetDemo() {
  return (
    <Card className="h-full w-full">
      <Card.Header>
        <Card.Title>Traffic by Country</Card.Title>
        <Card.Description>Since Aug 17, 2014</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart config={chartConfig} className="aspect-[15/15] sm:aspect-[17/7]">
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
              background={{ radius: 6, fill: "var(--chart-1)", opacity: 0.2 }}
              radius={6}
              shape={(props: any) => (
                <>
                  <Rectangle {...props} />
                  <text x={props.x + 10} y={props.y + 20} fill="white">
                    {props.country}
                  </text>
                  <text
                    x={props.background.width - 10}
                    y={props.y + 20}
                    textAnchor="end"
                    fill="var(--fg)"
                  >
                    {props.count.toLocaleString()} ({props.percentage.toFixed(1)}%)
                  </text>
                </>
              )}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
          </BarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
