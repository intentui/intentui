"use client"

import { ListBox } from "@/components/ui/list-box"
import { useDragAndDrop } from "react-aria-components"
import { useListData } from "react-stately"

export default function ListBoxRearrangeDemo() {
  const list = useListData({
    initialItems: [
      { id: "1", name: "Nirvana" },
      { id: "2", name: "Radiohead" },
      { id: "3", name: "Foo Fighters" },
      { id: "4", name: "Arctic Monkeys" },
      { id: "5", name: "The Strokes" },
    ],
  })

  const { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) => [...keys].map((key) => ({ "text/plain": list.getItem(key)?.name ?? "" })),
    onReorder(e) {
      if (e.target.dropPosition === "before") {
        list.moveBefore(e.target.key, e.keys)
      } else if (e.target.dropPosition === "after") {
        list.moveAfter(e.target.key, e.keys)
      }
    },
  })

  return (
    <ListBox
      items={list.items}
      aria-label="Bands"
      selectionMode="multiple"
      dragAndDropHooks={dragAndDropHooks}
    >
      {(item) => <ListBox.Item key={item.id}>{item.name}</ListBox.Item>}
    </ListBox>
  )
}
