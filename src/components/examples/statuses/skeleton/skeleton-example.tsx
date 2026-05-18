"use client"

import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonDemo() {
  return (
    <Card className="p-4">
      <div className="flex gap-2">
        <Skeleton className="size-6" />
        <div className="space-y-1">
          <Skeleton className="h-3 w-56" />
          <Skeleton className="h-3 w-10" />
        </div>
      </div>
    </Card>
  )
}
