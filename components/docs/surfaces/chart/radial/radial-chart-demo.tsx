"use client"

import { IconChartTrending } from "@intentui/icons"
import { RadialBar, RadialBarChart } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const data = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" }
]

const config = {
  visitors: {
    label: "Visitors"
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--primary-chart))"
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--secondary-chart))"
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--tertiary-chart))"
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--highlight-chart))"
  },
  other: {
    label: "Other",
    color: "hsl(var(--accent-chart))"
  }
} satisfies ChartConfig

export default function RadialChartDemo() {
  return (
    <Card className="flex flex-col">
      <Card.Header className="items-center pb-0">
        <Card.Title>Radial Chart</Card.Title>
        <Card.Description>January - June 2024</Card.Description>
      </Card.Header>
      <Card.Content className="flex-1 pb-0">
        <Chart className="min-h-[250px] max-h-[250px] mx-auto aspect-square w-full" config={config}>
          <RadialBarChart data={data} innerRadius={30} outerRadius={110}>
            <Chart.Tooltip
              cursor={false}
              content={<Chart.TooltipContent hideLabel nameKey="browser" />}
            />
            <RadialBar dataKey="visitors" background />
          </RadialBarChart>
        </Chart>
      </Card.Content>
      <Card.Footer className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <IconChartTrending />
        </div>
        <div className="leading-none text-muted-fg">
          Showing total visitors for the last 6 months
        </div>
      </Card.Footer>
    </Card>
  )
}
