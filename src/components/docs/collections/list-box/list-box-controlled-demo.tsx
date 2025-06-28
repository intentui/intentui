"use client"

import { useState } from "react"
import type { Selection } from "react-aria-components"
import { Description } from "@/components/ui/field"
import { ListBox } from "@/components/ui/list-box"

export default function ListBoxControlledDemo() {
  const [selected, setSelected] = useState<Selection>(new Set([1]))
  return (
    <div className="min-w-2xs">
      <ListBox
        selectedKeys={selected}
        onSelectionChange={setSelected}
        items={fruits}
        aria-label="Fruits"
        selectionMode="single"
      >
        {(fruit) => (
          <ListBox.Item id={fruit.id} textValue={fruit.name}>
            {fruit.name}
          </ListBox.Item>
        )}
      </ListBox>

      {selected && (
        <Description className="mt-4 block [&>strong]:font-medium [&>strong]:text-fg">
          Selected: <strong>{selected}</strong>
        </Description>
      )}
    </div>
  )
}

const fruits = [
  {
    id: 1,
    name: "Apple",
  },
  {
    id: 2,
    name: "Banana",
  },
  {
    id: 3,
    name: "Orange",
  },
  {
    id: 4,
    name: "Strawberry",
  },
  {
    id: 5,
    name: "Grapes",
  },
  {
    id: 6,
    name: "Mango",
  },
  {
    id: 7,
    name: "Pineapple",
  },
]
