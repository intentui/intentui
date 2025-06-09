"use client"

import * as React from "react"

import { IconChartTrending } from "@intentui/icons"
import { Pie, PieChart } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const data = [
  { month: "january", sales: 186, fill: "var(--color-january)" },
  { month: "february", sales: 305, fill: "var(--color-february)" },
  { month: "march", sales: 237, fill: "var(--color-march)" },
  { month: "april", sales: 173, fill: "var(--color-april)" },
  { month: "may", sales: 209, fill: "var(--color-may)" }
]

const profitData = [
  { month: "january", profit: 80, fill: "var(--color-january)" },
  { month: "february", profit: 200, fill: "var(--color-february)" },
  { month: "march", profit: 120, fill: "var(--color-march)" },
  { month: "april", profit: 190, fill: "var(--color-april)" },
  { month: "may", profit: 130, fill: "var(--color-may)" }
]

const config = {
  visitors: {
    label: "Visitors"
  },
  sales: {
    label: "Sales"
  },
  profit: {
    label: "Profit"
  },
  january: {
    label: "January",
    color: "hsl(var(--primary-chart))"
  },
  february: {
    label: "February",
    color: "hsl(var(--secondary-chart))"
  },
  march: {
    label: "March",
    color: "hsl(var(--tertiary-chart))"
  },
  april: {
    label: "April",
    color: "hsl(var(--highlight-chart))"
  },
  may: {
    label: "May",
    color: "hsl(var(--accent-chart))"
  }
} satisfies ChartConfig

export default function PieChartStackedDemo() {
  return (
    <Card className="flex flex-col">
      <Card.Header className="items-center pb-0">
        <Card.Title>Pie Chart - Stacked</Card.Title>
        <Card.Description>January - June 2024</Card.Description>
      </Card.Header>
      <Card.Content className="flex-1 pb-0">
        <Chart
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-fg"
          config={config}
        >
          <PieChart>
            <Chart.Tooltip
              content={
                <Chart.TooltipContent
                  labelKey="visitors"
                  nameKey="month"
                  indicator="line"
                  labelFormatter={(_, payload) => {
                    return config[payload?.[0].dataKey as keyof typeof config].label
                  }}
                />
              }
            />
            <Pie data={data} dataKey="sales" outerRadius={60} />
            <Pie data={profitData} dataKey="profit" innerRadius={70} outerRadius={90} />
          </PieChart>
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
