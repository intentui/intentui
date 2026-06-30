'use client'

import { EllipsisHorizontalIcon } from '@heroicons/react/16/solid'
import { Bars3BottomLeftIcon, WindowIcon } from '@heroicons/react/24/outline'
import { Breadcrumbs, BreadcrumbsItem } from '@/components/ui/breadcrumbs'
import { Button } from '@/components/ui/button'
import { Menu, MenuContent, MenuItem, MenuLabel } from '@/components/ui/menu'

export default function BreadcrumbsMenuDemo() {
  return (
    <Breadcrumbs>
      <BreadcrumbsItem href="#">Home</BreadcrumbsItem>

      <BreadcrumbsItem>
        <Menu>
          <Button intent="plain" size="sq-sm" className="-mx-1 h-6">
            <EllipsisHorizontalIcon />
          </Button>
          <MenuContent popover={{ placement: 'bottom' }}>
            <MenuItem href="/docs/components/layouts/sidebar">
              <Bars3BottomLeftIcon /> <MenuLabel>Sidebar</MenuLabel>
            </MenuItem>
            <MenuItem href="/docs/components/layouts/navbar">
              <MenuLabel>Navbar</MenuLabel>
            </MenuItem>
            <MenuItem href="/docs/components/overlays/modal">
              <WindowIcon /> <MenuLabel>Modal</MenuLabel>
            </MenuItem>
            <MenuItem href="/docs/components/collections/menu">
              <MenuLabel>Menu</MenuLabel>
            </MenuItem>
            <MenuItem href="/docs/components/charts/setting-up">
              <MenuLabel>Chart</MenuLabel>
            </MenuItem>
            <MenuItem href="/docs/components/collections/table">
              <MenuLabel>Table</MenuLabel>
            </MenuItem>
          </MenuContent>
        </Menu>
      </BreadcrumbsItem>

      <BreadcrumbsItem>Navbar</BreadcrumbsItem>
    </Breadcrumbs>
  )
}
