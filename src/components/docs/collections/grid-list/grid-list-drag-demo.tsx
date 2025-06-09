"use client"

import { GridList } from "@/components/ui/grid-list"
import { useDragAndDrop } from "react-aria-components"
import { useListData } from "react-stately"

export default function GridListDragDemo() {
  const list = useListData({
    initialItems: items,
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
    <>
      <GridList
        items={list.items}
        aria-label="Droppable list"
        selectionMode="multiple"
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => <GridList.Item id={item.id}>{item.name}</GridList.Item>}
      </GridList>
    </>
  )
}

const items = [
  { id: 1, name: "The Beatles" },
  { id: 2, name: "Led Zeppelin" },
  { id: 3, name: "Pink Floyd" },
  { id: 4, name: "Queen" },
  { id: 5, name: "The Rolling Stones" },
  { id: 6, name: "The Beach Boys" },
  { id: 7, name: "The Kinks" },
  { id: 8, name: "The Who" },
]
