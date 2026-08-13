'use client'

import { ListLayout, Virtualizer } from 'react-aria-components/Virtualizer'
import { GridList, GridListItem } from '@/components/ui/grid-list'

const items = Array.from({ length: 5000 }, (_, index) => ({
  id: index + 1,
  name: `Item ${index + 1}`,
}))

export default function GridListVirtualizerExample() {
  return (
    <Virtualizer layout={ListLayout} layoutOptions={{ rowSize: 45 }}>
      <GridList
        aria-label="Select virtualized items"
        items={items}
        selectionMode="multiple"
        className="block min-w-60 h-96 overflow-y-auto"
      >
        {(item) => (
          <GridListItem id={item.id} className="h-full min-h-0 border-b">
            {item.name}
          </GridListItem>
        )}
      </GridList>
    </Virtualizer>
  )
}
