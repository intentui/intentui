'use client'

import { Breadcrumbs, BreadcrumbsItem } from '@/components/ui/breadcrumbs'
import { SidebarNav, SidebarTrigger, useSidebar } from '@/components/ui/sidebar'

export default function AppSidebarNav() {
  const { state } = useSidebar()
  return (
    <SidebarNav>
      <span className="flex items-center gap-x-4">
        <Breadcrumbs className="hidden md:flex">
          <BreadcrumbsItem href="/pre-blocks/sidebar/sidebar-01">Dashboard</BreadcrumbsItem>
          <BreadcrumbsItem>Newsletter</BreadcrumbsItem>
        </Breadcrumbs>
      </span>

      <SidebarTrigger className="-mr-2 ml-auto">
        <svg
          data-slot="icon"
          className={state !== 'collapsed' ? 'rotate-180' : 'rotate-0'}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.5 3H7V21H5.5C4.11929 21 3 19.8807 3 18.5V5.5C3 4.11929 4.11929 3 5.5 3Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.5 21H8V3H18.5C19.8807 3 21 4.11929 21 5.5V18.5C21 19.8807 19.8807 21 18.5 21ZM15.8536 9.85355C16.0488 9.65829 16.0488 9.34171 15.8536 9.14645C15.6583 8.95118 15.3417 8.95118 15.1464 9.14645L12.6464 11.6464C12.4512 11.8417 12.4512 12.1583 12.6464 12.3536L15.1464 14.8536C15.3417 15.0488 15.6583 15.0488 15.8536 14.8536C16.0488 14.6583 16.0488 14.3417 15.8536 14.1464L13.7071 12L15.8536 9.85355Z"
            fill="currentColor"
          />
        </svg>
      </SidebarTrigger>
    </SidebarNav>
  )
}
