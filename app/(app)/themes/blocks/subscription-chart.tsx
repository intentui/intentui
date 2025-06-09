"use client"

import * as React from "react"

import { IconChartTrending } from "@intentui/icons"
import { Label, Pie, PieChart } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

export const description = "A donut chart with subscription plan distribution"

const chartData = [
  { plan: "Basic", subscribers: 1450, fill: "var(--color-basic)" },
  { plan: "Standard", subscribers: 1300, fill: "var(--color-standard)" },
  { plan: "Premium", subscribers: 1200, fill: "var(--color-premium)" },
  { plan: "Pro", subscribers: 1250, fill: "var(--color-pro)" },
  { plan: "Enterprise", subscribers: 1100, fill: "var(--color-enterprise)" }
]

const chartConfig = {
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

export function SubscriptionChart() {
  const totalSubscribers = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.subscribers, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <Card.Header className="items-center pb-0">
        <Card.Title>Subscription</Card.Title>
        <Card.Description>January - September 2024</Card.Description>
      </Card.Header>
      <Card.Content className="flex-1 pb-0">
        <Chart config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <Chart.Tooltip cursor={false} content={<Chart.TooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="subscribers"
              nameKey="plan"
              innerRadius={60}
              strokeWidth={5}
            >
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
          Growth by 8.5% this month <IconChartTrending />
        </div>
        <div className="leading-none text-muted-fg">
          Showing total subscribers for the last 9 months
        </div>
      </Card.Footer>
    </Card>
  )
}
