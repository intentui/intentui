"use client"

import { GridList } from "@/components/ui/grid-list"

export default function GridListDisabledDemo() {
  return (
    <GridList
      items={items}
      aria-label="Select your favorite bands"
      selectionMode="multiple"
      className="min-w-64"
    >
      {(item) => (
        <GridList.Item isDisabled={[2, 5].includes(Number(item.id))} id={item.id}>
          {item.name}
        </GridList.Item>
      )}
    </GridList>
  )
}

const items = [
  { id: "1", name: "The Beatles" },
  { id: "2", name: "Led Zeppelin" },
  { id: "3", name: "Pink Floyd" },
  { id: "4", name: "Queen" },
  { id: "5", name: "The Rolling Stones" },
]
