"use client"

import { useListData } from "react-stately"
import { TagField } from "@/components/ui/tag-field"

export default function TagFieldAppearanceDemo() {
  const selectedItems = useListData({
    initialItems: [],
  })

  return <TagField appearance="plain" placeholder="Tags..." list={selectedItems} />
}
