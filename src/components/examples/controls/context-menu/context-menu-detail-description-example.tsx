'use client'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuDescription,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

export default function ContextMenuDetailDescriptionDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="grid h-28 w-56 place-content-center rounded-lg border-2 border-dashed">
        Right click me
      </ContextMenuTrigger>
      <ContextMenuContent items={roles}>
        {(item) => (
          <ContextMenuItem id={item.id} textValue={item.name}>
            <ContextMenuLabel>{item.name}</ContextMenuLabel>
            <ContextMenuDescription>{item.description}</ContextMenuDescription>
          </ContextMenuItem>
        )}
      </ContextMenuContent>
    </ContextMenu>
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
