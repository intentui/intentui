'use client'

import { ArrowUpTrayIcon, ChatBubbleLeftRightIcon, HeartIcon } from '@heroicons/react/24/outline'
import { useMemo } from 'react'
import type { LegendPayload } from 'recharts'
import { BarChart } from '@/components/ui/bar-chart'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useIsMobile } from '@/hooks/use-mobile'

function CustomLegend({ payload }: { payload?: ReadonlyArray<LegendPayload> }) {
  const icons: Record<string, React.ReactNode> = {
    likes: <HeartIcon />,
    comments: <ChatBubbleLeftRightIcon />,
    shares: <ArrowUpTrayIcon />,
  }

  return (
    <CardFooter className="flex justify-center gap-4 pt-6 text-sm">
      {payload?.map((item) => {
        const key = item.dataKey?.toString() ?? ''
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

export default function BarChartCustomLegendDemo() {
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
        <BarChart
          containerHeight={isMobile ? 200 : 300}
          data={data}
          dataKey="day"
          xAxisProps={{ interval: 0 }}
          legend={<CustomLegend />}
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
