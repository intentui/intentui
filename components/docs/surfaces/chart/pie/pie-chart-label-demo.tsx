"use client"

import { IconChartTrending } from "@intentui/icons"
import { Pie, PieChart } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const data = [
  { brand: "apple", visitors: 175, fill: "var(--color-apple)" },
  { brand: "samsung", visitors: 100, fill: "var(--color-samsung)" },
  { brand: "huawei", visitors: 187, fill: "var(--color-huawei)" },
  { brand: "xiaomi", visitors: 173, fill: "var(--color-xiaomi)" },
  { brand: "google", visitors: 90, fill: "var(--color-google)" }
]

const config = {
  visitors: {
    label: "Visitors"
  },
  apple: {
    label: "Apple",
    color: "hsl(var(--primary-chart))"
  },
  samsung: {
    label: "Samsung",
    color: "hsl(var(--secondary-chart))"
  },
  huawei: {
    label: "Huawei",
    color: "hsl(var(--tertiary-chart))"
  },
  xiaomi: {
    label: "Xiaomi",
    color: "hsl(var(--highlight-chart))"
  },
  google: {
    label: "Google",
    color: "hsl(var(--accent-chart))"
  }
} satisfies ChartConfig

export default function PieChartLabelDemo() {
  return (
    <Card className="flex flex-col">
      <Card.Header className="items-center pb-0">
        <Card.Title>Pie Chart - Label</Card.Title>
        <Card.Description>January - June 2024</Card.Description>
      </Card.Header>
      <Card.Content className="flex-1 pb-0">
        <Chart
          config={config}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-fg"
        >
          <PieChart>
            <Chart.Tooltip content={<Chart.TooltipContent hideLabel />} />
            <Pie data={data} dataKey="visitors" label nameKey="brand" />
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
