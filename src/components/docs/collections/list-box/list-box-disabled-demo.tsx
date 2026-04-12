"use client"

import { ListBox, ListBoxItem } from "@/components/ui/list-box"

export default function ListBoxDisabledDemo() {
  return (
    <ListBox
      className="max-w-2xs"
      disabledKeys={[2, 3, 4, 5]}
      items={fruits}
      aria-label="Fruits"
      selectionMode="multiple"
    >
      {(item) => <ListBoxItem id={item.id} textValue={item.name}>{item.name}</ListBoxItem>}
    </ListBox>
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
