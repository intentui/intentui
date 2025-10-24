"use client"

import { useState } from "react"
import { BarList } from "@/components/ui/bar-list"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BarListControlledDemo() {
  const [selectedItem, setSelectedItem] = useState("")
  return (
    <Card>
      <CardHeader>
        <CardTitle>Department budget usage</CardTitle>
        <CardDescription>Select a department to inspect budget usage</CardDescription>
      </CardHeader>
      <CardContent>
        <BarList
          data={[
            { name: "Marketing", value: 45000 },
            { name: "Research & Development", value: 38000 },
            { name: "Operations", value: 29000 },
            { name: "Customer Support", value: 17500 },
            { name: "IT & Infrastructure", value: 13200 },
          ]}
          onValueChange={(item) => setSelectedItem(JSON.stringify(item, null, 2))}
          valueFormatter={(value) => `$${value.toLocaleString()}`}
        />
        {selectedItem && <pre className="font-mono text-xs">{selectedItem}</pre>}
      </CardContent>
    </Card>
  )
}
