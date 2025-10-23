"use client"

import { useState } from "react"
import type { Key } from "react-aria-components"
import { Description, FieldError, Label } from "@/components/ui/field"
import {
  MultipleSelect,
  MultipleSelectContent,
  MultipleSelectItem,
} from "@/components/ui/multiple-select"

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
    <MultipleSelect
      className="mx-auto max-w-2xs"
      isRequired
      value={selectedItems}
      onChange={setSelectedItems}
    >
      <Label>Select tags</Label>
      <MultipleSelectContent items={tags}>
        {(item) => {
          return (
            <MultipleSelectItem id={item.id} textValue={item.name}>
              {item.name}
            </MultipleSelectItem>
          )
        }}
      </MultipleSelectContent>
      <Description>Select at least one tag.</Description>
      <FieldError />
    </MultipleSelect>
  )
}
