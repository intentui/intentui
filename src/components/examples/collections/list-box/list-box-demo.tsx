"use client"

import { ListBox, ListBoxItem } from "@/components/ui/list-box"

export default function ListBoxDemo() {
  return (
    <ListBox className="max-w-2xs" items={rockPopBands} selectionMode="single" aria-label="Bands">
      {(item) => (
        <ListBoxItem id={item.id} textValue={item.name}>
          {item.name}
        </ListBoxItem>
      )}
    </ListBox>
  )
}

const rockPopBands = [
  { id: "1", name: "Nirvana" },
  { id: "2", name: "Radiohead" },
  { id: "3", name: "Foo Fighters" },
  { id: "4", name: "Arctic Monkeys" },
  { id: "5", name: "The Strokes" },
]
