'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadarChart } from '@/components/ui/radar-chart'

const data = [
  { skill: 'Design', score: 92 },
  { skill: 'Research', score: 78 },
  { skill: 'Strategy', score: 86 },
  { skill: 'Delivery', score: 72 },
  { skill: 'Leadership', score: 81 },
  { skill: 'Collaboration', score: 95 },
]

export default function RadarChartDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team capability</CardTitle>
        <CardDescription>Average score across the team&apos;s core skills.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadarChart
          containerHeight={300}
          data={data}
          dataKey="skill"
          series={[{ dataKey: 'score', name: 'Score' }]}
          config={{ score: { label: 'Score' } }}
          radiusAxisProps={{ domain: [0, 100] }}
        />
      </CardContent>
    </Card>
  )
}
