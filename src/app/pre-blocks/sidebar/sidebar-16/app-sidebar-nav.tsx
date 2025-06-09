"use client"

import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { SidebarNav, SidebarTrigger } from "@/components/ui/sidebar"
import { IconLayoutAlignRight } from "@intentui/icons"

export default function AppSidebarNav() {
  return (
    <SidebarNav>
      <span className="flex items-center gap-x-4">
        <Breadcrumbs className="hidden md:flex">
          <Breadcrumbs.Item href="/blocks/sidebar/sidebar-01">Dashboard</Breadcrumbs.Item>
          <Breadcrumbs.Item>Newsletter</Breadcrumbs.Item>
        </Breadcrumbs>
      </span>

      <SidebarTrigger className="-mr-2 ml-auto">
        <IconLayoutAlignRight />
      </SidebarTrigger>
    </SidebarNav>
  )
}
