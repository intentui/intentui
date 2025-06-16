"use client"

import menus from "@/components-search.json"
import type { Component } from "@/types/search"
import { Header, ListBox, ListBoxItem, ListBoxSection } from "react-aria-components"

const components = menus[3] as Component
export function ListComponents() {
  return (
    <ListBox
      aria-label="List components"
      className="columns-2 gap-6 pb-6 sm:pb-12 md:columns-3 lg:columns-4"
    >
      {components?.children?.map((item) => (
        <ListBoxSection
          className="mb-12 flex break-inside-avoid flex-col gap-y-4"
          key={item.subsection}
        >
          <Header className="font-semibold text-fg text-sm">{item?.subsection}</Header>
          {item?.children?.map((item) => (
            <ListBoxItem
              className="text-muted-fg text-sm hover:text-fg focus:text-fg"
              key={item.slug}
              href={item.slug}
            >
              {item.title}
            </ListBoxItem>
          ))}
        </ListBoxSection>
      ))}
    </ListBox>
  )
}
