"use client"

import { Card } from "@/components/ui/card"
import type { ChartConfig } from "@/components/ui/chart"
import { Chart } from "@/components/ui/chart"
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

const chartData = [{ product: "Laptops", sales: 200, fill: "var(--color-laptops)" }]

const chartConfig = {
  sales: {
    label: "Sales",
  },
  laptops: {
    label: "Laptops",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function ProductSalesOverview() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-0 text-center"
        title="Laptop Sales Performance"
        description="Tracking sales data for Jan - Dec 2024"
      />
      <Card.Content>
        <Chart config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-bg"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="sales" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-fg font-bold text-4xl">
                          {chartData[0]!.sales.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-fg">
                          Sales
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
