'use client'

import { Avatar } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'

export default function SkeletonDemo() {
  return (
    <Skeleton isLoading>
      <div className="flex gap-2">
        <Avatar src="https://design.intentui.com/" alt="" />
        <div className="space-y-1">
          <div>Alex</div>
          <div>Lorem ipsum dolor sit.</div>
        </div>
      </div>
    </Skeleton>
  )
}
