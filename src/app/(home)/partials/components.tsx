"use client"
import { Header, ListBox, ListBoxItem, ListBoxSection } from "react-aria-components"
import { PageContainer } from "@/components/page-container"
import { buttonStyles } from "@/components/ui/button"
import { CardHeader } from "@/components/ui/card"
import { Link } from "@/components/ui/link"
import menus from "@/components-search.json"
import type { Component } from "@/types/search"

const components = menus[3] as Component
export function Components() {
  return (
    <div className="border-t bg-linear-to-b from-secondary/20 py-6 sm:py-12">
      <PageContainer className="mask-b-from-80% sm:mask-b-from-70% max-h-120 sm:max-h-140">
        <CardHeader
          className="mb-6 max-w-lg"
          title="Components"
          description="Browse a complete set of UI components, built for flexibility and ready to drop into your project."
        />
        <ListBox
          aria-label="List components"
          className="columns-2 gap-6 pb-6 sm:pb-12 md:columns-3 lg:columns-4"
        >
          {components?.children?.slice(0, 8).map((item) => (
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
      </PageContainer>
      <div className="mt-5 flex items-center justify-center">
        <Link href="/components" className={buttonStyles({ intent: "secondary" })}>
          View all
        </Link>
      </div>
    </div>
  )
}
