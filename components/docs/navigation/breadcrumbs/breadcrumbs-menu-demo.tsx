"use client"

import { IconDotsHorizontal } from "@intentui/icons"
import { Breadcrumbs, Menu } from "ui"

export default function BreadcrumbsMenuDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>

      <Breadcrumbs.Item separator>
        <Menu>
          <Menu.Trigger>
            <IconDotsHorizontal />
          </Menu.Trigger>
          <Menu.Content placement="bottom">
            <Menu.Item href="/docs/components/layouts/sidebar">Sidebar</Menu.Item>
            <Menu.Item href="/docs/components/controls/toolbar">Toolbar</Menu.Item>
            <Menu.Item href="/docs/components/collections/menu">Menu</Menu.Item>
            <Menu.Item href="/docs/components/layouts/container">Container</Menu.Item>
            <Menu.Item href="/docs/components/surfaces/chart">Chart</Menu.Item>
            <Menu.Item href="/docs/components/collections/table">Table</Menu.Item>
            <Menu.Item href="/docs/components/overlays/modal">Modal</Menu.Item>
          </Menu.Content>
        </Menu>
      </Breadcrumbs.Item>

      <Breadcrumbs.Item>Navbar</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}
