"use client"

import { useListData } from "react-stately"
import { TagField } from "@/components/ui/tag-field"

export default function TagFieldDisabledDemo() {
  const selectedItems = useListData({
    initialItems: [],
  })

  return <TagField isDisabled label="Add tag" list={selectedItems} />
}
