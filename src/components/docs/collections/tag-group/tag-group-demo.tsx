"use client"

import { Tag, TagGroup, TagList } from "@/components/ui/tag-group"

export const androidBrands = [
  { id: "1", name: "Samsung", available: false },
  { id: "2", name: "OnePlus", available: true },
  { id: "3", name: "Google", available: true },
  { id: "4", name: "Xiaomi", available: false },
]

export default function TagGroupDemo() {
  return (
    <TagGroup label="Android Brands" selectionMode="multiple">
      <TagList items={androidBrands}>{(item) => <Tag>{item.name}</Tag>}</TagList>
    </TagGroup>
  )
}
