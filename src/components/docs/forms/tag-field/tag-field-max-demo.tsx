"use client"

import { TagField } from "@/components/ui/tag-field"
import { useListData } from "react-stately"

export default function TagFieldMaxDemo() {
  const selectedItems = useListData({
    initialItems: [],
  })

  return (
    <TagField
      className="max-w-sm"
      max={3}
      label="Add tag"
      description="You can only add 3 tags"
      list={selectedItems}
    />
  )
}
