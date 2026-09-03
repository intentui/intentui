'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadialBarChart } from '@/components/ui/radial-bar-chart'

const data = [{ metric: 'Goal', progress: 76 }]

export default function RadialBarChartGaugeDemo() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Quarterly goal</CardTitle>
        <CardDescription>Revenue target completion.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadialBarChart
          containerHeight={240}
          data={data}
          dataKey="metric"
          series={[
            {
              dataKey: 'progress',
              name: 'Progress',
              radialBarProps: { cornerRadius: 12, background: true },
            },
          ]}
          config={{ progress: { label: 'Progress', color: 'var(--color-emerald-500)' } }}
          angleAxisProps={{ domain: [0, 100] }}
          chartProps={{
            startAngle: 180,
            endAngle: 0,
            innerRadius: '65%',
            outerRadius: '95%',
          }}
          tooltipProps={{ formatter: (value) => `${value}%` }}
        >
          <text
            x="50%"
            y="72%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-fg font-semibold text-2xl"
          >
            76%
          </text>
        </RadialBarChart>
      </CardContent>
    </Card>
  )
}
