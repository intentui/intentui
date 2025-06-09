"use client"

import { IconChartTrending } from "@intentui/icons"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

const data = [
  { month: "January", onlineCourses: 1200, webinars: 800 },
  { month: "February", onlineCourses: 800, webinars: 950 },
  { month: "March", onlineCourses: 1200, webinars: 1200 },
  { month: "April", onlineCourses: 1000, webinars: 1500 },
  { month: "May", onlineCourses: 1200, webinars: 1300 },
  { month: "June", onlineCourses: 1200, webinars: 1700 },
  { month: "July", onlineCourses: 1500, webinars: 1400 },
  { month: "August", onlineCourses: 1400, webinars: 2100 },
  { month: "September", onlineCourses: 2300, webinars: 1600 },
  { month: "October", onlineCourses: 1173, webinars: 2190 },
  { month: "November", onlineCourses: 1200, webinars: 1600 },
  { month: "December", onlineCourses: 1200, webinars: 1600 },
  { month: "January", onlineCourses: 1200, webinars: 800 },
  { month: "February", onlineCourses: 800, webinars: 950 },
  { month: "March", onlineCourses: 1200, webinars: 1200 },
  { month: "April", onlineCourses: 1000, webinars: 1500 },
  { month: "May", onlineCourses: 1200, webinars: 1300 },
  { month: "June", onlineCourses: 1200, webinars: 1700 },
  { month: "July", onlineCourses: 1500, webinars: 1400 },
  { month: "August", onlineCourses: 1400, webinars: 2100 }
]

const config = {
  onlineCourses: {
    label: "Online Courses",
    color: "hsl(var(--primary-chart))"
  },
  webinars: {
    label: "Webinars",
    color: "hsl(var(--secondary-chart))"
  }
} satisfies ChartConfig

export default function BarChartMultipleDemo() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Bar Chart - Multiple</Card.Title>
        <Card.Description>January - October 2024</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart className="min-h-[250px] max-h-[250px] w-full" config={config}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Chart.Tooltip cursor={false} content={<Chart.TooltipContent indicator="dashed" />} />
            <Bar dataKey="onlineCourses" fill="var(--color-onlineCourses)" radius={0} />
            <Bar dataKey="webinars" fill="var(--color-webinars)" radius={0} />
          </BarChart>
        </Chart>
      </Card.Content>
      <Card.Footer className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Online courses increased by 15.2% this year <IconChartTrending />
        </div>
        <div className="leading-none text-muted-fg">
          Showing total revenue for january 2023 to august 2024
        </div>
      </Card.Footer>
    </Card>
  )
}
