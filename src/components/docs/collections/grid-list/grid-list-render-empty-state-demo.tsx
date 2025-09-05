"use client"

import { GridList } from "@/components/ui/grid-list"

export default function GridListRenderEmptyStateDemo() {
  return (
    <GridList
      items={items}
      aria-label="Select items"
      selectionMode="multiple"
      className="min-w-64"
      renderEmptyState={() => <GridList.EmptyState>No bands selected</GridList.EmptyState>}
    />
  )
}

const items: Iterable<any> | undefined = []
