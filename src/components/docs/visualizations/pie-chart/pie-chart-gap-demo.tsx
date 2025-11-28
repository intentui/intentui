"use client"

import { useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart } from "@/components/ui/pie-chart"

export default function PieChartGapDemo() {
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
      <CardHeader className="text-center">
        <CardTitle>Traffic source breakdown</CardTitle>
        <CardDescription>Where your website traffic is coming from.</CardDescription>
      </CardHeader>
      <CardContent>
        <PieChart
          containerHeight={200}
          data={data}
          dataKey="amount"
          nameKey="name"
          variant="donut"
          showLabel
          valueFormatter={(v) => `${v} visits`}
          pieProps={{
            paddingAngle: 20,
            startOffset: 30,
          }}
          config={{
            Organic: { label: "Organic" },
            Paid: { label: "Paid" },
            Referral: { label: "Referral" },
            Social: { label: "Social" },
          }}
        />
      </CardContent>
    </Card>
  )
}
