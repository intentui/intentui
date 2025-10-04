"use client"

import { useState } from "react"
import type { Key } from "react-aria-components"
import { Description } from "@/components/ui/field"
import { MultipleSelect, MultipleSelectItem } from "@/components/ui/multiple-select"

const tags = [
  { id: 1, name: "Travel" },
  { id: 2, name: "Food" },
  { id: 3, name: "Fashion" },
  { id: 4, name: "Music" },
  { id: 5, name: "Photography" },
]

export default function MultipleSelectControlledDemo() {
  const [selectedItems, setSelectedItems] = useState<Key[]>([2, 4])

  return (
    <>
      <MultipleSelect
        className="min-w-2xs max-w-min"
        label="Select tags"
        value={selectedItems}
        onChange={setSelectedItems}
        items={tags}
      >
        {(item) => {
          return (
            <MultipleSelectItem id={item.id} textValue={item.name}>
              {item.name}
            </MultipleSelectItem>
          )
        }}
      </MultipleSelect>
      {[...selectedItems].length > 0 && (
        <Description className="mt-2 block max-w-xs text-muted-fg [&>strong]:text-fg">
          You have selected: <strong>{[...selectedItems]}</strong>
        </Description>
      )}
    </>
  )
}
