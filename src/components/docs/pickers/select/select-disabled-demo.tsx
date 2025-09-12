"use client"

import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"

const software = [
  { id: 1, name: "Adobe Photoshop" },
  //...
]

export default function SelectDisabledDemo() {
  return (
    <Select label="Design software" isDisabled placeholder="Select a software">
      <SelectTrigger />
      <SelectContent items={software}>
        {(item) => (
          <SelectItem id={item.id} textValue={item.name}>
            {item.name}
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  )
}
