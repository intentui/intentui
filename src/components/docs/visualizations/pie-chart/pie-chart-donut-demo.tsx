"use client"

import { Card } from "@/components/ui/card"
import { PieChart } from "@/components/ui/pie-chart"
import { useMemo } from "react"

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
      <Card.Header className="text-center">
        <Card.Title>Monthly spend breakdown</Card.Title>
        <Card.Description>Shows where the money goes each month.</Card.Description>
      </Card.Header>
      <Card.Content>
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
      </Card.Content>
    </Card>
  )
}
