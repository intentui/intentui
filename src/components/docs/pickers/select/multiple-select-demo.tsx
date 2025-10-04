"use client"

import { useState } from "react"
import type { Key } from "react-aria-components"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"

export const moods = [
  { id: 1, name: "Excited" },
  { id: 2, name: "Relaxed" },
  { id: 3, name: "Focused" },
  { id: 4, name: "Adventurous" },
  { id: 5, name: "Curious" },
  { id: 6, name: "Creative" },
  { id: 7, name: "Confident" },
  { id: 8, name: "Playful" },
  { id: 9, name: "Chill" },
  { id: 10, name: "Motivated" },
]

export default function MultipleSelectDemo() {
  const [selectedItems, setSelectedItems] = useState<Key[]>([1, 4])

  return (
    <Select
      selectionMode="multiple"
      className="max-w-[250px]"
      value={selectedItems}
      onChange={(selected) => setSelectedItems(selected)}
      aria-label="Moods"
      placeholder="Choose your moods"
    >
      <SelectTrigger />
      <SelectContent items={moods}>
        {(item) => (
          <SelectItem id={item.id} textValue={item.name}>
            {item.name}
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  )
}
