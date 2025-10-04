"use client"

import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"

export const cocktails = [
  { id: 1, name: "Negroni" },
  { id: 2, name: "Old Fashioned" },
  { id: 3, name: "Margarita" },
  { id: 4, name: "Espresso Martini" },
  { id: 5, name: "Paloma" },
  { id: 6, name: "Mai Tai" },
  { id: 7, name: "Manhattan" },
  { id: 8, name: "Cosmopolitan" },
  { id: 9, name: "Daiquiri" },
  { id: 10, name: "Whiskey Sour" },
]

export default function SelectDemo() {
  return (
    <Select aria-label="Cocktails" placeholder="Choose your cocktail">
      <SelectTrigger />
      <SelectContent items={cocktails}>
        {(item) => (
          <SelectItem id={item.id} textValue={item.name}>
            {item.name}
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  )
}
