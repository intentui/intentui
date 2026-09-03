'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadarChart } from '@/components/ui/radar-chart'

const data = [
  { category: 'Performance', score: 87 },
  { category: 'Accessibility', score: 94 },
  { category: 'SEO', score: 79 },
  { category: 'Best practices', score: 91 },
  { category: 'Security', score: 84 },
]

export default function RadarChartCircularGridDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Site audit</CardTitle>
        <CardDescription>Latest quality scores across five categories.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadarChart
          containerHeight={300}
          data={data}
          dataKey="category"
          series={[{ dataKey: 'score', name: 'Audit score' }]}
          config={{ score: { label: 'Audit score' } }}
          polarGridProps={{ gridType: 'circle' }}
          radiusAxisProps={{ domain: [0, 100], tick: true, tickCount: 6 }}
        />
      </CardContent>
    </Card>
  )
}
