"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, Cell, LabelList } from "recharts"

const chartData = [
  { month: "Jan", profitLoss: 1200 },
  { month: "Feb", profitLoss: 1500 },
  { month: "Mar", profitLoss: -700 },
  { month: "Apr", profitLoss: 2000 },
  { month: "May", profitLoss: -1500 },
  { month: "Jun", profitLoss: 1700 },
  { month: "Jul", profitLoss: -1200 },
  { month: "Aug", profitLoss: 1900 },
  { month: "Sep", profitLoss: -1400 },
  { month: "Oct", profitLoss: -1800 },
  { month: "Nov", profitLoss: 2100 },
  { month: "Dec", profitLoss: 1600 },
]

const chartConfig = {
  profitLoss: {
    label: "Profit/Loss",
  },
} satisfies ChartConfig

export default function BarChartNegativeDemo() {
  return (
    <Card>
      <Card.Header title="Monthly Profit and Loss" description="January - December 2024" />
      <Card.Content>
        <Chart className="aspect-[15/15] sm:aspect-[17/7]" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
            <Bar dataKey="profitLoss">
              <LabelList position="top" dataKey="month" fillOpacity={1} />
              {chartData.map((item) => (
                <Cell
                  key={item.month}
                  fill={item.profitLoss > 0 ? "var(--chart-1)" : "var(--chart-2)"}
                />
              ))}
            </Bar>
          </BarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
