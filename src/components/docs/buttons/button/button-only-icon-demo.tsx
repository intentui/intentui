"use client"

import { Button } from "@/components/ui/button"
import { IconBrandTwitter } from "@intentui/icons"

export default function ButtonOnlyIconDemo() {
  return (
    <div className="flex items-center gap-2">
      <Button size="sq-xs">
        <IconBrandTwitter />
      </Button>
      <Button size="sq-sm">
        <IconBrandTwitter />
      </Button>
      <Button size="sq-md">
        <IconBrandTwitter />
      </Button>
      <Button size="sq-lg">
        <IconBrandTwitter />
      </Button>
    </div>
  )
}
