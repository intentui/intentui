"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

const chartData = [
  { month: "Jan", revenue: 45000, expenses: 30000 },
  { month: "Feb", revenue: 50000, expenses: 32000 },
  { month: "Mar", revenue: 47000, expenses: 31000 },
  { month: "Apr", revenue: 52000, expenses: 35000 },
  { month: "May", revenue: 48000, expenses: 33000 },
  { month: "Jun", revenue: 51000, expenses: 34000 },
  { month: "Jul", revenue: 53000, expenses: 36000 },
  { month: "Aug", revenue: 55000, expenses: 37000 },
  { month: "Sep", revenue: 54000, expenses: 35000 },
  { month: "Oct", revenue: 56000, expenses: 38000 },
  { month: "Nov", revenue: 58000, expenses: 39000 },
  { month: "Dec", revenue: 60000, expenses: 40000 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function RadarChartCustomLabelDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-4"
        title="Monthly Financial Overview"
        description="Revenue and expenses for Jan - Dec 2024"
      />
      <Card.Content>
        <Chart config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <RadarChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              bottom: 10,
              left: 10,
            }}
          >
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <PolarAngleAxis
              dataKey="month"
              tick={({ x, y, textAnchor, index, ...props }) => {
                const data = chartData[index]!

                return (
                  <text
                    x={x}
                    y={index === 0 ? y - 10 : y}
                    textAnchor={textAnchor}
                    fontSize={13}
                    fontWeight={500}
                    {...props}
                  >
                    <tspan>{data.revenue}</tspan>
                    <tspan className="fill-muted-fg">/</tspan>
                    <tspan>{data.expenses}</tspan>
                    <tspan x={x} dy={"1rem"} fontSize={12} className="fill-muted-fg">
                      {data.month}
                    </tspan>
                  </text>
                )
              }}
            />

            <PolarGrid />
            <Radar dataKey="revenue" fill="var(--color-revenue)" fillOpacity={0.6} />
            <Radar dataKey="expenses" fill="var(--color-expenses)" />
          </RadarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
