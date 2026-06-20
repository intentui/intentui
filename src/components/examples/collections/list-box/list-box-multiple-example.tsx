'use client'

import { useState } from 'react'
import type { Selection } from 'react-aria-components/GridList'
import { Description } from '@/components/ui/field'
import { ListBox, ListBoxItem } from '@/components/ui/list-box'

export default function ListBoxMultipleDemo() {
  const [selected, setSelected] = useState<Selection>(new Set([3]))
  return (
    <div>
      <ListBox
        selectedKeys={selected}
        onSelectionChange={setSelected}
        items={fruits}
        aria-label="Fruits"
        selectionMode="multiple"
      >
        {(fruit) => <ListBoxItem textValue={fruit.name}>{fruit.name}</ListBoxItem>}
      </ListBox>

      {[...selected].length > 0 && (
        <Description className="mt-4 block">
          Selected: {selected === 'all' ? 'All selected' : [...selected].join(', ')}
        </Description>
      )}
    </div>
  )
}

const fruits = [
  {
    id: 1,
    name: 'Apple',
  },
  {
    id: 2,
    name: 'Banana',
  },
  {
    id: 3,
    name: 'Orange',
  },
  {
    id: 4,
    name: 'Strawberry',
  },
  {
    id: 5,
    name: 'Grapes',
  },
  {
    id: 6,
    name: 'Mango',
  },
  {
    id: 7,
    name: 'Pineapple',
  },
]
