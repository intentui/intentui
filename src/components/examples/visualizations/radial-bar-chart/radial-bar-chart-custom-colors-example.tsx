'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadialBarChart } from '@/components/ui/radial-bar-chart'

const data = [
  { source: 'Organic', sessions: 2400 },
  { source: 'Paid', sessions: 1850 },
  { source: 'Referral', sessions: 1120 },
  { source: 'Social', sessions: 860 },
]

export default function RadialBarChartCustomColorsDemo() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Sessions by source</CardTitle>
        <CardDescription>Traffic distribution across acquisition channels.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadialBarChart
          containerHeight={320}
          data={data}
          dataKey="sessions"
          nameKey="source"
          series={[{ dataKey: 'sessions', name: 'Sessions' }]}
          config={{
            Organic: { label: 'Organic', color: 'var(--color-emerald-500)' },
            Paid: { label: 'Paid', color: 'var(--color-violet-500)' },
            Referral: { label: 'Referral', color: 'var(--color-sky-500)' },
            Social: { label: 'Social', color: 'var(--color-amber-500)' },
          }}
          chartProps={{ innerRadius: '20%', outerRadius: '90%' }}
        />
      </CardContent>
    </Card>
  )
}
