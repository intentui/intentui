"use client"

import { TagField } from "@/components/ui/tag-field"
import { useListData } from "react-stately"

export default function TagFieldDisabledDemo() {
  const selectedItems = useListData({
    initialItems: [],
  })

  return <TagField isDisabled label="Add tag" list={selectedItems} />
}
