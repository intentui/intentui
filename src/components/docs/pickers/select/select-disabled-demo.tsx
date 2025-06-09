"use client"

import { Select } from "@/components/ui/select"

const software = [
  { id: 1, name: "Adobe Photoshop" },
  //...
]

export default function SelectDisabledDemo() {
  return (
    <Select label="Design software" isDisabled placeholder="Select a software">
      <Select.Trigger />
      <Select.List items={software}>
        {(item) => (
          <Select.Option id={item.id} textValue={item.name}>
            {item.name}
          </Select.Option>
        )}
      </Select.List>
    </Select>
  )
}
