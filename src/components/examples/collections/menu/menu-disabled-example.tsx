'use client'

import { Menu, MenuContent, MenuItem, MenuLabel, MenuTrigger } from '@/components/ui/menu'

export default function MenuDisabledDemo() {
  return (
    <Menu>
      <MenuTrigger>Open</MenuTrigger>
      <MenuContent popover={{ placement: 'bottom' }}>
        <MenuItem id="view">
          <MenuLabel>View</MenuLabel>
        </MenuItem>
        <MenuItem id="edit">
          <MenuLabel>Edit</MenuLabel>
        </MenuItem>
        <MenuItem id="gsu" isDisabled>
          <MenuLabel>Generate Short URL</MenuLabel>
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
