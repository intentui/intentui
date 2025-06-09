"use client"

import { Description } from "@/components/ui/field"
import { MultipleSelect } from "@/components/ui/multiple-select"
import { useState } from "react"
import type { Selection } from "react-aria-components"

const tags = [
  { id: 1, name: "Travel" },
  { id: 2, name: "Food" },
  { id: 3, name: "Fashion" },
  { id: 4, name: "Music" },
  { id: 5, name: "Photography" },
]

export default function MultipleSelectControlledDemo() {
  const [selectedItems, setSelectedItems] = useState<Selection>(new Set([2, 4]))

  return (
    <>
      <MultipleSelect
        className="max-w-xs"
        label="Select tags"
        selectedKeys={selectedItems}
        onSelectionChange={setSelectedItems}
        items={tags}
      >
        {(item) => {
          return (
            <MultipleSelect.Item id={item.id} textValue={item.name}>
              {item.name}
            </MultipleSelect.Item>
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
