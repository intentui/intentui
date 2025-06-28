"use client"

import { useListData } from "react-stately"
import { TagField } from "@/components/ui/tag-field"

export default function TagFieldDemo() {
  const selectedItems = useListData({
    initialItems: [
      {
        id: 1,
        name: "Laravel",
      },
    ],
  })

  return <TagField className="min-w-xs max-w-min" aria-label="Add tag" list={selectedItems} />
}
