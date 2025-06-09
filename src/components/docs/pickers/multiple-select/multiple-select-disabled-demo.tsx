"use client"

import { MultipleSelect } from "@/components/ui/multiple-select"

export default function MultipleSelectDisabledDemo() {
  return (
    <MultipleSelect isDisabled className="max-w-xs" label="Fruits" items={fruits}>
      {(item) => {
        return <MultipleSelect.Item textValue={item.name}>{item.name}</MultipleSelect.Item>
      }}
    </MultipleSelect>
  )
}

const fruits = [{ id: 1, name: "Apple" }]
