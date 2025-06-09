"use client"

import { TagField } from "@/components/ui/tag-field"
import { useListData } from "react-stately"

export default function TagFieldAppearanceDemo() {
  const selectedItems = useListData({
    initialItems: [],
  })

  return <TagField appearance="plain" placeholder="Tags..." list={selectedItems} />
}
