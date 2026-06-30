'use client'

import { Menu, MenuContent, MenuItem, MenuTrigger } from '@/components/ui/menu'

export default function MenuBasicDemo() {
  return (
    <Menu>
      <MenuTrigger>Open</MenuTrigger>
      <MenuContent popover={{ placement: 'bottom' }}>
        <MenuItem>Inbox</MenuItem>
        <MenuItem>Sent</MenuItem>
        <MenuItem>New Message</MenuItem>
      </MenuContent>
    </Menu>
  )
}
