"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Pie, PieChart } from "recharts"

const northAmericaData = [
  { region: "North America", sales: 500, fill: "var(--color-north-america)" },
  { region: "Europe", sales: 300, fill: "var(--color-europe)" },
  { region: "Asia", sales: 400, fill: "var(--color-asia)" },
  { region: "Africa", sales: 150, fill: "var(--color-africa)" },
  { region: "South America", sales: 100, fill: "var(--color-south-america)" },
]

const chartConfig = {
  sales: {
    label: "Sales",
  },
  northAmerica: {
    label: "North America",
    color: "var(--chart-1)",
  },
  europe: {
    label: "Europe",
    color: "var(--chart-2)",
  },
  asia: {
    label: "Asia",
    color: "var(--chart-3)",
  },
  africa: {
    label: "Africa",
    color: "var(--chart-4)",
  },
  southAmerica: {
    label: "South America",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export default function PieChartStackedDemo() {
  return (
    <Card>
      <Card.Header title="Sales Distribution by Region" description="January - June 2024" />
      <Card.Content className="flex-1 pb-0">
        <Chart config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelKey="sales"
                  nameKey="region"
                  indicator="line"
                  labelFormatter={(_, payload) => {
                    return chartConfig[payload?.[0]!.dataKey as keyof typeof chartConfig].label
                  }}
                />
              }
            />
            <Pie data={northAmericaData} dataKey="sales" outerRadius={60} />
          </PieChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
