"use client"

import { useMemo } from "react"
import { BarChart } from "@/components/ui/bar-chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useIsMobile } from "@/hooks/use-mobile"

export default function BarChartCustomFormatDemo() {
  const isMobile = useIsMobile()
  const data = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const month = new Date(0, i).toLocaleString("en-US", {
        month: "short",
      })
      const revenue = Math.floor(4000 + Math.random() * 1500)
      const expenses = Math.floor(2000 + Math.random() * 1000)
      return { month, revenue, expenses, net: revenue - expenses }
    })
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Net revenue by month</CardTitle>
        <CardDescription>Revenue minus expenses to show monthly profitability.</CardDescription>
      </CardHeader>
      <CardContent>
        <BarChart
          containerHeight={isMobile ? 200 : 300}
          data={data}
          dataKey="month"
          barProps={{
            type: "monotone",
          }}
          type="stacked"
          valueFormatter={(value: number) =>
            new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "short",
            }).format(value)
          }
          tooltipProps={{
            formatter: (value: number, label: string) => (
              <span className="flex w-full justify-between gap-x-4 font-mono">
                <span className="flex-1">{label}</span>
                <span>
                  {" "}
                  {new Intl.NumberFormat("en-US", {
                    notation: "compact",
                    compactDisplay: "short",
                  }).format(value)}
                </span>
              </span>
            ),
          }}
          config={{
            revenue: { label: "Revenue" },
            expenses: { label: "Expenses" },
            net: { label: "Net" },
          }}
        />
      </CardContent>
    </Card>
  )
}
