"use client"

import {
  IconDotsHorizontal,
  IconLayoutAlignLeft,
  IconLayoutAlignTop,
  IconWindowVisit,
} from "@intentui/icons"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Menu, MenuContent, MenuItem, MenuLabel } from "@/components/ui/menu"

export default function BreadcrumbsMenuDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>

      <Breadcrumbs.Item separator>
        <Menu>
          <Button intent="plain" size="sq-sm" className="-mx-1 h-6">
            <IconDotsHorizontal />
          </Button>
          <MenuContent popover={{ placement: "bottom" }}>
            <MenuItem href="/docs/components/layouts/sidebar">
              <IconLayoutAlignLeft /> <MenuLabel>Sidebar</MenuLabel>
            </MenuItem>
            <MenuItem href="/docs/components/layouts/navbar">
              <IconLayoutAlignTop /> <MenuLabel>Navbar</MenuLabel>
            </MenuItem>
            <MenuItem href="/docs/components/overlays/modal">
              <IconWindowVisit /> <MenuLabel>Modal</MenuLabel>
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
      </Breadcrumbs.Item>

      <Breadcrumbs.Item>Navbar</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}
