"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts"

const chartData = [
  {
    browser: "chrome",
    visitors: 275,
    bounceRate: 40,
    avgSession: 5.6,
    fill: "var(--color-chrome)",
  },
  {
    browser: "safari",
    visitors: 200,
    bounceRate: 35,
    avgSession: 6.3,
    fill: "var(--color-safari)",
  },
  {
    browser: "firefox",
    visitors: 187,
    bounceRate: 45,
    avgSession: 4.2,
    fill: "var(--color-firefox)",
  },
  { browser: "edge", visitors: 173, bounceRate: 30, avgSession: 5.0, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, bounceRate: 50, avgSession: 3.7, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--chart-1)",
  },
  bounceRate: {
    label: "Bounce Rate (%)",
    color: "var(--chart-2)",
  },
  avgSession: {
    label: "Avg Session (min)",
    color: "var(--chart-3)",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export default function BarChartGroupedDemo() {
  return (
    <Card>
      <Card.Header
        title="Browser Metrics"
        description="Grouped data for visitors, bounce rate, and average session duration"
      />
      <Card.Content>
        <Chart config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => chartConfig[value as keyof typeof chartConfig]?.label}
            />
            <XAxis type="number" hide />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Legend />
            <Bar dataKey="visitors" layout="vertical" fill="var(--color-chrome)" radius={5} />
            <Bar dataKey="bounceRate" layout="vertical" fill="var(--color-safari)" radius={5} />
            <Bar dataKey="avgSession" layout="vertical" fill="var(--color-firefox)" radius={5} />
          </BarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
