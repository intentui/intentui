"use client"

import { Tag, TagGroup, TagList } from "@/components/ui/tag-group"

const carModels = [
  { id: "1", name: "Tesla Model S", available: true },
  { id: "2", name: "Ford Mustang", available: false },
  { id: "3", name: "Chevrolet Camaro", available: true },
  { id: "4", name: "BMW M3", available: false },
  { id: "5", name: "Audi R8", available: true },
]

export default function TagGroupShapeDemo() {
  return (
    <div className="max-w-sm space-y-6">
      <TagGroup shape="square" intent="danger" label="Car Models" selectionMode="multiple">
        <TagList items={carModels}>{(item) => <Tag>{item.name}</Tag>}</TagList>
      </TagGroup>
      <TagGroup shape="circle" intent="warning" label="Car Models" selectionMode="multiple">
        <TagList items={carModels}>{(item) => <Tag>{item.name}</Tag>}</TagList>
      </TagGroup>
    </div>
  )
}
