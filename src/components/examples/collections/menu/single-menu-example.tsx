'use client'

import { useState } from 'react'
import type { Selection } from 'react-aria-components/GridList'
import type { Placement } from 'react-aria-components/Popover'
import { Button } from '@/components/ui/button'
import { Menu, MenuContent, MenuItem, MenuLabel } from '@/components/ui/menu'

export const placements = [
  'bottom',
  'bottom left',
  'bottom right',
  'bottom start',
  'bottom end',
  'top',
  'top left',
  'top right',
  'top start',
  'top end',
  'left',
  'left top',
  'left bottom',
  'start',
  'start top',
  'start bottom',
  'right',
  'right top',
  'right bottom',
  'end',
  'end top',
  'end bottom',
].map((item, i) => ({ id: i, name: item }))

export default function SingleMenuDemo() {
  const [selected, setSelected] = useState<Selection>(new Set(['bottom']))
  return (
    <Menu>
      <Button intent="outline">Placement</Button>
      <MenuContent
        popover={{ placement: Array.from(selected)[0] as Placement }}
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        items={placements}
        className="min-w-52"
      >
        {(item) => (
          <MenuItem id={item.name}>
            <MenuLabel>{item.name}</MenuLabel>
          </MenuItem>
        )}
      </MenuContent>
    </Menu>
  )
}
