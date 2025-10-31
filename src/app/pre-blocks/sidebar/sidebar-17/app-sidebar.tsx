"use client"

import { parseDate } from "@internationalized/date"
import { BrandIntentuiIcon } from "@/components/icons/brand-intentui-icon"
import { Link } from "@/components/ui/link"
import { RangeCalendar } from "@/components/ui/range-calendar"
import { SearchField, SearchInput } from "@/components/ui/search-field"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarLabel,
  SidebarRail,
  SidebarSection,
  SidebarSectionGroup,
  useSidebar,
} from "@/components/ui/sidebar"

export default function AppSidebar() {
  const { state } = useSidebar()
  return (
    <Sidebar>
      <SidebarHeader>
        <Link
          className="flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center"
          href="/docs/components/layouts/sidebar"
        >
          <BrandIntentuiIcon className="size-6" />
          <SidebarLabel className="font-medium">
            Intent <span className="text-muted-fg">UI</span>
          </SidebarLabel>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarSectionGroup>
          {state !== "collapsed" && (
            <SidebarSection className="pt-1">
              <SearchField className="col-span-full mb-6">
                <SearchInput />
              </SearchField>
              <RangeCalendar
                defaultValue={{
                  start: parseDate(`${new Date().getFullYear()}-02-03`),
                  end: parseDate(`${new Date().getFullYear()}-02-12`),
                }}
              />
            </SidebarSection>
          )}
        </SidebarSectionGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
