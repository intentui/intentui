"use client"

import { MultipleSelect, MultipleSelectItem } from "@/components/ui/multiple-select"

export default function MultipleSelectDisabledDemo() {
  return (
    <MultipleSelect isDisabled className="max-w-xs" label="Fruits" items={fruits}>
      {(item) => {
        return <MultipleSelectItem textValue={item.name}>{item.name}</MultipleSelectItem>
      }}
    </MultipleSelect>
  )
}

const fruits = [{ id: 1, name: "Apple" }]
