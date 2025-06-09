"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Pie, PieChart } from "recharts"

const chartData = [
  { manufacturer: "Tesla", marketShare: 275, fill: "var(--color-tesla)" },
  { manufacturer: "Rivian", marketShare: 200, fill: "var(--color-rivian)" },
  { manufacturer: "Ford", marketShare: 187, fill: "var(--color-ford)" },
  { manufacturer: "Lucid Motors", marketShare: 173, fill: "var(--color-lucid)" },
  { manufacturer: "Others", marketShare: 90, fill: "var(--color-others)" },
]

const chartConfig = {
  marketShare: {
    label: "Market Share",
  },
  tesla: {
    label: "Tesla",
    color: "var(--chart-1)",
  },
  rivian: {
    label: "Rivian",
    color: "var(--chart-2)",
  },
  ford: {
    label: "Ford",
    color: "var(--chart-3)",
  },
  lucid: {
    label: "Lucid Motors",
    color: "var(--chart-4)",
  },
  others: {
    label: "Others",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export default function PieChartNoneSeparatorDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-0"
        title="Market Share"
        description="January - June 2024"
      />
      <Card.Content className="flex-1 pb-0">
        <Chart config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="marketShare" nameKey="manufacturer" stroke="0" />
          </PieChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
