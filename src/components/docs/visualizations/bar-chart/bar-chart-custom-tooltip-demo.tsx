"use client"

import { BarChart } from "@/components/ui/bar-chart"
import { Card } from "@/components/ui/card"
import { IconHeartFill, IconMessagesFill, IconUpload } from "@intentui/icons"
import { useMemo } from "react"
import type { TooltipProps as RechartsTooltipProps } from "recharts"
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"

interface CustomTooltipProps extends Partial<RechartsTooltipProps<ValueType, NameType>> {
  active?: boolean
  payload?: {
    name?: string
    value?: number
    dataKey?: string
    color?: string
  }[]
  label?: string
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null

  return (
    <div className="inset-ring inset-ring-fg/20 rounded-2xl bg-bg/10 p-3 text-xs backdrop-blur-2xl">
      <div className="mb-2 font-medium text-muted-fg">{label}</div>
      <div className="space-y-1">
        {payload.map((entry) => (
          <div key={entry.dataKey} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-muted-fg capitalize">
              {entry.dataKey === "likes" && <IconHeartFill style={{ color: entry.color }} />}
              {entry.dataKey === "comments" && <IconMessagesFill style={{ color: entry.color }} />}
              {entry.dataKey === "shares" && <IconUpload style={{ color: entry.color }} />}
              <span>{entry.name}</span>
            </div>
            <span className="font-mono text-fg tabular-nums">{entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function BarChartCustomTooltipDemo() {
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
      <Card.Header>
        <Card.Title>Engagement last 7d</Card.Title>
        <Card.Description>Likes, comments, and shares for the recent week.</Card.Description>
      </Card.Header>
      <Card.Content>
        <BarChart
          className="aspect-video h-56 sm:h-72"
          data={data}
          dataKey="day"
          xAxisProps={{ interval: 0 }}
          tooltip={<CustomTooltip />}
          config={{
            likes: { label: "Likes" },
            comments: { label: "Comments" },
            shares: { label: "Shares" },
          }}
        />
      </Card.Content>
    </Card>
  )
}
