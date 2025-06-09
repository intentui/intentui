"use client"

import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"
import {
  IconDotsHorizontal,
  IconLayoutAlignLeft,
  IconLayoutAlignTop,
  IconWindowVisit,
} from "@intentui/icons"

export default function BreadcrumbsMenuDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>

      <Breadcrumbs.Item separator>
        <Menu>
          <Button intent="plain" size="square-petite" className="-mx-1 h-6">
            <IconDotsHorizontal />
          </Button>
          <Menu.Content placement="bottom">
            <Menu.Item href="/docs/2.x/components/layouts/sidebar">
              <IconLayoutAlignLeft /> <Menu.Label>Sidebar</Menu.Label>
            </Menu.Item>
            <Menu.Item href="/docs/2.x/components/layouts/navbar">
              <IconLayoutAlignTop /> <Menu.Label>Navbar</Menu.Label>
            </Menu.Item>
            <Menu.Item href="/docs/2.x/components/overlays/modal">
              <IconWindowVisit /> <Menu.Label>Modal</Menu.Label>
            </Menu.Item>
            <Menu.Item href="/docs/2.x/components/collections/menu">
              <Menu.Label>Menu</Menu.Label>
            </Menu.Item>
            <Menu.Item href="/docs/2.x/components/charts/setting-up">
              <Menu.Label>Chart</Menu.Label>
            </Menu.Item>
            <Menu.Item href="/docs/2.x/components/collections/table">
              <Menu.Label>Table</Menu.Label>
            </Menu.Item>
          </Menu.Content>
        </Menu>
      </Breadcrumbs.Item>

      <Breadcrumbs.Item>Navbar</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}
