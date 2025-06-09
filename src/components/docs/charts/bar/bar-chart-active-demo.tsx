"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts"

const chartData = [
  { os: "Windows", users: 320, fill: "var(--chart-1)" },
  { os: "MacOS", users: 200, fill: "var(--chart-2)" },
  { os: "Linux", users: 150, fill: "var(--chart-3)" },
  { os: "Android", users: 250, fill: "var(--chart-4)" },
  { os: "iOS", users: 180, fill: "var(--chart-5)" },
  { os: "ChromeOS", users: 90, fill: "var(--chart-1)" },
  { os: "Ubuntu", users: 130, fill: "var(--chart-2)" },
  { os: "Fedora", users: 100, fill: "var(--chart-3)" },
  { os: "FreeBSD", users: 60, fill: "var(--chart-5)" },
]

const chartConfig = {
  users: {
    label: "Users",
  },
  windows: {
    label: "Windows",
    color: "var(--chart-1)",
  },
  macos: {
    label: "MacOS",
    color: "var(--chart-2)",
  },
  linux: {
    label: "Linux",
    color: "var(--chart-3)",
  },
  android: {
    label: "Android",
    color: "var(--chart-4)",
  },
  ios: {
    label: "iOS",
    color: "var(--chart-5)",
  },
  chromeos: {
    label: "ChromeOS",
    color: "var(--chart-1)",
  },
  ubuntu: {
    label: "Ubuntu",
    color: "var(--chart-2)",
  },
  fedora: {
    label: "Fedora",
    color: "var(--chart-3)",
  },
  harmonyos: {
    label: "HarmonyOS",
    color: "var(--chart-4)",
  },
  freebsd: {
    label: "FreeBSD",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export default function BarChartActiveDemo() {
  return (
    <Card>
      <Card.Header title="Operating System Usage" description="User distribution by OS in 2024" />
      <Card.Content>
        <Chart config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="os"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value.toLowerCase() as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey="users"
              strokeWidth={2}
              radius={8}
              activeIndex={1}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                )
              }}
            />
          </BarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
