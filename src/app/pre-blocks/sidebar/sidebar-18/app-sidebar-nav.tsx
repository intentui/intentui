'use client'

import { Breadcrumbs, BreadcrumbsItem } from '@/components/ui/breadcrumbs'
import { SidebarNav, SidebarTrigger } from '@/components/ui/sidebar'

export default function AppSidebarNav() {
  return (
    <SidebarNav>
      <SidebarTrigger className="-ml-2.5 lg:ml-0" />
      <Breadcrumbs className="hidden md:flex">
        <BreadcrumbsItem href="/pre-blocks/sidebar/sidebar-18">Components</BreadcrumbsItem>
        <BreadcrumbsItem>Sidebar Tree</BreadcrumbsItem>
      </Breadcrumbs>
    </SidebarNav>
  )
}
