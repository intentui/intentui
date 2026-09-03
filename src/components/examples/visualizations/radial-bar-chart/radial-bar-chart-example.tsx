'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadialBarChart } from '@/components/ui/radial-bar-chart'

const data = [
  { device: 'Desktop', visitors: 1860 },
  { device: 'Mobile', visitors: 1320 },
  { device: 'Tablet', visitors: 540 },
]

export default function RadialBarChartDemo() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Visitors by device</CardTitle>
        <CardDescription>Unique visitors during the last 30 days.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadialBarChart
          containerHeight={300}
          data={data}
          dataKey="visitors"
          nameKey="device"
          series={[{ dataKey: 'visitors', name: 'Visitors' }]}
          config={{
            Desktop: { label: 'Desktop' },
            Mobile: { label: 'Mobile' },
            Tablet: { label: 'Tablet' },
          }}
          chartProps={{ innerRadius: '25%', outerRadius: '90%' }}
        />
      </CardContent>
    </Card>
  )
}
