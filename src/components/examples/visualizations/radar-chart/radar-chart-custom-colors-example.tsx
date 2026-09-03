'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadarChart } from '@/components/ui/radar-chart'

const data = [
  { channel: 'Search', organic: 88, paid: 65 },
  { channel: 'Social', organic: 72, paid: 84 },
  { channel: 'Email', organic: 76, paid: 58 },
  { channel: 'Direct', organic: 82, paid: 45 },
  { channel: 'Referral', organic: 64, paid: 70 },
]

export default function RadarChartCustomColorsDemo() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Campaign reach</CardTitle>
        <CardDescription>Reach score by acquisition channel.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadarChart
          containerHeight={320}
          data={data}
          dataKey="channel"
          series={[{ dataKey: 'organic' }, { dataKey: 'paid' }]}
          config={{
            organic: { label: 'Organic', color: 'var(--color-emerald-500)' },
            paid: { label: 'Paid', color: 'var(--color-violet-500)' },
          }}
          radiusAxisProps={{ domain: [0, 100] }}
        />
      </CardContent>
    </Card>
  )
}
