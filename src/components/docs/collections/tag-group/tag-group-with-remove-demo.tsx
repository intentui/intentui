"use client"

import { Tag, TagGroup, TagList } from "@/components/ui/tag-group"
import { useListData } from "react-stately"

export default function TagGroupWithRemoveDemo() {
  const list = useListData({
    initialItems: [
      { id: "1", name: "Ferrari", available: true },
      { id: "2", name: "Lamborghini", available: false },
      { id: "3", name: "Porsche", available: true },
      { id: "4", name: "Bugatti", available: false },
      { id: "5", name: "McLaren", available: true },
      { id: "6", name: "Aston Martin", available: true },
      { id: "7", name: "Bentley", available: false },
      { id: "8", name: "Rolls-Royce", available: true },
      { id: "9", name: "Maserati", available: false },
      { id: "10", name: "Jaguar", available: true },
    ],
  })

  return (
    <TagGroup
      selectionMode="multiple"
      className="max-w-sm"
      onRemove={(keys) => list.remove(...keys)}
    >
      <TagList items={list.items}>{(item) => <Tag>{item.name}</Tag>}</TagList>
    </TagGroup>
  )
}
