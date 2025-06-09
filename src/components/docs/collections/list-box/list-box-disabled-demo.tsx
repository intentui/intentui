"use client"

import { ListBox } from "@/components/ui/list-box"

export default function ListBoxDisabledDemo() {
  return (
    <>
      <ListBox
        disabledKeys={[2, 3, 4, 5]}
        items={fruits}
        aria-label="Fruits"
        selectionMode="multiple"
      >
        {(fruit) => <ListBox.Item id={fruit.id}>{fruit.name}</ListBox.Item>}
      </ListBox>
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
