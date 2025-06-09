"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CartesianGrid, LabelList, Line, LineChart } from "recharts"

const chartData = [
  { platform: "Instagram", users: 275, fill: "var(--color-instagram)" },
  { platform: "TikTok", users: 200, fill: "var(--color-tiktok)" },
  { platform: "Twitter", users: 187, fill: "var(--color-twitter)" },
  { platform: "LinkedIn", users: 173, fill: "var(--color-linkedin)" },
  { platform: "Other", users: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  users: {
    label: "Users",
    color: "var(--chart-2)",
  },
  Instagram: {
    label: "Instagram",
    color: "var(--chart-1)",
  },
  TikTok: {
    label: "TikTok",
    color: "var(--chart-2)",
  },
  Twitter: {
    label: "Twitter",
    color: "var(--chart-3)",
  },
  LinkedIn: {
    label: "LinkedIn",
    color: "var(--chart-4)",
  },
  Other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export default function LineChartCustomLabelDemo() {
  return (
    <Card>
      <Card.Header title="Platform User Growth" description="Jan - Dec 2024" />
      <Card.Content>
        <Chart config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" nameKey="users" hideLabel />}
            />
            <Line
              dataKey="users"
              type="natural"
              stroke="var(--color-users)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-users)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-fg"
                fontSize={12}
                dataKey="platform"
                formatter={(value: keyof typeof chartConfig) => chartConfig[value]?.label}
              />
            </Line>
          </LineChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
