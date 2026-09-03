'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadarChart } from '@/components/ui/radar-chart'

const data = [
  { metric: 'Speed', current: 82, previous: 68 },
  { metric: 'Quality', current: 91, previous: 84 },
  { metric: 'Reliability', current: 88, previous: 78 },
  { metric: 'Support', current: 76, previous: 72 },
  { metric: 'Value', current: 85, previous: 80 },
]

export default function RadarChartMultipleDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product health</CardTitle>
        <CardDescription>Compare this quarter with the previous quarter.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadarChart
          containerHeight={320}
          data={data}
          dataKey="metric"
          series={[
            { dataKey: 'current', name: 'Current quarter' },
            { dataKey: 'previous', name: 'Previous quarter' },
          ]}
          config={{
            current: { label: 'Current quarter' },
            previous: { label: 'Previous quarter' },
          }}
          radiusAxisProps={{ domain: [0, 100] }}
        />
      </CardContent>
    </Card>
  )
}
