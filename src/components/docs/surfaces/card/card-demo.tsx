"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CardDemo() {
  return (
    <Card className="max-w-lg">
      <Card.Header>
        <Card.Title>Monthly Report</Card.Title>
        <Card.Description>Financial summary for June</Card.Description>
      </Card.Header>
      <Card.Content>
        The monthly financial report shows a 15% increase in revenue compared to last month.
      </Card.Content>
      <Card.Footer>
        <Button>View Details</Button>
      </Card.Footer>
    </Card>
  )
}
