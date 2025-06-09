"use client"

import { BrandIcon } from "@/components/brand-icon"
import {
  Sidebar,
  SidebarContent,
  SidebarDisclosure,
  SidebarDisclosureGroup,
  SidebarDisclosurePanel,
  SidebarDisclosureTrigger,
  SidebarItem,
  SidebarLabel,
  SidebarRail,
} from "@/components/ui/sidebar"
import { IconFolderFill, IconFolderOpen } from "@intentui/icons"

import { folders } from "./folders"
import { SidebarHeader } from "./sidebar-header"

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader />
      <SidebarContent className="pb-10">
        <SidebarDisclosureGroup className="gap-y-0.5">
          {folders.map((item) => (
            <SidebarTree key={item.id} item={item} index={1} />
          ))}
        </SidebarDisclosureGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

function SidebarTree({ item, index }: { item: (typeof folders)[number]; index: number }) {
  if (!item.files || item.files.length === 0) {
    return (
      <SidebarItem
        isCurrent={item.id === 1212}
        className="pl-[calc(var(--nested-level)*16px)]"
        style={
          {
            "--nested-level": index,
          } as React.CSSProperties
        }
      >
        <BrandIcon label={item.label} />
        <SidebarLabel>{item.label}</SidebarLabel>
      </SidebarItem>
    )
  }

  return (
    <SidebarDisclosureGroup
      defaultExpandedKeys={[1, 12, 121, 1212, 6, 61, 611, 62, 621, 6212, 62121, 1211]}
    >
      <SidebarDisclosure id={item.id}>
        {({ isExpanded }) => (
          <>
            <SidebarDisclosureTrigger
              className="pl-[calc(var(--nested-level)*16px)]"
              style={
                {
                  "--nested-level": index,
                } as React.CSSProperties
              }
            >
              {isExpanded ? <IconFolderOpen /> : <IconFolderFill />}
              <SidebarLabel>{item.label}</SidebarLabel>
            </SidebarDisclosureTrigger>
            <SidebarDisclosurePanel>
              {item.files!.map((child) => (
                <SidebarTree key={child.id} item={child} index={index + 1} />
              ))}
            </SidebarDisclosurePanel>
          </>
        )}
      </SidebarDisclosure>
    </SidebarDisclosureGroup>
  )
}
