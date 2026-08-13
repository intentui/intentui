'use client'

import { ListLayout, Virtualizer } from 'react-aria-components/Virtualizer'
import { ListBox, ListBoxItem } from '@/components/ui/list-box'

const items = Array.from({ length: 5000 }, (_, index) => ({
  id: index + 1,
  name: `Item ${index + 1}`,
}))

export default function ListBoxVirtualizerExample() {
  return (
    <Virtualizer layout={ListLayout} layoutOptions={{ rowSize: 36, gap: 4, padding: 4 }}>
      <ListBox
        aria-label="Virtualized list of 5,000 items"
        items={items}
        selectionMode="multiple"
        className="block h-96 max-h-none min-w-60 overflow-y-auto p-0 [--virtualizer-check-column:0px] has-[[data-slot=check-indicator]]:[--virtualizer-check-column:1.625rem] sm:has-[[data-slot=check-indicator]]:[--virtualizer-check-column:1.375rem]"
      >
        {(item) => (
          <ListBoxItem
            id={item.id}
            textValue={item.name}
            className="h-full min-h-0 supports-[grid-template-columns:subgrid]:grid-cols-[var(--virtualizer-check-column)_1fr]"
          >
            {item.name}
          </ListBoxItem>
        )}
      </ListBox>
    </Virtualizer>
  )
}
