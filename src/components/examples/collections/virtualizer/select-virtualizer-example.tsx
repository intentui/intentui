'use client'

import { ListBox } from 'react-aria-components/ListBox'
import { ListLayout, Virtualizer } from 'react-aria-components/Virtualizer'
import { PopoverContent } from '@/components/ui/popover'
import { Select, SelectItem, SelectTrigger } from '@/components/ui/select'

const items = Array.from({ length: 5000 }, (_, index) => ({
  id: index + 1,
  name: `Item ${index + 1}`,
}))

export default function SelectVirtualizerExample() {
  return (
    <Select
      aria-label="Select a virtualized item"
      placeholder="Select an item"
      className="max-w-sm"
    >
      <SelectTrigger />
      <PopoverContent
        placement="bottom"
        className="min-w-(--trigger-width) overflow-hidden *:data-[slot=popover-inner]:overflow-hidden"
      >
        <Virtualizer layout={ListLayout} layoutOptions={{ rowSize: 36, gap: 4, padding: 4 }}>
          <ListBox
            layout="stack"
            orientation="vertical"
            aria-label="Virtualized items"
            items={items}
            className="block h-72 max-h-[inherit] w-full overflow-y-auto p-0 outline-hidden [--virtualizer-check-column:0px] has-[[data-slot=check-indicator]]:[--virtualizer-check-column:1.625rem] sm:has-[[data-slot=check-indicator]]:[--virtualizer-check-column:1.375rem]"
          >
            {(item) => (
              <SelectItem
                id={item.id}
                textValue={item.name}
                className="h-full min-h-0 supports-[grid-template-columns:subgrid]:grid-cols-[var(--virtualizer-check-column)_1fr]"
              >
                {item.name}
              </SelectItem>
            )}
          </ListBox>
        </Virtualizer>
      </PopoverContent>
    </Select>
  )
}
