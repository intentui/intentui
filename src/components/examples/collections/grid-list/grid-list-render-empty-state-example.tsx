'use client'

import { GridList, GridListEmptyState } from '@/components/ui/grid-list'

export default function GridListRenderEmptyStateDemo() {
  return (
    <GridList
      items={items}
      aria-label="Select items"
      selectionMode="multiple"
      className="min-w-64"
      renderEmptyState={() => <GridListEmptyState>No bands selected</GridListEmptyState>}
    />
  )
}

const items: Iterable<any> | undefined = []
