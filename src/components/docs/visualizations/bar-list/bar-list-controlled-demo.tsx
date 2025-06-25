"use client"

import { BarList } from "@/components/ui/bar-list"
import { useState } from "react"

const data = [
  { name: "/home", value: 843, href: "https://tremor.so" },
  { name: "/imprint", value: 46, href: "https://tremor.so" },
  { name: "/cancellation", value: 3, href: "https://tremor.so" },
  { name: "/blocks", value: 108, href: "https://tremor.so" },
  { name: "/documentation", value: 384, href: "https://tremor.so" },
]

export default function BarListControlledDemo() {
  const [selectedItem, setSelectedItem] = useState("")
  return (
    <div className="flex flex-col gap-3">
      <BarList
        data={data}
        onValueChange={(item) => setSelectedItem(JSON.stringify(item, null, 2))}
      />
      {selectedItem && <div>{selectedItem}</div>}
    </div>
  )
}
