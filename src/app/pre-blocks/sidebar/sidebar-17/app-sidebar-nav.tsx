"use client"

import { Breadcrumbs, BreadcrumbsItem } from "@/components/ui/breadcrumbs"
import { SidebarNav, SidebarTrigger } from "@/components/ui/sidebar"

export default function AppSidebarNav() {
  return (
    <SidebarNav>
      <SidebarTrigger />
      <span className="flex items-center gap-x-4">
        <Breadcrumbs className="hidden md:flex">
          <BreadcrumbsItem href="/blocks/sidebar/sidebar-01">Dashboard</BreadcrumbsItem>
          <BreadcrumbsItem>Newsletter</BreadcrumbsItem>
        </Breadcrumbs>
      </span>
    </SidebarNav>
  )
}
