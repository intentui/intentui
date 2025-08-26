"use client"

import { useMemo, useState } from "react"
import type { Key } from "react-aria-components"
import { Card } from "@/components/ui/card"
import { LineChart } from "@/components/ui/line-chart"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function LineChartControlledSmart() {
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
      <Card.Header>
        <Card.Title>Engagement</Card.Title>
        <Card.Description>
          Likes, comments, and shares over a dynamic time range.
        </Card.Description>
        <Card.Action>
          <ToggleGroup size="sm" selectedKeys={selected} onSelectionChange={setSelected}>
            <ToggleGroupItem id="3d">3d</ToggleGroupItem>
            <ToggleGroupItem id="7d">7d</ToggleGroupItem>
            <ToggleGroupItem id="2w">2w</ToggleGroupItem>
            <ToggleGroupItem id="1m">1m</ToggleGroupItem>
          </ToggleGroup>
        </Card.Action>
      </Card.Header>
      <Card.Content>
        <LineChart
          className="aspect-video h-56 min-h-[224px] sm:h-72 sm:min-h-[288px]"
          data={engagementData}
          dataKey="label"
          xAxisProps={{ interval: showAllTicks ? 0 : undefined }}
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
