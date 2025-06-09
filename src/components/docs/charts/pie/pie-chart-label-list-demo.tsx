"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LabelList, Pie, PieChart } from "recharts"

const chartData = [
  { manufacturer: "Tesla", marketShare: 500, fill: "var(--color-tesla)" },
  { manufacturer: "Rivian", marketShare: 150, fill: "var(--color-rivian)" },
  { manufacturer: "Ford", marketShare: 200, fill: "var(--color-ford)" },
  { manufacturer: "Lucid Motors", marketShare: 120, fill: "var(--color-lucid)" },
  { manufacturer: "Others", marketShare: 80, fill: "var(--color-others)" },
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

export default function PieChartLabelListDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-0"
        title="EV Market Share by Manufacturer"
        description="Jan - Jun 2024"
      />
      <Card.Content className="flex-1 pb-0">
        <Chart
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-bg"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="marketShare" hideLabel />} />
            <Pie data={chartData} dataKey="marketShare">
              <LabelList
                dataKey="manufacturer"
                className="fill-bg"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) => chartConfig[value]?.label}
              />
            </Pie>
          </PieChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
