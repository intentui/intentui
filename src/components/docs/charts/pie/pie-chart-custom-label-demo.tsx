"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Pie, PieChart } from "recharts"

const chartData = [
  { category: "Sales", amount: 275, fill: "var(--color-sales)" },
  { category: "Marketing", amount: 200, fill: "var(--color-marketing)" },
  { category: "IT", amount: 187, fill: "var(--color-it)" },
  { category: "HR", amount: 173, fill: "var(--color-hr)" },
  { category: "Operations", amount: 90, fill: "var(--color-operations)" },
]

const chartConfig = {
  amount: {
    label: "Amount",
  },
  sales: {
    label: "Sales",
    color: "var(--chart-1)",
  },
  marketing: {
    label: "Marketing",
    color: "var(--chart-2)",
  },
  it: {
    label: "IT",
    color: "var(--chart-3)",
  },
  hr: {
    label: "HR",
    color: "var(--chart-4)",
  },
  operations: {
    label: "Operations",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export default function PieChartCustomLabelDemo() {
  return (
    <Card>
      <Card.Header className="items-center pb-0">
        <Card.Title>Departmental Budget Allocation</Card.Title>
        <Card.Description>Jan - Jun 2024</Card.Description>
      </Card.Header>
      <Card.Content className="flex-1 pb-0">
        <Chart config={chartConfig} className="mx-auto aspect-square max-h-[250px] px-0">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="amount" hideLabel />} />
            <Pie
              data={chartData}
              dataKey="amount"
              labelLine={false}
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="var(--fg)"
                  >
                    {payload.amount}
                  </text>
                )
              }}
              nameKey="category"
            />
          </PieChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
