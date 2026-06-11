"use client"
import { PageContainer } from "@/components/page-container"
import { CardHeader } from "@/components/ui/card"
import { Link } from "@/components/ui/link"
import menus from "@/components-search.json"
import type { Component } from "@/types/search"

const components = menus[3] as Component
export function Components() {
  return (
    <>
      <div className="border-page border-b">
        <PageContainer>
          <div className="border-page py-6 sm:border-x sm:p-6">
            <CardHeader
              className="max-w-lg"
              title="Components"
              description="Browse a complete set of UI components, built for flexibility and ready to drop into your project."
            />
          </div>
        </PageContainer>
      </div>
      <PageContainer>
        <div className="border-page py-6 sm:border-x sm:p-6">
          <div className="mask-b-from-80% sm:mask-b-from-80% max-h-120 sm:max-h-140">
            <div className="columns-2 gap-6 md:columns-3 lg:columns-4">
              {components?.children?.slice(1, 20).map((item) => (
                <div
                  className="mb-12 flex break-inside-avoid flex-col gap-y-2"
                  key={item.subsection}
                >
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
          </div>
        </div>
      </PageContainer>
      <Link
        href="/components"
        className="group flex items-center justify-center border-page border-t text-xl"
      >
        <PageContainer className="w-full">
          <div className="w-full border-page border-x p-6 text-center group-hover:bg-muted">
            View all
          </div>
        </PageContainer>
      </Link>
    </>
  )
}
