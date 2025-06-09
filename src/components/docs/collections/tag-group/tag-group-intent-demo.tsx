"use client"

import { Tag, TagGroup, TagList } from "@/components/ui/tag-group"
import { useListData } from "react-stately"

const shoes = [
  { id: "1", name: "Nike", available: true },
  { id: "2", name: "Adidas", available: false },
  { id: "3", name: "Puma", available: true },
  { id: "4", name: "Reebok", available: true },
]

export default function TagGroupIntentDemo() {
  const shoesList = useListData({
    initialItems: shoes,
  })
  return (
    <div className="max-w-sm space-y-2">
      <TagGroup
        intent="primary"
        aria-label="Primary Intent"
        selectionMode="multiple"
        onRemove={(keys) => shoesList.remove(...keys)}
      >
        <TagList items={shoesList.items}>{(item) => <Tag>{item.name}</Tag>}</TagList>
      </TagGroup>
      <TagGroup
        intent="secondary"
        aria-label="Secondary Intent"
        selectionMode="multiple"
        onRemove={(keys) => shoesList.remove(...keys)}
      >
        <TagList items={shoesList.items}>{(item) => <Tag>{item.name}</Tag>}</TagList>
      </TagGroup>
      <TagGroup
        intent="success"
        aria-label="Success Intent"
        selectionMode="multiple"
        onRemove={(keys) => shoesList.remove(...keys)}
      >
        <TagList items={shoesList.items}>{(item) => <Tag>{item.name}</Tag>}</TagList>
      </TagGroup>
      <TagGroup
        intent="warning"
        aria-label="Warning Intent"
        selectionMode="multiple"
        onRemove={(keys) => shoesList.remove(...keys)}
      >
        <TagList items={shoesList.items}>{(item) => <Tag>{item.name}</Tag>}</TagList>
      </TagGroup>
      <TagGroup
        intent="danger"
        aria-label="Danger Intent"
        selectionMode="multiple"
        onRemove={(keys) => shoesList.remove(...keys)}
      >
        <TagList items={shoesList.items}>{(item) => <Tag>{item.name}</Tag>}</TagList>
      </TagGroup>
    </div>
  )
}
