"use client"

import { useMemo, useState } from "react"
import type { Key } from "react-aria-components/Breadcrumbs"
import { AreaChart } from "@/components/ui/area-chart"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useIsMobile } from "@/hooks/use-mobile"

export default function AreaChartControlledSmart() {
  const isMobile = useIsMobile()
  const [selected, setSelected] = useState<Set<Key>>(new Set(["7d"]))
  const selectedKey = Array.from(selected)[0] as string | undefined

  const engagementData = useMemo(() => {
    if (selectedKey === "1m") {
      return Array.from({ length: 4 }, (_, i) => ({
        label: `Week ${i + 1}`,
        likes: Math.floor(400 + Math.random() * 300),
        comments: Math.floor(100 + Math.random() * 100),
        shares: Math.floor(50 + Math.random() * 50),
      }))
    }

    if (selectedKey === "2w") {
      return Array.from({ length: 2 }, (_, i) => ({
        label: `Week ${i + 1}`,
        likes: Math.floor(800 + Math.random() * 400),
        comments: Math.floor(200 + Math.random() * 150),
        shares: Math.floor(100 + Math.random() * 80),
      }))
    }

    const lengthMap: Record<string, number> = { "3d": 3, "7d": 7 }
    const length = lengthMap[selectedKey ?? "7d"] ?? 7

    return Array.from({ length }, (_, i) => ({
      label: `Day ${i + 1}`,
      likes: Math.floor(100 + Math.random() * 300),
      comments: Math.floor(20 + Math.random() * 80),
      shares: Math.floor(10 + Math.random() * 50),
    }))
  }, [selectedKey])

  const showAllTicks = selectedKey === "3d" || selectedKey === "7d"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Engagement</CardTitle>
        <CardDescription>Likes, comments, and shares over a dynamic time range.</CardDescription>
        <CardAction>
          <ToggleGroup size="sm" selectedKeys={selected} onSelectionChange={setSelected}>
            <ToggleGroupItem id="3d">3d</ToggleGroupItem>
            <ToggleGroupItem id="7d">7d</ToggleGroupItem>
            <ToggleGroupItem id="2w">2w</ToggleGroupItem>
            <ToggleGroupItem id="1m">1m</ToggleGroupItem>
          </ToggleGroup>
        </CardAction>
      </CardHeader>
      <CardContent>
        <AreaChart
          containerHeight={isMobile ? 200 : 300}
          data={engagementData}
          dataKey="label"
          xAxisProps={{ interval: showAllTicks ? 0 : undefined }}
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
