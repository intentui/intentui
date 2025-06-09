"use client"

import { IconChartTrending } from "@intentui/icons"
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const chartData = [{ browser: "safari", visitors: 1260, fill: "var(--color-safari)" }]

const config = {
  visitors: {
    label: "Visitors"
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--secondary-chart))"
  }
} satisfies ChartConfig

export default function RadialChartShapeDemo() {
  return (
    <Card className="flex flex-col">
      <Card.Header className="items-center pb-0">
        <Card.Title>Radial Chart - Shape</Card.Title>
        <Card.Description>January - June 2024</Card.Description>
      </Card.Header>
      <Card.Content className="flex-1 pb-0">
        <Chart className="min-h-[250px] max-h-[250px] mx-auto aspect-square w-full" config={config}>
          <RadialBarChart data={chartData} endAngle={100} innerRadius={80} outerRadius={140}>
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-bg"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="visitors" background />
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
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-fg text-4xl font-bold">
                          {chartData[0].visitors.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-fg">
                          Visitors
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
      <Card.Footer className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <IconChartTrending />
        </div>
        <div className="leading-none text-muted-fg">
          Showing total visitors for the last 6 months
        </div>
      </Card.Footer>
    </Card>
  )
}
