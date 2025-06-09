"use client"

import { Card } from "@/components/ui/card"
import { Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

const surveyData = [
  { category: "Customer Support", satisfaction: 85 },
  { category: "Product Quality", satisfaction: 90 },
  { category: "Delivery Speed", satisfaction: 78 },
  { category: "Ease of Use", satisfaction: 88 },
  { category: "Value for Money", satisfaction: 82 },
  { category: "Customer Service", satisfaction: 85 },
  { category: "Product Quality", satisfaction: 90 },
  { category: "Delivery Speed", satisfaction: 78 },
  { category: "Ease of Use", satisfaction: 88 },
  { category: "Value for Money", satisfaction: 82 },
  { category: "Customer Service", satisfaction: 85 },
  { category: "Product Quality", satisfaction: 90 },
  { category: "Delivery Speed", satisfaction: 78 },
  { category: "Ease of Use", satisfaction: 88 },
  { category: "Value for Money", satisfaction: 82 },
  { category: "Customer Service", satisfaction: 85 },
  { category: "Product Quality", satisfaction: 90 },
  { category: "Delivery Speed", satisfaction: 78 },
  { category: "Ease of Use", satisfaction: 88 },
  { category: "Value for Money", satisfaction: 82 },
  { category: "Customer Service", satisfaction: 85 },
  { category: "Product Quality", satisfaction: 90 },
  { category: "Delivery Speed", satisfaction: 78 },
  { category: "Ease of Use", satisfaction: 88 },
  { category: "Value for Money", satisfaction: 82 },
]

const chartConfig = {
  satisfaction: {
    label: "Satisfaction",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function BarChartLabelDemo() {
  return (
    <Card>
      <Card.Header
        title="Customer Satisfaction Survey"
        description="Satisfaction scores by category"
      />
      <Card.Content>
        <Chart className="h-[250px] w-full" config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={surveyData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="category" tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="satisfaction" fill="var(--color-satisfaction)" radius={8}>
              <LabelList position="top" offset={12} className="fill-fg" fontSize={12} />
            </Bar>
          </BarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
