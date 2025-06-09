"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

const projectData = [
  { team: "Engineering", completed: 42, ongoing: 15 },
  { team: "Design", completed: 30, ongoing: 5 },
  { team: "Marketing", completed: 25, ongoing: 10 },
  { team: "Sales", completed: 20, ongoing: 8 },
  { team: "Support", completed: 35, ongoing: 12 },
  { team: "Engineering", completed: 42, ongoing: 15 },
  { team: "Design", completed: 30, ongoing: 5 },
  { team: "Marketing", completed: 25, ongoing: 10 },
  { team: "Sales", completed: 20, ongoing: 8 },
  { team: "Support", completed: 35, ongoing: 12 },
  { team: "Engineering", completed: 42, ongoing: 15 },
  { team: "Design", completed: 30, ongoing: 5 },
]

const chartConfig = {
  completed: {
    label: "Completed",
    color: "var(--chart-1)",
  },
  ongoing: {
    label: "Ongoing",
    color: "var(--chart-2)",
  },
  label: {
    color: "var(--bg)",
  },
} satisfies ChartConfig

export default function BarChartCustomLabelDemo() {
  return (
    <Card>
      <Card.Header
        title="Team Project Status"
        description="Completed vs Ongoing Projects by Team"
      />
      <Card.Content>
        <Chart config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={projectData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="team"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <XAxis dataKey="completed" type="number" hide />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Bar dataKey="completed" layout="vertical" fill="var(--color-completed)" radius={4}>
              <LabelList
                dataKey="team"
                position="insideLeft"
                offset={8}
                className="fill-(--color-label)"
                fontSize={12}
              />
              <LabelList
                dataKey="completed"
                position="right"
                offset={8}
                className="fill-fg"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
