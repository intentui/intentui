"use client"

import { TagField } from "@/components/ui/tag-field"
import { useListData } from "react-stately"

export default function TagFieldDemo() {
  const selectedItems = useListData({
    initialItems: [
      {
        id: 1,
        name: "Laravel",
      },
    ],
  })

  return <TagField className="min-w-xs max-w-min" label="Add tag" list={selectedItems} />
}
