"use client"

import * as React from "react"

import { IconChartTrending } from "@intentui/icons"
import { Label, Pie, PieChart } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const data = [
  { plan: "Basic", subscribers: 450, fill: "var(--color-basic)" },
  { plan: "Standard", subscribers: 400, fill: "var(--color-standard)" },
  { plan: "Premium", subscribers: 400, fill: "var(--color-premium)" },
  { plan: "Pro", subscribers: 250, fill: "var(--color-pro)" },
  { plan: "Enterprise", subscribers: 800, fill: "var(--color-enterprise)" }
]

const config = {
  subscribers: {
    label: "Subscribers"
  },
  basic: {
    label: "Basic",
    color: "hsl(var(--primary-chart))"
  },
  standard: {
    label: "Standard",
    color: "hsl(var(--secondary-chart))"
  },
  premium: {
    label: "Premium",
    color: "hsl(var(--tertiary-chart))"
  },
  pro: {
    label: "Pro",
    color: "hsl(var(--highlight-chart))"
  },
  enterprise: {
    label: "Enterprise",
    color: "hsl(var(--accent-chart))"
  }
} satisfies ChartConfig

export default function PieChartDemo() {
  const totalSubscribers = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.subscribers, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <Card.Header className="items-center pb-0">
        <Card.Title>Pie Chart</Card.Title>
        <Card.Description>January - September 2024</Card.Description>
      </Card.Header>
      <Card.Content className="flex-1 pb-0">
        <Chart className="min-h-[250px] max-h-[250px] mx-auto aspect-square w-full" config={config}>
          <PieChart>
            <Chart.Tooltip cursor={false} content={<Chart.TooltipContent hideLabel />} />
            <Pie data={data} dataKey="subscribers" nameKey="plan" innerRadius={60} strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-fg text-3xl font-bold">
                          {totalSubscribers.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-fg">
                          Subscribers
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </Chart>
      </Card.Content>
      <Card.Footer className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Subscribers increased by 8.5% this year <IconChartTrending />
        </div>
        <div className="leading-none text-muted-fg">
          Showing total subscribers for the last 3 months
        </div>
      </Card.Footer>
    </Card>
  )
}
