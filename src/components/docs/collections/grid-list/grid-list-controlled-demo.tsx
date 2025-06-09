"use client"

import { useState } from "react"

import { Description } from "@/components/ui/field"
import { GridList } from "@/components/ui/grid-list"
import type { Selection } from "react-aria-components"

export default function GridListControlledDemo() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]))
  return (
    <div>
      <GridList
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        items={items}
        aria-label="Select items"
        selectionMode="multiple"
        className="min-w-64"
      >
        {(item) => <GridList.Item id={item.id}>{item.name}</GridList.Item>}
      </GridList>
      <Description className="mt-2 block text-muted-fg [&>strong]:text-fg">
        You have selected: <strong>{Array.from(selectedKeys).join(", ")}</strong>
      </Description>
    </div>
  )
}

const items = [
  { id: "1", name: "The Beatles" },
  { id: "2", name: "Led Zeppelin" },
  { id: "3", name: "Pink Floyd" },
  { id: "4", name: "Queen" },
  { id: "5", name: "The Rolling Stones" },
]
