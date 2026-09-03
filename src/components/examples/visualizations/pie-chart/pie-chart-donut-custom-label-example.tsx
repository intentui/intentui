'use client'

import { useMemo } from 'react'
import { Cell, Pie } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart } from '@/components/ui/pie-chart'

export default function PieChartDonutCustomLabelDemo() {
  const data = useMemo(
    () => [
      { name: 'Rent', amount: 1200 },
      { name: 'Groceries', amount: 450 },
      { name: 'Utilities', amount: 200 },
      { name: 'Entertainment', amount: 150 },
    ],
    []
  )

  const total = useMemo(() => data.reduce((sum, item) => sum + item.amount, 0), [data])

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Monthly spend breakdown</CardTitle>
        <CardDescription>Shows where the money goes each month.</CardDescription>
      </CardHeader>
      <CardContent>
        <PieChart
          containerHeight={200}
          data={data}
          dataKey="amount"
          nameKey="name"
          variant="donut"
          config={{
            Rent: { label: 'Rent' },
            Groceries: { label: 'Groceries' },
            Utilities: { label: 'Utilities' },
            Entertainment: { label: 'Entertainment' },
          }}
        >
          <Pie
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="80%"
            startAngle={90}
            endAngle={-270}
            strokeLinejoin="round"
          >
            {data.map((item, index) => (
              <Cell key={item.name} fill={`var(--chart-${index + 1})`} />
            ))}
          </Pie>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-fg font-bold text-xl"
          >
            ${total.toLocaleString()}
          </text>
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="hanging"
            className="fill-muted-fg text-xs"
          >
            Total spent
          </text>
        </PieChart>
      </CardContent>
    </Card>
  )
}
