"use client"

import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonShapeDemo() {
  return (
    <Card className="p-4">
      <div className="flex gap-2 *:data-[slot=skeleton]:rounded-full">
        <Skeleton className="size-8" />
        <div className="space-y-1">
          <Skeleton className="h-4 w-56" />
          <Skeleton className="h-4 w-10" />
        </div>
      </div>
    </Card>
  )
}
