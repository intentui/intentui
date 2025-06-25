"use client"

import { Card } from "@/components/ui/card"
import { PieChart } from "@/components/ui/pie-chart"
import { useMemo } from "react"

export default function PieChartDonutLabelDeviceDemo() {
  const data = useMemo(
    () => [
      { name: "Mobile", amount: 640 },
      { name: "Desktop", amount: 480 },
      { name: "Tablet", amount: 160 },
      { name: "Other", amount: 40 },
    ],
    [],
  )

  return (
    <Card>
      <Card.Header>
        <Card.Title>Device usage</Card.Title>
        <Card.Description>Breakdown of users by device type.</Card.Description>
      </Card.Header>
      <Card.Content>
        <PieChart
          className="mx-auto h-56"
          data={data}
          dataKey="amount"
          nameKey="name"
          variant="donut"
          showLabel
          valueFormatter={(v) => `${v} users`}
          config={{
            Mobile: { label: "Mobile" },
            Desktop: { label: "Desktop" },
            Tablet: { label: "Tablet" },
            Other: { label: "Other" },
          }}
        />
      </Card.Content>
    </Card>
  )
}
