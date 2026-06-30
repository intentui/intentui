'use client'

import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { Menu, MenuContent, MenuDescription, MenuItem, MenuLabel } from '@/components/ui/menu'

export default function MenuItemDescriptionDemo() {
  return (
    <Menu>
      <Button intent="outline">Open</Button>
      <MenuContent
        className="sm:min-w-60 sm:max-w-min"
        popover={{ placement: 'bottom' }}
        items={roles}
      >
        {(item) => (
          <MenuItem id={item.id} textValue={item.name}>
            <Cog6ToothIcon />
            <MenuLabel>{item.name}</MenuLabel>
            <MenuDescription>{item.description}</MenuDescription>
          </MenuItem>
        )}
      </MenuContent>
    </Menu>
  )
}

const roles = [
  {
    id: 1,
    name: 'Admin',
    description: 'Has full access to all resources',
  },
  {
    id: 2,
    name: 'Editor',
    description: 'Can edit content but has limited access to settings',
  },
  {
    id: 3,
    name: 'Viewer',
    description: 'Can view content but cannot make changes',
  },
  {
    id: 4,
    name: 'Contributor',
    description: 'Can contribute content for review',
  },
  {
    id: 5,
    name: 'Guest',
    description: 'Limited access, mostly for viewing purposes',
  },
]
