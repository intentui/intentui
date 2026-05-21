"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { Strong, Text } from "@/components/ui/text"

export default function SkeletonDynamicContentExample() {
  return (
    <Skeleton isLoading>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {Array.from({ length: 6 }, (_, index) => (
          <a href="#" key={index}>
            <img
              className="aspect-video w-full rounded-lg"
              src="https://design.intentui.com/images/blocks/blog/blog-min.jpg"
              alt={`Item ${index}`}
            />
            <div className="mt-2">
              <Strong>Lorem ipsum dolor.</Strong>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, ut!</Text>
            </div>
          </a>
        ))}
      </div>
    </Skeleton>
  )
}
