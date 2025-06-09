"use client"

import { IconChartTrending } from "@intentui/icons"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const data = [{ month: "january", sales: 1260, profit: 570 }]

const config = {
  sales: {
    label: "Sales",
    color: "hsl(var(--primary-chart))"
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--secondary-chart))"
  }
} satisfies ChartConfig

export default function RadialChartStackedDemo() {
  const totalVisitors = data[0].sales + data[0].profit

  return (
    <Card className="flex flex-col">
      <Card.Header className="items-center pb-0">
        <Card.Title>Radial Chart - Stacked</Card.Title>
        <Card.Description>August - December 2023</Card.Description>
      </Card.Header>
      <Card.Content className="flex flex-1 items-center pb-0">
        <Chart className="min-h-[250px] max-h-[250px] w-full mx-auto aspect-square" config={config}>
          <RadialBarChart data={data} endAngle={180} innerRadius={80} outerRadius={130}>
            <Chart.Tooltip cursor={false} content={<Chart.TooltipContent hideLabel />} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-fg text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 4} className="fill-muted-fg">
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="sales"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-sales)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="profit"
              fill="var(--color-profit)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </Chart>
      </Card.Content>
      <Card.Footer className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Profit increased by 5.2% this year <IconChartTrending />
        </div>
        <div className="leading-none text-muted-fg">
          Showing total profit and sales for the last 3 months
        </div>
      </Card.Footer>
    </Card>
  )
}
