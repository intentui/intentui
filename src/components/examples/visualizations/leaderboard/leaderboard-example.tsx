'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Leaderboard,
  LeaderboardContent,
  LeaderboardEnd,
  LeaderboardItem,
  LeaderboardStart,
} from '@/components/ui/leaderboard'

const data = [
  {
    name: 'Documentation',
    value: 1200,
    href: '/installation',
  },
  { name: 'Components', value: 980, href: '/components' },
  { name: 'Themes', value: 760, href: 'https://design.intentui.com/themes' },
  { name: 'Colors', value: 430, href: '/colors' },
  { name: 'Icons', value: 150, href: '/icons' },
  {
    name: 'Templates',
    value: 150,
    href: 'https://irsyad.co',
  },
  {
    name: 'Plus',
    value: 150,
    href: 'https://dub.sh/designiui',
  },
]

const maxValue = Math.max(...data.map((item) => item.value))

export default function LeaderboardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Page visits by section</CardTitle>
        <CardDescription>Unique visits for the most viewed docs pages this month</CardDescription>
      </CardHeader>
      <CardContent>
        <Leaderboard>
          <LeaderboardContent>
            {data.map((item) => (
              <LeaderboardItem key={item.name} maxValue={maxValue} value={item.value}>
                <LeaderboardStart>{item.name}</LeaderboardStart>
                <LeaderboardEnd>{item.value.toLocaleString()} visits</LeaderboardEnd>
              </LeaderboardItem>
            ))}
          </LeaderboardContent>
        </Leaderboard>
      </CardContent>
    </Card>
  )
}
