"use client"

import { useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart } from "@/components/ui/pie-chart"

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
      <CardHeader className="text-center">
        <CardTitle>Traffic source breakdown</CardTitle>
        <CardDescription>Where your website traffic is coming from.</CardDescription>
      </CardHeader>
      <CardContent>
        <PieChart
          className="mx-auto h-56"
          data={data}
          dataKey="amount"
          nameKey="name"
          config={{
            Organic: {
              label: "Organic",
              color: "var(--color-emerald-500)",
            },
            Paid: { label: "Paid", color: "var(--color-rose-500)" },
            Referral: {
              label: "Referral",
              color: "var(--color-sky-500)",
            },
            Social: {
              label: "Social",
              color: "var(--color-indigo-500)",
            },
          }}
        />
      </CardContent>
    </Card>
  )
}
