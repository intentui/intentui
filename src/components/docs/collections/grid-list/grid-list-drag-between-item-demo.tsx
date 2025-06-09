"use client"

import GridListDragDemo from "@/components/docs/collections/grid-list/grid-list-drag-demo"
import { GridList } from "@/components/ui/grid-list"
import { useDragAndDrop } from "react-aria-components"
import { useListData } from "react-stately"

export default function GridListDragBetweenItemDemo() {
  const list = useListData({
    initialItems: [
      { id: 6, name: "The Byrds" },
      { id: 7, name: "The Yardbirds" },
    ],
  })

  const { dragAndDropHooks } = useDragAndDrop({
    async onInsert(e) {
      const items = await Promise.all(
        e.items.map(async (item) => {
          const name = item.kind === "text" ? await item.getText("text/plain") : item.name
          return { id: Math.random(), name }
        }),
      )

      if (e.target.dropPosition === "before") {
        list.insertBefore(e.target.key, ...items)
      } else if (e.target.dropPosition === "after") {
        list.insertAfter(e.target.key, ...items)
      }
    },
  })

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <GridListDragDemo />
      <GridList aria-label="Droppable list" items={list.items} dragAndDropHooks={dragAndDropHooks}>
        {(item) => <GridList.Item>{item.name}</GridList.Item>}
      </GridList>
      <OtherEmptyList />
    </div>
  )
}

export function OtherEmptyList() {
  const list = useListData({
    initialItems: [{ id: 7, name: "The Who" }],
  })

  const { dragAndDropHooks } = useDragAndDrop({
    async onInsert(e) {
      const items = await Promise.all(
        e.items.map(async (item) => {
          const name = item.kind === "text" ? await item.getText("text/plain") : item.name
          return { id: Math.random(), name }
        }),
      )

      if (e.target.dropPosition === "before") {
        list.insertBefore(e.target.key, ...items)
      } else if (e.target.dropPosition === "after") {
        list.insertAfter(e.target.key, ...items)
      }
    },
  })

  return (
    <GridList
      aria-label="Droppable list"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => <GridList.EmptyState>No bands selected</GridList.EmptyState>}
    >
      {(item) => <GridList.Item>{item.name}</GridList.Item>}
    </GridList>
  )
}
