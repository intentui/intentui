"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { IconBrandTwitter } from "@intentui/icons"

export default function ButtonSizeDemo() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-wrap items-end gap-2">
        <Button size="xs">Label</Button>
        <Button size="sm">Label</Button>
        <Button>Label</Button>
        <Button size="lg">Label</Button>
      </div>
      <Separator />
      <div className="flex flex-wrap items-end gap-2">
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
    </div>
  )
}
