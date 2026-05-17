"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardDemo() {
  return (
    <Card className="max-w-lg">
      <CardHeader>
        <CardTitle>Monthly Report</CardTitle>
        <CardDescription>Financial summary for June</CardDescription>
      </CardHeader>
      <CardContent>
        The monthly financial report shows a 15% increase in revenue compared to last month.
      </CardContent>
      <CardFooter>
        <Button>View Details</Button>
      </CardFooter>
    </Card>
  )
}
