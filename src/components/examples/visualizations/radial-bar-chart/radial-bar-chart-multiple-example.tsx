'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadialBarChart } from '@/components/ui/radial-bar-chart'

const data = [{ period: 'This month', uptime: 98, performance: 84, coverage: 72 }]

export default function RadialBarChartMultipleDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Service health</CardTitle>
        <CardDescription>Operational metrics for the current month.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadialBarChart
          containerHeight={320}
          data={data}
          dataKey="period"
          series={[
            { dataKey: 'uptime', name: 'Uptime' },
            { dataKey: 'performance', name: 'Performance' },
            { dataKey: 'coverage', name: 'Coverage' },
          ]}
          config={{
            uptime: { label: 'Uptime' },
            performance: { label: 'Performance' },
            coverage: { label: 'Coverage' },
          }}
          angleAxisProps={{ domain: [0, 100] }}
          chartProps={{ innerRadius: '20%', outerRadius: '90%', barSize: 16 }}
          tooltipProps={{ formatter: (value) => `${value}%` }}
        />
      </CardContent>
    </Card>
  )
}
