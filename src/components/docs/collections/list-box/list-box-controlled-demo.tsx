"use client"

import { useState } from "react"

import { Description } from "@/components/ui/field"
import { ListBox } from "@/components/ui/list-box"
import type { Selection } from "react-aria-components"

export default function ListBoxControlledDemo() {
  const [selected, setSelected] = useState<Selection>(new Set([1]))
  return (
    <>
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
    </>
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
