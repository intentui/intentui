"use client"

import { IconChartTrending } from "@intentui/icons"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const data = [
  { brand: "apple", visitors: 175, fill: "var(--color-apple)" },
  { brand: "samsung", visitors: 100, fill: "var(--color-samsung)" },
  { brand: "huawei", visitors: 187, fill: "var(--color-huawei)" },
  { brand: "xiaomi", visitors: 173, fill: "var(--color-xiaomi)" },
  { brand: "google", visitors: 90, fill: "var(--color-google)" },
  { brand: "motorola", visitors: 120, fill: "var(--color-motorola)" },
  { brand: "nokia", visitors: 150, fill: "var(--color-nokia)" },
  { brand: "oppo", visitors: 130, fill: "var(--color-oppo)" }
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
    color: "hsl(var(--primary-chart))"
  },
  huawei: {
    label: "Huawei",
    color: "hsl(var(--primary-chart))"
  },
  xiaomi: {
    label: "Xiaomi",
    color: "hsl(var(--primary-chart))"
  },
  google: {
    label: "Google",
    color: "hsl(var(--primary-chart))"
  },
  motorola: {
    label: "Motorola",
    color: "hsl(var(--primary-chart))"
  },
  nokia: {
    label: "Nokia",
    color: "hsl(var(--primary-chart))"
  },
  oppo: {
    label: "Oppo",
    color: "hsl(var(--primary-chart))"
  }
} satisfies ChartConfig

export default function BarChartMixedDemo() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Bar Chart - Mixed</Card.Title>
        <Card.Description>January - September 2024</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart className="min-h-[250px] max-h-[250px] w-full" config={config}>
          <BarChart
            accessibilityLayer
            data={data}
            layout="vertical"
            margin={{
              left: 0
            }}
          >
            <YAxis
              dataKey="brand"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => config[value as keyof typeof config]?.label}
            />
            <XAxis dataKey="visitors" type="number" hide />
            <Chart.Tooltip cursor={false} content={<Chart.TooltipContent hideLabel />} />
            <Bar dataKey="visitors" layout="vertical" radius={5} />
          </BarChart>
        </Chart>
      </Card.Content>
      <Card.Footer className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <IconChartTrending />
        </div>
        <div className="leading-none text-muted-fg">
          Showing total visitors for the last 9 months
        </div>
      </Card.Footer>
    </Card>
  )
}
