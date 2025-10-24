"use client"

import { ArrowUpTrayIcon, ChatBubbleLeftRightIcon, HeartIcon } from "@heroicons/react/24/outline"
import { type ReactNode, useMemo } from "react"
import type { LegendPayload } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LineChart } from "@/components/ui/line-chart"

function CustomLegend({ payload }: { payload?: ReadonlyArray<LegendPayload> }) {
  const icons: Record<string, ReactNode> = {
    likes: <HeartIcon className="size-4" />,
    comments: <ChatBubbleLeftRightIcon className="size-4" />,
    shares: <ArrowUpTrayIcon className="size-4" />,
  }

  return (
    <CardFooter className="flex justify-center gap-4 pt-6 text-sm">
      {payload?.map((item) => {
        const key = item.dataKey?.toString() ?? ""
        return (
          <div key={key} className="flex items-center gap-2">
            <span style={{ color: item.color }}>{icons[key]}</span>
            <span>{item.value}</span>
          </div>
        )
      })}
    </CardFooter>
  )
}

export default function LineChartCustomLegendDemo() {
  const data = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        day: `Day ${i + 1}`,
        likes: Math.floor(100 + Math.random() * 300),
        comments: Math.floor(20 + Math.random() * 80),
        shares: Math.floor(10 + Math.random() * 50),
      })),
    [],
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Engagement last 7d</CardTitle>
        <CardDescription>Likes, comments, and shares for the recent week.</CardDescription>
      </CardHeader>
      <CardContent>
        <LineChart
          className="aspect-video h-56 min-h-[224px] sm:h-72 sm:min-h-[288px]"
          data={data}
          dataKey="day"
          xAxisProps={{ interval: 0 }}
          legend={<CustomLegend />}
          config={{
            likes: { label: "Likes" },
            comments: { label: "Comments" },
            shares: { label: "Shares" },
          }}
        />
      </CardContent>
    </Card>
  )
}
