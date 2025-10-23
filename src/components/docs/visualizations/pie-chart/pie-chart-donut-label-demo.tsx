"use client"

import { useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart } from "@/components/ui/pie-chart"

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
      <CardHeader className="text-center">
        <CardTitle>Device usage</CardTitle>
        <CardDescription>Breakdown of users by device type.</CardDescription>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  )
}
