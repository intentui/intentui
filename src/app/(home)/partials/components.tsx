"use client"

import { ListComponents } from "@/app/(app)/components/(partials)/list-components"
import { PageContainer } from "@/components/page-container"
import { buttonStyles } from "@/components/ui/button"
import { CardHeader } from "@/components/ui/card"
import { Link } from "@/components/ui/link"

export function Components() {
  return (
    <div className="border-t bg-linear-to-b from-secondary/20 py-6 sm:py-12">
      <PageContainer className="mask-b-from-80% sm:mask-b-from-100% max-h-120 sm:max-h-none">
        <CardHeader
          className="mb-6 max-w-lg"
          title="Components"
          description="Browse a complete set of UI components, built for flexibility and ready to drop into your project."
        />
        <ListComponents />
      </PageContainer>
      <div className="mt-5 flex items-center justify-center sm:hidden">
        <Link className={buttonStyles({ intent: "secondary" })}>View all</Link>
      </div>
    </div>
  )
}
