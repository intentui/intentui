import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonAnatomy() {
  return (
    <Card className="p-4">
      <div className="flex gap-2">
        <Skeleton className="size-8" />
        <div className="space-y-1">
          <Skeleton className="h-4 w-56" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
    </Card>
  )
}
