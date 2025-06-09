"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const chartData = Array.from({ length: 12 }, (_, i) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  return {
    month: months[i],
    sales: 1000 + Math.floor(Math.random() * 300), // Random value for Sales
    expenses: 800 + Math.floor(Math.random() * 400), // Random value for Expenses
    profit: 200 + Math.floor(Math.random() * 900), // Random value for Profit
  }
})

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-1)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-2)",
  },
  profit: {
    label: "Profit",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig

export default function BarChartMultipleDemo() {
  return (
    <Card>
      <Card.Header
        title="Sales vs Expenses"
        description="The chart shows the sales and expenses for the last year."
        className="items-center pb-4"
      />
      <Card.Content>
        <Chart config={chartConfig} className="max-h-[300px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
            <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
            <Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
            <Bar dataKey="profit" fill="var(--color-profit)" radius={4} />
          </BarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
