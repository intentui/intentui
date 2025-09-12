"use client"

import { useState } from "react"
import type { Selection } from "react-aria-components"
import { Description } from "@/components/ui/field"
import { MultipleSelect, MultipleSelectItem } from "@/components/ui/multiple-select"

const tags = [
  { id: 1, name: "Travel" },
  { id: 2, name: "Food" },
  { id: 3, name: "Fashion" },
  { id: 4, name: "Music" },
  { id: 5, name: "Photography" },
]

export default function MultipleSelectMaxItemsDemo() {
  const [selectedItems, setSelectedItems] = useState<Selection>(new Set([]))

  return (
    <>
      <MultipleSelect
        className="max-w-xs"
        label="Select tags"
        selectedKeys={selectedItems}
        onSelectionChange={setSelectedItems}
        items={tags}
        maxItems={2}
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
