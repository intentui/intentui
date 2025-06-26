"use client"

import { Card } from "@/components/ui/card"
import { PieChart } from "@/components/ui/pie-chart"
import { useMemo } from "react"

export default function PieChartTrafficSourceDemo() {
  const data = useMemo(
    () => [
      { name: "Organic", amount: 1240 },
      { name: "Paid", amount: 880 },
      { name: "Referral", amount: 360 },
      { name: "Social", amount: 220 },
    ],
    [],
  )

  return (
    <Card>
      <Card.Header className="text-center">
        <Card.Title>Traffic source breakdown</Card.Title>
        <Card.Description>Where your website traffic is coming from.</Card.Description>
      </Card.Header>
      <Card.Content>
        <PieChart
          className="mx-auto h-56"
          data={data}
          dataKey="amount"
          nameKey="name"
          config={{
            Organic: { label: "Organic" },
            Paid: { label: "Paid" },
            Referral: { label: "Referral" },
            Social: { label: "Social" },
          }}
        />
      </Card.Content>
    </Card>
  )
}
