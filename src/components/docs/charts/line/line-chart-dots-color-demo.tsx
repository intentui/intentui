"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CartesianGrid, Dot, Line, LineChart } from "recharts"

const chartData = [
  { department: "Marketing", expenses: 275, fill: "var(--color-marketing)" },
  { department: "Sales", expenses: 200, fill: "var(--color-sales)" },
  { department: "IT", expenses: 187, fill: "var(--color-it)" },
  { department: "HR", expenses: 173, fill: "var(--color-hr)" },
  { department: "Operations", expenses: 90, fill: "var(--color-operations)" },
]

const chartConfig = {
  expenses: {
    label: "Expenses",
    color: "var(--chart-2)",
  },
  marketing: {
    label: "Marketing",
    color: "var(--chart-1)",
  },
  sales: {
    label: "Sales",
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

export default function LineChartDotsColorDemo() {
  return (
    <Card>
      <Card.Header title="Departmental Expenses Overview" description="Jan - Jun 2024" />
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
              content={<ChartTooltipContent indicator="line" nameKey="expenses" hideLabel />}
            />
            <Line
              dataKey="expenses"
              type="natural"
              stroke="var(--color-expenses)"
              strokeWidth={2}
              dot={({ payload, ...props }) => {
                return (
                  <Dot
                    key={payload.department}
                    r={5}
                    cx={props.cx}
                    cy={props.cy}
                    fill={payload.fill}
                    stroke={payload.fill}
                  />
                )
              }}
            />
          </LineChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
