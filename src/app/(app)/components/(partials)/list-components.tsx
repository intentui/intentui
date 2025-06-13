"use client"

import menus from "@/components-search.json"
import type { ComponentProps } from "@/components/aside"
import { Header, ListBox, ListBoxItem, ListBoxSection } from "react-aria-components"
const components = menus[3] as ComponentProps
export function ListComponents() {
  return (
    <ListBox
      aria-label="List components"
      className="columns-1 gap-6 pb-6 sm:columns-2 sm:pb-12 lg:columns-4"
    >
      {components?.children?.map((item) => (
        <ListBoxSection
          className="mb-6 flex break-inside-avoid flex-col gap-y-2 rounded-2xl bg-zinc-500/10 p-6 dark:bg-zinc-700/30"
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
