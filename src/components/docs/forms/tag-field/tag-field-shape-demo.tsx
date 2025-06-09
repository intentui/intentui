"use client"

import { TagField } from "@/components/ui/tag-field"
import { useListData } from "react-stately"

export default function TagFieldShapeDemo() {
  const selectedItems = useListData({
    initialItems: [
      {
        id: 1,
        name: "Laravel",
      },
      {
        id: 2,
        name: "Inertia.js",
      },
    ],
  })

  return <TagField shape="circle" className="max-w-xs" label="Add tag" list={selectedItems} />
}
