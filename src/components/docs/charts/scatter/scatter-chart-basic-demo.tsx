"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CartesianGrid, Scatter, ScatterChart, XAxis, YAxis, ZAxis } from "recharts"

const data = Array.from({ length: 30 }, (_, index) => ({
  x: Math.floor(Math.random() * 500 + 50),
  y: Math.floor(Math.random() * 30000 + 2000),
  z: Math.floor(Math.random() * 200 + 10),
  store: `Store ${index + 1}`,
}))

const chartConfig = {
  performance: {
    label: "Store Performance",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function StorePerformanceAnalysis() {
  return (
    <Card>
      <Card.Header
        className="items-center"
        title="Store Performance Analysis"
        description="Insights into revenue, footfall, and average order value across stores"
      />
      <Card.Content>
        <Chart config={chartConfig} className="max-h-min min-h-32">
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              dataKey="x"
              name="Footfall"
              unit="k"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              type="number"
              dataKey="y"
              name="Revenue"
              unit="$"
              tickLine={false}
              axisLine={false}
            />
            <ZAxis type="number" dataKey="z" name="Avg Order Value" unit="k" />
            <ChartTooltip content={<ChartTooltipContent indicator="dashed" />} />
            <Scatter data={data} fill="var(--chart-1)" />
          </ScatterChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
