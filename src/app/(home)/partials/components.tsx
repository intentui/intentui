"use client"
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
        <div className="columns-2 gap-6 pb-6 sm:pb-12 md:columns-3 lg:columns-4">
          {components?.children?.map((item) => (
            <div className="mb-12 flex break-inside-avoid flex-col gap-y-2" key={item.subsection}>
              <h3 className="font-semibold text-fg text-sm">{item?.subsection}</h3>
              <ul>
                {item?.children?.map((item) => (
                  <li key={item.slug}>
                    <Link
                      className="block py-2 text-muted-fg text-sm hover:text-fg focus:text-fg"
                      href={item.slug}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageContainer>
      <div className="mt-5 flex items-center justify-center">
        <Link href="/components" className={buttonStyles({ intent: "secondary" })}>
          View all
        </Link>
      </div>
    </div>
  )
}
