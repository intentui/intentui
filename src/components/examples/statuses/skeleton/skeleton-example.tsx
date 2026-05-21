"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonDemo() {
  return (
    <Skeleton isLoading>
      <div className="flex gap-2">
        <img src="https://design.intentui.com/" alt="" className="size-10" />
        <div className="space-y-1">
          <div>Alex</div>
          <div>Lorem ipsum dolor sit.</div>
        </div>
      </div>
    </Skeleton>
  )
}
