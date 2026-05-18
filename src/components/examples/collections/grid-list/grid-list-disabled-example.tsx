"use client"

import { GridList, GridListItem } from "@/components/ui/grid-list"

export default function GridListDisabledDemo() {
  return (
    <GridList
      items={items}
      aria-label="Select your favorite bands"
      selectionMode="multiple"
      className="min-w-64"
    >
      {(item) => (
        <GridListItem isDisabled={[2, 5].includes(Number(item.id))} id={item.id}>
          {item.name}
        </GridListItem>
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
