"use client"

import { IconChartTrending } from "@intentui/icons"
import { CartesianGrid, Dot, Line, LineChart } from "recharts"
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
    label: "Visitors",
    color: "hsl(var(--primary-chart))"
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

export default function LineChartDotsColorDemo() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Line Chart - Dots Colors</Card.Title>
        <Card.Description>January - June 2024</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart className="min-h-[250px] max-h-[250px] w-full" config={config}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              top: 24,
              left: 24,
              right: 24
            }}
          >
            <CartesianGrid vertical={false} />
            <Chart.Tooltip
              cursor={false}
              content={<Chart.TooltipContent indicator="line" nameKey="visitors" hideLabel />}
            />
            <Line
              dataKey="visitors"
              type="natural"
              stroke="var(--color-visitors)"
              strokeWidth={2}
              dot={({ payload, ...props }) => {
                return (
                  <Dot
                    key={payload.browser}
                    r={5}
                    cx={props.cx}
                    cy={props.cy}
                    fill={payload.fill}
                    stroke={payload.fill}
                  />
                )
              }}
            />
          </LineChart>
        </Chart>
      </Card.Content>
      <Card.Footer className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <IconChartTrending />
        </div>
        <div className="leading-none text-muted-fg">
          Showing total visitors for the last 10 months
        </div>
      </Card.Footer>
    </Card>
  )
}
