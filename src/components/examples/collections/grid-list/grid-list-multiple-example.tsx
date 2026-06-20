'use client'

import { GridList, GridListItem } from '@/components/ui/grid-list'

export default function GridListMultipleDemo() {
  return (
    <div>
      <GridList
        items={items}
        aria-label="Select items"
        selectionMode="multiple"
        className="min-w-64"
      >
        {(item) => <GridListItem>{item.name}</GridListItem>}
      </GridList>
    </div>
  )
}

const items = [
  { id: '1', name: 'The Beatles' },
  { id: '2', name: 'Led Zeppelin' },
  { id: '3', name: 'Pink Floyd' },
  { id: '4', name: 'Queen' },
  { id: '5', name: 'The Rolling Stones' },
]
