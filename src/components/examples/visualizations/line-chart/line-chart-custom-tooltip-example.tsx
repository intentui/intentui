'use client'

import { ChatBubbleLeftEllipsisIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline'
import { useMemo } from 'react'
import type { TooltipProps as RechartsTooltipProps } from 'recharts'
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LineChart } from '@/components/ui/line-chart'
import { useIsMobile } from '@/hooks/use-mobile'

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
              {entry.dataKey === 'likes' && <HeartIcon style={{ color: entry.color }} />}
              {entry.dataKey === 'comments' && (
                <ChatBubbleLeftEllipsisIcon style={{ color: entry.color }} />
              )}
              {entry.dataKey === 'shares' && <ShareIcon style={{ color: entry.color }} />}
              <span>{entry.name}</span>
            </div>
            <span className="font-mono text-fg tabular-nums">{entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function LineChartCustomTooltipDemo() {
  const isMobile = useIsMobile()
  const data = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        day: `Day ${i + 1}`,
        likes: Math.floor(100 + Math.random() * 300),
        comments: Math.floor(20 + Math.random() * 80),
        shares: Math.floor(10 + Math.random() * 50),
      })),
    []
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Engagement last 7d</CardTitle>
        <CardDescription>Likes, comments, and shares for the recent week.</CardDescription>
      </CardHeader>
      <CardContent>
        <LineChart
          containerHeight={isMobile ? 200 : 300}
          data={data}
          dataKey="day"
          xAxisProps={{ interval: 0 }}
          tooltip={<CustomTooltip />}
          config={{
            likes: { label: 'Likes' },
            comments: { label: 'Comments' },
            shares: { label: 'Shares' },
          }}
        />
      </CardContent>
    </Card>
  )
}
