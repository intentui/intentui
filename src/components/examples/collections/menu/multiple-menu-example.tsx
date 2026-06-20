'use client'

import { useState } from 'react'
import type { Selection } from 'react-aria-components/GridList'
import { Button } from '@/components/ui/button'
import { Menu, MenuContent, MenuItem, MenuLabel } from '@/components/ui/menu'

export default function MultipleMenuDemo() {
  const [selected, setSelected] = useState<Selection>(new Set(['autoPlay']))
  return (
    <Menu>
      <Button intent="outline">Open</Button>
      <MenuContent
        popover={{ placement: 'bottom' }}
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        items={items}
      >
        {(item) => (
          <MenuItem id={item.slug} textValue={item.name}>
            <MenuLabel>{item.name}</MenuLabel>
          </MenuItem>
        )}
      </MenuContent>
    </Menu>
  )
}

const items = [
  {
    name: 'Auto-Play Videos',
    slug: 'autoPlay',
  },
  {
    name: 'High-Quality Streaming',
    slug: 'highQuality',
  },
  {
    name: 'Exclusive Releases',
    slug: 'exclusiveContent',
  },
  {
    name: 'Default Subtitles',
    slug: 'subtitles',
  },
  {
    name: 'Personalized Recommendations',
    slug: 'recommendations',
  },
  {
    name: 'Background Play',
    slug: 'backgroundPlay',
  },
  {
    name: 'Allow Downloads',
    slug: 'download',
  },
]
