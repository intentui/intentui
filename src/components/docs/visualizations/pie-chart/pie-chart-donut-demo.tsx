"use client"

import { useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart } from "@/components/ui/pie-chart"

export default function PieChartDonutDemo() {
  const data = useMemo(
    () => [
      { name: "Rent", amount: 1200 },
      { name: "Groceries", amount: 450 },
      { name: "Utilities", amount: 200 },
      { name: "Entertainment", amount: 150 },
    ],
    [],
  )

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Monthly spend breakdown</CardTitle>
        <CardDescription>Shows where the money goes each month.</CardDescription>
      </CardHeader>
      <CardContent>
        <PieChart
          className="mx-auto h-56"
          data={data}
          dataKey="amount"
          nameKey="name"
          variant="donut"
          valueFormatter={(v) => `$${v}`}
          config={{
            Rent: { label: "Rent" },
            Groceries: { label: "Groceries" },
            Utilities: { label: "Utilities" },
            Entertainment: { label: "Entertainment" },
          }}
        />
      </CardContent>
    </Card>
  )
}
